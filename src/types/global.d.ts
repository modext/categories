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
  }
  interface PostCardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  interface singlePostCardProps {
    title: string;
    description: string;
    imageUrl: string;
  }

  interface PostsListProps {
    posts: singlePostCardProps[];
  }
}
