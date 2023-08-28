import React from "react";
import CenteredTitle from "@/ui/CenteredTitle";
import { Inter, Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});

const HomeStats = () => {
    return (
        <div className="bg-white my-10">
            <CenteredTitle
                title="Nuestras simulaciones por tipología de web"
                subtitle="Las estimaciones tienen en cuenta los costes de desarrollo inicial, los gastos mensuales del CMS y servidores, un diseño Premium y algunas apps de seguridad y mantenimiento."
                align="center"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 lg:mt-16 flex max-w-2xl flex-col grid-flow-row gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-end">
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-rsq-200 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <div>
                            <p
                                className={`${outfit.className} text-base font-light tracking-normal text-rose-200 mb-3`}
                            >
                                #rsqweb con Wordpress
                            </p>
                            <p
                                className={`${inter.className} flex-none text-3xl font-bold tracking-tight text-white`}
                            >
                                3050
                                <span className="ml-1 font-light text-lg">
                                    € / approx.
                                </span>
                            </p>
                        </div>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <ul>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 240€ en Hosting
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 2000€ en desarrollo con diseño a medida
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 300€ en solución de errores
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 500€ en nuevas funcionalidades
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
                            <p
                                className={`${inter.className} flex-none text-3xl font-bold tracking-tight text-white`}
                            >
                                2500
                                <span className="ml-1 font-light text-lg">
                                    € / approx.
                                </span>
                            </p>
                        </div>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <ul>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 100€ en Hosting
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 600€ en desarrollo y diseño
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 500€ en plugins
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 1000€ en mantenimiento tecnico
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 300€ en nuevas funcionalidades
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-green-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-16">
                        <div>
                            <p
                                className={`${outfit.className} text-base font-light tracking-normal text-emerald-300 mb-3`}
                            >
                                Shopify
                            </p>
                            <p
                                className={`${inter.className} flex-none text-3xl font-bold tracking-tight text-white`}
                            >
                                2600
                                <span className="ml-1 font-light text-lg">
                                    € / approx.
                                </span>
                            </p>
                        </div>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <ul>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 170€ en Hosting
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 350€ en gastos mensuales del CMS
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 1000€ en desarrollo con diseño Premium
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 600€ en apps
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 200€ en solución de errores
                                </li>
                                <li
                                    className={`${inter.className} mt-0 text-sm leading-5 text-green-100`}
                                >
                                    - 300€ en nuevas funcionalidades
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-start">
                    <div className="flex flex-col justify-between gap-x-16 gap-y-2 sm:flex-row lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start">
                        <p
                            className={`${outfit.className} text-rsq-900 text-sm leading-6 font-light uppercase`}
                        >
                            Pros y Contras de un sitio #rsqweb
                        </p>
                        <p
                            className={`${inter.className} text-sm leading-[21px] text-slate-500 font-light`}
                        >
                            El rendimiento, el diseño a medida y el SEO friendly
                            son sus puntos fuertes. Los costes de desarrollo y
                            futuras implementaciones pueden ser un freno.
                        </p>
                    </div>
                    <div className="flex flex-col justify-between gap-x-16 gap-y-2 sm:w-3/4 sm:max-w-md sm:flex-row lg:w-80 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p
                            className={`${outfit.className} text-rsq-900 text-sm leading-6 font-light uppercase`}
                        >
                            Pros y Contras con Wordpress
                        </p>
                        <p
                            className={`${inter.className} text-sm leading-[21px] text-slate-500 font-light`}
                        >
                            Aunque la inversión inicial es la más barata, sin
                            duda, es la soluciòn que más costes genera durante
                            los años y los problemas de rendimiento.
                        </p>
                    </div>
                    <div className="flex flex-col justify-between gap-x-16 gap-y-2 sm:w-11/12 sm:max-w-xl sm:flex-row lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start">
                        <p
                            className={`${outfit.className} text-rsq-900 text-sm leading-6 font-light uppercase`}
                        >
                            Pros y Contras de una tienda Shopify
                        </p>
                        <p
                            className={`${inter.className} text-sm leading-[21px] text-slate-500 font-light`}
                        >
                            Afidabilidad y seguridad son, sin duda, sus puntos
                            claves. Los gastos mensuales y los costes de una app
                            o de un desarrollador son un gran handicap.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeStats;
