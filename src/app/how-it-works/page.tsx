import React from "react";
import Image from "next/image";
import AppPromotion from "@/components/appPromotion";

const HowItWorksPage: React.FC = () => {
  return (
    <>
      <div className="bg-white justify-center items-center px-6 pb-8 pt-[82px]">
        <div className=" sm:text-left lg:mx-[21px] sm:p-12">
          <h1 className="text-[50px] font-semibold md:text-[100px] md:font-medium md:text-center mb-[108px] md:mb-[72px]">
            How it Works
          </h1>
          <p className="mt-4 text-mygray-120 text-lg md:font-medium md:text-2xl">
            Welcome to the Influencer Stock Exchange, the pioneering platform
            where the influence of social media stars becomes a tangible asset.
            At ISE, we blend the dynamism of social media with the strategic
            rigor of the stock market to offer a unique investment landscape.
            Dive into a new realm where following your favorite influencer can
            translate into real investment opportunities.{" "}
          </p>

          <div className="mt-[86px]">
            <h2 className=" text-[28px] font-semibold  md:text-center md:t">
              For Influencers
            </h2>
            <p className="mt-10 text-mygray-120 text-lg font-medium md:font-medium md:text-2xl">
              At ISE, our mission is to democratize the value of social media
              influence. We envision a world where every tweet, post, and share
              holds more than just digital weight—it holds potential for
              real-world returns.{" "}
            </p>
            <div className="flex justify-center  rounded-sm md:rounded-md  lg:h-[535px] mt-[66px]">
              <Image
                src="/images/desktopFrame.png"
                alt="Why Influencer Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="mt-[65px]">
            <h2 className=" text-[28px] md:text-[38px] font-semibold  md:text-center md:t">
              For Investors
            </h2>
            <p className="mt-4 text-mygray-120 font-medium text-lg md:font-medium md:text-2xl">
              At ISE, our mission is to democratize the value of social media
              influence. We envision a world where every tweet, post, and share
              holds more than just digital weight—it holds potential for
              real-world returns.
            </p>
            <div className="flex justify-center  rounded-sm md:rounded-md  lg:h-[535px] mt-[66px]">
              <Image
                src="/images/desktopFrame.png"
                alt="Why Influencer Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="mt-12 mb-12">
            <h2 className=" text-[28px] md:text-[38px] items-center font-semibold  md:text-center md:t">
              Why Influencer Stock
            </h2>
            <p className="mt-4 text-mygray-120 font-medium text-lg">
              At ISE, our mission is to democratize the value of social media
              influence. We envision a world where every tweet, post, and share
              holds more than just digital weight—it holds potential for
              real-world returns.
            </p>
            <div className="flex justify-center  rounded-sm md:rounded-md  lg:h-[535px] mt-[66px]">
              <Image
                src="/images/desktopFrame.png"
                alt="Why Influencer Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-9 md:px-[78px] md:py-[106px] bg-myblue-20">
        <h2 className=" text-[45px] font-semibold mb-[52px]">
          Building Influence Together{" "}
        </h2>
        <p className="mt-4 font-medium text-2xl">
          Whether you’re a potential investor, a curious observer, or an
          influencer looking to expand your horizons, we’re here to help you
          navigate this exciting new landscape. Together, let’s build influence
          and turn engagement into investment.
        </p>
      </div>
        <AppPromotion />
    </>
  );
};

export default HowItWorksPage;
