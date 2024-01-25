import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

const theTwoTowers = volumes.find(({ slug }) => slug === "the-two-towers");

const index = volumes.findIndex(({ slug }) => slug === "the-two-towers");

export default function TheTwoTowers() {
  return (
    <>
      <Link href="/volumes/">← All Volumes</Link>
      <h1>The Two Towers</h1>
      <p>{theTwoTowers.description}</p>
      <ul>
        {theTwoTowers.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={theTwoTowers.cover}
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
