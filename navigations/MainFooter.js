import React from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";
const outfit = Outfit({ weight: ["100", "300", "800"], subsets: ["latin"] });

import { BsInstagram, BsLinkedin } from "react-icons/bs";

const menu = [
    {
        id: 1,
        name: "Quienes Somos",
        url: "/about",
    },
    {
        id: 1,
        name: "Contacto",
        url: "/contact",
    },
    {
        id: 2,
        name: "Pólitica de privacidad",
        url: "/privacidad",
    },
    {
        id: 3,
        name: "Aviso Legal",
        url: "/avisolegal",
    },
    {
        id: 3,
        name: "Cookies",
        url: "/cookies",
    },
];

const social = [
    {
        id: 1,
        image: <BsLinkedin className="h-6 w-6 text-rsq-900" />,
        alt: "LinkedIn Page de RemoteSquid OU",
        url: "/",
    },
    {
        id: 2,
        image: <BsInstagram className="h-6 w-6 text-rsq-900" />,
        alt: "Instagram Page de RemoteSquid OU",
        url: "/",
    },
];

const MainFooter = () => {
    return (
        <footer className="bg-slate-50">
            <div className="max-w-screen lg:flex lg:items-center lg:justify-between">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    {menu.map((item) => (
                        <Link
                            key={item.name}
                            href={item.url}
                            className="p-3 md:p-5 xl:p-6 border-r-2 border-r-white"
                        >
                            <p className="text-slate-600 text-sm font-extralight uppercase tracking-wide hover:text-rsq-200">
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center items-center py-3 xl:py-0">
                    {social.map((item) => (
                        <Link key={item.id} href={item.url} className="px-3">
                            {item.image}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
