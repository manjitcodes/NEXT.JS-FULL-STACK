import Link from "next/link";
import { posts } from "./data";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default async function PostsPage() {
  // Artificial delay to test loading.tsx
  await delay(1500);

  return (
    <main>
      <h1>My Blog Posts</h1>

      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.title}</h2>

          <p>{post.description}</p>

          <Link href={`/posts/${post.slug}`}>
            Read More
          </Link>
        </article>
      ))}
    </main>
  );
}