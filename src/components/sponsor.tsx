import React from "react";
import Image from "next/image";

interface SponsorProps {
  title: string;
  description: string;
  logo: string;
}

const Sponsor: React.FC<SponsorProps> = ({
  title,
  description,
  logo,

}) => {
  return (
    <div
      className="bg-white border border-gray-300 rounded-lg p-6  gap-7.5 max-w-[382px] w-full md:max-w-[382px] lg:max-w-[401px] h-[266px] m-auto "
    >
      <div className="relative max-w-[350px]  h-[56px]  mb-[30px]">
        <Image
          src={logo}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "75px" }}
        />
      </div>

      <div className="">
         <h3 className="font-medium text-lg md:text-[22px] mb-2">
           {title}
         </h3>
         <p className="font-medium leading-[22.4px] text-base md:text-base overflow-y-auto max-h-[100px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
           {description}
         </p>
       </div>
    </div>
  );
};

export default Sponsor;