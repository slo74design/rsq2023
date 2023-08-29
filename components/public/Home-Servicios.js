import React from "react";
import { CldImage } from "next-cloudinary";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});

const serv = [
    {
        id: 1,
        name: "Estrategia web",
        bgColor: "bg-rsq-800",
        category: "Trafico y Ventas",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500055/rsqweb/pres-seo_dxz9of.svg",
    },
    {
        id: 2,
        name: "Mockup y Wireframes",
        bgColor: "bg-rsq-700",
        category: "Experencia de Usuarios",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500053/rsqweb/pres-datos_jll4kv.svg",
    },
    {
        id: 3,
        name: "Diseños web",
        bgColor: "bg-slate-900",
        category: "Diseño y Rendimiento",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-diseno_xs6jsk.svg",
    },
    {
        id: 4,
        name: "Aplicaciones para móviles",
        bgColor: "bg-slate-900",
        category: "Diseño y Rendimiento",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-diseno_xs6jsk.svg",
    },
    {
        id: 5,
        name: "Generación de contenido",
        bgColor: "bg-rsq-350",
        category: "Visibilidad",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-mobile_pdhedh.svg",
    },
    {
        id: 6,
        name: "Traducciones profesionales",
        bgColor: "bg-rsq-350",
        category: "Visibilidad",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-mobile_pdhedh.svg",
    },
    {
        id: 7,
        name: "Optimización de contenido SEO",
        bgColor: "bg-rsq-350",
        category: "Visibilidad",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-mobile_pdhedh.svg",
    },
    {
        id: 8,
        name: "Email Marketing",
        bgColor: "bg-rsq-800",
        category: "Trafico y Ventas",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500055/rsqweb/pres-seo_dxz9of.svg",
    },
    {
        id: 9,
        name: "Analysis de datos & KPIs",
        bgColor: "bg-rsq-800",
        category: "Trafico y Ventas",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500055/rsqweb/pres-seo_dxz9of.svg",
    },
    {
        id: 10,
        name: "Automación",
        bgColor: "bg-rsq-700",
        category: "Experencia de Usuarios",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500053/rsqweb/pres-datos_jll4kv.svg",
    },
    {
        id: 11,
        name: "Mantenimiento",
        bgColor: "bg-slate-900",
        category: "Diseño y Rendimiento",
        initials:
            "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-diseno_xs6jsk.svg",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const HomeServicios = () => {
    return (
        <div className="my-10 lg:my-20">
            <div className="relative flex items-center justify-center z-1 h-48 lg:h-72 overflow-hidden">
                <div className="hidden lg:block absolute">
                    <h1
                        className={`flex ${outfit.className} text-rsq-300/10 text-lg lg:text-[230px] uppercase font-extrabold`}
                    >
                        Soluciones
                    </h1>
                </div>
                <div className="absolute mx-auto top-0 sm:top-24 left-0 right-0 text-left lg:text-center">
                    <h2
                        className={`${outfit.className} text-3xl lg:text-5xl px-6 lg:px-0 sm:leading-none text-fill-black font-extrabold tracking-normal uppercase text-rsq-900`}
                    >
                        Soluciones que generan trafico web
                    </h2>
                    <p
                        className={`${outfit.className} mt-2 px-6 lg:px-0 text-lg sm:text-xl leading-6 sm:leading-7 font-light text-slate-600 max-w-full sm:max-w-3xl mx-auto`}
                    >
                        Te ayudamos en crear páginas web, generar contenidos de
                        alta calidad y lo distribuimos a través de canales
                        relevantes para tu negocio.
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
                >
                    {serv.map((project) => (
                        <li
                            key={project.id}
                            className="col-span-1 flex rounded-md shadow-sm"
                        >
                            <div
                                className={classNames(
                                    project.bgColor,
                                    "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                                )}
                            >
                                <CldImage
                                    src={project.initials}
                                    width={200}
                                    height={200}
                                    alt="Logo de RemoteSquid OU"
                                    className=" lg:w-12 lg:h-12"
                                />
                            </div>
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <a
                                        href={project.href}
                                        className="font-medium text-gray-900 hover:text-gray-600"
                                    >
                                        {project.name}
                                    </a>
                                    <p className="font-light text-gray-500 text-xs">
                                        {project.category}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative flex justify-center items-center max-w-xl mx-auto mt-16">
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
