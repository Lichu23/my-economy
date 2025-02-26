"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import SelectFilter from "./SelectFilter";
import { Loader2 } from "lucide-react";

type Bill = {
  id: number;
  titleBill: string;
  billValue: string;
  billType: string;
};

type Props = {
  bills: Bill[];
};
export default function ClientDashboard({ bills }: Props) {
  const [filter, setFilter] = useState<string | null>("all");
  const [localBills, setLocalBills] = useState<Bill[]>(bills);
  const [isLoading, setIsLoading] = useState(false);

  const deleteBill = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/delete-bill/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete bill");
      }

      setLocalBills((prevBills) => prevBills.filter((bill) => bill.id !== id));
      setIsLoading(false);

      toast("Bill deleted successfully", {
        progress: undefined,
        hideProgressBar: false,
        position: "top-right",
        theme: "light",
        type: "success",
      });
    } catch (error) {
      console.error("Error deleting bill:", error);
      setIsLoading(false);
      toast("Error deleting bill", {
        progress: undefined,
        hideProgressBar: false,
        position: "top-right",
        theme: "light",
        type: "error",
      });
      throw new Error("Error deleting bill", error!);
    }
  };

  const filteredBills =
    filter === "all"
      ? localBills
      : localBills.filter((bill) => bill.billType === filter);

  return (
    <div className="flex flex-col gap-5 p-5">
      <SelectFilter onChange={setFilter} />
      {filteredBills.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">No bills found</p>
      ) : (
        <div className="flex flex-col lg:flex-row md:gap-10 gap-y-2">
          {filteredBills.map((bill) => (
            <ul
              className="flex flex-col rounded-xl border p-5 gap-y-2"
              key={bill.id}
            >
              <p>{bill.titleBill}</p>
              <p>${bill.billValue}</p>
              <p className="text-orange-500">{bill.billType}</p>
              <div className="flex gap-2 justify-between">
                <Button
                  className="bg-sky-600 hover:bg-sky-500 text-white rounded-xl"
                  type="submit"
                >
                  Edit
                </Button>

                {isLoading ? (
                  <Button disabled>Delete</Button>
                ) : (
                  <Button
                    onClick={() => deleteBill(bill.id)}
                    className="bg-red-600 hover:bg-red-500 text-white rounded-xl"
                    type="submit"
                  >
                    Delete
                  </Button>
                )}
              </div>
            </ul>
          ))}
        </div>
      )}
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        theme="light"
      />
    </div>
  );
}
