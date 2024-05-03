import React, { type ReactNode } from "react";
import { createTheme as createMuiTheme, ThemeProvider as MuiThemeProvider, Palette } from "@mui/material/styles";
import { IsDarkProvider,/* useIsDark*/ } from "./useIsDark";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: (palette: Palette) => TypographyOptions = (palette) => {
    return ({
        "heading1": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "6rem",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-2%"
        },
        "heading2": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "4rem",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-2%"
        },
        "heading3": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "2.5rem",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-1%"
        },
        "bigParagraph": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "2.5rem",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "-1%"
        },
        "cardNumber": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "3.6rem",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0%",
            "fontStyle": "normal"
        },
        "cardSign": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "2.6rem",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0%",
            "fontStyle": "normal"
        },
        "paragraph1": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "1.3rem",
            "color": palette.darkGray.main,
            "fontWeight": "400",
            "letterSpacing": "0%",
            "lineHeight": "150%",

        },
        "paragraph1Purple": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "1.3rem",
            "color": palette.purple.main,
            "fontWeight": "400",
            "letterSpacing": "0%",
            "lineHeight": "150%",

        },
        "paragraph1Orange": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "1.3rem",
            "color": "#F97E53",
            "fontWeight": "400",
            "letterSpacing": "0%",
            "lineHeight": "150%",

        },
        "smallText": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "1.125rem",
            "color": palette.darkGray.main,
            "fontWeight": "400",
            "letterSpacing": "0%",
            "lineHeight": "140%",

        },
        "details": {
            "fontFamily": '"Questrial", sans-serif',
            "fontSize": "1rem",
            "color": palette.darkGray.main,
            "fontWeight": "400",
            "letterSpacing": "0%",
            "lineHeight": "160%",

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
        "darkGray": {
            "main": "#24252D"
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
                    "details": "p"
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
    }
  
    interface PaletteOptions {
      purple?: PaletteOptions['primary'];
      darkGray: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color options to include an ochre option
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      purple: true;
      darkGray: true;
    }
  }