
import { useMemo } from "react";
import { useTheme,  type Theme } from "@mui/material/styles";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";

function getIsDark(theme: Theme) {
    return theme.palette.mode === "dark";
}

export function getScrollbarStyles(theme: Theme) {
    return {
        '&::-webkit-scrollbar': {
            "width": 7, /* Width of the scrollbar */
        },
        '&::-webkit-scrollbar-track': {
            "borderRadius": 9999,
            "background": theme.palette.background.default, /* Color of the scrollbar track */
        },
        '&::-webkit-scrollbar-thumb': {
            "borderRadius": 9999,
            "background": theme.palette.background.paper, /* Color of the scrollbar thumb */

        },
        '&::-webkit-scrollbar-thumb:hover': {
            "background": theme.palette.secondary.main, /* Color of the scrollbar thumb on hover */
        }
    };
}

function getThemeExtensions(theme: Theme) {

    const isDark = getIsDark(theme);
    const scrollbarStyles = getScrollbarStyles(theme);

    return {
        isDark,
        scrollbarStyles,
    };

}

export function useContext(){

    const theme = useTheme();
    const { windowInnerHeight, windowInnerWidth } = useWindowInnerSize();

    const { isDark, scrollbarStyles } = useMemo(() => getThemeExtensions(theme), [theme]);

    return {
        theme,
        isDark,
        scrollbarStyles,
        windowInnerHeight,
        windowInnerWidth
    };

}

