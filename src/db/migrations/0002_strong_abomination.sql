ALTER TABLE "bills" ALTER COLUMN "title_bill" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "bills" ADD COLUMN "bill_value" text NOT NULL;