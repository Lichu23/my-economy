import { db } from "@/db";
import { user } from "@/db/schema";
import { insertUserSchemaType } from "@/zod-schemas/user";
import { eq } from "drizzle-orm";

export async function createUser(newUser: insertUserSchemaType) {
  try {
    const result = await db.insert(user).values(newUser).returning();
    return result;
  } catch (error) {
    console.log("Error inserting user", error);
    throw new Error("Failed to create user");
  }
}

export async function getUserByEmail(email: string) {
  try {
    const result = await db.select().from(user).where(eq(user.email, email));

    return result[0] || null; // Retorna el primer usuario encontrado o null si no existe
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Failed to fetch user by email");
  }
}
