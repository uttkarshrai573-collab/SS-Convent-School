import React, { useState } from 'react';
import { BUS_ROUTES } from '../data/schoolData';
import { Bus, MapPin, Clock, ShieldCheck, PhoneCall, Check } from 'lucide-react';

export const TransportAndBusRoutes: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>(BUS_ROUTES[0].routeNo);

  const currentRoute = BUS_ROUTES.find((r) => r.routeNo === selectedRoute) || BUS_ROUTES[0];

  return (
    <section id="transport" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            Safe Student Mobility
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] font-display tracking-tight text-balance">
            Safe School Bus Transport Network
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 mb-4"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Ensuring a punctual, safe, and comfortable daily commute across Jabalpur. Our school-managed buses cover key residential clusters near Damoh Road, Karmeta, Deendayal Chowk, and beyond.
          </p>
        </div>

        {/* Bus Safety Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
            <div className="text-sm font-bold text-slate-900">GPS Live Tracking</div>
            <p className="text-xs text-slate-500 mt-1">Real-time tracking of route progress and safe speed monitoring.</p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs">
            <Check className="w-5 h-5 text-blue-600 mb-2" />
            <div className="text-sm font-bold text-slate-900">Female Attendants</div>
            <p className="text-xs text-slate-500 mt-1">Dedicated care attendants on junior wing buses to assist children.</p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs">
            <Clock className="w-5 h-5 text-amber-600 mb-2" />
            <div className="text-sm font-bold text-slate-900">Punctual Schedules</div>
            <p className="text-xs text-slate-500 mt-1">Standardized stop pick-up times ensuring students arrive relaxed.</p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-2xs">
            <Bus className="w-5 h-5 text-indigo-600 mb-2" />
            <div className="text-sm font-bold text-slate-900">RTO Certified Fleets</div>
            <p className="text-xs text-slate-500 mt-1">Regular mechanical audits, emergency exits, and on-board first-aid.</p>
          </div>
        </div>

        {/* Route Explorer */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-[#1a365d] font-display">
                Explore Bus Coverage Routes in Jabalpur
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Select a route to view designated stops and estimated transit time</p>
            </div>

            {/* Route selector buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg">
              {BUS_ROUTES.map((route) => (
                <button
                  key={route.routeNo}
                  onClick={() => setSelectedRoute(route.routeNo)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    selectedRoute === route.routeNo
                      ? 'bg-white text-[#1a365d] shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {route.routeNo}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Coverage Sector</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                {currentRoute.area}
              </h4>
              <p className="text-xs text-slate-600">
                Average one-way transit duration: <strong className="text-slate-800">{currentRoute.duration}</strong>
              </p>
              <div className="pt-2 text-xs text-slate-500">
                To verify an exact pick-up point near your residence or request an alternative stop, contact the School Transport Supervisor at +91 94251 58240.
              </div>
            </div>

            <div className="md:col-span-7 bg-slate-50 p-5 rounded-xl border border-slate-200/80">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
                Designated Pick-up & Drop Stops
              </div>
              <div className="space-y-3">
                {currentRoute.stops.map((stop, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1a365d] text-amber-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 text-xs sm:text-sm font-medium text-slate-800">
                      {stop}
                    </div>
                    {index === currentRoute.stops.length - 1 && (
                      <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Arrival At Campus
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
