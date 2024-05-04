import { Url } from "url";

export {};

declare global {
  interface Post {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    imageUrl: string;
  }
  interface Tab {
    name: string;
    content: () => JSX.Element | null;
  }
  interface OnePostProps {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    imageUrl: string;
    href: Url  | string ;
  }
  interface BlogPostsProps {
    blogPosts: Post[];
  }
  interface ArticlePost {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    acf: {
        author: string;
        author_title: string;
        blog_title: string; 
        cadre_of_content: string;
        category: number; 
        content: string;
        date: string;
        large_image: string;
        post_type: string;
        summary: string;
        small: {
          sizes:{
            thumbnail: string
          }
            ID: number;
            id: number;
            title: string;
            filename: string;
        };
    };
}
  interface ArticleCardProps {
    title: string;
    date: string;
    imageUrl: string;
    content: string;
    excepts: string;
    category: string;
    authorName: string;
    authorTitle: string;
    authorThumbnail: string;
  }
  interface PostCardProps {
    title: string;
    description: string;
    imageUrl: string;
    articleUrl: string;
  }
  interface singlePostCardProps {
    title: string;
    description: string;
    imageUrl: string;
    articleUrl: string;  
  }

  interface PostsListProps {
    posts: singlePostCardProps[];
  }
  interface ArticleFooterProps {
    name: string;
    role: string;
    profilePic: string;
    articleUrl: string;
  }
}
