import { notFound } from "next/navigation";
import { posts } from "../data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Required for build-time validation with Cache Components enabled.
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  // Intentionally trigger an error for testing.
  if (slug === "crash") {
    throw new Error("Intentional test error!");
  }

  const post = posts.find((item) => item.slug === slug);

  // Unknown slug = 404
  if (!post) {
    notFound();
  }

  return (
    <main>
      <h1>{post.title}</h1>

      <p>{post.description}</p>

      <article>{post.content}</article>
    </main>
  );
}