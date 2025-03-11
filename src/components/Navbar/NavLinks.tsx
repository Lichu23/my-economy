import { getAuthenticatedUser } from "@/utils/getAuthKindeUser";
import Link from "next/link";
import CustomButton from "../ui/custom-button/CustomButton";

const NavLinks = async () => {
  const { user } = await getAuthenticatedUser();

  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/create-bill">Create</Link>
      {user ? (
        <CustomButton
          href="/api/auth/logout"
          title="Log out"
        />
      ) : (
        <CustomButton
        href="/api/auth/login"
        title="Login"
      />
      )}
    </>
  );
};

export const Nav = () => {
  return (
    <nav className="flex gap-20">
      <NavLinks />
    </nav>
  );
};
