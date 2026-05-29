import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Sparkles, Calendar, ChevronDown, Check, Smile, Heart, Star, Phone, ShieldCheck } from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServicesViewProps {
  onOpenBooking: () => void;
}

export default function ServicesView({ onOpenBooking }: ServicesViewProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Cinematic Header Block */}
      <section className="bg-gradient-to-b from-[#8EE3CF]/15 via-[#5BBEF7]/5 to-transparent py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#8EE3CF]/20 text-[#1f6d5c] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#8EE3CF]/30">
            KID-APPROVED CARE SPECTRUM
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Our Pediatric Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Click on any service card below to explore full clinical details, fun developmental points, and answers to common parent FAQ questions.
          </p>
        </div>
      </section>

      {/* Main Interactive Grid & Narrative layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Selection Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="font-extrabold text-xs uppercase tracking-widest text-slate-400 mb-2 block">
              DENTAL TREATMENTS SELECTOR
            </h3>
            
            <div className="space-y-3">
              {SERVICES.map((srv) => {
                const isSelected = selectedServiceId === srv.id;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-slate-800 border-slate-800 text-white shadow-md scale-102'
                        : 'bg-white hover:bg-slate-50 border-slate-100 text-slate-700 shadow-xs'
                    }`}
                    id={`srv-select-btn-${srv.id}`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl ${srv.color} flex items-center justify-center font-bold text-white shrink-0 shadow-inner`}>
                        ✨
                      </div>
                      <div>
                        <span className="block font-bold text-sm tracking-tight leading-none group-hover:text-[#5BBEF7] transition-colors">
                          {srv.title}
                        </span>
                        <span className="block text-[10px] text-slate-400 mt-1 leading-none font-bold uppercase tracking-wider">
                          Pediatric Approved
                        </span>
                      </div>
                    </div>
                    
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'rotate-90 text-[#8EE3CF]' : 'text-slate-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Fidelity Details & FAQ Sheet */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-md space-y-6"
              >
                
                {/* Title & Badge */}
                <div className="border-b border-slate-100 pb-5 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="bg-[#5BBEF7]/10 text-[#218bbc] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                      Board Certified Specialty
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-[#8EE3CF]" /> Safety Checked
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight leading-tight">
                    {activeService.title}
                  </h2>
                </div>

                {/* Full Description */}
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
                    {activeService.fullDesc}
                  </p>
                </div>

                {/* Magical cooperative factors for kids */}
                <div className="space-y-3 bg-[#FAFAFA] p-5 rounded-3xl border border-slate-100">
                  <h4 className="font-extrabold text-[#2a8abf] text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <Smile className="w-4 h-4 text-[#FFD166] fill-[#FFD166]" /> Child-Friendliness & Fun Factors:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {activeService.funPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <Check className="w-4 h-4 text-[#8EE3CF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Parent Frequently Asked Questions */}
                <div className="space-y-4 pt-2">
                  <h4 className="font-extrabold text-slate-800 text-sm uppercase tracking-widest">
                    ℹ️ Answers to Parent Questions:
                  </h4>
                  <div className="space-y-3">
                    {activeService.parentFaQs.map((faq, fIdx) => (
                      <div key={fIdx} className="border-l-4 border-[#5BBEF7] pl-4 space-y-1 bg-rose-50/5 p-3 rounded-r-2xl">
                        <strong className="text-slate-800 text-xs sm:text-sm block leading-snug">Q: {faq.q}</strong>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button Trigger */}
                <div className="pt-4 border-t border-slate-100 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Consulting Form</span>
                    <span className="text-[11px] text-[#2a8abf] font-extrabold block">All doctors review cases together</span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full tracking-wide shadow transition-all cursor-pointer w-full sm:w-auto"
                    id={`srv-details-book-${activeService.id}`}
                  >
                    Book This Care Option
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Emergency dental highlights */}
      <section className="bg-slate-900 border-t-8 border-[#FFB5D2] text-white py-16 mt-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <Smile className="w-12 h-12 text-[#FFB5D2] mx-auto animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold">🚨 Dental Emergencies? We are here of course!</h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Children drop toys, fall on lawns, and get dental aches. If your child breaks a tooth, knocks out a baby tooth, or suffers a sudden dental swelling, we reserve priority emergency slots daily across DFW!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:9402330300"
              className="bg-[#FFB5D2] hover:bg-[#fca5cb] text-slate-900 px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide transition inline-flex items-center gap-1.5"
              id="srv-emergency-call"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency Direct: (940) 233-0300</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
