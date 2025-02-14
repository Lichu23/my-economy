"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  insertUserSchema,
  type insertUserSchemaType,
  type selectUserSchemaType,
} from "@/zod-schemas/user";
import { useForm } from "react-hook-form";

type UserFormProps = {
  user?: selectUserSchemaType;
};

export default function UserForm({ user }: UserFormProps) {
  const defaultValues: insertUserSchemaType = {
    id: user?.id ?? 0,
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    bills: user?.bills ?? "",
  };

  const form = useForm<insertUserSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertUserSchema),
    defaultValues,
  });

  async function submitForm(data: insertUserSchemaType) {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {user?.id ? "Edit" : "New"} User Form
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
          {user?.id ? (
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
