import { db } from "@/db";
import { bills } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, {params}: {params: {id:string}}) {
    try {
      const billId = parseInt(params.id, 10)
  
      if(isNaN(billId) ) {
        return NextResponse.json({ error: "Invalid bill ID" }, { status: 400 });
      }

      await db.delete(bills).where(eq(bills.id, billId))

      return NextResponse.json({ message: "Bill deleted" }, { status: 200 });
    } catch (error) {
      console.error("Error deleting bill:", error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  }