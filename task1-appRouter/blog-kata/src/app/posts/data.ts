export type Post = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "hello",
    title: "Hello World",
    description: "My first blog post",
    content: "Welcome to my first Next.js blog post!",
  },
  {
    slug: "second",
    title: "Learning Next.js",
    description: "Understanding the App Router",
    content: "Next.js provides file-based routing and Server Components.",
  },
];