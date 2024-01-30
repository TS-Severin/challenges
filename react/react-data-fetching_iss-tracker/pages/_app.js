import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 5000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
