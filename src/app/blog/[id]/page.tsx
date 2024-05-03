// export const dynamicParams = true;

// export async function generateStaticParams() {
// 	const response = await fetch(
// 		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`
// 	);
// 	const posts = await response.json();

// 	return posts.map((post) => ({
// 		postId: post.id.toString(),
// 	}));
// }

// async function getSinglePost(postId) {
// 	const response = await fetch(
// 		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts/${postId}`
// 	);
// 	const post = await response.json();
// 	return post;
// }

// const page = async ({ params }) => {
// 	const post = await getSinglePost(params.postId);

// 	if (!post) {
// 		return <div>Loading...</div>;
// 	}

// 	return (
// 		<div className="single-blog-page">
// 			<h2>{post.title.rendered}</h2>
// 			<div className="blog-post">
// 				<p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
// 			</div>
// 		</div>
// 	);
// };

// export default page;
// pages/posts/[id].tsx
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '@/utils/config';
import { useParams, useRouter } from 'next/navigation'


const PostDetail: React.FC = () => {

  const params = useParams<{ id: string }>()

  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null); 

// const req = await fetch(`${URL}/posts?_fields=id,slug,title,content&slug=${params.id}`)
// const pages = await req.json()
  
  // useEffect(() => {
  //   async function fetchPost() {
  //     if (typeof id === 'string') { // Ensure id is a string to be used in the URL
  //       const res = await axios.get<Post>(`https://your-wordpress-site.com/wp-json/wp/v2/posts/${id}`);
  //       setPost(res.data);
  //     }
  //   }

  //   fetchPost();
  // }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <article>
      <h2>Article should be here </h2>
      {/* <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
      {/* Add more post details as needed */}
    </article>
  );
};

export default PostDetail;