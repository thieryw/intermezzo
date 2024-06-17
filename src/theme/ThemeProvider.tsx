import React, { type ReactNode } from "react";
import { createTheme as createMuiTheme, ThemeProvider as MuiThemeProvider, Palette } from "@mui/material/styles";
import { IsDarkProvider,/* useIsDark*/ } from "./useIsDark";
import type { TypographyOptions } from "@mui/material/styles/createTypography";
import defaultShadows from "@mui/material/styles/shadows";

const typography: (palette: Palette) => TypographyOptions = (palette) => {
    return ({
        "heading1": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(3.875rem, 5vw, 6rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-0.02em"
        },
        "heading2": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(3.125rem, 3.33vw, 4rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-0.02em",
            "lineHeight": "1.05em"
        },
        "heading3": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(2rem, 2.08vw, 2.5rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-0.01em",
            "lineHeight": "1.3em"
        },
        "bigParagraph": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(2rem, 2.08vw, 2.5rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-0.01em",
            "lineHeight": "1.4em"
        },
        "cardNumber": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(3.125rem, 3.02vw, 3.6rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "fontStyle": "normal"
        },
        "cardSign": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(2.25rem, 2.18vw, 2.6rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "fontStyle": "normal"
        },
        "paragraph1": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(1.188rem, 1.09vw, 1.3rem)",
            "color": palette.darkGray.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "150%",
            "opacity": 0.7

        },
        "paragraph1Purple": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(1.188rem, 1.09vw, 1.3rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "150%",

        },
        "paragraph1Orange": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(1.188rem, 1.09vw, 1.3rem)",
            "color": "#F97E53",
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "150%",

        },
        "smallText": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "1.125rem",
            "color": palette.darkGray.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "140%",
            "opacity": 0.7

        },
        "details": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "1rem",
            "color": palette.darkGray.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "160%",
            "opacity": 0.7

        },
        "label": {
            "fontFamily": "neuzeit-grotesk, sans-serif",
            "fontWeight": 700,
            "color": palette.purple.main,
            "fontSize": "1.313rem",
            "lineHeight": "100%",
            "letterSpacing": "0em",
            "fontStyle": "normal"
        },
        "menu": {
            "fontFamily": "neuzeit-grotesk, sans-serif",
            "fontWeight": 700,
            "color": palette.purple.main,
            "fontSize": "clamp(2.2rem, 2.598vw, 3.188rem)",
            "lineHeight": "100%",
            "letterSpacing": "-0.02em",
            "listStyleType": "none"
        },
        "highLight": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "background": palette.gradient1.main,
            "backgroundClip": "text",
            "color": "transparent",
            "fontSize": "clamp(4.25rem, 5.31vw, 6.563rem)",
            "letterSpacing": "-0.02em",
            "fontStyle": "italic",
            "lineHeight": "1em"

        },
        "highLight2": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "background": palette.gradient1.main,
            "backgroundClip": "text",
            "color": "transparent",
            "fontSize": "clamp(3.438rem, 3.59vw, 4rem)",
            "letterSpacing": "-0.02em",
            "fontStyle": "italic",
            "lineHeight": "1em"
        },
        "highLight3": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "color": palette.white.main,
            "fontSize": "clamp(2rem, 2.76vw, 3.5rem)",
            "letterSpacing": "-0.02em",
            "fontStyle": "italic",
            "lineHeight": "1.05em"

        },
        "highLight4": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "background": palette.gradient1.main,
            "backgroundClip": "text",
            "color": "transparent",
            "fontSize": "clamp(2.063rem, 2.22vw, 2.75rem)",
            "letterSpacing": "-0.02em",
            "fontStyle": "italic"
        },
        "italicP": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "fontSize": "clamp(1.063rem, 0.88vw, 1.125rem)",
            "lineHeight": "140%",
            "letterSpacing": "0em",
            "fontStyle": "italic",
            "color": palette.darkGray.main,
            "opacity": 0.7
        }

    })
};


/*const muiThemeDark = createMuiTheme({
    typography,
    "palette": {
        "mode": "dark"
    }
});*/

function setSpacing(factor: number) {
    const width = window.innerWidth;
    if (width >= 1920) {
          return 8 * factor;
    }
    if(width >= 1440){
        return 7 * factor;
    }
    if(width >= 1280){
        return 6 * factor;
    }
    if(width >= 960){
        return 5 * factor;
    }
    return 4 * factor;
}

const muiThemeLight = createMuiTheme({
    typography,
    "spacing": setSpacing,
    "breakpoints": {

        "values": {
            "xl": 1920,
            "lgPlus": 1650,
            "lg": 1440,
            "mdPlus": 1200,
            "md": 960,
            "sm": 600,
            "xs": 400
        }
    },
    "palette": {
        "mode": "light",
        "background": {
            "default": "#FAFAFC"
        },
        "purple": {
            "main": "#49336C",
        },
        "pink": {
            "main": "#FCAFCF"
        },
        "darkGray": {
            "main": "#24252D"
        },
        "lightOrange": {
            "main": "#F69770"

        },
        "orange": {
            "main": "#F97E53"
        },
        "lightGray": {
            "main": "#D9D9D9"
        },
        "white": {
            "main": "#FFFFFF"
        },
        "gradient1": {
            "main": "linear-gradient(110deg, #8B50EA 0%, #FBAAD4 53%, #F97E53 100%)"
        },
        "gradient2": {
            "main": "linear-gradient(-140deg, #8B50EA 0%, #49336C 100%)"
        },
        "gradient3": {
            "main": "linear-gradient(110deg, #EBEBEB 0%, #DEDEDE 100%)"
        }
    },
    "components": {
        "MuiTypography": {
            "defaultProps": {
                "variantMapping": {
                    "heading1": "h1",
                    "heading2": "h2",
                    "heading3": "h3",
                    "bigParagraph": "p",
                    "cardNumber": "em",
                    "cardSign": "em",
                    "paragraph1": "p",
                    "paragraph1Purple": "p",
                    "paragraph1Orange": "p",
                    "smallText": "p",
                    "details": "p",
                    "label": "em",
                    "menu": "li",
                    "highLight": "h1",
                    "highLight2": "h2",
                    "highLight3": "h3",
                    "highLight4": "h4",
                    "italicP": "p"
                }
            }
        }
    },
    "shadows": ["none", "0px 18px 29.8px 0px rgba(36, 37, 45, 0.08)", ...defaultShadows.splice(2)] as typeof defaultShadows
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


    return (
        <MuiThemeProvider theme={muiThemeLight}>
            {props.children}
        </MuiThemeProvider>
    );


}




declare module '@mui/material/styles' {
    interface TypographyVariants {
        heading1: React.CSSProperties;
        heading2: React.CSSProperties;
        heading3: React.CSSProperties;
        bigParagraph: React.CSSProperties;
        cardNumber: React.CSSProperties;
        cardSign: React.CSSProperties;
        paragraph1: React.CSSProperties;
        paragraph1Purple: React.CSSProperties;
        paragraph1Orange: React.CSSProperties;
        smallText: React.CSSProperties;
        details: React.CSSProperties;
        label: React.CSSProperties;
        menu: React.CSSProperties;
        highLight: React.CSSProperties;
        highLight2: React.CSSProperties;
        highLight3: React.CSSProperties;
        highLight4: React.CSSProperties;
        italicP: React.CSSProperties;

    }
    interface BreakpointOverrides {
        lgPlus: true;
        mdPlus: true;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        heading1: React.CSSProperties;
        heading2: React.CSSProperties;
        heading3: React.CSSProperties;
        bigParagraph: React.CSSProperties;
        cardNumber: React.CSSProperties;
        cardSign: React.CSSProperties;
        paragraph1: React.CSSProperties;
        paragraph1Purple: React.CSSProperties;
        paragraph1Orange: React.CSSProperties;
        smallText: React.CSSProperties;
        details: React.CSSProperties;
        label: React.CSSProperties;
        menu: React.CSSProperties;
        highLight: React.CSSProperties;
        highLight2: React.CSSProperties;
        highLight3: React.CSSProperties;
        highLight4: React.CSSProperties;
        italicP: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        heading1: true;
        heading2: true;
        heading3: true;
        bigParagraph: true;
        cardNumber: true;
        cardSign: true;
        paragraph1: true;
        paragraph1Purple: true;
        paragraph1Orange: true;
        smallText: true;
        details: true;
        label: true;
        menu: true;
        highLight: true;
        highLight2: true;
        highLight3: true;
        highLight4: true;
        italicP: true;
        h1: false;
        h2: false;
        h3: false;
        body1: false;
    }
}

declare module '@mui/material/styles' {
    interface Palette {
        purple: Palette['primary'];
        darkGray: Palette['primary'];
        lightOrange: Palette['primary'];
        pink: Palette['primary'];
        orange: Palette['primary'];
        lightGray: Palette['primary'];
        white: Palette['primary'];
        gradient1: Palette['primary'];
        gradient2: Palette['primary'];
        gradient3: Palette['primary'];

    }

    interface PaletteOptions {
        purple?: PaletteOptions['primary'];
        darkGray: PaletteOptions['primary'];
        lightOrange: PaletteOptions['primary']
        pink: PaletteOptions['primary']
        orange: PaletteOptions['primary']
        lightGray: PaletteOptions['primary']
        white: PaletteOptions['primary']
        gradient1: PaletteOptions['primary'];
        gradient2: PaletteOptions['primary'];
        gradient3: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        purple: true;
        darkGray: true;
        lightOrange: true;
        orange: true;
        lightGray: true;
        white: true;
        gradient1: true;
        gradient2: true;
        gradient3: true;
        pink: true
    }
}