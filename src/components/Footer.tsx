import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { GraduationCap, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (grade?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#1a365d] text-slate-300 text-xs border-t border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400 text-[#1a365d] flex items-center justify-center font-bold text-lg shadow-xs">
                <GraduationCap className="w-6 h-6 text-[#1a365d]" />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight block font-display">
                  S.S. Convent Higher Secondary School
                </span>
                <span className="text-[11px] text-amber-300 uppercase tracking-wider">
                  Jabalpur, Madhya Pradesh
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Premier MP Board English medium school delivering quality academics, disciplined character, and moral values from Nursery to 12th Grade. Located on Damoh Road near Deendayal Chowk & Karmeta.
            </p>

            <div className="text-[11px] text-slate-400 space-y-1 pt-1">
              <div><strong>Affiliation:</strong> Madhya Pradesh Board of Secondary Education (MP Board)</div>
              <div><strong>Curriculum:</strong> English Medium (Co-Educational)</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-xs font-display">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">About Our School</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">Academic Programs</a>
              </li>
              <li>
                <a href="#campus" className="hover:text-amber-300 transition-colors">Campus & Labs</a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">Admissions & Fees</a>
              </li>
              <li>
                <a href="#transport" className="hover:text-amber-300 transition-colors">Bus Routes</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Academic Wings */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-xs font-display">
              Academic Wings
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenEnquiry('Pre-Primary (Nursery, KG)')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Nursery & Kindergarten Wing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry('Primary (Class 1-5)')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Primary Wing (Classes 1st to 5th)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry('Middle School (Class 6-8)')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Middle School (Classes 6th to 8th)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry('Science Stream (PCM/PCB)')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Higher Secondary - Science (PCM / PCB)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry('Commerce Stream')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Higher Secondary - Commerce Stream
                </button>
              </li>
            </ul>
          </div>

          {/* Campus Desk Contact */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-xs font-display">
              Campus Desk
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Damoh Road, Near Deendayal Chowk & Karmeta, Jabalpur, MP 482002</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {SCHOOL_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full py-2 px-3 bg-amber-400 hover:bg-amber-300 text-[#1a365d] text-xs font-bold rounded-md transition-colors cursor-pointer text-center"
              >
                Apply for Admission 2026-27
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="mt-12 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; 2026 S.S. Convent Higher Secondary School Jabalpur. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>MP Board Affiliation (English Medium)</span>
            <span aria-hidden="true">·</span>
            <span>Damoh Road · Jabalpur (M.P.)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
