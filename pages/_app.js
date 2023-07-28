import Script from "next/script";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-TRFFZ4FEPC`}
            />
            <Script
                id="ga4RSQ"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-TRFFZ4FEPC', {
                          page_path: window.location.pathname,
                        });
                      `,
                }}
            />
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
}
