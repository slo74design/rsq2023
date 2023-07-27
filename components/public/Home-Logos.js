import React from "react";
import { CldImage } from "next-cloudinary";
import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});

const HomeLogos = () => {
    return (
        <div className="my-10 lg:my-20">
            <div className="mx-auto max-w-7xl">
                <div className="relative flex items-center justify-center z-1 h-48 lg:h-60 overflow-hidden">
                    <div className="hidden lg:block lg:absolute">
                        <h1
                            className={`flex ${outfit.className} text-gray-100 text-lg lg:text-[230px] uppercase font-extrabold`}
                        >
                            Clientes
                        </h1>
                    </div>
                    <div className="absolute mx-auto top-0 sm:top-24 left-0 right-0 text-left lg:text-center">
                        <h2
                            className={`${outfit.className} text-3xl lg:text-5xl px-6 lg:px-0 sm:leading-none text-fill-black font-extrabold tracking-normal uppercase text-rsq-900`}
                        >
                            Confían en nosotros
                        </h2>
                        <p
                            className={`${outfit.className} mt-2 px-6 lg:px-0 text-lg sm:text-xl leading-6 sm:leading-7 text-slate-700 font-extralight max-w-full sm:max-w-3xl mx-auto`}
                        >
                            Somos orgullosos de trabajar y colaborar cada día
                            con clientes que creen, apostan y confían en
                            nosotros para dar más visibilidad a su sitio web y/o
                            tienda online.
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 px-6 lg:px-0">
                    <CldImage
                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1678791269/Logos/ITC-Logo_c5qmfm.png"
                        width={400}
                        height={400}
                        priority
                        alt="International Trade Center - UN"
                        className="col-span-1 max-h-16 w-full object-contain lg:col-span-1"
                    />
                    <CldImage
                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1678790788/Logos/CendynLogo_tegltb.jpg"
                        width={800}
                        height={474}
                        priority
                        alt="Cendyn"
                        className="col-span-1 max-h-24 w-full object-contain lg:col-span-1"
                    />
                    <CldImage
                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1678790788/Logos/TLU-logo_cjpwk8.jpg"
                        width={887}
                        height={319}
                        priority
                        alt="Tallin University"
                        className="col-span-1 max-h-24 w-full object-contain lg:col-span-1"
                    />
                    <CldImage
                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1678790788/Logos/ContradoLogo_zvurwj.jpg"
                        width={700}
                        height={700}
                        priority
                        alt="Contrado"
                        className="col-span-1 max-h-24 w-full object-contain lg:col-span-1"
                    />
                    <CldImage
                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1678790787/Logos/SocialPreneur-Switzerland_xblde3.webp"
                        width={700}
                        height={700}
                        priority
                        alt="Social-Preneur"
                        className="col-span-1 max-h-24 w-full object-contain lg:col-span-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeLogos;
