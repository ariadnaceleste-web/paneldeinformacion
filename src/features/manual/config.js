export const STORAGE_KEY = "la_amistad_panel_docente_rector_v1";
export const MANUAL_CONTENT_VERSION = 5;

export const TIPO_META = {
  "1": { label: "Tipo I", color: "#166534", bg: "#dcfce7", border: "#86efac" },
  "2": { label: "Tipo II", color: "#92400e", bg: "#fef3c7", border: "#fcd34d" },
  "3": { label: "Tipo III", color: "#991b1b", bg: "#fee2e2", border: "#fca5a5" },
  contextual: { label: "Clasificación según los hechos", color: "#1e40af", bg: "#dbeafe", border: "#93c5fd" },
};

export const TABS = [
  { id: "intro", icon: "📖", label: "Manual" },
  { id: "rai", icon: "🔁", label: "Ruta RAI" },
  { id: "derechos_deberes", icon: "🤝", label: "Derechos y deberes" },
  { id: "tipologias", icon: "📑", label: "Tipologías" },
  { id: "programas", icon: "🌱", label: "Programas" },
  { id: "normas", icon: "⚖️", label: "Normativa" },
  { id: "comunicado", icon: "📣", label: "Comunicado" },
  { id: "disposiciones", icon: "📋", label: "Disposiciones" },
];

export const MANUAL_STYLES = {
  input: { width: "100%", padding: "8px 10px", fontSize: 14, border: "1px solid #d1d5db", borderRadius: 8, background: "#fff", color: "#111", fontFamily: "inherit", boxSizing: "border-box", outline: "none" },
  label: { fontSize: 11, fontWeight: 700, color: "#6b7280", display: "block", marginBottom: 4, marginTop: 12, textTransform: "uppercase", letterSpacing: "0.06em" },
  btnPrimary: { background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" },
  btnSec: { background: "none", color: "#374151", border: "1px solid #d1d5db", borderRadius: 8, padding: "8px 14px", fontSize: 13, cursor: "pointer" },
  btnIcon: { background: "none", border: "1px solid #e5e7eb", borderRadius: 7, padding: "4px 9px", cursor: "pointer", fontSize: 13, color: "#6b7280" },
  btnDanger: { background: "none", border: "1px solid #fca5a5", borderRadius: 7, padding: "4px 9px", cursor: "pointer", fontSize: 13, color: "#dc2626" },
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: "14px 16px", marginBottom: 10 },
  infoBox: (color, bg, border) => ({ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "12px 16px", marginBottom: 18, fontSize: 13, color, lineHeight: 1.65 }),
};
