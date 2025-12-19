export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  metrics: ProjectMetric[];
  features: string[];
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'student-profile',
    title: 'Student Profile (ERP & LMS)',
    description: 'A centralized ERP & LMS platform for academic management enabling students, teachers, and administrators to collaborate and track academic performance.',
    screenshot: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    category: 'EdTech',
    metrics: [
      { label: 'Users', value: '1,500+' },
      { label: 'Productivity', value: '40% faster' },
      { label: 'Automation', value: '80% reduction' }
    ],
    features: [
      'Student, teacher & admin dashboards',
      'Performance & attendance tracking',
      'LMS content & assessment management',
      'Role-based access & reporting'
    ]
  },
  {
    id: 'coding-platform',
    title: 'Coding Platform',
    description: 'A high-performance coding platform for hosting contests, practice sessions, and assignments at scale.',
    screenshot: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    category: 'EdTech',
    metrics: [
      { label: 'Users', value: '2,000+' },
      { label: 'Efficiency', value: '35% time saved' }
    ],
    features: [
      'Live contests & leaderboards',
      'Practice & assignment modules',
      'Automated code evaluation',
      'High-traffic handling'
    ]
  },
  {
    id: 'koncite',
    title: 'Koncite (AI Construction Auditing)',
    description: 'An AI-powered voice-based auditing platform that converts multilingual inputs into structured audit reports.',
    screenshot: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop',
    category: 'AI & Automation',
    metrics: [
      { label: 'Users', value: '500+' },
      { label: 'Time Saved', value: '60% reduction' },
      { label: 'Accuracy', value: '35% improvement' }
    ],
    features: [
      'Voice-based AI chatbot',
      'Multilingual input support',
      'Automated report generation',
      'Structured audit outputs'
    ]
  },
  {
    id: 'resume-analyzer',
    title: 'Resume Analyzer Platform',
    description: 'An AI-driven resume analysis platform providing JD-based recommendations and real-time resume improvements.',
    screenshot: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop',
    category: 'AI & Automation',
    metrics: [
      { label: 'Users', value: '1,000+' },
      { label: 'Speed', value: '80% faster' },
      { label: 'Relevance', value: '45% improvement' }
    ],
    features: [
      'JD-based resume analysis',
      'AI improvement suggestions',
      'Skill gap insights',
      'Bulk resume scanning'
    ]
  },
  {
    id: 'yourlabs',
    title: 'YourLabs (Doctor–Patient App)',
    description: 'A mobile platform for doctor-patient management, appointments, payments, and admin analytics.',
    screenshot: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    category: 'HealthTech',
    metrics: [
      { label: 'Efficiency', value: '40% faster' },
      { label: 'Automation', value: '50% reduction' }
    ],
    features: [
      'Doctor discovery & booking',
      'Patient management',
      'Payment integration',
      'Admin analytics dashboard'
    ]
  },
  {
    id: 'fintech-app',
    title: 'Fintech App',
    description: 'A fintech app simplifying loan discovery, application, monitoring, and refinancing with AI recommendations.',
    screenshot: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    category: 'FinTech',
    metrics: [
      { label: 'Decision Speed', value: '55% faster' },
      { label: 'Friction Reduction', value: '45% lower' }
    ],
    features: [
      'Loan discovery & comparison',
      'AI-powered recommendations',
      'Application tracking',
      'Refinancing support'
    ]
  },
  {
    id: 'sales-auditing',
    title: 'Sales Auditing Platform',
    description: 'An AI-enabled sales auditing platform integrated with CRM systems for automated audit analysis.',
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    category: 'AI & Automation',
    metrics: [
      { label: 'Users', value: '300+' },
      { label: 'Audit Speed', value: '50% faster' },
      { label: 'Manual Effort', value: '65% reduction' }
    ],
    features: [
      'AI-driven audit analysis',
      'CRM & API integrations',
      'Automated reporting',
      'Performance insights'
    ]
  },
  {
    id: 'pw-prerna',
    title: 'PW Prerna (Platform Revamp)',
    description: 'A redesigned engagement platform with AI-driven resources, assessments, events, and announcements.',
    screenshot: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    category: 'EdTech',
    metrics: [
      { label: 'Engagement', value: '45% increase' },
      { label: 'Access Speed', value: '50% faster' }
    ],
    features: [
      'AI-enabled resources',
      'Mood assessment tools',
      'Events & announcements',
      'Improved UX'
    ]
  }
];

