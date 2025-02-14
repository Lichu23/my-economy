import BackButton from "@/components/ui/BackButton";
import { getBills } from "@/lib/queries/getBills";
import { getUser } from "@/lib/queries/getUser";
import BillsForm from "./components/BillsForm";

export default async function BillsFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { userId, billId } = await searchParams;

    if (!userId && !billId) {
      return (
        <>
          <h2>Bill ID or User ID required to load bill form</h2>
          <BackButton title="Back" variant="default" />
        </>
      );
    }

    if (userId) {
      const user = await getUser(parseInt(userId));
      if (!user) {
        return (
          <>
            <h2>User ID #{userId} not found</h2>
            <BackButton title="Back" variant="default" />
          </>
        );
      }
      console.log(user);

      return <BillsForm user={user}/>
    }

    //Edit bill form
    if (billId) {
      const bill = await getBills(parseInt(billId));
      if (!bill) {
        return (
          <>
            <h2>Bill ID #{billId} not found</h2>
            <BackButton title="Back" variant="default" />
          </>
        );
      }

      const user = await getUser(bill.userId);

      //return edit bill form
      console.log(user);
      return <BillsForm user={user} bill={bill}/>

    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
