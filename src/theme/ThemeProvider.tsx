import { type ReactNode } from "react";
import { createTheme as createMuiTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { IsDarkProvider, useIsDark } from "./useIsDark";

const typography = {
    "fontFamily": "Geist",
    "h1": {
        "fontFamily": "Georgia"
    },
};

const muiThemeDark = createMuiTheme({
    typography,
    "palette": {
        "mode": "dark"
    }
});

const muiThemeLight = createMuiTheme({
    typography,
    "palette": {
        "mode": "light"
    }
});

export function ThemeProvider(
    props: {
        children: ReactNode;
    }
) {

    return (
        <IsDarkProvider>
            <ThemeProviderContextualized>
                {props.children}
            </ThemeProviderContextualized>
        </IsDarkProvider>
    );

}

function ThemeProviderContextualized(
    props: {
        children: ReactNode;
    }
) {

    const { isDark } = useIsDark();

    return (
        <MuiThemeProvider theme={isDark ? muiThemeDark : muiThemeLight}>
            {props.children}
        </MuiThemeProvider>
    );


}



