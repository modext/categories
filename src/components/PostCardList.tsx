import React from 'react';
import PostCard from './postCard';

const samplePostCardData = [
  {
    title: "Meet Bomi Fagbemi, Co-Founder of Bioloop.",
    description:
      "In this month’s Business Spotlight, Bomi speaks on his journey building ",
    imageUrl: "/images/sampleThumbnail.png",
    articleUrl: "/post/sample-article",
  },
  {
    title: "Meet Bomi Fagbemi, Co-Founder of Bioloop.",
    description:
      "In this month’s Business Spotlight, Bomi speaks on his journey building ",
    imageUrl: "/images/sampleThumbnail.png",
    articleUrl: "/post/sample-article",
  },
];

const PostCardList: React.FC = () => {
  return (
    <div className="px-6 py-9 md:px-[78px] md:py-[106px] bg-myblue-20">
      <h2 className=" text-[34px] font-semibold mb-[52px]">More posts like this</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {samplePostCardData.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostCardList;
