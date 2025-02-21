import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CreateBillButton from "./CreateBillButton";
import { getUserByEmail } from "@/services/user/userService";

export default async function CreateBill() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser || !kindeUser.email) {
    return <p>User not authenticated</p>;
  }

  // Obtener usuario desde la base de datos con el email de Kinde
  const user = await getUserByEmail(kindeUser.email);

  if (!user || !user.id) {
    return <p>User not found in the database</p>;
  }

  return <CreateBillButton userId={user.id} />;
}
