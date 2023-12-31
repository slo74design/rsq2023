import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import "@/styles/globals.css";

// Integration con GA4
import * as ga from "../lib/ga";
import { CookiesProvider } from "@/context/cookiesProvider";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
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
                <CookiesProvider>
                    <Component {...pageProps} />
                </CookiesProvider>
            </ApolloProvider>
        </>
    );
}
