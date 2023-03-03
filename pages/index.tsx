import Head from "next/head";
import { Home } from "@app/src/pages";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Bonkz Burn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Bonkz NFT" />
        {/* og */}
        <meta property="og:title" content="Bonkz NFT" />
        {/* <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        /> */}
        <meta property="og:image" content="/images/bonkz-orange.png" />
        {/* // twitter */}
        <meta name="twitter:card" content="Bonkz movement" />
        <meta name="twitter:site" content="@BonkzNFT_" />
        <meta name="twitter:title" content="Bonkz" />
        <meta name="twitter:description" content="Bonkz burning bonk" />
        <meta name="twitter:image" content="/images/bonkz-orange.png" />
        {/* <meta
          name="google-site-verification"
          content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
        /> */}
        <title>Bonkz</title>
        <meta name="bonkz" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
};

export default HomePage;
