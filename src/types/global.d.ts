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
}
