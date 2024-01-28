import { useRouter } from "next/router";
import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Head from "next/head";
import { styled } from "styled-components";
import ChevronLeft from "../../resources/icons/chevron-left.svg";
import ArrowLeft from "../../resources/icons/arrow-left.svg";
import ArrowRight from "../../resources/icons/arrow-right.svg";

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
        <Link href="/volumes">
          <ChevronLeft />
          All Volumes
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{currentVolume.title}</title>
        </Head>
        <StyledLink href="/volumes">
          <ChevronLeft />
          All Volumes
        </StyledLink>
        <StyledHeadline1>{currentVolume.title}</StyledHeadline1>
        <StyledParagraph>{currentVolume.description}</StyledParagraph>
        <VolumeContainer $bgColor={currentVolume.color}>
          <StyledList>
            {currentVolume.books.map((book) => (
              <StyledListItem key={book.ordinal}>
                <BookOrdinal>{book.ordinal}:</BookOrdinal>{" "}
                <BookTitle>{book.title}</BookTitle>
              </StyledListItem>
            ))}
          </StyledList>
          <VolumeImage
            src={currentVolume.cover}
            alt="Cover of the volume presented"
            width={140}
            height={230}
          />
        </VolumeContainer>
        {index > 0 && (
          <Link href={`/volumes/${volumes[index - 1].slug}`}>
            <ArrowLeft />
            Previous Volume: {volumes[index - 1].title}
          </Link>
        )}
        {index < volumes.length - 1 && (
          <Link href={`/volumes/${volumes[index + 1].slug}`}>
            Next Volume: {volumes[index + 1].title} <ArrowRight />
          </Link>
        )}
      </>
    );
  }
}

const VolumeContainer = styled.div`
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  flex-direction: row;
  color: white;
  gap: 15px;
  padding: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font: var(--font-caption);
  color: unset;
  display: flex;
  align-items: center;
`;

const StyledHeadline1 = styled.h1`
  font: var(--font-headline-1);
`;

const StyledParagraph = styled.p`
  font: var(--font-body);
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 20px;
`;

const VolumeImage = styled.img``;

const BookOrdinal = styled.p`
  font: var(--font-caption--italic);
  line-height: 0;
  font-size: 0.5rem;
`;

const BookTitle = styled.p`
  font: var(--font-caption);
`;

// --font-headline-1: normal 700 44px/48px var(--font-family);
// --font-headline-2: normal 700 32px/41px var(--font-family);
// --font-title: normal 700 16px/20px var(--font-family);
// --font-caption: normal 500 12px/15px var(--font-family);
// --font-caption--italic: italic 400 12px/15px var(--font-family);
// --font-body: normal 400 16px/20px var(--font-family);
