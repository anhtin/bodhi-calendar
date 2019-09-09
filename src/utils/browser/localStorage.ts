
const isLocaleStorageSupported = 'localStorage' in window;

export function loadLocal(key: string): string | null {
  if (isLocaleStorageSupported) {
    return localStorage.getItem(key);
  }
  return null;
}

export function saveLocal(key: string, value: unknown) {
  if (isLocaleStorageSupported) {
    localStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value)
    );
  }
}

export function resetLocal() {
  localStorage.clear();
}
