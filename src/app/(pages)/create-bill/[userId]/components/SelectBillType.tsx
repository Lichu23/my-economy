import { Control, Controller } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { personalExpenses } from "@/constants/PersonalExpenses";

type Props = {
  control: Control<any>;
};

export default function SelectBillType({ control }: Props) {
  return (
    <Controller
      name="billType"
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger className="w-[180px] rounded-xl font-semibold" >
            <SelectValue placeholder="Choose type" />
          </SelectTrigger>
          <SelectContent className="border   hover:bg-slate-200 font-semibold"  position="popper">
              {personalExpenses.map((typeBill) => (
                <SelectItem className="bg-white" value={typeBill.name} key={typeBill.id}>
                  {typeBill.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
