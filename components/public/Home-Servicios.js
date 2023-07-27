import React from "react";
import { CldImage } from "next-cloudinary";
import { Inter, Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});
const inter = Inter({
    weight: ["100", "200"],
    subsets: ["latin"],
});

const serv = [
    {
        id: 1,
        name: "Diseños web en Wordpress",
    },
    {
        id: 2,
        name: "Tiendas en Shopify",
    },
    {
        id: 3,
        name: "SaaS ",
    },
    {
        id: 4,
        name: "Aplicaciones web SPA",
    },
    {
        id: 5,
        name: "Generación de contenido",
    },
    {
        id: 6,
        name: "Optimización de contenido SEO",
    },
    {
        id: 7,
        name: "Traducciones profesionales",
    },
    {
        id: 8,
        name: "Email Marketing",
    },
    {
        id: 9,
        name: "Consulencia web & ecommerce",
    },
    {
        id: 10,
        name: "Analysis de datos & KPIs",
    },
    {
        id: 11,
        name: "Automación",
    },
];

const HomeServicios = () => {
    return (
        <div className="my-10 lg:my-20">
            <div className="relative flex items-center justify-center z-1 h-36 lg:h-60">
                <div className="absolute">
                    <h1
                        className={`flex ${outfit.className} text-gray-100 text-[72px] no-wrap lg:text-[230px] uppercase font-extrabold`}
                    >
                        Servicios
                    </h1>
                </div>
                <div className="absolute mx-auto">
                    <CldImage
                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1689500071/rsqweb/servicios_bllzwa.svg"
                        width={180}
                        height={180}
                        alt="Logo de RemoteSquid OU"
                    />
                </div>
            </div>
            <div className="relative grid grid-rows-1 lg:grid-rows-4 lg:grid-flow-col gap-x-8 max-w-lg lg:max-w-6xl mx-auto mt-6 mb-10">
                {serv.map((item) => (
                    <div
                        className="flex flex-col justify-center items-start"
                        key={item.id}
                    >
                        <p
                            className={`${inter.className} text-rsq-100 text-lg font-extralight leading-relaxed pl-3 py-2`}
                        >
                            {item.name}
                        </p>
                        <hr className="border-b-[1px] border-rsq-600 w-14 cursor-pointer" />
                    </div>
                ))}
            </div>
            <div className="relative flex justify-center items-center max-w-xl mx-auto mt-10">
                <button
                    type="button"
                    className={`${outfit.className} rounded-md bg-rsq-200 uppercase px-6 py-3 text-base lg:text-lg font-bold text-white shadow-sm tracking-wider hover:bg-rsq-700`}
                >
                    Habla con nosotros
                </button>
            </div>
        </div>
    );
};

export default HomeServicios;
