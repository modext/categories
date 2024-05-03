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
      {/* <article className=" max-w-4xl md:max-w-[1199px] mx-auto md:mx-0 lg:px-0 px-6 sm:px-6 pt-6 pb-16  "> */}
      {/* <article className=" max-w-4xl mx-auto md:mx-0 md:px-0 px-6 sm:px-6 lg:px-8 pt-6 pb-16  "> */}
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
        {/* <div className="relative w-full h-[334px] md:h-[541px] md:w-[700px] lg:w-[1283px] my-[86px]"> */}
        {/* <Image
            src={imageUrl}
            alt={title}
            layout="responsive"
            objectFit="contain"
            className=" rounded-lg"
          /> */}
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
        {/* </div> */}

        {/* <div className="relative w-full my-[86px] h-[334px] md:h-full md:w-[651px]">
        <Image
          src={mobileImageUrl} 
          alt={title}
          layout="fill"
          objectFit="cover"
          className=" rounded-lg"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 1024px"
        />{" "}
      </div> */}
        <div className="text-base font-medium text-myblack-100 leading-5 tracking-tight lg:pl-5 md:max-w-[1199px]">
          {content}
        </div>
        {/* <div
        className="article-content text-gray-700"
        dangerouslySetInnerHTML={{ __html: content }}
      /> */}
        {/* You might want to sanitize the content before using dangerouslySetInnerHTML */}
      </div>
      <div className="md:pl-5 ">
        <ArticleFooter
          name={authorName}
          role={authorTitle}
          profilePic={authorThumbnail}
          articleUrl={articleUrl}
        />
      </div>
      {/* </article> */}
    </>
  );
};
