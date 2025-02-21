"use client";
import { Form, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputHTMLAttributes } from "react"; //pasar mas props a este componente

type DataObj = {
  id: string;
  name: string;
};

type SelectProps<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  data: DataObj[];
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function SelectWithLabel<S>({
  fieldTitle,
  nameInSchema,
  data,
  className,
}: SelectProps<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">{fieldTitle}</FormLabel>
          
          <Select {...field} onValueChange={field.onChange}>
            
            <FormControl>

              <SelectTrigger
                id={nameInSchema}
                className={`w-full max-w-xs ${className}`}
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>

              <SelectContent>
                {data.map(country => (
                    <SelectItem key={`${nameInSchema}_${country.id}`}
                    value={country.id}>
                        {country.name}
                    </SelectItem>
                ))}
              </SelectContent>

            </FormControl>
          </Select>

          <FormMessage />

        </FormItem>
      )}
    />
  );
}


export const HowToUse = () => {
    {/* <div className="flex flex-col gap-4 w-full max-w-xs">
              <SelectWithLabel<insertUserSchemaType>
                fieldTitle="Country"
                nameInSchema="bills"
                data={countries}
              />
            </div> */}
}