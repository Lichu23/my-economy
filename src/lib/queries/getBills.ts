import { db } from "@/db";
import { bills as billsDB } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getBills(id: number) {
  const bills = await db
                          .select()
                          .from(billsDB)
                          .where(eq(billsDB.id, id));
    return bills[0]
}
