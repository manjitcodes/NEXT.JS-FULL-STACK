"use client";

import { useEffect } from "react";

type Props = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function PostError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h1>Something went wrong!</h1>

      <p>We couldnot load this blog post.</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}