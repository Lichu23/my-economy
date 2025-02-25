import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { personalExpenses } from "@/constants/PersonalExpenses";
import React from "react";

type Props = {
  onChange: (value: string | null) => void;
};

export default function SelectFilter({ onChange }: Props) {
  return (
    <Select onValueChange={(value) => onChange(value)} defaultValue="all">
      <SelectTrigger className="w-[180px] rounded-xl font-semibold">
        <SelectValue placeholder="Choose Type" />
      </SelectTrigger>

      <SelectContent className="border hover:bg-slate-200 font-semibold">
        <SelectItem value="all">All</SelectItem> {/* Opción para mostrar todos */}
        {personalExpenses.map((typeBill) => (
          <SelectItem
            className="bg-white"
            value={typeBill.name}
            key={typeBill.id}
          >
            {typeBill.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
