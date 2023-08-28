import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

import { Outfit } from "next/font/google";
const outfit = Outfit({ weight: ["100", "800"], subsets: ["latin"] });

const navigation = [
    { name: "Quienes Somos", href: "/about" },
    { name: "Soluciones", href: "/posts" },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header>
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex flex-1">
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-normal tracking-wide uppercase leading-6 text-rsq-900"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <Link href={process.env.NEXT_PUBLIC_FRONTEND_URL}>
                    <CldImage
                        src="https://res.cloudinary.com/dtgka7xno/image/upload/v1685798936/rsqweb/squid_s9elbo.png"
                        width={70}
                        height={70}
                        alt="Logo de RemoteSquid OU"
                        className="w-10 h-10 lg:w-16 lg:h-16"
                        priority
                    />
                </Link>
                <div className="flex flex-1 justify-end">
                    <Link
                        href="/contact"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Habla con nosotros{" "}
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10 bg-white" />
                <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-1">
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
                        <Link href={process.env.NEXT_PUBLIC_FRONTEND_URL}>
                            <CldImage
                                src="https://res.cloudinary.com/dtgka7xno/image/upload/v1685798936/rsqweb/squid_s9elbo.png"
                                width={70}
                                height={70}
                                alt="Logo de RemoteSquid OU"
                                className="w-10 h-10 lg:w-16 lg:h-16"
                                priority
                            />
                        </Link>
                        <div className="flex flex-1 justify-end">
                            <a
                                href="#"
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 space-y-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Header;
