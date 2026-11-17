import React from 'react';
import { TranslationData } from '../data/translations';
import { AlertCircle, ClipboardCheck, Ruler, FileSpreadsheet, FileCheck, PhoneCall } from 'lucide-react';

interface EstimationWorkflowProps {
  t: TranslationData;
}

export const EstimationWorkflow: React.FC<EstimationWorkflowProps> = ({ t }) => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <ClipboardCheck className="w-5 h-5 text-amber-400" />;
      case '02':
        return <Ruler className="w-5 h-5 text-amber-400" />;
      case '03':
        return <FileSpreadsheet className="w-5 h-5 text-amber-400" />;
      case '04':
      default:
        return <FileCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      {/* Background ambient liquid glass caustic */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 mb-2">
            {t.workflow.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            {t.workflow.heading}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.workflow.subheading}
          </p>
        </div>

        {/* Transparent Pricing Policy Notice (Liquid Glass Panel) */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl liquid-pill flex items-center justify-center text-amber-400 shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {t.workflow.pricingNoteTitle}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                {t.workflow.pricingNoteDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Engineering Estimation Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.workflow.steps.map((step) => (
            <div
              key={step.num}
              className="liquid-glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-amber-400 tracking-wider">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl liquid-pill flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(step.num)}
                  </div>
                </div>

                <h4 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h4>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4 text-[11px] font-mono text-amber-400/80">
                {step.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Prompt */}
        <div className="liquid-glass-card rounded-2xl p-6 border border-amber-400/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold text-white">
              {t.workflow.consultationTitle}
            </div>
            <div className="text-xs text-neutral-300">
              {t.workflow.consultationDesc}
            </div>
          </div>

          <a
            href="tel:+37493997055"
            className="liquid-btn-primary px-6 py-3 text-xs font-bold rounded-xl flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg shadow-amber-500/20"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t.workflow.callAction}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
