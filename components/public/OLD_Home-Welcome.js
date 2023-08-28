import React from "react";
import { CldImage } from "next-cloudinary";
import { Outfit } from "next/font/google";
const outfit = Outfit({ weight: ["100", "300", "800"], subsets: ["latin"] });

const pics = [
    {
        id: 1,
        name: "Diseño Web",
        url: "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500053/rsqweb/diseno_lnqsin.svg",
        wdt: 200,
        hgt: 200,
    },
    {
        id: 2,
        name: "Analisis de datos",
        url: "https://res.cloudinary.com/dtgka7xno/image/upload/v1689501798/rsqweb/datos_lc4au9.svg",
        wdt: 200,
        hgt: 200,
    },
    {
        id: 3,
        name: "Visibilidad",
        url: "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500071/rsqweb/visibilidad_no8u3w.svg",
        wdt: 200,
        hgt: 200,
    },
    {
        id: 4,
        name: "Innovaciones",
        url: "https://res.cloudinary.com/dtgka7xno/image/upload/v1689501798/rsqweb/innovaciones_wfk5ao.svg",
        wdt: 200,
        hgt: 200,
    },
];

const HomeWelcome = () => {
    return (
        <>
            <div className="flex justify-center items-center relative z-1 h-72 sm:h-80 overflow-x-hidden">
                <div className="hidden lg:block absolute">
                    <h1
                        className={`flex ${outfit.className} text-gray-100 text-lg lg:text-[250px] uppercase font-extrabold`}
                    >
                        RemoteSquid
                    </h1>
                </div>
                <div className="absolute mx-auto top-8 sm:top-36 left-0 right-0 text-left lg:text-center">
                    <h2
                        className={`${outfit.className} text-3xl lg:text-5xl px-6 lg:px-0 sm:leading-none text-fill-black font-extrabold tracking-normal uppercase text-rsq-900`}
                    >
                        Digitalizamos tu idea de negocio
                    </h2>
                    <p
                        className={`${outfit.className} mt-2 px-6 lg:px-0 text-lg sm:text-xl leading-6 sm:leading-7 text-slate-700 font-extralight max-w-full sm:max-w-3xl mx-auto`}
                    >
                        Desarrollamos paginas webs que te ayudan a alcanzar tus
                        objetivos.
                        <br className="hidden lg:block" />
                        Diseñamos y desarrollamos webs que te ayudan a vender
                        más.
                        <br className="hidden lg:block" />
                        Te ayudamos a tener una presencia online de éxito.
                    </p>
                </div>
            </div>
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-8 max-w-5xl mx-auto mt-2 mb-10">
                {pics.map((item) => (
                    <div
                        className="flex flex-col justify-center items-center"
                        key={item.id}
                    >
                        <CldImage
                            src={item.url}
                            width={200}
                            height={200}
                            alt="Logo de RemoteSquid OU"
                            className="w-28 h-28 lg:w-48 lg:h-48"
                        />
                        <p
                            className={`${outfit.className} text-fields-200 text-sm lg:text-base uppercase`}
                        >
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};
export default HomeWelcome;
