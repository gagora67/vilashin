import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { TranslationData } from '../data/translations';
import { LANG_PATHS, LANGUAGES } from '../i18n';
import { Menu, X, Phone, Mail, ShieldCheck, ChevronDown, Check } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  t: TranslationData;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  t,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close the compact (mobile) language menu on outside click / Escape
  useEffect(() => {
    if (!langMenuOpen) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) setLangMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangMenuOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [langMenuOpen]);

  const currentLangItem = LANGUAGES.find((l) => l.code === currentLang) ?? LANGUAGES[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 pl-3 pr-2.5 sm:px-6 py-2 sm:py-3 ${
          isScrolled
            ? 'liquid-glass-nav shadow-2xl'
            : 'liquid-glass-nav shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4 xl:gap-8">
          
          {/* Brand Wordmark (Exact Registered Name in Current Language, NO separate LLC box!) */}
          <a
            href={LANG_PATHS[currentLang]}
            className="flex items-center gap-2 sm:gap-2.5 group min-w-0"
          >
            {/* Vilashin logo mark */}
            <picture>
              <source type="image/webp" srcSet="/brand/vilashin-logo-96.webp" />
              <img
                src="/brand/vilashin-logo-96.png"
                width={32}
                height={32}
                alt=""
                aria-hidden="true"
                className="w-8 h-8 shrink-0 rounded-xl ring-1 ring-white/15 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform"
              />
            </picture>

            {/* Clean registered name without split boxes */}
            <span className="truncate text-sm min-[400px]:text-[15px] sm:text-lg font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              {t.companyName}
            </span>
          </a>

          {/* Navigation Links (Hidden on small screens) */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-neutral-300 whitespace-nowrap">
            <a
              href="#services"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400/60"
            >
              {t.nav.services}
            </a>
            <a
              href="#credentials"
              className="hover:text-white transition-colors flex items-center gap-1 hover:underline underline-offset-8 decoration-amber-400/60"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav.credentials}</span>
            </a>
            <a
              href="#workflow"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400/60"
            >
              {t.nav.workflow}
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400/60"
            >
              {t.nav.projects}
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400/60"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400/60"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Top Bar Actions: Prominent Apple-Style Segmented Language Switcher + Call & Email */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* iOS Style Frosted Glass Segmented Control in Top Header */}
            <div className="hidden sm:flex liquid-pill items-center p-1 rounded-full text-xs font-bold">
              {LANGUAGES.map((item) => (
                <a
                  key={item.code}
                  href={LANG_PATHS[item.code]}
                  hrefLang={item.code}
                  lang={item.code}
                  aria-current={currentLang === item.code ? 'page' : undefined}
                  className={`px-2.5 sm:px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    currentLang === item.code
                      ? 'liquid-pill-active text-amber-300'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title={item.title}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Compact language menu (phones) */}
            <div ref={langMenuRef} className="relative sm:hidden">
              <button
                type="button"
                onClick={() => setLangMenuOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={langMenuOpen}
                aria-label="Language"
                className="liquid-pill h-9 pl-3 pr-2 rounded-full flex items-center gap-1 text-xs font-bold text-amber-300"
              >
                <span lang={currentLangItem.code}>{currentLangItem.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 liquid-glass rounded-2xl p-1.5 border border-white/15 shadow-2xl flex flex-col">
                  {LANGUAGES.map((item) => (
                    <a
                      key={item.code}
                      href={LANG_PATHS[item.code]}
                      hrefLang={item.code}
                      lang={item.code}
                      aria-current={currentLang === item.code ? 'page' : undefined}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${
                        currentLang === item.code ? 'text-amber-300 bg-white/5' : 'text-neutral-200 hover:bg-white/5'
                      }`}
                    >
                      <span>{item.title}</span>
                      {currentLang === item.code && <Check className="w-4 h-4" />}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Email Quick Action */}
            <a
              href="mailto:contact@vilashin.com"
              className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full liquid-pill text-neutral-300 hover:text-white hover:border-amber-400/50 transition-colors"
              title="contact@vilashin.com"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
            </a>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+37493997055"
              aria-label={`${t.nav.callNow}: +374 93 997055`}
              title="+374 93 997055"
              className="liquid-btn-primary w-9 h-9 md:w-auto md:h-auto md:px-4 md:py-2 text-xs font-bold rounded-full flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/25 shrink-0 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 md:w-3.5 md:h-3.5" />
              <span className="hidden md:inline">+374 93 997055</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setLangMenuOpen(false); }}
              className="xl:hidden liquid-pill w-9 h-9 flex items-center justify-center rounded-full text-neutral-300 hover:text-white shrink-0"
              aria-label="Navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden max-w-7xl mx-auto mt-2 liquid-glass rounded-3xl p-6 space-y-4 shadow-2xl border border-white/15">
          <nav className="flex flex-col gap-3.5 text-sm font-semibold text-neutral-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t.nav.credentials}</span>
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.workflow}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <div className="text-xs text-neutral-400 font-mono">
              Email: <a href="mailto:contact@vilashin.com" className="text-amber-400">contact@vilashin.com</a>
            </div>
            <a
              href="tel:+37493997055"
              className="liquid-btn-primary w-full py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+374 93 997055</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
