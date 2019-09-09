export * from './localStorage';

export function navigateTo(url: string = '.') {
  if (url === '.') {
    reloadPage();
  } else {
    window.location.assign(url);
  }
};

export function reloadPage() {
  window.location.reload();
}
