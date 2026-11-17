import React, { useState } from 'react';
import { TranslationData } from '../data/translations';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqProps {
  t: TranslationData;
}

export const FaqSection: React.FC<FaqProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 mb-2">
            {t.faq.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 [text-wrap:balance]">
            {t.faq.heading}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="liquid-glass rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
