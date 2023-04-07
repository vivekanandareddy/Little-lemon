import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <meta name="og:title" content="Little Lemon" />
    <meta name="og:description" content="Little Lemon Restaurant" />
    <meta name="og:image" content="" />
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </>
);

reportWebVitals();
