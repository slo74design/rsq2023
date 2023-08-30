import React, { useContext } from "react";
import Head from "next/head";
import Header from "@/navigations/Header";
import MainFooter from "@/navigations/MainFooter";

import CookiesContext from "@/context/cookiesProvider";

import { Inter } from "next/font/google";
import BannerBottomCookiesConsent from "@/components/public/Banner-BottomCookiesConsent";
const inter = Inter({
    weight: ["100", "200", "300", "400", "600", "700", "800"],
    subsets: ["latin"],
});

const PublicLayout = ({ children }) => {
    const { cookiesConsent } = useContext(CookiesContext);
    return (
        <>
            <Head>
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google" content="nopagereadaloud" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="utf-8" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_ES" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Fondo columnas coloradas */}
            <div
                className={`${inter.className} bg-white min-h-full w-screen p-0 relative isolate`}
            >
                <div className="flex flex-row gap-x-4 absolute top-0 left-0 min-h-full w-full -z-10 overflow-auto">
                    <div className="basis-1/12 bg-rose-50/40 min-h-screen" />
                    <div className="basis-1/12 bg-purple-50/20 min-h-screen" />
                    <div className="basis-1/12 bg-rose-50/50 min-h-screen" />
                    <div className="basis-1/12 bg-purple-50/60 min-h-screen" />
                    <div className="basis-1/12 bg-rose-50/40 min-h-screen" />
                    <div className="basis-1/12 bg-purple-50/30 min-h-screen" />
                    <div className="basis-1/12 bg-purple-50/50 min-h-screen" />
                    <div className="basis-1/12 bg-rose-50/20 min-h-screen" />
                    <div className="basis-1/12 bg-rose-50/50 min-h-screen" />
                    <div className="basis-1/12 bg-rose-50/10 min-h-screen" />
                    <div className="basis-1/12 bg-rose-50/50 min-h-screen" />
                    <div className="basis-1/12 bg-purple-50/60 min-h-screen" />
                </div>
                <Header />
                {children}
                <MainFooter />
                {(cookiesConsent === "nil" ||
                    cookiesConsent === undefined ||
                    cookiesConsent === "") && <BannerBottomCookiesConsent />}
            </div>
        </>
    );
};

export default PublicLayout;
