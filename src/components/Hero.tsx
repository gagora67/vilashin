import React from 'react';
import {
  TranslationData,
  HERO_IMAGE,
  KAPAN_HERO_IMAGE,
  KAPAN_HERO_IMAGE_MD,
  KAPAN_HERO_CREDIT,
} from '../data/translations';
import { Phone, Mail, ArrowDown, UserCheck, ChevronDown } from 'lucide-react';

interface HeroProps {
  t: TranslationData;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  onExploreServices,
}) => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-28 pb-20 overflow-hidden bg-[#07090e]">
      {/* Full-screen panorama of modern-day Kapan with cinematic grade */}
      <div className="absolute inset-0 z-0">
        <img
          src={KAPAN_HERO_IMAGE}
          srcSet={`${KAPAN_HERO_IMAGE_MD} 1920w, ${KAPAN_HERO_IMAGE} 3840w`}
          sizes="100vw"
          alt="Panoramic view of modern-day Kapan, Syunik Province, Armenia — the city in the Voghji River valley surrounded by forested mountains"
          className="kapan-hero-img absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallback) return;
            img.dataset.fallback = '1';
            img.removeAttribute('srcset');
            img.src = HERO_IMAGE;
          }}
        />
        {/* Colour grade + grain */}
        <div className="kapan-hero-grade absolute inset-0" />
        <div className="kapan-hero-grain absolute inset-0 pointer-events-none" />
        {/* Subtle dark overlay for legibility */}
        <div className="absolute inset-0 bg-[#07090e]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/80 via-[#07090e]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/60" />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_220px_60px_rgba(0,0,0,0.55)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* VILASHIN welcome */}
          <div className="kapan-welcome flex items-center gap-4 mb-5">
            <span aria-hidden="true" className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.38em] text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              {t.hero.welcome.replace('VILASHIN', '')}
              <span className="text-amber-400">VILASHIN</span>
            </p>
            <span aria-hidden="true" className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          {/* Subtle Clean Metadata / Region Tag */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold tracking-wider text-amber-400 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80" />
            <span>{t.hero.regionTag}</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-neutral-300">09428738</span>
          </div>

          {/* Headline */}
          <h1 className="kapan-welcome-delay drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 max-w-2xl font-normal">
            {t.hero.subtitle}
          </p>

          {/* Director Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-pill text-xs text-neutral-200 mb-8 border border-white/15">
            <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.hero.directorBadge}</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-14">
            {/* Direct Phone Call */}
            <a
              href="tel:+37493997055"
              className="liquid-btn-primary px-6 py-3.5 text-xs sm:text-sm font-bold rounded-2xl flex items-center gap-2 shadow-xl shadow-amber-500/25 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{t.hero.callDirect}</span>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:contact@vilashin.com"
              className="liquid-btn-secondary px-5 py-3.5 text-xs sm:text-sm font-semibold rounded-2xl flex items-center gap-2 cursor-pointer hover:border-amber-400/40"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>contact@vilashin.com</span>
            </a>

            {/* View Services */}
            <button
              type="button"
              onClick={onExploreServices}
              className="liquid-pill px-5 py-3.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white rounded-2xl flex items-center gap-2 cursor-pointer"
            >
              <span>{t.hero.viewServices}</span>
              <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Claim-to-Proof Row (Apple-Style Glass Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.hero.metrics.map((point, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-2xl p-4 sm:p-5 border border-white/10"
            >
              <div className="text-xl sm:text-2xl font-mono font-black text-white tabular-nums mb-1 tracking-tight">
                <span className="bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent">
                  {point.val}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-amber-400 mb-0.5">
                {point.label}
              </div>
              <div className="text-[11px] sm:text-xs text-neutral-400 font-normal">
                {point.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        type="button"
        onClick={onExploreServices}
        aria-label={t.hero.viewServices}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-amber-400 transition-colors animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-6 h-6" />
      </button>

      {/* Photo credit (CC BY-SA 4.0 attribution) */}
      <a
        href={KAPAN_HERO_CREDIT.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-3 z-10 text-[10px] text-white/40 hover:text-white/70 transition-colors"
      >
        {KAPAN_HERO_CREDIT.text}
      </a>
    </section>
  );
};
