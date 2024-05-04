import React from "react";
import Image from "next/image";
import Link from "next/link";


const OnePost: React.FC<OnePostProps> = ({
  id,
  title,
  excerpt,
  category,
  date,
  imageUrl,
  href
}) => {

  return (
    <div className=" w-full flex flex-col md:flex-row justify-center md:justify-between items-center bg-white my-4 md:w-full  md:h-[334px] ">
      <div className="relative w-full h-[334px] md:h-full md:w-[651px]">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className=" rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 md:pl-4 lg:pl-12">
        <h3 className=" text-[28px] pt-8 md:pt-0 leading-8 font-semibold">{title}</h3>
        <p className="text-myblack-100 font-medium text-[15px] lg:pr-12 my-8">
          {excerpt}
        </p>
        <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center">
          <div className=" flex flex-col lg:flex-row justify-between md:justify-start text-gray-500 text-sm md:mb-0 mb-4">
            <div className="uppercase font-semibold text-myblack-100 text-[15px]">
              {category}
            </div>
            <div className=" font-medium text-[15px] lg:ml-3 text-mygray-70">
              {date}
            </div>
          </div>
          <Link href={href}>
            <p className="text-myblue-100 mb-8 md:mb-0 hover:text-indigo-800">
              Read more
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePost;
