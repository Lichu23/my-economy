import React from "react";
import { Nav } from "./NavLinks";


export default function Navbar() {
  return (
    <header className="sticky bg-black text-white flex justify-end  items-center h-10">
        <Nav/>
    </header>
  );
}
