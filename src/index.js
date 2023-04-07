import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
  <meta name="og:title" content="Little Lemon"/>
  <meta name="og:description" content="Little Lemon Restaurant"/>
  <meta name="og:image" content=""/>
  <StrictMode>
    <App />
  </StrictMode>
  </>
);
