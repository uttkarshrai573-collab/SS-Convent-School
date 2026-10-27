import React, { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/schoolData';
import { ShieldCheck, Eye, Sparkles, Building2, Laptop, FlaskConical, Trophy, X } from 'lucide-react';

export const CampusShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string; desc: string } | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Campus Infrastructure':
        return <Building2 className="w-4 h-4 text-amber-600" />;
      case 'Academic Facilities':
        return <Laptop className="w-4 h-4 text-blue-600" />;
      case 'Practical Learning':
        return <FlaskConical className="w-4 h-4 text-emerald-600" />;
      case 'Physical Fitness':
        return <Trophy className="w-4 h-4 text-rose-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section id="campus" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              Infrastructure & Environment
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] font-display tracking-tight text-balance">
              Campus & Learning Facilities
            </h2>
            <div className="w-16 h-1 bg-amber-500 mt-3 mb-4"></div>
            <p className="text-base text-slate-600 leading-relaxed">
              Designed to stimulate curiosity and foster discipline. Our campus on Damoh Road offers safe, modern, and student-centric amenities catering to academic, scientific, and athletic pursuits.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-600 shrink-0">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              24/7 CCTV Campus
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-medium">RO Drinking Water</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium">Power Backup</span>
          </div>
        </div>

        {/* 4 Facilities Grid with High-Fidelity Photography Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPUS_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => setSelectedImage({ title: facility.title, image: facility.image, desc: facility.description })}
                    className="p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                    title="Enlarge photograph"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2 bg-slate-900/60 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {getCategoryIcon(facility.category)}
                    <span className="font-medium">{facility.category}</span>
                  </div>
                  <span className="font-semibold text-amber-300">{facility.stats}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2 group-hover:text-[#1a365d] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Campus Features Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-4">
            Safety, Hygiene & Student Welfare Standards
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-600">
            <div>
              <div className="font-bold text-slate-900 text-sm mb-1">Central School Library</div>
              <p>5,000+ reference volumes, encyclopedias, NCERT / MP Board guides, children's storybooks, and reading room.</p>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm mb-1">RO Purified Water</div>
              <p>Multi-stage commercial RO filtration plants with regular water testing for child hydration and safety.</p>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm mb-1">Emergency First Aid Room</div>
              <p>Dedicated medical care station with certified attendant and on-call pediatrician linkage.</p>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm mb-1">Complete CCTV Coverage</div>
              <p>Monitored perimeter, gated security guards, and supervised student departure protocols.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full max-h-[75vh] object-contain mx-auto"
              />
            </div>
            <div className="p-5 bg-white border-t border-slate-100">
              <h3 className="text-lg font-bold text-[#1a365d] font-display">{selectedImage.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
