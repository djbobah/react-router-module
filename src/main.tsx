import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
