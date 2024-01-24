import { volumes } from "../../resources/lib/data";
import Link from "next/link";

const fellowshipOfTheRingVolume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function TheFellowshipOfTheRings() {
  return (
    <>
      <Link href="/volumes/">← All Volumes</Link>
      <h1>The Fellowship of the Rings</h1>
      <p>{fellowshipOfTheRingVolume.description}</p>
    </>
  );
}
