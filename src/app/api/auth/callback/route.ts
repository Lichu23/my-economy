import { db } from "@/db";
import { user } from "@/db/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Obtener sesión del usuario
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();

    if (!kindeUser || !kindeUser.id) {
      return NextResponse.json(
        { error: "Usuario no autenticado" },
        { status: 401 }
      );
    }

    const firstName = kindeUser.given_name || "";
    const lastName = kindeUser.family_name || "";
    const email = kindeUser.email || "";

    if (!email) {
      return NextResponse.json(
        { error: "El usuario no tiene un email válido" },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    const existingUser = await db.query.user.findFirst({
      where: eq(user.email, email),
    });

    if (existingUser) {
      return NextResponse.json({
        message: "Usuario ya existe",
        user: existingUser,
      });
    }

    // Insertar nuevo usuario
    const [newUser] = await db
      .insert(user)
      .values({
        firstName,
        lastName,
        email,
      })
      .returning();

    return NextResponse.json({ message: "Usuario creado", user: newUser });
  
  } catch (error: any) {
    console.error("Error al manejar el usuario:", error);

    if (error.code === "23505") {
      return NextResponse.json(
        { error: "El usuario ya existe en la base de datos" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
