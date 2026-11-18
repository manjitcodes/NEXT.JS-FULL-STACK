import Link from "next/link";

export default function PostNotFound() {
  return (
    <main>
      <h1>404 - Post Not Found</h1>

      <p>
        Sorry, the blog post you are looking for doesnot exist.
      </p>

      <Link href="/posts">
        Back to Posts
      </Link>
    </main>
  );
}