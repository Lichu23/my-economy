"use client";
import { Form, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react"; //pasar mas props a este componente

type InputProps<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithLabel<S>({
  fieldTitle,
  nameInSchema,
  className,
  ...props
}: InputProps<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">{fieldTitle}</FormLabel>
          <FormControl>
            <Input
              id={nameInSchema}
              className={`w-full max-w-xs disabled:text-blue-500 dark:disabled:text-green-500 disabled:opacity-75  ${className}`}
              {...field}
              {...props}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
