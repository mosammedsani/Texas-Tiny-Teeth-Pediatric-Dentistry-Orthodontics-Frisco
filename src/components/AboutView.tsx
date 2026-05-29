import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Smile, Star, ArrowRight, Award, Trophy } from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export default function AboutView({ onOpenBooking }: AboutViewProps) {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#5BBEF7]/10 via-[#8EE3CF]/5 to-transparent py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#5BBEF7]/10 text-[#258bbc] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#5BBEF7]/20">
            OUR STORY AND PHILOSOPHY
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            About Texas Tiny Teeth
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover a state-of-the-art clinic custom-built to rewrite the standard childhood narrative of dental fear. We combine modern dentistry with a lighthearted wonderland.
          </p>
        </div>
      </section>

      {/* Main Philosophy Split layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Why We Started: Dr. Croft's Mission
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Years ago, our founder, <strong className="text-slate-800">Dr. James Croft</strong>, observed a recurring tragedy in pediatric dentistry: children with early cavities were frequently treated in adult dental environments with loud scary drills, restraining boards, and sterile setups. These traumatic experiences created deep-seated phobias that followed children into adulthood.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Texas Tiny Teeth was founded to change this completely. We reimagined everything—from the ground up—to establish a comforting, secure, and fun sanctuary. We believe that childhood is a critical window to wire children’s habits, and the dentist can actually be a place they beg to visit!
            </p>
            
            <div className="space-y-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                <Smile className="text-[#5BBEF7] w-5.5 h-5.5" />
                <span>The Redefined Dental Visit Path</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                We believe in a customized, patience-first pacing. Right upon arrival, our young patients explore colorful waiting zones with games. During the dental screening, they lie down with ceiling TVs and plush toys, while our specialized doctors demystify every tool with gentle, child-friendly naming. A toy of their choice concludes the magical visit.
              </p>
            </div>
          </div>

          {/* Right Column illustration block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#5BBEF7]/20 to-[#8EE3CF]/20 rounded-3xl p-8 border border-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Trophy className="w-40 h-40 text-slate-800" />
              </div>

              <h3 className="font-extrabold text-[#2a8abf] uppercase text-xs tracking-widest mb-4 block">THE BRUSHING CORE METRICS</h3>
              
              <ul className="space-y-4 text-xs sm:text-sm font-bold text-slate-700">
                {[
                  { text: '10+ Pediatric Dental Centers across DFW', color: 'text-[#5BBEF7]' },
                  { text: 'Board-Certified Specialists in Child Development', color: 'text-[#8EE3CF]' },
                  { text: '100% Mercury-Free Composite White Restore Options', color: 'text-[#FFB5D2]' },
                  { text: 'Specialized Sensory-Quiet Environments for Special Needs', color: 'text-[#FFD166]' },
                  { text: 'Comprehensive Nitrous Oxide (Laughing Gas) Safety Checks', color: 'text-[#5BBEF7]' },
                  { text: 'Fun Golden Token Tower Toy reinforcement rewards', color: 'text-[#8EE3CF]' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white/70 p-3.5 rounded-2xl border border-rose-50/50 shadow-xs">
                    <span className="text-lg">🍭</span>
                    <span className="leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Comfort guidelines & FAQ */}
      <section className="bg-slate-900 text-white py-16 border-y-4 border-[#8EE3CF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[#8EE3CF] text-xs font-black uppercase tracking-widest block">SUPERIOR CLINICAL STANDARDS</span>
            <h2 className="text-3xl font-semibold">How We Maximize Comfort & Hygiene</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
              We operate strictly under pediatric safety codes, sterilization guides, and the American Academy of Pediatric Dentistry recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'State-of-the-Art Sterilization',
                desc: 'All instruments are sterilized using certified autoclaves, and diagnostic suites rely on ultra-low-radiation digital dental x-rays for kid-safe scanning.',
                icon: ShieldCheck,
                col: 'text-[#8EE3CF]'
              },
              {
                title: 'Post-doctoral Pedodontic Degrees',
                desc: 'All our clinicians completed pediatric residencies that focus on childhood pathology, bone growth patterns, orthodontic predictions, and emergency dental rescues.',
                icon: Award,
                col: 'text-[#FFD166]'
              },
              {
                title: 'Cognitive Sensory Comfort',
                desc: 'For children with special requirements (e.g., high ADHD or sensory defensiveness), our environments can be adapted with dim lights, weighted items, and soundless units.',
                icon: Heart,
                col: 'text-[#FFB5D2]'
              }
            ].map((box, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition">
                <div className="w-12 h-12 rounded-2xl bg-slate-700 flex items-center justify-center text-white mb-4">
                  <box.icon className={`w-6 h-6 ${box.col}`} />
                </div>
                <h3 className="font-extrabold text-base mb-2 text-slate-100">{box.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <Sparkles className="w-12 h-12 text-[#FFD166] mx-auto animate-pulse" />
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">Ready to establish a loving Dental Home?</h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          We invite you and your children to visit our offices, meet the clinic managers, and tour the facility before scheduling clinical checks!
        </p>
        <button
          onClick={onOpenBooking}
          className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-md transition"
          id="about-cta-book"
        >
          Book Your Family's Tour Online
        </button>
      </section>

    </div>
  );
}
