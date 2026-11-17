import React from 'react';
import { TranslationData } from '../data/translations';
import { Phone, MessageSquare, Send, MapPin, Clock, UserCheck, ShieldCheck, Mail } from 'lucide-react';

interface ContactProps {
  t: TranslationData;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 mb-2">
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            {t.contact.heading}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        {/* Direct Action Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Direct Action Channels (7 cols) */}
          <div className="lg:col-span-7 liquid-glass rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-400/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              {/* Executive Contact Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                    {t.contact.executiveTitle}
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white">
                    {t.contact.directorName}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {t.contact.directorRole}
                  </div>
                </div>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="space-y-3.5 mb-8">
                {/* Direct Call Button */}
                <a
                  href="tel:+37493997055"
                  className="liquid-btn-primary w-full py-4 px-6 text-sm font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-amber-500/25 group transition-all"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{t.contact.callButton}</span>
                </a>

                {/* Email Channels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="mailto:contact@vilashin.com"
                    className="liquid-btn-secondary py-3 px-4 text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 hover:border-amber-400/50 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>contact@vilashin.com</span>
                  </a>

                  <a
                    href="mailto:info@vilashin.com"
                    className="liquid-btn-secondary py-3 px-4 text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 hover:border-amber-400/50 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>info@vilashin.com</span>
                  </a>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/37493997055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-btn-secondary w-full py-3.5 px-6 text-xs sm:text-sm font-semibold rounded-2xl flex items-center justify-center gap-3 hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>{t.contact.whatsappButton} (+374 93 997055)</span>
                </a>

                {/* Telegram Button */}
                <a
                  href="https://t.me/+37493997055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-btn-secondary w-full py-3.5 px-6 text-xs sm:text-sm font-semibold rounded-2xl flex items-center justify-center gap-3 hover:border-sky-500/50 hover:text-sky-300 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>{t.contact.telegramButton}</span>
                </a>
              </div>
            </div>

            {/* Direct Trust Stamp */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.contact.trustBadge}</span>
            </div>
          </div>

          {/* Office & Operational Address Card (5 cols) */}
          <div className="lg:col-span-5 liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-4">
                {t.contact.addressTitle}
              </h3>

              <div className="space-y-5 text-sm">
                {/* Physical Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl liquid-pill flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">{t.credentials.regAddressLabel}</div>
                    <div className="text-sm font-semibold text-white leading-snug mt-0.5">
                      {t.contact.address}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {t.contact.addressSub}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl liquid-pill flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">{t.contact.hoursTitle}</div>
                    <div className="text-sm font-semibold text-white leading-snug mt-0.5">
                      {t.contact.hoursVal}
                    </div>
                  </div>
                </div>

                {/* Regional Availability Note */}
                <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/10 text-xs text-neutral-300 leading-relaxed">
                  <strong className="text-amber-400 block mb-1">{t.contact.dispatchNoteTitle}</strong>
                  {t.contact.dispatchNote}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              {t.contact.tinBadge}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
