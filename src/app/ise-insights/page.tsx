"use client";
import React from "react";
import { ToggleTabs } from "@/components/Buttons/toggletabs";

import { useParams, useRouter } from "next/navigation";
import BlogList from "./blogs/page";
import NewsList from "./news/page";
import Sponsors from "./sponsors/page";

const BlogPage: React.FC = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const tabs = [
    { name: "Blogs", route: "blogs" },
    { name: "News", route: "news" },
    { name: "Sponsors", route: "sponsors" },
  ];

  const activeTab = params.id;

  const renderComponent = () => {
    switch (activeTab) {
      case "ise-insights/blogs":
        return <BlogList />;
      case "ise-insights/news":
        return <NewsList />;
      case "ise-insights/sponsors":
        return <Sponsors />;
      default:
        return <BlogList />;
    }
  };

  return (
    <main className="flex flex-col justify-center items-center  px-6 md:px-8 lg:px-[78px] bg-white">
      {renderComponent()}
    </main>
  );
};

export default BlogPage;
