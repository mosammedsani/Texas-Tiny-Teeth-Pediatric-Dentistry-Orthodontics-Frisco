import { Doctor, ClinicLocation, ServiceDetail, Review } from './types';
const drSarahCroftImg = '/src/assets/images/dr_sarah_croft_1780073064043.png';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-james-croft',
    name: 'Dr. James S. Croft, DDS',
    title: 'Founder & Pediatric Dentist',
    bio: 'Dr. James Croft is the visionary founder of Texas Tiny Teeth. Deeply committed to shifting standard perceptions of pediatric dentistry, Dr. Croft believes that a child\'s earliest dental visits set the milestone for lifelong oral wellness. Known for his legendary dental chair magic tricks, Dr. Croft makes children laugh while completing dental checks in a completely trauma-free environment.',
    education: [
      'Doctor of Dental Surgery (DDS) - Baylor College of Dentistry',
      'Specialization Certificate in Pediatric Dentistry - Children\'s Medical Center Dallas',
      'Active Member - American Academy of Pediatric Dentistry (AAPD)'
    ],
    funFact: 'He is a magician and can make a dental mirror "disappear" or turn into a balloon animal right before your eyes!',
    favoriteToy: 'Vintage Tin Wind-up Robots & LEGO Captain America',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=600',
    specialties: ['Behavior Guidance', 'Infant Early Tooth Intervention', 'Infant Lip & Tongue Ties (Frenectomy)']
  },
  {
    id: 'dr-sarah-croft',
    name: 'Dr. Sarah Croft, DDS',
    title: 'Board-Certified Pediatric Dentist',
    bio: 'Dr. Sarah Croft combines exceptional clinical rigor with a soft, comforting maternal presence. Specializing in conscious sedation and sensory-adapted dental workflows, she has spent more than a decade designing child-friendly protocols that turn anxiety-inducing visits into peaceful, happy moments. Parents trust her meticulous diagnostics and compassionate communication style.',
    education: [
      'Doctor of Dental Surgery (DDS) - Texas A&M College of Dentistry',
      'Diplomate - American Board of Pediatric Dentistry',
      'Residency in Pediatric Dentistry - Dr. William Dent Children\'s Hospital'
    ],
    funFact: 'She was a competitive ice skater and occasionally teaches her young patients how to do the "penguin slide" before they hop onto the chair!',
    favoriteToy: 'Sparkly Sensory Stress Balls & Disney Plushies',
    image: drSarahCroftImg,
    specialties: ['Conscious Sedation', 'Sensory Dental Care for Autism Spectrum', 'Aesthetic Air-Abrasion Fillings']
  },
  {
    id: 'dr-matthew-james',
    name: 'Dr. Matthew James, DMD',
    title: 'Associate Pediatric Dentist',
    bio: 'Dr. Matt believes that kids are heroes and should be treated with utmost celebration! His dental checkups are noisy, joyful, and filled with high-fives. He specializes in early childhood preventative treatments and pediatric athletic mouthguards, guiding families on early dental hygiene and nutritional steps with a smile.',
    education: [
      'Doctor of Dental Medicine (DMD) - UT Health San Antonio School of Dentistry',
      'Pediatric Dental Specialty Residency - University of Florida Dental Center'
    ],
    funFact: 'He was a competitive collegiate gymnast and can hold a full handstand right on his rolling stool!',
    favoriteToy: 'Classic Metallic Slinky & Dino-grabber Claws',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600&h=600',
    specialties: ['Mouthguards & Athletic Prevention', 'Space Maintainers & Growth Interventions', 'Laughing Gas Therapy']
  },
  {
    id: 'dr-brandon-cooper',
    name: 'Dr. Brandon Cooper, DDS',
    title: 'Associate Pediatric Dentist',
    bio: 'Dr. Cooper excels in advanced pediatric restorative treatments, helping children repair early decay with gentle care. He has spent years researching mercury-free pediatric fillings and loves detailing the mechanics of "Mr. Slurpy" (the high-volume suction straw) to inquisitive youngsters.',
    education: [
      'Doctor of Dental Surgery (DDS) - UT Houston School of Dentistry',
      'Post-doctoral Pediatric Dentist Training Certificate - Texas Medical Center'
    ],
    funFact: 'He loves cartooning and will happily draw a custom doodle of your favorite animal of choice on your take-home dental goody bag!',
    favoriteToy: 'Transforming LEGO Creator Sets & Drawing Tablets',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=600',
    specialties: ['White Pediatric Zirconia Crowns', 'Silver Diamine Fluoride (SDF)', 'Hospital General Anesthesia Dentistry']
  }
];

export const LOCATIONS: ClinicLocation[] = [
  {
    id: 'athens',
    name: 'Athens Office',
    phone: '(903) 402-3200',
    address: '800 S Palestine St, Athens, TX 75751',
    city: 'Athens',
    hours: [
      'Monday - Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 1:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Marsha Taylor',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.4827113177727!2d-95.8502534848053!3d32.20325348083758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649ca6933333333%3A0xcd499ff367464010!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Athens!5e0!3m2!1sen!2sus!4v1680000000010'
  },
  {
    id: 'corinth',
    name: 'Corinth Office',
    phone: '(903) 402-3200',
    address: '3001 FM 2181, Corinth, TX 76210',
    city: 'Corinth',
    hours: [
      'Monday - Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 1:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Ashley Vance, RDH',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.1947113177727!2d-97.0725340848053!3d33.13253498083758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c394344444445%3A0x6bba84752c0cd690!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Corinth!5e0!3m2!1sen!2sus!4v1680000000011'
  },
  {
    id: 'corsicana',
    name: 'Corsicana Office',
    phone: '(903) 402-3200',
    address: '3811 W Highway 31, Corsicana, TX 75110',
    city: 'Corsicana',
    hours: [
      'Monday - Thursday: 8:30 AM - 5:00 PM',
      'Friday: 8:00 AM - 1:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Grace Kelly',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.212763261642!2d-96.49293148481549!3d32.08725498093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f156933333333%3A0xed499ff367464010!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Corsicana!5e0!3m2!1sen!2sus!4v1680000000012'
  },
  {
    id: 'frisco',
    name: 'Frisco Office',
    phone: '(903) 402-3200',
    address: '8840 Teel Pkwy, Frisco, TX 75034',
    city: 'Frisco',
    hours: [
      'Monday - Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 3:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Brittany Larson',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.212763261642!2d-96.90293148481549!3d33.15725498093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea56944444444%3A0xed499ff36746402a!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Frisco!5e0!3m2!1sen!2sus!4v1680000000007'
  },
  {
    id: 'greenville',
    name: 'Greenville Office',
    phone: '(903) 402-3200',
    address: '3010 Wesley St, Greenville, TX 75401',
    city: 'Greenville',
    hours: [
      'Monday - Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 1:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Melissa Rogers',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.5417855013063!2d-96.11581408481!3d33.13628798086438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864be3fd44444445%3A0x89ad0d7b7ad03fbf!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Greenville!5e0!3m2!1sen!2sus!4v1680000000002'
  },
  {
    id: 'irving',
    name: 'Irving Office',
    phone: '(903) 402-3200',
    address: '3401 N MacArthur Blvd, Irving, TX 75062',
    city: 'Irving',
    hours: [
      'Monday - Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 2:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Jessica Munoz',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.642763261642!2d-96.95293148481549!3d32.85725498093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c294333333333%3A0xed499ff36746401a!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Irving!5e0!3m2!1sen!2sus!4v1680000000013'
  },
  {
    id: 'melissa',
    name: 'Melissa Office',
    phone: '(903) 402-3200',
    address: '3020 Melissa Rd, Melissa, TX 75454',
    city: 'Melissa',
    hours: [
      'Monday - Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 1:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Amanda Brooks',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.112763261642!2d-96.57193148481549!3d33.28725498093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea56955555555%3A0xed499ff36746402d!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Melissa!5e0!3m2!1sen!2sus!4v1680000000006'
  },
  {
    id: 'rowlett',
    name: 'Rowlett Office',
    phone: '(903) 402-3200',
    address: '3705 Lakeview Pkwy, Rowlett, TX 75088',
    city: 'Rowlett',
    hours: [
      'Monday - Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 2:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Nora Davis',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.641763261642!2d-96.55193148481549!3d32.95725498093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea56911111111%3A0xed499ff367464022!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Rowlett!5e0!3m2!1sen!2sus!4v1680000000004'
  },
  {
    id: 'sachse',
    name: 'Sachse Office',
    phone: '(903) 402-3200',
    address: '5250 Murphy Rd, Sachse, TX 75048',
    city: 'Sachse',
    hours: [
      'Monday - Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 2:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Sarah Jenkins',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.542763261642!2d-96.59293148481549!3d33.01725498093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea5692222222a%3A0xed499ff367464023!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Sachse!5e0!3m2!1sen!2sus!4v1680000000014'
  },
  {
    id: 'terrell',
    name: 'Terrell Office',
    phone: '(903) 402-3200',
    address: '1400 W Moore Ave, Terrell, TX 75160',
    city: 'Terrell',
    hours: [
      'Monday - Thursday: 8:30 AM - 5:00 PM',
      'Friday: 8:00 AM - 1:00 PM',
      'Saturday - Sunday: Closed'
    ],
    manager: 'Marsha Taylor',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.212763261642!2d-96.29293148481549!3d32.73725498093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea56933333333%3A0xed499ff36746401c!2sTexas%20Tiny%20Teeth%20Pediatric%20Dentistry%20-%20Terrell!5e0!3m2!1sen!2sus!4v1680000000005'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    shortDesc: 'A specialization designed entirely to support children\'s emotional comfort and oral physiology.',
    fullDesc: 'Pediatric dentistry involves managing the comprehensive oral health of children from infancy through their teenage years. Because children have unique developmental patterns, primary teeth configuration, and distinct cognitive triggers, pediatric dental clinical setups differ immensely from adult care. Our doctors spend an extra two to three years of post-doctoral training specialized in child psychology, growth management, and safety protocols.',
    iconName: 'Baby',
    color: 'bg-[#5BBEF7]',
    funPoints: [
      'Custom ceiling-mounted screen entertainment above dental chairs',
      'Gentle kid-friendly storytelling explanations of every dental instrument',
      'Generous tokens, stickers, and a magical toy tower selection after visits',
      'A cozy dental environment with comfortable booster seats'
    ],
    parentFaQs: [
      {
        q: 'When should my child first see a pediatric dentist?',
        a: 'The American Academy of Pediatric Dentistry recommends establishing the first "Dental Home" by your child\'s first birthday or within six months of their first baby tooth erupting.'
      },
      {
        q: 'Why see a pediatric specialist instead of a general dentist?',
        a: 'Pediatric dentists undergo extensive residual training focused solely on childhood development, specialized sedation safety, and cooperative techniques for children with varying sensory profiles.'
      }
    ]
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care',
    shortDesc: 'Building strong foundations so decay never catches up with your tiny explorer\'s smile.',
    fullDesc: 'Preventative care represents the most important element of pediatric dentistry. By checking development patterns, tracking natural spacing, and providing early feedback, we minimize the necessity of extensive crowns or early extractions. Our preventive services focus heavily on teaching families effective routines.',
    iconName: 'ShieldCheck',
    color: 'bg-[#8EE3CF]',
    funPoints: [
      'A customized plaque-revealing strawberry visual rinse session',
      'Kid-approved organic toothpaste flavors (Watermelon, Bubblegum, Mint)',
      'Colorful educational dental brush-along song guidance',
      'Early nutritional advice to prevent bottle tooth decay'
    ],
    parentFaQs: [
      {
        q: 'How often should kids have preventive cleanings?',
        a: 'Every 6 months is the golden standard to track high-fructose fruit diets, detect localized decay early, and refresh protective top coatings.'
      }
    ]
  },
  {
    id: 'fluoride-treatments',
    title: 'Fluoride Treatments',
    shortDesc: 'Super-charging dental enamel with protective layers that shield against acidic cavity bacteria.',
    fullDesc: 'Fluoride varnish application is an incredibly swift and completely non-invasive way to lock in minerals. The professional child-safe fluoride varnish is gently painted directly onto primary and permanent teeth, drying instantly in contact with saliva. This barrier assists in re-mineralizing early microscopic enamel soft spots.',
    iconName: 'Sparkles',
    color: 'bg-[#FFD166]',
    funPoints: [
      'Painted on in under 30 seconds with absolutely zero tingling sensations',
      'Available in delicious flavors like chocolate, bubblegum, and butterscotch',
      'Allows your child to eat and drink cool fluids immediately afterward',
      'Crucial shield against overnight pediatric sweet tooth snacks'
    ],
    parentFaQs: [
      {
        q: 'Is professional fluoride safe for children?',
        a: 'Yes, highly. Our painted-on varnish ensures immediate adhesion, preventing the child from accidentally swallowing excess portions compared to foam trays.'
      }
    ]
  },
  {
    id: 'sealants',
    title: 'Dental Sealants',
    shortDesc: 'Smooth protective shields painted on the grooved tops of adult molars to lock out food particles.',
    fullDesc: 'Molars contain deep, microscopic pits and grooves where food particles and acidic plaque naturally settle. Because standard toothbrush bristles are often too wide to reach the base of these deep grooves, sealants act as a smooth glass protective coating. We paint these liquid coatings onto the biting surfaces, instantly drying them with a cool blue curing light.',
    iconName: 'Umbrella',
    color: 'bg-[#FFB5D2]',
    funPoints: [
      'No drills, no needles, and absolutely no dental numbing required',
      'Bonds securely to teeth in just a few minutes, lasting for years',
      'Reduces the rate of child molar cavities by up to 80%',
      'Virtually invisible, blending right into the natural tooth color'
    ],
    parentFaQs: [
      {
        q: 'At what age should children get dental sealants?',
        a: 'Sealants should ideally be applied as soon as permanent molars fully emerge, typically around age 6 for the first molars, and age 12 for the second molars.'
      }
    ]
  },
  {
    id: 'sedation-dentistry',
    title: 'Sedation Dentistry',
    shortDesc: 'Comfort-maximizing sedation techniques to help anxious stars dream peacefully during care.',
    fullDesc: 'Our office offers high-standard, gentle sedation options tailored strictly to pediatric guidelines. Whether a child has intense dental fear, extensive decay needing a single prolonged visit, or sensitive sensory triggers, we maintain multiple comfort-maximizing levels. From sweet-scented laughing gas to conscious oral sedation, absolute safety remains our paramount protocol.',
    iconName: 'HeartPulse',
    color: 'bg-[#5BBEF7]',
    funPoints: [
      'Sweet-scented nasal masks with flavors like Grape, Strawberry, or Cherry',
      'Continuous advanced pulse oximetry monitoring of vital signs',
      'Highly trained board-certified pediatric specialists conducting all steps',
      'A soothing recovery area with cozy pillows and books'
    ],
    parentFaQs: [
      {
        q: 'What are the main pediatric sedation categories?',
        a: 'We provide: 1. Nitrous Oxide (Laughing Gas) - relaxes kids easily and wears off within 2 minutes. 2. Conscious Oral Sedation - an easy oral liquid that induces deep relaxation. 3. General Anesthesia - administered in-office alongside an licensed anesthesiologist.'
      },
      {
        q: 'How should my child prepare for a sedation appointment?',
        a: 'For oral or deep sedation, children must strictly avoid foods or heavy clear liquids for 6 to 8 hours beforehand. Our administrative staff will walk you through precise safety checklists.'
      }
    ]
  },
  {
    id: 'special-needs',
    title: 'Special Needs Dentistry',
    shortDesc: 'Soothed sensory environments, specialized dental chairs, and compassionate, patience-first care.',
    fullDesc: 'Texas Tiny Teeth is recognized across Dallas-Fort Worth as a sanctuary clinic for children with special clinical, developmental, and sensory requirements. We recognize that children on the Autism Spectrum, those with ADHD, Down Syndrome, cerebral palsy, or sensory-processing sensitivities benefit from tailored pacing, dimmable LED therapy rooms, and customized cooperative games.',
    iconName: 'Heart',
    color: 'bg-[#8EE3CF]',
    funPoints: [
      'Highly adjustable quiet dental instruments designed to minimize startling noise',
      'Pacing-first visits where we explain and touch every single tool beforehand',
      'Weighted sensory blankets and stress balls available for heavy touch input',
      'Quiet, dedicated low-stimulation treatment rooms'
    ],
    parentFaQs: [
      {
        q: 'Can I stay in the room with my special needs child?',
        a: 'Absolutely! We promote parent presence and partner closely with you to integrate your child\'s favorite calming keywords, toys, and triggers.'
      }
    ]
  },
  {
    id: 'restorative-dentistry',
    title: 'Restorative Dentistry',
    shortDesc: 'Gentle repairs for little teeth including white fillings, crowns, and calming root treatments.',
    fullDesc: 'If your child develops a cavity, early therapeutic restoration is critical to stop pain and prevent systemic infection. We specialize in child-friendly, mercury-free composite white fillings that blend seamlessly into back tooth surfaces, high-durability white zirconia crowns, and gentle baby nerve therapy (pulpotomy).',
    iconName: 'Wrench',
    color: 'bg-[#FFD166]',
    funPoints: [
      'Beautiful tooth-colored fillings that match their natural teeth perfectly',
      'Super-hero "tooth hats" (crowns) that restore biting power for crisp apples',
      'Gentle baby root treatments that erase annoying dental aches instantly',
      'Always accompanied by a comforting favorite movie on the screen!'
    ],
    parentFaQs: [
      {
        q: 'Do baby teeth really need restorations if they fall out anyway?',
        a: 'Yes. Primary teeth maintain crucial spacing for upcoming adult teeth. Early decay left untreated can cause massive jaw aches, speech development errors, and migrate directly into developing permanent teeth.'
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    parentName: 'Marcus V.',
    childName: 'Leo (Age 6)',
    rating: 5,
    text: 'Texas Tiny Teeth changed how my son views dental visits! Dr. Croft was fantastic. He did a small magic trick, explained "Mr. Slurpy" the water vacuum, and Leo was giggling the whole time. The Greenville clinic feels like a premium children\'s lounge!',
    date: 'May 14, 2026',
    location: 'Greenville'
  },
  {
    id: 'rev-2',
    parentName: 'Christina T.',
    childName: 'Emma (Age 4)',
    rating: 5,
    text: 'My daughter has severe sensory processing disorder, and going to the dentist used to trigger intense meltdowns. The staff at the Garland office set up a low-stimulation quiet room with weighted blankets. Incredible compassion, patience, and professional expertise. Highly, highly recommend!',
    date: 'April 22, 2026',
    location: 'Garland'
  },
  {
    id: 'rev-3',
    parentName: 'David K.',
    childName: 'James & Toby (Ages 7 & 9)',
    rating: 5,
    text: 'Very modern, super bright, and extremely clean. Schedule process was flawless. The boys loved the ceiling screens playing Disney while getting their cleanings. Dr. Sarah was clear, did not push unnecessary treatments, and reassured us about spacing.',
    date: 'March 10, 2026',
    location: 'Decatur'
  },
  {
    id: 'rev-4',
    parentName: 'Samantha G.',
    childName: 'Zoe (Age 5)',
    rating: 5,
    text: 'The sedation options here are wonderful. Zoe was so afraid of fillings, but under laughing gas with Dr. Matt, she was completely relaxed, comfortable, and felt absolute zero pain. The token reward tower at the exit was her favorite part!',
    date: 'May 2, 2026',
    location: 'Rowlett'
  }
];

export const OFFICE_GALLERY_IMAGES = [
  {
    title: 'Playful Waiting Area',
    desc: 'Brimming with visual color, toys, and digital entertainment tablets for kids.',
    url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    title: 'Ceiling Screen Treatment Rooms',
    desc: 'Equipped with child-friendly screens directly on the custom ceilings.',
    url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    title: 'The Magic Token Tower',
    desc: 'Where every single brave patient gets to choose their well-earned reward!',
    url: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    title: 'Toddler Care Station',
    desc: 'Soft, miniature dental stations custom-crafted to decrease clinical fear.',
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=400'
  }
];
