import { db } from "@/db";
import { bills, user } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserBills(userId: number) {
    try {
      const userBills = await db.select().from(bills).where(eq(bills.userId, userId));
      return userBills  
    }  catch (error) {
        console.log("Error getting user bills", error);
        throw new Error("Failed to get bills");
      }
  }