"use client";
import { ToggleTabs } from "@/components/Buttons/toggletabs";
import OnePost from "@/components/onePost";
import React, { useEffect, useState } from "react";

const tabs = [
  { name: "Blogs", route: "blogs" },
  { name: "News", route: "news" },
  { name: "Sponsors", route: "sponsors" },
];

const reqUrl =
  "https://ise-insights.up.railway.app/wp-json/wp/v2/news?acf_format=standard&_fields=id,slug,title,category,acf";
const NewsList: React.FC = () => {
  const [newsList, setNewsList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(reqUrl);
      const news = await req.json();
      console.log("newslist", news);
      setNewsList(news);
    };

    fetchData();
  }, []);
  return (
    <main className=" flex flex-col justify-center items-center py-14 px-6 md:px-8 lg:px-[78px] bg-white ">
      <ToggleTabs tabs={tabs} activeTab={"news"} />
      <div className="w-full md:my-16">
        {newsList.map((news: any) => (
          <OnePost
            key={news.id}
            id={news.id}
            title={news.title.rendered}
            excerpt={news.acf.summary}
            category={news.acf.cadre_of_content}
            date={news.acf.date}
            imageUrl={news.acf.large_image}
            href={`/news/${news?.slug}`}
          />
        ))}
      </div>
    </main>
  );
};

export default NewsList;
