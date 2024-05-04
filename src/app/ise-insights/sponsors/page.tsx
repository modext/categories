import React from "react";
import Sponsor from "@/components/sponsor";
import { ToggleTabs } from "@/components/Buttons/toggletabs";

const tabs = [
  { name: "Blogs", route: "blogs" },
  { name: "News", route: "news" },
  { name: "Sponsors", route: "sponsors" },
];
const brandData = [
  {
    logo: "/svg/sentinelone.svg",

    title: "Sentinel One",
    description: "AI-driven endpoint security solutions...",
  },
  {
    logo: "/svg/blissy.svg",
    title: "Sentinel One",
    description:
      "Cosy House Collection offers a range of high-quality bedding and home essentials designed to provide comfort and style at an affordable price. ",
  },
  {
    logo: "/svg/blissy.svg",
    title: "Sentinel One",
    description: "AI-driven endpoint security solutions...",
  },
  {
    logo: "/svg/cossyHouse.svg",

    title: "Cosy House Collection",
    description:
      "Cosy House Collection offers a range of high-quality bedding and home essentials designed to provide comfort and style at an affordable price. ",
  },
  {
    logo: "/svg/cossyHouse.svg",

    title: "Blissy",
    description: "Compact, sleek device designed to promote...",
  },
  {
    logo: "/svg/cossyHouse.svg",

    title: "Blissy",
    description: "Compact, sleek device designed to promote...",
  },
  {
    logo: "/svg/cossyHouse.svg",

    title: "Blissy",
    description: "Compact, sleek device designed to promote...",
  },
  {
    logo: "/svg/cossyHouse.svg",

    title: "Blissy",
    description: "Compact, sleek device designed to promote...",
  },
  {
    logo: "/svg/cossyHouse.svg",

    title: "Blissy",
    description: "Compact, sleek device designed to promote...",
  },
  // ... More brands
];

const Sponsors: React.FC = () => {
  return (
    <main className=" flex flex-col justify-center items-center py-14 px-6 md:px-8 lg:px-[78px] bg-white ">
      <ToggleTabs tabs={tabs} activeTab={"sponsors"} />

      <div className="pb-[34px] justify-center pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16 justify-center">
          {brandData.map((brand, index) => (
            <Sponsor
              key={index}
              logo={brand.logo}
              title={brand.title}
              description={brand.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
