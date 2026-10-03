import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { ProjectConcept, WebsiteType } from '../types';
import { ProjectModal } from './ProjectModal';

import salonImg from '../assets/images/project_salon_preview_1790961295764.jpg';
import businessImg from '../assets/images/project_business_preview_1790961308362.jpg';
import techImg from '../assets/images/project_tech_preview_1790961320821.jpg';
import heroImg from '../assets/images/hero_web_dev_concept_1790961276399.jpg';

interface ProjectsProps {
  onStartProject: (websiteType?: WebsiteType) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onStartProject }) => {
  const [selectedConcept, setSelectedConcept] = useState<ProjectConcept | null>(null);

  const concepts: ProjectConcept[] = [
    {
      id: 'salon',
      title: 'Aura Luxe Salon & Spa',
      subtitle: 'Luxury Wellness & Beauty Aesthetic',
      category: 'Salon Website',
      tagline: 'Refined appointment lead capture & visual service catalog',
      image: salonImg,
      description:
        'A bespoke luxury digital presence designed for high-end salons and day spas. Features high-contrast noir and champagne aesthetics, tiered treatments showcase, staff profiles, and seamless WhatsApp & appointment booking integration.',
      highlights: [
        'Curated treatment pricing breakdown',
        'Direct Instagram story aesthetic integration',
        'Frictionless booking inquiry flow',
        'Mobile-first touch optimized experience',
      ],
      features: ['Service Menu', 'Pricing Table', 'Stylist Gallery', 'Direct Inquiries'],
      techStack: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      statusLabel: 'Concept / Sample',
    },
    {
      id: 'business',
      title: 'Novus Corporate & Logistics',
      subtitle: 'Enterprise Service Agency Architecture',
      category: 'Business Websites',
      tagline: 'B2B inbound lead funnel & verified capability proof',
      image: businessImg,
      description:
        'Engineered for corporate firms, industrial operations, and business consultancies. Focuses on authority-building layout, capability matrices, trust metrics, and inquiry forms with instant email routing.',
      highlights: [
        'Corporate brand trust architecture',
        'Enterprise case study proof cards',
        'Interactive capability matrices',
        'Fast lead capture and routing',
      ],
      features: ['Enterprise Services', 'Trust Benchmarks', 'Case Studies', 'Lead Generation'],
      techStack: ['React', 'Tailwind CSS', 'TypeScript', 'SEO Schema'],
      statusLabel: 'Concept / Sample',
    },
    {
      id: 'tech',
      title: 'Synthetix AI Cloud Platform',
      subtitle: 'Next-Generation Technology & SaaS Interface',
      category: 'Custom Websites',
      tagline: 'High-tech interactive landing page with developer appeal',
      image: techImg,
      description:
        'Futuristic dark mode showcase designed for AI startups, SaaS products, and tech companies. Features subtle neon gradients, interactive code cards, feature tabs, and interactive product demo cards.',
      highlights: [
        'Cybernetic gradient visual accents',
        'Feature tabs and interactive previews',
        'Developer-first technical aesthetic',
        'Ultra-fast sub-second render performance',
      ],
      features: ['Tech Architecture', 'Feature Tour', 'Pricing Tiers', 'API Documentation'],
      techStack: ['React', 'Tailwind CSS', 'Motion FX', 'TypeScript'],
      statusLabel: 'Concept / Sample',
    },
    {
      id: 'portfolio',
      title: 'Mehta Architectural Studio',
      subtitle: 'Minimalist Portfolio & Creative Director Showcase',
      category: 'Portfolio Websites',
      tagline: 'Editorial project showcase with high typographic balance',
      image: heroImg,
      description:
        'An editorial, minimalist digital showcase designed for creative professionals, architects, interior designers, and visual artists. Minimal distraction, large photography frames, and client inquiry triggers.',
      highlights: [
        'High-contrast editorial typography',
        'Uncluttered project galleries',
        'Press mentions & exhibit timeline',
        'Commission inquiry workflow',
      ],
      features: ['Visual Gallery', 'Project Case Studies', 'Awards & Press', 'Direct Inquiries'],
      techStack: ['React', 'Tailwind CSS', 'Accessible Grid', 'Responsive Media'],
      statusLabel: 'Concept / Sample',
    },
  ];

  const mapCategoryToType = (cat: string): WebsiteType => {
    if (cat.includes('Salon')) return 'Salon Website';
    if (cat.includes('Business')) return 'Business Website';
    if (cat.includes('Portfolio')) return 'Portfolio';
    if (cat.includes('Tech') || cat.includes('Custom')) return 'Custom Website';
    return 'Custom Website';
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#080b19] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            Design & Concept Explorations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Let's Build Something Great
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explore sample design concepts showcasing our design philosophy, responsive precision, and tailored layouts.
          </p>
        </div>

        {/* 4 Project Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="group relative rounded-2xl glass-card overflow-hidden border border-white/10 hover:border-indigo-500/40 glass-card-hover flex flex-col justify-between"
            >
              {/* Image Preview with Concept Label Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={concept.image}
                  alt={`${concept.title} - ${concept.statusLabel}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-black/20 to-transparent opacity-90" />

                {/* Mandatory Concept / Sample Label */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-amber-500/40 text-[11px] font-mono font-semibold text-amber-300 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    {concept.statusLabel}
                  </span>
                </div>

                {/* Category kicker bottom left */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    {concept.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                    {concept.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {concept.description}
                  </p>

                  {/* Highlights Bullet / List */}
                  <div className="space-y-1.5 mb-6">
                    {concept.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedConcept(concept)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-indigo-400" />
                    <span>View Concept</span>
                  </button>

                  <button
                    onClick={() => onStartProject(mapCategoryToType(concept.category))}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600/80 hover:bg-indigo-600 px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Request Similar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-[#0c1024] border border-indigo-500/20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Have a project in mind? Let's build it.
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Tell us your requirements and get a modern, responsive website tailored to your brand goals.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onStartProject()}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Your Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Breakdown Modal */}
      <ProjectModal
        concept={selectedConcept}
        onClose={() => setSelectedConcept(null)}
        onBuildSimilar={(category) => {
          onStartProject(mapCategoryToType(category));
        }}
      />
    </section>
  );
};
