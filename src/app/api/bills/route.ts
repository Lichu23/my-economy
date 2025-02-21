import { db } from "@/db";
import { bills } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
      const body = await req.json();

      // Excluir id antes de insertar
      const { id, ...newBillData } = body;

    // Insertar en la base de datos sin el id

      console.log(newBillData)
  
      const newBill = await db.insert(bills).values(newBillData).returning();
  
      return NextResponse.json({ message: "Bill created", bill: newBill[0] }, { status: 201 });
    } catch (error) {
      console.error("Error creating bill:", error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  }