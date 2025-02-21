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

  return <Button onClick={handleCreateBill}>Create Bill</Button>;
}
