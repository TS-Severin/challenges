import useSWR from "swr";

export default function HomePage() {
const {data, isLoading} = useSWR("/api/random-character");

if (isLoading) {
  return <h1>Loading...</h1>;
}

if (!data) {
  return;
}

  return (
    <>
  <h1>A random character</h1>
  <p>{`${data.character.firstName} ${data.character.lastName}`}</p>
  </>
  )
}
