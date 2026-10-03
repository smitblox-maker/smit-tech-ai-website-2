import React from 'react';
import { ArrowUpRight, Instagram, Sparkles, Code2, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import heroVisual from '../assets/images/hero_web_dev_concept_1790961276399.jpg';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[350px] bg-purple-600/12 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 -left-20 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Trust Pill / Lead Kicker - Zero pill clean text with subtle dot */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-xs sm:text-sm font-medium text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>Modern Web Design & Engineering Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              WE BUILD WEBSITES THAT MAKE YOUR BUSINESS{' '}
              <span className="glow-brand-text">STAND OUT.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Modern, fast and professional websites designed around your brand, your goals and your customers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.instagram.com/smit_tech_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl hover:border-pink-500/40 hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>DM on Instagram</span>
              </a>
            </div>

            {/* Trust-Style Text with Clean Typographic Separators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="hover:text-slate-200 transition-colors">Web Design</span>
              <span aria-hidden="true" className="text-indigo-400/80">•</span>
              <span className="hover:text-slate-200 transition-colors">Development</span>
              <span aria-hidden="true" className="text-indigo-400/80">•</span>
              <span className="hover:text-slate-200 transition-colors">Responsive</span>
              <span aria-hidden="true" className="text-indigo-400/80">•</span>
              <span className="hover:text-slate-200 transition-colors">Modern</span>
            </div>
          </div>

          {/* Right Column: Premium Animated Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient border ring */}
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent shadow-2xl shadow-indigo-950/50">
                <div className="relative rounded-2xl overflow-hidden bg-[#0c1024]/90 border border-white/10 backdrop-blur-xl group">
                  {/* Browser-style mock header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-0.5 rounded-md border border-white/5 truncate max-w-[200px]">
                      smittechai.com/live-build
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ready
                    </div>
                  </div>

                  {/* High fidelity generated showcase visual */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={heroVisual}
                      alt="SMIT TECH AI Futuristic Web Development Workspace Showcase"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Overlaid floating metrics & micro-cards */}
                  <div className="p-4 sm:p-5 space-y-3 bg-[#0a0e22]/95 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Mobile Ready</div>
                          <div className="text-sm font-bold text-white">100% Fluid</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Load Speed</div>
                          <div className="text-sm font-bold text-white">&lt;0.8s Ultra</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-300 pt-1 px-1">
                      <div className="flex items-center gap-1.5 text-indigo-300">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Clean Semantic Architecture</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>SEO Tuned</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
