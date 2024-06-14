import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from "theme";
import { IsMenuOpenProvider } from "components/Header.tsx";
import { RouteProvider } from "./router.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <IsMenuOpenProvider>
        <RouteProvider>
          <App />

        </RouteProvider>
      </IsMenuOpenProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
