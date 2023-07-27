import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

import { Outfit } from "next/font/google";
const outfit = Outfit({ weight: ["100", "800"], subsets: ["latin"] });

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Quiens Somos", href: "/about" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Política de Cookies", href: "#" },
    { name: "Calculadora Web", href: "/calcweb" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const PublicNav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop */}
            <div className="hidden lg:block">
                <div className="bg-transparent z-10">
                    <div className="flex justify-start items-center w-full lg:h-24">
                        <div className="w-1/5 lg:w-48 flex justify-center items-center">
                            <Link href="/">
                                <CldImage
                                    src="https://res.cloudinary.com/dtgka7xno/image/upload/v1685798936/rsqweb/squid_s9elbo.png"
                                    width={70}
                                    height={70}
                                    alt="Logo de RemoteSquid OU"
                                    className="w-10 h-10 lg:w-16 lg:h-16"
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="w-4/5 lg:w-full h-full bg-rsq-700 flex justify-start items-center px-6 lg:px-20">
                            <h1
                                className={`${outfit.className} text-white text-lg lg:text-4xl font-extrabold tracking-wide uppercase`}
                            >
                                Agencia web leader en diseños web superrápidos,
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-start items-center w-full h-24">
                        <div className="lg:w-2/6"></div>
                        <div className="lg:w-4/6 h-full bg-rsq-800 flex justify-center items-center">
                            <h1
                                className={`${outfit.className} text-white text-lg lg:text-4xl font-thin tracking-wide uppercase`}
                            >
                                a medidas, responsive y SEO amigables
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-start items-center w-full h-24">
                        <div className="lg:w-3/5 h-full bg-rsq-100 flex justify-center items-center">
                            <h1
                                className={`${outfit.className} text-white text-lg lg:text-4xl font-extrabold tracking-wide uppercase`}
                            >
                                para wordpress y shopify lovers
                            </h1>
                        </div>
                        <div className="lg:w-2/5"></div>
                    </div>
                    {/* <div>{scrollPosition.toFixed(0)}</div> */}
                </div>
            </div>
            {/* Mobile */}
            <div className="block lg:hidden">
                <header className="inset-x-0 sticky top-0 z-50">
                    <nav
                        className="flex items-center justify-between px-6 py-5"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <Link href="/" className="">
                                <CldImage
                                    src="https://res.cloudinary.com/dtgka7xno/image/upload/v1685798936/rsqweb/squid_s9elbo.png"
                                    width={80}
                                    height={80}
                                    alt="Logo de RemoteSquid OU"
                                    className="w-11 h-11"
                                />
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </nav>
                    <Dialog
                        as="div"
                        className="lg:hidden"
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                    >
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-5 sm:max-w-sm">
                            <div className="flex items-center justify-between">
                                <Link href="/">
                                    <CldImage
                                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1685798936/rsqweb/squid_s9elbo.png"
                                        width={80}
                                        height={80}
                                        alt="Logo de RemoteSquid OU"
                                        className="w-11 h-11"
                                    />
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="flow-root">
                                <div className="py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`${outfit.className} block px-3 py-2 text-lg font-light leading-7 text-rsq-100 border-b border-slate-100`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                    <div className="w-full h-20 bg-rsq-700 flex justify-start items-center p-6">
                        <h1
                            className={`${outfit.className} text-white text-base font-extrabold tracking-wide uppercase`}
                        >
                            Leaders en diseños web superrápidos,
                        </h1>
                    </div>
                    <div className="flex justify-start items-center w-full h-20">
                        <div className="w-full h-full bg-rsq-800 flex justify-center items-center p-6">
                            <h1
                                className={`${outfit.className} text-white text-base font-extrabold tracking-wide uppercase`}
                            >
                                a medidas, responsive y SEO amigables
                            </h1>
                        </div>
                        <div className="w-[30px]"></div>
                    </div>
                    <div className="flex justify-start items-center w-full h-20">
                        <div className="w-full h-full bg-rsq-100 flex justify-start items-center p-6">
                            <h1
                                className={`${outfit.className} text-white text-base font-extrabold tracking-wide uppercase`}
                            >
                                para wordpress y shopify lovers
                            </h1>
                        </div>
                        <div className="w-[50px]"></div>
                    </div>
                </header>
            </div>
        </>
    );
};
