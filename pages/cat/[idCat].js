import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { CldImage } from "next-cloudinary";

import PublicLayout from "@/layouts/PublicLayout";
import HomeCalculadora from "@/components/public/Home-Calculadora";
import { SingleFaqs } from "@/components/public/Single-Faqs";

import { getPostByUri } from "@/lib/getPostByUri";

import { Inter, Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "600", "700", "800"],
    subsets: ["latin"],
});
const inter = Inter({
    weight: ["100", "200", "300", "600", "700", "400"],
    subsets: ["latin"],
});

// Integration con GA4
import * as ga from "../../lib/ga";
import { getPostsByCatId } from "@/lib/getPostByCatId";
import { getAllCats } from "@/lib/getAllCats";
import HomeListPosts from "@/components/public/Home-ListPosts";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function SlugCat({ post }) {
    return (
        <div>
            <Head>
                {/* <title>{post.pSeoTitle}</title>
                <meta name="description" content={post.pSeoDescription} />
                <meta property="og:title" content={post.pSeoTitle} />
                <meta
                    property="og:description"
                    content={post.pSeoDescription}
                /> */}
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dtgka7xno/image/upload/v1690485570/logo.png"
                />
                {/* <meta property="og:url" content={post.pSeoCanonicalUrl} /> */}
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
            <PublicLayout>
                <div className="px-6 py-10 lg:py-24 lg:px-8 postTemplate">
                    <HomeListPosts posts={post} />
                </div>
            </PublicLayout>
        </div>
    );
}

export const getStaticPaths = async (ctx) => {
    const catsList = await getAllCats();

    return {
        paths: catsList.map((items) => ({
            params: {
                idCat: items.cId.toString(),
            },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params }) => {
    const { idCat } = params;
    const resPostObj = await getPostsByCatId(idCat);

    if (!resPostObj) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            post: resPostObj,
        },
        revalidate: 60 * 60,
    };
};
