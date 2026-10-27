import React, { useState } from 'react';
import { FAQS, FAQItem } from '../data/schoolData';
import { ChevronDown, Search, HelpCircle, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Got Questions? We Have Answers
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] font-display tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Quick information for parents seeking admission to S.S. Convent Higher Secondary School Jabalpur.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. MP Board, Karmeta, fees, streams, transport)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#1a365d] focus:border-transparent placeholder:text-slate-400 shadow-2xs"
            />
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: 'all', label: 'All Queries' },
              { id: 'affiliation', label: 'Affiliation & Board' },
              { id: 'admissions', label: 'Admissions & Fees' },
              { id: 'academics', label: 'Academics & Streams' },
              { id: 'facilities', label: 'Location & Transport' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1a365d] text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found. Feel free to call our administrative desk directly.
            </div>
          )}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-10 p-5 bg-amber-50 rounded-xl border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-amber-700 shrink-0" />
            <span className="text-amber-900 font-medium">
              Have specific questions about syllabus, bus stops, or fee concessions?
            </span>
          </div>
          <a
            href="tel:+919425158240"
            className="px-4 py-2 bg-[#1a365d] hover:bg-[#122644] text-white font-semibold rounded-md transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call +91 94251 58240</span>
          </a>
        </div>
      </div>
    </section>
  );
};
