import React from 'react';
import {
  Briefcase,
  UserCheck,
  Sparkles,
  ShoppingBag,
  Cpu,
  Flame,
  ArrowRight
} from 'lucide-react';
import { WebsiteType } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: WebsiteType) => void;
}

interface ServiceItem {
  type: WebsiteType;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  gradient: string;
  iconBg: string;
  iconColor: string;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services: ServiceItem[] = [
    {
      type: 'Business Website',
      title: 'Business Websites',
      description: 'Professional websites for businesses and local brands designed to establish credibility and capture inbound client leads.',
      icon: Briefcase,
      tags: ['Corporate Presence', 'Lead Capture', 'Local SEO'],
      gradient: 'from-blue-600/20 to-indigo-600/5',
      iconBg: 'bg-blue-500/15',
      iconColor: 'text-blue-400',
    },
    {
      type: 'Portfolio',
      title: 'Portfolio Websites',
      description: 'Modern personal and professional portfolios tailored for creators, architects, photographers, developers, and consultants.',
      icon: UserCheck,
      tags: ['Creative Showcase', 'Interactive Case Studies', 'Curriculum Vitae'],
      gradient: 'from-purple-600/20 to-pink-600/5',
      iconBg: 'bg-purple-500/15',
      iconColor: 'text-purple-400',
    },
    {
      type: 'Salon Website',
      title: 'Salon & Beauty Websites',
      description: 'Elegant websites for salons, spas and beauty businesses with service menus, pricing guides, and direct appointment inquiry flows.',
      icon: Sparkles,
      tags: ['Luxury Aesthetics', 'Service Menu', 'Booking Inquiries'],
      gradient: 'from-rose-600/20 to-amber-600/5',
      iconBg: 'bg-rose-500/15',
      iconColor: 'text-rose-400',
    },
    {
      type: 'E-commerce',
      title: 'E-commerce Websites',
      description: 'Modern online stores designed for products and businesses with high-converting layouts, product showcases, and fast checkouts.',
      icon: ShoppingBag,
      tags: ['Catalog Showcase', 'Conversion Optimization', 'Fast Checkout'],
      gradient: 'from-emerald-600/20 to-teal-600/5',
      iconBg: 'bg-emerald-500/15',
      iconColor: 'text-emerald-400',
    },
    {
      type: 'Custom Website',
      title: 'Custom Websites',
      description: "Custom-designed websites based on the client's requirements, custom features, animations, and bespoke web architecture.",
      icon: Cpu,
      tags: ['Bespoke Engineering', 'Custom Logic', 'Scalable Architecture'],
      gradient: 'from-cyan-600/20 to-blue-600/5',
      iconBg: 'bg-cyan-500/15',
      iconColor: 'text-cyan-400',
    },
    {
      type: 'Landing Page',
      title: 'Landing Pages',
      description: 'High-converting landing pages for products, services and campaigns engineered with laser focus on engagement and leads.',
      icon: Flame,
      tags: ['Single Goal Focus', 'Campaign Driven', 'High Conversion Rate'],
      gradient: 'from-amber-600/20 to-orange-600/5',
      iconBg: 'bg-amber-500/15',
      iconColor: 'text-amber-400',
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#06080F]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            Our Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tailor-made web development built for businesses, personal brands, and high-growth ventures.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between glass-card-hover overflow-hidden"
              >
                {/* Subtle gradient hover wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 space-y-4">
                  {/* Icon & Category Indicator */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${service.iconBg} ${service.iconColor} border border-white/5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-300">
                      Tailored Build
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Zero-Pill Clean Metadata Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-300">
                    {service.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < service.tags.length - 1 && (
                          <span aria-hidden="true" className="text-slate-400">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => onSelectService(service.type)}
                    className="w-full flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <span>Request this website</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-indigo-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
