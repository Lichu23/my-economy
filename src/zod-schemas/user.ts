import { user } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const insertUserSchema = createInsertSchema(user, {
  firstName: (schema) => schema.min(1, "First Name is required"),
  lastName: (schema) => schema.min(1, "Last Name is required"),
  email: (schema) => schema.email("Invalid email address"),
  bills: (schema) => schema.min(1,"Is required"),
});

export const selectUserSchema = createSelectSchema(user)

//that's referencing the type from the zod schema so we still need type of here as well
export type insertUserSchemaType = typeof insertUserSchema._type 

export type selectUserSchemaType = typeof selectUserSchema._type