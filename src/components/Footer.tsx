import React from 'react';
import { TranslationData } from '../data/translations';
import { Language } from '../types';
import { LANG_PATHS } from '../i18n';
import { ShieldCheck, UserCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  t: TranslationData;
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  currentLang,
}) => {
  return (
    <footer className="border-t border-white/10 bg-[#05070a] text-neutral-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Identity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                V
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                {t.companyName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
              {t.footer.tagline}
            </p>

            <div className="text-xs font-mono text-neutral-300 space-y-1.5 pt-2">
              <div className="text-amber-300 font-semibold flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.footer.director}</span>
              </div>
              <div>
                {t.footer.tin}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{t.contact.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <a href="tel:+37493997055" className="text-amber-400 hover:underline">+374 93 997055</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <a href="mailto:contact@vilashin.com" className="text-amber-400 hover:underline">contact@vilashin.com</a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Mirror (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {t.nav.services} & {t.nav.about}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.nav.credentials}</span>
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-amber-400 transition-colors">
                  {t.nav.workflow}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Language Editions & Domain (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {t.footer.languageSelection}
            </h4>
            
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={LANG_PATHS.en}
                hrefLang="en"
                lang="en"
                aria-current={currentLang === 'en' ? 'page' : undefined}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                  currentLang === 'en'
                    ? 'border-amber-400 text-amber-300 bg-amber-400/10'
                    : 'border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <span>English (Main)</span>
                <span className="font-mono text-[11px] text-amber-400">vilashin.com/ (Root)</span>
              </a>

              <a
                href={LANG_PATHS.hy}
                hrefLang="hy"
                lang="hy"
                aria-current={currentLang === 'hy' ? 'page' : undefined}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                  currentLang === 'hy'
                    ? 'border-amber-400 text-amber-300 bg-amber-400/10'
                    : 'border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <span>Հայերեն (Կապան)</span>
                <span className="font-mono text-[11px] text-amber-400">vilashin.com/hy/</span>
              </a>

              <a
                href={LANG_PATHS.ru}
                hrefLang="ru"
                lang="ru"
                aria-current={currentLang === 'ru' ? 'page' : undefined}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                  currentLang === 'ru'
                    ? 'border-amber-400 text-amber-300 bg-amber-400/10'
                    : 'border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <span>Русский</span>
                <span className="font-mono text-[11px] text-amber-400">vilashin.com/ru/</span>
              </a>
            </div>

            <div className="text-[11px] text-neutral-400 pt-2 font-mono">
              {t.footer.officialDomain}
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {t.companyName}. {t.footer.rights}
          </div>
          <div className="font-mono text-amber-400/80">
            {t.footer.kapanSyunik}
          </div>
        </div>

        {/* Developer credit */}
        <div className="mt-6 text-center text-[11px] text-neutral-500">
          {t.footer.creditPrefix}
          <a
            href="https://company.teduza.com"
            target="_blank"
            rel="noopener"
            className="font-semibold text-neutral-300 hover:text-amber-300 transition-colors"
          >
            M.A.R.S. COMPANION LLC
          </a>
          {t.footer.creditSuffix}{' '}
          <span className="text-neutral-600">(company.teduza.com)</span>
        </div>
      </div>
    </footer>
  );
};
