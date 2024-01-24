import { volumes } from "../../resources/lib/data";
import Link from "next/link";

const theReturnOfTheKingVolume = volumes.find(
  ({ slug }) => slug === "the-return-of-the-king"
);

export default function TheFReturnOfTheKing() {
  return (
    <>
      <Link href="/volumes/">← All Volumes</Link>
      <h1>The Return of the King</h1>
      <p>{theReturnOfTheKingVolume.description}</p>
    </>
  );
}
