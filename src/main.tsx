import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from "theme";
import { IsMenuOpenProvider } from "components/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <IsMenuOpenProvider>
        <App />
      </IsMenuOpenProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
