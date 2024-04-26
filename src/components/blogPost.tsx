import React from "react";
import Image from "next/image";
import Link from "next/link";
import twoMen from "../../public/images/twoMen.png";

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  excerpt,
  category,
  date,
  imageUrl,
}) => {
  return (
    <div className="justify-center items-center bg-white p-4   md:flex md:max-w-none">
      <div className="">
        <Image
          src={twoMen}
          alt={title}
          width={500}
          height={300}
          objectFit="cover"
        />
      </div>
      <div className="md:w-1/2 md:pl-4">
        <h3 className=" text-[28px] mt-8 leading-8 font-semibold">{title}</h3>
        <p className="text-gray-600 my-8">{excerpt}</p>
        <div className=" flex justify-between text-gray-500 text-sm mb-4">
          <div className="uppercase font-semibild text-myblack-100 text-sm">{category}</div>
          <div className=" font-medium text-[15px] text-mygray-70">{date}</div>
        </div>
        <Link href={`/posts/${id}`}>
          <p className="text-indigo-600 mb-8 hover:text-indigo-800">
            Read more
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
