import { getUserByEmail } from "@/services/user/userService";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



export async function getAuthenticatedUser() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) {
    return { error: "User not found" };
  }

  const dbUser = await getUserByEmail(user.email);

  if (!dbUser) {
    return { error: "User not registered" };
  }

  return { error: null, user: dbUser };
}
