import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { CldImage } from "next-cloudinary";

import PublicLayout from "@/layouts/PublicLayout";
import HomeCalculadora from "@/components/public/Home-Calculadora";
import { SingleFaqs } from "@/components/public/Single-Faqs";

import { getAllPosts } from "@/lib/getAllPosts";
import { getPostByUri } from "@/lib/getPostByUri";

import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "600", "700", "800"],
    subsets: ["latin"],
});

// Integration con GA4
import * as ga from "../lib/ga";
import SocialShareIcons from "@/ui/SocialShareIcons";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function SlugPage({ post }) {
    const [msgForm, setMsgForm] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const formData = {
                _formType: data.formType,
                _email: data.email,
                _firstName: data.firstName,
                _mensaje: data.mensaje,
                _gdpr: data.gdpr,
            };

            const callApi = await fetch(
                `${process.env.WORDPRESS_API_URL}/api/subscribersForm`,
                {
                    method: "POST",
                    body: JSON.stringify({ formData }),
                    headers: {
                        Authorization: "Basic " + process.env.NEXTAUTH_SECRET,
                        "Content-Type": "application/json",
                    },
                }
            );
            const apiRes = await callApi.json();
            if (apiRes.sent === "1") {
                setMsgForm("Mensaje enviado correctamente");
                ga.event({
                    action: "generate_lead",
                    category: "engagement",
                    label: "Send Form to Mailchimp",
                    value: "Free",
                });
            } else {
                setMsgForm(
                    "No se ha podido enviar tu mensaje. Revisa los datos del formulario."
                );
            }
            setTimeout(() => {
                setMsgForm("");
            }, 3000);
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Head>
                <title>{post.pSeoTitle}</title>
                <meta name="description" content={post.pSeoDescription} />
                <meta property="og:title" content={post.pSeoTitle} />
                <meta
                    property="og:description"
                    content={post.pSeoDescription}
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dtgka7xno/image/upload/v1690485570/logo.png"
                />
                <meta property="og:url" content={post.pSeoCanonicalUrl} />
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
                <div className="px-6 py-10 lg:py-24 lg:px-8 postTemplate bg-white rounded-t-3xl">
                    <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700">
                        <p
                            className={`${outfit.className} font-extralight text-rsq-800 uppercase text-sm lg:text-base`}
                        >
                            {post.pCategoryName} - Solución #{post.pId}
                        </p>
                        <h1
                            className={`${outfit.className} font-extrabold text-rsq-100 text-3xl lg:text-3xl leading-tight my-0`}
                        >
                            {post.pTitle}
                        </h1>
                        <div
                            className="text-base xl:text-lg xl:leading-7 tracking-tight font-light text-slate-400 leading-6 mt-6"
                            dangerouslySetInnerHTML={{
                                __html: post.pExcerpt,
                            }}
                        />
                        <div className="flex justify-start items-center mt-4">
                            <SocialShareIcons detailPost={post} />
                        </div>
                        <CldImage
                            src={post.pFeatImgUri}
                            width={1440}
                            height={400}
                            alt={post.pFeatImgSeoTitle}
                            priority
                            className="w-full h-80 object-cover my-8 rounded-lg"
                        />
                        <div
                            className="text-base xl:text-lg xl:leading-relaxed tracking-tight font-light text-slate-700 leading-6"
                            dangerouslySetInnerHTML={{
                                __html: post.pContent,
                            }}
                        />
                        <div className="border border-rsq-800 rounded-xl p-6 mt-10 formTemplate">
                            <h3
                                className={`${outfit.className} text-2xl font-semibold`}
                            >
                                {post.pType === "1"
                                    ? "¿Tienes dudas? Envia tu pregunta"
                                    : "Detalla tu idea, y te enviamos un presupuesto"}
                            </h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-12">
                                    <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-6">
                                        <input
                                            type="text"
                                            name="formType"
                                            id="formType"
                                            className="hidden"
                                            value={post.pType}
                                            {...register("formType")}
                                        />

                                        <div className="sm:col-span-3">
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    placeholder="Tu nombre"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    {...register("firstName", {
                                                        required: true,
                                                        maxLength: 20,
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Correo Electrónico"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    {...register("email", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <div className="mt-2">
                                                <textarea
                                                    rows={3}
                                                    name="mensaje"
                                                    id="mensaje"
                                                    placeholder="Inserta tu pregunta"
                                                    autoComplete="street-address"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    {...register("mensaje", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3 col-span-full">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="gdpr"
                                                    name="gdpr"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    {...register("gdpr", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label
                                                    htmlFor="comments"
                                                    className="font-medium text-gray-900"
                                                >
                                                    Acepto las condiciones de
                                                    Politica de Privacidad y
                                                    Cookies de RemoteSquid
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 mt-6 lg:mt-0 flex items-center justify-end gap-x-6">
                                    <button
                                        type="submit"
                                        className={`${outfit.className} rounded-md bg-rsq-200 uppercase px-6 py-2.5 text-sm font-semibold text-white shadow-sm tracking-wider hover:bg-rsq-700`}
                                    >
                                        Envía
                                    </button>
                                </div>
                                <div className="mb-6 flex items-center justify-center gap-x-6 text-rsq-400 font-semibold text-sm">
                                    {msgForm}
                                </div>
                            </form>
                        </div>
                        <div className="px-0 py-8">
                            <SingleFaqs />
                        </div>
                    </div>

                    <HomeCalculadora title="¿Cuanto vale un diseño #rsqweb?" />
                </div>
            </PublicLayout>
        </div>
    );
}

export const getStaticPaths = async (ctx) => {
    const postsList = await getAllPosts();

    return {
        paths: postsList.map((items) => ({
            params: {
                uri: items.pUri,
            },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params }) => {
    const { uri } = params;
    const resPostObj = await getPostByUri(uri);

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
