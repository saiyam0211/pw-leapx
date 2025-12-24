import { 
  Code, 
  BarChart3, 
  BrainCircuit, 
  MessageSquare, 
  Server, 
  Settings, 
  Briefcase, 
  Megaphone, 
  LineChart,
  PhoneCall,
  Users,
  ClipboardList,
  Rocket
} from 'lucide-react';
import { ServiceItem, ExpertProfile, StepItem, FaqItem, BrandItem } from './types';

export const SERVICES: ServiceItem[] = [
  // Tech
  {
    id: 't1',
    title: 'Web & MVP Development',
    description: 'Rapid prototyping and scalable web architectures using modern stacks.',
    icon: Code,
    category: 'Tech',
    overview: 'We build fast, scalable and conversion-focused digital products.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    features: [
      'Responsive UI/UX that works seamlessly across all devices',
      'Intuitive user interface designed for clarity and smooth navigation',
      'Proper SEO structure (technical SEO, schema, metadata, responsiveness)',
      'High-performance architecture with optimized load time',
      'Clean, scalable codebase for future enhancements',
      'Secure backend & authentication setup',
      'Rapid MVP delivery with agile sprints',
      'Cross-domain website support (Edtech, Fintech, E-commerce, SaaS, Healthcare, etc.)'
    ]
  },
  {
    id: 't2',
    title: 'Data Analytics & Visualization',
    description: 'Transform raw data into actionable insights with advanced visualization.',
    icon: BarChart3,
    category: 'Tech',
    overview: 'Transform your raw data into actionable insights.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    features: [
      'Interactive dashboards (Power BI / Tableau / custom)',
      'Automated reporting systems',
      'Real-time tracking & KPI monitoring',
      'Data cleaning, transformation, and modeling',
      'Business intelligence integration',
      'Trend forecasting & pattern detection',
      'Plug-and-play dashboard deployment',
      'Industry-specific analytics (finance, sales, operations, marketing)'
    ]
  },
  {
    id: 't3',
    title: 'Data Science & Applied AI',
    description: 'Predictive modeling and applied AI solutions for complex problems.',
    icon: BrainCircuit,
    category: 'Tech',
    overview: 'AI-driven solutions tailored for your business workflow.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    features: [
      'Predictive modeling and forecasting',
      'Recommendation engines',
      'Computer vision & NLP solutions',
      'Anomaly detection & fraud insights',
      'Custom ML pipelines',
      'AI-powered decision automation',
      'Model deployment & monitoring',
      'Research-backed, production-ready systems'
    ]
  },
  {
    id: 't4',
    title: 'Chatbot & Automation',
    description: 'Intelligent conversational agents and process automation workflows.',
    icon: MessageSquare,
    category: 'Tech',
    overview: 'Build intelligent systems that reduce manual effort and improve efficiency.',
    heroImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
    features: [
      'AI chatbots (product, support, assistant)',
      'WhatsApp automation & workflows',
      'Lead qualification bots',
      'Task automation & integration with CRM tools',
      'Voice-to-text + conversational AI',
      'Smart appointment & ticketing automation',
      'Seamless API integrations',
      'Low-code and full-code automation options'
    ]
  },
  {
    id: 't5',
    title: 'Backend & System Integration',
    description: 'Robust API design, microservices, and secure system integrations.',
    icon: Server,
    category: 'Tech',
    overview: 'Robust backend systems that scale with your startup.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    features: [
      'API development (REST / GraphQL)',
      'Secure authentication & authorization systems',
      'Cloud deployment (AWS, GCP, Azure)',
      'Database design & optimization',
      'Payment gateway integration',
      'Third-party service integration (CRM, ERP, LMS, etc.)',
      'Microservices architecture setup',
      'Scalable server infrastructure'
    ]
  },
  {
    id: 't6',
    title: 'Tech Planning & Infrastructure',
    description: 'Cloud planning, DevOps pipelines, and infrastructure optimization.',
    icon: Settings,
    category: 'Tech',
    overview: 'Founders get clear tech strategy before building anything.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    features: [
      'Technical requirement mapping (PRD, SRS)',
      'System architecture design',
      'Scalability planning',
      'Cost estimation & cloud resource planning',
      'Tech stack recommendation',
      'Security & compliance guidelines',
      'Development roadmap & sprint planning',
      'Risk assessment & mitigation plan'
    ]
  },
  // Business
  {
    id: 'b1',
    title: 'Branding and Marketing',
    description: 'Identity creation, positioning, and digital growth strategies.',
    icon: Megaphone,
    category: 'Business',
    overview: 'Position your startup with a premium, consistent brand identity.',
    heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    features: [
      'Brand identity design (Logo, Color, Typography)',
      'Pitch deck & investor communication design',
      'Digital campaigns & ad strategy',
      'Social media content systems',
      'Website & landing page copywriting',
      'Brand storytelling & narrative building',
      'Marketing automation setup',
      'Performance marketing analytics'
    ]
  },
  {
    id: 'b2',
    title: 'GTM & Consultation',
    description: 'Go-to-market strategies tailored for Indian startup ecosystems.',
    icon: LineChart,
    category: 'Business',
    overview: 'Helping founders go to market with clarity and confidence.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    features: [
      'GTM blueprint (target audience, channels, funnels)',
      'Market and competitor analysis',
      'Pricing & positioning strategy',
      'User acquisition roadmap',
      'Revenue model creation',
      'Founder-led sales playbook',
      'Growth metrics & KPIs setup',
      'Risk mapping & pivot strategy'
    ]
  }
];

export const WORK_PROCESS: StepItem[] = [
  {
    id: 1,
    title: 'Discovery Call',
    description: 'We assess goals, scope, and execution readiness before engagement.',
    icon: PhoneCall
  },
  {
    id: 2,
    title: 'Expert Alignment',
    description: "Qualified engagements are aligned with the right domain lead.",
    icon: Users
  },
  {
    id: 3,
    title: 'Scope & Execution Plan',
    description: 'Clear scope, timelines, and milestones are defined upfront.',
    icon: ClipboardList
  },
  {
    id: 4,
    title: 'Agreement & Kickoff',
    description: 'Selectively onboarded teams move into execution with full ownership.',
    icon: Rocket
  }
];

export const EXPERTS: ExpertProfile[] = [
  // Tech Experts (6 total - need 1 more for 7)
  {
    id: 'e1',
    name: 'Janishar Ali',
    role: 'VP, Ex-Founder CuriousJr',
    imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/Janishar_Ali_Anwar_vhenm4.jpg',
    tags: ['Tech Expert', 'PW']
  },
  {
    id: 'e3',
    name: 'Shubham Gautam',
    role: 'Founder EnjoyAlgorithms',
    imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/SHUBHAM_GAUTAM_dd7qyd.jpg',
    tags: ['Tech Expert', 'PW']
  },
  // {
  //   id: 'e2',
  //   name: 'Nitin Manjunath',
  //   role: 'Expert',
  //   imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916666/NITIN_M_wr0ici.jpg',
  //   tags: ['Tech Expert', 'PW']
  // },
  {
    id: 'e4',
    name: 'Kaibalya Biswal',
    role: 'Expert',
    imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916663/KAIBALYA_BISWAL__gzbush.jpg',
    tags: ['Tech Expert', 'PW']
  },
  // {
  //   id: 'e5',
  //   name: 'Syed Zabi Ulla',
  //   role: 'Expert',
  //   imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916665/SYED_ZABI_ULLA_gbhmh5.jpg',
  //   tags: ['Tech Expert', 'PW']
  // },
  // {
  //   id: 'e6',
  //   name: 'Saurabh Moharikar',
  //   role: 'Expert',
  //   imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/SAURABH_MOHARIKAR_ubp8yy.jpg',
  //   tags: ['Tech Expert', 'PW']
  // },
  // Management Experts (8 total)
  {
    id: 'e9',
    name: 'Gopal Sharma',
    role: 'COO PhysicsWallah',
    imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916663/Gopal_Sharma_v0yfsp.jpg',
    tags: ['Management', 'PW']
  },
  {
    id: 'e15',
    name: 'Raunaq Mustafa',
    role: 'Head, PW School of Startups',
    imageUrl: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d73443e5-a742-4290-b60c-d469ccc35ae2.png',
    tags: ['Management', 'PW']
  },
  {
    id: 'e13',
    name: 'Dr. Sapna Nibsaiya',
    role: 'Marketing Strategist',
    imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916662/Dr._Sapna_Nibsaiya_yv7fpt.jpg',
    tags: ['Management', 'PW']
  },
  {
    id: 'e8',
    name: 'Himanshu Shekhar',
    role: 'Director',
    imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916663/Himanshu_Shekhar_ufdqok.jpg',
    tags: ['Management', 'PW']
  },
  
  {
    id: 'e10',
    name: 'Prakash Nimbalkar',
    role: 'GTM Advisor',
    imageUrl: 'https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916664/PRAKASH_NIMBALKAR_wduufa.jpg',
    tags: ['Management', 'PW']
  },
  
  
  // POC Experts (4 total)
  {
    id: 'e16',
    name: 'Vikas Bhansali',
    role: 'Head-Corporate Partnership',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFEVXRFd7Q1Xg/profile-displayphoto-shrink_800_800/B56ZbS2fJ.GoAk-/0/1747294222002?e=1767225600&v=beta&t=tmHWJ0OLHXbr2zVsacyhdYJi9rGzYE7Vm4xrAVPPhPg',
    tags: ['POC', 'PW']
  },
  
  {
    id: 'e18',
    name: 'Kaiful Wara',
    role: 'Partnership Strategist, PW',
    imageUrl: 'https://res.cloudinary.com/dsdcta1sr/image/upload/v1752517778/Kaiful_Wara_ti6bt5.svg',
    tags: ['POC', 'PW']
  },
  {
    id: 'e17',
    name: 'Rishabh Jain',
    role: 'Founding Team Member, LeapX',
    imageUrl: 'https://res.cloudinary.com/dsdcta1sr/image/upload/v1752414083/Rishabh_Jain_uk6ajq.svg',
    tags: ['POC', 'PW']
  },
  // {
  //   id: 'e19',
  //   name: 'Saurabh Prasad',
  //   role: 'Expert',
  //   imageUrl: 'https://res.cloudinary.com/dsdcta1sr/image/upload/v1752414087/Saurabh_Prasad_mavqbb.svg',
  //   tags: ['POC', 'PW']
  // }
];

export const BRANDS: BrandItem[] = [
  { 
    id: 'br1', 
    name: 'PW Skills', 
    category: 'EdTech',
    logoUrl: 'https://jobs.pwskills.com/images/PWSkills-main.png'
  },
  { 
    id: 'br2', 
    name: 'CuriousJr', 
    category: 'EdTech',
    logoUrl: 'https://static.pw.live/production-curiousjr-fundoo/static/images/landing-page/cjr-black-logo.webp'
  },
  { 
    id: 'br3', 
    name: 'EnjoyAlgorithms', 
    category: 'EdTech',
    logoUrl: '/enjoy-algo.png'
  },
  { 
    id: 'br4', 
    name: 'PW SOS', 
    category: 'Education',
    logoUrl: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/10527432-cd54-4d47-b4e7-169e5f252fab.svg'
  },
  { 
    id: 'br5', 
    name: 'AnveVoice', 
    category: 'AI & Voice',
    logoUrl: '/company_logos/AnveVoice Logo.png'
  },
  { 
    id: 'br6', 
    name: 'Apex', 
    category: 'Technology',
    logoUrl: '/company_logos/Apex Logo.png'
  },
  { 
    id: 'br7', 
    name: 'BFR', 
    category: 'Technology',
    logoUrl: '/company_logos/BFR logo.png'
  },
  { 
    id: 'br8', 
    name: 'Sahiloan', 
    category: 'FinTech',
    logoUrl: '/company_logos/Sahiloan logo.png'
  },
  { 
    id: 'br9', 
    name: 'Xperio', 
    category: 'Technology',
    logoUrl: '/company_logos/Xperio logo.png'
  },
  { 
    id: 'br10', 
    name: 'Your Lab', 
    category: 'HealthTech',
    logoUrl: '/company_logos/Your Lab logo.png'
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What is LeapX?",
    answer: "PW LeapX is India's most reliable execution partner, empowering startups with tech and strategic solutions. We are an execution-first initiative by PW School of Startups, focused on bridging the gap between ideas and reality with world-class technology and business expertise."
  },
  {
    question: "Do you take equity?",
    answer: "We offer flexible engagement models. While we primarily work on project-based fixed pricing and dedicated resource retainer models, equity arrangements can be discussed on a case-by-case basis for exceptional opportunities."
  },
  {
    question: "What startup stages do you support?",
    answer: "We support startups across all stages—from pre-seed to growth stage. Our services are specifically designed to help early-stage founders (0-to-1) with MVP development and GTM consultation, as well as established startups looking to scale their operations."
  },
  {
    question: "What is the cost?",
    answer: "Our pricing is structured around the scope, complexity, and execution effort of your engagement. We offer flexible models including fixed-scope projects and dedicated execution teams. Final pricing is shared post-evaluation to ensure clear alignment and predictable delivery."
  },
  {
    question: "Who handles execution?",
    answer: "Execution is led by a dedicated domain lead aligned to your requirement—technology, product, design, or growth—supported by an experienced LeapX team. Each engagement has clear ownership, with leaders drawn from the PW ecosystem and proven execution backgrounds."
  }
];