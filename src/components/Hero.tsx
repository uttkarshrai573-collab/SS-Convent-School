import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, MapPin, Award, CheckCircle2, PhoneCall } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreAcademics: () => void;
  onViewFeeStructure: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onExploreAcademics,
  onViewFeeStructure,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#1a365d] to-[#142844] text-white">
      {/* Decorative backdrop glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata with typographic separators (anti-slop rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-300 tracking-wide uppercase">
              <span>MP Board Affiliated</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>English Medium</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Nursery to 12th Grade</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Damoh Road Jabalpur</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display text-balance">
              S.S. Convent Higher Secondary School Jabalpur
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              A premier MP Board English medium school delivering quality academics, disciplined character, and moral values from Nursery to 12th Grade. Located on Damoh Road with safe, direct connectivity to Deendayal Chowk, Karmeta, and Damoh Naka.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Science (PCM/PCB) & Commerce Streams</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Board Exam Pass & Distinction Track</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Modern Science, IT Labs & Smart Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Affordable School Fees with Installments</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 text-sm font-bold text-[#1a365d] bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-2.5"
              >
                <span>Enquire for School Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewFeeStructure}
                className="px-5 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/25 rounded-md backdrop-blur-xs transition-all whitespace-nowrap cursor-pointer"
              >
                View Fees & Installments
              </button>

              <a
                href={`tel:${SCHOOL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors py-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call Desk: {SCHOOL_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Campus Focal Carrier (High-Fidelity Photo Asset) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-slate-800">
              <img
                src="/src/assets/images/school_campus_exterior_1793095261408.jpg"
                alt="S.S. Convent Higher Secondary School Jabalpur campus front facade on Damoh Road"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              {/* Subtle dark gradient scrim at base for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center justify-between text-xs text-amber-300 mb-1 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Damoh Road, Jabalpur
                  </span>
                  <span>Est. 1998</span>
                </div>
                <h3 className="text-base font-semibold text-white">
                  Spacious Green Campus with Modern Amenities
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Near Deendayal Chowk & Karmeta Junction · Jabalpur, MP
                </p>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-white text-slate-900 rounded-lg p-3.5 shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">MP Board Affiliated</div>
                <div className="text-slate-500">English Medium Curriculum</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Key Institutional Proof & Metric Strip placed cleanly below the hero split */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-amber-400 tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-300 font-medium">MP Board Exam Results</div>
            <div className="text-[11px] text-slate-400">Class 10 & 12 Board Excellence</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-amber-400 tabular-nums">
              Nursery - 12th
            </div>
            <div className="text-xs text-slate-300 font-medium">Complete Schooling</div>
            <div className="text-[11px] text-slate-400">Science & Commerce Streams</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-amber-400 tabular-nums">
              1:25
            </div>
            <div className="text-xs text-slate-300 font-medium">Teacher-Student Ratio</div>
            <div className="text-[11px] text-slate-400">Personalized Academic Care</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-amber-400 tabular-nums">
              14+ Routes
            </div>
            <div className="text-xs text-slate-300 font-medium">Jabalpur Bus Network</div>
            <div className="text-[11px] text-slate-400">Safe GPS Tracked School Fleet</div>
          </div>
        </div>
      </div>
    </section>
  );
};
