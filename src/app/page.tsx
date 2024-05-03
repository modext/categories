import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import AppPromotion from "@/components/appPromotion";
import EmpowerPortfolio from "@/components/empowerPortfolio";
import MonetizeSocial from "@/components/monetizeSocial";
import InvestmentFeatures from "@/components/investmentFeatures";
import FaqSection from "@/components/faqSection";
import ChatWidget from "@/components/ChatWidget";
import Influencers from "@/components/influencers";

type TagProps = {
  text: string;
  bgColor: string;
  textColor: string;
};
const Tag: React.FC<TagProps> = ({ text, bgColor, textColor }) => {
  return (
    <span
      className={`px-4 py-1 rounded-full text-${textColor} bg-${bgColor} text-sm font-semibold`}
    >
      {text}
    </span>
  );
};

const InfluencerStockPower: React.FC = () => {
  return (
    <>
      <div className="lg:flex  xl:gap-[100px] justify-between bg-white p-6 sm:p-12 md:pt-[193px] md:px-12">
        <div className=" pr-8 lg:pr-0 lg:pl-[48px] lg:max-w-[650px] lg:w-1/2 mb-10 ">
          <h1 className="  text-[50.45px] md:text-[70.45px] md:leading-[72px] leading-[55.5px] md:font-semibold font-semibold  pt-9 md:pt-[58px] mb-[46px] md:mb-[72px] ">
            Unlock the Power of Influencer Stocks
          </h1>
          <p className="text-[19.53px] leading-[28px] font-medium mt-[36px] mb-[43.87px]">
            Dive into the future of investing with our platform, where you can
            harness the potential of social media influence
          </p>
          <div className="flex items-center mb-9">
            <Link
              target="_blank"
              href="https://youtube.com/@InfluencerStockExchange?si=qiDGS34E3ASnNsib"
              className="relative  mr-[22.75px]  w-[71.75px] md:w-[82.18px] h-[15.75px]"
            >
              <Image
                src="/svg/youtubeLogoColored.svg"
                alt="Youtube"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.tiktok.com/@influencerstockexchange?_t=8lqnpWle3jZ&_r=1"
              className="relative  mr-[22.75px]  w-[71.75px] md:w-[82.18px] h-[15.75px]"
            >
              <Image
                src="/svg/tiktokLogoColored.svg"
                alt="TikTok"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/influencerstockexchange?igsh=bGxnZmVldm83OXVz"
              className="relative  w-[119.47px] md:w-[136.53px] h-[28px]"
            >
              <Image
                src="/svg/instagramLogoColored.svg"
                alt="Instagram"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </div>
          <Link href="">
            <PrimaryButton
              className="w-[205px] h-[49px] justify-center items-centerflex bg-myblue-100  text-white py-2  px-4 rounded-[5px] font-medium text-sm"
              title="Go to App"
            />
          </Link>
        </div>
        <Influencers />
      </div>
      <div className="px-6 pt-[88px] pb-[116px] md:px-[78px]  md:py-[106px] bg-myblue-20">
        <h3 className="md:text-[155px] font-medium text-[72px] leading-[72px] md:leading-[148.8px] pb-10 ">
          Invest in Tokenized Social Influence{" "}
        </h3>
        <p className="font-medium text-[40px] md:text-[56px] leading-[48px] md:leading-[56px] md:max-w-[907px] pb-6 ">
          Earn returns driven by social trends and influencer impact
        </p>
      </div>
      <div className="flex flex-col md:flex-row  md:flex-wrap md:gap-8 px-[33.46px] py-[88px] justify-center items-center md:px-[78px] max-h-[2000px] md:py-[106px] bg-white">
        <div className="h-[496.45px] mb-[33.46px]  items-center bg-white rounded-[16.73px] border w-[365px] shadow-md flex flex-col justify-between">
          <div className=" px-[34px] pt-[42.87px] ">
            <h2 className="text-[29.28px] leading-[25px] font-semibold text-myblue-100">
              Get ready to explore
            </h2>
            <p className="text-[20.91px] leading-[29.28px] font-medium mt-[16.73px]">
              Dive into their profiles to uncover key metrics, engagement rates,
              audience demographics, and more
            </p>
          </div>

          <div className="flex flex-wrap px-[18px] pb-[21px] gap-3 ">
            <div className="flex w-full  justify-between gap-4">
              <span className="bg-[#88D2FC]  text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Creator
              </span>
              <span className="bg-[#C4C5FB]  text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Young
              </span>
              <span className="bg-[#FFCF96]  text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Gen Z
              </span>
            </div>
            <div className="flex w-full justify-between gap-4">
              <span className="bg-[#FA777C]  text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Influencer{" "}
              </span>
              <span className="bg-[#97DDAB]  text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Elderly{" "}
              </span>
              <span className="bg-[#FFFF99] text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Food{" "}
              </span>
            </div>
            <div className="flex w-full justify-between gap-4">
              <span className="bg-[#B4FC88] text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Millenial{" "}
              </span>
              <span className="bg-[#FAC0CC]  text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Blond{" "}
              </span>
              <span className="bg-[#DE9D77]   text-[20.91px] font-medium px-4 py-2 rounded-full  flex items-center justify-center flex-auto">
                Fitness{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="h-[496.45px] mb-[33.46px]  items-center bg-white rounded-[16.73px] border w-[365px] shadow-md flex flex-col justify-between">
          <div className="px-[34px] pt-[42.87px]">
            <h2 className="text-[29.28px] leading-[25px] font-semibold text-myblue-100">
              Browse the red carpet
            </h2>
            <p className="text-[20.91px] leading-[29.28px] font-medium mt-[16.73px]">
              From lifestyle gurus to gaming sensations, there&apos;s an
              influencer for everyone browse through.
            </p>
          </div>

          <div className="relative w-full transition-transform duration-300 hover:scale-105">
            <Image
              src="/svg/Frame.svg"
              alt=""
              object-fit="cover"
              width={365}
              height={150}
              className="rounded-b-[16.73px]"
            />
          </div>
        </div>
        <div className="h-[496.45px] mb-[33.46px]  items-center bg-white rounded-[16.73px] border w-[365px] shadow-md flex flex-col justify-between">
          <div className=" px-[34px] pt-[42.87px] ">
            <h2 className="text-[29.28px] w-[314px] leading-[25px] font-semibold text-myblue-100">
              Invest on the go{" "}
            </h2>
            <p className="text-[20.91px] w-[314px] leading-[29.28px] font-medium mt-[16.73px]">
              Build your portfolio as you invest in your favorite creators and
              watch as their stocks rise and fall in real-time.
            </p>
          </div>

          <div className="relative h-[242px] w-full hover:scale-105 transition-transform  rounded-b-lg duration-300">
            <Image
              src="/svg/blocks.svg"
              alt=""
              object-fit="cover"
              width={365}
              height={150}
              className="rounded-b-[16.73px] pt-3"
            />
          </div>
        </div>
      </div>
      <EmpowerPortfolio />
      <MonetizeSocial />
      <InvestmentFeatures />
      <FaqSection />
      <AppPromotion />
      <ChatWidget />
    </>
  );
};

export default InfluencerStockPower;
