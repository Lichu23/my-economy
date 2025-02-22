import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "../ui/button";
import { getAuthenticatedUser } from "@/utils/getAuthKindeUser";

const NavLinks = async () => {
  const { user } = await getAuthenticatedUser();

  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/create-bill">Create</Link>

      {user ? (
        <Button
          variant="ghost"
          size="default"
          aria-label="LogOut"
          title="LogOut"
          className="rounded-full"
          asChild
        >
          <LogoutLink>Logout</LogoutLink>
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="default"
          aria-label="LogOut"
          title="LogOut"
          className="rounded-full"
          asChild
        >
          <LoginLink>Login</LoginLink>
        </Button>
      )}
    </>
  );
};

export const Nav = () => {
  return (
    <nav className="flex gap-20 pr-20">
      <NavLinks />
    </nav>
  );
};
