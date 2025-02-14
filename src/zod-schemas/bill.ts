import { bills } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const insertBillSchema = createInsertSchema(bills, {
    id: z.union([z.number(), z.literal("(New)")]),
    title: (schema) => schema.min(1, "title is required"),
    titleBill: (schema) => schema.min(1, "title is required"),
    billValue: (schema) => schema.min(1, "value is required"),
});

export const selectBillSchema = createSelectSchema(bills)

export type insertBillSchemaType = typeof insertBillSchema._type //that's referencing the type from the zod schema so we still need type of here as well

export type selectBillSchemaType = typeof selectBillSchema._type