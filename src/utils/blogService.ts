// src/services/blogService.ts

import axios from 'axios';

export async function fetchBlogPosts(): Promise<Post[]> {
  const res = await axios.get('https://your-wordpress-site.com/wp-json/wp/v2/posts');
  return res.data.map((post: any) => ({
    id: post.id,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    category: post.categories.join(', '),
    date: new Date(post.date).toLocaleDateString('en-US'),
    imageUrl: post.featured_image_url,
  }));
}
