import Image from "next/image";
import React from "react";

const InvestmentFeatures: React.FC = () => {
  return (
    <div className="bg-white p-4 md:px-[78px]">
      <div className="items-center justify-center">
        <div className="my-[38px] md:flex md:items-center md:justify-between md:gap-[82px]">
          <div className="md:w-1/2">
            <h2 className="text-[38px] md:max-w-[463.33px] font-medium leading-[42.4px] mb-[28px]">
              Transparent and Secure
            </h2>
            <p className=" text-xl font-medium  md:max-w-[544px] mb-[42px]">
              Rest assured knowing that our platform prioritizes transparency
              and security at every step of the investment process.
            </p>
          </div>
          <div
            className=" flex max-h-[371px] max-w-[622px] bg-no-repeat bg-center bg-cover  md:flex items-center justify-center  order-2 md:order-1 md:w-custom-lg md:h-custom-lg rounded-[10px]"
            style={{
              backgroundImage: "url('/svg/secImg.svg')",
            }}
          >
            <div className="text-xs mt-5 md:mt-0 flex items-center min-w-[289px] min-h-[165px] max-w-[420px] max-h-[270px] justify-center">
              <Image
                src="/png/chip.png"
                alt="menu"
                width={0}
                height={0}
                object-fit= "cover"             
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="my-[38px] md:flex justify-center items-center md:gap-[82px]">
          <div className="md:w-1/2  order-1 md:order-2">
            <h2 className="text-[38px] md:max-w-[463.33px] font-medium leading-[42.4px] mb-[28px]">
              Join the Social Investment Revolution
            </h2>
            <p className=" text-xl font-medium  md:max-w-[544px] mb-[42px]">
              Be part of the social investment revolution and take control of
              your financial future like never before.
            </p>
          </div>
          <div
            className="h-[371px] md:w-1/2 max-w-[622px] flex bg-no-repeat bg-center bg-cover  md:flex items-center justify-center  order-2 md:order-1 rounded-[10px]"
            style={{
              backgroundImage: "url('/svg/greenImg.svg')",
            }}
          >
            <div className="text-xs min-w-[273px] max-w-[472px] flex items-center py-6 px-8 justify-center">
              <Image
                src="/images/stockImage.png"
                alt="menu"
                width={0}
                height={0}
                object-fit= "cover"             
                sizes="100vw"
                style={{ width: "472px", height: "auto" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentFeatures;
