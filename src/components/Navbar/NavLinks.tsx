import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "../ui/button";

const NavLinks = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/create-bill">Create</Link>

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
