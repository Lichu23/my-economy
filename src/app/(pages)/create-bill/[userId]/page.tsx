import BackButton from "@/components/ui/BackButton";
import { getUser } from "@/lib/queries/getUser";
import BillsForm from "./components/BillsForm";


export default async function BillsFormPage({
  params,
}: {
  params: { userId?: string };
}) {

  const userId = params.userId ? Number(params.userId) : NaN

  if (isNaN(userId)) {
    return (
      <>
        <h2>Invalid User ID</h2>
        <BackButton title="Back" variant="default" />
      </>
    );
  }

  // Obtener usuario desde la BD
  const user = await getUser(userId);
  if (!user) {
    return (
      <>
        <h2>User ID #{userId} not found</h2>
        <BackButton title="Back" variant="default" />
      </>
    );
  }

  return <BillsForm user={user} />;
}
