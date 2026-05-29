import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, DollarSign, Award, Heart, Check, Users, FileText, Smile, Send, Star } from 'lucide-react';

interface CareersViewProps {
  onOpenBooking: () => void;
}

interface Position {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  requirements: string[];
}

const POSITIONS: Position[] = [
  {
    id: 'pos-1',
    title: 'Pediatric Dental Assistant',
    location: 'Frisco & Melissa, TX',
    type: 'Full-time',
    salary: '$22 - $28 / hour + Benefits',
    requirements: [
      'Active Texas Registered Dental Assistant (RDA) license',
      'Minimum 1 year of experience working in pediatric dentistry',
      'Warm, positive attitude with natural clinical patience',
      'Nitrous Oxide monitoring certificate is a big plus'
    ]
  },
  {
    id: 'pos-2',
    title: 'Registered Dental Hygienist (RDH)',
    location: 'Greenville & Athens, TX',
    type: 'Full-time / Part-time',
    salary: '$42 - $50 / hour + Retention Bonus',
    requirements: [
      'Current Texas RDH licensure in good standing',
      'Outstanding child behavioral management abilities',
      'Patience in performing gentle, trauma-free cleanings',
      'Desire to educate parents on dietary brushing charts'
    ]
  },
  {
    id: 'pos-3',
    title: 'Front Office Coordinator',
    location: 'Irving & Corsicana, TX',
    type: 'Full-time',
    salary: '$18 - $24 / hour',
    requirements: [
      'Excellent verbal communication and family reception skills',
      'Experience filing Texas Medicaid or PPO dental insurance claims',
      'High proficiency with modern dental scheduling software',
      'Bilingual (English/Spanish) is highly desired'
    ]
  }
];

export default function CareersView({ onOpenBooking }: CareersViewProps) {
  const [selectedPositionId, setSelectedPositionId] = useState<string>('pos-1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Pediatric Dental Assistant',
    experience: '1-3 years',
    about: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: 'Pediatric Dental Assistant',
          experience: '1-3 years',
          about: '',
        });
      }, 6000);
    }
  };

  const activePosition = POSITIONS.find(p => p.id === selectedPositionId) || POSITIONS[0];

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Cinematic Header Block */}
      <section className="bg-gradient-to-b from-[#8EE3CF]/15 via-[#5BBEF7]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-white px-3.5 py-1.5 rounded-full text-xs font-black text-slate-700 uppercase tracking-widest inline-block border border-slate-200 shadow-xs">
            🌟 WORK WITH THE MAGIC SQUAD
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Join the Texas Tiny Teeth Family
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            We are dedicated to building a high-support, high-morale team culture. Help children discover happy clinical visits, build healthy routines, and develop magical smiles.
          </p>
        </div>
      </section>

      {/* Culture Benefits Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Sensory-Sensitivity Support',
              desc: 'Learn advanced, compassionate behavioral methods for children with sensory conditions, ADHD, or autism.',
              icon: <Heart className="w-6 h-6 text-[#FFB5D2]" />
            },
            {
              title: 'Beautiful Modern Clinics',
              desc: 'Work in spacious pediatric clinics loaded with child entertainment ceiling screens and positive vibes.',
              icon: <Users className="w-6 h-6 text-[#5BBEF7]" />
            },
            {
              title: 'Premium Pay & Supervision',
              desc: 'Enjoy competitive hourly rates, paid training, standard matching 401(k), and board-certified growth.',
              icon: <Award className="w-6 h-6 text-[#FFD166]" />
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
              <div className="p-3 bg-slate-50 rounded-2xl w-fit">
                {benefit.icon}
              </div>
              <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main split-layout content: interactive careers listing & forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: List of positions */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-extrabold text-xs uppercase tracking-widest text-slate-400 pl-1 block">
              AVAILABLE TEXAS POSITIONS
            </h3>

            <div className="space-y-4">
              {POSITIONS.map((pos) => {
                const isSelected = selectedPositionId === pos.id;
                return (
                  <button
                    key={pos.id}
                    onClick={() => {
                      setSelectedPositionId(pos.id);
                      setFormData(prev => ({ ...prev, position: pos.title }));
                    }}
                    className={`w-full text-left p-5 rounded-3xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-slate-800 border-slate-800 text-white shadow-md scale-101'
                        : 'bg-white hover:bg-slate-50 border-slate-100/80 text-slate-700'
                    }`}
                    id={`pos-tab-${pos.id}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <span className="font-black text-sm sm:text-base block">{pos.title}</span>
                        <div className={`flex flex-wrap items-center gap-3 text-xs font-semibold ${isSelected ? 'text-[#8EE3CF]' : 'text-slate-400'}`}>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> {pos.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" /> {pos.type}
                          </span>
                        </div>
                      </div>

                      <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase self-start sm:self-center shrink-0 ${
                        isSelected ? 'bg-white/10 text-white border border-white/20' : 'bg-[#5BBEF7]/15 text-[#2587bb]'
                      }`}>
                        View Details
                      </span>
                    </div>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="border-t border-white/10 mt-4 pt-4 space-y-3 text-white/90"
                      >
                        <div className="flex items-center gap-1 text-xs text-[#FFD166] font-bold">
                          <DollarSign className="w-3.5 h-3.5" />
                          <span>Estimated Pay: {pos.salary}</span>
                        </div>
                        <div className="space-y-1.5 text-xs">
                          <span className="font-black uppercase tracking-wider block text-[#8EE3CF]">Core Requirements:</span>
                          <ul className="space-y-1 pl-2">
                            {pos.requirements.map((req, rIdx) => (
                              <li key={rIdx} className="flex gap-2 items-start text-white/80 leading-relaxed">
                                <Check className="w-3.5 h-3.5 text-[#8EE3CF] shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Application form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-md">
              <div className="border-b border-slate-100 pb-4 mb-5 space-y-1">
                <span className="bg-[#5BBEF7]/15 text-[#278ebb] text-[10px] uppercase tracking-widest font-black py-0.5 px-3 rounded-full inline-block">
                  PRE-APPLICATION SUBMITTAL
                </span>
                <h3 className="font-extrabold text-slate-800 text-lg leading-tight">Apply to the Magic Squad</h3>
                <p className="text-xs text-slate-400">Selected position: {formData.position}</p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#8EE3CF]/20 text-[#2c816e] flex items-center justify-center mx-auto shadow-inner">
                      <Smile className="w-10 h-10 text-[#8EE3CF]" />
                    </div>
                    <h3 className="font-extrabold text-slate-800 text-lg leading-tight">Your Application Saved!</h3>
                    <p className="text-slate-500 text-xs sm:text-sm pl-4 pr-4 leading-relaxed max-w-sm mx-auto">
                      Thank you, {formData.name}! Our HR coordinators at Texas Tiny Teeth will review your experience and phone you shortly if qualifications match. Keep smiling!
                    </p>
                    <div className="pt-2 text-xs font-bold text-slate-400">
                      Processing confirmation email...
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm text-slate-850 outline-none focus:border-[#5BBEF7] focus:bg-white transition-all"
                        id="career-form-name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="johndoe@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm text-slate-850 outline-none focus:border-[#5BBEF7] focus:bg-white transition-all"
                          id="career-form-email"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Phone</label>
                        <input
                          type="tel"
                          required
                          placeholder="(903) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm text-slate-850 outline-none focus:border-[#5BBEF7] focus:bg-white transition-all"
                          id="career-form-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Relevant Experience</label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm text-slate-850 outline-none focus:border-[#5BBEF7] focus:bg-white transition-all"
                        id="career-form-exp"
                      >
                        <option>Less than 1 year</option>
                        <option>1-3 years</option>
                        <option>3-5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Why would you love to join us?</label>
                      <textarea
                        rows={3}
                        placeholder="Detail minor pediatric certifications, soft care approaches, or clinical interests..."
                        value={formData.about}
                        onChange={(e) => setFormData(prev => ({ ...prev, about: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm text-slate-850 outline-none focus:border-[#5BBEF7] focus:bg-white transition-all resize-none"
                        id="career-form-about"
                      />
                    </div>

                    {/* Resume Upload note placeholder */}
                    <div className="border border-dashed border-slate-200 p-4 rounded-xl text-center text-slate-400 space-y-1 bg-slate-50/50">
                      <FileText className="w-5 h-5 text-slate-300 mx-auto" />
                      <span className="block text-xs font-bold text-slate-500">Applicant Resume attachment</span>
                      <span className="block text-[10px]">Upload resumes during face-to-face screenings.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-sm transition cursor-pointer flex items-center justify-center gap-2"
                      id="career-submit-btn"
                    >
                      <Send className="w-4 h-4 text-[#8EE3CF]" />
                      <span>Submit Candidate Application</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
