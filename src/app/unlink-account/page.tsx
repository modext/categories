import React from "react";
import Image from "next/image";
import AppPromotion from "@/components/appPromotion";
import Link from "next/link";

const HowItWorksPage: React.FC = () => {
  return (
    <>
      <div className="bg-white justify-center items-center px-6 pb-8 pt-[82px]">
        <div className=" sm:text-left lg:mx-[21px] sm:p-12">
          <h1 className="text-[50px] font-semibold md:text-[100px] md:font-medium md:text-center mb-[108px] md:mb-[72px]">
            How to Unlink Your Account
          </h1>
          <div className="mt-[86px] ">
            <h2 className=" text-[28px] font-semibold  md:text-center md:t">
              Step 1:
            </h2>
            <div className="mt-10 text-mygray-120 text-lg font-medium md:font-medium md:text-2xl text-center">
              Login to your{" "}
              <Link
                href={"https://app.influencerstockexchange.com"}
                className="text-myblue-100"
              >
                account
              </Link>
            </div>

            <div className="flex justify-center  rounded-sm md:rounded-md  lg:h-[535px] mt-[66px]">
              <Image
                src="/png/Step1.png"
                alt="Why Influencer Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain rounded-sm border"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          <div className="mt-[65px]">
            <h2 className=" text-[28px] md:text-[38px] font-semibold  md:text-center md:t">
              Step 2:
            </h2>
            <div className="mt-10 text-mygray-120  text-center text-lg font-medium md:font-medium md:text-2xl">
              When logged in. Navigate to the{" "}
              <Link
                href={
                  "https://app.influencerstockexchange.com/influencer/account"
                }
                className="text-myblue-100"
              >
                account page{" "}
              </Link>
              from the dashboard
            </div>
            <div className="flex justify-center  rounded-sm md:rounded-md  lg:h-[535px] mt-[66px]">
              <Image
                src="/png/Step2.png"
                alt="Why Influencer Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain rounded-sm border"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          <div className="mt-12 mb-12">
            <h2 className=" text-[28px] md:text-[38px] items-center font-semibold  md:text-center md:t">
              Step 3:{" "}
            </h2>
            <p className="mt-4 text-mygray-120  text-center font-medium text-lg">
              On the account page, click on the Social Media tab to view your
              social media accounts
            </p>
            <div className="flex justify-center  rounded-sm md:rounded-md  lg:h-[535px] mt-[66px]">
              <Image
                src="/png/Step3.png"
                alt="Why Influencer Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain rounded-sm border"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
          <div className="mt-12 mb-12">
            <h2 className=" text-[28px] md:text-[38px] items-center font-semibold  md:text-center md:t">
              Step 4:{" "}
            </h2>
            <p className="mt-4 text-mygray-120 text-center font-medium text-lg">
              Scroll to the Delete Social Accounts section of the page. Click on
              Delete My Social Accounts
            </p>
            <div className="flex justify-center  rounded-sm md:rounded-md  lg:h-[535px] mt-[66px]">
              <Image
                src="/png/Step4.png"
                alt="Why Influencer Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain rounded-sm border"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
          <div className="mt-12 mb-12">
            <h2 className=" text-[28px] md:text-[38px] items-center font-semibold  md:text-center md:t">
              Step 5:{" "}
            </h2>
            <p className="mt-4 text-mygray-120 text-center font-medium text-lg">
           A confirmation dialog will be shown. Read the confirmation
              message. To proceed with the deletion, click on the Delete button.
              This will disconnect all your connect social media accounts from
              the platform.
            </p>
            <div className="flex justify-center  rounded-sm md:rounded-md  lg:h-[535px] mt-[66px]">
              <Image
                src="/png/Step5.png"
                alt="Why Influencer Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain rounded-sm border"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <AppPromotion />
    </>
  );
};

export default HowItWorksPage;
