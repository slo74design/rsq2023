import React from "react";
import Head from "next/head";
import PublicLayout from "@/layouts/PublicLayout";
import { Inter, Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});
const inter = Inter({
    weight: ["100", "200"],
    subsets: ["latin"],
});

export default function Privacidad() {
    return (
        <div>
            <Head>
                <title>RemoteSquid OÜ - Politica de Privacidad</title>
                <meta
                    name="description"
                    content="Documento de Política de Privacidad de RemoteSquid OÜ"
                />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google" content="nopagereadaloud" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="utf-8" />
                <meta
                    property="og:title"
                    content="RemoteSquid OÜ - Politica de Privacidad"
                />
                <meta
                    property="og:description"
                    content="Documento de Política de Privacidad de RemoteSquid OÜ"
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dtgka7xno/image/upload/v1690485570/logo.png"
                />
                <meta
                    property="og:url"
                    content="https://res.cloudinary.com/dtgka7xno/image/upload/v1690485570/logo.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_ES" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PublicLayout>
                <div className="bg-white px-6 py-32 lg:px-8">
                    <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                        <h1
                            className={`${outfit.className} text-xl lg:text-3xl leading-6 font-extrabold text-rsq-100`}
                        >
                            Política de Privacidad
                        </h1>
                        <p
                            className={`${inter.className} mt-5 text-sm lg:text-lg font-light text-rsq-900 leading-8`}
                        >
                            Aliquet nec orci mattis amet quisque ullamcorper
                            neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                            eget aliquam. Quisque id at vitae feugiat egestas
                            ac. Diam nulla orci at in viverra scelerisque eget.
                            Eleifend egestas fringilla sapien.
                        </p>
                    </div>
                </div>
            </PublicLayout>
        </div>
    );
}
