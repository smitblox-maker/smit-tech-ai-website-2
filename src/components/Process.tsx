import React from 'react';
import { FileEdit, MessageSquareText, CodeXml, Rocket, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onStartProject: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us Your Idea',
      description: 'Fill out the project form.',
      extended: 'Share your business goals, target audience, preferred style, and budget so we can understand your vision.',
      icon: FileEdit,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      step: '02',
      title: 'Discuss Your Requirements',
      description: 'We understand your business, design preferences and requirements.',
      extended: 'We align on typography, color palette, feature list, and delivery timelines via email or Instagram.',
      icon: MessageSquareText,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      step: '03',
      title: 'We Build',
      description: 'We design and develop the website.',
      extended: 'We engineer responsive components, test cross-browser rendering, and build sleek interactive animations.',
      icon: CodeXml,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Your website is completed and ready to use.',
      extended: 'We deliver clean, production-ready code with deployment assistance and SEO setup ready for your customers.',
      icon: Rocket,
      gradient: 'from-pink-500 to-emerald-500',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#06080F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            Streamlined Execution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From your initial concept to a live modern website in four transparent steps.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block relative mb-16">
          {/* Connecting gradient line */}
          <div className="absolute top-12 left-16 right-16 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-40 z-0" />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-start group">
                  {/* Step Node Marker */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0c1024] border border-white/15 flex items-center justify-center text-white font-mono font-bold text-sm shadow-xl group-hover:border-indigo-400 transition-colors">
                      {item.step}
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 rounded-2xl glass-card w-full h-full border border-white/10 group-hover:border-indigo-500/30 transition-all">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-300/90 mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.extended}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Timeline (Vertical) */}
        <div className="lg:hidden relative space-y-8 pl-6 sm:pl-8 before:content-[''] before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-emerald-500 before:opacity-30">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-[#0c1024] border-2 border-indigo-400 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                  {item.step.replace('0', '')}
                </div>

                <div className="p-5 rounded-2xl glass-card border border-white/10">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-indigo-300 font-semibold">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo-200 mb-1.5">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.extended}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white group px-4 py-2 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
          >
            <span>Ready to start step 01? Submit your requirements</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
