import { Language } from './types';

/**
 * Each language is a separate static page (its own folder):
 *   /      → English (root)
 *   /hy/   → Armenian
 *   /ru/   → Russian
 *
 * The language of a page is set in its HTML file (<html lang="…">),
 * so switching language is a real page navigation — the browser loads
 * the new page from the top, exactly like a classic multilingual site.
 */
export const LANG_PATHS: Record<Language, string> = {
  en: '/',
  hy: '/hy/',
  ru: '/ru/',
};

export const LANGUAGES: { code: Language; label: string; title: string }[] = [
  { code: 'en', label: 'ENG', title: 'English' },
  { code: 'hy', label: 'ՀԱՅ', title: 'Հայերեն' },
  { code: 'ru', label: 'РУС', title: 'Русский' },
];

export function detectLanguage(): Language {
  if (typeof document === 'undefined') return 'en';
  const lang = document.documentElement.lang.toLowerCase();
  if (lang.startsWith('hy')) return 'hy';
  if (lang.startsWith('ru')) return 'ru';
  return 'en';
}
