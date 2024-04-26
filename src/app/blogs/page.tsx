// pages/blogs.tsx
"use client";
import React, { useState, useEffect } from "react";
import { fetchBlogPosts } from "@/utils/blogService";
import BlogPost from "@/components/blogPost";
import { ToggleTabs } from "@/components/Buttons/toggletabs";

interface BlogPostsProps {
  blogPosts: Post[];
}

// Then, use this interface in getStaticProps to type the response data

// export async function getStaticProps() {
//   const blogPosts = await fetchBlogPosts();
//   return {
//     props: { blogPosts },
//     revalidate: 10,
//   };
// }

// const BlogPage: React.FC = () => {
const BlogPage: React.FC<BlogPostsProps> = () => {
  // State to manage active tab
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

  const blogPosts = [
    {
      id: 1,
      title: "How to position your team for success",
      excerpt:
        "In this article, we provide three tips on how we position our team for success...",
      category: "Business",
      date: "Sunday, February 12, 2023",
      imageUrl: "/blog-image-1.jpg", 
    },
  ];

  const renderPosts = (tabName: string): JSX.Element | null => {
    switch (tabName) {
      case "Blogs":
        return (
          <div>
            {blogPosts.map((post: Post) => (
              <BlogPost
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
        );
      case "News":
        // Replace with news content rendering
        return null;
      case "Sponsors":
        // Replace with sponsors content rendering
        return null;
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center py-14 bg-white justify-center">
        <ToggleTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div>{renderPosts(activeTab)}</div>
      </div>
    </>
  );
};

export default BlogPage;
