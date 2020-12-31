export * from './localStorage';

export function navigateTo(url = '.') {
  if (url === '.') {
    reloadPage();
  } else {
    window.location.assign(url);
  }
}

export function reloadPage() {
  window.location.reload();
}
