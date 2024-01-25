import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

const theFellowshipOfTheRing = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

const index = volumes.findIndex(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function TheFellowshipOfTheRing() {
  return (
    <>
      <Link href="/volumes/">← All Volumes</Link>
      <h1>The Fellowship of the Rings</h1>
      <p>{theFellowshipOfTheRing.description}</p>
      <ul>
        {theFellowshipOfTheRing.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={theFellowshipOfTheRing.cover}
        alt="Cover of the volume presented"
        width={140}
        height={230}
      />
      {index > 0 && (
        <Link href={`/volumes/${volumes[index - 1].slug}`}>
          Previous Volume: {volumes[index - 1].title}
        </Link>
      )}
      {index < volumes.length - 1 && (
        <Link href={`/volumes/${volumes[index + 1].slug}`}>
          Next Volume: {volumes[index + 1].title}
        </Link>
      )}
    </>
  );
}
