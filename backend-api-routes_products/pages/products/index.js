import useSWR from "swr";
import Link from "next/link";
import { Fragment } from "react";

export default function Products() {
  const { data, isLoading } = useSWR("api/products");

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <ul>
      {data.map(({ id, name, description, price, currency, category }) => (
        <li key={id}>
          <Link href={`/products/${id}`}>
            <h3>{name}</h3>{" "}
          </Link>
          <br />
          {description} <br /> {price} {currency} <br />
          <i>{category}</i>
        </li>
      ))}
    </ul>
  );
}
