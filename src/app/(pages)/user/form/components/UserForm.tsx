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
import { InputWithLabel } from "@/components/ui/inputs/InputWithLabel";
import { SelectWithLabel } from "@/components/ui/inputs/SelectWithLabel";
import { countries } from "@/constants/PersonalExpenses";
import { createUser } from "@/services/user/userService";

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

  const  submitForm = async (data: insertUserSchemaType) => {
    try {
    console.log(data);
      const response = await createUser(data);
      console.log("User created:", response);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create user.");
    }
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
          className="flex flex-col md:flex-row gap-4 md:gap-8"
          onSubmit={form.handleSubmit(submitForm)}
        >
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabel<insertUserSchemaType>
              fieldTitle="First Name"
              nameInSchema="firstName"

            />
            <InputWithLabel<insertUserSchemaType>
              fieldTitle="Last Name"
              nameInSchema="lastName"
            />

            <InputWithLabel<insertUserSchemaType>
              fieldTitle="Email"
              nameInSchema="email"
            />

            <p className=" text-center mt-24">
              {JSON.stringify(form.watch(), null, 2)}
            </p>

            {user?.id ? (
              <>
                <Button type="submit">Update</Button>
                <Button onClick={() => form.reset()} type="button">
                  Reset
                </Button>
              </>
            ) : (
              <>
                <Button type="submit">Submit</Button>
                <Button onClick={() => form.reset()} type="button">
                  Reset
                </Button>
              </>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
