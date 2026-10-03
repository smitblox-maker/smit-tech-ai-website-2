import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('smittech21@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#080b19] border-t border-white/5">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Prefer to Talk Directly?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            You can contact us directly through email or Instagram.
          </p>
        </div>

        {/* 2 Contact Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <div className="rounded-2xl glass-card border border-white/10 p-7 sm:p-8 flex flex-col justify-between glass-card-hover group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider">
                  Direct Email
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  smittech21@gmail.com
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Send us your detailed brief, design mockups, or project inquiries anytime.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <a
                href="mailto:smittech21@gmail.com?subject=Website%20Inquiry%20-%20SMIT%20TECH%20AI"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
              >
                <span>Email Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="rounded-2xl glass-card border border-white/10 p-7 sm:p-8 flex flex-col justify-between glass-card-hover group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/20">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active
                </span>
              </div>

              <div>
                <span className="text-xs font-mono font-semibold text-pink-300 uppercase tracking-wider">
                  Official Instagram
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  @smit_tech_ai
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  DM us directly to discuss quick ideas, timelines, and website styling.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <a
                href="https://www.instagram.com/smit_tech_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:opacity-95 shadow-md shadow-pink-600/20 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>DM on Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
