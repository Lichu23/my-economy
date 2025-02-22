"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  userId: number;
};

export default function CreateBillButton({ userId }: Props) {
  const router = useRouter();

  const handleCreateBill = () => {
    router.push(`/create-bill/${userId}`);
  };

  return <Button className="rounded-xl shadow-lg hover:bg-black hover:text-white"  size="default" onClick={handleCreateBill}>Create Bill</Button>;
}
