import { createContext, useEffect, useState } from "react";
import useCookie, { getCookie } from "react-use-cookie";
import publicTokenRandom from "@/data/publicTokenRandom";

const CookiesContext = createContext();

const CookiesProvider = ({ children }) => {
    // Cookies
    const [cookiesConsent, setCookiesConsent] = useState("nil"); // nil = popup cookies visible, yes = cookies accepted, not = cookies rejected
    const [pId, setPId] = useCookie("rsqPid", ""); //  es un numero que se asocia a un usuario que navega sin estar autenticado, en la parte publica. Se crea, independientemente, si el usuario ha aceptado/rechazado las rsqCookies.

    useEffect(() => {
        const getUserCookies = () => {
            const xsrfToken = getCookie("rsqCookies");
            if (xsrfToken) {
                setPId(publicTokenRandom(), {
                    days: 365,
                    SameSite: "Strict",
                    Secure: true,
                });
                setCookiesConsent(xsrfToken);
            }
        };
        getUserCookies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cookiesConsent]);

    return (
        <CookiesContext.Provider
            value={{
                cookiesConsent,
                setCookiesConsent,
                pId,
                setPId,
            }}
        >
            {children}
        </CookiesContext.Provider>
    );
};

export { CookiesProvider };
export default CookiesContext;
