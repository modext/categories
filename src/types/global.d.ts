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
    postType: string;
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
