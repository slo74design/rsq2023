import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "200", "300", "700", "800"],
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

const HomeCalculadora = ({ title = "Calcúla tu presupuesto web" }) => {
    return (
        <div className="my-10 lg:my-20">
            <div className="relative flex items-center justify-center z-1 h-48 lg:h-72 overflow-hidden">
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
                        className={`${outfit.className} mt-2 px-6 lg:px-0 text-lg sm:text-xl leading-6 sm:leading-7 font-light text-slate-600 max-w-full sm:max-w-3xl mx-auto`}
                    >
                        Las estimaciones tienen en cuenta los costes de
                        desarrollo inicial, los gastos mensuales del CMS y
                        servidores, un diseño Premium y algunas apps de
                        seguridad y mantenimiento.
                    </p>
                </div>
            </div>
            {/* <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8 px-6 lg:px-0 max-w-5xl mx-auto mt-16 lg:mt-8 mb-10">
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
            </div> */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 lg:mt-16 flex max-w-2xl flex-col grid-flow-row gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-end">
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-rsq-200 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <div>
                            <p
                                className={`${outfit.className} text-base font-light tracking-normal text-rose-200 mb-3`}
                            >
                                #rsqweb con Wordpress
                            </p>
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">
                                3000
                                <span className="ml-1 font-light text-lg">
                                    € / approx.
                                </span>
                            </p>
                        </div>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <ul>
                                <li className="mt-0 text-sm leading-5 text-green-100">
                                    ⬆ El rendimiento, la velocidad de carga
                                    superrápida y el SEO friendly.
                                </li>
                                <li className="mt-1 text-sm leading-5 text-green-100">
                                    ⬇ El gasto del desarrollo inicial y el
                                    mantenimiento.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-sky-600 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-80 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <div>
                            <p
                                className={`${outfit.className} text-base font-light tracking-normal text-sky-300 mb-3`}
                            >
                                Wordpress y Woocommerce
                            </p>
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">
                                2000
                                <span className="ml-1 font-light text-lg">
                                    € / approx.
                                </span>
                            </p>
                        </div>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <ul>
                                <li className="mt-0 text-sm leading-5 text-green-100">
                                    ⬆ La inversión inicial barata y su
                                    comunidad.
                                </li>
                                <li className="mt-1 text-sm leading-5 text-green-100">
                                    ⬇ Costes post-lanzamiento elevados y
                                    frecuentes, mantenimiento, velocidad de
                                    carga, SEO
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-green-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <div>
                            <p
                                className={`${outfit.className} text-base font-light tracking-normal text-emerald-300 mb-3`}
                            >
                                Shopify
                            </p>
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">
                                2500
                                <span className="ml-1 font-light text-lg">
                                    € / approx.
                                </span>
                            </p>
                        </div>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <ul>
                                <li className="mt-0 text-sm leading-5 text-green-100">
                                    ⬆ Seguridad, estabilidad y SEO friendly
                                </li>
                                <li className="mt-1 text-sm leading-5 text-green-100">
                                    ⬇ La cuota mensual de la plataforma y los
                                    costes elevados de integración de una app.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCalculadora;
