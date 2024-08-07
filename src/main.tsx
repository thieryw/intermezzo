import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from "theme";
import { IsMenuOpenProvider } from "components/Header.tsx";
import { RouteProvider } from "./router.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteProvider>
      <ThemeProvider>
        <IsMenuOpenProvider>
          <App />

        </IsMenuOpenProvider>
      </ThemeProvider>
    </RouteProvider>
  </React.StrictMode>,
)
