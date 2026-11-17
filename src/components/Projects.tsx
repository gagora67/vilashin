import React from 'react';
import { TranslationData } from '../data/translations';
import { CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  t: TranslationData;
}

export const Projects: React.FC<ProjectsProps> = ({ t }) => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 mb-2">
            {t.projects.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            {t.projects.heading}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.projects.subheading}
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.projects.items.map((project) => (
            <div
              key={project.id}
              className="liquid-glass-card rounded-3xl border border-white/10 group flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container with Fallback Scrim */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-2">
                    <span className="text-amber-400 font-medium">{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 mb-4 pt-3 border-t border-white/10">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 font-mono">
                  {t.projects.contractorLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
