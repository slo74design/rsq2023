import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});

const calcserv = [
    {
        id: 6,
        name: "Diseño y Rendimiento",
        urlImage:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-diseno_xs6jsk.svg",
    },
    {
        id: 8,
        name: "Trafico y ventas",
        urlImage:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500055/rsqweb/pres-seo_dxz9of.svg",
    },
    {
        id: 5,
        name: "visibilidad",
        urlImage:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-mobile_pdhedh.svg",
    },
    {
        id: 1,
        name: "experiencia de usuario",
        urlImage:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500053/rsqweb/pres-datos_jll4kv.svg",
    },
];

const HomeRsq = () => {
    return (
        <div className="my-10">
            <div className="relative flex items-center justify-center z-1 h-80 overflow-hidden">
                <div className="hidden lg:block absolute">
                    <h1
                        className={`flex ${outfit.className} text-rsq-300/10 text-lg lg:text-[230px] uppercase font-extrabold`}
                    >
                        Objetivos
                    </h1>
                </div>
                <div className="absolute mx-auto top-0 sm:top-24 left-0 right-0 text-left lg:text-center">
                    <h2
                        className={`${outfit.className} text-3xl lg:text-5xl px-6 lg:px-0 sm:leading-none text-fill-black font-extrabold tracking-normal uppercase text-rsq-900`}
                    >
                        Comprometidos con los resultados
                    </h2>
                    <p
                        className={`${outfit.className} mt-2 px-6 lg:px-0 text-lg sm:text-xl leading-6 sm:leading-7 font-light text-slate-600 max-w-full sm:max-w-3xl mx-auto`}
                    >
                        Desarrollamos paginas webs, a medida, que te ayudan a
                        alcanzar tus objetivos.
                        <br />
                        Diseñamos sitios y tiendas webs modernas que ofrecen
                        experiencias de usuarios únicas.
                        <br />
                        Son 100% compatibles con Wordpress, Shopify y ...
                        Google.
                    </p>
                </div>
            </div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-x-8 px-6 lg:px-0 max-w-5xl mx-auto mt-16 md:mt-10 lg:mt-8 mb-10">
                {calcserv.map((item) => (
                    <Link
                        href={`/cat/` + item.id}
                        className="flex flex-col justify-start items-center min-h-[250px]"
                        key={item.id}
                    >
                        <CldImage
                            src={item.urlImage}
                            width={200}
                            height={200}
                            alt="Logo de RemoteSquid OU"
                            className=" lg:w-48 lg:h-48"
                        />
                        <p
                            className={`${outfit.className} text-fields-200 text-sm lg:text-base uppercase mt-2`}
                        >
                            {item.name}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeRsq;
