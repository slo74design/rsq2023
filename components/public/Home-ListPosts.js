import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { Inter, Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["100", "300", "700", "800"],
    subsets: ["latin"],
});
const inter = Inter({
    weight: ["100", "200"],
    subsets: ["latin"],
});

const HomeListPosts = ({ posts }) => {
    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto my-20 px-6 lg:px-0">
            {posts.length > 0 &&
                posts.map((post) => (
                    <Link key={post.pId} href={post.pUri}>
                        <div className="flex flex-col gap-y-2">
                            <span
                                className={`${outfit.className} font-extralight text-rsq-800 uppercase text-sm lg:text-base`}
                            >
                                Pregunta #{post.pId}
                            </span>
                            <h3
                                className={`${outfit.className} font-extrabold text-rsq-100 text-2xl leading-7 lg:text-3xl my-0 pb-3 border-b border-b-slate-200`}
                            >
                                {post.pTitle}
                            </h3>
                            <div
                                className={`font-extralight tracking-wide text-rsq-900 text-base lg:text-xl my-0 pb-3`}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        post.pExcerpt.substring(0, 200) + "...",
                                }}
                            />
                            <div className="relative flex justify-center items-center min-w-xl mr-auto ">
                                <button
                                    type="button"
                                    className={`${outfit.className} flex w-auto border border-rsq-200 uppercase px-5 py-2 text-sm text-rsq-200 tracking-wider hover:bg-rsq-200 hover:text-white`}
                                >
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
