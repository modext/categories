// // components/Footer.tsx

// import React from 'react';
// import Image from 'next/image';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-white text-center border-t  border-gray-200 p-6">
//       <Image src="/logo.png" alt="ISE Logo" width={60} height={60} className="mx-auto" />
//       <p className="my-4">
//         The Influencer Stock Exchange (ISE) website, developed by InFluTrade Inc., serves as a pioneering marketplace where users can explore and engage in the world of influencer investment.
//       </p>
//       <div className="grid grid-cols-2 gap-4 my-4">
//         <div>
//           <h3 className="font-semibold">Product</h3>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">Investor</a>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">Influencer</a>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">Ekko AI</a>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">Blogs</a>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">ISE University</a>
//         </div>
//         <div>
//           <h3 className="font-semibold">Company</h3>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">About us</a>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">Contact us</a>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">Support</a>
//           <a href="#" className="block hover:text-blue-600 font-medium text-sm">Terms of Use</a>
//         </div>
//       </div>
//       <div className="my-4">
//         <p>+1 (201) 500-2007</p>
//         <p>hello@influencerstockexchange.com</p>
//       </div>
//       <div className="flex justify-center space-x-4 my-4">
//         {/* Icons or text for social media links */}
//         <a href="#" className="hover:text-blue-600 font-medium text-sm">Instagram</a>
//         <a href="#" className="hover:text-blue-600 font-medium text-sm">TikTok</a>
//         <a href="#" className="hover:text-blue-600 font-medium text-sm">LinkedIn</a>
//         <a href="#" className="hover:text-blue-600 font-medium text-sm">Twitter</a>
//       </div>
//       <div className="border-t pt-4">
//         © 2024 INFLUENCER STOCK EXCHANGE, Inc.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// components/Footer.tsx

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
            {/* List your product links here */}
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
            {/* List your company links here */}
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
        <span className="font-medium pt-4 text-sm">+1 (201) 500-2007</span>
        <p className=" md:ml-2 md:mr-4 lg:ml-6 lg:mr-10 pt-4 font-medium text-sm">
          hello@influencerstockexchange.com
        </p>
        <div className="pt-4 flex space-x-4">
          {/* Icons or text for social media links */}
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
            <Image src={linkedin} alt="linkedin Logo" width={16} height={16} />
          </a>
          <a href="#" className="hover:text-blue-600 font-medium text-sm">
            <Image src={twitter} alt="twitter Logo" width={16} height={16} />
          </a>
        </div>
        </div>
        <p className=" my-9 md:pt-3  font-medium text-mygray-100 text-sm">
          © 2024 INFLUENCER STOCK EXCHANGE, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
