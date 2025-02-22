import CreateBill from "@/components/ui/create-bill-button/UserBill";
import React from "react";

export default function DashboardWithoutBills() {
  return (
    <div className="border border-black w-[250px] h-[100px] rounded-xl">
      <div className="flex flex-col justify-center gap-3 items-center size-full">
        <h1 className="text-center">Aun no tienes ningun bill</h1>
        <CreateBill />
      </div>
    </div>
  );
}
