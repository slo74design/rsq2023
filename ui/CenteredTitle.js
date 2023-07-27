import React from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});

const CenteredTitle = ({ title, subtitle = "", align }) => {
    return (
        <div
            className={`${
                align === "left"
                    ? "text-left"
                    : "mx-auto lg:text-center items-center"
            } flex flex-col w-full sm:max-w-6xl px-6 lg:px-0`}
        >
            <h3
                className={`${outfit.className} text-3xl sm:leading-none font-extrabold tracking-normal text-sky-900 my-0`}
            >
                {title}
            </h3>
            <div
                className={`${outfit.className} mt-2 text-lg sm:text-xl leading-6 sm:leading-7 text-slate-700 font-extralight max-w-full sm:max-w-3xl mx-auto`}
                dangerouslySetInnerHTML={{
                    __html: subtitle,
                }}
            />
        </div>
    );
};

export default CenteredTitle;
