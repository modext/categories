import Image from "next/image";
import React, { useState } from "react";

const HiScreen: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="">
      <div className="flex items-center mb-3">
        <span className=" text-[40px] font-semibold mr-2">Hi there 👋</span>
        
      </div>
      <p className="font-medium text-[20px] mb-8">What would you like to learn about ISE?</p>
      <div className="flex  flex-wrap  items-start space-x-2 gap-2  mb-5">
      <button className="border border-myblue-100 hover:border-myblue-20  font-medium text-[16px] text-myblue-100 px-4 py-2 rounded">
          How it works?
        </button>
        <button className="border border-myblue-100 hover:border-myblue-20  font-medium text-[16px] text-myblue-100 px-4 py-2 rounded">
          How do I get started?
        </button>
        <button className="border border-myblue-100 hover:border-myblue-20  font-medium text-[16px] text-myblue-100 px-4 py-2 rounded">
          What are the benefits?
        </button>
      </div>
      

      {/* <div className="text-xs flex items-center justify-center">
        <Image
          src="/svg/graph.svg"
          alt="menu"
          layout="fixed"
          width={272}
          height={170}
        />
      </div> */}
    </div>
  );
};

export default HiScreen;
