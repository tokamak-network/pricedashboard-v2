"use client";

// import { ChakraProvidersForNextJs } from "@/providers/chakraProvider";
// import { WagmiProviders } from "@/providers/wagmiProvider";
import { RecoilRoot } from "recoil";
// import Header from "@/components/header/Index";

// import "css/scrollbar.css";

// import { QueryClientProvider } from "@tanstack/react-query";
// import { getQueryClient } from "@/client/queryClient";
import Entry from "./Entry";
import Script from "next/script";

export const HeadMeta = () => {
  return (
    <head>
      <title>Tokamak Price Dashboard</title>
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
      ></meta>
      <meta
        property="og:description"
        content="Tokamak Price Dashboard offers a information about TON supply."
      ></meta>
      <meta name="keywords" content="tokamak price dashboard supply" />
      <link rel="icon" href="./favicon.ico" />
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
          {/* <QueryClientProvider client={queryClient}> */}
            {/* <ChakraProvidersForNextJs> */}
              {/* <WagmiProviders> */}
                <Entry children={children} />
                {/* <AccountHistory /> */}
                {/* <Header />
                  <Center h={"100vh"}>{children}</Center>
                  <GlobalComponents />
                  <Modals /> */}
                  {/* <Drawers/> */}
              {/* </WagmiProviders> */}
            {/* </ChakraProvidersForNextJs> */}
          {/* </QueryClientProvider> */}
        </RecoilRoot>
      </body>
    </html>
  );
}