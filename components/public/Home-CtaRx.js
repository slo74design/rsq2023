import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { CldImage } from "next-cloudinary";

import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});

const features = [
    {
        name: "Velocidades de carga superrápidas en móvil.",
        description:
            "Comprueba tu mismo la velocidad de nuestra web remotesquid.com. Estamos utilizando Wordpress para administrarla.",
        icon: ArrowRightCircleIcon,
    },
    {
        name: "Diseño modernos, actrativos e intuitivos",
        description:
            "Para el diseño utilizamos los componentes visuales más recientes para ofrecer la mejor UX a los clientes.",
        icon: ArrowRightCircleIcon,
    },
    {
        name: "Son SEO amigables para posicionarse en Google.",
        description:
            "Tu sitio web tendrá todos lo necesario para ser visible en Google. Una vez publicado, lo administra desde el panel de tu Wordpress o Shopify sin conocimiento tecnico.",
        icon: ArrowRightCircleIcon,
    },
];

const HomeCtaRx = () => {
    return (
        <div className="overflow-hidden my-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex items-center justify-center">
                        <CldImage
                            className="w-[40rem] max-w-none sm:w-[40rem] md:w-[20rem] object-cover"
                            src="https://res.cloudinary.com/dtgka7xno/image/upload/v1693152877/rsqweb/speed_vtz6dr.svg"
                            alt="Salvatore Lo Giudice - RemoteSquid SEO coworplace"
                            width={500}
                            height={500}
                            priority
                            sizes="(min-width: 480px ) 50vw,
                                      (min-width: 728px) 33vw,
                                      (min-width: 976px) 25vw,
                                      100vw"
                        />
                    </div>
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p
                                className={`${outfit.className} font-extralight text-rsq-800 uppercase text-sm lg:text-base`}
                            >
                                ¿Por qué elegir #rsqweb?
                            </p>
                            <h2
                                className={`${outfit.className} text-3xl sm:text-4xl font-extrabold tracking-normal text-sky-900 my-2`}
                            >
                                Nuestros diseños alcanzan velocidades de cargas
                                superrápidas:{" "}
                                <span className="text-rsq-200">
                                    {">"}2,5 segundos
                                </span>{" "}
                            </h2>
                            <p className="mt-6 text-lg leading-7 text-slate-500 font-light">
                                Desarrollamos tu sitio web aplicando todos los
                                requerimientos de Google: excelente experiencia
                                de usuario, velocidad de carga y SEO-ready.
                                Palabra de 🦑
                            </p>
                            <dl className="mt-6 max-w-xl space-y-6 text-base leading-7 text-slate-500 font-light lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9"
                                    >
                                        <dt className="inline font-semibold text-rsq-900">
                                            <feature.icon
                                                className="absolute left-1 top-1 h-5 w-5 text-rsq-400"
                                                aria-hidden="true"
                                            />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline leading-6">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCtaRx;
