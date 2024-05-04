"use client";
import { ToggleTabs } from "@/components/Buttons/toggletabs";
import OnePost from "@/components/onePost";
import React, { useEffect, useState } from "react";

const reqUrl =
  "https://ise-insights.up.railway.app/wp-json/wp/v2/blog?acf_format=standard&_fields=id,slug,title,category,acf";

const tabs = [
  { name: "Blogs", route: "blogs" },
  { name: "News", route: "news" },
  { name: "Sponsors", route: "sponsors" },
];
const BlogList: React.FC = () => {
  const [blogsList, setBlogsList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(reqUrl);
      const blogs = await req.json();
      console.log("bloglist", blogs);
      setBlogsList(blogs);
    };

    fetchData();
  }, []);
  return (
    <main className=" flex flex-col justify-center items-center py-14 px-6 md:px-8 lg:px-[78px] bg-white ">
      <ToggleTabs tabs={tabs} activeTab={"blogs"} />
      <div className="w-full md:my-16">
        {blogsList.map((blog: any) => (
          <OnePost
            key={blog.id}
            id={blog.id}
            title={blog.title.rendered}
            excerpt={blog.acf.summary}
            category={blog.acf.category}
            date={blog.acf.date}
            imageUrl={blog.acf.large_image}
            href={`/blogs/${blog?.slug}`}
          />
        ))}
      </div>
    </main>
  );
};

export default BlogList;
