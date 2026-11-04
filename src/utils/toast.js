export function toast(title, sub = '', type = 'success') {
  window.dispatchEvent(new CustomEvent('app:toast', { detail: { title, sub, type } }));
}
