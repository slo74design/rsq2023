import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "600", "700", "800"],
    subsets: ["latin"],
});

const faqs = [
    {
        question: "Quiero montar mi pagina web con #rsqweb desde cero.",
        answer: "Nuestro equipo estará encantado de proporcionarte y acompañarte durante todo el proceso de estrategia, diseño y puesta en marcha.",
    },
    {
        question:
            "Tengo mi blog en Wordpress. ¿Puedo integrar vuestro diseño #rsqweb sin parar la web?",
        answer: "La respuesta es Sí. Nosotros trabajaremos el nuevo diseño, según tus necesidades, en nuestro servidor y luego nos encargaremos de moverlo cuando está todos listo.",
    },
    {
        question:
            "¿Cuantos días son necesarios para desarrollar e integrar un diseño #rsqweb?",
        answer: "Nuestro equipo necesitará un minimo de 30 días para completar la integración y puesta en marcha.",
    },
    {
        question: "Busco alguién que pueda traducir toda mi pagina web.",
        answer: "Nuestro equipo está especializado y profesionalmente preparado para generar y optimizar contenido para el posicionamiento en los buscadores. No utilizamos herramientas de traducción automatica, y tampoco IA.",
    },
];

export const SingleFaqs = () => {
    return (
        <div className="mx-auto max-w-5xl divide-y divide-gray-900/10">
            <h2
                className={`${outfit.className} text-2xl font-semibold text-rsq-100`}
            >
                Preguntas frecuentes
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                            <>
                                <dt>
                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                        <span
                                            className={`text-base font-medium leading-7 text-rsq-400`}
                                        >
                                            {faq.question}
                                        </span>
                                        <span className="ml-6 flex h-7 items-center">
                                            {open ? (
                                                <MinusSmallIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <PlusSmallIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                </dt>
                                <Disclosure.Panel
                                    as="dd"
                                    className="mt-2 pr-12"
                                >
                                    <p
                                        className={`font-light text-base lg:text-lg leading-7 text-rsq-900`}
                                    >
                                        {faq.answer}
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </dl>
        </div>
    );
};
