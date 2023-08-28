import Head from "next/head";

import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

import PublicLayout from "@/layouts/PublicLayout";
import HomeScrollText from "@/components/public/Home-ScrollText";
import HomeCalculadora from "@/components/public/Home-Calculadora";
import HomeCtaRx from "@/components/public/Home-CtaRx";
import HomeListPosts from "@/components/public/Home-ListPosts";
import HomeStats from "@/components/public/Home-Stats";
import HomeLogos from "@/components/public/Home-Logos";
import Headline from "@/components/public/Headline";
import HomeRsq from "@/components/public/Home-RSQ";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

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
export default function Posts({ wpServices }) {
    const [dataApi, setDataApi] = useState([]);
    const [valueForm, setValueForm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let res;
        setIsLoading(true);
        setDataApi(wpServices);

        if (valueForm !== "") {
            res = wpServices.filter((item) =>
                item.pTitle.toLowerCase().includes(valueForm.toLowerCase())
            );
        }
        setDataApi(res);
        setIsLoading(false);
    }, [wpServices, valueForm]);

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
                <div className="max-w-5xl mx-auto my-10 px-6 lg:px-8 xl:px-0">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                        <input
                            type="text"
                            name="searchTxt"
                            id="searchTxt"
                            onChange={(e) => setValueForm(e.target.value)}
                            className="block w-full rounded-full  border-slate-300 border py-1.5 pl-10 text-rsq-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-0"
                            placeholder="Busca por solución"
                        />
                    </div>
                </div>
                {valueForm !== "" && dataApi?.length > 0 ? (
                    <HomeListPosts posts={dataApi} />
                ) : (
                    <HomeListPosts posts={wpServices} />
                )}
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
                    categories {
                        nodes {
                            name
                            slug
                        }
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
                pCatSlug: item.categories?.nodes[0]?.slug,
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
