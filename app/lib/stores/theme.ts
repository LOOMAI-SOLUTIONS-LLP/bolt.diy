import { atom } from 'nanostores';
import { logStore } from './logs';

export type Theme = 'dark' | 'light';

export const kTheme = 'bolt_theme';

export function themeIsDark() {
  return themeStore.get() === 'dark';
}

export const DEFAULT_THEME = 'dark';

export const themeStore = atom<Theme>(initStore());

function initStore() {
  // Always default to dark mode.
  // If running in a browser, also update localStorage and the HTML attribute
  // to ensure consistency if old values were somehow present.
  if (!import.meta.env.SSR) {
    localStorage.setItem(kTheme, 'dark');
    document.querySelector('html')?.setAttribute('data-theme', 'dark');
  }
  return DEFAULT_THEME; // which is now 'dark'
}
