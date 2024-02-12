import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  console.log("DATA", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  console.log("DATA REVIEWS", data.reviews);
  const reviews = data.reviews;
  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>{reviews.map((review) => review.title)}</p>
      <p>{reviews.map((review) => review.text)}</p>
      <p>{reviews.map((review) => review.rating)}</p>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
