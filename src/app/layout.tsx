"use client";

import { RecoilRoot } from "recoil";
import Entry from "./Entry";
import Favicon from "./favicon.ico"

const HeadMeta = () => {
  return (
    <head>
      <title>Tokamak Price Dashboard</title>
      <link rel="icon" href="favicon.ico" sizes="any" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://price.tokamak.network" />
      <meta property="og:title" content="Tokamak Price Dashboard" />
      <meta
        name="viewport"
        content="width=device-width,user-scalable=no,initial-scale=1,shrink-to-fit=n"
      />
      <meta
        name="description"
        content="Tokamak Price Dashboard offers a information about TON supply."
      />
      <meta
        property="og:description"
        content="Tokamak Price Dashboard offers a information about TON supply."
      />
      <meta name="keywords" content="tokamak price dashboard supply" />
      
    </head>
  );
};

// const GoogleAnalyticsScript = () => {
//   return (
//     <>
//       <Script
//         async
//         src="https://www.googletagmanager.com/gtag/js?id=G-DVJG6CWTNM"
//       ></Script>
//       <Script>
//         {`window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-DVJG6CWTNM');`}
//       </Script>
//     </>
//   );
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const queryClient = getQueryClient();
  return (
    <html lang="en">
      {/* <GoogleAnalyticsScript /> */}
      <HeadMeta />
      <body style={{ maxHeight: "100vh", margin: 0, padding: 0 }}>
        <RecoilRoot>
          <Entry children={children} />
        </RecoilRoot>
      </body>
    </html>
  );
}