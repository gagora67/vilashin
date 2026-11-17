import React from 'react';
import { TranslationData } from '../data/translations';
import { RefreshCw, Building, PenTool, Hammer, CheckCircle2, Star } from 'lucide-react';

interface ServicesProps {
  t: TranslationData;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'reconstruction':
        return <RefreshCw className="w-5 h-5 text-amber-400" />;
      case 'capital-construction':
        return <Building className="w-5 h-5 text-amber-400" />;
      case 'design':
        return <PenTool className="w-5 h-5 text-amber-400" />;
      case 'construction-assembly':
      default:
        return <Hammer className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 mb-2">
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            {t.services.heading}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className={`liquid-glass-card rounded-3xl p-6 sm:p-8 border flex flex-col justify-between group ${
                service.isCoreSpecialization
                  ? 'border-amber-400/40 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-amber-500/[0.05] shadow-2xl'
                  : 'border-white/10'
              }`}
            >
              <div>
                {/* Header row: Number + Specialization Tag + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-amber-400 tracking-wider">
                      {service.number}.
                    </span>
                    {service.isCoreSpecialization && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/50 px-2.5 py-1 rounded-full shadow-sm">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        {t.services.coreBadge}
                      </span>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-xl liquid-pill flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short and Full Description */}
                <p className="text-sm text-neutral-200 leading-relaxed mb-4 font-normal">
                  {service.shortDesc}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-normal">
                  {service.fullDesc}
                </p>

                {/* Scope Deliverables */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>{service.scopeNote}</span>
                <span className="text-amber-400/80">{t.services.regionBadge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
