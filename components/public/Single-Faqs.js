import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

import { Inter, Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "600", "700", "800"],
    subsets: ["latin"],
});
const inter = Inter({
    weight: ["100", "200", "300", "500"],
    subsets: ["latin"],
});

const faqs = [
    {
        question: "What format are these icons?",
        answer: "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
    },
    {
        question: "Can I use the icons at different sizes?",
        answer: "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
    },
];

export const SingleFaqs = () => {
    return (
        <div className="mx-auto max-w-5xl divide-y divide-gray-900/10">
            <h2
                className={`${outfit.className} text-2xl font-semibold text-rsq-100`}
            >
                Tips para Entrepreneurs
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                            <>
                                <dt>
                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                        <span
                                            className={`${inter.className} text-base font-medium leading-7 text-rsq-400`}
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
                                        className={`${inter.className} font-light text-base lg:text-lg leading-7 text-rsq-900`}
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
