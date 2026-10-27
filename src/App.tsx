/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { CampusShowcase } from './components/CampusShowcase';
import { AdmissionsAndFees } from './components/AdmissionsAndFees';
import { TransportAndBusRoutes } from './components/TransportAndBusRoutes';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionEnquiryModal } from './components/AdmissionEnquiryModal';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from './data/schoolData';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (grade?: string) => {
    setSelectedGrade(grade);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGrade(undefined);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappDirectUrl = `https://wa.me/919425158240?text=${encodeURIComponent(
    'Hello, I would like to enquire about admission at S.S. Convent Higher Secondary School Jabalpur.'
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Primary Sticky Top Bar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiry()}
          onExploreAcademics={() => scrollToSection('academics')}
          onViewFeeStructure={() => scrollToSection('admissions')}
        />

        {/* About Section - MP Board English Medium & Jabalpur Hubs */}
        <AboutSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Academic Programs - Nursery to 12th (Science & Commerce) */}
        <AcademicsSection onOpenEnquiry={(grade) => handleOpenEnquiry(grade)} />

        {/* Campus & Infrastructure Showcase */}
        <CampusShowcase />

        {/* Admissions & School Fees Structure & Estimator */}
        <AdmissionsAndFees onOpenEnquiry={(grade) => handleOpenEnquiry(grade)} />

        {/* Safe Bus Transport Network */}
        <TransportAndBusRoutes />

        {/* Parent & Community Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact & Campus Details */}
        <ContactSection onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={(grade) => handleOpenEnquiry(grade)} />

      {/* Admission Enquiry Modal */}
      <AdmissionEnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        preselectedGrade={selectedGrade}
      />

      {/* Floating Fast Action Connectors (Unobtrusive) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          title="Chat with School Admissions on WhatsApp"
          aria-label="WhatsApp School Desk"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <button
          onClick={() => handleOpenEnquiry()}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#1a365d] hover:bg-[#122644] text-white text-xs font-bold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-amber-400/40"
        >
          <span>Admissions Open 2026-27</span>
        </button>
      </div>
    </div>
  );
}
