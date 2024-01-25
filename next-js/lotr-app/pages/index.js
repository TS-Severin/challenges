import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/volumes/">
        <h1>Enter Lord of the Rings</h1>
      </Link>
    </div>
  );
}
