import React from "react";
import Image from "next/image";
import { RxTriangleUp } from "react-icons/rx";

const Influencers: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-6 mb-[37.94px] md:w-full  lg:pr-[31px]">
    <div className="relative w-full hover:scale-105 transition-transform duration-300">
      <Image
        src="/svg/Rectangle30.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <div className="relative w-full hover:scale-105 transition-transform duration-300">
      <Image
        src="/svg/Ellipse6.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <div className="relative w-full hover:scale-105 transition-transform duration-300">
      <Image
        src="/svg/Star3.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <div className="relative w-full hover:scale-105 transition-transform duration-300">
      <Image
        src="/svg/Star5.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <div className="relative w-full col-span-2 hover:scale-105 transition-transform duration-300">
      <Image
        src="/svg/Rectangle28.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <div className="relative w-full hover:scale-105 transition-transform duration-300">
      <Image
        src="/svg/Ellipse5.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <div className="relative w-full hover:scale-105 transition-transform duration-300">
      <Image
        src="/svg/Star2.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <div className="relative w-full hover:scale-105 transition-transform duration-300">
      <Image
        src="/svg/Rectangle29.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    </div>
  );
};

export default Influencers;
