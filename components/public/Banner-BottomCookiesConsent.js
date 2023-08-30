import { useContext } from "react";
import useCookie from "react-use-cookie";
import CookiesContext from "@/context/cookiesProvider";

export default function BannerBottomCookiesConsent() {
    const { setCookiesConsent, cookiesConsent } = useContext(CookiesContext);
    const [userToken, setUserToken] = useCookie("rsqCookies", "");

    const handleCookies = (value) => {
        if (value === 1) {
            setCookiesConsent("yes");
            setUserToken("yes", {
                days: 365,
                SameSite: "Strict",
                Secure: true,
            });
        } else {
            setCookiesConsent("not");
            setUserToken("not");
        }
    };

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
            <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
                <p className="text-sm leading-6 text-gray-900">
                    El sitio web de RemoteSquid utiliza cookies para mejorar la
                    experiencia del usuario y poder acceder al SEO coworkplace.
                    See our{" "}
                    <a
                        href="/cookies"
                        className="font-semibold text-indigo-600"
                    >
                        cookie policy
                    </a>
                    .
                </p>
                <div className="mt-4 flex items-center gap-x-5">
                    <button
                        type="button"
                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        onClick={() => handleCookies(1)}
                    >
                        Accept all
                    </button>
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={() => handleCookies(2)}
                    >
                        Reject all
                    </button>
                </div>
            </div>
        </div>
    );
}
