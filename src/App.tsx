
import { GlobalStyles } from "tss-react";
import { useStyles } from "tss";
import { Body } from "./Body";
import { Body2 } from "./Body2";

export function App() {

  const { isDark, scrollbarStyles, theme } = useStyles();

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
            ...scrollbarStyles
          }
        }}
      />
      <Body />
      <Body2 />
    </>
  )
}

