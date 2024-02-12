import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!data) {
    return;
  }
  return <h1>{data.name}</h1>;
}
