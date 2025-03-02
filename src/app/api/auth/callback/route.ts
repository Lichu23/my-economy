import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  console.log("🚀 Callback ejecutado"); // 👈 Verificar si esta función corre

  try {
    // Obtener la sesión del usuario autenticado en Kinde
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();
    console.log("🔍 Usuario desde Kinde:", kindeUser);


    if (!kindeUser || !kindeUser.email) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await db
      .select()
      .from(user)
      .where(eq(user.email, kindeUser.email))
      .limit(1);

    if (existingUser.length === 0) {
      // Insertar nuevo usuario en la base de datos
      await db.insert(user).values({
        firstName: kindeUser.given_name ?? "NoName",
        lastName: kindeUser.family_name ?? "NoLastName",
        email: kindeUser.email,
      });
    }

    return NextResponse.redirect("/");
  } catch (error) {
    console.error("Error handling login:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
