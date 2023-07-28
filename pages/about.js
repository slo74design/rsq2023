import Head from "next/head";
import PublicLayout from "@/layouts/PublicLayout";
import AboutHistoria from "@/components/public/About-Historia";
import HomeCalculadora from "@/components/public/Home-Calculadora";
import HomeServicios from "@/components/public/Home-Servicios";

export const metadata = {
    title: "RemoteSquid OÜ, la agencia estona de Marketing digital y Web en España",
    description:
        "Desarrollo de sitios web, tienda ecommerce y servicios de posicionamiento organico en Google para empezar a vender productos y servicios cumpliendo todos los requerimientos de Google.",
    ogtitle:
        "RemoteSquid OÜ, la agencia estona de Marketing digital y Web en España",
    ogdescription:
        "Desarrollo de sitios web, tienda ecommerce y servicios de posicionamiento organico en Google para empezar a vender productos y servicios cumpliendo todos los requerimientos de Google.",
    ogimage:
        "https://res.cloudinary.com/dtgka7xno/image/upload/v1690485570/logo.png",
    ogurl: "https://remotesquid.com/about",
};

export default function About() {
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
                <AboutHistoria />
                <HomeServicios />
                <HomeCalculadora />
            </PublicLayout>
        </div>
    );
}
