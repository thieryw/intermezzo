
import { GlobalStyles } from "tss-react";
import { useStyles } from "tss";
import { Body } from "./Body";
import { BlurryBackground } from "components/BlurryBackground";
import { IsMenuOpenContext } from "components/Header";
import { useContext } from "react";

export function App() {

  const { isDark, scrollbarStyles, theme } = useStyles();
  const { isOpen } = useContext(IsMenuOpenContext);

  return (
    <>
        <GlobalStyles
          styles={{
            "html, body": {
              "margin": "0",
              "padding": "0",
            },
            "html": {
              "colorScheme": isDark ? "dark" : "light",
              "backgroundColor": theme.palette.background.default
            },
            "body": {
              "scrollBehavior": "smooth",
              ...scrollbarStyles,
              "height": isOpen ? 0 : undefined,
              "overflow": isOpen ? "hidden" : undefined
            }
          }}
        />
        <BlurryBackground animationPlaying={!isOpen} />
        <Body />

    </>
  )
}

