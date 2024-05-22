import React from "react";
import Image from "next/image";
import { RxTriangleUp } from "react-icons/rx";

const MonetizeSocial: React.FC = () => {
  return (
    <div className="   md:px-[78px]   bg-white">
      <div className="">
        <div className="px-6 pt-[88px] pb-[50px]  md:py-[106px] ">
          <h3 className=" font-medium text-[72px] md:text-[160px] leading-[72px] md:leading-[148.8px] md:-tracking-[9.6px] md:max-w-[1074px] pb-10 ">
            Monetize your Social Influence{" "}
          </h3>
          <p className="font-medium text-[40px] md:text-[56px] leading-[48px] md:leading-[56px] md:-tracking-[2.24px] md:max-w-[907px] pb-6 md:pb-[101px] ">
            Get listed to a wide range of investors, unlocking liquidity and
            returns.{" "}
          </p>
        </div>
      </div>
      <div className=" p-6 md:p-1">
        <div className="w-full mx-auto">
          <div className="flex flex-col px-[26px] text-center py-[56px] bg-[#F8F9FC] rounded-lg md:flex-row items-center md:items-start md:gap-12 mb-12">
            <div className="md:w-1/2 mb-[68px]">
              <h2 className="text-4xl font-semibold mb-5">
                Embrace Innovation
              </h2>
              <p className=" text-xl leading-[28px] font-medium ">
                Join us to shape the future of investing and profit from your
                social influence
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/png/sitter.png"
                alt="Social Media Stats"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className="md:flex md:flex-col lg:flex-row lg:flex-wrap lg:justify-center md:gap-10 ">
            <div className="flex flex-col justify-between px-[26px] text-center pt-[56px] md:pt-[72px]  bg-[#E7F1FE] rounded-lg md:flex-col items-center  mb-12 lg:mb-0">
              <div className="lg:max-w-[430px] mb-[41px] md:mx-[68px] md:mb-[77px]">
                <h2 className="text-4xl font-semibold pb-5">
                  Earn from Your Influence
                </h2>
                <p className="text-xl leading-[28px] font-medium ">
                  Make money by letting investors buy shares tied to your social
                  media activity.
                </p>
              </div>
              <div className=""
               >
                <Image
                  src="/png/influencers.png"
                  alt="influencers"
                  width={500}
                  height={300}
                  className="md:w-[437px] md:h-[252px] hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col px-[26px] text-center pt-[56px] md:pt-[72px] justify-between  bg-[#F7F0E2] rounded-lg md:flex-col items-center  md:mb-0 ">
              <div className="lg:max-w-[430px] mb-[41px] md:mx-[68px] md:mb-[77px]">
                <h2 className="text-4xl font-semibold text-[#143201] mb-5">
                  Grow Together{" "}
                </h2>
                <p className="text-xl leading-[28px] font-medium ">
                  Your success boosts your stock value, benefiting both you and
                  your investors
                </p>
              </div>
              <div className="md:w-[437px] md:h-[260px] align-bottom rounded-t-lg bg-[#1C1F26] px-[21px] md:pb-10  pt-[21px]">
                <Image
                  src="/png/singer.png"
                  alt="singer"
                  width={500}
                  height={250}
                  className="rounded  hover:scale-105 transition-transform duration-300"
                />
                <div className="flex justify-between items-center pt-[2px] md:pt-2 pb-[5px] md:pb-[9px] text-white">
                  <p className=" text-[18px] leading-[21.94px] font-semibold">
                    Courtney Henry
                  </p>
                  <p className=" flex font-medium text-[13px]">
                    Today{" "}
                    <span className="pl-[13px] text-[#63BA23] flex items-center ">
                      {" "}
                      <RxTriangleUp /> 6.62%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizeSocial;
