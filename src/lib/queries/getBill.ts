import { db } from "@/db";
import { bills as billsDB } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getBill(id: number) {
  try {
    const bill = await db
    .select()
    .from(billsDB)
    .where(eq(billsDB.id, id))
    .limit(1)

    return bill.length > 0 ? bill[0] : null; // Devolver un solo bill
  } catch (error) {
    console.error("Error fetching bills:", error);
    throw new Error("Failed to fetch bills");
  }
}
