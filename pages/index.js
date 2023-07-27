import Head from "next/head";

import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import PublicLayout from "@/layouts/PublicLayout";

import HomeWelcome from "@/components/public/Home-Welcome";
import HomeScrollText from "@/components/public/Home-ScrollText";
import HomeCalculadora from "@/components/public/Home-Calculadora";
import HomeCtaRx from "@/components/public/Home-CtaRx";
import HomeListPosts from "@/components/public/Home-ListPosts";
import HomeServicios from "@/components/public/Home-Servicios";
import HomeStats from "@/components/public/Home-Stats";
import HomeLogos from "@/components/public/Home-Logos";

export default function Home({ wpServices }) {
    return (
        <div>
            <Head>
                {/* <title>{wpHome.seoTitle}</title> */}
                {/* <meta name="description" content={wpHome.seoDescription} /> */}
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google" content="nopagereadaloud" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="utf-8" />
                {/* <meta property="og:title" content={wpHome.seoTitle} /> */}
                {/* <meta
                    property="og:description"
                    content={wpHome.seoDescription}
                /> */}
                {/* <meta property="og:image" content={wpHome.imgCanonicalUrl} />
                <meta property="og:url" content={wpHome.seoCanonicalUrl} /> */}
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_ES" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PublicLayout>
                <HomeWelcome />
                {/* <HomeListPosts posts={wpServices} /> */}
                <HomeScrollText />
                <HomeCtaRx />
                <HomeServicios />
                <HomeCalculadora title="El presupuesto para tu próxima web" />
                <HomeStats />
                <HomeLogos />
            </PublicLayout>
        </div>
    );
}

export async function getStaticProps() {
    const arrServices = [];

    const GET_FIVE_POSTS = gql`
        query GetAllPosts {
            posts(
                where: {
                    status: PUBLISH
                    orderby: { order: DESC, field: DATE }
                }
                first: 5
            ) {
                nodes {
                    status
                    slug
                    title
                    uri
                    dateGmt
                    excerpt
                    databaseId
                    tipoPost {
                        clasificacionForm
                        tituloLargo
                        tituloCta
                    }
                }
            }
        }
    `;

    const responseServices = await client.query({
        query: GET_FIVE_POSTS,
    });
    const apiServices = responseServices?.data?.posts?.nodes;
    apiServices.map((item) => {
        if (item) {
            arrServices.push({
                pId: item.databaseId,
                pTitle: item.tipoPost?.tituloLargo,
                pUri: item.uri,
                pDate: item.dateGmt,
                pExcerpt: item.excerpt,
                pType: item.tipoPost?.clasificacionForm, // postLayout para determinar el formato del post
                pCta: item.tipoPost?.tituloCta,
            });
        }
    });

    arrServices.sort((a, b) => a.pId - b.pId);

    return {
        props: {
            wpServices: arrServices || [],
        },
    };
}
