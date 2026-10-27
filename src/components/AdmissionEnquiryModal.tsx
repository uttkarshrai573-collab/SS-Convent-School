import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGrade?: string;
}

export const AdmissionEnquiryModal: React.FC<AdmissionEnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedGrade,
}) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState(preselectedGrade || 'Nursery');
  const [locality, setLocality] = useState('Karmeta');
  const [needTransport, setNeedTransport] = useState('Yes');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!studentName.trim() || !parentName.trim()) {
      setErrorMessage('Please enter both student name and parent/guardian name.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number for communication.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enquiry processing
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `SSC-JBP-${randomSuffix}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setStudentName('');
    setParentName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSubmittedRef(null);
    setErrorMessage(null);
    onClose();
  };

  const whatsappUrl = submittedRef
    ? `https://wa.me/919425158240?text=${encodeURIComponent(
        `Hello S.S. Convent School Admissions, I submitted an enquiry for ${studentName} (Grade: ${grade}) with Ref No: ${submittedRef}. Please share admission guidance.`
      )}`
    : `https://wa.me/919425158240?text=${encodeURIComponent(
        'Hello, I would like to enquire about admission at S.S. Convent Higher Secondary School Jabalpur.'
      )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={handleReset}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1a365d] text-white p-6 relative">
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 p-1.5 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            Academic Session 2026-27
          </div>
          <h3 className="text-xl font-bold font-display text-white">
            School Admission Enquiry
          </h3>
          <p className="text-xs text-slate-200 mt-1">
            S.S. Convent Higher Secondary School · Damoh Road Jabalpur
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submittedRef ? (
            /* Success confirmation screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  Enquiry Registered Successfully!
                </h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong className="text-slate-800">{parentName}</strong>. Our admission counselor will contact you at <strong className="text-slate-800">{phone}</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Application Ref No:</span>
                  <span className="font-bold text-[#1a365d] text-sm tabular-nums">{submittedRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Student Name:</span>
                  <span className="font-semibold text-slate-800">{studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applying For:</span>
                  <span className="font-semibold text-slate-800">{grade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Locality:</span>
                  <span className="font-semibold text-slate-800">{locality}, Jabalpur</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details to School WhatsApp Desk</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-md transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Admission Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {errorMessage && (
                <div className="p-3 bg-rose-50 text-rose-700 rounded-lg text-xs flex items-center gap-2 border border-rose-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Student's Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Patel"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Parent / Guardian Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Patel"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number (e.g. 9425158240)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Seeking Admission In <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-xs cursor-pointer"
                  >
                    <option value="Nursery">Nursery Wing</option>
                    <option value="KG-I">KG-I</option>
                    <option value="KG-II">KG-II</option>
                    <option value="Class 1 to 5">Primary (Class 1 - 5)</option>
                    <option value="Class 6 to 8">Middle School (Class 6 - 8)</option>
                    <option value="Class 9 - 10">High School (Class 9 - 10)</option>
                    <option value="Class 11 - Science (PCM)">Class 11 - Science (PCM)</option>
                    <option value="Class 11 - Science (PCB)">Class 11 - Science (PCB)</option>
                    <option value="Class 11 - Commerce">Class 11 - Commerce Stream</option>
                    <option value="Class 12">Class 12 (Board Prep)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Residential Locality (Jabalpur)
                  </label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-xs cursor-pointer"
                  >
                    <option value="Damoh Road">Damoh Road</option>
                    <option value="Karmeta">Karmeta</option>
                    <option value="Deendayal Chowk">Deendayal Chowk</option>
                    <option value="Damoh Naka">Damoh Naka</option>
                    <option value="MR-4 Road">MR-4 Road</option>
                    <option value="Vijay Nagar">Vijay Nagar</option>
                    <option value="Adhartal">Adhartal</option>
                    <option value="Baldeobagh">Baldeobagh</option>
                    <option value="Gohalpur">Gohalpur</option>
                    <option value="Other Area">Other Area in Jabalpur</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Require School Bus Transport?
                </label>
                <div className="flex gap-4 text-xs text-slate-700">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="transport"
                      value="Yes"
                      checked={needTransport === 'Yes'}
                      onChange={() => setNeedTransport('Yes')}
                      className="text-[#1a365d]"
                    />
                    <span>Yes, need bus pickup</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="transport"
                      value="No"
                      checked={needTransport === 'No'}
                      onChange={() => setNeedTransport('No')}
                      className="text-[#1a365d]"
                    />
                    <span>No, private transport</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Any Specific Query or Note
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about fee installments, previous school transfer, bus timings..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#1a365d] hover:bg-[#122644] active:bg-[#0c1a2f] text-white text-xs font-bold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Admission Enquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center pt-1">
                Prefer to talk now? Call the school help desk directly at{' '}
                <a href={`tel:${SCHOOL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`} className="font-semibold text-[#1a365d] underline">
                  {SCHOOL_INFO.phonePrimary}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
