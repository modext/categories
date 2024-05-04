// pages/article.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArticleCard } from "@/components/articleCard";
import PostCardList from "@/components/PostCardList";
import AppPromotion from "@/components/appPromotion";






const ArticlePage: React.FC = () => {
  const params = useParams<{ id: string }>();
console.log(params.id)
const [post, setPost] = useState<ArticlePost | null>(null);
  const reqUrl = process.env.NEXT_PUBLIC_REF_BASE_URL

  useEffect(() => {
    const fetchData = async () => {
        const req = await fetch(`https://ise-insights.up.railway.app/wp-json/wp/v2/news?acf_format=standard&_fields=id,slug,title,acf&slug=${params.id}`);
        const blogs = await req.json();
        setPost(blogs[0]);
    };

    fetchData();
}, [params.id]);
    if (!post)
  return <p>Loading...</p>
    return (
      <div className="bg-white pt-6 ">
        <div className=" justify-center px-6 md:px-20 lg:w-full  md:w-full ">
          <ArticleCard
            title={post.title?.rendered}
            category={post.acf?.post_type}
            excepts={post.acf?.summary}
            date={post.acf?.date}
            imageUrl={post.acf?.large_image}
            content={post.acf?.content}
            authorName={post.acf?.author}
            authorTitle={post.acf?.author_title}
            authorThumbnail={post.acf?.small.sizes.thumbnail}
          />
        </div>
          <PostCardList />
          <AppPromotion />
      </div>
    );
};

export default ArticlePage;
