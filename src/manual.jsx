import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ManualConvivencia } from "./app/ManualConvivencia.jsx";

const manualRoot = document.getElementById("manual-root");

if (!manualRoot) {
  throw new Error('No se encontró el contenedor del Manual de Convivencia (#manual-root).');
}

createRoot(manualRoot).render(
  <StrictMode>
    <ManualConvivencia />
  </StrictMode>,
);
