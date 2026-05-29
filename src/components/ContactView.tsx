import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOCATIONS } from '../data';
import { Mail, Phone, MapPin, Clock, Smile, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactView() {
  const [selectedCityId, setSelectedCityId] = useState(LOCATIONS[0].id);
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const selectedOffice = LOCATIONS.find((loc) => loc.id === selectedCityId) || LOCATIONS[0];

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
      setParentName('');
      setChildAge('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Dynamic Header Block */}
      <section className="bg-gradient-to-b from-[#5BBEF7]/10 via-[#8EE3CF]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#5BBEF7]/10 text-[#258bbc] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#5BBEF7]/20">
            CONNECT WITH A SMILEY ADVISOR
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Contact & Office Locations
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out to our offices across North Texas. Choose your closest clinic to view precise operating schedules, phone lines, map directions, and fill our inquiry form.
          </p>
        </div>
      </section>

      {/* Main Interactive Map & Contact split layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Clinic Switcher cards & Map frame */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h3 className="font-extrabold text-xs uppercase tracking-widest text-slate-400">CHOOSE A CLINIC CENTER:</h3>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedCityId(loc.id)}
                  className={`px-4.5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                    selectedCityId === loc.id
                      ? 'bg-slate-800 text-white shadow-md scale-102'
                      : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-700 shadow-xs'
                  }`}
                  id={`contact-loc-select-${loc.id}`}
                >
                  {loc.city}
                </button>
              ))}
            </div>
          </div>

          {/* Details of selected branch */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">PEDIATRIC CLINIC HUB</span>
                <h4 className="font-extrabold text-slate-800 text-lg sm:text-xl">{selectedOffice.name}</h4>
                <p className="text-[#5BBEF7] text-xs font-bold mt-0.5">Office Manager: {selectedOffice.manager}</p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#8EE3CF] shrink-0 mt-0.5" />
                  <span className="leading-snug">{selectedOffice.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#5BBEF7] shrink-0" />
                  <a href={`tel:${selectedOffice.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-slate-800 hover:underline">
                    {selectedOffice.phone} (Dial Direct)
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${selectedOffice.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-5 py-2.5 rounded-2xl text-xs font-bold shadow-sm transition inline-flex items-center gap-1.5"
                  id={`contact-loc-call-${selectedOffice.id}`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {selectedOffice.city} Office</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
              <h5 className="font-extrabold text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#8EE3CF]" /> Operations Schedule:
              </h5>
              <div className="space-y-2 text-xs text-slate-700">
                {selectedOffice.hours.map((hr, idx) => (
                  <span key={idx} className="block border-b border-rose-50/10 pb-1 font-medium italic">
                    {hr}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map Embedding Frame */}
          <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-md h-80 bg-slate-100 relative">
            {selectedOffice.mapEmbed ? (
              <iframe
                src={selectedOffice.mapEmbed}
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                title={`${selectedOffice.name} Map Navigator`}
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-xs flex-col gap-2">
                <MapPin className="w-8 h-8 text-slate-300" />
                <span>Map Coordinates preloading...</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Inquiry Messaging form */}
        <div className="lg:col-span-5 bg-white rounded-[32px] p-6.5 sm:p-8 border border-slate-100 shadow-md space-y-6">
          <div className="space-y-2">
            <span className="text-[#FFB5D2] text-xs font-black uppercase tracking-widest block">ONLINE INQUIRY DESK</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">Have an Quick Question?</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Have questions regarding pediatric sedation, special needs rooms, or multi-child bookings? Fill our swift form and our regional coordinator will reply in hours.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1" htmlFor="pName">Parent or Guardian Name:</label>
              <input
                type="text"
                id="pName"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="e.g. Jessica M."
                className="w-full bg-slate-50 border border-slate-200 outline-none p-3.5 rounded-xl text-xs sm:text-sm focus:border-[#5BBEF7]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1" htmlFor="cAge">Child's Name &amp; Age:</label>
                <input
                  type="text"
                  id="cAge"
                  required
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  placeholder="e.g. Liam, 4"
                  className="w-full bg-slate-50 border border-slate-200 outline-none p-3.5 rounded-xl text-xs sm:text-sm focus:border-[#5BBEF7]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Preferred Location Office:</label>
                <select
                  value={selectedCityId}
                  onChange={(e) => setSelectedCityId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 outline-none p-3.5 rounded-xl text-xs sm:text-sm focus:border-[#5BBEF7]"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.id}>{loc.city}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1" htmlFor="emailInput">Email Address:</label>
                <input
                  type="email"
                  id="emailInput"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="test@example.com"
                  className="w-full bg-slate-50 border border-slate-200 outline-none p-3.5 rounded-xl text-xs focus:border-[#5BBEF7]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1" htmlFor="phoneInput">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneInput"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(123) 456-7890"
                  className="w-full bg-slate-50 border border-slate-200 outline-none p-3.5 rounded-xl text-xs focus:border-[#5BBEF7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1" htmlFor="msg">Your Message:</label>
              <textarea
                id="msg"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="How may our pedodontic team serve your child?"
                className="w-full bg-slate-50 border border-slate-200 outline-none p-3.5 rounded-xl text-xs focus:border-[#5BBEF7] transition"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-400 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition shadow cursor-pointer"
                id="contact-form-submit-btn"
              >
                <span>{submitting ? 'Sending Request Info...' : 'Send Inquiry Message'}</span>
              </button>
            </div>

            {submitSuccess && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#8EE3CF]/20 text-[#1b735f] text-xs font-bold p-4 rounded-xl border border-[#8EE3CF] flex items-center gap-2 mt-4"
                >
                  <Check className="w-5 h-5 shrink-0" />
                  <span>Your query has been sent successfully! Our regional clinic coordinator will callback shortly.</span>
                </motion.div>
              </AnimatePresence>
            )}

          </form>
        </div>

      </section>

    </div>
  );
}
