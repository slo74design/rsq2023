import React from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({ weight: ["100", "800"], subsets: ["latin"] });

const Headline = () => {
    return (
        <>
            <div className="hidden md:block">
                <div className="bg-transparent z-10">
                    <div className="flex justify-start items-center w-full h-16 lg:h-16 xl:h-24">
                        <div className="w-full md:w-9/12 h-full bg-rsq-100 flex justify-start items-center px-6 lg:px-20">
                            <h1
                                className={`${outfit.className} text-white text-lg lg:text-2xl xl:text-4xl font-extrabold tracking-wide uppercase`}
                            >
                                Diseñamos soluciones web de alta calidad
                            </h1>
                        </div>
                        <div className="hidden md:w-3/12"></div>
                    </div>
                    <div className="flex justify-start items-center w-full h-16 lg:h-16 xl:h-24">
                        <div className="md:w-2/12"></div>
                        <div className="md:w-10/12 h-full bg-rsq-700 flex justify-center items-center">
                            <h1
                                className={`${outfit.className} text-white text-lg lg:text-2xl xl:text-4xl font-extrabold tracking-wide uppercase`}
                            >
                                a medidas, seguras, superrápidas y SEO friendly
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-start items-center w-full h-16 lg:h-16 xl:h-24">
                        <div className="md:w-3/5 h-full bg-rsq-300 flex justify-center items-center">
                            <h1
                                className={`${outfit.className} text-white text-lg lg:text-2xl xl:text-4xl font-extrabold tracking-wide uppercase`}
                            >
                                para wordpress y shopify lovers
                            </h1>
                        </div>
                        <div className="md:w-2/5"></div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <div className="flex flex-col justify-start items-center w-full">
                    <div className="w-full h-full bg-rsq-100 flex justify-start items-center px-6 py-5">
                        <h1
                            className={`${outfit.className} text-white text-3xl font-extrabold tracking-wide uppercase`}
                        >
                            Diseñamos soluciones web de alta calidad
                        </h1>
                    </div>
                    <div className="w-full h-full bg-rsq-700 flex items-center px-6 py-5">
                        <h1
                            className={`${outfit.className} basis-1/2 text-white text-2xl font-extrabold tracking-wide uppercase border-r-4 border-white`}
                        >
                            {/* a medidas, seguras, superrápidas y SEO friendly */}
                            a medidas
                        </h1>
                        <h1
                            className={`${outfit.className} basis-1/2 text-center text-white text-2xl font-extrabold tracking-wide uppercase`}
                        >
                            {/* a medidas, seguras, superrápidas y SEO friendly */}
                            seguras
                        </h1>
                    </div>
                    <div className="w-full h-full flex justify-center items-center px-6 py-5">
                        <h1
                            className={`${outfit.className} text-rsq-300 text-4xl font-extrabold tracking-wide uppercase`}
                        >
                            superrápidas
                        </h1>
                    </div>
                    <div className="w-full h-full bg-rsq-700 flex justify-center items-center px-6 py-5">
                        <h1
                            className={`${outfit.className} text-white text-3xl font-extrabold tracking-wide uppercase`}
                        >
                            SEO friendly
                        </h1>
                    </div>
                    <div className="w-full h-full bg-rsq-300 flex justify-start items-center px-6 py-5">
                        <h1
                            className={`${outfit.className} text-white text-3xl font-extrabold tracking-wide uppercase`}
                        >
                            para wordpress y shopify lovers
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Headline;
