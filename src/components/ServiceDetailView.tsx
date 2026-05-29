import { motion } from 'motion/react';
import { Smile, Shield, Sparkles, Heart, HelpCircle, Phone, Calendar, Star, Scissors, Activity, Layers } from 'lucide-react';
import { ActiveView } from '../types';

interface ServiceDetailViewProps {
  view: ActiveView;
  onOpenBooking: () => void;
}

export default function ServiceDetailView({ view, onOpenBooking }: ServiceDetailViewProps) {
  // Determine which service details to render
  const getServiceData = () => {
    switch (view) {
      case 'services-pediatric':
        return {
          title: 'Pediatric Dentistry',
          subtitle: 'Warm, safe, and child-approved dentistry designed for tiny teeth.',
          badge: 'SPECIALIZED PEDIATRIC CARE',
          color: 'from-[#5BBEF7]/20 to-[#8EE3CF]/10',
          borderColor: 'border-[#5BBEF7]',
          icon: <Smile className="w-10 h-10 text-[#5BBEF7]" />,
          description: `At Texas Tiny Teeth, pediatric dentistry is our deep expertise. Pediatric dentists complete an extra two to three years of advanced clinical training after dental school, focusing exclusively on children's developmental psychology, primary teeth configuration, and distinct pediatric facial anatomy. We deliver a magical, trauma-free environment where kids learn to love the dentist for life!`,
          highlights: [
            {
              title: 'Sensory-Adapted Spaces',
              desc: 'Ceiling-mounted entertainment displays playing favorite kid movies above every single dental chair.',
            },
            {
              title: 'Painless Growth Tracking',
              desc: 'High-definition digital x-rays with extremely low radiation exposure designed securely for small children.',
            },
            {
              title: 'Fun Playful Instruments',
              desc: 'Interactive names like "Mr. Slurpy" (the suction straw) and "Count Dracula" (the counting mirror) to eliminate fear.',
            },
            {
              title: 'Magical Exit Token Tower',
              desc: 'Every single brave patient is rewarded with special gold coins for our prize tower before leaving.',
            }
          ],
          faqs: [
            {
              q: 'When should a kid first visit a pediatric dentist?',
              a: 'The American Academy of Pediatric Dentistry (AAPD) recommends setting up their professional dental home by age one, or within six months after their very first baby tooth erupts.'
            },
            {
              q: 'How often do children need routine dental checkups?',
              a: 'Every six months is recommended to monitor fast-changing pediatric mouth structures, apply protective sealants, and detect signs of early childhood decay before simple cavities develop.'
            },
            {
              q: 'How do you handle uncooperative or anxious children?',
              a: 'We use gentle, non-threatening behavioral guidance, including positive verbal reinforcement, the Tell-Show-Do technique, sensory toys, and when appropriate, sweet-scented laughing gas.'
            }
          ]
        };

      case 'services-ortho':
        return {
          title: 'Orthodontic interceptive treatments',
          subtitle: 'Guiding jaw growth & styling healthy straight smiles for life.',
          badge: 'PREVENTIVE ORTHODONTICS',
          color: 'from-[#FFB5D2]/20 to-[#FFD166]/15',
          borderColor: 'border-[#FFB5D2]',
          icon: <Layers className="w-10 h-10 text-[#FFB5D2]" />,
          description: `Early orthodontic evaluation can guide growing jawbones and direct secondary teeth into optimal alignment. At Texas Tiny Teeth, we specialize in interceptive Phase-1 Orthodontics, custom palatal expanders, standard modern metal brackets, and clear alignment therapy. We carefully supervise your child's tooth transitions to prevent complex surgical solutions during teenage years or adulthood.`,
          highlights: [
            {
              title: 'Phase-1 Early Growth Guidance',
              desc: 'Correcting jaw growth disparities and severe crossbites while your child\'s facial bones are comfortably maleable.',
            },
            {
              title: 'Custom Ceramic and Metal Braces',
              desc: 'Fun, high-durability brackets with customizable colored elastic ties so kids can pick their favorite school or holiday shades!',
            },
            {
              title: 'Space Maintainers',
              desc: 'Critical custom appliances placed if a primary baby tooth is lost prematurely, preventing neighboring teeth from drifting.',
            },
            {
              title: 'Low-friction Diagnostic Scanning',
              desc: 'Zero-goop digital 3D jaw impressions that replace the old, gag-inducing physical putty impressions.',
            }
          ],
          faqs: [
            {
              q: 'What is the ideal age for an orthodontic screening?',
              a: 'An orthodontic screening is recommended around age 7. By this time, key adult molars have emerged, allowing us to evaluate jaw growth alignment and bite issues early.'
            },
            {
              q: 'What is Phase-1 (Interceptive) Orthodontics?',
              a: 'Phase-1 treatment occurs while some baby teeth are still present. It focuses on skeletal modifications, correcting narrow arches, and guiding jaw alignment to ensure proper space for permanent teeth.'
            },
            {
              q: 'Are braces painful for kids?',
              a: 'Most kids experience mild soreness or pressure for a few days after initially getting braces or after adjustment visits, which is easily managed with pediatric over-the-counter pain relievers and soft foods.'
            }
          ]
        };

      case 'services-ortho-emergencies':
        return {
          title: 'Orthodontic Emergencies',
          subtitle: 'Immediate relief and troubleshooting for loose brackets or poking wires.',
          badge: 'URGENT COMFORT REPAIR',
          color: 'from-[#FFD166]/20 to-[#FFB5D2]/10',
          borderColor: 'border-[#FFD166]',
          icon: <Activity className="w-10 h-10 text-[#FFD166]" />,
          description: `Orthodontic appliances are highly durable, but busy children can occasionally displace brackets or bend archwires on raw apples, hard candies, or toys. When an orthodontic challenge arises, our priority is keeping your child completely pain-free. We maintain daily, immediate-response service slots to solve bracket issues quickly and put smiles back on track!`,
          highlights: [
            {
              title: 'Poking Archwire Solvers',
              desc: 'Safe, instant adjustment or trimming of loose wires that are irritating your child\'s sweet gums or inner cheeks.',
            },
            {
              title: 'Loose Bracket Stabilization',
              desc: 'Professional re-bonding of structural metal or ceramic brackets that have slipped or separated from tooth enamel.',
            },
            {
              title: 'Broken Space Maintainers Repair',
              desc: 'Immediate orthodontic repairs for loose dental expanders, bands, or space preserve loops to ensure therapy continuity.',
            },
            {
              title: 'Emergency Soft Relief Wax',
              desc: 'Generous supplies of medical-grade orthodontic silicone wax to coat rough spots and guard irritated soft tissues.',
            }
          ],
          faqs: [
            {
              q: 'What should we do if a bracket comes loose?',
              a: 'If the bracket is still attached to the wire, apply sterile orthodontic wax to stabilize it and prevent it from sliding. If it falls off entirely, place it in a small envelope and call our clinic for an appointment.'
            },
            {
              q: 'How do I handle a wire that is poking my child\'s cheek?',
              a: 'Use the clean eraser head of a pencil to gently bend the wire away from the cheek, or apply orthodontic wax. If it persists, call us immediately so we can trim it safely.'
            },
            {
              q: 'Is a loose band or broken wire a critical emergency?',
              a: 'If your child is in persistent pain or can\'t eat, it\'s an urgent matter; contact our emergency line. If there\'s no discomfort, it\'s still important to address it within a few days to maintain orthodontic progress.'
            }
          ]
        };

      case 'services-oral-surgery':
        return {
          title: 'Oral Surgery & Frenectomies',
          subtitle: 'Gentle, state-of-the-art extractions and soft tissue laser therapy.',
          badge: 'GENTLE CLINICAL PRECISION',
          color: 'from-[#8EE3CF]/10 to-[#5BBEF7]/15',
          borderColor: 'border-[#8EE3CF]',
          icon: <Scissors className="w-10 h-10 text-[#8EE3CF]" />,
          description: `Our minor surgical care is designed with absolute child psychology in mind. From extracting deeply decayed primary teeth to performing gentle laser frenectomies (for tongue or lip ties), we prioritize speed, sterile excellence, and comfort. We utilize state-of-the-art dental lasers that cut bleeding, eliminate stitches, and ensure a swift recovery.`,
          highlights: [
            {
              title: 'Laser Tongue & Lip Tie Correction',
              desc: 'Infant frenectomies performed in minutes with zero blades or scary stitches—allowing immediate, painless breastfeeding.',
            },
            {
              title: 'Extractions for Crowded Teeth',
              desc: 'Extremely quick, gentle baby tooth removal to allow permanent adult teeth to erupt into healthy positions.',
            },
            {
              title: 'Conscious Sleep Sedation',
              desc: 'Custom medical sedation, from laughing gas to in-office general anesthesia, keeping our nervous stars cozy and relaxed.',
            },
            {
              title: 'Post-Op Quick Healing Guides',
              desc: 'Easy-to-follow, visual pediatric recovery packs containing cold compress packs, soft popsicles, and stickers.',
            }
          ],
          faqs: [
            {
              q: 'What is a frenectomy and why does my infant need it?',
              a: 'A frenectomy is the gentle release of a tight fold of tissue (frenum) under the tongue or lip. Correcting "tongue-tie" resolves feeding difficulties in newborns and prevents speech or spacing issues later.'
            },
            {
              q: 'What should my child eat after a pediatric extraction?',
              a: 'Stick to cool, soft foods for the first 24-48 hours. Yogurt, applesauce, pudding, smoothies (no straws!), and ice cream are perfect choices that soothe healing gums.'
            },
            {
              q: 'Why should children avoid drinking through straws after oral surgery?',
              a: 'The suction force created by drinking through a straw can dislodge the natural healing blood clot in the tooth socket, leading to slow healing and a painful condition called dry socket.'
            }
          ]
        };

      case 'services-invisalign':
        return {
          title: 'Invisalign® Teen Clear Aligners',
          subtitle: 'The modern, virtually invisible path to straight, happy smiles.',
          badge: 'CLEAR COMFORT ALIGNERS',
          color: 'from-[#5BBEF7]/20 to-[#FFB5D2]/15',
          borderColor: 'border-[#5BBEF7]',
          icon: <Sparkles className="w-10 h-10 text-[#5BBEF7]" />,
          description: `High school, band practice, athletics, and social gatherings demand comfortable, unobtrusive teeth alignment. Our certified Invisalign® Teen treatments offer clear, flexible plastic trays customized entirely to your teen's lifestyle. Removable, hygienically superior, and virtually invisible, Invisalign® delivers stunning results without the dietary limits of metal braces!`,
          highlights: [
            {
              title: 'Snack and Dine Freedom',
              desc: 'Simply pop out the clear aligners during lunch and dinner to enjoy apples, popcorn, corn on the cob, and chips safely!',
            },
            {
              title: 'Hygienic Cleansing Simplicity',
              desc: 'No confusing floss threaders! Remove aligners to brush and floss teeth naturally, dramatically reducing early gum inflammation.',
            },
            {
              title: 'Dynamic Blue Indicators',
              desc: 'Built-in color indicators that fade over time, allowing busy parents and teens to easily verify daily wear times.',
            },
            {
              title: 'Teen-Proof Tray Protection',
              desc: 'Includes multiple free replacement aligners, meaning busy student-athletes and musicians have built-in stress backup!',
            }
          ],
          faqs: [
            {
              q: 'How many hours a day must teens wear Invisalign® aligners?',
              a: 'For best results, clear aligners should be worn for 20 to 22 hours daily, being removed only for meals, dental hygiene, and occasionally during high-impact sports.'
            },
            {
              q: 'How does digital scanning replace dental molds?',
              a: 'We use high-fidelity iTero® laser scanners to capture a safe 3D color model of your child\'s jaws, rendering a complete, interactive simulation of their future smiling results in seconds!'
            },
            {
              q: 'Will aligners affect my teen\'s speech or extracurriculars?',
              a: 'There is a quick 2-day acclimation period where speech might have a slight lisp. After that, they can speak, sing, and play wind instruments or high-impact contact sports with absolute comfort.'
            }
          ]
        };

      default:
        return {
          title: 'Specialized Dental Service',
          subtitle: 'Premium, playful childhood healthcare for North Texas kids.',
          badge: 'BORED-CERTIFIED CARE',
          color: 'from-[#5BBEF7]/10 to-[#8EE3CF]/15',
          borderColor: 'border-[#5BBEF7]',
          icon: <Smile className="w-10 h-10 text-[#5BBEF7]" />,
          description: `We partner with families across DFW to provide premium, safe healthcare for all children.`,
          highlights: [],
          faqs: []
        };
    }
  };

  const data = getServiceData();

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-16">
      {/* Cinematic Header Block */}
      <section className={`bg-gradient-to-b ${data.color} via-[#5BBEF7]/5 to-transparent py-14 px-4 sm:px-6 lg:px-8 text-center`}>
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-white px-3.5 py-1.5 rounded-full text-xs font-black text-slate-700 uppercase tracking-widest inline-block border border-slate-200 shadow-xs">
            {data.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Main Info Blocks */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main narrative block */}
          <div className="lg:col-span-7 space-y-8">
            <div className={`bg-white rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-md ${data.borderColor} border-t-8 space-y-6`}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  {data.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg leading-snug">Comprehensive Specialized Care</h3>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Certified Pediatric Treatment</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line">
                {data.description}
              </p>

              {/* Sub-CTA */}
              <div className="bg-[#FAFAFA] p-5 rounded-2xl border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-black block">HAVE QUESTIONS?</span>
                  <span className="text-xs font-bold text-slate-700">We provide free pediatric phone consultations.</span>
                </div>
                <a
                  href="tel:9034023200"
                  className="bg-[#5BBEF7] hover:bg-[#49aee0] text-white px-4 py-2 rounded-xl text-xs font-extrabold shadow-sm flex items-center gap-1.5"
                  id="service-call-cta"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(903) 402-3200</span>
                </a>
              </div>
            </div>

            {/* FAQs Block */}
            {data.faqs.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-extrabold text-slate-800 text-md uppercase tracking-wider flex items-center gap-2 pl-2">
                  <HelpCircle className="w-5 h-5 text-[#8EE3CF]" /> Answers to Parent Questions
                </h3>
                <div className="space-y-4">
                  {data.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs space-y-2">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base flex items-start gap-2">
                        <span className="text-[#5BBEF7] font-black">Q:</span>
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm pl-5 leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                        <span className="text-[#8EE3CF] font-black mr-1">A:</span> {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Highlights Sidebar Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[28px] border border-slate-100 p-6 sm:p-7 shadow-md space-y-5">
              <span className="bg-[#8EE3CF]/15 text-[#1a6352] text-[10px] font-black tracking-widest py-1 px-3 rounded-full uppercase inline-block">
                ✨ TREATMENT ADVANTAGES
              </span>
              <h3 className="font-extrabold text-slate-800 text-lg leading-tight">Key Pediatric Features</h3>
              
              <div className="space-y-4 pt-1">
                {data.highlights.map((hlt, idx) => (
                  <div key={idx} className="border-b border-slate-50 pb-4 last:border-0 last:pb-0 space-y-1">
                    <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#FFD166] fill-[#FFD166] shrink-0" />
                      <span>{hlt.title}</span>
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed pl-6">{hlt.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-sm transition cursor-pointer flex items-center justify-center gap-2"
                  id="service-sidebar-book"
                >
                  <Calendar className="w-4 h-4 text-[#8EE3CF]" />
                  <span>Reserve Appointment</span>
                </button>
              </div>
            </div>

            {/* Insurance note */}
            <div className="bg-gradient-to-br from-[#5BBEF7]/5 to-[#8EE3CF]/10 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-widest flex items-center gap-1">
                <Shield className="w-4 h-4 text-[#5BBEF7]" /> Direct Insurance & Financing:
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Texas Tiny Teeth accepts most major PPO dental insurances, Chip, and Medicaid programs across Texas. We provide flexible interest-free in-house payment options!
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
