import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/avatarvin.png" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="description" content="seo for website " />
      </Head>
      <title className="font-poppins">Ervin Arviandi I Frontend Developer 🚀</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
