import { db } from "@/db";
import { bills as billsDB } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getBills(id: number) {
  try {
    const bills = await db.select().from(billsDB).where(eq(billsDB.userId, id));

    return bills;
  } catch (error) {
    console.error("Error fetching bills:", error);
    throw new Error("Failed to fetch bills");
  }
}
