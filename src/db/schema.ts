import { relations } from "drizzle-orm";
import {
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  varchar
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const bills = pgTable("bills", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => user.id),
  titleBill: text("title_bill").notNull(),
  billValue: text("bill_value").notNull(),
  billType: varchar("bill_type").notNull().default("other"), 
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});


//create relations
//user can have many bills
export const userRelations = relations(user, 
    ({many}) => ({
        bills: many(bills)
    })
)

//bills can have one user
export const billsRelations = relations(bills, 
    ({one}) => ({
        user: one(user, {
            fields: [bills.userId],
            references: [user.id],
        })
    })
)