import { getUserBills } from "@/services/bills/billService";
import DashboardWithBills from "./components/Dashboard";
import DashboardWithoutBills from "./components/DashboardWithoutBills";
import { getAuthenticatedUser } from "@/utils/getAuthKindeUser";

export default async function Dashboard() {
  
  const {user, error} = await getAuthenticatedUser()
  
  if (error || !user) {
    return <p className="text-center mt-10 text-red-500 font-bold text-xl">{error ?? "Unexpected error"}</p>;
  }

  const bills = await getUserBills(user.id)

  if(bills.length === 0 ) return <DashboardWithoutBills />

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <DashboardWithBills />
    </div>
  );
}
