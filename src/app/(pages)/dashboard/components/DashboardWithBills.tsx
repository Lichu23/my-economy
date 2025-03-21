import { getAuthenticatedUser } from "@/utils/getAuthKindeUser";
import ClientDashboard from "./ClientDashboard";
import { BillsChart } from "./BillsChart";
import { getBills } from "@/lib/queries/getBills";

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

  const totalBillsAmount = bills.reduce((acc, bill) => acc + parseFloat(bill.billValue) || 0 , 0)

  const groupedBills = bills.reduce((acc, bill) => {
    const billValue = parseFloat(bill.billValue) || 0;
    acc[bill.billType] = (acc[bill.billType] || 0) + billValue
    return acc
  }, {} as Record<string,number>)

  const chartData = Object.keys(groupedBills).map((billType) => ({
    
    billType,
    billTotal: groupedBills[billType]
  }))

  return (
    <div className="flex justify-center mt-10 md:items-start items-center max-md:flex-col">
      <BillsChart chartData={chartData} totalBillsAmount={totalBillsAmount}/>
      <ClientDashboard bills={bills} />
    </div>
  );
}
