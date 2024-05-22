import React from "react";
import Link from "next/link";
import { PrimaryButton } from "./Buttons/PrimaryButton";


const AppPromotion: React.FC = () => {
  const details = {
    title: "The future of investing",
    description:
      "Dive into the world of social influence investing and capitalize on the growth of your favorite influencers",
    buttonText: "Go to App",
    buttonHref: "https://app.influencerstockexchange.com",
  };
  return (
    <div className="flex flex-col items-center justify-center text-center bg-myblack-100 text-white">
      <div className="flex flex-col mt-[74px] mb-[82px] mx-[31px]">
        <div className="w-[286px] md:w-[537px] mb-14">
          <h1 className="text-[45px] font-semibold leading-[58px]">
            {details.title}
          </h1>
          <p className="mt-[17px] text-lg font-medium leading-[26px]">{details.description}</p>
        </div>

        <Link href={details.buttonHref}  target="_blank">
          <PrimaryButton
            className="w-[205px] h-[49px] justify-center items-centerflex bg-myblue-100  text-white py-2  px-4 rounded-[5px] font-medium text-sm"
            title={details.buttonText}
          />
        </Link>
      </div>
    </div>
  );
};

export default AppPromotion;
