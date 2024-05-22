import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./navbar";
import { PrimaryButton } from "./Buttons/PrimaryButton";

interface MobileNavProps {
  onMenuItemClick: () => void;
  toggleProfileMenu: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  onMenuItemClick,
  toggleProfileMenu,
}) => {
  return (
    <div className="bg-black bg-opacity-50 fixed inset-0 w-full  z-10">
      <div className="absolute   right-0 top-0  bg-white   w-3/4 h-full   flex flex-col z-10 ">
        <div className="px-4 py-2 md:items-center ">
          <div className="flex justify-between mb-12 ">
            <Link href={"/"} className=" ">
              <div className="flex  items-center">
                <Image
                  src="/svg/Logo.svg"
                  alt="ISE Logo"
                  width={86}
                  height={40}
                />
              </div>
            </Link>
            <div
              className="text-xs flex md:hidden pr-2"
              onClick={toggleProfileMenu}
            >
              <Image src="/svg/x-close.svg" alt="menu" width={32} height={32} />
            </div>
          </div>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex text-lg font-semibold px-4 py-5 text-bneutral-300 hover:bg-gray-100 rounded-sm border-b  border-gray-200 items-center"
              onClick={onMenuItemClick}
            >
              {link.label}{" "}
              {link.inset && (
                <span className="flex  items-center text-black h-4  rounded-sm bg-[#eaedfb] px-[6px] py-1 text-[10px] ml-2 font-semibold ">
                  {link.inset}
                </span>
              )}
            </Link>
          ))}
          <Link href={`https://app.influencerstockexchange.com`} scroll={false}>
            <PrimaryButton
              className="w-full h-10 md:flex bg-myblue-100  text-white py-2  px-4 rounded mt-[88px] font-semibold"
              title="Go to App"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
