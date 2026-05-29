import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Star, Smile, Check, Sparkles, MessageSquare, Plus, Heart } from 'lucide-react';
import { Review } from '../types';

export default function ReviewsView() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [formOpen, setFormOpen] = useState(false);
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [location, setLocation] = useState('Greenville');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (parentName && text) {
      const newReview: Review = {
        id: `rev-custom-${Date.now()}`,
        parentName,
        childName: childName || undefined,
        rating,
        text,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        location,
      };

      setReviewsList([newReview, ...reviewsList]);
      setSubmitSuccess(true);
      setParentName('');
      setChildName('');
      setRating(5);
      setText('');
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormOpen(false);
      }, 3500);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Cinematic Header Block */}
      <section className="bg-gradient-to-b from-[#FFB5D2]/15 via-[#5BBEF7]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#FFB5D2]/20 text-rose-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-[#FFB5D2]/30">
            KID-APPROVED DENTAL JOURNEYS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            Parent Reviews & Testimonials
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Read real, unedited reviews from mothers, fathers, and pediatric partners who found serenity and dental magic in our clinics across Texas.
          </p>
        </div>
      </section>

      {/* Testimonials feeds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Statistics & Open Form controller */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white rounded-3xl p-6.5 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-6">
            <div>
              <span className="block text-3xl font-black text-slate-800">4.9 ★</span>
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Average Google Rating</span>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <div>
              <span className="block text-3xl font-black text-slate-800">3,500+</span>
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Five Star Reviews across DFW</span>
            </div>
          </div>

          <button
            onClick={() => setFormOpen(!formOpen)}
            className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-6 py-3 rounded-full font-extrabold text-sm shadow transition-all flex items-center gap-2 cursor-pointer"
            id="reviews-write-toggle"
          >
            <Plus className="w-4.5 h-4.5" />
            <span>Submit Your Smiley Story</span>
          </button>
        </div>

        {/* Dynamic Interactive review submit form sheet */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-white rounded-[32px] border border-rose-100 p-6 sm:p-8 shadow-md mb-12"
            >
              <h3 className="text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
                <Smile className="text-[#FFD166] w-6 h-6 fill-[#FFD166]/10" />
                <span>Submit Your Child's Smiley Story</span>
              </h3>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5" htmlFor="parentName">Parent or Guardian Name:</label>
                    <input
                      type="text"
                      id="parentName"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Rachel S."
                      className="w-full bg-slate-50 text-slate-800 rounded-xl py-3 px-4 border border-slate-200 focus:border-[#5BBEF7] outline-none text-sm transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5" htmlFor="childName">Child's Name &amp; Age (Optional):</label>
                    <input
                      type="text"
                      id="childName"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Christopher (Age 5)"
                      className="w-full bg-slate-50 text-slate-800 rounded-xl py-3 px-4 border border-slate-200 focus:border-[#5BBEF7] outline-none text-sm transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5" htmlFor="location">Visited Office Location:</label>
                      <select
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 rounded-xl py-3 px-4 border border-slate-200 focus:border-[#5BBEF7] outline-none text-sm transition"
                      >
                        {['Decatur', 'Garland', 'Greenville', 'Rockwall', 'Rowlett', 'Terrell', 'Melissa', 'Frisco', 'Sachse'].map((locName) => (
                          <option key={locName} value={locName}>{locName}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Your Experience Rating:</label>
                      <div className="flex items-center gap-1.5 h-11">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="text-2xl hover:scale-110 transition shrink-0 cursor-pointer"
                            id={`rev-form-star-${star}`}
                          >
                            <span className={star <= rating ? 'text-[#FFD166]' : 'text-slate-200'}>★</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 flex flex-col justify-between">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5" htmlFor="text">Your Story / Message Copy:</label>
                    <textarea
                      id="text"
                      required
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      rows={4}
                      placeholder="How did our dentists do? Describe magic tricks or how our dental assistants reassured your child..."
                      className="w-full bg-slate-50 text-slate-800 rounded-xl p-3.5 border border-slate-200 focus:border-[#5BBEF7] outline-none text-sm transition"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-sm py-3 px-6 rounded-xl shadow transition"
                      id="reviews-form-submit-btn"
                    >
                      Publish Story onto Guest Book
                    </button>
                  </div>
                </div>

              </form>

              {submitSuccess && (
                <div className="bg-[#8EE3CF]/15 text-[#1b735f] text-xs font-bold p-4.5 rounded-2xl border border-[#8EE3CF] mt-6 flex items-center gap-2">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>Success! Your story has been verified and added immediately to our unedited patient review feed!</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Major reviews feed cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition border border-slate-100/70 relative"
            >
              {/* Star Rating & Quotes graphic absolute decoration */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: rev.rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4.5 h-4.5 text-[#FFD166] fill-[#FFD166]" />
                  ))}
                </div>
                <MessageSquare className="w-8 h-8 text-slate-100" />
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-6">
                "{rev.text}"
              </p>

              {/* Patient and clinic data descriptors */}
              <div className="border-t border-slate-100 pt-5 mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#5BBEF7] to-[#8EE3CF] flex items-center justify-center font-bold text-slate-800 text-sm">
                    {rev.parentName[0]}
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-xs sm:text-sm leading-tight">{rev.parentName}</strong>
                    <span className="text-[10px] text-slate-400 leading-none">{rev.childName || 'Maternal Partner'}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-slate-500 font-extrabold text-[10px] bg-slate-100 px-2 py-0.5 rounded-md inline-block">
                    {rev.location} Branch
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-1">{rev.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
