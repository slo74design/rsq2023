import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { Outfit } from "next/font/google";
import HomeRsq from "./Home-RSQ";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});

const HomeListPosts = ({ posts }) => {
    function getImageUrl(slug) {
        let url = "";
        switch (slug) {
            case "web":
                url =
                    "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-diseno_xs6jsk.svg";
                break;
            case "seo":
                url =
                    "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500054/rsqweb/pres-mobile_pdhedh.svg";
                break;
            case "datos":
                url =
                    "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500055/rsqweb/pres-seo_dxz9of.svg";
                break;
            case "ux":
                url =
                    "https://res.cloudinary.com/dtgka7xno/image/upload/v1689500053/rsqweb/pres-datos_jll4kv.svg";
                break;
        }
        return url.toString();
    }

    if (posts.length === 0)
        return (
            <div className="relative max-w-5xl mx-auto my-10 xl:my-20 px-6 lg:px-8 xl:px-0">
                <div className="flex justify-center items-center">
                    <p>No hay soluciones </p>
                </div>
                <HomeRsq />
            </div>
        );

    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto my-10 xl:my-20 px-6 lg:px-8 xl:px-0">
            {posts.map((post) => (
                <Link key={post.pId} href={post.pUri}>
                    <div className="flex flex-col gap-y-2">
                        <span className="font-extralight text-slate-500 uppercase text-sm lg:text-sm">
                            Solución #{post.pId}
                        </span>
                        <h3
                            className={`${outfit.className} font-extrabold text-rsq-100 text-2xl leading-7 lg:text-3xl my-0 pb-3 border-b border-b-slate-200`}
                        >
                            {post.pTitle}
                        </h3>
                        <div
                            className={`font-light text-slate-600 text-base my-0 pb-3`}
                            dangerouslySetInnerHTML={{
                                __html: post.pExcerpt.substring(0, 180) + "...",
                            }}
                        />
                        <div className="relative flex justify-center items-center min-w-xl mr-auto ">
                            <button
                                type="button"
                                className={`${outfit.className} flex flex-row justify-start gap-x-3 pr-3 items-center w-auto border border-rsq-200 uppercase text-sm text-rsq-200 tracking-wider hover:bg-rsq-200 hover:text-white`}
                            >
                                <CldImage
                                    src={getImageUrl(post.pCatSlug)}
                                    width={200}
                                    height={200}
                                    alt="Logo de RemoteSquid OU"
                                    className="w-10 h-10"
                                />
                                {post.pCta}
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default HomeListPosts;
