import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Shield, Navigation, ExternalLink, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  onOpenEnquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl = `https://wa.me/919425158240?text=${encodeURIComponent(
    'Hello, I would like to enquire about admission at S.S. Convent Higher Secondary School Jabalpur.'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Reach Out to Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] font-display tracking-tight text-balance">
            Contact & Campus Details
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 mb-4"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Parents are warmly invited to visit our administrative desk on Damoh Road, interact with our teaching faculty, and inspect the classrooms and laboratories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-[#1a365d] font-display border-b border-slate-200/80 pb-3">
              Official Campus Information
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Campus Address</div>
                  <div className="text-slate-600 mt-0.5">{SCHOOL_INFO.address}</div>
                  <div className="text-[11px] text-amber-800 font-medium mt-1">
                    {SCHOOL_INFO.landmarks}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Affiliation & Medium</div>
                  <div className="text-slate-600 mt-0.5">
                    <strong>{SCHOOL_INFO.board}</strong> (English Medium)
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Recognized by Department of School Education, Madhya Pradesh
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Classes & Office Timings</div>
                  <div className="text-slate-600 mt-0.5">
                    <strong>Levels:</strong> {SCHOOL_INFO.classes}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    <strong>Office / Enquiry Desk:</strong> {SCHOOL_INFO.officeHours}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Phone & Help Desk</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-0.5">
                    <a
                      href={`tel:${SCHOOL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                      className="font-semibold text-[#1a365d] hover:text-amber-600"
                    >
                      {SCHOOL_INFO.phonePrimary}
                    </a>
                    <a
                      href={`tel:${SCHOOL_INFO.phoneSecondary.replace(/[^0-9+]/g, '')}`}
                      className="text-slate-600 hover:text-slate-900"
                    >
                      {SCHOOL_INFO.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Email Correspondence</div>
                  <a
                    href={`mailto:${SCHOOL_INFO.email}`}
                    className="text-slate-600 hover:text-[#1a365d] mt-0.5 block"
                  >
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-2.5 bg-[#1a365d] hover:bg-[#122644] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
              >
                Submit Online Enquiry
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md shadow-xs transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>

          {/* Location & Map Direction Guidance Card */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-4">
                <h3 className="text-lg font-bold text-[#1a365d] font-display">
                  How to Reach Campus
                </h3>
                <span className="text-xs text-amber-800 font-medium">Jabalpur North</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our campus is prominently located on <strong>Damoh Road</strong>, just past the MR-4 ring road connection and within 3–5 minutes from <strong>Deendayal Chowk</strong> and <strong>Karmeta</strong>.
              </p>

              {/* Transit Directions */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">From Deendayal Chowk:</div>
                  <div className="text-slate-600 text-xs">
                    Head north along Damoh Road for 1.2 km. The school campus entrance is located on the right with clear signage.
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">From Karmeta / Sukha:</div>
                  <div className="text-slate-600 text-xs">
                    Take the main Karmeta connector toward Damoh Road bypass. Campus is situated within 1.5 km (under 4 minutes).
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">From Damoh Naka / Baldeobagh:</div>
                  <div className="text-slate-600 text-xs">
                    Follow Damoh Road straight towards Deendayal Chowk, continue straight for 1 km past the chowk.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80">
              <a
                href="https://www.google.com/maps/search/Damoh+Road+Deendayal+Chowk+Karmeta+Jabalpur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-600" />
                <span>Get Turn-by-Turn GPS Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
