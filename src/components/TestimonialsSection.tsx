import React from 'react';
import { TESTIMONIALS } from '../data/schoolData';
import { Quote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Community Trust
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] font-display tracking-tight text-balance">
            Voices of Jabalpur Parents
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 mb-4"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Real feedback from families in Karmeta, Deendayal Chowk, and Damoh Road whose children are thriving academically and morally at S.S. Convent School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-slate-200/90 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-400 mb-4 opacity-80" />
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-500">{t.relation}</div>
                <div className="flex items-center gap-1 text-[11px] text-amber-700 mt-1 font-medium">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>{t.locality}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
