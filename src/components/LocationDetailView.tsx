import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, User, Calendar, Check, Smile, Star, Shield, HelpCircle, AlertCircle } from 'lucide-react';
import { ActiveView, ClinicLocation } from '../types';
import { LOCATIONS } from '../data';

interface LocationDetailViewProps {
  view: ActiveView;
  onOpenBooking: () => void;
}

export default function LocationDetailView({ view, onOpenBooking }: LocationDetailViewProps) {
  // Extract the location ID from the active view (e.g., 'location-athens' -> 'athens')
  const locationId = view.replace('location-', '');
  
  // Find correct clinic location details from database
  const clinic = LOCATIONS.find((l) => l.id === locationId) || LOCATIONS[0];

  const [bookingName, setBookingName] = useState('');
  const [bookingChild, setBookingChild] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleLocalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (bookingName && bookingPhone && bookingDate) {
      setBookingSubmitted(true);
      setTimeout(() => {
        setBookingSubmitted(false);
        setBookingName('');
        setBookingChild('');
        setBookingPhone('');
        setBookingDate('');
      }, 5000);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Cinematic Header Block */}
      <section className="bg-gradient-to-b from-[#5BBEF7]/15 via-[#8EE3CF]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-white px-3.5 py-1.5 rounded-full text-xs font-black text-slate-700 uppercase tracking-widest inline-block border border-slate-200 shadow-xs">
            📍 NEIGHBORHOOD NORTH TEXAS CLINIC
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Texas Tiny Teeth — {clinic.city}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            Delivering modern, pediatric and orthodontics wellness to children, toddlers, and teenagers in {clinic.city} and neighboring families.
          </p>
        </div>
      </section>

      {/* Main Details and Side booking form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Branch core info */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-md space-y-6 flex-grow flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <h3 className="font-extrabold text-slate-800 text-lg sm:text-xl">Clinic Directory and Contact</h3>
                  <span className="bg-[#8EE3CF]/15 text-[#1a6252] text-xs font-bold py-1 px-3 rounded-full">
                    Accepting New Patients
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Address */}
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-slate-400 text-xs uppercase tracking-widest flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#5BBEF7]" /> PHYSICAL ADDRESS:
                    </h4>
                    <p className="text-slate-700 text-sm font-semibold leading-relaxed">
                      {clinic.address}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#5BBEF7] font-black hover:underline inline-block mt-1"
                      id="clinic-get-directions"
                    >
                      Get Driving Directions →
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-slate-400 text-xs uppercase tracking-widest flex items-center gap-1">
                      <Phone className="w-4 h-4 text-[#8EE3CF]" /> PHONE NUMBER:
                    </h4>
                    <a
                      href={`tel:${clinic.phone.replace(/[^0-9]/g, '')}`}
                      className="text-slate-800 text-lg sm:text-xl font-black hover:text-[#5BBEF7] transition-all block"
                      id="clinic-call"
                    >
                      {clinic.phone}
                    </a>
                    <span className="text-[10px] text-slate-400 block font-semibold leading-none uppercase">
                      General inquiry & Direct Scheduling Line
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Hours */}
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-slate-400 text-xs uppercase tracking-widest flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#FFD166]" /> CLINIC HOURS:
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-1 font-medium">
                      {clinic.hours.map((hr, idx) => (
                        <li key={idx} className="flex justify-between md:block leading-relaxed">
                          {hr}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Manager and Supervision */}
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-slate-400 text-xs uppercase tracking-widest flex items-center gap-1">
                      <User className="w-4 h-4 text-[#FFB5D2]" /> CLINICAL MANAGER:
                    </h4>
                    <p className="text-slate-700 text-sm font-bold">
                      {clinic.manager}
                    </p>
                    <span className="text-xs text-slate-400 block leading-snug">
                      Supervising Pediatric Dental Director
                    </span>
                  </div>
                </div>
              </div>

              {/* Patient comfort notice */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 mt-6 space-y-2">
                <span className="font-black text-[#5BBEF7] text-xs uppercase tracking-wider block">
                  🛡️ Complete Sensory Protection
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our {clinic.city} pediatric clinic is equipped with a complete suite of kid accommodations. We feature custom ceiling televisions, warm noise-muffling filters, weighted anxiety-reducing blankets, and soft organic pediatric paste choices. We welcome special needs family cooperation!
                </p>
              </div>

            </div>

            {/* Map Embed Container */}
            <div className="bg-white rounded-[32px] border border-slate-100 p-4 shadow-md h-72 overflow-hidden relative">
              <iframe
                title={`Google Map - ${clinic.name}`}
                src={clinic.mapEmbed}
                className="w-full h-full border-0 rounded-[20px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Local Branch Appointment Scheduler */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-md h-full flex flex-col justify-between">
              
              <div>
                <div className="border-b border-indigo-50/50 pb-4 mb-6 space-y-1">
                  <span className="bg-[#5BBEF7]/15 text-[#2189bc] font-black tracking-widest text-[9px] uppercase px-3 py-1 rounded-full">
                    SMILEY APPOINTMENT COORDINATOR
                  </span>
                  <h3 className="font-extrabold text-slate-800 text-lg leading-tight">
                    Visit {clinic.city} Office
                  </h3>
                  <p className="text-xs text-slate-400">Schedule care selections with our pediatric dentists.</p>
                </div>

                <AnimatePresence mode="wait">
                  {bookingSubmitted ? (
                    <motion.div
                      key="local-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#8EE3CF]/20 text-[#12725e] flex items-center justify-center mx-auto shadow-inner">
                        <Smile className="w-10 h-10 text-[#8EE3CF]" />
                      </div>
                      <h3 className="font-black text-slate-800 text-lg">Appointment Submitted!</h3>
                      <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                        We have received your appointment request for our **{clinic.city} clinic**! Our branch coordinators will phone you at **{bookingPhone}** shortly to confirm your scheduled time slot.
                      </p>
                      <div className="pt-3 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                        Thank you for trusting Texas Tiny Teeth!
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleLocalSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Parent Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-[#5BBEF7] focus:bg-white transition-all text-slate-850"
                          id="local-booking-parent"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Child's Name &amp; Age (Optional)</label>
                        <input
                          type="text"
                          placeholder="Timmy (Age 5)"
                          value={bookingChild}
                          onChange={(e) => setBookingChild(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-[#5BBEF7] focus:bg-white transition-all text-slate-850"
                          id="local-booking-child"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Phone Number</label>
                          <input
                            type="tel"
                            required
                            placeholder="(903) 123-4567"
                            value={bookingPhone}
                            onChange={(e) => setBookingPhone(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-[#5BBEF7] focus:bg-white transition-all text-slate-850"
                            id="local-booking-phone"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Requested Date</label>
                          <input
                            type="date"
                            required
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-[#5BBEF7] focus:bg-white transition-all text-slate-850"
                            id="local-booking-date"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-slate-800 hover:bg-slate-700 text-white font-black text-sm py-3.5 px-4 rounded-xl shadow-sm transition cursor-pointer flex items-center justify-center gap-2"
                          id="local-booking-submit-btn"
                        >
                          <Calendar className="w-4 h-4 text-[#8EE3CF]" />
                          <span>Request Scheduled Visit</span>
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>

              {/* Short local directory list */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-start gap-3 text-slate-400">
                <AlertCircle className="w-5 h-5 text-[#5BBEF7] shrink-0 mt-0.5" />
                <p className="text-[10px] leading-relaxed">
                  Notice: Appointment submissions do not guarantee instant time retention. Our {clinic.city} front office will call you within one business hour to cement your actual reservation.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
