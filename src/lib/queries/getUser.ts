import { db } from "@/db";
import { user as userDB } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUser(id: number) {
  const user = await db
                          .select()
                          .from(userDB)
                          .where(eq(userDB.id, id));
    return user[0]
}
