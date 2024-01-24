import { volumes } from "../../resources/lib/data";
import Link from "next/link";

const theTwoTowers = volumes.find(({ slug }) => slug === "the-two-towers");

export default function TheTwoTowers() {
  return (
    <>
      <Link href="/volumes/">← All Volumes</Link>
      <h1>The Two Towers</h1>
      <p>{theTwoTowers.description}</p>
    </>
  );
}
