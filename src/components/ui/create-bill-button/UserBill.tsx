import { getAuthenticatedUser } from "@/utils/getAuthKindeUser";
import CreateBillButton from "./CreateBillButton";

export default async function CreateBill() {
 const {user, error} = await getAuthenticatedUser()
   
   if (error || !user) {
     return <p className="text-center mt-10 text-red-500 font-bold text-xl">{error ?? "Unexpected error"}</p>;
   }
 

  return <CreateBillButton userId={user.id} />;
}
