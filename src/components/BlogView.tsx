import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, User, Calendar, Clock, ArrowRight, Star, Heart, Check, Smile } from 'lucide-react';

const infantFirstDentalHomeImg = 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600&h=400';

interface BlogViewProps {
  onOpenBooking: () => void;
}

interface Article {
  id: string;
  title: string;
  category: string;
  snippet: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  likes: number;
}

const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'The Golden Dental Milestone: Establishing Your Child\'s "First Dental Home" by Age One',
    category: 'Infant Development',
    snippet: 'Why does the American Academy of Pediatric Dentistry recommend dental checks early? Discover infant preventive health secrets.',
    content: 'Many parents ask why a baby with only two lower teeth needs a professional dentist. The goal of early childhood dentist checkups is foundational. Rather than intense drillings, these appointments focus on guiding salivary health, identifying correct jaw configurations, teaching proper soft-swab brushing routines, and monitoring potential nursing-bottle decay. Making of a clinical routine early eliminates life-long dental phobia before it can ever set root!',
    author: 'Dr. James S. Croft, DDS',
    date: 'May 12, 2026',
    readTime: '3 min read',
    image: infantFirstDentalHomeImg,
    likes: 42
  },
  {
    id: 'art-2',
    title: 'The Hidden Sugar Trap: Uncovering Acidic Cavity Triggers in Pre-Packaged Childhood Snacks',
    category: 'Diet & Nutrition',
    snippet: 'Think fruit gummies and organic pouches are harmless? Understand how sticky sugars feed plaque bacteria overnight.',
    content: 'Sticky snack alternatives and dried organic fruit leathers often escape classic "junk food" labeling but are extremely high in localized sugars. Because they stick inside child molar crevices, typical mineral toothbrushes can\'t reach them. When cavity bacteria consume sugars, they produce an acidic excretion that dissolves tiny protective enamel structures. We recommend switching sticky snacks for raw crisp apples, cheddar cheese blocks, or hydrating celery slices!',
    author: 'Dr. Sarah Croft, DDS',
    date: 'April 28, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=600&h=400',
    likes: 58
  },
  {
    id: 'art-3',
    title: 'The Braces Survival Guide: Essential Daily Cleaning Routines for Bright, Happy Ortho Smiles',
    category: 'Orthodontics',
    snippet: 'Brackets, elastic loops, and archwires call for a specialized cleaning setup. Learn how to clean orthodontia cleanly.',
    content: 'Getting new braces represents a spectacular step toward lifelong functional jaw wellness. Brackets create tiny shelf pockets where food debris naturally resides, meaning tooth plaque doubles quickly without care. We walk through: 1. Utilizing interproximal tiny tree-shaped brushes. 2. Using flexible floss threaders or water pulsers twice daily. 3. Avoiding heavy caramel or crunchy corn kernels that pull brackets off tooth surfaces.',
    author: 'Dr. Matthew James, DMD',
    date: 'March 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=400',
    likes: 31
  },
  {
    id: 'art-4',
    title: 'Soothed Senses: How Custom Sensory-Adapted Treatment Rooms Help Calm ADHD & Autism Dental Journeys',
    category: 'Special Needs',
    snippet: 'Discover the therapeutic clinical setups—from custom warm lighting to heavy weighted blankets—that quiet pediatric anxiety.',
    content: 'Clinical noise levels represent major barriers for children with unique developmental sensitivities. High-pitch scale vibration, surgical lighting glare, and unexpected touching can quickly trigger central nervous defensiveness. Fortunately, specialized sensory adaptation—including dimmable lighting, silent diagnostics, weighted comforting blankets, and the "Tell-Show-Do" technique—creates quiet pathways for positive therapeutic visits.',
    author: 'Dr. Brandon Cooper, DDS',
    date: 'May 1, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600&h=400',
    likes: 89
  }
];

export default function BlogView({ onOpenBooking }: BlogViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [likedArticles, setLikedArticles] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Infant Development', 'Diet & Nutrition', 'Orthodontics', 'Special Needs'];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedArticles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredArticles = ARTICLES.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      
      {/* Cinematic Header Block */}
      <section className="bg-gradient-to-b from-[#FFB5D2]/15 via-[#5BBEF7]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-white px-3.5 py-1.5 rounded-full text-xs font-black text-slate-700 uppercase tracking-widest inline-block border border-slate-200 shadow-xs">
            ✨ SMILEY CLINIC JOURNAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            The Tiny Teeth Blog
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            Discover helpful clinical explanations, pediatric brushing checklists, dental anxiety-calming guides, and healthy snack tips written by our kids-dentistry leaders.
          </p>
        </div>
      </section>

      {/* Interactive Controls Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-[24px] p-4 border border-rose-100/40 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Categories Tab selector */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveArticle(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#5BBEF7] text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
                id={`blog-cat-${cat.replace(' ', '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box input */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder="Search articles, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-xl py-2.5 pl-10 pr-4 outline-none border border-slate-100 focus:border-[#5BBEF7] focus:bg-white text-sm transition-all"
              id="blog-search-input"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>

        </div>
      </section>

      {/* Main Container Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AnimatePresence mode="wait">
          {activeArticle ? (
            
            /* Detailed View of Article */
            <motion.div
              key="article-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-10 shadow-md space-y-8"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="hover:text-[#5BBEF7] text-slate-400 text-xs sm:text-sm font-extrabold cursor-pointer flex items-center gap-1 focus:outline-none"
                id="blog-back-btn"
              >
                ← Back to Article List
              </button>

              <div className="relative h-[250px] sm:h-[400px] rounded-[24px] overflow-hidden">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black text-slate-800 tracking-wider shadow-sm uppercase">
                  {activeArticle.category}
                </div>
              </div>

              <div className="max-w-4xl mx-auto space-y-5">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-[#8EE3CF]" /> {activeArticle.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#FFD166]" /> {activeArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#FFB5D2]" /> {activeArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight">
                  {activeArticle.title}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  {activeArticle.snippet}
                </p>

                <div className="border-t border-slate-100 pt-5 text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>{activeArticle.content}</p>
                  <p>In addition, maintaining healthy tooth routines is key to our preventative mission. Our expert clinical teams design easy toothbrushing maps for children, teaching them self-care through friendly stories. If your family ever needs localized assistance, we recommend scheduling an infant or kid diagnostic check!</p>
                </div>

                <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleLike(activeArticle.id, e)}
                      className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                        likedArticles[activeArticle.id]
                          ? 'bg-rose-50 text-rose-500 border border-rose-100'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                      id="blog-detail-like-btn"
                    >
                      <Heart className={`w-4 h-4 ${likedArticles[activeArticle.id] ? 'fill-rose-500' : ''}`} />
                      <span>{likedArticles[activeArticle.id] ? 'Liked!' : 'Like This Post'}</span>
                    </button>
                    <span className="text-xs text-slate-400 font-bold">
                      {activeArticle.likes + (likedArticles[activeArticle.id] ? 1 : 0)} parents found this helpful
                    </span>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-6 py-3 rounded-full font-extrabold text-xs sm:text-sm shadow-md cursor-pointer w-full sm:w-auto"
                    id="blog-detail-book-btn"
                  >
                    Discuss Preventative Care
                  </button>
                </div>
              </div>

            </motion.div>
          ) : (
            
            /* Article grid */
            <motion.div
              key="article-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {filteredArticles.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-slate-100">
                  <Smile className="w-12 h-12 text-[#FFB5D2] mx-auto opacity-70 animate-bounce" />
                  <h3 className="font-bold text-slate-700 text-lg mt-3">No matching articles found</h3>
                  <p className="text-slate-400 text-sm mt-1">Try search terms like "sugar", "sugar trap", "braces", or "enamel".</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((art) => {
                    const isLiked = likedArticles[art.id];
                    return (
                      <article
                        key={art.id}
                        onClick={() => {
                          setActiveArticle(art);
                          window.scrollTo({ top: 300, behavior: 'smooth' });
                        }}
                        className="bg-white rounded-3xl border border-slate-100/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full group"
                        id={`blog-post-${art.id}`}
                      >
                        <div className="relative h-48 overflow-hidden shrink-0">
                          <img
                            src={art.image}
                            alt={art.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[10px] font-black text-slate-800 uppercase tracking-widest border border-slate-100">
                            {art.category}
                          </div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                              <Calendar className="w-3.5 h-3.5 text-[#FFD166]" /> {art.date}
                            </span>
                            <h3 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug group-hover:text-[#5BBEF7] transition-colors line-clamp-2">
                              {art.title}
                            </h3>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              {art.snippet}
                            </p>
                          </div>

                          <div className="border-t border-slate-50 pt-3.5 flex items-center justify-between">
                            <button
                              onClick={(e) => handleLike(art.id, e)}
                              className="text-slate-400 hover:text-rose-500 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                              id={`blog-like-${art.id}`}
                            >
                              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
                              <span>{art.likes + (isLiked ? 1 : 0)}</span>
                            </button>

                            <span className="text-[#5BBEF7] font-black text-xs flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                              <span>Read Post</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Brushing Challenge Interactivity */}
      <section className="bg-slate-900 border-t-8 border-[#5BBEF7] text-white py-14 mt-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <BookOpen className="w-10 h-10 text-[#5BBEF7] mx-auto animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold">🎯 Join the 2-Minute Brushing Challenge</h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Brushing teeth shouldn\'t be a chore! Join parents across Dallas-Fort Worth who receive our weekly kids-dentistry checklists and fun daily song schedules to help children develop lifelong dental health.
          </p>
          <div className="flex justify-center flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#5BBEF7] hover:bg-[#49aee0] text-slate-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-md"
              id="blog-footer-challenge-btn"
            >
              Sign Up for Smiley Club Charts
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
