
import React from "react";
import Image from "next/image";
import logo from "../../public/svg/Logo.svg";
import linkedin from "../../public/svg/linkedin.svg";
import twitter from "../../public/svg/twitter.svg";
import instagram from "../../public/svg/instagram.svg";
import tiktok from "../../public/svg/tiktok.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-9 border-t  border-gray-200 px-5 md:px-12 lg:px-[82.5px]">
      <div className="md:flex  mb-10 justify-between">
        <div className="md:w-[398px]">
          <div>
            <Image src={logo} alt="ISE Logo" width={86} height={40} />
            <p className="text-mygray-100 my-7 font-medium text-xs">
              The Influencer Stock Exchange (ISE) website, developed by
              InFluTrade Inc., serves as a pioneering marketplace where users
              can explore and engage in the world of influencer investment.
            </p>
          </div>
        </div>
        <div className="flex space-x-36 md:space-x-4">
          <div className="flex flex-col md:w-44 lg:w-[223.56px] space-y-2">
            <h3 className="font-bold text-sm pb-6">Product</h3>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              Investor
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              Influencer
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              Ekko AI
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              Blogs
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              ISE University
            </a>
          </div>
          <div className="flex flex-col md:w-44 lg:w-[223.56px] space-y-2">
            <h3 className="font-bold text-sm pb-6">Company</h3>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              About us
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              Contact us
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              Support
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
      <div className="border-t  border-gray-200 pb-3"></div>
      <div className="justify-between md:flex items-center ">
        <div className="md:flex">
          <span className="font-medium pt-4 md:pt-1 text-sm">+1 (201) 500-2007</span>
          <p className=" md:ml-2 md:mr-4 lg:ml-6 lg:mr-10 pt-4 md:pt-1 font-medium text-sm">
            hello@influencerstockexchange.com
          </p>
          <div className="pt-4 md:pt-1 flex space-x-4">
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              <Image
                src={instagram}
                alt="instagram Logo"
                width={16}
                height={16}
              />
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              <Image src={tiktok} alt="tiktok Logo" width={16} height={16} />
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              <Image
                src={linkedin}
                alt="linkedin Logo"
                width={16}
                height={16}
              />
            </a>
            <a href="#" className="hover:text-blue-600 font-medium text-sm">
              <Image src={twitter} alt="twitter Logo" width={16} height={16} />
            </a>
          </div>
        </div>
        <p className=" py-9 md:py-0 font-medium text-mygray-100 text-sm">
          © 2024 INFLUENCER STOCK EXCHANGE, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
