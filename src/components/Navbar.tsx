import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, GraduationCap, ChevronRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenEnquiry: (grade?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Campus', href: '#campus' },
    { label: 'Admissions & Fees', href: '#admissions' },
    { label: 'Transport', href: '#transport' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/90 shadow-xs transition-colors">
      {/* Top Notification Strip */}
      <div className="bg-[#1a365d] text-white text-xs py-2 px-4 border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-slate-200 text-xs">
            <span className="font-medium text-amber-300">Admissions Open 2026-27</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="hidden md:inline">MP Board English Medium (Nursery to 12th)</span>
            <span aria-hidden="true" className="hidden md:inline text-slate-400">·</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Damoh Road, Jabalpur
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${SCHOOL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SCHOOL_INFO.phonePrimary}</span>
            </a>
            <span aria-hidden="true" className="text-slate-500">|</span>
            <button
              onClick={() => onOpenEnquiry()}
              className="text-white hover:text-amber-300 transition-colors font-medium cursor-pointer"
            >
              Help Desk
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Following Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (1 Primary CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single Brand Wordmark element */}
          <a href="#" className="flex items-center gap-3 text-slate-900 group">
            <div className="w-10 h-10 rounded-lg bg-[#1a365d] text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#152c4d] transition-colors">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#1a365d] whitespace-nowrap leading-none font-display">
                S.S. Convent School
              </span>
              <span className="text-[11px] text-slate-500 tracking-wider uppercase font-medium mt-1">
                Higher Secondary · Jabalpur
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#1a365d] hover:underline underline-offset-4 decoration-amber-500 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1a365d] hover:bg-[#122644] active:bg-[#0c1a2f] rounded-md transition-all shadow-xs hover:shadow-sm whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>Admission Enquiry</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50 hover:text-[#1a365d]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#1a365d] hover:bg-[#152c4d] rounded-md shadow-xs"
            >
              Enquire for School Admission
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="w-full py-2 px-4 text-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call School Desk: {SCHOOL_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
