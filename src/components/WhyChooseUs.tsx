import React from 'react';
import { Palette, Smartphone, Zap, Sliders, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Every website is designed with a modern and professional interface.',
      details: 'Crafted with premium typography, intentional whitespace, and sophisticated dark aesthetic that commands authority.',
      metric: 'Bespoke UI',
      accent: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Websites work smoothly across phones, tablets and computers.',
      details: 'Tested across diverse viewport sizes, touch targets, and mobile browsers so your visitors have a flawless experience.',
      metric: '100% Fluid',
      accent: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    },
    {
      icon: Zap,
      title: 'Fast & Smooth',
      description: 'Focus on performance, clean UI and smooth interactions.',
      details: 'Optimized asset delivery, zero bloated dependencies, and sub-second load times keeping bounce rates minimal.',
      metric: '< 1s Speed',
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    },
    {
      icon: Sliders,
      title: 'Custom Built',
      description: "Every project is created according to the client's requirements.",
      details: 'No one-size-fits-all generic themes. We engineer the exact layout, copy flow, and functionality your business needs.',
      metric: 'Tailored Fit',
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#080b19] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            The Agency Standard
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Why Choose SMIT TECH AI?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We merge clean modern aesthetics with engineering discipline so your digital presence looks stunning and performs effortlessly.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between glass-card-hover group border border-white/10 hover:border-indigo-500/40"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon and Quantitative Metric */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${pillar.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {pillar.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-200">
                      {pillar.description}
                    </p>
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                      {pillar.details}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified production quality</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
