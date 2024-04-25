// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const NavLinks = [
// 	{ id: 1, name: 'Home', path: '/' },
// 	{ id: 2, name: 'Blog', path: '/blog' },
// ];

// const Navbar = () => {
// 	const pathname = usePathname();
// 	const isActive = (path) => path === pathname;

// 	return (
// 		<nav>
// 			<div className="navbar">
// 				<Link href="/">
// 					<span className="logo">NextWp</span>
// 				</Link>
// 				<ul>
// 					{NavLinks.map((link) => {
// 						return (
// 							<li key={link.id}>
// 								<Link
// 									href={link.path}
// 									className={isActive(link.path) ? 'active' : ''}
// 								>
// 									{link.name}
// 								</Link>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;
// components/Header.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/svg/Logo.svg";
import menu from "../../public/svg/menu.svg";
import { FiMenu } from "react-icons/fi";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "About us", href: "/about-us" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Blogs", href: "blogs" },
  { label: "Support", href: "support" },
  { label: "ISE University", href: "ISE-university" },
];

const Navbar: React.FC = () => {
  const NavLinkComponent = ({ label, href }: NavLink) => (
    <Link
      href={href}
      className=" md:text-sm lg:text-base font-semibold text-black hover:text-blue-600"
    >
      {label}
    </Link>
  );

  return (
    <header className="flex justify-between items-center h-16 bg-white drop-shadow-lg py-2 px-6">
      <div className="flex  items-center">
        <Image src={logo} alt="ISE Logo" width={86} height={40} />
      </div>
      <div className="flex items-center justify-center">
        <nav className="hidden md:flex md:space-x-3 lg:space-x-4">
          {navLinks.map((link, index) => (
            <NavLinkComponent key={index} {...link} />
          ))}
        </nav>
        <span className=" md:flex hidden items-center text-black h-4  rounded-sm bg-[#eaedfb] px-[6px] py-1 text-[10px] ml-2 font-semibold ">
          Coming soon
        </span>
      </div>

      <div className="">
        {/* <button className="flex md:hidden text-black text-3xl">☰</button> */}
        <div className="text-xs flex md:hidden">
          {/* <FiMenu /> */}
          <Image src={menu} alt="menu" width={32} height={32} />
        </div>
        <button className="w-{106px} h-10 hidden md:flex bg-myblue-100  text-white py-2 md:mr-14 px-4 rounded t font-semibold">
          Go to App
        </button>
      </div>
    </header>
  );
};

export default Navbar;