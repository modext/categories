import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  imageUrl,
  articleUrl,
}) => {
  return (
    <div className="flex flex-col bg-white border border-mygray-110 rounded-lg overflow-hidden">
      <div className="relative w-full h-48 md:h-64 rounded-t-lg ">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="px-[25px] py-6">
        <Link href={articleUrl} className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className=" text-[15px] font-medium text-gray-600 mt-1">{description}</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
