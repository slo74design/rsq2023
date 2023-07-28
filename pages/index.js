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

export const metadata = {
    title: "#rsqweb, agencia leader en diseños web superrápidos para Wordpress y Shopify lovers",
    description:
        "Crea tu sitio web con los diseños #rsqweb desarrollados a medida, superrápidos, seo amigables para Wordpress y Shopify lovers",
    ogtitle:
        "#rsqweb, agencia leader en diseños web superrápidos para Wordpress y Shopify lovers",
    ogdescription:
        "Crea tu sitio web con los diseños #rsqweb desarrollados a medida, superrápidos, seo amigables para Wordpress y Shopify lovers",
    ogimage:
        "https://res.cloudinary.com/dtgka7xno/image/upload/v1690485570/logo.png",
    ogurl: "https://remotesquid.com",
};
export default function Home({ wpServices }) {
    return (
        <div>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.ogtitle} />
                <meta
                    property="og:description"
                    content={metadata.ogdescription}
                />
                <meta property="og:image" content={metadata.ogimage} />
                <meta property="og:url" content={metadata.ogurl} />
            </Head>
            <PublicLayout>
                <HomeWelcome />
                <HomeListPosts posts={wpServices} />
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
