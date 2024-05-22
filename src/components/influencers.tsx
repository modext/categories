import React from "react";
import Image from "next/image";

const Influencers: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-6 mb-[37.94px] w-full md:w-full  lg:pr-[31px]">
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <Image
          src="/png/Rectangle 30 (1).png"
          alt="influencerRed"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <Image
          src="/png/Ellipse 6 (1).png"
          alt="influencerBlue"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <Image
          src="/png/influencerResist.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <Image
          src="/png/influencerCream.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full col-span-2 hover:scale-105 transition-transform duration-300">
        <Image
          src="/png/influencerBrown.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <Image
          src="/png/influencerBlack.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <Image
          src="/png/influencerLilac.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <Image
          src="/png/influencerPink.png"
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
