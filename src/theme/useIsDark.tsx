import { createContext, useContext, useState, type ReactNode } from "react";
import { assert } from "tsafe/assert";

type ContextValue = {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
};

const isDarkContext = createContext<ContextValue | undefined>(undefined);

export function IsDarkProvider(
    props: {
        children: ReactNode;
    }
) {

    const [isDark, setIsDark] = useState(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    return (
        <isDarkContext.Provider value={{ isDark, setIsDark }}>
            {props.children}
        </isDarkContext.Provider>
    );

}

// eslint-disable-next-line react-refresh/only-export-components
export function useIsDark() {
    const contextValue = useContext(isDarkContext);
    assert(contextValue !== undefined);
    return contextValue;
}