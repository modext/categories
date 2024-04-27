import React from "react";
import Image from "next/image";
import ArticleFooter from "./articleFooter";

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  date,
  imageUrl,
  content,
  excepts,
  category,
  authorName,
  authorTitle,
  authorThumbnail,
}) => {
  const mobileImageUrl = imageUrl.replace(".png", "Small.png");
  const articleUrl = "https://www.yoursite.com/current-article";

  return (
    <article className=" max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 pt-6 pb-16  ">
        <div className="mb-[86px]">

  
      <div className="flex space-x-7 pt-9">
        <p className="text-sm font-bold text-myblack-100 mb-6">{category}</p>
        <p className="text-sm font-medium text-mygray-70 mb-6">{date}</p>
      </div>
      <h2 className=" text-4xl font-semibold leading-[44.4px] mb-4">{title}</h2>

      <h2 className="text-sm font-medium text-myblack-100 mb-[30px] leading-5">{excepts}</h2>
      <div className="relative w-full my-[86px] h-[334px] md:h-full md:w-[651px]">
        <Image
          src={mobileImageUrl} 
          alt={title}
          layout="fill"
          objectFit="cover"
          className=" rounded-lg"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 1024px"
        />{" "}
      </div>
      <div className="text-sm">{content}</div>
      {/* <div
        className="article-content text-gray-700"
        dangerouslySetInnerHTML={{ __html: content }}
      /> */}
      {/* You might want to sanitize the content before using dangerouslySetInnerHTML */}
      </div>
      <ArticleFooter 
        name={authorName}
        role={authorTitle}
        profilePic={authorThumbnail}
        articleUrl={articleUrl}
      />
    </article>
  );
};
