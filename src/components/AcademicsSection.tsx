import React, { useState } from 'react';
import { ACADEMIC_WINGS, AcademicWing } from '../data/schoolData';
import { BookOpen, Sparkles, CheckCircle2, Clock, Award, ArrowRight } from 'lucide-react';

interface AcademicsSectionProps {
  onOpenEnquiry: (grade?: string) => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenEnquiry }) => {
  const [activeWingId, setActiveWingId] = useState<string>('higher-secondary');

  const selectedWing = ACADEMIC_WINGS.find((w) => w.id === activeWingId) || ACADEMIC_WINGS[0];

  return (
    <section id="academics" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Curriculum & Pedagogy
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] font-display tracking-tight text-balance">
            Academic Programs & Wings
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 mb-4"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Our comprehensive English medium academic structure follows the recognized standards of the{' '}
            <strong className="text-slate-900">MP Board (Madhya Pradesh Board of Secondary Education)</strong>, fostering intellectual curiosity, language fluency, and career readiness from Nursery through 12th Grade.
          </p>
        </div>

        {/* 4 Interactive Wing Selector Tabs (Functional filter controls allowed per design constitution) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-xl mb-8">
          {ACADEMIC_WINGS.map((wing) => {
            const isActive = wing.id === activeWingId;
            return (
              <button
                key={wing.id}
                onClick={() => setActiveWingId(wing.id)}
                className={`px-3 py-3 rounded-lg text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#1a365d] shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-medium'
                }`}
              >
                <div className="text-xs sm:text-sm">{wing.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{wing.grades}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Wing Detail Panel */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Wing Overview */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-amber-800 font-medium">
                <span className="font-semibold text-[#1a365d]">{selectedWing.name}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedWing.grades}</span>
                <span aria-hidden="true">·</span>
                <span>MP Board English Medium</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                {selectedWing.tagline}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedWing.description}
              </p>

              {/* Key Features */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Pedagogical Highlights & Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedWing.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timing & Assessment Info */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span><strong>Wing Timings:</strong> {selectedWing.timings}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-slate-500 shrink-0" />
                  <span><strong>Assessment:</strong> {selectedWing.assessmentStyle}</span>
                </div>
              </div>
            </div>

            {/* Wing Subjects & Admission Card */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="text-sm font-bold text-[#1a365d]">
                  Curriculum & Subjects
                </h4>
                <span className="text-xs text-slate-500">{selectedWing.grades}</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {selectedWing.subjects.map((sub, idx) => (
                  <li key={idx} className="flex items-start gap-2 py-1 border-b border-slate-50 last:border-none">
                    <span className="text-amber-600 font-bold">›</span>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>

              {selectedWing.id === 'higher-secondary' && (
                <div className="p-3 bg-blue-50/70 rounded-lg text-xs text-blue-900 border border-blue-100">
                  <p className="font-semibold mb-1">Higher Secondary Board Preparation:</p>
                  <p>
                    Specialized mentorship for MP Board 10th and 12th exams, regular weekly unit drills, board mock papers, practical lab journals, and guidance for competitive exams (JEE, NEET, CA Foundation, CUET).
                  </p>
                </div>
              )}

              <button
                onClick={() => onOpenEnquiry(selectedWing.name)}
                className="w-full mt-3 py-3 px-4 bg-[#1a365d] hover:bg-[#122644] text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire for {selectedWing.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Quick Summary Program Cards as per prompt HTML structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="text-base font-bold text-[#1a365d] mb-2 font-display">
              Nursery & Kindergarten
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Our dedicated <strong className="text-slate-800">nursery school in Jabalpur</strong> wing focuses on foundational learning, English phonics, social habits, and fine motor skill development in a joyful setting.
            </p>
            <div className="text-xs text-amber-800 font-medium">Nursery · KG-I · KG-II</div>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="text-base font-bold text-[#1a365d] mb-2 font-display">
              Primary & Middle School
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Comprehensive English medium curriculum focusing on core conceptual mathematical clarity, languages, hands-on science experiments, and extracurricular sports.
            </p>
            <div className="text-xs text-amber-800 font-medium">Classes 1st to 8th</div>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="text-base font-bold text-[#1a365d] mb-2 font-display">
              Higher Secondary (9th to 12th)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Recognized <strong className="text-slate-800">higher secondary school in Jabalpur Madhya Pradesh</strong> preparing students for MP Board board exams in Science (PCM/PCB) and Commerce streams.
            </p>
            <div className="text-xs text-amber-800 font-medium">Classes 9th to 12th (MP Board)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
