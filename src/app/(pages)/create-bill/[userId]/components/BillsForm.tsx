"use client";
import {
  insertBillSchema,
  type insertBillSchemaType,
  type selectBillSchemaType,
} from "@/zod-schemas/bill";
import { selectUserSchemaType } from "@/zod-schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputBills from "./InputBIlls";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SelectBillType from "./SelectBillType";

type BillFormProps = {
  user: selectUserSchemaType;
  bill?: selectBillSchemaType;
};

export default function BillsForm({ user, bill }: BillFormProps) {
  const [isSuccess, setIsSucces] = useState(false);
  console.log(isSuccess);
  const { toast } = useToast();
  const defaultValues: Omit<insertBillSchemaType, "id"> = {
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
    try {
      const { id, ...billDataWithoutId } = data;

      const response = await fetch("/api/bills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(billDataWithoutId),
      });

      if (!response.ok) {
        throw new Error("Error creating bill");
      }

      const result = await response.json();

      // Mostrar toast de éxito después de que el bill se haya creado correctamente
      toast({
        title: "Bill created successfully",
        description: `Bill #${result.id} has been created.`,
      });

      setIsSucces(true);

      setTimeout(() => {
        setIsSucces(false);
      }, 2000);

      reset();

      console.log("Bill created:", result);
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "Error",
        description: "There was an issue creating the bill.",
      });
    }
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {bill?.id ? "Edit" : "Create"} Bill{" "}
          {bill?.id ? `# ${bill?.id}` : "Form"}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-start  gap-5">
          <InputBills
            name="titleBill"
            control={control}
            label="Title Bill"
            type="text"
            error={errors.titleBill}
          />
          <InputBills
            name="billValue"
            control={control}
            label="Bill Value"
            type="text"
            error={errors.billValue}
          />
          <SelectBillType control={control} />
          <Button variant="default" className="hover:bg-black hover:text-white rounded-xl" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
