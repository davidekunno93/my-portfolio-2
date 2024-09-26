import { createContext, useEffect, useState } from "react";

const DataProvider = (props: any) => {
    // [helper functions]
    const textFunctions = {
        capitalize: function (str: string): string {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        titalize: function (str: string): string {
            const words = str.split(" ")
            for (let i = 0; i < words.length; i++) {
                words[i] = textFunctions.capitalize(words[i]);
            }
            return words.join(" ");
        }
    };
    const gIcon = "material-symbols-outlined";

    // [mobile mode]
    const [mobileMode, setMobileMode] = useState<boolean>(false);

    const handleResize = () => {
        // console.log(window.innerWidth)
        // console.log(document.documentElement.clientWidth)
        if (document.documentElement.clientWidth <= 768) {
            setMobileMode(true);
            console.log("Mobile Mode is On")
        } else {
            setMobileMode(false);
        }
    };
    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize, true);
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <DataContext.Provider value={{ textFunctions, mobileMode, gIcon }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;
export const DataContext = createContext<any>(null);