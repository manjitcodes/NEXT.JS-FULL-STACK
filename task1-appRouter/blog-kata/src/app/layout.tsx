
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav-container">
            <Link href="/" className="logo">
              BlogKata.
            </Link>

            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/posts">Posts</Link>
            </div>
          </nav>
        </header>

        {children}

      </body>
    </html>
  );
}
