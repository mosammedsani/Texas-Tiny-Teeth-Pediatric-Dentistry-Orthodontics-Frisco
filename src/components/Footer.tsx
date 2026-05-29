import { useState, FormEvent } from 'react';
import { Smile, Mail, Heart, Phone, MapPin, Calendar, Check, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { ActiveView } from '../types';
import { LOCATIONS } from '../data';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
  onOpenBooking: () => void;
}

export default function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNavClick = (view: ActiveView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-8 border-[#5BBEF7] relative overflow-hidden">
      {/* Subtle brand background graphic representing modern, playful children's brand */}
      <div className="absolute top-10 right-5 opacity-[0.02] pointer-events-none select-none">
        <Smile className="w-96 h-96 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo Brand Statement & Social links */}
          <div className="space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left cursor-pointer focus:outline-none"
              id="footer-logo-btn"
            >
              <img
                src="https://texastinyteeth.com/wp-content/uploads/2020/03/texastinyteeth-logo-orange.png"
                alt="Texas Tiny Teeth Orange Logo representation"
                className="h-11 w-auto object-contain bg-white/5 p-1 rounded-xl"
                referrerPolicy="no-referrer"
              />
            </button>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Serving the children of North Texas with peerless pediatric dentistry and preventive orthodontics. We blend specialized pediatric healthcare with a fun, sensory-sensitive magical wonderland, so kids learn to love visits for life!
            </p>
            
            {/* Social Media Link Icon Strip */}
            <div className="space-y-2 pt-1">
              <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Connect with us:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/TexasTinyTeeth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-[#5BBEF7] hover:text-white rounded-xl transition-all"
                  title="Facebook"
                  id="footer-social-facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/texastinyteeth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-[#FFB5D2] hover:text-white rounded-xl transition-all"
                  title="Instagram"
                  id="footer-social-instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCGB4bql3B5EAFIKe7k4AjzQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-[#FFD166] hover:text-slate-900 rounded-xl transition-all"
                  title="YouTube"
                  id="footer-social-youtube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/texastinyteeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-[#8EE3CF] hover:text-white rounded-xl transition-all"
                  title="Twitter"
                  id="footer-social-twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigations */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#FFD166] rounded-full"></span>
              Patient Resources
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'Brushing Journal & Blog', view: 'blog' },
                { label: 'Meet the Dental Providers', view: 'doctors' },
                { label: 'First Visit Checklist', view: 'new-patients' },
                { label: 'Invisalign® Smile Guide', view: 'services-invisalign' },
                { label: 'Childhood Careers Application', view: 'careers' },
                { label: 'Insurance & Medicaid Guidelines', view: 'new-patients' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.view as ActiveView)}
                    className="hover:text-[#5BBEF7] hover:underline transition-all text-slate-400 text-left cursor-pointer"
                    id={`footer-nav-link-${idx}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick links */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#8EE3CF] rounded-full"></span>
              Our Care Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'Pediatric Dentistry Specialists', view: 'services-pediatric' },
                { name: 'Orthodontic Interceptives', view: 'services-ortho' },
                { name: 'Orthodontic Emergencies', view: 'services-ortho-emergencies' },
                { name: 'Oral Surgery & Laser Ties', view: 'services-oral-surgery' },
                { name: 'Invisalign® Teen Clear Aligners', view: 'services-invisalign' },
                { name: 'Special Needs Comfort Suites', view: 'services-special-needs' },
              ].map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(srv.view as ActiveView)}
                    className="hover:text-[#8EE3CF] hover:underline transition-all text-slate-400 text-left cursor-pointer"
                    id={`footer-service-link-${idx}`}
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Input & Clinic Contacts */}
          <div className="space-y-5">
            <div>
              <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-1.5 h-3 bg-[#FFB5D2] rounded-full"></span>
                Inquire & Connect
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                Send professional clinical requests directly or find assistance:
              </p>
              <div className="space-y-1.5 text-xs">
                <a
                  href="tel:9034023200"
                  className="flex items-center gap-1.5 text-[#5BBEF7] font-extrabold hover:underline"
                  id="footer-general-phone"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(903) 402-3200</span>
                </a>
                <a
                  href="mailto:texastinyteeth@gmail.com"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white hover:underline"
                  id="footer-general-email"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8EE3CF]" />
                  <span>texastinyteeth@gmail.com</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Subscribe for Checklists:</span>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800 text-slate-150 placeholder-slate-500 rounded-xl py-2.5 px-4 outline-none border border-slate-700 focus:border-[#5BBEF7] text-xs pr-10 transition-all"
                  id="footer-email-input"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bg-[#5BBEF7] hover:bg-[#49aee0] text-slate-900 p-1.5 rounded-lg transition-all cursor-pointer"
                  id="footer-email-submit"
                >
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] text-[#8EE3CF] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Welcome aboard! Check your mail soon.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Dynamic Branch Quick Contacts Showcase (The 10 requested neighborhood clinics) */}
        <div className="border-t border-slate-800/80 mt-12 pt-8">
          <h3 className="text-white font-black text-xs uppercase tracking-widest mb-6 text-center lg:text-left">
            Texas Tiny Teeth DFW &amp; North Texas Clinic Locations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleNavClick(`location-${loc.id}` as ActiveView)}
                className="bg-slate-800/20 border border-slate-800 rounded-2xl p-3 hover:border-slate-700 hover:bg-slate-800/30 text-left transition"
                id={`footer-loc-btn-${loc.id}`}
              >
                <div className="font-extrabold text-slate-200 text-xs flex items-center justify-between">
                  <span>{loc.city} ({loc.name.split(' ')[0]})</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{loc.address.split(',')[0]}</p>
                <div className="text-[10px] text-[#5BBEF7] font-semibold mt-1.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#8EE3CF]" />
                  <span>Clinical Subpage</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Final Copyright & Disclaimer */}
        <div className="border-t border-slate-800/80 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span>© {currentYear} Texas Tiny Teeth Pediatric Dentistry &amp; Orthodontics. All rights reserved.</span>
            <span>-</span>
            <button onClick={() => handleNavClick('new-patients')} className="hover:underline hover:text-slate-400">
              HIPAA &amp; Dental Privacy
            </button>
            <span>-</span>
            <button onClick={() => handleNavClick('careers')} className="hover:underline hover:text-slate-400">
              Equal Opportunity Employer
            </button>
          </div>
          <p className="text-center md:text-right flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for tiny superhero smiles across Texas.
          </p>
        </div>

      </div>
    </footer>
  );
}
