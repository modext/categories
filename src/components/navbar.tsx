"use client" 
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { MobileNav } from "./mobileNav";

type NavLink = {
  label: string;
  href: string;
  inset?: string;
};

export const navLinks: NavLink[] = [
  { label: "About us", href: "/about-us" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Blogs", href: "/blog" },
  { label: "Support", href: "support" },
  { label: "ISE University", href: "ISE-university", inset:"Coming soon" },
];

const NavLinkComponent = ({ label, href }: NavLink) => (
  <Link
    href={href}
    className=" md:text-sm lg:text-base font-semibold text-black hover:text-blue-600"
  >
    {label}
  </Link>
);

const Navbar: React.FC = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setIsProfileMenuOpen(false);
  };
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };


  return (
    <header className="flex justify-between items-center h-16 border-b  border-gray-200 bg-white md:drop-shadow-lg py-2 px-6 lg:px-[78px]">
      <Link href={"/"} className=" ">
        <div className="flex  items-center">
          <Image src="/svg/Logo.svg" alt="ISE Logo" width={86} height={40} />
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <nav className="hidden md:flex md:space-x-3 lg:space-x-12">
          {navLinks.map((link, index) => (
            <NavLinkComponent key={index} {...link} />
          ))}
        </nav>
        <span className=" md:flex hidden items-center text-black h-4  rounded-sm bg-[#eaedfb] px-[6px] py-1 text-[10px] ml-2 font-semibold ">
          Coming soon
        </span>
      </div>

      <div className="">
        <div className="text-xs flex md:hidden" onClick={toggleProfileMenu}>
          <Image src="/svg/menu.svg" alt="menu" width={32} height={32} />
        </div>

        <Link href={`/`} scroll={false}>
          <PrimaryButton
            className="w-{106px} h-10 hidden md:flex bg-myblue-100  text-white py-2  px-4 rounded t font-semibold"
            title="Go to App"
          />
        </Link>
      </div>
      {isProfileMenuOpen && (
        <MobileNav onMenuItemClick={handleMenuItemClick} toggleProfileMenu= {toggleProfileMenu} />
      )}
    </header>
  );
};

export default Navbar;
