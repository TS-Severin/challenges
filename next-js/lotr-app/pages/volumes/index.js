import { introduction, volumes } from "../../resources/lib/data";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { styled } from "styled-components";

// Overview Page

export default function Volumes() {
  const router = useRouter();

  function handleRandomButton(volumes) {
    const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`volumes/${randomVolume.slug}`);
    console.log(`volumes/${randomVolume.slug}`);
  }

  const handleClick = () => handleRandomButton(volumes);

  return (
    <>
      <Head>
        <title>The Lord of the Rings</title>
      </Head>
      <StyledHeadline1>The Lord of the Rings</StyledHeadline1>
      <StyledParagraph>{introduction}</StyledParagraph>
      <StyledHeadline2>All Volumes</StyledHeadline2>
      <StyledList>
        {volumes.map((volume) => (
          <VolumeListItem key={volume.title}>
            <StyledLink href={`/volumes/${volume.slug}`}>
              <VolumeImage
                src={volume.cover}
                alt={`Cover of volume: ${volume.title}`}
              />
              <div>{volume.title}</div>
            </StyledLink>
          </VolumeListItem>
        ))}
      </StyledList>
      <button onClick={handleClick}>randomVolume</button>
    </>
  );
}

// styled components

const StyledHeadline1 = styled.h1`
  font: var(--font-headline-1);
`;

const StyledHeadline2 = styled.h1`
  font: var(--font-headline-2);
`;

const StyledParagraph = styled.p`
  font: var(--font-body);
`;

const StyledList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 30px;
`;

const VolumeListItem = styled.li`
  flex: 1;
`;

const VolumeImage = styled.img`
  width: 100%;
  box-shadow: var(--box-shadow-book);
  margin-bottom: 10px;
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: 0 4px 8px -2px rgba(255, 255, 255, 0.09),
      0 7px 4px -4px rgba(255, 255, 255, 0.07),
      0 16px 8px -8px rgba(255, 255, 255, 0.07),
      0 22px 12px -12px rgba(255, 255, 255, 0.07),
      0 2px 10px 0 rgba(255, 255, 255, 0.06);
    &:hover {
      box-shadow: 0 6px 11px -2px rgba(255, 255, 255, 0.12),
        0 8px 7px -4px rgba(255, 255, 255, 0.09),
        0 17px 11px -8px rgba(255, 255, 255, 0.09),
        0 24px 15px -12px rgba(255, 255, 255, 0.09),
        0 4px 15px 0 rgba(255, 255, 255, 0.05);
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font: var(--font-caption);
  color: unset;
`;
