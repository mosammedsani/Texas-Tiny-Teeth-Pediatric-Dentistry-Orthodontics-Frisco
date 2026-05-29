import { motion } from 'motion/react';
import { Smile, Star, ShieldCheck, Heart, Sparkles, Award, ArrowRight, MapPin, Phone, Compass, Gift, CalendarRange } from 'lucide-react';
import { ActiveView } from '../types';
import { DOCTORS, SERVICES, REVIEWS, OFFICE_GALLERY_IMAGES, LOCATIONS } from '../data';
import { useState } from 'react';
const heroImg = '/src/assets/images/hero_happy_smiling_child_1780073015351.png';
const pediatricHygieneImg = '/src/assets/images/pediatric_dental_hygiene_1780073040923.png';

interface HomeViewProps {
  onNavigate: (view: ActiveView) => void;
  onOpenBooking: () => void;
}

export default function HomeView({ onNavigate, onOpenBooking }: HomeViewProps) {
  const [selectedCityId, setSelectedCityId] = useState(LOCATIONS[0].id);

  const selectedClinic = LOCATIONS.find(loc => loc.id === selectedCityId) || LOCATIONS[0];

  return (
    <div className="bg-[#FAFAFA] overflow-hidden">
      
      {/* 1. Cinematic Pediatric Hero Section */}
      <section className="relative min-h-screen pt-28 pb-20 flex items-center bg-gradient-to-b from-[#5BBEF7]/10 via-[#8EE3CF]/5 to-transparent relative">
        {/* Floating playful background bubbles */}
        <div className="absolute top-24 left-[10%] w-16 h-16 rounded-full bg-[#5BBEF7]/15 blur-sm animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-24 right-[15%] w-24 h-24 rounded-full bg-[#8EE3CF]/15 blur-md animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-[5%] w-12 h-12 rounded-full bg-[#FFD166]/15 blur-sm animate-pulse"></div>
        <div className="absolute top-36 right-[40%] w-8 h-8 rounded-full bg-[#FFB5D2]/15 blur-xs animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text Box */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BBEF7]/10 text-slate-800 font-bold text-xs sm:text-sm shadow-sm border border-[#5BBEF7]/20">
                <Star className="w-4 h-4 text-[#FFD166] fill-[#FFD166]" />
                <span>Premium Pediatric Dental Care in North Texas</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                Tiny Teeth,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BBEF7] to-[#8EE3CF] drop-shadow-sm font-black">
                  Big Bright Smiles!
                </span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Welcome to Texas Tiny Teeth! We offer gentle, board-certified pediatric dentistry, dental sealants, and laughing gas sedation in a whimsical environment. Built so your little superhero looks forward to dentist visits!
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-8 py-4 rounded-full font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
                  id="hero-schedule-btn"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5 animate-pulse" />
                </button>
                <button
                  onClick={() => onNavigate('doctors')}
                  className="bg-white border-2 border-slate-200 hover:border-[#8EE3CF] text-slate-700 hover:text-slate-900 px-8 py-4 rounded-full font-extrabold text-base transition-all cursor-pointer"
                  id="hero-doctors-btn"
                >
                  Meet Our Doctors
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-8 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { text: 'Gentle Pediatric Specialty', icon: Heart, iconCol: 'text-rose-400' },
                  { text: 'Kid-Friendly Fun Setup', icon: Smile, iconCol: 'text-[#5BBEF7]' },
                  { text: 'Board-Certified Care', icon: Award, iconCol: 'text-[#FFD166]' },
                  { text: 'Sedation & Safety Focus', icon: ShieldCheck, iconCol: 'text-[#8EE3CF]' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-left bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-rose-50/50 shadow-xs">
                    <div className="p-1.5 rounded-xl bg-slate-50">
                      <item.icon className={`w-5 h-5 ${item.iconCol}`} />
                    </div>
                    <span className="text-xs font-bold font-sans text-slate-700 leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Hero Image / Animated Playground Graphic */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]">
                {/* Visual outline circles */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#8EE3CF]/40 animate-spin" style={{ animationDuration: '40s' }}></div>
                <div className="absolute inset-4 rounded-full border border-spacing-2 border-[#5BBEF7]/30 rotate-45"></div>

                {/* Main Hero Photo Container with custom rounded blob border */}
                <div className="absolute inset-8 rounded-[40px_80px_50px_90px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img
                    src={heroImg}
                    alt="Happy smiling child with healthy teeth"
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Float badges on hero image */}
                <div className="absolute -top-2 -left-2 bg-white/95 backdrop-blur-xs shadow-lg rounded-2xl p-4 flex items-center gap-3 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-[#FFD166] flex items-center justify-center font-bold text-slate-900 text-lg">
                    ⭐
                  </div>
                  <div>
                    <span className="block text-xs font-black text-slate-800">10,000+</span>
                    <span className="block text-[10px] text-slate-500 font-bold">DFW Tiny Smiles Sparkled</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-xs shadow-lg rounded-2xl p-4 flex items-center gap-3 border border-slate-100">
                  <Smile className="w-8 h-8 text-[#5BBEF7]" />
                  <div>
                    <span className="block text-xs font-black text-slate-800">100% Gentle</span>
                    <span className="block text-[10px] text-slate-500 font-bold">Sensory Comfort Guarantee</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Interactive Clinic Location quick widget */}
      <section className="bg-white py-12 border-y border-spacing-1 border-rose-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#5BBEF7]/10 via-[#8EE3CF]/15 to-transparent rounded-3xl p-6 sm:p-8 border border-[#5BBEF7]/20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-[#5BBEF7] font-black text-xs uppercase tracking-widest block">FIND THE NEAREST CLINIC</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Choose Your Location:</h2>
              <p className="text-slate-600 text-sm max-w-md">
                We manage multiple state-of-the-art dental centers in Texas. Check options to call or schedule a visit.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 w-full lg:w-auto">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedCityId(loc.id)}
                  className={`px-3 py-2.5 rounded-2xl text-xs font-black transition-all duration-200 cursor-pointer ${
                    selectedCityId === loc.id
                      ? 'bg-slate-800 text-white shadow-md scale-102'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  id={`home-loc-select-${loc.id}`}
                >
                  {loc.city}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm w-full lg:w-96 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Selected Office Details</span>
                <span className="block font-bold text-slate-800 text-base">{selectedClinic.name}</span>
                <span className="block text-xs text-slate-505 font-semibold leading-snug mt-1">{selectedClinic.address}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100 mt-2">
                <a
                  href={`tel:${selectedClinic.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-2.5 rounded-xl flex items-center gap-1 shadow-xs transition"
                  id="home-call-widget-btn"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Office</span>
                </a>
                <button
                  onClick={() => onNavigate(`location-${selectedClinic.id}` as ActiveView)}
                  className="bg-[#8EE3CF] hover:bg-[#72caa3] text-slate-900 text-xs font-extrabold px-3.5 py-2.5 rounded-xl flex items-center gap-1 shadow-xs transition cursor-pointer"
                  id="home-visit-widget-btn"
                >
                  <span>Explore Branch →</span>
                </button>
                <button
                  onClick={onOpenBooking}
                  className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white text-xs font-black px-3.5 py-2.5 rounded-xl flex items-center gap-1 shadow-xs transition cursor-pointer"
                  id="home-book-widget-btn"
                >
                  Book Slot
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Services Catalog Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="px-3 py-1 rounded-full bg-[#8EE3CF]/20 text-[#2f8c77] font-bold text-xs uppercase tracking-widest inline-block">OUR DENTAL WONDERLAND SERVICES</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-none">
            Tailored Treatments for Tiny Treasures
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            We offer sensory-friendly cleanings, quick teeth sealants, root treatments, and calming laughing gas sedation custom-molded for pediatric smiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:border-[#5BBEF7]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Large Visual Icon badge with colored background */}
                <div className={`w-14 h-14 rounded-2xl ${srv.color} text-slate-800 flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform`}>
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#5BBEF7] transition-colors">{srv.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{srv.shortDesc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {srv.funPoints.slice(0, 2).map((pt, pIdx) => (
                    <span key={pIdx} className="bg-slate-50 text-slate-700 font-medium text-[11px] px-2.5 py-1 rounded-lg">
                      ✨ {pt}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (srv.id === 'special-needs') {
                      onNavigate('services-special-needs');
                    } else {
                      onNavigate('services-pediatric');
                    }
                  }}
                  className="text-xs font-bold text-[#5BBEF7] hover:underline flex items-center gap-1 group/btn cursor-pointer"
                  id={`home-learn-${srv.id}`}
                >
                  <span>Learn Treatments</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest">Kid Approved</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. About the practice showcase with Layered Illustrations */}
      <section className="py-24 bg-gradient-to-r from-rose-50/10 via-[#8EE3CF]/5 to-transparent border-t border-rose-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual illustrative representations with warm smiling dental imagery */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFD166]/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-md transform -rotate-2 hover:rotate-0 transition border-4 border-white">
                    <img
                      src={pediatricHygieneImg}
                      alt="Pediatric dental hygiene"
                      className="w-full h-48 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-[#5BBEF7] text-white p-6 rounded-3xl shadow-lg transform rotate-3 flex flex-col justify-between h-44">
                    <Heart className="w-8 h-8 text-white fill-white" />
                    <div>
                      <span className="block font-black text-2xl">100%</span>
                      <span className="text-xs font-bold">Mercury-Free & Kid Safe materials used exclusively</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg transform -rotate-3 flex flex-col justify-between h-44">
                    <Award className="w-8 h-8 text-[#FFD166] fill-[#FFD166]" />
                    <div>
                      <span className="block font-black text-sm">COGNITIVE SENSORY LABS</span>
                      <span className="text-xs text-slate-300">Painless cooperative techniques for autism & sensory sensitive children</span>
                    </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-sm transform rotate-1 hover:rotate-0 transition border-4 border-white">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400&h=450"
                      alt="Smiling child and pediatric dentist"
                      className="w-full h-48 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stories & Philosophy */}
            <div className="space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#FFB5D2]/30 text-rose-600 font-bold text-xs uppercase tracking-widest inline-block">THE TEXAS TINY TEETH PHILOSOPHY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
                Designed to Conquer Childhood Dental Anxiety!
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We believe that a pediatric dentist is a vital educator and mentor for kids. When a child undergoes painful childhood extractions elsewhere, it creates dental phobia that persists into adulthood.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                That is why Dr. James Croft designed our offices as a colorful wonderland. With customized pediatric chairs, ceiling-mounted screens, laughing gas sedation, a token tower, and magic tricks, your kid gets actual fun and gentle clinical care simultaneously.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#8EE3CF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Gentle Pacing First</h4>
                    <p className="text-[11px] text-slate-500">We explain every tool to gain confidence before dental checking.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#8EE3CF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Cozy Toys & Badges</h4>
                    <p className="text-[11px] text-slate-500">Every child leaves with premium rewards and a sparkly dental bag.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-[#8EE3CF] hover:bg-[#72caa3] text-slate-800 px-6 py-3 rounded-full font-extrabold text-sm tracking-wide transition shadow cursor-pointer inline-flex items-center gap-1"
                  id="home-about-read"
                >
                  <span>Our Practice Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Trust Doctor Showcase previews */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[#FFD166] text-xs font-black uppercase tracking-widest block">MEET THE SMILEY DOCTOR SQUAD</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Our Compassionate Specialists</h2>
          </div>
          <button
            onClick={() => onNavigate('doctors')}
            className="border border-[#5BBEF7] text-[#5BBEF7] hover:bg-[#5BBEF7]/5 px-6 py-2.5 rounded-full font-bold text-sm cursor-pointer"
            id="home-doctors-viewall"
          >
            Meet the Complete Doctors Squad
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.slice(0, 4).map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center flex flex-col justify-between group"
            >
              <div className="p-5 space-y-4">
                <div className="w-36 h-36 rounded-full overflow-hidden mx-auto border-4 border-[#8EE3CF]/20 relative">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg leading-tight">{doc.name}</h3>
                  <span className="text-xs font-semibold text-[#5BBEF7] mt-1 block">{doc.title}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{doc.bio}</p>
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-100/50 flex flex-col justify-between items-center text-xs">
                <span className="text-slate-400 font-bold text-[10px] uppercase">Favorite Toy</span>
                <span className="font-extrabold text-slate-600 mt-1 block">🧸 {doc.favoriteToy}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Fun Kids Experience Highlight with Interactive visuals */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Soft decorative glow circles */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#5BBEF7]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8EE3CF]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="bg-[#8EE3CF]/20 text-[#8EE3CF] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#8EE3CF]/30">
                A TRIP TO THE TOY PARADISE
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-black text-white leading-tight">
                No Drills or Needles! Just Magical Cooperative Games.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                We make sure children learn to value dental care rather than associate clinics with scary sterile labs. Here’s what awaits your brave hero at our clinics:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'The Toy Token Tower', desc: 'Every cleaning results in custom gold coins for physical reward towers filled with toys!', icon: Gift },
                  { title: 'Ceiling Entertainment Screen', desc: 'Lay down next to our plush toys while your favorite Disney cartoons play above you!', icon: Compass },
                  { title: 'Gentle Magic Tricks', desc: 'Our dentists magically "vanish" instruments to alleviate childhood stress.', icon: Sparkles },
                  { title: 'Take-home Sparkle Bags', desc: 'Kids receive customized color-printed bags filled with bubblegum toothpaste, brushes, and stickers.', icon: Smile }
                ].map((pt, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-4 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-[#5BBEF7]">
                        <pt.icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-100">{pt.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* Beautiful Office Tour Showcase Masonry block */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[#FFD166] text-xs font-black uppercase tracking-widest block text-center lg:text-left">OFFICE TOUR PREVIEW</span>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                {OFFICE_GALLERY_IMAGES.slice(0, 2).map((img, idx) => (
                  <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-800">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-4 flex flex-col justify-end">
                      <h4 className="text-white font-extrabold text-xs">{img.title}</h4>
                      <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">{img.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Reviews and parent success testimonials list */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="bg-[#5BBEF7]/10 text-[#258bbc] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">REAL DFW PARENT REVIEWS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">What parents are saying about us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            With thousands of five-star reviews on Google and Yelp, parents depend on Texas Tiny Teeth for absolute tranquility and dental excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: rev.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 text-[#FFD166] fill-[#FFD166]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6 text-xs">
                <div>
                  <span className="block font-bold text-slate-800">{rev.parentName}</span>
                  <span className="text-[10px] text-slate-400 font-semibold">{rev.childName || 'Parent'}</span>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg text-[10px]">{rev.location} Branch</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 text-center">
          <button
            onClick={() => onNavigate('reviews')}
            className="bg-[#5BBEF7]/10 text-[#5BBEF7] hover:bg-[#5BBEF7]/20 px-8 py-3.5 rounded-full font-bold text-sm transition cursor-pointer"
            id="home-reviews-nav"
          >
            Read All Patient Testimonials
          </button>
        </div>
      </section>

      {/* 8. Call To Action Big banner */}
      <section className="bg-gradient-to-r from-[#5BBEF7]/30 via-[#8EE3CF]/30 to-[#FFD166]/10 py-20 border-t border-rose-50">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <Smile className="w-16 h-16 text-[#5BBEF7] mx-auto animate-bounce" />
          <h2 className="text-3xl sm:text-4.5xl font-black text-slate-800 tracking-tight leading-none">
            Let’s Make Your Child Sparkle!
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Book an appointment at your closest Texas Tiny Teeth branch today and give them the gift of positive, specialized pediatric health for life.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-8 py-4 rounded-full font-extrabold text-base tracking-wide shadow-lg cursor-pointer"
              id="cta-home-book"
            >
              Online Scheduling Form
            </button>
            <a
              href="tel:9402330300"
              className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-extrabold text-base transition flex items-center gap-2 hover:border-[#8EE3CF]"
              id="cta-home-call"
            >
              <Phone className="w-5 h-5 text-[#8EE3CF]" />
              <span>Call Us Direct</span>
            </a>
          </div>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest pt-2">
            🎈 Special needs-focused rooms and comforting laughing gas options available at all offices.
          </p>
        </div>
      </section>

    </div>
  );
}
