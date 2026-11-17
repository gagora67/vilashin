import React from 'react';
import { TranslationData } from '../data/translations';
import { MapPin, Quote } from 'lucide-react';

interface AboutSyunikProps {
  t: TranslationData;
}

export const AboutSyunik: React.FC<AboutSyunikProps> = ({ t }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 mb-2">
            {t.about.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            {t.about.heading}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.about.subheading}
          </p>
        </div>

        {/* 2-Column Split: Image on Left / Company Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Director portrait: Vilen Hakobyan (photo in public/images, also referenced in schema.org JSON-LD) */}
          <figure className="lg:col-span-6 liquid-glass rounded-3xl p-3 border border-white/10 relative overflow-hidden group m-0">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:h-full w-full rounded-2xl overflow-hidden">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/vilen-hakobyan-director-vilashin-640.webp 640w, /images/vilen-hakobyan-director-vilashin-1200.webp 1200w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
                <img
                  src="/images/vilen-hakobyan-director-vilashin-1200.jpg"
                  srcSet="/images/vilen-hakobyan-director-vilashin-640.jpg 640w, /images/vilen-hakobyan-director-vilashin-1200.jpg 1200w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  width={1200}
                  height={1109}
                  alt={t.about.directorPhotoAlt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-40 sm:opacity-85" />
            </div>
            <figcaption className="mt-3 sm:mt-0 sm:absolute sm:bottom-8 sm:left-8 sm:right-8 p-4 rounded-xl liquid-glass border border-white/15">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-mono text-amber-300">
                <span className="flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {t.contact.addressTitle}
                </span>
                <span className="text-neutral-300 font-semibold">{t.contact.address}</span>
              </div>
              <div className="text-xs text-neutral-300 mt-1 font-mono">
                {t.companyName} · {t.about.directorQuoteAuthor}
              </div>
            </figcaption>
          </figure>

          {/* Narrative & Quote */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="liquid-glass rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4 text-sm text-neutral-300 leading-relaxed font-normal">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Direct Quote from Director Vilen Hakobyan */}
            <div className="liquid-glass-card rounded-2xl p-6 border border-amber-400/30 relative">
              <Quote className="w-8 h-8 text-amber-400/30 mb-2" />
              <p className="text-sm sm:text-base text-neutral-100 italic leading-relaxed mb-4">
                {t.about.directorQuote}
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 text-xs font-bold font-mono">
                  VH
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.about.directorQuoteAuthor}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    {t.about.directorQuoteRole}
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {t.about.pillars.map((pillar, idx) => (
                <div key={idx} className="liquid-glass-card rounded-xl p-4 border border-white/10">
                  <div className="text-xs font-bold text-amber-300 mb-1">
                    {pillar.title}
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-snug">
                    {pillar.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
