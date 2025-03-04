import BillsForm from "@/app/(pages)/create-bill/[userId]/components/BillsForm";
import BackButton from "@/components/ui/BackButton";
import { getBill } from "@/lib/queries/getBill";
import { getUser } from "@/lib/queries/getUser";

export default async function EditBillPage({ params }: { params: { id?: string } }) {
  const billId = params.id ? Number(params.id) : NaN;

  if (isNaN(billId)) {
    return (
      <>
        <h2>Invalid Bill ID</h2>
        <BackButton title="Back" variant="default" />
      </>
    );
  }

  const bill = await getBill(billId);

  if (!bill) {
    return (
      <>
        <h2>Bill ID #{billId} not found</h2>
        <BackButton title="Back" variant="default" />
      </>
    );
  }

  const user = await getUser(bill.userId)


  if (!user) {
    return (
      <>
        <h2>Bill ID #{billId} not found</h2>
        <BackButton title="Back" variant="default" />
      </>
    );
  }

  return <BillsForm user={user} bill={bill} />

}
