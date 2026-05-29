import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Smile, Star, Coffee, AlertCircle, Phone, Calendar } from 'lucide-react';

interface SedationViewProps {
  onOpenBooking: () => void;
}

export default function SedationView({ onOpenBooking }: SedationViewProps) {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Cinematic Header Block */}
      <section className="bg-gradient-to-b from-[#5BBEF7]/10 via-[#8EE3CF]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#5BBEF7]/10 text-[#258bbc] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#5BBEF7]/20">
            COMFORT & CONSCIOUS RELAXATION
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Sedation Dentistry
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Eliminate childhood dental worries. We provide fully certified, continuous monitoring pediatric sedation solutions to help children relax or doze peacefully during care.
          </p>
        </div>
      </section>

      {/* Categories of Sedation Detailed lists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-8 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-[#8EE3CF] rounded-all"></span>
          Our Monitored Sedation Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Laughing Gas */}
          <div className="bg-white rounded-3xl p-6.5 border border-slate-100 shadow-sm hover:shadow-md transition space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#5BBEF7]/10 flex items-center justify-center text-[#5BBEF7]">
              <span>🎈</span>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-extrabold text-[#2a8abf] text-base sm:text-lg">Nitrous Oxide (Laughing Gas)</h3>
              <span className="text-[10px] bg-[#5BBEF7]/5 text-[#258bbc] font-black uppercase px-2 py-0.5 rounded-md inline-block">
                Extremely Gentle & Quick
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Administered through a sweet-scented nasal mask in flavors like strawberry or grape. Nitrous oxide relaxes young muscles and induces calm, while children remain fully alert and able to respond to our dentists easily.
            </p>
            <div className="border-t border-slate-100 pt-4 text-xs text-slate-400 space-y-0.5 font-semibold">
              <span className="block">✔ Wears off within 2 minutes of pure oxygen</span>
              <span className="block">✔ Child can return to preschool immediately</span>
            </div>
          </div>

          {/* Oral Conscious Sedation */}
          <div className="bg-white rounded-3xl p-6.5 border border-slate-100 shadow-sm hover:shadow-md transition space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#8EE3CF]/20 flex items-center justify-center text-[#8EE3CF]">
              <span>🍹</span>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-extrabold text-[#238c77] text-base sm:text-lg">Mild Oral Sedation</h3>
              <span className="text-[10px] bg-[#8EE3CF]/10 text-[#1b735f] font-black uppercase px-2 py-0.5 rounded-md inline-block">
                Deep Muscle relaxation
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Recommended for highly anxious youngsters who require multiple fillings or caps in a single visit. Children drink an active calming compound in-office, inducing safe, peaceful sleepiness during clinical steps.
            </p>
            <div className="border-t border-slate-100 pt-4 text-xs text-slate-400 space-y-0.5 font-semibold">
              <span className="block">✔ Formulated strictly to pediatrician guides</span>
              <span className="block">✔ Minimal memory retention of the dental procedure</span>
            </div>
          </div>

          {/* General Anesthesia */}
          <div className="bg-white rounded-3xl p-6.5 border border-slate-100 shadow-sm hover:shadow-md transition space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#FFB5D2]/20 flex items-center justify-center text-[#FFB5D2]">
              <span>⭐</span>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-extrabold text-rose-600 text-base sm:text-lg">Hospital General Anesthesia</h3>
              <span className="text-[10px] bg-rose-50 text-rose-500 font-black uppercase px-2 py-0.5 rounded-md inline-block">
                In-Chair Anesthesiologist
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Reserved for very young children needing extensive jaw restoration, or teenagers with high developmental sensitivities. An licensed, board-certified dental anesthesiologist monitors pediatric vitals in-office.
            </p>
            <div className="border-t border-slate-100 pt-4 text-xs text-slate-400 space-y-0.5 font-semibold">
              <span className="block">✔ Absolute deep dreamless sleep during care</span>
              <span className="block">✔ Monitored by a dedicated medical specialist</span>
            </div>
          </div>

        </div>
      </section>

      {/* Safety checklists for parents */}
      <section className="bg-slate-900 border-t-8 border-[#5BBEF7] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5">
            <span className="text-[#5BBEF7] text-xs font-black uppercase tracking-widest block flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> CLINICAL SAFETY MEASURES
            </span>
            <h2 className="text-3xl font-black text-white leading-tight">
              Absolute Safety is Our Golden Directive
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We never perform deep conscious sedation without extensive medical prep. Our clinics are loaded with intensive therapeutic equipment, including pediatric oxygen backup, automated heart vitals trackers, and specialized respiratory parameters.
            </p>
            <p className="text-slate-450 text-xs leading-relaxed">
              All our pediatric dentists are certified in Pediatric Advanced Life Support (PALS) and maintain continuous emergency dental drillings. Your tiny explorer is always in highly skilled hands.
            </p>
          </div>

          <div className="bg-slate-800/60 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="font-bold text-slate-100 text-base sm:text-lg flex items-center gap-2">
              <AlertCircle className="text-[#FFD166] w-5.5 h-5.5 shrink-0" />
              <span>Parent Pre-Op Guidelines Checklist</span>
            </h3>
            
            <ul className="space-y-3.5 text-xs text-slate-350">
              <li className="flex items-start gap-2.5">
                <span className="text-[#8EE3CF] font-extrabold shrink-0 mt-0.5">✔</span>
                <span><strong>No solid foods prior:</strong> Empty stomach required for 6 to 8 hours before appointments involving oral conscious sedation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#8EE3CF] font-extrabold shrink-0 mt-0.5">✔</span>
                <span><strong>Accompanying Parent policy:</strong> An adult guardian must remain actively present in the office during the entire procedure.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#8EE3CF] font-extrabold shrink-0 mt-0.5">✔</span>
                <span><strong>Reporting health changes:</strong> Notify us immediately if your child experiences nasal congestion, coughs, or fevers within 24 hours.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#8EE3CF] font-extrabold shrink-0 mt-0.5">✔</span>
                <span><strong>Recovery pacing:</strong> Plan a peaceful day at home following sedation. No intense play parks or athletic activities.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <Sparkles className="w-12 h-12 text-[#FFD166] mx-auto" />
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">Do you have questions about sedation safety?</h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
          We want you to feel entirely at peace. Schedule a consultation to speak of your child's behavior, options, and receive safe dental solutions together.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenBooking}
            className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow"
            id="sedation-cta-book"
          >
            Schedule a Sedation Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
