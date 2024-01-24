import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/volumes/">
        <h1>Hello from Next.js</h1>
      </Link>
    </div>
  );
}
