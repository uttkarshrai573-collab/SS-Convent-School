import React from 'react';
import { MapPin, Navigation, Compass, BookOpenCheck, ShieldAlert, Award, Clock } from 'lucide-react';
import { SCHOOL_INFO, NEARBY_HUBS } from '../data/schoolData';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Institutional Legacy & Location
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] font-display tracking-tight text-balance">
            About Our School in Jabalpur
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 mb-4"></div>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            <strong className="text-slate-900">S.S. Convent Higher Secondary School Jabalpur</strong> is an established{' '}
            <strong className="text-slate-900">MP Board English medium school</strong> situated on{' '}
            <strong className="text-slate-900">Damoh Road</strong>. Recognized among the most trusted{' '}
            <strong className="text-slate-900">schools in Jabalpur</strong>, our institution provides academic excellence, strong character building, and modern learning infrastructure.
          </p>
        </div>

        {/* 2-Column Split: Institutional Philosophy & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              Founded with the objective of providing high-caliber, values-grounded education to students across Jabalpur, S.S. Convent has earned a formidable reputation for academic consistency. By blending the structured syllabus of the <strong>Madhya Pradesh Board of Secondary Education (MP Board)</strong> with modern English communication mastery, we equip young learners with both competitive edge and rooted Indian cultural values.
            </p>
            <p>
              From the joyful, exploratory atmosphere of our <strong>nursery school wing</strong> through to the focused specialization of <strong>higher secondary (Classes 9 to 12)</strong> in Science (PCM & PCB) and Commerce streams, every student receives individualized mentoring, laboratory practicals, and structured exam coaching.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <div className="text-sm font-bold text-[#1a365d] mb-1">Affiliation & Medium</div>
                <div className="text-xs text-slate-600">
                  Affiliated with MP Board, Bhopal. Imparted purely in English medium with equal rigor in Hindi language skills.
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <div className="text-sm font-bold text-[#1a365d] mb-1">Holistic Discipline</div>
                <div className="text-xs text-slate-600">
                  Equal focus on moral ethics, respect, physical sports, public speaking, and continuous scholastic evaluation.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-[#1a365d] font-display border-b border-slate-100 pb-3">
              School at a Glance
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Official Name</span>
                <span className="font-semibold text-slate-800 text-right">{SCHOOL_INFO.name}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Board Affiliation</span>
                <span className="font-semibold text-slate-800 text-right">{SCHOOL_INFO.board}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Instruction Medium</span>
                <span className="font-semibold text-slate-800 text-right">{SCHOOL_INFO.medium}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Classes Offered</span>
                <span className="font-semibold text-slate-800 text-right">{SCHOOL_INFO.classes}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">11th & 12th Streams</span>
                <span className="font-semibold text-slate-800 text-right">Science (PCM/PCB) & Commerce</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Primary Campus</span>
                <span className="font-semibold text-slate-800 text-right">Damoh Road, Jabalpur (482002)</span>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="w-full mt-2 py-2.5 px-4 bg-[#1a365d] hover:bg-[#122644] text-white text-xs font-semibold rounded-md transition-colors text-center cursor-pointer"
            >
              Enquire for Admission
            </button>
          </div>
        </div>

        {/* Convenient Location Near Major Hubs Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wide">
              <Navigation className="w-3.5 h-3.5 text-amber-600" />
              <span>Connectivity & Reach</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a365d] font-display mt-1">
              Convenient Location Near Major Hubs in Jabalpur
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Our campus offers safe, easy connectivity whether you are searching for a{' '}
              <strong className="text-slate-900">school near Deendayal Chowk Jabalpur</strong>, a{' '}
              <strong className="text-slate-900">school near Damoh Naka Jabalpur</strong>, or a{' '}
              <strong className="text-slate-900">private school near Karmeta Jabalpur</strong>. Situated on the main Damoh Road artery with swift approach via MR-4 road.
            </p>
          </div>

          {/* Commute Time Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEARBY_HUBS.map((hub) => (
              <div
                key={hub.name}
                className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{hub.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{hub.note}</p>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <span className="text-xs font-bold text-[#1a365d] block">{hub.time}</span>
                    <span className="text-[11px] text-slate-500">{hub.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Campus Address: Damoh Road, Near Deendayal Chowk & Karmeta, Jabalpur, MP 482002</span>
            </div>
            <a
              href="https://maps.google.com/?q=Damoh+Road+Deendayal+Chowk+Jabalpur"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1a365d] hover:text-amber-700 hover:underline inline-flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
