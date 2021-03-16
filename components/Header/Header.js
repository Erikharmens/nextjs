import Link from "next/link";

export default function Header({ content }) {
  return (
    <>
      <header className="app-header">
        <nav>
          <span className="logo">{content ? content : "Hi there"}</span> |{" "}
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
          <Link href="/latest-news">News</Link>
        </nav>
      </header>
    </>
  );
}
