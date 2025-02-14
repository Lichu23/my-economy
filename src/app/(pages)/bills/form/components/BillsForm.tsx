"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  insertBillSchema,
  type insertBillSchemaType,
  type selectBillSchemaType,
} from "@/zod-schemas/bill";
import { selectUserSchemaType } from "@/zod-schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type BillFormProps = {
  user: selectUserSchemaType;
  bill?: selectBillSchemaType;
};

export default function BillsForm({ user, bill }: BillFormProps) {
  const defaultValues: insertBillSchemaType = {
    id: bill?.id ?? "(New)",
    userId: bill?.userId ?? user.id,
    title: bill?.title ?? "",
    titleBill: bill?.titleBill ?? "",
    billValue: bill?.billValue ?? "",
  };

  const form = useForm<insertBillSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertBillSchema),
    defaultValues,
  });

  async function submitForm(data: insertBillSchemaType) {
    console.log(data);
  }
  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {bill?.id ? "Edit" : "Create"} Bill {bill?.id ? `# ${bill?.id}` : "Form"}
        </h2>
      </div>

      <Form {...form}>
        <form
          className="flex flex-col sm:flex-row gap-4 sm:gap-8"
          onSubmit={form.handleSubmit(submitForm)}
        >
          <div className="flex flex-col">
            <p className=" text-center mt-24">
              {JSON.stringify(form.getValues())}
            </p>
            {bill?.id ? (
              <Button type="submit">Update</Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
