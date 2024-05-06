import React, { type ReactNode } from "react";
import { createTheme as createMuiTheme, ThemeProvider as MuiThemeProvider, Palette } from "@mui/material/styles";
import { IsDarkProvider,/* useIsDark*/ } from "./useIsDark";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: (palette: Palette) => TypographyOptions = (palette) => {
    return ({
        "heading1": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(3rem, 5vw, 6rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-0.02em"
        },
        "heading2": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(2rem, 3.33vw, 4rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-0.02em"
        },
        "heading3": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(1.7rem, 2.08vw, 2.5rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-0.01em"
        },
        "bigParagraph": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(1.7rem, 2.08vw, 2.5rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-0.01em"
        },
        "cardNumber": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(1.8rem, 3.02vw, 3.6rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "fontStyle": "normal"
        },
        "cardSign": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(1.3rem, 2.18vw, 2.6rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "fontStyle": "normal"
        },
        "paragraph1": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(0.8rem, 1.09vw, 1.3rem)",
            "color": palette.darkGray.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "150%",
            "opacity": 0.7

        },
        "paragraph1Purple": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(0.8rem, 1.09vw, 1.3rem)",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "150%",

        },
        "paragraph1Orange": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(0.8rem, 1.09vw, 1.3rem)",
            "color": "#F97E53",
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "150%",

        },
        "smallText": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(0.6rem, 0.93vw, 1.125rem)",
            "color": palette.darkGray.main,
            "fontWeight": "400",
            "letterSpacing": "0em",
            "lineHeight": "140%",
            "opacity": 0.7

        },
        "details": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "clamp(0.5rem, 0.83vw, 1rem)",
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
            "fontSize": "clamp(0.85rem, 1.09vw, 1.313rem)",
            "lineHeight": "100%",
            "letterSpacing": "0em",
            "fontStyle": "normal"
        },
        "menu": {
            "fontFamily": "neuzeit-grotesk, sans-serif",
            "fontWeight": 700,
            "color": palette.purple.main,
            "fontSize": "clamp(1.6rem, 2.65vw, 3.188rem)",
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
            "fontSize": "clamp(3.280rem, 5.31vw, 6.563rem)",
            "letterSpacing": "-0.02em",
            "fontStyle": "italic"

        },
        "highLight2": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "background": palette.gradient1.main,
            "backgroundClip": "text",
            "color": "transparent",
            "fontSize": "clamp(2rem, 3.59vw, 4rem)",
            "letterSpacing": "-0.02em",
            "fontStyle": "italic"
        },
        "highLight3": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "color": palette.white.main,
            "fontSize": "clamp(1.7rem, 2.76vw, 3.5rem)",
            "letterSpacing": "-0.02em",
            "fontStyle": "italic"

        },
        "highLight4": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "background": palette.gradient1.main,
            "backgroundClip": "text",
            "color": "transparent",
            "fontSize": "clamp(1.4rem, 2.29vw, 2.75rem)",
            "letterSpacing": "-0.02em",
            "fontStyle": "italic"
        },
        "italicP": {
            "fontFamily": "source-serif-4, serif",
            "fontWeight": 400,
            "fontSize": "clamp(0.6rem, 0.88vw, 1.125rem)",
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

const muiThemeLight = createMuiTheme({
    typography,
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