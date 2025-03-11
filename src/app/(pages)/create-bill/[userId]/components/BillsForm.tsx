"use client";

import { Button } from "@/components/ui/button";
import {
  insertBillSchema,
  type insertBillSchemaType,
  type selectBillSchemaType,
} from "@/zod-schemas/bill";
import { selectUserSchemaType } from "@/zod-schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import InputBills from "./InputBIlls";
import SelectBillType from "./SelectBillType";
import { useRouter } from "next/navigation";

type BillFormProps = {
  user: selectUserSchemaType;
  bill?: selectBillSchemaType;
};

export default function BillsForm({ user, bill }: BillFormProps) {
  const [isSuccess, setIsSucces] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const defaultValues: insertBillSchemaType = {
    id: bill?.id ?? undefined,
    userId: bill?.userId ?? user.id,
    titleBill: bill?.titleBill ?? "",
    billValue: bill?.billValue ?? "",
    billType: bill?.billType ?? "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<insertBillSchemaType, "id">>({
    mode: "onBlur",
    resolver: zodResolver(insertBillSchema),
    defaultValues,
  });

  async function onSubmit(data: insertBillSchemaType) {
    setIsLoading(true);

    try {
      const id = data.id;

      const url = id ? `/api/edit-bill/${id}` : "/api/create-bill";
      const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error creating bill");
      }

      setIsLoading(false);

      // Mostrar toast de éxito después de que el bill se haya creado correctamente
      toast(id ? "Bill updated successfully" : "Bill created successfully", {
        type: "success",
      });

      setIsSucces(true);

      if (url ? router.push("/dashboard") : "") 
        
      setIsSucces(false);

      reset();
    } catch (error) {
      console.error("Error:", error);

      toast("Something is wrong creating bill", {
        type: "error",
      });
    }
  }

  return (
    <div className="flex flex-col items-center mt-10 gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {bill?.id ? "Edit" : "Create new"} Expense{" "}
          {bill?.id ? `# ${bill?.id}` : ""}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[400px] h-full">
        <div className="flex flex-col justify-start  gap-5">
          <InputBills
            name="titleBill"
            control={control}
            label="Title Expense"
            type="text"
            error={errors.titleBill}
          />
          <InputBills
            name="billValue"
            control={control}
            label="Expense Value"
            type="text"
            error={errors.billValue}
          />
          <SelectBillType control={control} />
          {isLoading ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button className="rounded-xl text-base font-semibold bg-black text-white hover:bg-white hover:text-black" variant="outline" type="submit">
              Submit
            </Button>
          )}{" "}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
