"use client";
import React, { useState, useEffect } from "react";
import Sponsor from "../../components/sponsor";
import OnePost from "../../components/onePost";
import { ToggleTabs } from "../../components/Buttons/toggletabs";
import Sponsors from "./sponsors/page";


// Then, use this interface in getStaticProps to type the response data

// export async function getStaticProps() {
//   const blogPosts = await fetchBlogPosts();
//   return {
//     props: { blogPosts },
//     revalidate: 10,
//   };
// }

interface BlogPostsProps {
  blogPosts: Post[];
}

const BlogPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Blogs");
  const [bPosts, setBPosts] = useState([]);

  const tabs: Tab[] = [
    { name: "Blogs", content: () => renderPosts("Blogs") },
    { name: "News", content: () => renderPosts("News") },
    { name: "Sponsors", content: () => renderPosts("Sponsors") },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      const req = await fetch(`${URL}/posts?_fields=id,slug,title`);
      const posts = await req.json();
      setBPosts(posts);
    };

    fetchPosts();
  }, []);

  const blogPostsExample = [
    {
      id: 1,
      title: "How to position your team for success",
      excerpt:
        "In this article, we provide three tips on how we position our team for success consolidated in the 3 C's framework",
      category: "Business",
      date: "Sunday, February 12, 2023",
      imageUrl: "/images/twoMen.png",
    },
    {
      id: 1,
      title: "How to position your team for success",
      excerpt:
        "In this article, we provide three tips on how we position our team for success consolidated in the 3 C's framework",
      category: "Business",
      date: "Sunday, February 12, 2023",
      imageUrl: "/images/moneyBill.png",
      postType: "Blogs",
    },
  ];
  const newsPostsExample = [
    {
      id: 1,
      title: "How to position your team for success",
      excerpt:
        "In this article, we provide three tips on how we position our team for success consolidated in the 3 C's framework",
      category: "Business",
      date: "Sunday, February 12, 2023",
      imageUrl: "/images/moneyBill.png",
      postType: "News",
    },
  ];

  
  const renderPosts = (tabName: string): JSX.Element | null => {
    let postsArray: Post[] = [];
    switch (tabName) {
      case "Blogs":
        postsArray = blogPostsExample;
        break;
      case "News":
        postsArray = newsPostsExample;
        break;
    }

    if (tabName === "Sponsors") {
      return (
       <Sponsors />
      );
    } else {
      return (
        <div className="w-full md:my-16">
          {postsArray.map((post) => (
            <OnePost
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              imageUrl={post.imageUrl}
              postType={tabName}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <main className=" flex flex-col justify-center items-center py-14 px-6 md:px-8 lg:px-[78px] bg-white ">
        <ToggleTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="w-full">{renderPosts(activeTab)}</div>
      </main>
    </>
  );
};

export default BlogPage;
