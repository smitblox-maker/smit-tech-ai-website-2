import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { InquiryForm } from './components/InquiryForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WebsiteType } from './types';

export default function App() {
  const [selectedWebsiteType, setSelectedWebsiteType] = useState<WebsiteType | ''>('');

  const scrollToInquiry = (websiteType?: WebsiteType) => {
    if (websiteType) {
      setSelectedWebsiteType(websiteType);
    }
    const inquiryElement = document.getElementById('inquiry');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050711] text-slate-100 selection:bg-indigo-600/30 selection:text-indigo-200">
      {/* Fixed Navigation */}
      <Navbar onStartProject={() => scrollToInquiry()} />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero onStartProject={() => scrollToInquiry()} />

        {/* Services Section */}
        <Services onSelectService={(service) => scrollToInquiry(service)} />

        {/* Why Choose SMIT TECH AI */}
        <WhyChooseUs />

        {/* How It Works - 4-step process */}
        <Process onStartProject={() => scrollToInquiry()} />

        {/* Projects / Work Concept Section */}
        <Projects onStartProject={(type) => scrollToInquiry(type)} />

        {/* Main Client Inquiry Form */}
        <InquiryForm initialWebsiteType={selectedWebsiteType} />

        {/* Direct Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
