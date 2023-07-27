import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CTACentered = ({
    title,
    subtitle = "",
    btLabel = "",
    btLink = "",
}) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-0 sm:py-4 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden px-6 py-10 sm:text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <div className="absolute inset-0">
                        <Image
                            className="h-full w-full object-cover position-top50"
                            src="/images/calculatorBack.jpg"
                            alt="People working on laptops"
                            width={2000}
                            height={1227}
                        />
                        <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-l from-rsq-400 to-rsq-600" />
                    </div>
                    <h1 className="relative mx-auto max-w-5xl text-3xl font-bold tracking-normal text-rsq-100">
                        {title}
                    </h1>
                    <p className="relative mx-auto mt-2 max-w-2xl text-sm leading-5 sm:text-base sm:leading-6 text-zinc-100 font-light">
                        {subtitle}
                    </p>
                    {btLabel !== "" && (
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href={btLink}
                                className="rounded-lg bg-rsq-200 px-8 py-2.5 uppercase text-sm font-semibold text-slate-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                {btLabel}
                            </Link>
                        </div>
                    )}
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle
                            cx={512}
                            cy={512}
                            r={512}
                            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                            fillOpacity="0.7"
                        />
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#fcd34d" />
                                <stop offset={1} stopColor="#eab308" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};
