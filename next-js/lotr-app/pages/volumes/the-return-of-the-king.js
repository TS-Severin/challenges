import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

const theReturnOfTheKing = volumes.find(
  ({ slug }) => slug === "the-return-of-the-king"
);

const index = volumes.findIndex(
  ({ slug }) => slug === "the-return-of-the-king"
);

export default function TheReturnOfTheKing() {
  return (
    <>
      <Link href="/volumes/">← All Volumes</Link>
      <h1>The Return of the King</h1>
      <p>{theReturnOfTheKing.description}</p>
      <ul>
        {theReturnOfTheKing.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={theReturnOfTheKing.cover}
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
