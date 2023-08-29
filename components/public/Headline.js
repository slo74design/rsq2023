import React from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({ weight: ["100", "800"], subsets: ["latin"] });

const Headline = () => {
    return (
        <div className="hidden lg:block">
            <div className="bg-transparent z-10">
                <div className="flex justify-start items-center w-full lg:h-16 xl:h-24">
                    <div className="w-9/12 h-full bg-rsq-100 flex justify-start items-center px-6 lg:px-20">
                        <h1
                            className={`${outfit.className} text-white text-lg lg:text-2xl xl:text-4xl font-extrabold tracking-wide uppercase`}
                        >
                            Diseñamos soluciones web de alta calidad
                        </h1>
                    </div>
                    <div className="lg:w-3/12"></div>
                </div>
                <div className="flex justify-start items-center w-full lg:h-16 xl:h-24">
                    <div className="lg:w-2/12"></div>
                    <div className="lg:w-10/12 h-full bg-rsq-700 flex justify-center items-center">
                        <h1
                            className={`${outfit.className} text-white text-lg lg:text-2xl xl:text-4xl font-extrabold tracking-wide uppercase`}
                        >
                            a medidas, seguras, superrápidas y SEO friendly
                        </h1>
                    </div>
                </div>
                <div className="flex justify-start items-center w-full lg:h-16 xl:h-24">
                    <div className="lg:w-3/5 h-full bg-rsq-300 flex justify-center items-center">
                        <h1
                            className={`${outfit.className} text-white text-lg lg:text-2xl xl:text-4xl font-extrabold tracking-wide uppercase`}
                        >
                            para wordpress y shopify lovers
                        </h1>
                    </div>
                    <div className="lg:w-2/5"></div>
                </div>
            </div>
        </div>
    );
};

export default Headline;
