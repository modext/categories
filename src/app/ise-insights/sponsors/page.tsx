"use client";
import React, { useEffect, useState } from "react";
import Sponsor from "@/components/sponsor";
import { ToggleTabs } from "@/components/Buttons/toggletabs";

const tabs = [
  { name: "Blogs", route: "blogs" },
  { name: "News", route: "news" },
  { name: "Sponsors", route: "sponsors" },
];
const reqUrl =
  "https://ise-insights.up.railway.app/wp-json/wp/v2/sponsor?acf_format=standard&_fields=id,slug,title,category,acf";

  const Sponsors: React.FC = () => {
  const [sponsorList, setSponsorList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(reqUrl);
      const sponsors = await req.json();
      setSponsorList(sponsors);
    };

    fetchData();
  }, []);
  return (
    <main className=" flex flex-col justify-center items-center py-14 px-6 md:px-8 lg:px-[78px] bg-white ">
      <ToggleTabs tabs={tabs} activeTab={"sponsors"} />

      <div className="pb-[34px] justify-center pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16 justify-center">
          {sponsorList.map((brand, index) => (
            <Sponsor
              key={brand.id}
              logo={brand.acf.small.sizes.large}
              title={brand.title.rendered}
              description={brand.acf.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
