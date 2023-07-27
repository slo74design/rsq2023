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
import { BiMapPin, BiStore, BiGlobe } from "react-icons/bi";

export const AboutHistoria = () => {
    return (
        <div className="my-10 lg:my-20 z-1">
            <div className="hidden relative lg:flex items-center justify-center z-1 h-60">
                <div className="absolute">
                    <h1
                        className={`flex ${outfit.className} text-gray-100 text-[220px] uppercase font-extrabold`}
                    >
                        Som<span className="text-rsq-600 opacity-20">os</span>
                        quid
                    </h1>
                </div>
                <div className="absolute mx-auto">
                    <CldImage
                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1689500053/rsqweb/about_hv98nz.svg"
                        width={180}
                        height={180}
                        alt="Logo de RemoteSquid OU"
                        priority
                    />
                </div>
            </div>
            <div className="relative mx-auto mt-6 mb-10 max-w-7xl z-1">
                {/* RSQ */}
                <div className="flex flex-col lg:flex-row mb-10 lg:mb-16 max-w-screen lg:max-w-5xl lg:mx-auto px-8 lg:px-0">
                    <div className="mr-6 lg:flex-shrink-0 lg:h-36 lg:w-36 flex lg:relative items-center justify-center lg:self-center w-full mb-8 lg:mb-0">
                        <CldImage
                            src="https://res.cloudinary.com/dtgka7xno/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1685798936/rsqweb/squid_s9elbo.png"
                            width={120}
                            height={120}
                            alt="Logo de RemoteSquid OU"
                            className="w-20 h-20 lg:w-32 lg:h-32"
                        />
                    </div>
                    <div className="w-full">
                        <h3
                            class={`${outfit.className} text-xl lg:text-3xl leading-6 font-extrabold text-rsq-100`}
                        >
                            RemoteSquid, la digital estona con mentalidad
                            española
                        </h3>
                        <p
                            class={`${inter.className} mt-1 text-sm lg:text-lg font-light text-rsq-900`}
                        >
                            Repudiandae sint consequuntur vel. Amet ut nobis
                            explicabo numquam expedita quia omnis voluptatem.
                            Minus quidem ipsam quia iusto.
                        </p>
                        <div className="relative flex flex-col lg:flex-row justify-start items-start lg:items-center gap-y-1 lg:gap-x-8 mt-2">
                            <div className="flex flex-row justify-center items-start">
                                <BiMapPin className="h-5 w-5 text-rsq-800 mr-1" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    Tallinn, Estonia
                                </p>
                            </div>
                            <div className="flex flex-row justify-center items-start">
                                <BiStore className="h-5 w-5 text-rsq-800 mr-1" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    3 tiendas in 2023
                                </p>
                            </div>
                            <div className="flex flex-row justify-center items-start">
                                <BiGlobe className="h-5 w-5 text-rsq-800 mr-1" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    5 fast websites in 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slo74 */}
                <div className="flex flex-col lg:flex-row mb-10 lg:mb-16 max-w-screen lg:max-w-4xl mx-6 lg:ml-16 lg:mr-auto text-right">
                    <div>
                        <h3
                            class={`${outfit.className} text-xl lg:text-3xl leading-6 font-extrabold text-rsq-100`}
                        >
                            Slo74design, innovaciones digitales
                        </h3>
                        <p
                            class={`${inter.className} mt-1 text-sm lg:text-lg font-light text-rsq-900`}
                        >
                            Repudiandae sint consequuntur vel. Amet ut nobis
                            explicabo numquam expedita quia omnis voluptatem.
                            Minus quidem ipsam quia iusto.
                        </p>
                        <div className="relative flex flex-col lg:flex-row justify-start items-end lg:justify-end lg:items-center gap-y-1 lg:gap-x-8 mt-2">
                            <div className="flex flex-row justify-center items-start">
                                <BiMapPin className="h-5 w-5 text-rsq-800 ml-2 lg:mr-1 order-last lg:order-first" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    Tallinn, Estonia
                                </p>
                            </div>
                            <div className="flex flex-row justify-center items-start">
                                <BiStore className="h-5 w-5 text-rsq-800 ml-2 lg:mr-1 order-last lg:order-first" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    3 tiendas in 2023
                                </p>
                            </div>
                            <div className="flex flex-row justify-center items-start">
                                <BiGlobe className="h-5 w-5 text-rsq-800 ml-2 lg:mr-1 order-last lg:order-first" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    5 fast websites in 2023
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-16 flex-shrink-0 self-end lg:self-center h-36 w-36 order-first lg:order-last">
                        <CldImage
                            src="https://res.cloudinary.com/dtgka7xno/image/upload/v1689500071/rsqweb/slo74_2x_dxtsyl.svg"
                            width={120}
                            height={120}
                            alt="Logo de RemoteSquid OU"
                        />
                    </div>
                </div>
                {/* Lunarota */}
                <div className="flex flex-col lg:flex-row max-w-screen lg:max-w-4xl px-8 lg:px-0 lg:mb-16 ml-auto">
                    <div className="lg:mr-6 mr-16 lg:flex-shrink-0 lg:h-36 lg:w-36 flex lg:relative items-center justify-start lg:justify-center lg:self-center w-full">
                        <CldImage
                            src="https://res.cloudinary.com/dtgka7xno/image/upload/v1689500053/rsqweb/lunarota_2x_hqwwlt.svg"
                            width={120}
                            height={120}
                            alt="Logo de RemoteSquid OU"
                        />
                    </div>
                    <div>
                        <h3
                            class={`${outfit.className} text-xl lg:text-3xl leading-6 font-extrabold text-rsq-100`}
                        >
                            Lunarota
                        </h3>
                        <p
                            class={`${inter.className} mt-1 text-sm lg:text-lg font-light text-rsq-900`}
                        >
                            Repudiandae sint consequuntur vel. Amet ut nobis
                            explicabo numquam expedita quia omnis voluptatem.
                            Minus quidem ipsam quia iusto.
                        </p>
                        <div className="relative flex flex-col lg:flex-row justify-start items-start lg:items-center gap-y-1 lg:gap-x-8 mt-2">
                            <div className="flex flex-row justify-center items-start">
                                <BiMapPin className="h-5 w-5 text-rsq-800 mr-1" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    Tallinn, Estonia
                                </p>
                            </div>
                            <div className="flex flex-row justify-center items-start">
                                <BiStore className="h-5 w-5 text-rsq-800 mr-1" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    3 tiendas in 2023
                                </p>
                            </div>
                            <div className="flex flex-row justify-center items-start">
                                <BiGlobe className="h-5 w-5 text-rsq-800 mr-1" />
                                <p
                                    className={`${outfit.className} font-extralight text-sm uppercase text-rsq-100`}
                                >
                                    5 fast websites in 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
