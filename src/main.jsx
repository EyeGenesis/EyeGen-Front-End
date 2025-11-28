import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./ScrollToTop.jsx";
import { LanguageProvider } from "./contexto/ContextoLingua.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
