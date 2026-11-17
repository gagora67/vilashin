import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// A language switch is a fresh page load: always start at the top,
// unless the URL explicitly targets a section (e.g. /ru/#contact).
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (!window.location.hash) {
  window.scrollTo(0, 0);
}

createRoot(document.getElementById('root')!).render(<App />);

if (window.location.hash) {
  // Let the page render, then jump to the requested section.
  requestAnimationFrame(() => {
    document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView();
  });
}
