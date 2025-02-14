import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <Link href="/user/form?userId=2">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/create">Create</Link>
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
