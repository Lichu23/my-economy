import Logo from "./Logo/Logo";
import { Nav } from "./NavLinks";


export default function Navbar() {
  return (
    <header className="sticky w-full px-10 lg:px-20 bg-black text-white flex justify-between  items-center  h-18 sm:h-15">
        <Logo/>
        <Nav/>
    </header>
  );
}
