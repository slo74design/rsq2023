import Head from "next/head";
import PublicLayout from "@/layouts/PublicLayout";
import HomeLogos from "@/components/public/Home-Logos";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});

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
                <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto my-0 px-6 lg:px-0">
                    <div className="basis-8/12">
                        <span className="font-extralight text-slate-500 uppercase text-sm lg:text-sm">
                            Nuestra filosofía
                        </span>
                        <h2
                            className={`${outfit.className} my-2 text-3xl lg:text-6xl font-extrabold tracking-normal uppercase text-rsq-100`}
                        >
                            Somos personas,
                        </h2>
                        <h3
                            className={`${outfit.className} my-2 text-2xl font-light tracking-normal uppercase text-slate-500`}
                        >
                            Queremos conocerte si vamos a trabajar juntos
                        </h3>
                        <h2
                            className={`${outfit.className} my-2 text-4xl font-extrabold tracking-normal uppercase text-rsq-300`}
                        >
                            No coleccionamos correos,
                        </h2>
                        <h3
                            className={`${outfit.className} my-2 text-2xl font-bold tracking-normal uppercase text-rsq-400`}
                        >
                            Contacta con nosotros ahora mismo
                        </h3>
                        <h2
                            className={`my-2 text-3xl font-extralight tracking-normal uppercase text-zinc-400`}
                        >
                            Hablamos Inglés, Español e Italiano
                        </h2>
                        <a
                            className={`${outfit.className} block mt-5 text-2xl font-light tracking-normal uppercase text-slate-800`}
                            href="https://www.instagram.com/remotesquid/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            → → En Instagram somos @remotesquid
                        </a>
                        <div className="mt-5 relative flex flex-col lg:flex-row justify-start items-center gap-x-4">
                            <a
                                href="https://www.instagram.com/remotesquid/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsInstagram className="h-7 w-7 text-rsq-100" />
                            </a>
                            {/* <a
                                href="https://www.linkedin.com/in/slo74/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsLinkedin className="h-7 w-7 text-sky-700" />
                            </a> */}
                        </div>
                    </div>
                    <div className="basis-4/12">
                        <Image
                            src="/images/deal.png"
                            width={400}
                            height={400}
                            priority
                            alt="RemoteSquid - solucion web no encontrada"
                            className="w-[350px] h-[350px] object-cover"
                        />
                    </div>
                </div>
                <HomeLogos />
            </PublicLayout>
        </div>
    );
}
