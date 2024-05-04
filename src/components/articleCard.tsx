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
  const articleUrl = "https://www.yoursite.com/current-article";

  return (
    <>
      <div className="mb-[86px] md:mb-6">
        <div className="flex space-x-7 pt-9">
          <p className="text-sm font-bold text-myblack-100 mb-6">{category}</p>
          <p className="text-sm font-medium text-mygray-70 mb-6">{date}</p>
        </div>
        <h2 className=" text-4xl font-semibold leading-[44.4px] mb-4">
          {title}
        </h2>

        <h2 className=" md:max-w-[782px] text-sm font-medium text-myblack-100  md:mb-[30px] leading-5">
          {excepts}
        </h2>
        <div className="relative  w-full h-[376px] md:h-full my-[86px] md:mb-8 md:mt-12">
          <Image
            src={imageUrl}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="text-base font-medium text-myblack-100 leading-5 tracking-tight lg:pl-5 md:max-w-[1199px]">
          {content}
        </div>
      </div>
      <div className="md:pl-5 ">
        <ArticleFooter
          name={authorName}
          role={authorTitle}
          profilePic={authorThumbnail}
          articleUrl={articleUrl}
        />
      </div>
    </>
  );
};
