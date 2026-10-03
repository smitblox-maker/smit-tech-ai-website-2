import React from 'react';
import { X, Check, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { ProjectConcept } from '../types';

interface ProjectModalProps {
  concept: ProjectConcept | null;
  onClose: () => void;
  onBuildSimilar: (category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  concept,
  onClose,
  onBuildSimilar,
}) => {
  if (!concept) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c1024] border border-white/15 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close concept details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Concept Badge & Category */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300">
            {concept.statusLabel}
          </span>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs font-medium text-indigo-300">
            {concept.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2 font-display">
          {concept.title}
        </h3>
        <p className="text-sm text-slate-300 mb-6">
          {concept.description}
        </p>

        {/* Preview Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 bg-slate-900">
          <img
            src={concept.image}
            alt={concept.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Key Design & Architectural Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {concept.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-slate-200 bg-white/[0.03] p-2.5 rounded-lg border border-white/5"
              >
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            Target Technology Stack
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {concept.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onClose();
              onBuildSimilar(concept.category);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer"
          >
            <span>Build a Similar Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
