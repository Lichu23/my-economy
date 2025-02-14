"use client"
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "ghost"
    | "destructive"
    | "outline"
    | "secondary"
    | "link"
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BackButton({
  title,
  variant,
  className,
  ...props
}: ButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant={variant}
      title={title}
      className={className}
      onClick={() => router.back()}
    >{title}</Button>
  );
}
