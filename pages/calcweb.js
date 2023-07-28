import React, { useEffect, useState } from "react";
import Head from "next/head";
import { RadioGroup } from "@headlessui/react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import PublicLayout from "@/layouts/PublicLayout";
import { lookupCms } from "@/data/lookupCms";
import {
    lookupWebType,
    lookupWebTypeMktplace,
    lookupWebTypePanel,
} from "@/data/lookupWebType";
import { lookupNrPages } from "@/data/lookupNrPages";
import { lookupWebServicios } from "@/data/lookupWebServicios";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { CTACentered } from "@/ui/CTA-Centered";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { Comic_Neue } from "next/font/google";
import { lookupPostWeb } from "@/data/lookupPostWeb";
import Link from "next/link";
import { useRouter } from "next/router";
const fontPersonalizado = Comic_Neue({ weight: "400", subsets: ["latin"] });

export const metadata = {
    title: "Calcula el presupuesto del diseño web superrápido y Seo friendly de #rsqweb",
    description:
        "Descarga el presupuesto y recoje tu descuento para el desarrollo de tu nuevo sitio web o tienda ecommerce con #rsqweb",
    ogtitle:
        "Calcula el presupuesto del diseño web superrápido y Seo friendly de #rsqweb",
    ogdescription:
        "Descarga el presupuesto y recoje tu descuento para el desarrollo de tu nuevo sitio web o tienda ecommerce con #rsqweb",
    ogimage:
        "https://res.cloudinary.com/dtgka7xno/image/upload/v1690485570/logo.png",
    ogurl: "https://remotesquid.com/calcweb",
};

export default function Calcweb() {
    const router = useRouter();
    const _lookupCms = lookupCms;
    const _lookupWebType = lookupWebType;
    const _lookupNrPages = lookupNrPages;
    const _lookupWebServicios = lookupWebServicios;
    const _lookupPostWeb = lookupPostWeb;

    const [emailForm, setEmailForm] = useState("");
    const [wType, setwType] = useState();
    const [nrPageSelected, setNrPageSelected] = useState();
    const [modWeb, setModWeb] = useState(
        new Array(_lookupWebServicios.length).fill(false)
    );
    const [totalServWeb, setTotalServWeb] = useState(0);
    const [postWeb, setPostWeb] = useState(
        new Array(lookupPostWeb.length).fill(false)
    );
    const [totalPostWeb, setTotalPostWeb] = useState(0);
    const [totalCms, setTotalCms] = useState(0);
    const [totalCalculadora, setTotalCalculadora] = useState(0);
    const [errorCalculadora, setErrorCalculadora] = useState(true);
    const [listCheckout, setListCheckout] = useState([]);

    useEffect(() => {
        setErrorCalculadora(wType > -1 && nrPageSelected > -1 ? false : true);
    }, [wType, nrPageSelected]);

    const handleOnChangeServiceWeb = (position) => {
        const updatedCheckedState = modWeb.map((item, index) =>
            index === position ? !item : item
        );

        setModWeb(updatedCheckedState);

        const totalPriceWeb = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + _lookupWebServicios[index].hours;
                }
                return sum;
            },
            0
        );
        setTotalServWeb(totalPriceWeb);
    };

    const handleOnChangePostWeb = (position) => {
        const updatedCheckedState = postWeb.map((item, index) =>
            index === position ? !item : item
        );

        setPostWeb(updatedCheckedState);

        const totalPriceWeb = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + lookupPostWeb[index].hours;
                }
                return sum;
            },
            0
        );
        setTotalPostWeb(totalPriceWeb);
    };

    const handleCalculadora = () => {
        let newArr = [];
        let newArrPost = [];
        let precioWebType = 0;
        let precioWebPages = 0;
        let nameWebType = "";
        let nameWebPages = "";

        _lookupWebType.map((item) => {
            if (Number(item.id) === Number(wType)) {
                precioWebType = item.hours;
                nameWebType = item.name;
            }
        });

        _lookupNrPages.map((item) => {
            if (Number(item.id) === Number(nrPageSelected)) {
                precioWebPages = item.hours;
                nameWebPages = item.name + " paginas";
            }
        });
        modWeb.map((item, index) => {
            item === true && newArr.push(_lookupWebServicios[index].name);
        });
        postWeb.map((item, index) => {
            item === true && newArrPost.push(_lookupPostWeb[index].name);
        });
        setListCheckout([nameWebType, nameWebPages, ...newArr, ...newArrPost]);

        setTotalCms(480);
        setTotalCalculadora(
            totalServWeb + totalPostWeb + precioWebPages + precioWebType
        );
    };

    const handleResetForm = () => {
        setwType("");
        setNrPageSelected("");
        setModWeb(new Array(_lookupWebServicios.length).fill(false));
        setPostWeb(new Array(lookupPostWeb.length).fill(false));
        setTotalPostWeb(0);
        setTotalCms(0);
        setTotalCalculadora(0);
        setErrorCalculadora(false);
        setListCheckout([]);
    };

    return (
        <div>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.ogtitle} />
                <meta
                    property="og:description"
                    content={metadata.ogdescription}
                />
                <meta property="og:image" content={metadata.ogimage} />
                <meta property="og:url" content={metadata.ogurl} />
            </Head>
            <PublicLayout>
                <div className="mix-blend-multiply bg-gradient-to-b from-white to-slate-100 py-24">
                    <CTACentered
                        title="Calcula el budget de tu sitio #rsqweb"
                        subtitle="Elije nuestra solución web 100% customizada para proyectos web ambiciosos. Desarrollo a medida desde cero para conseguir performances elevadas."
                    />
                    <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-8">
                        <div className="grid grid-cols-4 gap-x-8 gap-y-4">
                            <div className="col-span-4 sm:col-span-4 mx-auto">
                                <div className="pb-6 sm:pb-12">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-8 sm:grid-cols-6">
                                        {/* Web Type */}
                                        <div className="sm:col-span-3">
                                            <label className="block text-sm font-light leading-6 text-rsq-400">
                                                Selecciona el sitio web que vas
                                                a publicar
                                            </label>

                                            <select
                                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                defaultValue=""
                                                value={wType || undefined}
                                                onChange={(e) =>
                                                    setwType(e.target.value)
                                                }
                                            >
                                                <option value="" disabled>
                                                    Selecciona el tipo de sitio
                                                    web...
                                                </option>
                                                {_lookupWebType.map(
                                                    (option) => (
                                                        <option
                                                            key={option.id}
                                                            value={option.id}
                                                        >
                                                            {option.name}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        {/* NrPaginas */}
                                        <div className="sm:col-span-3">
                                            <label className="block text-sm font-light leading-6 text-rsq-400">
                                                Total de páginas y productos
                                            </label>

                                            <select
                                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                defaultValue=""
                                                value={
                                                    nrPageSelected || undefined
                                                }
                                                onChange={(e) =>
                                                    setNrPageSelected(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="" disabled>
                                                    Selecciona el número de
                                                    paginas...
                                                </option>
                                                {_lookupNrPages.map(
                                                    (option) => (
                                                        <option
                                                            key={option.id}
                                                            value={option.id}
                                                        >
                                                            {option.name}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        {/* Apps */}
                                        <div className="sm:col-span-3">
                                            <label className="block text-sm font-light leading-6 text-rsq-400">
                                                Módulos webs
                                            </label>
                                            <fieldset>
                                                <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                                                    {_lookupWebServicios.map(
                                                        (item) => (
                                                            <div
                                                                key={item.id}
                                                                className="relative flex justify-between items-center py-3"
                                                            >
                                                                <div className="min-w-0 flex-1 text-sm leading-6">
                                                                    <p className="select-none font-medium text-slate-700">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </p>
                                                                    <p className="select-none font-light text-xs text-slate-500">
                                                                        {
                                                                            item.description
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="ml-3 flex h-6 items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`servicio-${item.id}`}
                                                                        name={
                                                                            item.name
                                                                        }
                                                                        value={
                                                                            item.hours
                                                                        }
                                                                        checked={
                                                                            modWeb[
                                                                                item
                                                                                    .id
                                                                            ]
                                                                        }
                                                                        onChange={() =>
                                                                            handleOnChangeServiceWeb(
                                                                                item.id
                                                                            )
                                                                        }
                                                                        className="h-4 w-4 rounded border-gray-300 text-slate-700/90 focus:ring-0"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label className="block text-sm font-light leading-6 text-rsq-400">
                                                Servicios de post-publicación
                                                web
                                            </label>
                                            <fieldset>
                                                <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                                                    {_lookupPostWeb.map(
                                                        (item) => (
                                                            <div
                                                                key={item.id}
                                                                className="relative flex justify-between items-center py-3"
                                                            >
                                                                <div className="min-w-0 flex-1 text-sm leading-6">
                                                                    <p className="select-none font-medium text-slate-700">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </p>
                                                                    <p className="select-none font-light text-xs text-slate-500">
                                                                        {
                                                                            item.description
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="ml-3 flex h-6 items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`servicio-${item.id}`}
                                                                        name={
                                                                            item.name
                                                                        }
                                                                        value={
                                                                            item.hours
                                                                        }
                                                                        checked={
                                                                            postWeb[
                                                                                item
                                                                                    .id
                                                                            ]
                                                                        }
                                                                        onChange={() =>
                                                                            handleOnChangePostWeb(
                                                                                item.id
                                                                            )
                                                                        }
                                                                        className="h-4 w-4 rounded border-gray-300 text-slate-700/90 focus:ring-0"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row  items-start justify-between gap-x-4 w-full">
                                    <div className="flex w-full sm:w-1/2 gap-x-4 mb-6 sm:mb-0 sm:pr-8">
                                        <button
                                            type="button"
                                            className="rounded-md bg-slate-300 px-5 py-2.5 w-1/3 sm:w-1/4 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-200"
                                            onClick={handleResetForm}
                                        >
                                            Reset
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md enabled:bg-green-700 px-10 py-2.5 w-2/3 sm:w-full text-sm font-semibold text-white shadow-sm hover:bg-green-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
                                            onClick={handleCalculadora}
                                            disabled={errorCalculadora}
                                        >
                                            Calcula el Budget
                                        </button>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
                                        {/* Total Costes CMS */}
                                        <div className="flex flex-row w-full justify-between items-center border-b border-slate-200 py-2.5">
                                            <p className="text-sm font-light text-slate-500">
                                                Gastos anuales del CMS
                                            </p>
                                            <p className="text-sm font-medium text-slate-700">
                                                {totalCms.toLocaleString() +
                                                    " EUR"}
                                            </p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between items-center border-b border-slate-200 py-2.5">
                                            <p className="text-sm font-light text-slate-500">
                                                Desarrollo, Módulos y Servicios
                                            </p>
                                            <p className="text-sm font-medium text-slate-700">
                                                {totalCalculadora.toLocaleString() +
                                                    " EUR"}
                                            </p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between items-center border-b border-slate-200 py-2.5">
                                            <p className="text-sm font-light text-slate-500">
                                                Presupuesto total
                                            </p>
                                            <p className="text-sm font-bold text-slate-800">
                                                {(
                                                    totalCalculadora + totalCms
                                                ).toLocaleString(2) + " EUR"}
                                            </p>
                                        </div>
                                        {!errorCalculadora && (
                                            <>
                                                <div className="flex flex-row w-full justify-between items-center mt-5">
                                                    <p className="text-sm font-semibold text-slate-700 pb-2.5">
                                                        Recibe un codigo
                                                        descuento a tu correo
                                                    </p>
                                                </div>
                                                <div className="flex flex-row w-full justify-between items-center">
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        value={emailForm}
                                                        onChange={(e) =>
                                                            setEmailForm(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        placeholder="micorreo@correo.com"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-green-600 px-5 py-2.5 w-1/3 sm:w-1/4 text-sm font-semibold text-slate-50 shadow-sm hover:bg-rsq-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                                                        onClick={() =>
                                                            router.push(
                                                                {
                                                                    pathname:
                                                                        "/checkout",
                                                                    query: {
                                                                        budget:
                                                                            totalCalculadora +
                                                                            totalCms,
                                                                        details:
                                                                            listCheckout,
                                                                    },
                                                                },
                                                                "/checkout"
                                                            )
                                                        }
                                                    >
                                                        Solicita
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PublicLayout>
        </div>
    );
}
