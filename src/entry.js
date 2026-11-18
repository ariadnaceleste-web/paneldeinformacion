import { GUIAS_ESTUDIO, NORMAS_BASE } from "./features/manual/normativa.js";

const manualRoot = document.getElementById("manual-root");

if (!manualRoot) {
  throw new Error('No se encontró el contenedor del Manual de Convivencia (#manual-root).');
}

window.PANEL_NORMATIVE_STUDY = { guides: GUIAS_ESTUDIO, norms: NORMAS_BASE };
document.dispatchEvent(new Event("normativeStudyReady"));

let manualModule;

function loadManualOnRequest() {
  if (location.hash === "#manual" && !manualModule) {
    manualModule = import("./manual.jsx");
  }
}

document.getElementById("tabs").addEventListener("click", event => {
  if (event.target instanceof Element && event.target.closest('.tab[data-t="manual"]')) {
    loadManualOnRequest();
  }
});

addEventListener("hashchange", loadManualOnRequest);
loadManualOnRequest();
