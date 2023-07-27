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
        id: 1,
        name: "Diseño Web",
        href: "http://",
        urlImage:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-diseno_xs6jsk.svg",
    },
    {
        id: 2,
        name: "Seo & contenido",
        href: "http://",
        urlImage:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500055/rsqweb/pres-seo_dxz9of.svg",
    },
    {
        id: 3,
        name: "Mobile app",
        href: "http://",
        urlImage:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-mobile_pdhedh.svg",
    },
    {
        id: 4,
        name: "Datos y estrategia",
        href: "http://",
        urlImage:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500053/rsqweb/pres-datos_jll4kv.svg",
    },
];

const HomeCalculadora = ({ title = "Calcula tu presupuesto web" }) => {
    return (
        <div className="my-10 lg:my-20">
            <div className="relative flex items-center justify-center z-1 h-48 lg:h-60 overflow-hidden">
                <div className="hidden lg:block absolute">
                    <h1
                        className={`flex ${outfit.className} text-gray-100 text-lg lg:text-[230px] uppercase font-extrabold`}
                    >
                        Calculadora
                    </h1>
                </div>
                <div className="absolute mx-auto top-0 sm:top-24 left-0 right-0 text-left lg:text-center">
                    <h2
                        className={`${outfit.className} text-3xl lg:text-5xl px-6 lg:px-0 sm:leading-none text-fill-black font-extrabold tracking-normal uppercase text-rsq-900`}
                    >
                        {title}
                    </h2>
                    <p
                        className={`${outfit.className} mt-2 px-6 lg:px-0 text-lg sm:text-xl leading-6 sm:leading-7 text-slate-700 font-extralight max-w-full sm:max-w-3xl mx-auto`}
                    >
                        Diseños y aplicaciones web, a medida, para cualquier
                        actividad en linea. Nuestras creaciones son compatibles
                        con Wordpress, Shopify y ... Google.
                    </p>
                </div>
            </div>
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8 px-6 lg:px-0 max-w-5xl mx-auto mt-16 lg:mt-8 mb-10">
                {calcserv.map((item) => (
                    <Link
                        href={item.href}
                        className="flex flex-col justify-center items-center"
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

export default HomeCalculadora;
