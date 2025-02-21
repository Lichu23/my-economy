import { Input } from "@/components/ui/input";
import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

type Props = {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  error?: FieldError;
};

export default function CustomInput({
  name,
  control,
  label,
  type,
  error,
}: Props) {
  return (
  <div>
    <label htmlFor={name}>{label}</label>
    <Controller
        name={name}
        control={control}
        render={({field}) => 
        <Input id={name} type={type} {...field} className={`${error?.message} ? border-red-400 : "`} />
        }
    />
    {error?.message && <p className="error">{error.message}</p>}
  </div>
)
}
