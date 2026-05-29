import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveView } from './types';
import { LOCATIONS } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import DoctorsView from './components/DoctorsView';
import NewPatientsView from './components/NewPatientsView';
import SedationView from './components/SedationView';
import SpecialNeedsView from './components/SpecialNeedsView';
import ServiceDetailView from './components/ServiceDetailView';
import BlogView from './components/BlogView';
import CareersView from './components/CareersView';
import LocationDetailView from './components/LocationDetailView';
import ReviewsView from './components/ReviewsView';
import ContactView from './components/ContactView';
import { Calendar, Smile, X, Phone, CheckCircle, Clock, MapPin, Sparkles, Star } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  
  // Booking Wizard State
  const [selectedCity, setSelectedCity] = useState(LOCATIONS[0].city);
  const [careType, setCareType] = useState('Gentle Cleaning & Oral Checkup');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [wizardReferenceID] = useState(() => `TT-${Math.floor(100000 + Math.random() * 900000)}`);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBookingStep(4);
  };

  const resetBookingForm = () => {
    setBookingOpen(false);
    setTimeout(() => {
      setBookingStep(1);
      setSelectedDate('');
      setSelectedTimeSlot('');
      setParentName('');
      setChildName('');
      setEmailAddress('');
      setPhoneNo('');
    }, 300);
  };

  // Helper routine to render the appropriate active view content
  const renderView = () => {
    if (activeView.startsWith('services-')) {
      if (activeView === 'services-special-needs') {
        return <SpecialNeedsView onOpenBooking={() => setBookingOpen(true)} />;
      }
      return <ServiceDetailView view={activeView} onOpenBooking={() => setBookingOpen(true)} />;
    }

    if (activeView.startsWith('location-')) {
      return <LocationDetailView view={activeView} onOpenBooking={() => setBookingOpen(true)} />;
    }

    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={setActiveView} onOpenBooking={() => setBookingOpen(true)} />;
      case 'about':
        return <AboutView onOpenBooking={() => setBookingOpen(true)} />;
      case 'doctors':
        return <DoctorsView onOpenBooking={() => setBookingOpen(true)} />;
      case 'new-patients':
        return <NewPatientsView onOpenBooking={() => setBookingOpen(true)} />;
      case 'blog':
        return <BlogView onOpenBooking={() => setBookingOpen(true)} />;
      case 'careers':
        return <CareersView onOpenBooking={() => setBookingOpen(true)} />;
      case 'sedation':
        return <SedationView onOpenBooking={() => setBookingOpen(true)} />;
      case 'reviews':
        return <ReviewsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={setActiveView} onOpenBooking={() => setBookingOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-[#FAFAFA]">
      
      {/* Playful and Sticky Header */}
      <Header
        activeView={activeView}
        onNavigate={setActiveView}
        onOpenBooking={() => {
          setBookingStep(1);
          setBookingOpen(true);
        }}
      />

      {/* Main Viewport containing soft page transition animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Organized premium footer */}
      <Footer
        onNavigate={setActiveView}
        onOpenBooking={() => {
          setBookingStep(1);
          setBookingOpen(true);
        }}
      />

      {/* STICKY FLOATING MOBILE/DESKTOP APPOINTMENT CALL TRIGGER ACCELERATES BOOKINGS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Playful Floating text reminder */}
        <div className="bg-slate-900 border border-slate-800 hidden md:flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl shadow-xl text-white text-xs font-bold animate-bounce pointer-events-auto">
          <span>Need a Pediatric Dentist?</span>
          <Smile className="w-4 h-4 text-[#FFD166] fill-[#FFD166]" />
        </div>

        <button
          onClick={() => {
            setBookingStep(1);
            setBookingOpen(true);
          }}
          className="bg-gradient-to-r from-[#5BBEF7] via-[#8EE3CF] to-[#FFD166] hover:scale-105 active:scale-95 text-slate-900 font-extrabold px-6 py-4 rounded-full shadow-2xl transition duration-200 pointer-events-auto cursor-pointer flex items-center gap-2.5 border border-white"
          id="sticky-booking-trigger"
        >
          <Calendar className="w-5.5 h-5.5 text-slate-900 fill-slate-900/10" />
          <span>Schedule Care</span>
        </button>

      </div>

      {/* INTERACTIVE APPOINTMENT SCHEDULING MODAL WIZARD */}
      <AnimatePresence>
        {bookingOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[32px] shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]"
            >
              
              {/* Modal header with active stage counter */}
              <div className="p-6 bg-gradient-to-r from-[#5BBEF7]/10 via-[#8EE3CF]/15 to-transparent border-b border-rose-50/50 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                  <Smile className="text-[#5BBEF7] w-6 h-6" />
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-base leading-none">Booking Scheduler</h3>
                    <span className="text-[10px] text-slate-400 font-bold block mt-1 uppercase">
                      Texas Tiny Teeth Pediatric Specialists
                    </span>
                  </div>
                </div>
                <button
                  onClick={resetBookingForm}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                  id="modal-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress counter indicators */}
              <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 shrink-0">
                <span>Wizard Progress:</span>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                        bookingStep === step
                          ? 'bg-[#5BBEF7] text-white'
                          : bookingStep > step
                          ? 'bg-[#8EE3CF] text-slate-800'
                          : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Forms Viewport (Scrollable container internally) */}
              <div className="p-6 overflow-y-auto flex-grow space-y-4">
                
                {/* Stage 1: Location & Treatment Selection */}
                {bookingStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                      Step 1: Select Clinic Branch & Treatment Type
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Preferred Office Clinic:</label>
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="w-full bg-slate-50 text-slate-800 text-sm font-semibold p-4 rounded-2xl border border-slate-200 outline-none focus:border-[#5BBEF7]"
                        >
                          {LOCATIONS.map((loc) => (
                            <option key={loc.id} value={loc.city}>
                              {loc.name} - {loc.phone}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Desired Treatment / Reason:</label>
                        <select
                          value={careType}
                          onChange={(e) => setCareType(e.target.value)}
                          className="w-full bg-slate-50 text-slate-800 text-sm font-semibold p-4 rounded-2xl border border-slate-200 outline-none focus:border-[#5BBEF7]"
                        >
                          <option value="Gentle Cleaning & Oral Checkup">Gentle Cleaning & Dental Checkup Visit</option>
                          <option value="Fluoride Shield Coating">Enamel-Boosting Fluoride Protection</option>
                          <option value="Deep Molar Dental Sealant">Deep Molar Sealing Protection</option>
                          <option value="Conscious Sedation Dentistry">Conscious Sedation / Laughing Gas Consultation</option>
                          <option value="Special Needs Sensory Room Accommodations">Special Needs Sensory Support Appointment</option>
                          <option value="Aesthetics Crown & Fillings Restoration">White Fillings & "Toy Hat" Crowns Restoration</option>
                          <option value="Emergency Toothache or Swelling Rescue">Emergency Toothache / Swelling Service</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setBookingStep(2)}
                        className="w-full bg-[#5BBEF7] hover:bg-[#49aee0] text-slate-900 font-extrabold text-sm py-4 rounded-2xl shadow transition"
                        id="booking-step1-next"
                      >
                        Proceed to Dates & Slots
                      </button>
                    </div>
                  </div>
                )}

                {/* Stage 2: Date & Hour Slots Selector */}
                {bookingStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                      Step 2: When should we celebrate your visit?
                    </h4>

                    <div className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Select Preferred Date:</label>
                        <input
                          type="date"
                          required
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full bg-slate-50 text-slate-800 font-semibold p-4.5 rounded-2xl border border-slate-200 outline-none focus:border-[#5BBEF7] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Available Daily Slots:</label>
                        <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                          {[
                            '8:30 AM (Available)',
                            '10:00 AM (Limited)',
                            '11:30 AM (Available)',
                            '1:30 PM (Cozy)',
                            '3:00 PM (Available)',
                            '4:15 PM (Limited)'
                          ].map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTimeSlot(slot.split(' ')[0] + ' ' + slot.split(' ')[1])}
                              className={`p-3 rounded-2xl border transition text-center cursor-pointer ${
                                selectedTimeSlot === slot.split(' ')[0] + ' ' + slot.split(' ')[1]
                                  ? 'bg-[#8EE3CF] border-[#258a74] text-slate-800'
                                  : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100'
                              }`}
                              id={`booking-slot-${slot.split(' ')[0]}`}
                            >
                              <span>{slot}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <button
                        onClick={() => setBookingStep(1)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold py-3.5 rounded-2xl text-xs sm:text-sm"
                        id="booking-step2-prev"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setBookingStep(3)}
                        disabled={!selectedDate || !selectedTimeSlot}
                        className="bg-[#5BBEF7] hover:bg-[#49aee0] disabled:bg-slate-200 text-white font-extrabold py-3.5 rounded-2xl text-xs sm:text-sm shadow"
                        id="booking-step2-next"
                      >
                        Proceed to Parent Details
                      </button>
                    </div>
                  </div>
                )}

                {/* Stage 3: Parent & Kid inputs */}
                {bookingStep === 3 && (
                  <form onSubmit={handleBookingSubmit} className="space-y-4 animate-fade-in">
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                      Step 3: Family Contact Information
                    </h4>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-450 uppercase mb-1">Parent or Guardian Name:</label>
                          <input
                            type="text"
                            required
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="e.g. Sandra V."
                            className="w-full bg-slate-50 p-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#5BBEF7]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-450 uppercase mb-1">Child's Name & Age:</label>
                          <input
                            type="text"
                            required
                            value={childName}
                            onChange={(e) => setChildName(e.target.value)}
                            placeholder="e.g. Tommy, 5"
                            className="w-full bg-slate-50 p-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#5BBEF7]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-450 uppercase mb-1">Email Address:</label>
                          <input
                            type="email"
                            required
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            placeholder="test@example.com"
                            className="w-full bg-slate-50 p-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#5BBEF7]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-450 uppercase mb-1">Phone Number:</label>
                          <input
                            type="tel"
                            required
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                            placeholder="(123) 456-7890"
                            className="w-full bg-slate-50 p-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#5BBEF7]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold py-3.5 rounded-2xl text-xs"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!parentName || !childName || !emailAddress || !phoneNo}
                        className="bg-[#5BBEF7] hover:bg-[#49aee0] disabled:bg-slate-200 text-white font-extrabold py-3.5 rounded-2xl text-xs shadow cursor-pointer"
                        id="booking-form-submit"
                      >
                        Confirm Booking Reservation
                      </button>
                    </div>
                  </form>
                )}

                {/* Stage 4: SUCCESS WITH DETAILED VIRTUAL CODES */}
                {bookingStep === 4 && (
                  <div className="space-y-5 text-center py-6 animate-scale-in">
                    <CheckCircle className="w-16 h-16 text-[#8EE3CF] stroke-2 mx-auto" />
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Your Slot is Reserved!</h4>
                      <p className="text-[#5BBEF7] text-xs font-black uppercase tracking-widest mt-1 block">
                        TEXAS TINY TEETH CONFIRMED
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-250 text-xs text-left text-slate-700 space-y-2.5">
                      <div className="flex justify-between font-bold">
                        <span className="text-slate-400">Confirmation code:</span>
                        <span className="text-slate-800 font-mono text-[#2fa08d] font-bold">{wizardReferenceID}</span>
                      </div>
                      <div className="h-px bg-slate-200"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <strong className="text-slate-400 block font-normal text-[10px] uppercase">Selected Clinic:</strong>
                          <span className="font-extrabold">{selectedCity} Branch</span>
                        </div>
                        <div>
                          <strong className="text-slate-400 block font-normal text-[10px] uppercase">Reserved Time:</strong>
                          <span className="font-extrabold">{selectedDate} @ {selectedTimeSlot}</span>
                        </div>
                      </div>
                      <div className="h-px bg-slate-200"></div>
                      <div>
                        <strong className="text-slate-400 block font-normal text-[10px] uppercase">Registered Child:</strong>
                        <span className="font-extrabold">👶 {childName}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Our office manager will call you within 2 business hours to verify insurance and finalize registration. Please download client registration packets under "New Patients" resources!
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={resetBookingForm}
                        className="bg-[#5BBEF7] hover:bg-[#49aee0] text-slate-900 font-extrabold text-sm px-8 py-3.5 rounded-full shadow cursor-pointer"
                        id="booking-finalize-btn"
                      >
                        Got It, Sparkle Time!
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
