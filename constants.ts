
import {
  Home,
  Tv,
  ShieldCheck,
  Lightbulb,
  Speaker,
  Wind,
  Droplets,
  Building,
  Zap,
  Wifi,
  Battery,
  Mic,
  Smartphone,
  Sun,
  Gamepad
} from 'lucide-react';
import { Service, Product, ServiceCategory, NavItem, PortfolioProject, ServiceDetailData, ProductDetailData, PortfolioDetailData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    id: 'home-automation',
    title: 'Home Automation',
    subtitle: 'Seamlessly integrate every aspect of your home.',
    image: '/assets/images/hero_luxury.png',
    features: [
      { title: 'Lighting & Curtains', description: 'Adaptive lighting that follows your rhythm.', image: '/assets/images/img_c5686d098957.jpg' },
      { title: 'Climate Control', description: 'Perfect temperature in every room, always.', image: '/assets/images/img_4fac6e45ff2c.jpg' },
      { title: 'Security', description: '24/7 monitoring and intelligent alerts.', image: '/assets/images/img_6ea09ac655b8.jpg' },
      { title: 'Automated Shades', description: 'Natural light management at a touch.', image: '/assets/images/img_189f03a432d8.jpg' },
      { title: 'Access Control', description: 'Secure keyless entry for your family.', image: '/assets/images/img_f09fdf964e08.jpg' },
      { title: 'Energy Monitoring', description: 'Optimize your consumption in real-time.', image: '/assets/images/img_9e2738cde5d6.jpg' }
    ]
  },
  {
    id: 'home-theater',
    title: 'Home Theater',
    subtitle: 'Experience the movies like never before, right at home.',
    image: '/assets/images/img_e3ab2c634130.jpg',
    features: [
      { title: '4K Laser Projectors', description: 'Crystal clear imagery on massive screens.', image: '/assets/images/img_13246fc0455c.jpg' },
      { title: 'Dolby Atmos Audio', description: 'Immersive 3D sound that moves around you.', image: '/assets/images/img_2557a3195bef.jpg' },
      { title: 'Acoustic Treatment', description: 'Studio-grade sound isolation and clarity.', image: '/assets/images/img_36f27919b1a6.jpg' },
      { title: 'Cinema Seating', description: 'Ergonomic luxury recliners for hours of comfort.', image: '/assets/images/img_fa71d290854e.jpg' },
      { title: 'Star Ceiling', description: 'Fiber optic acoustic panels for ambiance.', image: '/assets/images/img_f5138919e7de.jpg' },
      { title: 'Media Server', description: 'Your entire movie library at a click.', image: '/assets/images/img_a5de3b6534df.jpg' }
    ]
  },
  {
    id: 'living-room',
    title: 'Living Room',
    subtitle: 'Premium audio and visual solutions for your living space.',
    image: '/assets/images/img_fa71d290854e.jpg',
    features: [
      { title: 'Hidden Displays', description: 'TVs that disappear when not in use.', image: '/assets/images/img_8e77d06750fb.jpg' },
      { title: 'Hi-Fi Audio', description: 'Audiophile-grade sound systems.', image: '/assets/images/img_f31156d2f7f2.jpg' },
      { title: 'Media Streaming', description: 'All your content in one place.', image: '/assets/images/img_a5de3b6534df.jpg' },
      { title: 'Gaming Integration', description: 'Low latency setups for the win.', image: '/assets/images/img_e47e52bd26ca.jpg' },
      { title: 'Soundbars', description: 'Sleek audio that packs a punch.', image: '/assets/images/img_a0e0726f56eb.jpg' },
      { title: 'Voice Control', description: 'Hands-free media management.', image: '/assets/images/img_6ea09ac655b8.jpg' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Intelligent solutions for modern businesses and offices.',
    image: '/assets/images/img_d8c80cf3670c.jpg',
    features: [
      { title: 'Smart Conference', description: 'One-touch video calls and presentations.', image: '/assets/images/img_a151a9e5ca5f.jpg' },
      { title: 'Access Control', description: 'Secure entry management for employees.', image: '/assets/images/img_1d0bb6fa0e4e.jpg' },
      { title: 'Smart HVAC', description: 'Automated climate control for large spaces.', image: '/assets/images/img_118bcb0b1c73.jpg' },
      { title: 'Energy Management', description: 'Optimize consumption and reduce costs.', image: '/assets/images/img_9e2738cde5d6.jpg' },
      { title: 'Sound Masking', description: 'Privacy solutions for open offices.', image: '/assets/images/img_064aab9f12a0.jpg' },
      { title: 'Digital Signage', description: 'Dynamic displays for communication.', image: '/assets/images/img_fa71d290854e.jpg' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'home-automation',
    title: 'Home Automation',
    description: 'Smart living solutions for your home.',
    category: ServiceCategory.HOME_AUTOMATION,
    icon: Home,
    features: ['Lighting & Curtains', 'Keypads Automation', 'Climate Control'],
    image: '/assets/images/img_a151a9e5ca5f.jpg',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Automation for commercial spaces.',
    category: ServiceCategory.COMMERCIAL,
    icon: Building,
    features: ['Office Automation', 'Hotels/Restaurants', 'Hospitality'],
    image: '/assets/images/img_03aeedc2754c.jpg',
  },
  {
    id: 'home-theater',
    title: 'Home Theater',
    description: 'Immersive audio and visual experiences.',
    category: ServiceCategory.HOME_THEATER,
    icon: Speaker,
    features: ['4K Projection', 'Dolby Atmos', 'Acoustic Treatment'],
    image: '/assets/images/img_118bcb0b1c73.jpg',
  },
  {
    id: 'living-room',
    title: 'Living Room',
    description: 'Home theater / Lifestyle Speakers.',
    category: ServiceCategory.HOME_THEATER,
    icon: Tv,
    features: ['Hidden Displays', 'High Fidelity', 'Media Integration'],
    image: '/assets/images/img_5bdefbaf2ff4.jpg',
  },
  {
    id: 'multi-room-av',
    title: 'Multi Room AV',
    description: 'Audio visual distribution.',
    category: ServiceCategory.HOME_THEATER,
    icon: Speaker,
    features: ['Zone Wise Speakers', 'Centralized Sources', 'App Control'],
    image: '/assets/images/card_entertainment.png',
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Advanced protection for your peace of mind.',
    category: ServiceCategory.EXTERIOR,
    icon: ShieldCheck,
    features: ['CCTV', 'Intrusion Detection', 'Smart Locks'],
    image: '/assets/images/card_security.png',
  },
  {
    id: 'controllers',
    title: 'Controllers',
    description: 'Centralized control.',
    category: ServiceCategory.HOME_AUTOMATION,
    icon: Gamepad,
    features: ['Universal Remote', 'Touch Panels', 'Voice Control'],
    image: '/assets/images/img_91b150fa96d3.jpg',
  }
];

// Detailed data for Service Detail Pages
export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'home-automation': {
    id: 'home-automation',
    title: 'Home Automation',
    subtitle: 'A Home That Thinks for You',
    heroImage: '/assets/images/img_a151a9e5ca5f.jpg',
    introTitle: 'Orchestrate your entire home environment.',
    introText: 'Smart Living elevates your daily routine by unifying lighting, shades, climate, and entertainment into a single, intuitive system.',
    features: [
      {
        title: 'Keypad Automation',
        description: 'Elegant controls for your entire home.',
        image: '/assets/images/img_af29e76905cd.jpg'
      },
      {
        title: 'Climate Control',
        description: 'Smart temperature management for comfort and efficiency.',
        image: '/assets/images/img_adde05ea073a.jpg'
      },
      {
        title: 'Voice Integration',
        description: 'Hands-free control for effortless living.',
        image: '/assets/images/img_3f750d916f33.jpg'
      }
    ]
  },
  'commercial': {
    id: 'commercial',
    title: 'Commercial Automation',
    subtitle: 'Intelligent Business Solutions',
    heroImage: '/assets/images/img_03aeedc2754c.jpg',
    introTitle: 'Efficiency and control for the modern workplace.',
    introText: 'Streamline operations with our commercial automation systems. From boardrooms to building management.',
    features: [
      {
        title: 'Video Conferencing',
        description: 'Seamless communication solutions.',
        image: '/assets/images/img_e5b1739b3b0d.jpg'
      },
      {
        title: 'Office Automation',
        description: 'Integrated control for productivity.',
        image: '/assets/images/img_10bc5fc12434.jpg'
      },
      {
        title: 'Hospitality',
        description: 'Enhance guest experiences.',
        image: '/assets/images/img_7bff115f22ef.jpg'
      }
    ]
  },
  'home-theater': {
    id: 'home-theater',
    title: 'Home Theater',
    subtitle: 'Cinematic Excellence',
    heroImage: '/assets/images/img_e3ab2c634130.jpg',
    introTitle: 'The ultimate entertainment experience.',
    introText: 'Bring the cinema home with expert design, 4K projection, and Dolby Atmos audio.',
    features: [
      {
        title: '4K Laser Projection',
        description: 'Crystal clear visuals.',
        image: '/assets/images/img_44e6dd24e97f.jpg'
      },
      {
        title: 'Immersive Audio',
        description: 'Sound that surrounds you.',
        image: '/assets/images/img_b87e882cda5c.jpg'
      },
      {
        title: 'Acoustic Treatment',
        description: 'Perfect sound isolation.',
        image: '/assets/images/img_fe31fbb9b30b.jpg'
      }
    ]
  },
  'security': {
    id: 'security',
    title: 'Security',
    subtitle: 'Protected & Secure',
    heroImage: '/assets/images/card_security.png',
    introTitle: 'Advanced surveillance and access control.',
    introText: 'Keep your property safe with high-definition CCTV, smart locks, and 24/7 monitoring integration.',
    features: [
      {
        title: 'CCTV Surveillance',
        description: 'High definition monitoring.',
        image: '/assets/images/img_e35337d12fd1.jpg'
      },
      {
        title: 'Smart Locks',
        description: 'Secure keyless entry.',
        image: '/assets/images/img_d965decc0ea3.jpg'
      },
      {
        title: 'Intrusion Detection',
        description: 'Instant alerts for unauthorized access.',
        image: '/assets/images/img_067c62cf8d68.jpg'
      }
    ]
  }
};

export const PRODUCTS: Product[] = [
  // --- Home Automation ---
  {
    id: 'tyba',
    name: 'Tyba',
    category: 'Home Automation',
    description: 'Refined architectural keypads and touch interfaces.',
    image: '/assets/images/img_af29e76905cd.jpg'
  },
  {
    id: 'one-touch',
    name: 'One Touch',
    category: 'Home Automation',
    description: 'Simplifying smart home control with intuitive panels.',
    image: '/assets/images/img_e942ea4e9e81.jpg'
  },
  {
    id: 'blacknova',
    name: 'Blacknova',
    category: 'Home Automation',
    description: 'Luxury design keypads merging Italian aesthetics with technology.',
    image: '/assets/images/img_2557a3195bef.jpg'
  },
  {
    id: 'security-cctv',
    name: 'CCTV & Security',
    category: 'Home Automation',
    description: 'High-definition surveillance and smart locking systems.',
    image: '/assets/images/img_e35337d12fd1.jpg'
  },

  // --- Home Theater ---
  {
    id: 'ascendo',
    name: 'Ascendo',
    category: 'Home Theater',
    description: 'World-class immersive audio systems.',
    image: '/assets/images/img_b87e882cda5c.jpg'
  },
  {
    id: 'speakercraft-ht',
    name: 'Speakercraft',
    category: 'Home Theater',
    description: 'Premium architectural speakers.',
    image: '/assets/images/img_13246fc0455c.jpg'
  },
  {
    id: 'projectors',
    name: 'Projectors',
    category: 'Home Theater',
    description: '4K and 8K laser projection.',
    image: '/assets/images/img_44e6dd24e97f.jpg'
  },
  {
    id: 'acoustic-screen',
    name: 'Acoustic Screen',
    category: 'Home Theater',
    description: 'Acoustically transparent screens.',
    image: '/assets/images/img_fe31fbb9b30b.jpg'
  },

  // --- Living Room ---
  {
    id: 'hifi-audio',
    name: 'Hi-Fi Audio',
    category: 'Living Room',
    description: 'High-fidelity speakers optimized for living spaces.',
    image: '/assets/images/img_b85538f0571d.jpg'
  },
  {
    id: 'hidden-tech',
    name: 'Hidden Technology',
    category: 'Living Room',
    description: 'Discreet audio and visual solutions.',
    image: '/assets/images/img_5bdefbaf2ff4.jpg'
  },

  // --- Commercial ---
  {
    id: 'av-conference',
    name: 'AV Conference',
    category: 'Commercial',
    description: 'Professional conferencing solutions.',
    image: '/assets/images/img_e5b1739b3b0d.jpg'
  },
  {
    id: 'smart-office',
    name: 'Smart Office',
    category: 'Commercial',
    description: 'Integrated lighting and climate control for offices.',
    image: '/assets/images/img_03aeedc2754c.jpg'
  },

  // --- Multi Room AV ---
  {
    id: 'multi-room-audio',
    name: 'Multi-Room Audio',
    category: 'Multi Room AV',
    description: 'Seamless audio distribution throughout the property.',
    image: '/assets/images/card_entertainment.png'
  }
];

// Product Detail Data
export const PRODUCT_DETAILS: Record<string, ProductDetailData> = {
  'lightings-curtains': {
    id: 'lightings-curtains',
    name: 'Lightings & Curtains',
    tagline: 'Intelligent Ambiance',
    rating: 4.9,
    reviews: 320,
    heroImage: '/assets/images/img_e942ea4e9e81.jpg',
    description: 'Experience the perfect blend of natural and artificial light. Our integrated solutions allow you to orchestrate the mood of your home with precision.',
    quote: 'Lighting is the jewelry of the home. It transforms spaces and elevates the everyday experience.',
    highlights: [
      { title: 'Scene Control', description: 'Recall your favorite settings instantly.', icon: Zap },
      { title: 'Schedule Automation', description: 'Curtains that wake you up with the sun.', icon: Sun },
      { title: 'Energy Saving', description: 'Optimize usage and reduce costs.', icon: Battery }
    ],
    variantsTitle: 'Discover the Collection',
    variants: [
      { name: 'Motorized Shades', price: 'Custom', image: '/assets/images/img_189f03a432d8.jpg' },
      { name: 'Smart Dimmers', price: 'From $120', image: '/assets/images/img_e0a474816ce7.jpg' },
      { name: 'RGBW Bulbs', price: 'From $45', image: '/assets/images/img_6b20535b7422.jpg' }
    ],
    bannerTitle: 'Set the Scene',
    bannerSubtitle: 'From vibrant parties to cozy movie nights.',
    bannerImage: '/assets/images/img_b85538f0571d.jpg',
    featureGrid: [
      { title: 'Designed for Elegance', description: 'Hardware that complements your interior design.', image: '/assets/images/img_f8bfb4229396.jpg' },
      { title: 'Effortless Control', description: 'Manage everything from your phone or voice.', image: '/assets/images/img_816262825d0e.jpg' }
    ],
    faqs: [
      { question: 'Can I retrofit this into an existing home?', answer: 'Yes, we offer wireless solutions perfect for retrofits.' },
      { question: 'Is it compatible with Alexa?', answer: 'Absolutely, along with Google Home and Apple HomeKit.' },
      { question: 'Do the curtains work manually?', answer: 'Yes, they feature touch-and-go technology.' }
    ],
    closingTitle: 'Illuminate Your Life',
    closingImage: '/assets/images/img_0a460184bffc.jpg'
  },
  // Fallback / Generic data for other products to prevent crashes
  'default': {
    id: 'default',
    name: 'Premium Product',
    tagline: 'Excellence in Automation',
    rating: 5.0,
    reviews: 100,
    heroImage: '/assets/images/img_816262825d0e.jpg',
    description: 'This is a premium product designed to enhance your living space with state-of-the-art technology and elegant design.',
    quote: 'Innovation that seamlessly blends into your lifestyle.',
    highlights: [
      { title: 'Premium Quality', description: 'Built with the finest materials.', icon: ShieldCheck },
      { title: 'Smart Connectivity', description: 'Always connected, always ready.', icon: Wifi },
      { title: 'Easy Integration', description: 'Works with your existing ecosystem.', icon: Zap }
    ],
    variantsTitle: 'Available Models',
    variants: [
      { name: 'Standard Model', price: 'Inquire', image: '/assets/images/img_f09fdf964e08.jpg' },
      { name: 'Pro Model', price: 'Inquire', image: '/assets/images/img_f09fdf964e08.jpg' }
    ],
    bannerTitle: 'Experience the Future',
    bannerSubtitle: 'Technology redefined.',
    bannerImage: '/assets/images/img_189f03a432d8.jpg',
    featureGrid: [
      { title: 'Precision Engineering', description: 'Crafted for performance.', image: '/assets/images/img_e5b1739b3b0d.jpg' },
      { title: 'Intuitive Design', description: 'Easy to use for everyone.', image: '/assets/images/img_e5b1739b3b0d.jpg' }
    ],
    faqs: [
      { question: 'Is professional installation required?', answer: 'We recommend professional installation for optimal performance.' },
      { question: 'What is the warranty?', answer: 'All our products come with a standard 2-year manufacturer warranty.' }
    ],
    closingTitle: 'Upgrade Today',
    closingImage: '/assets/images/img_189f03a432d8.jpg'
  }
};

export const BRANDS = [
  "Tyba", "Blacknova", "Ascendo", "Speakercraft", "Xcase", "Crestron", "Control4", "Savant", "Lutron"
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'the-cube',
    title: 'The Cube',
    client: 'Hang Trinh',
    categories: ['Engineering', 'Residential'],
    year: '2016',
    image: '/assets/images/img_fc40a000c7ae.jpg' // Modern Exterior
  },
  {
    id: 'london-velodrome',
    title: 'London Velodrome',
    client: 'UK Sport',
    categories: ['Commercial', 'Lighting'],
    year: '2012',
    image: '/assets/images/img_a8927807bd8b.jpg' // Architectural interior
  },
  {
    id: 'manchester-airport',
    title: 'Manchester Airport',
    client: 'MAG',
    categories: ['Infrastructure', 'Security'],
    year: '2018',
    image: '/assets/images/img_1eae1ef3e1da.jpg' // Modern facade
  },
  {
    id: 'skyline-residence',
    title: 'Skyline Residence',
    client: 'Private Client',
    categories: ['Residential', 'Automation'],
    year: '2021',
    image: '/assets/images/img_1d0bb6fa0e4e.jpg' // Luxury home
  },
  {
    id: 'tech-hub',
    title: 'Tech Hub HQ',
    client: 'Innovate Corp',
    categories: ['Commercial', 'AV'],
    year: '2022',
    image: '/assets/images/img_e69bc16af8ca.jpg' // Modern office
  }
];

export const FAQ_CATEGORIES = [
  {
    id: 'general',
    label: 'General Questions',
    questions: [
      { id: 'q1', question: 'What is full home automation?', answer: 'Full home automation connects all your home\'s subsystems—lighting, climate, security, and entertainment—into a single, intelligent platform that you can control from anywhere.' },
      { id: 'q2', question: 'Can I upgrade my existing home?', answer: 'Absolutely. We offer wireless solutions (like Lutron and Z-Wave) that can be retrofitted into existing homes without the need for extensive rewiring or drywall damage.' },
      { id: 'q3', question: 'Is it compatible with Apple HomeKit/Google Home?', answer: 'Yes, our systems are designed to integrate seamlessly with major voice assistants and platforms including Apple HomeKit, Google Assistant, and Amazon Alexa.' },
    ]
  },
  {
    id: 'installation',
    label: 'Installation Process',
    questions: [
      { id: 'q4', question: 'How long does a typical project take?', answer: 'Timelines vary based on scope. A single media room takes 2-3 days, while a whole-home integration for a new build runs concurrent with construction, typically 2-8 weeks of active work.' },
      { id: 'q5', question: 'Do I need to move out during installation?', answer: 'For retrofits, no. Our team works room-by-room to minimize disruption. We pride ourselves on our "white glove" service, leaving your home cleaner than we found it.' },
    ]
  },
  {
    id: 'support',
    label: 'Support & Maintenance',
    questions: [
      { id: 'q6', question: 'What happens if the internet goes down?', answer: 'Your system is designed with local processing. Key functions like lighting, climate control, and local security integration will continue to operate normally without an internet connection.' },
      { id: 'q7', question: 'Do you offer post-installation support?', answer: 'Yes, we offer 24/7 remote monitoring and support packages. Our team is automatically alerted to system anomalies often before you even notice them.' },
    ]
  },
  {
    id: 'cost',
    label: 'Pricing & Value',
    questions: [
      { id: 'q8', question: 'How much does a smart home cost?', answer: 'Costs scale with the size of the property and complexity. Basic control systems start around $5k, while comprehensive luxury automation for large estates can range from $50k to $500k+.' },
      { id: 'q9', question: 'Do these systems save money?', answer: 'Yes, intelligent climate and lighting control can reduce energy bills by up to 30% annually, often paying for the environmental control portion of the system over time.' },
    ]
  }
];


export const PORTFOLIO_DETAILS: Record<string, PortfolioDetailData> = {
  'the-cube': {
    id: 'the-cube',
    title: 'The Cube',
    subtitle: 'Harborview Office',
    heroImage: '/assets/images/img_a8927807bd8b.jpg',
    overlayStats: [
      { label: 'Volume', value: '4200 m3' },
      { label: 'Year', value: '2016' },
      { label: 'Size', value: '1200 m2' }
    ],
    descriptionTitle: 'Design Meets Urban Functionality',
    description: 'The Cube represents a fusion of modern aesthetic and practical functionality, located in the heart of the bustling business district. This project showcases our commitment to creating impactful commercial spaces. The large glass facades allow natural light to illuminate the office throughout the day, while the interior layout promotes open communication.',
    details: [
      { label: 'Location', value: 'London, UK' },
      { label: 'Duration', value: '14 Months' },
      { label: 'Size', value: '1200 m2' },
      { label: 'Year', value: '2016' },
      { label: 'Category', value: 'Commercial' }
    ],
    gallery: [
      '/assets/images/img_f1fbeb3f0e50.jpg',
      '/assets/images/img_03aeedc2754c.jpg',
      '/assets/images/img_eb2f3a0caa61.jpg',
      '/assets/images/img_3c0478faeddc.jpg'
    ]
  },
  'london-velodrome': {
    id: 'london-velodrome',
    title: 'London Velodrome',
    subtitle: 'Olympic Legacy',
    heroImage: '/assets/images/img_f40680bbf23e.jpg',
    overlayStats: [
      { label: 'Capacity', value: '6,000' },
      { label: 'Year', value: '2012' },
      { label: 'Awards', value: 'RIBA Stirling' }
    ],
    descriptionTitle: 'Engineering Speed and Light',
    description: 'A landmark project for the 2012 Olympics, featuring sophisticated lighting control systems that adapt to intense competition needs and energy-saving modes. The integrated systems provide perfect visibility for athletes while enhancing the spectator experience.',
    details: [
      { label: 'Location', value: 'London, UK' },
      { label: 'Duration', value: '24 Months' },
      { label: 'Client', value: 'UK Sport' },
      { label: 'Year', value: '2012' },
      { label: 'Category', value: 'Infrastructure' }
    ],
    gallery: [
      '/assets/images/img_8cd5de336830.jpg',
      '/assets/images/img_1a082a240bab.jpg',
      '/assets/images/img_4fac6e45ff2c.jpg',
      '/assets/images/img_40bb03c039e7.jpg'
    ]
  },
  'manchester-airport': {
    id: 'manchester-airport',
    title: 'Manchester Airport',
    subtitle: 'Terminal 2 Extension',
    heroImage: '/assets/images/img_3f750d916f33.jpg',
    overlayStats: [
      { label: 'Footfall', value: '25M/Year' },
      { label: 'Year', value: '2018' },
      { label: 'Systems', value: 'Advanced CCTV' }
    ],
    descriptionTitle: 'Securing the Gateway',
    description: 'A comprehensive security and automation overhaul for the new terminal extension. We implemented a unified management system integrating access control, surveillance, and automated HVAC to handle thousands of passengers daily with ease.',
    details: [
      { label: 'Location', value: 'Manchester, UK' },
      { label: 'Duration', value: '36 Months' },
      { label: 'Size', value: '80,000 m2' },
      { label: 'Year', value: '2018' },
      { label: 'Category', value: 'Security' }
    ],
    gallery: [
      '/assets/images/img_f5138919e7de.jpg',
      '/assets/images/img_384dc7ab8faf.jpg',
      '/assets/images/img_694131f2ab1b.jpg',
      '/assets/images/img_a0e0726f56eb.jpg'
    ]
  },
  'skyline-residence': {
    id: 'skyline-residence',
    title: 'Skyline Residence',
    subtitle: 'Private Penthouse',
    heroImage: '/assets/images/img_13246fc0455c.jpg',
    overlayStats: [
      { label: 'Rooms', value: '8' },
      { label: 'Year', value: '2021' },
      { label: 'Tech', value: 'Full Home Auto' }
    ],
    descriptionTitle: 'Luxury Above the Clouds',
    description: 'Complete home automation for an ultra-luxury penthouse. Every aspect of the environment is controlled via voice or touch, from the automated shades that reveal the city view to the integrated multi-room audio system.',
    details: [
      { label: 'Location', value: 'New York, USA' },
      { label: 'Duration', value: '8 Months' },
      { label: 'Client', value: 'Private' },
      { label: 'Year', value: '2021' },
      { label: 'Category', value: 'Residential' }
    ],
    gallery: [
      '/assets/images/img_f765768aa902.jpg',
      '/assets/images/img_a5de3b6534df.jpg',
      '/assets/images/img_1a082a240bab.jpg',
      '/assets/images/img_d0d6bf63ff61.jpg'
    ]
  },
  'tech-hub': {
    id: 'tech-hub',
    title: 'Tech Hub HQ',
    subtitle: 'Innovation Center',
    heroImage: '/assets/images/img_81fd2ba95647.jpg',
    overlayStats: [
      { label: 'Desks', value: '500+' },
      { label: 'Year', value: '2022' },
      { label: 'AV Zones', value: '40+' }
    ],
    descriptionTitle: 'The Future of Work',
    description: 'State-of-the-art AV distribution and video conferencing for a leading tech company. The solution ensures seamless collaboration across multiple floors, with intuitive control panels in every meeting room.',
    details: [
      { label: 'Location', value: 'San Francisco, USA' },
      { label: 'Duration', value: '12 Months' },
      { label: 'Size', value: '5000 m2' },
      { label: 'Year', value: '2022' },
      { label: 'Category', value: 'Commercial' }
    ],
    gallery: [
      '/assets/images/img_6ff69ae204b0.jpg',
      '/assets/images/img_fc40a000c7ae.jpg',
      '/assets/images/img_135ce27bc9be.jpg',
      '/assets/images/img_b0cf37cbfe4e.jpg'
    ]
  }
};
