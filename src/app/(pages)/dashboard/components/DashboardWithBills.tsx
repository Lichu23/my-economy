import { getBills } from "@/lib/queries/getBills";
import { getAuthenticatedUser } from "@/utils/getAuthKindeUser";
import ClientDashboard from "./ClientDashboard";

export default async function DashboardWithBills() {
  const { user, error } = await getAuthenticatedUser();

  if (error || !user) {
    return (
      <p className="text-center mt-10 text-red-500 font-bold text-xl">
        {error ?? "Unexpected error"}
      </p>
    );
  }

  const bills = await getBills(user.id);

  if (bills.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No bills found</p>;
  }

  return (
    <ClientDashboard  bills={bills}/>
  );
}
