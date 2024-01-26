import { useRouter } from "next/router";
import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { styled } from "styled-components";

const VolumeContainer = styled.div`
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  gap: 10px;
`;

export default function VolumeDetail() {
  const router = useRouter();

  const currentVolume = volumes.find(
    (volume) => volume.slug === router.query.slug
  );

  const index = volumes.findIndex(
    (volume) => volume.slug === router.query.slug
  );
  if (!currentVolume) {
    return (
      <>
        <h1>This volume does not exist</h1>
        <Link href="/volumes">← All Volumes</Link>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{currentVolume.title}</title>
        </Head>

        <Link href="/volumes">← All Volumes</Link>
        <h1>{currentVolume.title}</h1>
        <p>{currentVolume.description}</p>
        <VolumeContainer $bgColor={currentVolume.color}>
          <ul>
            {currentVolume.books.map((book) => (
              <li key={book.ordinal}>
                {book.ordinal}: {book.title}
              </li>
            ))}
          </ul>
          <Image
            src={currentVolume.cover}
            alt="Cover of the volume presented"
            width={140}
            height={230}
          />
        </VolumeContainer>
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
}
