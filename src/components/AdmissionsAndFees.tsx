import React, { useState } from 'react';
import { FEE_TIERS, FeeStructure } from '../data/schoolData';
import { Calculator, CheckCircle2, FileText, Calendar, IndianRupee, Printer, ArrowRight, ShieldCheck, Bus } from 'lucide-react';

interface AdmissionsAndFeesProps {
  onOpenEnquiry: (grade?: string) => void;
}

export const AdmissionsAndFees: React.FC<AdmissionsAndFeesProps> = ({ onOpenEnquiry }) => {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);
  const [includeTransport, setIncludeTransport] = useState<boolean>(true);
  const [transportZone, setTransportZone] = useState<number>(1000);

  const currentTier = FEE_TIERS[selectedTierIndex];

  // Transport estimate per quarter based on zone
  const quarterlyTransport = includeTransport ? transportZone * 3 : 0;
  const firstTermPayable =
    currentTier.quarterlyInstallment +
    currentTier.admissionFeeOneTime +
    Math.round(currentTier.activityAndLab / 2) +
    quarterlyTransport;

  const totalAnnualEstimate =
    currentTier.annualTuition +
    currentTier.activityAndLab +
    (includeTransport ? transportZone * 11 : 0);

  const handlePrintSummary = () => {
    window.print();
  };

  return (
    <section id="admissions" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Session 2026-27 Enrollment
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] font-display tracking-tight text-balance">
            Admissions & School Fees
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 mb-4"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Admissions are open for the upcoming academic session. We take pride in offering transparent, affordable{' '}
            <strong className="text-slate-900">school fees</strong> with easy quarterly installment options so quality English medium education remains accessible to all families in Jabalpur.
          </p>
        </div>

        {/* 4-Step Transparent School Admission Process */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#1a365d] font-display mb-6">
            Transparent 4-Step Admission Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/90 relative">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Step 01</div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Enquiry & Registration</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit an online admission form or collect the registration prospectus directly from the Damoh Road school desk.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/90 relative">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Step 02</div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Campus Visit & Interaction</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parents and student visit the campus for an informal interaction and basic readiness appraisal with our academic coordinators.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/90 relative">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Step 03</div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Document Verification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submission of student birth certificate / transfer certificate (TC), previous grade marksheet, photographs, and Aadhar copy.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/90 relative">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Step 04</div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Seat Confirmation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Confirmation of admission with payment of the 1st quarterly term installment. Welcome kit & booklist issued.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Affordable School Fees Structure & Estimator */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-1">
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>Interactive Fee Estimator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Affordable School Fees Structure
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select your child's class to view the transparent fee breakup and easy quarterly installment schedule with zero hidden charges.
            </p>
          </div>

          {/* Grade Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FEE_TIERS.map((tier, idx) => (
              <button
                key={tier.gradeRange}
                onClick={() => setSelectedTierIndex(idx)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedTierIndex === idx
                    ? 'bg-[#1a365d] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tier.gradeRange}
              </button>
            ))}
          </div>

          {/* Fee Breakdown Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Breakdown Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-display">
                      {currentTier.gradeRange}
                    </h4>
                    <p className="text-xs text-slate-500">{currentTier.grades} · MP Board English Medium</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Annual Tuition</span>
                    <span className="text-lg font-bold text-[#1a365d] tabular-nums">
                      ₹{currentTier.annualTuition.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Installment breakdown table */}
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Quarterly Tuition Installment (4 Terms)</span>
                    <span className="font-semibold text-slate-800 tabular-nums">
                      ₹{currentTier.quarterlyInstallment.toLocaleString('en-IN')} / quarter
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Annual Composite Lab, Sports & Activity Fee</span>
                    <span className="font-semibold text-slate-800 tabular-nums">
                      ₹{currentTier.activityAndLab.toLocaleString('en-IN')} / year
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">One-time New Admission Registration (1st Year only)</span>
                    <span className="font-semibold text-slate-800 tabular-nums">
                      ₹{currentTier.admissionFeeOneTime.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Transport add-on */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-semibold text-slate-800">
                      <input
                        type="checkbox"
                        checked={includeTransport}
                        onChange={(e) => setIncludeTransport(e.target.checked)}
                        className="rounded text-[#1a365d] focus:ring-[#1a365d]"
                      />
                      <span>Include Optional School Bus Transport</span>
                    </label>
                  </div>

                  {includeTransport && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setTransportZone(900)}
                        className={`p-2 rounded-md border text-left cursor-pointer ${
                          transportZone === 900
                            ? 'border-[#1a365d] bg-blue-50/50 text-[#1a365d] font-semibold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-medium">Zone A (Near)</div>
                        <div className="text-[11px] text-slate-500">Karmeta / Damoh Rd (~₹900/mo)</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setTransportZone(1200)}
                        className={`p-2 rounded-md border text-left cursor-pointer ${
                          transportZone === 1200
                            ? 'border-[#1a365d] bg-blue-50/50 text-[#1a365d] font-semibold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-medium">Zone B (Mid)</div>
                        <div className="text-[11px] text-slate-500">Deendayal / Damoh Naka (~₹1,200/mo)</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setTransportZone(1500)}
                        className={`p-2 rounded-md border text-left cursor-pointer ${
                          transportZone === 1500
                            ? 'border-[#1a365d] bg-blue-50/50 text-[#1a365d] font-semibold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-medium">Zone C (Extended)</div>
                        <div className="text-[11px] text-slate-500">Vijay Nagar / Adhartal (~₹1,500/mo)</div>
                      </button>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Included Benefits
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {currentTier.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Installment Payment Summary
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-2">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Term 1 Tuition:</span>
                  <span className="font-medium tabular-nums">₹{currentTier.quarterlyInstallment.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600">
                  <span>One-Time Admission Fee:</span>
                  <span className="font-medium tabular-nums">₹{currentTier.admissionFeeOneTime.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Term 1 Activity & Lab (50%):</span>
                  <span className="font-medium tabular-nums">₹{Math.round(currentTier.activityAndLab / 2).toLocaleString('en-IN')}</span>
                </div>
                {includeTransport && (
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Term 1 Bus Transport (3 months):</span>
                    <span className="font-medium tabular-nums">₹{quarterlyTransport.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-slate-900">Total Payable at Admission:</span>
                  <span className="text-xl font-extrabold text-[#1a365d] tabular-nums">
                    ₹{firstTermPayable.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <button
                  onClick={() => onOpenEnquiry(currentTier.gradeRange)}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 text-xs font-bold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for {currentTier.gradeRange}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handlePrintSummary}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Fee Estimation Slip</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 leading-relaxed space-y-1 pt-2 border-t border-slate-100">
                <p>• Four easy installment deadlines: July, October, January, and March.</p>
                <p>• Sibling fee concession of 10% available on second child tuition.</p>
                <p>• Official receipts issued instantly for all fee transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
