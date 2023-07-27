import Head from "next/head";
import PublicLayout from "@/layouts/PublicLayout";
import AboutHistoria from "@/components/public/About-Historia";
import HomeCalculadora from "@/components/public/Home-Calculadora";
import HomeServicios from "@/components/public/Home-Servicios";

export default function About() {
    return (
        <div>
            <Head>
                {/* <title>{wpHome.seoTitle}</title>
                <meta name="description" content={wpHome.seoDescription} />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google" content="nopagereadaloud" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="utf-8" />
                <meta property="og:title" content={wpHome.seoTitle} />
                <meta
                    property="og:description"
                    content={wpHome.seoDescription}
                />
                <meta property="og:image" content={wpHome.imgCanonicalUrl} />
                <meta property="og:url" content={wpHome.seoCanonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_ES" />
                <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PublicLayout>
                <AboutHistoria />
                <HomeServicios />
                <HomeCalculadora />
            </PublicLayout>
        </div>
    );
}
