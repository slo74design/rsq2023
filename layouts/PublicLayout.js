import React from "react";
import Head from "next/head";
import { PublicNav } from "@/navigations/PublicNav";
import MainFooter from "@/navigations/MainFooter";

const PublicLayout = ({ children, metadata }) => {
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
            <div className="bg-white min-h-screen min-w-screen">
                <PublicNav />
                {children}
                <MainFooter />
            </div>
        </>
    );
};

export default PublicLayout;
