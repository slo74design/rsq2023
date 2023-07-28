import React from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({ weight: ["200", "800"], subsets: ["latin"] });

const HomeScrollText = () => {
    return (
        <>
            <div className="relative flex overflow-x-hidden border-t border-b border-slate-100 left-0 right-0 bg-transparent mt-20">
                <div className="py-4 animate-marquee whitespace-nowrap">
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        Sitios web superrápidos
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        SEO friendly
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        Para Wordpress y Shopify
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        Rápidos en móviles
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        Diseños a medida
                    </span>
                </div>

                <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        Sitios web superrápidos
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        SEO friendly
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        Para Wordpress y Shopify
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        Rápidos en móviles
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extralight tracking-wide uppercase mx-4`}
                    >
                        Diseños a medida
                    </span>
                </div>
            </div>
            <div className="relative flex overflow-x-hidden left-0 right-0 border-b border-slate-100 bg-transparent">
                <div className="py-4 animate-marquee3 whitespace-nowrap">
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Contenidos optimizados
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Traducción de sitios web
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Estrategia de contenido
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Administración de blog y tiendas
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Mantenimiento técnico
                    </span>
                </div>

                <div className="absolute top-0 py-4 animate-marquee4 whitespace-nowrap">
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Contenidos optimizados
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Traducción de sitios web
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Estrategia de contenido
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Administración de blog y tiendas
                    </span>
                    <span
                        className={`${outfit.className} text-3xl font-extrabold tracking-wide uppercase mx-4 text-rsq-100`}
                    >
                        Mantenimiento técnico
                    </span>
                </div>
            </div>
        </>
    );
};

export default HomeScrollText;
