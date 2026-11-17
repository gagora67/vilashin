import React, { useState } from 'react';
import { TranslationData } from '../data/translations';
import { ShieldCheck, Copy, Check, MapPin, Phone, Building, Hash, UserCheck, Mail } from 'lucide-react';

interface CompanyVerificationProps {
  t: TranslationData;
}

export const CompanyVerification: React.FC<CompanyVerificationProps> = ({ t }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="credentials" className="py-20 relative overflow-hidden">
      {/* Liquid glass ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 mb-2">
            {t.credentials.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            {t.credentials.heading}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.credentials.subheading}
          </p>
        </div>

        {/* Primary Verification Card in Liquid Glass */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-400/20 shadow-2xl relative overflow-hidden">

          {/* Grid of Verified Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Director: Vilen Hakobyan */}
            <div className="liquid-glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                    {t.credentials.directorLabel}
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-md">
                    {t.credentials.officialStatusBadge}
                  </span>
                </div>
                <div className="text-xl font-bold text-white tracking-tight mb-1">
                  {t.credentials.directorValue}
                </div>
              </div>
              <div className="text-xs text-neutral-400 mt-2">
                {t.credentials.directorDesc}
              </div>
            </div>

            {/* TIN / ՀՎՀՀ */}
            <div className="liquid-glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-amber-400" />
                    {t.credentials.tinLabel}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                    {t.credentials.officialStatusBadge}
                  </span>
                </div>
                <div className="text-2xl font-mono font-bold text-white tracking-wider tabular-nums mb-1">
                  {t.credentials.tinValue}
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(t.credentials.tinValue, 'tin')}
                className="mt-2 text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors self-start cursor-pointer"
              >
                {copiedField === 'tin' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{t.credentials.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.credentials.copyBtn} ({t.credentials.tinValue})</span>
                  </>
                )}
              </button>
            </div>

            {/* Registered Address in Kapan */}
            <div className="liquid-glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-neutral-400 flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {t.credentials.regAddressLabel}
                </div>
                <div className="text-sm font-semibold text-white leading-snug mb-2">
                  {t.credentials.regAddressValue}
                </div>
              </div>
              <div className="text-xs text-neutral-400 font-mono mt-1">
                {t.credentials.locationNote}
              </div>
            </div>

            {/* Legal Status & Tenders */}
            <div className="liquid-glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-neutral-400 flex items-center gap-1.5 mb-2">
                  <Building className="w-3.5 h-3.5 text-amber-400" />
                  {t.credentials.legalTypeLabel}
                </div>
                <div className="text-base font-semibold text-white leading-snug mb-2">
                  {t.companyName}
                </div>
              </div>
              <div className="text-xs text-amber-300 font-medium mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.credentials.statusValue}</span>
              </div>
            </div>

            {/* Single Official Verified Phone */}
            <div className="liquid-glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-neutral-400 flex items-center gap-1.5 mb-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  {t.credentials.phoneLabel}
                </div>
                <div className="text-xl font-mono font-bold text-white tracking-wide mb-1">
                  <a href="tel:+37493997055" className="hover:text-amber-400 transition-colors">
                    {t.credentials.phoneValue}
                  </a>
                </div>
              </div>
              <div className="text-xs text-neutral-400">
                {t.contact.hoursVal}
              </div>
            </div>

            {/* Official Corporate Emails (contact@vilashin.com & info@vilashin.com) */}
            <div className="liquid-glass-card rounded-2xl p-5 border border-amber-400/30 bg-amber-500/[0.03] flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-amber-300 flex items-center gap-1.5 mb-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  {t.credentials.emailsLabel}
                </div>
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <a href="mailto:contact@vilashin.com" className="text-white hover:text-amber-400 transition-colors block">
                      contact@vilashin.com
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@vilashin.com" className="text-neutral-300 hover:text-amber-400 transition-colors block">
                      info@vilashin.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-3">
                vilashin.com
              </div>
            </div>

          </div>

          {/* Bottom note */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
            <div>
              <span className="text-neutral-300 font-medium">{t.credentials.statusLabel}: </span>
              {t.credentials.statusValue}
            </div>
            <div className="font-mono text-amber-400/80 shrink-0">
              {t.credentials.locationNote}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
