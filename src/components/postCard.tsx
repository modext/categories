import React from 'react';
import Image from 'next/image';



const PostCard: React.FC<PostCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative w-full h-48 md:h-64">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
