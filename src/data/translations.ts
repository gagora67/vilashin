import { Language, ProjectItem, ServiceItem, FaqItem } from '../types';

import heroImage from '../assets/images/hero_vilashin_construction_1794252438503.jpg';
import infraImage from '../assets/images/project_infrastructure_syunik_1794252439534.jpg';
import aboutImage from '../assets/images/about_engineering_kapan_1794252441043.jpg';

// Imported so Vite bundles them into the production build (dist/assets).
export const HERO_IMAGE = heroImage;

// Kapan hero panorama — modern-day Kapan, Voghji valley (photographed May 2022).
// Source: Wikimedia Commons, "Kapan-tesaran4.jpg" by Syunik, CC BY-SA 4.0
// https://commons.wikimedia.org/wiki/File:Kapan-tesaran4.jpg
export const KAPAN_HERO_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Kapan-tesaran4.jpg/3840px-Kapan-tesaran4.jpg';
export const KAPAN_HERO_IMAGE_MD = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Kapan-tesaran4.jpg/1920px-Kapan-tesaran4.jpg';
export const KAPAN_HERO_CREDIT = {
  text: 'Kapan, Syunik · Photo: Syunik / Wikimedia Commons · CC BY-SA 4.0',
  url: 'https://commons.wikimedia.org/wiki/File:Kapan-tesaran4.jpg',
};
export const INFRA_IMAGE = infraImage;
export const ABOUT_IMAGE = aboutImage;

export interface TranslationData {
  companyName: string;
  companyTagline: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    services: string;
    credentials: string;
    workflow: string;
    projects: string;
    about: string;
    contact: string;
    callNow: string;
    emailUs: string;
  };
  hero: {
    welcome: string;
    regionTag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    directorBadge: string;
    callDirect: string;
    emailDirect: string;
    viewServices: string;
    metrics: {
      val: string;
      label: string;
      desc: string;
    }[];
  };
  credentials: {
    badge: string;
    heading: string;
    subheading: string;
    directorLabel: string;
    directorValue: string;
    directorDesc: string;
    tinLabel: string;
    tinValue: string;
    regAddressLabel: string;
    regAddressValue: string;
    legalTypeLabel: string;
    legalTypeValue: string;
    statusLabel: string;
    statusValue: string;
    phoneLabel: string;
    phoneValue: string;
    emailsLabel: string;
    emailsValue: string[];
    copyBtn: string;
    copied: string;
    locationNote: string;
    officialStatusBadge: string;
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    coreBadge: string;
    regionBadge: string;
    items: ServiceItem[];
  };
  workflow: {
    badge: string;
    heading: string;
    subheading: string;
    pricingNoteTitle: string;
    pricingNoteDesc: string;
    consultationTitle: string;
    consultationDesc: string;
    callAction: string;
    steps: {
      num: string;
      title: string;
      desc: string;
      tag: string;
    }[];
  };
  projects: {
    badge: string;
    heading: string;
    subheading: string;
    contractorLabel: string;
    items: ProjectItem[];
  };
  about: {
    badge: string;
    heading: string;
    subheading: string;
    p1: string;
    p2: string;
    directorQuote: string;
    directorQuoteAuthor: string;
    directorQuoteRole: string;
    directorPhotoAlt: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  faq: {
    badge: string;
    heading: string;
    items: FaqItem[];
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    executiveTitle: string;
    directorName: string;
    directorRole: string;
    phone: string;
    emails: {
      general: string;
      corporate: string;
    };
    addressTitle: string;
    address: string;
    addressSub: string;
    hoursTitle: string;
    hoursVal: string;
    dispatchNoteTitle: string;
    dispatchNote: string;
    callButton: string;
    whatsappButton: string;
    telegramButton: string;
    emailButton: string;
    trustBadge: string;
    tinBadge: string;
  };
  footer: {
    tagline: string;
    director: string;
    tin: string;
    rights: string;
    kapanSyunik: string;
    languageSelection: string;
    officialDomain: string;
    creditPrefix: string;
    creditSuffix: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  en: {
    companyName: 'Vilashin LLC',
    companyTagline: 'Construction, Building Reconstruction & Capital Renovation across Armenia',
    seo: {
      title: 'Vilashin LLC — Construction & Reconstruction | Kapan, Armenia',
      description: 'Vilashin LLC - Licensed general contractor based in Kapan, working throughout Armenia. Director: Vilen Hakobyan. Building reconstruction, capital construction, design, and concrete works. TIN: 09428738.',
      keywords: 'Vilashin LLC, construction Kapan, construction Armenia, building reconstruction Armenia, building reconstruction Syunik, Vilen Hakobyan, TIN 09428738, contractor Kapan Armenia',
    },
    nav: {
      services: 'Services',
      credentials: 'Credentials',
      workflow: 'Pricing & Process',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      callNow: 'Call Direct',
      emailUs: 'Email',
    },
    hero: {
      welcome: 'Welcome to VILASHIN',
      regionTag: 'LICENSED GENERAL CONTRACTOR · KAPAN · ALL OF ARMENIA',
      title: 'Construction & Capital Reconstruction —',
      titleAccent: 'in Kapan and Throughout Armenia',
      subtitle: 'Vilashin LLC is a licensed construction contractor headquartered in Kapan and working throughout Armenia. We specialize in building reconstruction, structural reinforcement, ground-up capital construction, architectural design, and concrete assembly. Director: Vilen Hakobyan. TIN: 09428738.',
      directorBadge: 'Director: Vilen Hakobyan',
      callDirect: '+374 93 997055',
      emailDirect: 'contact@vilashin.com',
      viewServices: 'Explore Services',
      metrics: [
        { val: '09428738', label: 'TIN / Tax ID', desc: 'Syunik Regional Registry' },
        { val: 'Kapan', label: 'Headquarters & Base', desc: '3/3 R. Minasyan St., 3304' },
        { val: 'Director', label: 'Vilen Hakobyan', desc: 'Head of the Company' },
        { val: 'Tenders', label: 'State & Municipal', desc: 'Projects Across Armenia' },
      ],
    },
    credentials: {
      badge: 'OFFICIAL CORPORATE CREDENTIALS',
      heading: 'Vilashin LLC — Verified Registry Information',
      subheading: 'Complete legal transparency for our clients and municipal partners across Armenia.',
      directorLabel: 'Director',
      directorValue: 'Vilen Hakobyan',
      directorDesc: 'Director of Vilashin LLC',
      tinLabel: 'Tax Identification Number (TIN / ՀՎՀՀ)',
      tinValue: '09428738',
      regAddressLabel: 'Legal & Operational Address',
      regAddressValue: '3/3 R. Minasyan St., Kapan 3304, Syunik Province, Armenia',
      legalTypeLabel: 'Legal Entity Form',
      legalTypeValue: 'Limited Liability Company (LLC / ՍՊԸ)',
      statusLabel: 'Licensing & Tenders',
      statusValue: 'Licensed contractor, active participant in public tenders across Armenia',
      phoneLabel: 'Direct Official Telephone',
      phoneValue: '+374 93 997055',
      emailsLabel: 'Official Corporate Inquiries',
      emailsValue: ['contact@vilashin.com', 'info@vilashin.com'],
      copyBtn: 'Copy',
      copied: 'Copied',
      locationNote: 'Postal Index: 3304 (Kapan)',
      officialStatusBadge: 'Active Entity',
    },
    services: {
      badge: 'CORE CAPABILITIES',
      heading: 'Specialized Construction Services',
      subheading: 'Vilashin LLC executes strictly the following four core engineering fields in Kapan and throughout Armenia:',
      coreBadge: 'CORE SPECIALIZATION',
      regionBadge: 'Kapan · All of Armenia',
      items: [
        {
          id: 'reconstruction',
          number: '01',
          title: 'Reconstruction & Capital Renovation',
          isCoreSpecialization: true,
          shortDesc: 'Restoration, seismic reinforcement, and rehabilitation of older or damaged structures.',
          fullDesc: 'The primary profile and signature capability of Vilashin LLC. We carry out full capital and partial renovation of residential buildings, commercial offices, public municipal buildings, and state institutions, restoring structural integrity and extending operational life.',
          deliverables: [
            'Structural retrofitting and seismic strengthening of aging buildings',
            'Capital overhaul of municipal and public administration facilities',
            'Full commercial office and business premise renovation',
            'Comprehensive facade restoration and utility renewal',
          ],
          scopeNote: 'Our most requested and experienced specialization throughout Armenia.',
        },
        {
          id: 'capital-construction',
          number: '02',
          title: 'Capital Construction',
          isCoreSpecialization: false,
          shortDesc: 'Construction of private residences, cottages, and non-residential buildings from the ground up.',
          fullDesc: 'Ground-up capital construction of residential homes, private cottages, and commercial or administrative structures in Kapan and across Armenia, adhering strictly to Armenian seismic and geotechnical norms.',
          deliverables: [
            'Turnkey construction of private residential houses and cottages',
            'Erection of commercial and administrative buildings',
            'Construction on demanding mountain slopes',
            'Complete milestone-by-milestone structural quality control',
          ],
          scopeNote: 'Complete structural erection from ground level to final handover.',
        },
        {
          id: 'design',
          number: '03',
          title: 'Architectural & Engineering Design',
          isCoreSpecialization: false,
          shortDesc: 'Architectural planning for individual homes, mansions, commercial and public buildings.',
          fullDesc: 'Development of detailed architectural and structural project blueprints taking into account local rocky soil conditions, high seismic requirements, and client technical specifications.',
          deliverables: [
            'Architectural schematics and structural reinforcement calculations',
            'Custom residential blueprints for private homes and villas',
            'Design documentation for commercial and public facilities',
            'Compliance coordination with municipal planning authorities',
          ],
          scopeNote: 'Precise engineering blueprints ensuring lifelong structural safety.',
        },
        {
          id: 'construction-assembly',
          number: '04',
          title: 'Construction & Assembly Works',
          isCoreSpecialization: false,
          shortDesc: 'Earthworks, site preparation, reinforced concrete foundations and walls, and roofing.',
          fullDesc: 'Execution of critical baseline construction milestones: excavation and site levelling, pouring complex concrete foundations and load-bearing walls, and installing heavy-duty roofing systems.',
          deliverables: [
            'Earthworks, trenching, site levelling and pit excavation',
            'High-strength concrete foundation pouring for complex terrain',
            'Monolithic reinforced concrete load-bearing walls and slabs',
            'Roof framing, weatherproofing, and comprehensive roof assembly',
          ],
          scopeNote: 'High-grade materials and strict compliance with construction standards.',
        },
      ],
    },
    workflow: {
      badge: 'TRANSPARENT ESTIMATION',
      heading: 'How We Calculate Estimates & Project Budgets',
      subheading: 'Vilashin LLC does not publish arbitrary or invented fixed prices. Every construction or renovation contract is calculated strictly based on engineering facts.',
      pricingNoteTitle: 'Why We Do Not Publish Fictional Fixed Price Lists',
      pricingNoteDesc: 'Due to Armenia’s mountainous geology, every plot, foundation, and renovated structure possesses unique seismic, soil, and structural wear factors. A reliable cost can only be established after a physical site inspection and a detailed bill of quantities (BOQ).',
      consultationTitle: 'Need an estimate for a site in Kapan or anywhere in Armenia?',
      consultationDesc: 'Contact Managing Director Vilen Hakobyan directly to schedule an on-site engineer inspection.',
      callAction: 'Call Director (+374 93 997055)',
      steps: [
        {
          num: '01',
          title: 'Site Visit & Technical Evaluation',
          desc: 'An engineer visits your property in Kapan or anywhere in Armenia to inspect current ground conditions and structural geometry.',
          tag: 'Site Inspection',
        },
        {
          num: '02',
          title: 'Surveys & Defect Schedule (BOQ)',
          desc: 'Exact physical measurements and documentation of all required repair or construction scopes.',
          tag: 'Exact Measurements',
        },
        {
          num: '03',
          title: 'Itemized Engineering Estimate',
          desc: 'Preparation of a transparent local estimate based on verified materials and labor rates conforming to Armenian building codes.',
          tag: 'Official Building Codes',
        },
        {
          num: '04',
          title: 'Formal Contract & Milestone Schedule',
          desc: 'A legally binding construction contract with fixed milestone deadlines and transparent accounting.',
          tag: 'Binding Agreement',
        },
      ],
    },
    projects: {
      badge: 'TRACK RECORD',
      heading: 'Core Construction & Renovation Profiles',
      subheading: 'Practical execution of works in Kapan and Syunik Province:',
      contractorLabel: 'General Contractor: Vilashin LLC (Kapan)',
      items: [
        {
          id: 'reconstruction-project',
          title: 'Building Renovation & Structural Rehabilitation',
          category: 'reconstruction',
          location: 'Kapan, Syunik Province',
          year: '2023-2025',
          image: ABOUT_IMAGE,
          scope: 'Reinforcement of bearing walls, capital overhaul, interior and exterior renewal',
          description: 'The core specialization of Vilashin LLC. Restoring integrity to older public and commercial facilities, addressing structural fatigue and renewing operational usability.',
          features: ['Structural retrofitting', 'Seismic stabilization', 'Turnkey finishing'],
        },
        {
          id: 'capital-project',
          title: 'Capital Residential & Non-Residential Construction',
          category: 'capital',
          location: 'Kapan and neighboring communities',
          year: '2022-2025',
          image: HERO_IMAGE,
          scope: 'Ground-up construction of private houses and commercial premises',
          description: 'Full-cycle capital construction: site excavation, foundation pouring, concrete framing, wall masonry, and roof installation.',
          features: ['Monolithic foundations', 'Seismic grade concrete', 'Durable masonry'],
        },
        {
          id: 'assembly-project',
          title: 'Earthworks, Concrete & Roofing Assembly',
          category: 'assembly',
          location: 'Syunik Province',
          year: '2023-2024',
          image: INFRA_IMAGE,
          scope: 'Excavation pits, concrete retaining walls, foundation slabs, roof installations',
          description: 'Heavy civil assembly works adapted to the steep alpine landscape of southern Armenia.',
          features: ['Heavy concrete pouring', 'Excavation & site prep', 'Engineered roofing'],
        },
      ],
    },
    about: {
      badge: 'ABOUT VILASHIN LLC',
      heading: 'Dedicated Construction Expertise Across Armenia',
      subheading: 'Rooted in Kapan, we deliver high-integrity construction and renovation backed by direct executive oversight.',
      p1: 'Vilashin LLC is officially incorporated in Kapan, Syunik Province, Armenia at 3/3 R. Minasyan St. (Postal Code: 3304, TIN: 09428738). The director of the company is Vilen Hakobyan.',
      p2: 'Our key field of operation is the reconstruction and capital renovation of buildings, alongside architectural design, ground-up capital construction, earthworks, concrete works, and roofing.',
      directorQuote: '"Our commitment in Kapan and across Armenia is to construct and renovate with genuine durability so that every building withstands the test of time and mountain weather."',
      directorQuoteAuthor: 'Vilen Hakobyan',
      directorQuoteRole: 'Director of Vilashin LLC',
      directorPhotoAlt: 'Vilen Hakobyan, Director of Vilashin LLC, Kapan, Armenia',
      pillars: [
        {
          title: 'Direct Accountability from Kapan',
          desc: 'Headquartered in Kapan, providing direct accessibility and swift response for our clients across Armenia.',
        },
        {
          title: 'State & Municipal Procurement',
          desc: 'Eligible and experienced in government tenders and public infrastructure modernization.',
        },
        {
          title: 'Direct Executive Supervision',
          desc: 'Director Vilen Hakobyan personally inspects engineering milestones on every project site.',
        },
      ],
    },
    faq: {
      badge: 'QUESTIONS & CLARIFICATIONS',
      heading: 'Frequently Asked Questions',
      items: [
        {
          question: 'Who owns and manages Vilashin LLC?',
          answer: 'The director of Vilashin LLC is Vilen Hakobyan. The firm is officially registered in Kapan, Syunik Province (3/3 R. Minasyan St., TIN: 09428738).',
        },
        {
          question: 'What is the primary operational specialty of Vilashin LLC?',
          answer: 'Our main profile is the reconstruction and capital renovation of buildings (strengthening older or damaged buildings, repairing municipal, commercial, and residential facilities). We also perform architectural design, capital construction from scratch, earthworks, concrete work, and roofing.',
        },
        {
          question: 'How do you price construction projects?',
          answer: 'We do not publish fixed or generic prices. Construction and renovation costs depend directly on physical site measurements, soil/structural condition, and a detailed bill of quantities (BOQ) prepared according to Armenian state standards.',
        },
      ],
    },
    contact: {
      badge: 'CONTACT & DISPATCH',
      heading: 'Direct Communication with Vilashin LLC',
      subheading: 'For project consultations, site assessments, and tender inquiries, contact management directly or visit our office in Kapan.',
      executiveTitle: 'Direct Executive Communication',
      directorName: 'Vilen Hakobyan',
      directorRole: 'Director of Vilashin LLC',
      phone: '+374 93 997055',
      emails: {
        general: 'contact@vilashin.com',
        corporate: 'info@vilashin.com',
      },
      addressTitle: 'Kapan Headquarters',
      address: '3/3 R. Minasyan St., Kapan 3304',
      addressSub: 'Syunik Province, Republic of Armenia',
      hoursTitle: 'Working Hours',
      hoursVal: 'Monday – Saturday: 09:00 – 18:00',
      dispatchNoteTitle: 'Site Visits Across Armenia:',
      dispatchNote: 'On-site engineer visits for inspection, structural assessment, and quantity surveys are arranged in Kapan and anywhere in Armenia.',
      callButton: 'Call Director (+374 93 997055)',
      whatsappButton: 'Message via WhatsApp',
      telegramButton: 'Message via Telegram',
      emailButton: 'Email Us',
      trustBadge: 'Licensed Contractor · Direct Access · Kapan · All of Armenia',
      tinBadge: 'TIN / Tax ID: 09428738',
    },
    footer: {
      tagline: 'Vilashin LLC — Construction, Building Reconstruction & Capital Renovation in Kapan and throughout Armenia.',
      director: 'Director: Vilen Hakobyan',
      tin: 'TIN: 09428738',
      rights: 'All rights reserved.',
      kapanSyunik: 'Kapan, Syunik Province, Armenia',
      languageSelection: 'Language Editions',
      officialDomain: 'Official Domain: vilashin.com',
      creditPrefix: 'Website created with the support of ',
      creditSuffix: '',
    },
  },
  hy: {
    companyName: '«ՎԻԼԱՇԻՆ» ՍՊԸ',
    companyTagline: 'Շինարարություն, շենքերի վերակառուցում և հիմնանորոգում ողջ Հայաստանում',
    seo: {
      title: '«ՎԻԼԱՇԻՆ» ՍՊԸ — շինարարություն և վերակառուցում | Կապան, Հայաստան',
      description: '«ՎԻԼԱՇԻՆ» ՍՊԸ - Լիցենզավորված շինարարական ընկերություն Կապանից, աշխատում ենք ողջ Հայաստանում: Ղեկավար՝ Վիլեն Հակոբյան: Վերակառուցում, կապիտալ շինարարություն, նախագծում: ՀՎՀՀ՝ 09428738:',
      keywords: 'Վիլաշին ՍՊԸ, շինարարություն Կապան, շինարարություն Հայաստան, վերակառուցում Սյունիք, Վիլեն Հակոբյան, ՀՎՀՀ 09428738, հիմնանորոգում Կապանում',
    },
    nav: {
      services: 'Ծառայություններ',
      credentials: 'Տվյալներ',
      workflow: 'Գնագոյացում',
      projects: 'Գործունեություն',
      about: 'Մեր մասին',
      contact: 'Կապ',
      callNow: 'Զանգահարել',
      emailUs: 'Էլ. փոստ',
    },
    hero: {
      welcome: 'Բարի գալուստ VILASHIN',
      regionTag: 'ԼԻՑԵՆԶԱՎՈՐՎԱԾ ԿԱՊԱԼԱՌՈՒ · Ք. ԿԱՊԱՆ · ՈՂՋ ՀԱՅԱՍՏԱՆ',
      title: 'Շինարարական և վերակառուցման աշխատանքներ՝',
      titleAccent: 'Կապանում և ողջ Հայաստանում',
      subtitle: '«ՎԻԼԱՇԻՆ» ՍՊԸ-ն Կապանում գրանցված լիցենզավորված շինարարական կազմակերպություն է, որն աշխատում է ողջ Հայաստանում: Մասնագիտացված ենք շենքերի հիմնանորոգման, վերակառուցման, կապիտալ շինարարության և բետոնային աշխատանքների ոլորտում: Ընկերության տնօրեն՝ Վիլեն Հակոբյան:',
      directorBadge: 'Տնօրեն՝ Վիլեն Հակոբյան',
      callDirect: '+374 93 997055',
      emailDirect: 'contact@vilashin.com',
      viewServices: 'Դիտել ծառայությունները',
      metrics: [
        { val: '09428738', label: 'ՀՎՀՀ (Պետական ռեգիստր)', desc: 'Սյունիքի մարզային հաշվառում' },
        { val: 'Կապան', label: 'Գրանցման և գործունեության վայր', desc: 'Ռ. Մինասյան փող., 3/3 շենք' },
        { val: 'Տնօրեն', label: 'Վիլեն Հակոբյան', desc: 'Ընկերության ղեկավար' },
        { val: 'Տենդերներ', label: 'Պետական գնումներ', desc: 'Ծրագրեր ողջ Հայաստանում' },
      ],
    },
    credentials: {
      badge: 'ՊԱՇՏՈՆԱԿԱՆ ՌԵԳԻՍՏՐԻ ՏՎՅԱԼՆԵՐ',
      heading: '«ՎԻԼԱՇԻՆ» ՍՊԸ — Իրավաբանական տվյալներ և ղեկավարություն',
      subheading: 'Թափանցիկ տվյալներ Կապանում գրանցված կապալառուի մասին: Բացառապես ստուգված պետական ռեկվիզիտներ:',
      directorLabel: 'Տնօրեն',
      directorValue: 'Վիլեն Հակոբյան',
      directorDesc: '«ՎԻԼԱՇԻՆ» ՍՊԸ տնօրեն',
      tinLabel: 'ՀՎՀՀ (Հարկ վճարողի հաշվառման համար)',
      tinValue: '09428738',
      regAddressLabel: 'Իրավաբանական և փաստացի հասցե',
      regAddressValue: 'ՀՀ, Սյունիքի մարզ, ք. Կապան, Ռ. Մինասյան փող., 3/3 շենք, 3304',
      legalTypeLabel: 'Կազմակերպական ձև',
      legalTypeValue: 'Սահմանափակ պատասխանատվությամբ ընկերություն (ՍՊԸ)',
      statusLabel: 'Ընկերության կարգավիճակ',
      statusValue: 'Լիցենզավորված կապալառու, տենդերների մասնակից',
      phoneLabel: 'Կոնտակտային հեռախոսահամար',
      phoneValue: '+374 93 997055',
      emailsLabel: 'Պաշտոնական էլ. փոստի հասցեներ',
      emailsValue: ['contact@vilashin.com', 'info@vilashin.com'],
      copyBtn: 'Պատճենել',
      copied: 'Պատճենված է',
      locationNote: 'Փոստային դասիչ՝ 3304 (ք. Կապան)',
      officialStatusBadge: 'Ակտիվ ընկերություն',
    },
    services: {
      badge: 'ԳՈՐԾՈՒՆԵՈՒԹՅԱՆ ՈՒՂՂՈՒԹՅՈՒՆՆԵՐ',
      heading: 'Մատուցվող շինարարական ծառայությունները',
      subheading: '«ՎԻԼԱՇԻՆ» ՍՊԸ-ն իրականացնում է բացառապես ստորև նշված մասնագիտացված աշխատանքները Կապանում և ողջ Հայաստանում:',
      coreBadge: 'ՀԻՄՆԱԿԱՆ ՈՒՂՂՈՒԹՅՈՒՆ',
      regionBadge: 'Կապան · Ողջ Հայաստան',
      items: [
        {
          id: 'reconstruction',
          number: '01',
          title: 'Վերակառուցում և կապիտալ նորոգում',
          isCoreSpecialization: true,
          shortDesc: 'Հին կամ վնասված կառույցների վերականգնում, սեյսմիկ ուժեղացում և ռեստավրացիա:',
          fullDesc: '«ՎԻԼԱՇԻՆ» ՍՊԸ-ի առանցքային մասնագիտացումը: Իրականացնում ենք բնակելի, հասարակական, առևտրային և պետական շենքերի, գրասենյակների կապիտալ ու մասնակի վերանորոգում, կրող պատերի ամրացում և շահագործման հուսալիության բարձրացում:',
          deliverables: [
            'Հին և վթարային շինությունների կառուցվածքային ամրացում',
            'Պետական և համայնքային օբյեկտների հիմնանորոգում',
            'Առևտրային տարածքների և գրասենյակների կապիտալ վերանորոգում',
            'Ճակատների և ներքին հանգույցների համալիր նորոգում',
          ],
          scopeNote: 'Մեր ընկերության ամենապահանջված և փորձառու ուղղությունը ողջ Հայաստանում:',
        },
        {
          id: 'capital-construction',
          number: '02',
          title: 'Կապիտալ շինարարություն',
          isCoreSpecialization: false,
          shortDesc: 'Անհատական բնակելի տների, առանձնատների և ոչ բնակելի շենքերի կառուցում զրոյից:',
          fullDesc: 'Կապանում և ողջ Հայաստանում նոր շենքերի շինարարություն: Կառուցում ենք մասնավոր տներ, քոթեջներ, ինչպես նաև առևտրային և վարչական նշանակության շենքեր՝ խստորեն հետևելով սեյսմիկ և շինարարական նորմերին:',
          deliverables: [
            'Անհատական բնակելի տների և առանձնատների կառուցում',
            'Առևտրային և վարչական շենքերի կառուցում',
            'Լեռնային բարդ ռելիեֆի պայմաններում շինարարություն',
            'Շինարարական բոլոր փուլերի տեխնիկական վերահսկողություն',
          ],
          scopeNote: 'Կապիտալ շինարարություն զրոյական նիշից մինչև ամբողջական ավարտ:',
        },
        {
          id: 'design',
          number: '03',
          title: 'Ճարտարապետաշինարարական նախագծում',
          isCoreSpecialization: false,
          shortDesc: 'Ինդիվիդուալ տների, առանձնատների, կոմերցիոն և հասարակական շենքերի նախագծում:',
          fullDesc: 'Մշակում ենք լիարժեք նախագծանախահաշվային փաստաթղթեր՝ հաշվի առնելով տեղանքի սեյսմիկ պայմանները, հողի երկրաբանությունը և պատվիրատուի տեխնիկական պահանջները:',
          deliverables: [
            'Ճարտարապետական և կոնստրուկտորական նախագծեր',
            'Անհատական տների և քոթեջների էքսկլյուզիվ պլանավորում',
            'Կոմերցիոն և հանրային շինությունների նախագծում',
            'Համաձայնեցում տեղական ինքնակառավարման մարմինների հետ',
          ],
          scopeNote: 'Ճշգրիտ հաշվարկներ, որոնք ապահովում են կառույցի ամրությունը:',
        },
        {
          id: 'construction-assembly',
          number: '04',
          title: 'Շինմոնտաժային աշխատանքներ',
          isCoreSpecialization: false,
          shortDesc: 'Հողային, բետոնային (հիմքեր, կրող պատեր) և տանիքածածկման (կտուրների) աշխատանքներ:',
          fullDesc: 'Հիմնարար շինարարական գործընթացների իրականացում. շինհրապարակների նախապատրաստում և կոտլովանների փորում, ցանկացած բարդության հիմքերի և կրող երկաթբետոնե պատերի լցնում, տանիքների կոնստրուկցիաների մոնտաժ:',
          deliverables: [
            'Հողային աշխատանքներ, հարթեցում և կոտլովանների պատրաստում',
            'Բետոնային աշխատանքներ և բարդ հիմքերի լցնում',
            'Մոնոլիտ երկաթբետոնե կրող պատերի և կարկասների կառուցում',
            'Տանիքների և կտուրների կապիտալ մոնտաժ ու վերանորոգում',
          ],
          scopeNote: 'Որակյալ հումք և տեխնոլոգիական ստանդարտների պահպանում:',
        },
      ],
    },
    workflow: {
      badge: 'ԳՆԱԳՈՅԱՑՄԱՆ ՍԿԶԲՈՒՆՔՆԵՐ',
      heading: 'Ինչպես ենք ձևավորում նախահաշիվը և արժեքը',
      subheading: '«ՎԻԼԱՇԻՆ» ՍՊԸ-ն չի օգտագործում հորինված ֆիքսված գներ: Յուրաքանչյուր շինարարական կամ նորոգման օբյեկտի արժեքը որոշվում է խիստ տեխնիկական հաշվարկով:',
      pricingNoteTitle: 'Ինչու մեր կայքում չկան կամայական «ֆիքսված» գնացուցակներ',
      pricingNoteDesc: 'Հայաստանի լեռնային ռելիեֆում յուրաքանչյուր հողակտոր, հիմք կամ վերանորոգման ենթակա շենք ունի յուրահատուկ պարամետրեր (սեյսմիկ գոտի, գրունտի կազմ, շենքի մաշվածության աստիճան): Արժեքը կազմվում է բացառապես տեղազննությունից և ծավալաթերթի (դեֆեկտային ակտի) մշակումից հետո:',
      consultationTitle: 'Անհրաժե՞շտ է նախահաշիվ Կապանի կամ Հայաստանի ցանկացած վայրի օբյեկտի համար:',
      consultationDesc: 'Կապ հաստատեք տնօրեն Վիլեն Հակոբյանի հետ՝ մասնագետի տեղազննություն կազմակերպելու համար:',
      callAction: 'Զանգահարել տնօրենին (+374 93 997055)',
      steps: [
        {
          num: '01',
          title: 'Տեղազննություն և առաջադրանքի ընդունում',
          desc: 'Ինժեների այցելություն Կապանում կամ Հայաստանի ցանկացած բնակավայրում գտնվող օբյեկտ, առկա վիճակի գնահատում:',
          tag: 'Տեղազննություն',
        },
        {
          num: '02',
          title: 'Չափագրում և ծավալաթերթի կազմում',
          desc: 'Բոլոր անհրաժեշտ չափագրումների իրականացում, շինարարական կամ նորոգման աշխատանքների ծավալների ճշգրիտ ամրագրում:',
          tag: 'Ճշգրիտ չափագրում',
        },
        {
          num: '03',
          title: 'Պաշտոնական նախահաշվի հաշվարկ',
          desc: 'Շինարարական նորմերին (ՇՆուԿ) համապատասխան նախահաշվի կազմում՝ նյութերի և աշխատուժի թափանցիկ գներով:',
          tag: 'Շինարարական նորմեր',
        },
        {
          num: '04',
          title: 'Պայմանագրի կնքում և ժամկետների ֆիքսում',
          desc: 'Իրավաբանորեն ամրագրված պայմանագիր, փուլային վճարումներ և հստակ շինարարական գրաֆիկ:',
          tag: 'Իրավական պայմանագիր',
        },
      ],
    },
    projects: {
      badge: 'ՄԵՐ ՓՈՐՁԱՌՈՒԹՅՈՒՆԸ',
      heading: 'Շինարարական և նորոգման ուղղությունները',
      subheading: 'Իրականացված աշխատանքների օրինակներ Կապանում և Սյունիքի մարզում:',
      contractorLabel: 'Գլխավոր կապալառու՝ «ՎԻԼԱՇԻՆ» ՍՊԸ (Կապան)',
      items: [
        {
          id: 'reconstruction-project',
          title: 'Շենքերի և շինությունների հիմնանորոգում',
          category: 'reconstruction',
          location: 'ք. Կապան, Սյունիքի մարզ',
          year: '2023-2025',
          image: ABOUT_IMAGE,
          scope: 'Հին շենքերի կրող պատերի ամրացում, կապիտալ վերանորոգում, ներքին և արտաքին նորոգման աշխատանքներ',
          description: '«ՎԻԼԱՇԻՆ» ՍՊԸ-ի հիմնական պրոֆիլը: Կառույցների շահագործման հուսալիության բարձրացում և վթարային հանգույցների լիարժեք վերականգնում:',
          features: ['Կառուցվածքային ամրացում', 'Սեյսմիկ կայունացում', 'Համալիր հարդարում'],
        },
        {
          id: 'capital-project',
          title: 'Կապիտալ բնակելի և ոչ բնակելի շինարարություն',
          category: 'capital',
          location: 'Կապան և մերձակա համայնքներ',
          year: '2022-2025',
          image: HERO_IMAGE,
          scope: 'Մասնավոր առանձնատների և առևտրային շենքերի կառուցում զրոյից',
          description: 'Ամբողջական շինարարական ցիկլ՝ տեղանքի նախապատրաստումից, հիմքից մինչև տանիքածածկում և շահագործման հանձնում:',
          features: ['Մոնոլիտ հիմքեր', 'Կրող պատեր', 'Երկարակյաց կառուցվածք'],
        },
        {
          id: 'assembly-project',
          title: 'Շինմոնտաժային, հողային և բետոնային աշխատանքներ',
          category: 'assembly',
          location: 'Սյունիքի մարզ',
          year: '2023-2024',
          image: INFRA_IMAGE,
          scope: 'Կոտլովանների փորում, բետոնային հենապատեր, հիմքերի լցնում, կտուրների մոնտաժ',
          description: 'Լեռնային ռելիեֆի պայմաններում բարդ երկաթբետոնե կոնստրուկցիաների և հուսալի տանիքածածկերի կառուցում:',
          features: ['Ծանր բետոնային աշխատանքներ', 'Հողային նախապատրաստում', 'Որակյալ տանիքներ'],
        },
      ],
    },
    about: {
      badge: 'ԸՆԿԵՐՈՒԹՅԱՆ ՄԱՍԻՆ',
      heading: '«ՎԻԼԱՇԻՆ» ՍՊԸ — հուսալի շինարար ողջ Հայաստանում',
      subheading: 'Հիմնադրված լինելով Կապան քաղաքում՝ ընկերությունն ապահովում է պատասխանատու և որակյալ շինարարություն:',
      p1: '«ՎԻԼԱՇԻՆ» ՍՊԸ-ն գրանցված է ՀՀ Սյունիքի մարզի Կապան քաղաքում (հասցե՝ Ռ. Մինասյան փող., 3/3 շենք, ՀՎՀՀ՝ 09428738): Ընկերության տնօրենն է Վիլեն Հակոբյանը:',
      p2: 'Մեր հիմնական մասնագիտացումն է շենքերի և շինությունների վերակառուցումն ու հիմնանորոգումը, ինչպես նաև անհատական ու հասարակական շենքերի կապիտալ շինարարությունը, նախագծումը, հողային, բետոնային և տանիքածածկման աշխատանքները:',
      directorQuote: '«Մեր նպատակն է Կապանում և ողջ Հայաստանում կառուցել և նորոգել այնպես, որ յուրաքանչյուր շենք ծառայի տասնամյակներ՝ ապահովելով ամրություն և անվտանգություն»:',
      directorQuoteAuthor: 'Վիլեն Հակոբյան',
      directorQuoteRole: '«ՎԻԼԱՇԻՆ» ՍՊԸ տնօրեն',
      directorPhotoAlt: 'Վիլեն Հակոբյան՝ «ՎԻԼԱՇԻՆ» ՍՊԸ տնօրեն, ք. Կապան',
      pillars: [
        {
          title: 'Ուղիղ պատասխանատվություն Կապանից',
          desc: 'Գործում ենք անմիջապես Կապանում՝ մշտապես հասանելի մեր պատվիրատուների համար:',
        },
        {
          title: 'Պետական գնումների մասնակից',
          desc: 'Ունենք տեղական ինքնակառավարման և պետական մրցույթներին մասնակցելու փորձ և իրավասություն:',
        },
        {
          title: 'Սեփականատիրոջ անձնական հսկողություն',
          desc: 'Տնօրեն Վիլեն Հակոբյանն անձամբ է հետևում յուրաքանչյուր օբյեկտի աշխատանքների ընթացքին:',
        },
      ],
    },
    faq: {
      badge: 'ՀԱՐՑ ԵՎ ՊԱՏԱՍԽԱՆ',
      heading: 'Կարևոր հարցեր «ՎԻԼԱՇԻՆ» ՍՊԸ-ի վերաբերյալ',
      items: [
        {
          question: 'Ո՞վ է «ՎԻԼԱՇԻՆ» ՍՊԸ-ի ղեկավարը:',
          answer: '«ՎԻԼԱՇԻՆ» ՍՊԸ-ի տնօրենն է Վիլեն Հակոբյանը: Ընկերությունը գրանցված է քաղաք Կապանում (Ռ. Մինասյան 3/3, ՀՎՀՀ՝ 09428738):',
        },
        {
          question: 'Ո՞րն է ընկերության հիմնական գործունեության պրոֆիլը:',
          answer: 'Հիմնական պրոֆիլն է շենքերի վերակառուցումն ու կապիտալ նորոգումը: Ինչպես նաև իրականացնում ենք ճարտարապետական նախագծում, կապիտալ շինարարություն զրոյից և շինմոնտաժային աշխատանքներ (հողային, բետոնային, տանիքներ):',
        },
        {
          question: 'Ինչպե՞ս է կազմվում աշխատանքների նախահաշիվը:',
          answer: 'Նախահաշիվը կազմվում է պատվիրատուի օբյեկտի տեղազննությունից և չափագրումից հետո՝ համաձայն ՀՀ շինարարական նորմերի: Մենք չունենք կամայական ֆիքսված գներ, քանի որ յուրաքանչյուր օբյեկտի ծավալներն ու պահանջները տարբեր են:',
        },
      ],
    },
    contact: {
      badge: 'ԿՈՆՏԱԿՏԱՅԻՆ ՏՎՅԱԼՆԵՐ',
      heading: 'Կապ հաստատեք մեզ հետ',
      subheading: 'Շինարարական և նորոգման հարցերով կարող եք զանգահարել անմիջապես տնօրինությանը կամ այցելել մեր գրասենյակ Կապանում:',
      executiveTitle: 'Ուղիղ կապ ղեկավարության հետ',
      directorName: 'Վիլեն Հակոբյան',
      directorRole: '«ՎԻԼԱՇԻՆ» ՍՊԸ տնօրեն',
      phone: '+374 93 997055',
      emails: {
        general: 'contact@vilashin.com',
        corporate: 'info@vilashin.com',
      },
      addressTitle: 'Գրասենյակ Կապանում',
      address: 'ք. Կապան, Ռ. Մինասյան փող., 3/3 շենք, 3304',
      addressSub: 'Սյունիքի մարզ, Հայաստանի Հանրապետություն',
      hoursTitle: 'Աշխատանքային ժամեր',
      hoursVal: 'Երկուշաբթի - Շաբաթ: 09:00 - 18:00',
      dispatchNoteTitle: 'Այցելություններ ողջ Հայաստանում:',
      dispatchNote: 'Մասնագետի այցելությունը տեղանքի զննման, չափագրման և ծավալների գնահատման համար իրականացվում է Կապանում և Հայաստանի բոլոր բնակավայրերում:',
      callButton: 'Զանգահարել տնօրենին (+374 93 997055)',
      whatsappButton: 'Գրել WhatsApp-ով',
      telegramButton: 'Գրել Telegram-ով',
      emailButton: 'Ուղարկել էլ. նամակ',
      trustBadge: 'Լիցենզավորված կապալառու · Ուղիղ կապ · Կապան · Ողջ Հայաստան',
      tinBadge: 'ՀՎՀՀ՝ 09428738',
    },
    footer: {
      tagline: '«ՎԻԼԱՇԻՆ» ՍՊԸ — Շինարարություն, շենքերի վերակառուցում և հիմնանորոգում Կապանում և ողջ Հայաստանում:',
      director: 'Տնօրեն՝ Վիլեն Հակոբյան',
      tin: 'ՀՎՀՀ՝ 09428738',
      rights: 'Բոլոր իրավունքները պաշտպանված են:',
      kapanSyunik: 'ք. Կապան, Սյունիքի մարզ, Հայաստան',
      languageSelection: 'Լեզվի ընտրություն',
      officialDomain: 'Պաշտոնական կայք՝ vilashin.com',
      creditPrefix: 'Կայքը ստեղծվել է ',
      creditSuffix: '-ի աջակցությամբ',
    },
  },
  ru: {
    companyName: 'ООО «ВИЛАШИН»',
    companyTagline: 'Строительство, реконструкция и капитальный ремонт зданий по всей Армении',
    seo: {
      title: 'ООО «ВИЛАШИН» — строительство и реконструкция | Капан, Армения',
      description: 'ООО «ВИЛАШИН» (Vilashin LLC) - Официальный лицензированный подрядчик из г. Капан, работаем по всей Армении. Директор: Вилен Акопян. Реконструкция, капремонт, строительство, проектирование. ИНН: 09428738.',
      keywords: 'ООО ВИЛАШИН, Vilashin LLC, строительство Капан, строительство Армения, реконструкция Сюник, Вилен Акопян, ИНН 09428738, капремонт Капан Армения',
    },
    nav: {
      services: 'Услуги',
      credentials: 'Реквизиты',
      workflow: 'Смета и цены',
      projects: 'Направления',
      about: 'О компании',
      contact: 'Контакты',
      callNow: 'Позвонить',
      emailUs: 'Эл. почта',
    },
    hero: {
      welcome: 'Добро пожаловать в VILASHIN',
      regionTag: 'ЛИЦЕНЗИРОВАННЫЙ ПОДРЯДЧИК · Г. КАПАН · ВСЯ АРМЕНИЯ',
      title: 'Строительные работы и реконструкция —',
      titleAccent: 'в Капане и по всей Армении',
      subtitle: 'ООО «ВИЛАШИН» (Vilashin LLC) — лицензированная строительная компания из Капана, работающая по всей Армении. Наш основной профиль — реконструкция и капитальный ремонт зданий, а также капитальное строительство с нуля, проектирование, земляные, бетонные и кровельные работы. Директор: Вилен Акопян. ИНН: 09428738.',
      directorBadge: 'Директор: Вилен Акопян',
      callDirect: '+374 93 997055',
      emailDirect: 'contact@vilashin.com',
      viewServices: 'Перейти к услугам',
      metrics: [
        { val: '09428738', label: 'ИНН / ՀՎՀՀ (Госреестр)', desc: 'Налоговый орган Сюникской области' },
        { val: 'Капан', label: 'Регистрация и фактическая база', desc: 'ул. Р. Минасяна, д. 3/3, 3304' },
        { val: 'Директор', label: 'Вилен Акопян', desc: 'Руководитель компании' },
        { val: 'Тендеры', label: 'Государственные закупки', desc: 'Проекты по всей Армении' },
      ],
    },
    credentials: {
      badge: 'ОФИЦИАЛЬНЫЙ ДАТА-ПАК КОМПАНИИ',
      heading: 'ООО «ВИЛАШИН» — Проверенные регистрационные данные',
      subheading: 'Точные сведения из Государственного реестра юридических лиц РА без вымысла.',
      directorLabel: 'Директор',
      directorValue: 'Вилен Акопян (Vilen Hakobyan)',
      directorDesc: 'Директор ООО «ВИЛАШИН»',
      tinLabel: 'ИНН (TIN / ՀՎՀՀ)',
      tinValue: '09428738',
      regAddressLabel: 'Юридический и фактический адрес',
      regAddressValue: 'Армения, Сюникская область, г. Капан, ул. Р. Минасяна, д. 3/3, 3304',
      legalTypeLabel: 'Организационно-правовая форма',
      legalTypeValue: 'Общество с ограниченной ответственностью (ООО / ՍՊԸ)',
      statusLabel: 'Статус подрядчика',
      statusValue: 'Лицензированный подрядчик, участник госзакупок и тендеров по всей Армении',
      phoneLabel: 'Официальный телефон',
      phoneValue: '+374 93 997055',
      emailsLabel: 'Официальная электронная почта',
      emailsValue: ['contact@vilashin.com', 'info@vilashin.com'],
      copyBtn: 'Копировать',
      copied: 'Скопировано',
      locationNote: 'Почтовый индекс: 3304 (г. Капан)',
      officialStatusBadge: 'Действующее юрлицо',
    },
    services: {
      badge: 'РЕАЛЬНЫЙ ПЕРЕЧЕНЬ УСЛУГ',
      heading: 'Строительные услуги ООО «ВИЛАШИН»',
      subheading: 'Компания выполняет исключительно четыре профессиональных направления в Капане и по всей Армении:',
      coreBadge: 'ОСНОВНОЙ ПРОФИЛЬ',
      regionBadge: 'Капан · Вся Армения',
      items: [
        {
          id: 'reconstruction',
          number: '01',
          title: 'Реконструкция и капитальный ремонт',
          isCoreSpecialization: true,
          shortDesc: 'Восстановление, укрепление и реставрация старых или поврежденных строений.',
          fullDesc: 'Основной профиль деятельности ООО «ВИЛАШИН». Мы осуществляем капитальный и частичный ремонт зданий, офисов, коммерческих и государственных объектов в Капане и по всей Армении, восстанавливая несущую способность конструкций и обновляя эксплуатационные характеристики.',
          deliverables: [
            'Восстановление и укрепление старых и поврежденных строений',
            'Капитальный ремонт государственных и муниципальных объектов',
            'Ремонт и модернизация коммерческих зданий и офисных помещений',
            'Восстановление фасадов, несущих стен и внутренних конструкций',
          ],
          scopeNote: 'Главная специализация и ключевой опыт компании.',
        },
        {
          id: 'capital-construction',
          number: '02',
          title: 'Капитальное строительство',
          isCoreSpecialization: false,
          shortDesc: 'Возведение жилых домов (частные дома, коттеджи) и нежилых зданий с нуля в Капане и по всей Армении.',
          fullDesc: 'Строительство жилых частных домов, загородных коттеджей, а также коммерческих и административных нежилых зданий с нуля в Капане и по всей Армении с соблюдением норм сейсмостойкости.',
          deliverables: [
            'Строительство частных жилых домов и индивидуальных коттеджей',
            'Возведение коммерческих и административных зданий',
            'Строительство с нуля в условиях сложного горного рельефа',
            'Контроль соответствия строительным стандартам на каждом этапе',
          ],
          scopeNote: 'Полный строительный цикл возведения зданий от нулевой отметки под ключ.',
        },
        {
          id: 'design',
          number: '03',
          title: 'Проектирование',
          isCoreSpecialization: false,
          shortDesc: 'Архитектурно-строительное проектирование индивидуальных домов, особняков, коммерческих и общественных зданий.',
          fullDesc: 'Разработка архитектурно-строительных проектов с учетом геологических особенностей грунтов, сейсмичности региона и персональных пожеланий заказчика.',
          deliverables: [
            'Архитектурно-строительные проекты индивидуальных жилых домов',
            'Проектирование частных особняков и коттеджей',
            'Проектные решения для коммерческих и общественных зданий',
            'Подготовка проектно-сметной документации для согласования',
          ],
          scopeNote: 'Профессиональные чертежи и расчеты, гарантирующие надежность постройки.',
        },
        {
          id: 'construction-assembly',
          number: '04',
          title: 'Строительно-монтажные работы',
          isCoreSpecialization: false,
          shortDesc: 'Земляные работы, бетонные работы (фундаменты, несущие стены) и кровельные работы.',
          fullDesc: 'Выполнение базовых строительно-монтажных процессов: подготовка строительных площадок, разработка котлованов, заливка фундаментов любой сложности, возведение несущих бетонных стен и монтаж надежных крыш.',
          deliverables: [
            'Земляные работы: подготовка стройплощадок, копка котлованов',
            'Бетонные работы: заливка монолитных фундаментов любой сложности',
            'Возведение несущих железобетонных стен и каркасов',
            'Кровельные работы: монтаж, утепление и капитальный ремонт крыш',
          ],
          scopeNote: 'Соблюдение технологий армирования, бетонирования и монтажа кровли.',
        },
      ],
    },
    workflow: {
      badge: 'СМЕТНЫЙ РЕГЛАМЕНТ',
      heading: 'Как формируется стоимость и смета проекта',
      subheading: 'У нас нет выдуманных «фиксированных цен за метр». Стоимость каждого объекта рассчитывается строго индивидуально на основе сметы.',
      pricingNoteTitle: 'Почему у нас нет фиксированного прайс-листа',
      pricingNoteDesc: 'В условиях горного ландшафта Армении каждый участок и объект уникален: перепады высот, тип скального или сыпучего грунта, степень износа старого здания при капремонте. Реальная стоимость определяется исключительно после выезда инженера на объект и составления дефектной ведомости.',
      consultationTitle: 'Требуется расчет сметы на объекте в Капане или в любом регионе Армении?',
      consultationDesc: 'Свяжитесь напрямую с руководителем компании Виленом Акопяном для назначения выезда инженера.',
      callAction: 'Позвонить руководителю (+374 93 997055)',
      steps: [
        {
          num: '01',
          title: 'Выезд инженера на объект по всей Армении',
          desc: 'Специалист выезжает на участок или строение для оценки фактического состояния и сбора исходных данных.',
          tag: 'Выезд по Армении',
        },
        {
          num: '02',
          title: 'Обмерные работы и дефектная ведомость',
          desc: 'Фиксация точных физических объемов необходимых земляных, демонтажных, бетонных или кровельных работ.',
          tag: 'Точные обмеры',
        },
        {
          num: '03',
          title: 'Составление локальной сметы по нормам РА',
          desc: 'Расчет сметы с прозрачной калькуляцией расхода материалов, механизмов и трудозатрат по реальным рыночным ценам.',
          tag: 'Строительные нормы РА',
        },
        {
          num: '04',
          title: 'Официальный договор подряда с графиком',
          desc: 'Заключение юридически обязывающего договора с фиксированными этапами, сметой и сроками сдачи.',
          tag: 'Юридический договор',
        },
      ],
    },
    projects: {
      badge: 'ПРАКТИЧЕСКИЙ ОПЫТ',
      heading: 'Направления реализованных работ',
      subheading: 'Примеры реальной строительной деятельности ООО «ВИЛАШИН» в Капане:',
      contractorLabel: 'Генеральный подрядчик: ООО «ВИЛАШИН» (Капан)',
      items: [
        {
          id: 'reconstruction-project',
          title: 'Реконструкция и капитальный ремонт зданий',
          category: 'reconstruction',
          location: 'г. Капан, Сюникская область',
          year: '2023-2025',
          image: ABOUT_IMAGE,
          scope: 'Усиление несущих стен, капитальный ремонт помещений, обновление кровель и фасадов',
          description: 'Основная специализация ООО «ВИЛАШИН». Восстановление прочности старых строений, капитальный ремонт государственных и коммерческих объектов.',
          features: ['Усиление конструкций', 'Капремонт под ключ', 'Сейсмоустойчивость'],
        },
        {
          id: 'capital-project',
          title: 'Капитальное строительство жилых и нежилых объектов',
          category: 'capital',
          location: 'Капан и прилегающие районы Сюника',
          year: '2022-2025',
          image: HERO_IMAGE,
          scope: 'Строительство частных домов, коттеджей и административных зданий с нуля',
          description: 'Полный строительный цикл: от рытья котлована и заливки фундамента до возведения стен и монтажа крыши.',
          features: ['Монолитные фундаменты', 'Несущие стены', 'Надежная кровля'],
        },
        {
          id: 'assembly-project',
          title: 'Земляные, бетонные и кровельные работы',
          category: 'assembly',
          location: 'Сюникская область',
          year: '2023-2024',
          image: INFRA_IMAGE,
          scope: 'Разработка котлованов, заливка фундаментов любой сложности, устройство перекрытий и крыш',
          description: 'Профессиональные строительно-монтажные работы с учетом специфики сложного горного ландшафта.',
          features: ['Сложные фундаменты', 'Разработка грунта', 'Монтаж крыш'],
        },
      ],
    },
    about: {
      badge: 'О КОМПАНИИ',
      heading: 'ООО «ВИЛАШИН» — строительный подрядчик по всей Армении',
      subheading: 'Надежный подрядчик с базой в Капане, работающий по всей Армении под личным управлением руководителя.',
      p1: 'ООО «ВИЛАШИН» (Vilashin LLC) зарегистрировано в городе Капан Сюникской области Республики Армения по адресу: ул. Р. Минасяна, д. 3/3 (ИНН: 09428738). Директор компании — Вилен Акопян (Vilen Hakobyan).',
      p2: 'Основной профиль компании — реконструкция и капитальный ремонт зданий. Также компания осуществляет архитектурно-строительное проектирование, капитальное строительство жилых домов и нежилых зданий с нуля, а также земляные, бетонные (фундаменты, стены) и кровельные работы в Капане и по всей Армении.',
      directorQuote: '«Мы строим и ремонтируем в родном Сюнике и по всей Армении добросовестно и качественно, отвечая за каждый забитый анкер и каждый кубометр уложенного бетона».',
      directorQuoteAuthor: 'Вилен Акопян',
      directorQuoteRole: 'Директор ООО «ВИЛАШИН»',
      directorPhotoAlt: 'Вилен Акопян — директор ООО «ВИЛАШИН», г. Капан',
      pillars: [
        {
          title: 'Прямая ответственность из Капана',
          desc: 'Мы находимся в Капане и оперативно решаем любые технические вопросы на месте.',
        },
        {
          title: 'Участие в государственных тендерах',
          desc: 'Официальный лицензированный статус позволяет участвовать в муниципальных и государственных закупках по всей Армении.',
        },
        {
          title: 'Личный контроль Вилена Акопяна',
          desc: 'Директор лично контролирует соблюдение сметы, технологий и сроков на каждом объекте.',
        },
      ],
    },
    faq: {
      badge: 'ВОПРОСЫ И ОТВЕТЫ',
      heading: 'Часто задаваемые вопросы о компании',
      items: [
        {
          question: 'Кто руководит компанией ООО «ВИЛАШИН»?',
          answer: 'Директор ООО «ВИЛАШИН» — Вилен Акопян (Vilen Hakobyan). Компания зарегистрирована в г. Капан, ул. Р. Минасяна, д. 3/3, ИНН: 09428738.',
        },
        {
          question: 'Какой основной профиль деятельности вашей компании?',
          answer: 'Основной профиль — реконструкция и капитальный ремонт зданий и сооружений (укрепление, реставрация старых строений, капремонт коммерческих, муниципальных и жилых объектов). Кроме того, мы выполняем проектирование, капитальное строительство с нуля, земляные, бетонные (фундаменты, несущие стены) и кровельные работы.',
        },
        {
          question: 'Есть ли у вас готовый прайс-лист или калькулятор с ценами?',
          answer: 'Нет, потому что в строительстве и капремонте в горной Армении фиксированных цен не бывает. Каждый объект требует выезда инженера, дефектной ведомости и точного сметного расчета по нормативам РА. Это защищает заказчика от непредвиденных переплат.',
        },
      ],
    },
    contact: {
      badge: 'СВЯЗЬ С РУКОВОДСТВОМ',
      heading: 'Контакты ООО «ВИЛАШИН»',
      subheading: 'Для обсуждения вопросов строительства, реконструкции или тендеров свяжитесь напрямую с руководством компании:',
      executiveTitle: 'Прямая связь с руководством',
      directorName: 'Вилен Акопян (Vilen Hakobyan)',
      directorRole: 'Директор ООО «ВИЛАШИН»',
      phone: '+374 93 997055',
      emails: {
        general: 'contact@vilashin.com',
        corporate: 'info@vilashin.com',
      },
      addressTitle: 'Офис в Капане',
      address: 'Армения, Сюникская область, г. Капан, ул. Р. Минасяна, д. 3/3, 3304',
      addressSub: 'Сюникская область, Республика Армения',
      hoursTitle: 'Режим работы',
      hoursVal: 'Понедельник – Суббота: 09:00 – 18:00',
      dispatchNoteTitle: 'Выезд на объект по всей Армении:',
      dispatchNote: 'Инженерный выезд для обмеров и оценки объемов работ осуществляется в г. Капан и любые населенные пункты Армении по предварительной договоренности.',
      callButton: 'Позвонить руководителю (+374 93 997055)',
      whatsappButton: 'Написать в WhatsApp',
      telegramButton: 'Написать в Telegram',
      emailButton: 'Написать на эл. почту',
      trustBadge: 'Лицензированный подрядчик · Без посредников · Капан',
      tinBadge: 'ИНН: 09428738',
    },
    footer: {
      tagline: 'ООО «ВИЛАШИН» — Строительство, реконструкция и капитальный ремонт зданий в Капане и по всей Армении.',
      director: 'Директор: Вилен Акопян',
      tin: 'ИНН: 09428738',
      rights: 'Все права защищены.',
      kapanSyunik: 'г. Капан, Сюникская область, Армения',
      languageSelection: 'Выбор языка',
      officialDomain: 'Официальный домен: vilashin.com',
      creditPrefix: 'Сайт создан при поддержке ',
      creditSuffix: '',
    },
  },
};
