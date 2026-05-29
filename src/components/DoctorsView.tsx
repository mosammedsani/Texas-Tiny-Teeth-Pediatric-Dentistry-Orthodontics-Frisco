import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCTORS } from '../data';
import { ShieldCheck, Calendar, BookOpen, Star, Sparkles, Smile, Heart, Award, X, ChevronRight, GraduationCap, ToyBrick, Milestone } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorsViewProps {
  onOpenBooking: () => void;
}

export default function DoctorsView({ onOpenBooking }: DoctorsViewProps) {
  const [selectedDoc, setSelectedDoc] = useState<Doctor | null>(null);

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Dynamic Header Banner */}
      <section className="bg-gradient-to-b from-[#FFD166]/10 via-[#8EE3CF]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Playful background blobs */}
        <div className="absolute top-10 left-10 w-12 h-12 rounded-full bg-[#5BBEF7]/10 blur-xs"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#8EE3CF]/10 blur-sm"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="bg-[#FFD166]/20 text-yellow-805 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#FFD166]/30">
            BOARD-CERTIFIED DENTAL SUPERHEROES
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Meet Our Pediatric Doctors
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            Our clinicians are specialized pediatric dentists with years of board residency training in child psychology, sensory-adaptation, and trauma-free gentle care.
          </p>
        </div>
      </section>

      {/* Main Grid display - perfectly aligned and robust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group p-6 h-full min-h-[440px]"
              id={`doctor-card-${doc.id}`}
            >
              <div className="flex flex-col items-center text-center space-y-4 flex-1">
                
                {/* Rounded Portrait Frame */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#8EE3CF]/30 shadow-md group-hover:scale-105 transition duration-300 bg-slate-50 shrink-0 relative flex items-center justify-center">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Text block */}
                <div className="space-y-1.5 w-full">
                  <h3 className="text-lg font-black font-sans text-slate-800 leading-tight group-hover:text-[#5BBEF7] transition-colors min-h-[44px] flex items-center justify-center px-1">
                    {doc.name}
                  </h3>
                  <div className="min-h-[26px] flex items-center justify-center">
                    <span className="text-[11px] font-bold text-[#5BBEF7] bg-[#5BBEF7]/5 px-2.5 py-0.5 rounded-full inline-block">
                      {doc.title}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">
                    Certified Specialist
                  </p>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed text-center line-clamp-3 h-12 overflow-hidden w-full">
                  {doc.bio}
                </p>

                {/* Specialties Summary */}
                <div className="flex flex-wrap gap-1 justify-center pt-1 min-h-[24px]">
                  {doc.specialties.slice(0, 2).map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-[#8EE3CF]/10 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md inline-block"
                    >
                      ✨ {spec}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Bottom segment */}
              <div className="pt-4 border-t border-slate-100 mt-5 space-y-3 shrink-0">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>⭐ 5.0 Rating</span>
                  <span>🧸 {doc.favoriteToy.split(' ').slice(-1)[0]}</span>
                </div>

                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="w-full bg-[#8EE3CF] hover:bg-[#72caa3] text-slate-900 border border-[#8EE3CF] text-xs font-black py-3 px-4 rounded-2xl shadow-xs transition duration-200 cursor-pointer flex items-center justify-center gap-1.5"
                  id={`home-doc-select-${doc.id}`}
                >
                  <Smile className="w-4 h-4" />
                  <span>View Details & Story</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Pop-up Overlay Modal Detail Card */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoc(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Card body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[32px] shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 flex flex-col max-h-[90vh] relative z-10"
              id="doctor-detail-modal"
            >
              {/* Close Button element */}
              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-655 p-2 rounded-full cursor-pointer transition z-20 focus:outline-none"
                aria-label="Close credentials popup"
              >
                <X className="w-5 h-5 text-slate-700 font-bold" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                
                {/* Header segment with layout of picture and title */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#8EE3CF]/30 shadow-md shrink-0 bg-slate-50 flex items-center justify-center">
                    <img
                      src={selectedDoc.image}
                      alt={selectedDoc.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="text-center sm:text-left space-y-2">
                    <h2 className="text-2xl font-black text-slate-800 leading-tight">
                      {selectedDoc.name}
                    </h2>
                    <span className="text-xs font-bold text-white bg-[#5BBEF7] px-3 py-1 rounded-full inline-block">
                      {selectedDoc.title}
                    </span>
                    <p className="text-[11px] text-slate-400 font-extrabold uppercase tracking-widest block">
                      Texas Tiny Teeth Pediatric Dentistry
                    </p>
                  </div>
                </div>

                {/* Biography */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Smile className="w-4 h-4 text-[#5BBEF7]" /> Our Practice Story & Biography
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {selectedDoc.bio}
                  </p>
                </div>

                {/* Specialties list */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-slate-405 uppercase tracking-widest flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> Clinical Core Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoc.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-[#8EE3CF]/15 text-[#1b735f] text-xs font-bold px-3 py-1 rounded-xl border border-[#8EE3CF]/20"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Educational Achievements */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-black text-slate-405 uppercase tracking-widest flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#FFD166]" /> Professional Education & Credentials
                  </h4>
                  <ul className="space-y-1.5 pl-4 list-disc text-slate-600 text-xs sm:text-sm">
                    {selectedDoc.education.map((edu, idx) => (
                      <li key={idx} className="leading-relaxed font-semibold">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Kid Relatability interview */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4">
                  <h4 className="text-xs font-black text-[#2f8c77] uppercase tracking-widest flex items-center gap-1.5">
                    <ToyBrick className="w-4 h-4 text-[#2f8c77]" /> Kid's Relatability Interview
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <strong className="text-slate-700 block">Q: State your legendary fun fact?</strong>
                      <p className="text-slate-500 italic">"{selectedDoc.funFact}"</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                      <div>
                        <strong className="text-slate-400 text-[10px] uppercase font-bold block">Favorite toy partners</strong>
                        <span className="text-slate-700 font-bold block mt-0.5">🧸 {selectedDoc.favoriteToy}</span>
                      </div>
                      <div>
                        <strong className="text-slate-400 text-[10px] uppercase font-bold block">Clinical superhero identity</strong>
                        <span className="text-slate-700 font-bold block mt-0.5">🦸 Molar Shield Guard</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action CTA box inside popup */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedDoc(null);
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-6 py-3 rounded-2xl font-black text-xs sm:text-sm shadow-md cursor-pointer text-center"
                  >
                    Request Booking with {selectedDoc.name.split(',')[0]}
                  </button>
                  <button
                    onClick={() => setSelectedDoc(null)}
                    className="w-full sm:w-auto text-slate-400 hover:text-slate-700 font-extrabold text-xs text-center"
                  >
                    Close Details
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reassurance segment for parents */}
      <section className="bg-slate-900 text-white py-16 border-t-8 border-[#FFD166] mt-16 relative">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-5">
          <Smile className="w-12 h-12 text-[#FFD166] mx-auto animate-bounce" />
          <h2 className="text-2xl sm:text-3xl font-black">100% Gentle, Pain-Free, Family First Promise</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Our pediatric dentists collaborate closely with board-certified anesthesiologists, educational advocates, and sensory sensitive professionals to guarantee that every superhero journey is comfortable.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#5BBEF7] hover:bg-[#49aee0] text-slate-900 px-8 py-4 rounded-full font-black text-xs sm:text-sm tracking-wide transition pointer-events-auto cursor-pointer shadow-lg hover:shadow-xl"
              id="docs-cta-book"
            >
              Consult one of our Specialists
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
