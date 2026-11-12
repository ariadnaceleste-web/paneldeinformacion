export function loadManualData(storageKey, fallback) {
  try {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

export function saveManualData(storageKey, data) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch {
    // La interfaz conserva el estado en memoria si el almacenamiento no está disponible.
  }
}
