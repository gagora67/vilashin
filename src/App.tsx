import React from 'react';
import { Language } from './types';
import { translations } from './data/translations';
import { detectLanguage } from './i18n';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyVerification } from './components/CompanyVerification';
import { Services } from './components/Services';
import { EstimationWorkflow } from './components/EstimationWorkflow';
import { Projects } from './components/Projects';
import { AboutSyunik } from './components/AboutSyunik';
import { FaqSection } from './components/FaqSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // The language is fixed per page: / (EN), /hy/ (HY), /ru/ (RU).
  // Switching language navigates to another page, which loads from the top.
  const currentLang: Language = detectLanguage();
  const t = translations[currentLang];

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-neutral-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Dynamic Ambient Liquid Caustic Lights in Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[650px] h-[650px] bg-amber-500/[0.04] rounded-full blur-[140px] fluid-orb-1" />
        <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-cyan-500/[0.04] rounded-full blur-[160px] fluid-orb-2" />
        <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-amber-400/[0.03] rounded-full blur-[140px]" />
      </div>

      {/* Apple-Style Floating Liquid Glass Top Bar Navigation */}
      <Navbar currentLang={currentLang} t={t} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        {/* Hero Section */}
        <Hero
          t={t}
          onExploreServices={scrollToServices}
        />

        {/* Official Legal & Registry Verification Section (Director Vilen Hakobyan, TIN 09428738, Kapan) */}
        <CompanyVerification t={t} />

        {/* Strictly the 4 Authorized Services */}
        <Services t={t} />

        {/* Transparent Estimation Workflow (No fake fixed prices) */}
        <EstimationWorkflow t={t} />

        {/* Real Syunik Projects / Practice Profile */}
        <Projects t={t} />

        {/* Syunik & Kapan Regional Engineering Rigor */}
        <AboutSyunik t={t} />

        {/* Frequently Asked Questions */}
        <FaqSection t={t} />

        {/* Direct Contact & Management Channels (No Form, Direct Phone & Emails) */}
        <Contact t={t} />
      </main>

      {/* Quiet Authoritative Footer */}
      <Footer t={t} currentLang={currentLang} />
    </div>
  );
}
