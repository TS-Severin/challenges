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
        <FooterNavBarContainer>
          <PrevLink>
            {index > 0 && (
              <StyledLink href={`/volumes/${volumes[index - 1].slug}`}>
                <ArrowLeft />
                <FooterLink>
                  <BookOrdinal>Previous Volume:</BookOrdinal>
                  <FooterParagraph>{volumes[index - 1].title}</FooterParagraph>
                </FooterLink>
              </StyledLink>
            )}
          </PrevLink>
          <NextLink>
            {index < volumes.length - 1 && (
              <StyledLink href={`/volumes/${volumes[index + 1].slug}`}>
                <FooterLink>
                  <BookOrdinal>Next Volume:</BookOrdinal>
                  <FooterParagraph>
                    {volumes[index + 1].title}
                  </FooterParagraph>{" "}
                </FooterLink>
                <ArrowRight />
              </StyledLink>
            )}
          </NextLink>
        </FooterNavBarContainer>
      </>
    );
  }
}

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

const VolumeContainer = styled.div`
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  gap: 15px;
  padding: 20px 35px;
  margin-left: -35px;
  margin-right: -35px;
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

const VolumeImage = styled.img`
  box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.3);
`;

// Footer Styling, next and prev-Link

const FooterNavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const BookOrdinal = styled.p`
  font: var(--font-caption--italic);
  line-height: 0;
  font-size: 0.6rem;
`;

const BookTitle = styled.p`
  font: var(--font-caption);
  font-size: 0.8rem;
`;

const FooterLink = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterParagraph = styled.p`
  line-height: 0.9;
  padding: 0;
  margin: 0;
`;

const PrevLink = styled.div``;

const NextLink = styled.div``;

// --font-headline-1: normal 700 44px/48px var(--font-family);
// --font-headline-2: normal 700 32px/41px var(--font-family);
// --font-title: normal 700 16px/20px var(--font-family);
// --font-caption: normal 500 12px/15px var(--font-family);
// --font-caption--italic: italic 400 12px/15px var(--font-family);
// --font-body: normal 400 16px/20px var(--font-family);
