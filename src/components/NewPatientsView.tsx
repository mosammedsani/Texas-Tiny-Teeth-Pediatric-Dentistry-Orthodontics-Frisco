import { motion } from 'motion/react';
import { ShieldCheck, Calendar, FileText, CheckCircle, Smile, Heart, Star, Compass, Info } from 'lucide-react';
import { useState } from 'react';

interface NewPatientsViewProps {
  onOpenBooking: () => void;
}

export default function NewPatientsView({ onOpenBooking }: NewPatientsViewProps) {
  const [downloadProgress, setDownloadProgress] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const triggerDownload = () => {
    setDownloadProgress(true);
    setDownloadSuccess(false);
    setTimeout(() => {
      setDownloadProgress(false);
      setDownloadSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Onboarding Banner */}
      <section className="bg-gradient-to-b from-[#5BBEF7]/15 via-[#8EE3CF]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#5BBEF7]/10 text-[#258bbc] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#5BBEF7]/20">
            PARENTS ONBOARDING GUIDE
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Welcome to Our Family!
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to prepare for your child's first visit. Learn about insurance coverage, patient documentation downloads, and cooperative pediatric workflows.
          </p>
        </div>
      </section>

      {/* Onboarding steps visual cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-8 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-[#5BBEF7] rounded-all"></span>
          Your First Visit Step-by-Step
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 'Step 1',
              title: 'Schedule Your Appointment',
              desc: 'Select your preferred office location online or call our coordinator. We will collect insurance details early to pre-verify benefits before you walk in.',
              col: 'bg-[#5BBEF7]/10 border-[#5BBEF7]'
            },
            {
              step: 'Step 2',
              title: 'Complete Onboarding Forms',
              desc: 'Download and fill out the patient documentation packets below. Taking completed papers to the front desk minimizes check-in delays entirely.',
              col: 'bg-[#8EE3CF]/15 border-[#8EE3CF]'
            },
            {
              step: 'Step 3',
              title: 'The Magical First Journey',
              desc: 'Our specialists will introduce dental instruments as funny characters (e.g. "Mr. Sunshine curing light") during checkups, with gold toy tokens afterward!',
              col: 'bg-[#FFD166]/15 border-[#FFD166]'
            }
          ].map((card, idx) => (
            <div key={idx} className={`rounded-3xl border p-6 space-y-4 shadow-sm bg-white hover:shadow-md transition`}>
              <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 py-1 px-2.5 rounded-lg inline-block">
                {card.step}
              </span>
              <h3 className="font-extrabold text-slate-800 text-base sm:text-lg">{card.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed parent advice & triggers checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Parent Guidance to prevent fear triggers */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-5">
          <span className="text-rose-500 text-xs uppercase font-black tracking-widest block flex items-center gap-1">
            <Heart className="w-4 h-4 fill-rose-500" /> PROACTIVE PARENT ADVICE
          </span>
          <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-snug">
            Common Dental Triggers to Avoid saying at home
          </h3>
          <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
            Children have active imaginations. Frequently, kids develop early alarm because they hear scary clinical dental terminology. We suggest utilizing simple playful modifications:
          </p>

          <div className="space-y-3.5 text-xs sm:text-sm">
            {[
              { wrong: 'Drill or needle', right: 'Mr. Whistle brush or Tickle dental broom' },
              { wrong: 'Shot or medicine', right: 'Calming tooth sleep jelly' },
              { wrong: 'Pulling your tooth out', right: 'Wiggling loose teeth to sleep under pillows' },
              { wrong: 'Cavity decay scraping', right: 'Sweeping out annoying sugar bugs' }
            ].map((term, idx) => (
              <div key={idx} className="flex gap-4 items-center justify-between border-b border-slate-100 pb-2 bg-slate-50/50 p-2.5 rounded-xl">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Avoid Saying:</span>
                  <span className="text-rose-500 font-extrabold tracking-tight">{term.wrong}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase text-right">Try Saying:</span>
                  <span className="text-emerald-500 font-extrabold tracking-tight text-right block">✨ {term.right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance listings and financing details */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[#5BBEF7] text-xs uppercase font-black tracking-widest block flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#5BBEF7]" /> INSURANCE AND MEDICAID ACCEPTED
            </span>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
              Affordable Care for All Families
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              We participate actively with a wide variety of Texas insurance networks, including Medicaid, CHIP, and leading commercial PPO providers.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-1">
              {[
                'Medicaid & CHIP accepted',
                'Delta Dental Partner',
                'MetLife Dental PPO',
                'Cigna Pediatric Care',
                'Blue Cross Blue Shield',
                'Aetna Dental PPO',
                'Guardian Partner',
                'Humana Dental PPO'
              ].map((ins, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-[#8EE3CF] shrink-0" />
                  <span>{ins}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#5BBEF7]/5 to-[#8EE3CF]/5 p-4 rounded-2xl border border-[#5BBEF7]/20 mt-4">
            <p className="text-[11px] text-slate-600 leading-relaxed flex gap-2">
              <Info className="w-4 h-4 text-[#5BBEF7] shrink-0" />
              <span>We also collaborate with CareCredit to offer flexible interest-free monthly installments for restorative crowns, sedation care, and other developmental dentistry.</span>
            </p>
          </div>
        </div>

      </section>

      {/* Forms download section */}
      <section className="bg-slate-900 border-t-8 border-[#8EE3CF] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <FileText className="w-12 h-12 text-[#8EE3CF] mx-auto animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-black">Download Patient Registration Packets</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Fill these out at your leisure on your dining table. Completed forms allow our front office staff to seat your child within minutes of arriving at the clinic.
          </p>

          <div className="pt-2">
            <button
              onClick={triggerDownload}
              disabled={downloadProgress}
              className="bg-[#5BBEF7] hover:bg-[#49aee0] disabled:bg-slate-750 text-slate-900 font-extrabold text-sm px-8 py-4.5 rounded-full shadow-lg transition tracking-wide inline-flex items-center gap-2 cursor-pointer"
              id="new-patients-forms-download-btn"
            >
              <span>{downloadProgress ? 'Generating Forms Document...' : 'Download Enrollment Forms PDF'}</span>
            </button>
            {downloadSuccess && (
              <p className="text-xs text-[#8EE3CF] font-bold block mt-3">
                ✔ Success! "Texas_Tiny_Teeth_Patient_Forms.pdf" downloaded to your local desktop folder.
              </p>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
