import Head from "next/head";
import PublicLayout from "@/layouts/PublicLayout";
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
export default function Contact() {
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
                <div className="max-w-5xl mx-auto my-20 px-6 lg:px-0">
                    <p>sasas</p>
                </div>
                <HomeLogos />
            </PublicLayout>
        </div>
    );
}
