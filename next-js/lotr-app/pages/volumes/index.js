import { introduction, volumes } from "../../resources/lib/data";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
      <h1>Lord of the Rings</h1>;<p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.title}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>randomVolume</button>
    </>
  );
}
