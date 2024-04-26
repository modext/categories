import React from 'react';
import PostCard from './postCard';


const PostCardList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">More posts like this</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostCardList;
