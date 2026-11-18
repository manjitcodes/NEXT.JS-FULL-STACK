import Counter from "./components/Counter";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Welcome to BlogKata.</h1>
        <p>
          Learning Next.js through practical projects,
          experiments, and interactive components.
        </p>
        <a href="/posts" className="btn">
          Explore Posts
        </a>
      </section>

      <Counter />
    </main>
  );
}