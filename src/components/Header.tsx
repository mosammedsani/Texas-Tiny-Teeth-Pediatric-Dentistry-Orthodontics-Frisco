import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Star, Calendar, ChevronDown, Award, Sparkles, Smile } from 'lucide-react';
import { ActiveView } from '../types';

interface HeaderProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  onOpenBooking: () => void;
}

export default function Header({ activeView, onNavigate, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [locationsHovered, setLocationsHovered] = useState(false);

  // Mobile sub-menu toggle states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  // Services dropdown details
  const servicesItems: { label: string; view: ActiveView }[] = [
    { label: 'Pediatric Dentistry', view: 'services-pediatric' },
    { label: 'Orthodontics', view: 'services-ortho' },
    { label: 'Orthodontic Emergencies', view: 'services-ortho-emergencies' },
    { label: 'Oral Surgery', view: 'services-oral-surgery' },
    { label: 'Invisalign®', view: 'services-invisalign' },
    { label: 'Special Needs Dentistry', view: 'services-special-needs' },
  ];

  // Locations dropdown details (10 requested locations)
  const locationsItems: { label: string; view: ActiveView }[] = [
    { label: 'Athens, TX', view: 'location-athens' },
    { label: 'Corinth, TX', view: 'location-corinth' },
    { label: 'Corsicana, TX', view: 'location-corsicana' },
    { label: 'Frisco, TX', view: 'location-frisco' },
    { label: 'Greenville, TX', view: 'location-greenville' },
    { label: 'Irving, TX', view: 'location-irving' },
    { label: 'Melissa, TX', view: 'location-melissa' },
    { label: 'Rowlett, TX', view: 'location-rowlett' },
    { label: 'Sachse, TX', view: 'location-sachse' },
    { label: 'Terrell, TX', view: 'location-terrell' },
  ];

  const handleNavClick = (view: ActiveView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServiceSelected = activeView.startsWith('services-');
  const isLocationSelected = activeView.startsWith('location-');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Playful Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#5BBEF7] via-[#8EE3CF] to-[#FFD166] text-slate-800 text-xs sm:text-sm font-semibold py-2 px-4 shadow-inner flex flex-col sm:flex-row justify-between items-center gap-1">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Now Welcoming New Patients across All 10 DFW &amp; North Texas Clinics!</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:9034023200"
            className="flex items-center gap-1 font-extrabold text-slate-900 hover:underline"
            id="header-phone-link"
          >
            <Phone className="w-3.5 h-3.5 text-white fill-white" />
            <span>Call Us: (903) 402-3200</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-rose-100/40 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand on Left */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer group text-left focus:outline-none"
            id="header-logo-btn"
          >
            <div className="flex items-center">
              <img
                src="https://texastinyteeth.com/wp-content/uploads/2020/03/texastinyteeth-logo-orange.png"
                alt="Texas Tiny Teeth Brand Logo"
                className="h-12 w-auto object-contain group-hover:scale-102 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>

          {/* Nav Links for Desktop */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {/* Home link */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeView === 'home'
                  ? 'bg-[#5BBEF7] text-white shadow-xs'
                  : 'text-slate-650 hover:text-[#5BBEF7] hover:bg-slate-50'
              }`}
              id="desktop-nav-home"
            >
              Home
            </button>

            {/* Providers link */}
            <button
              onClick={() => handleNavClick('doctors')}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeView === 'doctors'
                  ? 'bg-[#5BBEF7] text-white shadow-xs'
                  : 'text-slate-650 hover:text-[#5BBEF7] hover:bg-slate-50'
              }`}
              id="desktop-nav-providers"
            >
              Our Providers
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesHovered(true)}
              onMouseLeave={() => setServicesHovered(false)}
            >
              <button
                className={`px-3 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  isServiceSelected
                    ? 'bg-[#5BBEF7]/10 text-[#2083b4]'
                    : 'text-slate-650 hover:text-[#5BBEF7] hover:bg-slate-50'
                }`}
                id="desktop-nav-services-trigger"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesHovered ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 7 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 7 }}
                    className="absolute left-0 mt-0.5 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden py-2"
                  >
                    {servicesItems.map((item) => (
                      <button
                        key={item.view}
                        onClick={() => {
                          handleNavClick(item.view);
                          setServicesHovered(false);
                        }}
                        className={`w-full text-left px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                          activeView === item.view
                            ? 'bg-[#5BBEF7]/10 text-[#2083b4]'
                            : 'text-slate-605 hover:bg-slate-50 hover:text-[#5BBEF7]'
                        }`}
                        id={`dropdown-srv-${item.view}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* New Patients link */}
            <button
              onClick={() => handleNavClick('new-patients')}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeView === 'new-patients'
                  ? 'bg-[#5BBEF7] text-white shadow-xs'
                  : 'text-slate-650 hover:text-[#5BBEF7] hover:bg-slate-50'
              }`}
              id="desktop-nav-patients"
            >
              New Patients
            </button>

            {/* Blog link */}
            <button
              onClick={() => handleNavClick('blog')}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeView === 'blog'
                  ? 'bg-[#5BBEF7] text-white shadow-xs'
                  : 'text-slate-650 hover:text-[#5BBEF7] hover:bg-slate-50'
              }`}
              id="desktop-nav-blog"
            >
              Blog
            </button>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsHovered(true)}
              onMouseLeave={() => setLocationsHovered(false)}
            >
              <button
                className={`px-3 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  isLocationSelected
                    ? 'bg-[#5BBEF7]/10 text-[#2083b4]'
                    : 'text-slate-650 hover:text-[#5BBEF7] hover:bg-slate-50'
                }`}
                id="desktop-nav-locations-trigger"
              >
                <span>Locations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locationsHovered ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {locationsHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 7 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 7 }}
                    className="absolute right-0 mt-0.5 w-56 max-h-96 overflow-y-auto bg-white border border-slate-100 rounded-2xl shadow-xl py-2"
                  >
                    {locationsItems.map((item) => (
                      <button
                        key={item.view}
                        onClick={() => {
                          handleNavClick(item.view);
                          setLocationsHovered(false);
                        }}
                        className={`w-full text-left px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                          activeView === item.view
                            ? 'bg-[#5BBEF7]/10 text-[#2083b4] font-black'
                            : 'text-slate-605 hover:bg-slate-50 hover:text-[#5BBEF7]'
                        }`}
                        id={`dropdown-loc-${item.view}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Careers link */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeView === 'careers'
                  ? 'bg-[#5BBEF7] text-white shadow-xs'
                  : 'text-slate-650 hover:text-[#5BBEF7] hover:bg-slate-50'
              }`}
              id="desktop-nav-careers"
            >
              Careers
            </button>
          </div>

          {/* Desktop Call To Action Button */}
          <div className="hidden lg:flex items-center gap-3 animate-pulse" style={{ animationDuration: '4s' }}>
            <button
              onClick={onOpenBooking}
              className="bg-[#5BBEF7] hover:bg-[#43a1cf] text-white px-5 py-2.5 rounded-full font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5"
              id="header-cta-schedule"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile Menu Action Triggers */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#5BBEF7] hover:bg-[#43a1cf] text-white p-2.5 rounded-full shadow-md cursor-pointer"
              title="Schedule Visit"
              id="header-cta-mobile-schedule"
            >
              <Calendar className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:bg-slate-100 p-2 rounded-full cursor-pointer"
              id="header-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1.5 max-h-[80vh] overflow-y-auto">
              
              {/* Home button */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                  activeView === 'home' ? 'bg-[#5BBEF7]/10 text-[#5BBEF7]' : 'text-slate-700 hover:bg-slate-50'
                }`}
                id="mobile-nav-home"
              >
                <span>Home</span>
              </button>

              {/* Providers button */}
              <button
                onClick={() => handleNavClick('doctors')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                  activeView === 'doctors' ? 'bg-[#5BBEF7]/10 text-[#5BBEF7]' : 'text-slate-700 hover:bg-slate-50'
                }`}
                id="mobile-nav-providers"
              >
                <span>Our Providers</span>
              </button>

              {/* Services accordion drawer */}
              <div className="border border-slate-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full text-left px-4 py-2.5 text-base font-bold transition-all flex items-center justify-between ${
                    isServiceSelected ? 'bg-[#5BBEF7]/5 text-[#5BBEF7]' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  id="mobile-nav-services-accordion"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <div className="bg-slate-50/50 px-2 py-1 space-y-1">
                    {servicesItems.map((item) => (
                      <button
                        key={item.view}
                        onClick={() => handleNavClick(item.view)}
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          activeView === item.view ? 'text-[#5BBEF7] font-black bg-white' : 'text-slate-600'
                        }`}
                        id={`mobile-accordion-srv-${item.view}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Patients button */}
              <button
                onClick={() => handleNavClick('new-patients')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                  activeView === 'new-patients' ? 'bg-[#5BBEF7]/10 text-[#5BBEF7]' : 'text-slate-700 hover:bg-slate-50'
                }`}
                id="mobile-nav-patients"
              >
                <span>New Patients</span>
              </button>

              {/* Blog button */}
              <button
                onClick={() => handleNavClick('blog')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                  activeView === 'blog' ? 'bg-[#5BBEF7]/10 text-[#5BBEF7]' : 'text-slate-700 hover:bg-slate-50'
                }`}
                id="mobile-nav-blog"
              >
                <span>Blog</span>
              </button>

              {/* Locations accordion drawer */}
              <div className="border border-slate-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className={`w-full text-left px-4 py-2.5 text-base font-bold transition-all flex items-center justify-between ${
                    isLocationSelected ? 'bg-[#5BBEF7]/5 text-[#5BBEF7]' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  id="mobile-nav-locations-accordion"
                >
                  <span>Locations</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileLocationsOpen && (
                  <div className="bg-slate-50/50 px-2 py-1 space-y-1 max-h-60 overflow-y-auto">
                    {locationsItems.map((item) => (
                      <button
                        key={item.view}
                        onClick={() => handleNavClick(item.view)}
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          activeView === item.view ? 'text-[#5BBEF7] font-black bg-white' : 'text-slate-600'
                        }`}
                        id={`mobile-accordion-loc-${item.view}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Careers button */}
              <button
                onClick={() => handleNavClick('careers')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                  activeView === 'careers' ? 'bg-[#5BBEF7]/10 text-[#5BBEF7]' : 'text-slate-700 hover:bg-slate-50'
                }`}
                id="mobile-nav-careers"
              >
                <span>Careers</span>
              </button>

              <div className="pt-3 pb-2 border-t border-slate-100 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#5BBEF7] text-white font-black text-center py-3 rounded-2xl block shadow-md cursor-pointer text-sm uppercase tracking-wider"
                  id="mobile-nav-booking-cta"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
