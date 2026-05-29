import { motion } from 'motion/react';
import { Smile, Sparkles, Star, Heart, CheckCircle2, ShieldAlert, Award, Compass } from 'lucide-react';

interface SpecialNeedsViewProps {
  onOpenBooking: () => void;
}

export default function SpecialNeedsView({ onOpenBooking }: SpecialNeedsViewProps) {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Cinematic Header Block */}
      <section className="bg-gradient-to-b from-[#8EE3CF]/15 via-[#5BBEF7]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#8EE3CF]/20 text-[#1f6d5c] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#8EE3CF]/30">
            COMPASSIONATE SENSORY-SENSITIVE ACCOMMODATIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Special Needs Dentistry
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Welcome to a sensory-friendly dental sanctuary. We customize dental treatment pacing, office illumination, and procedural cooperation to nurture children with unique developmental profiles.
          </p>
        </div>
      </section>

      {/* Main split-layout content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Story on special needs adaptations */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Nurturing Smiles with Limitless Care & Patience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We understand that a dental office triggers intense sensory defensiveness for children with <strong className="text-slate-800">Autism Spectrum Disorder, sensory processing sensitivities, ADHD, Down Syndrome, or movement challenges</strong>. The sudden neon flashing, metallic vibration, and sudden touch can instantly overwhelm a child.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Texas Tiny Teeth is recognized across Dallas-Fort Worth as a pioneer in special needs care. We train our entire medical squad—from receptionists to hygienists—to practice unconditional patience. We never rush, never alarm, and only proceed when your child feels secure.
          </p>

          <div className="bg-[#FAFAFA] p-5 rounded-3xl border border-slate-100 space-y-3">
            <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
              <Smile className="text-[#8EE3CF] w-5 h-5" /> The "Tell-Show-Do" Dental Method
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              We never perform therapeutic interventions without warning. In our <em>Tell-Show-Do</em> model: 1. We explain the instrument using cute, silly characters. 2. We demonstrate the instrument brushing against their fingertip. 3. Only then do we perform the step on the tooth.
            </p>
          </div>
        </div>

        {/* Right side item list with interactive style */}
        <div className="bg-gradient-to-br from-[#8EE3CF]/10 to-[#5BBEF7]/10 rounded-3xl p-8 border border-white shadow-md space-y-6">
          <span className="text-[#348e77] text-xs font-black uppercase tracking-widest block">
            ⭐ SENSORY COMFORT SUITE FEATURES
          </span>

          <div className="space-y-4">
            {[
              { title: 'Weighted Cozy Sensory Blankets', desc: 'Provides calming deep-pressure input to reduce muscle tension and soothe central nerves easily.' },
              { title: 'Dimmable LED Treatment Suites', desc: 'We decrease harsh overhead surgical illumination to ease light-sensitive youngsters.' },
              { title: 'Silent Vibrational Cleaning Tools', desc: 'Custom quiet diagnostic scaling units minimize loud clinical screeching sounds.' },
              { title: 'Custom Comfort Pacing Intervals', desc: 'We schedule spacious, non-overlapping appointments so your family is never rushed.' }
            ].map((box, idx) => (
              <div key={idx} className="bg-white/80 p-4 rounded-2xl border border-rose-50/50 shadow-xs space-y-1">
                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#8EE3CF] shrink-0" />
                  <span>{box.title}</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed pl-6.5">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Reassuring parent info strip */}
      <section className="bg-slate-900 border-t-8 border-[#8EE3CF] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <Heart className="w-12 h-12 text-[#8EE3CF] mx-auto fill-[#8EE3CF]/10 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-black">We Partner Deeply with DFW Parents</h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            You know your child's triggers better than anyone. Before we begin, we consult you extensively to discover positive reinforcement words, therapeutic coping tricks, noise sensitivities, and medical background. We promote and invite parent presence in the dental suite during the entire visit.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#8EE3CF] hover:bg-[#72caa3] text-slate-900 font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow"
              id="special-needs-cta-book"
            >
              Collaborate on a Comfort Plan
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
