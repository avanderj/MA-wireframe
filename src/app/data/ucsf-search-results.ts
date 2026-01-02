export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  category: string;
  date: Date;
  relevanceScore: number;
  metadata: {
    author?: string;
    department?: string;
    tags?: string[];
  };
}

// Mock search results data
export const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'UCSF Health COVID-19 Safety Guidelines Update',
    description: 'Latest updates on COVID-19 safety protocols for all UCSF Health facilities. Includes visitor policies, vaccination requirements, and testing procedures.',
    url: 'https://www.ucsfhealth.org/covid-19-safety',
    source: 'UCSF Health',
    category: 'Policy',
    date: new Date('2024-12-15'),
    relevanceScore: 95,
    metadata: {
      department: 'Infection Control',
      tags: ['COVID-19', 'Safety', 'Policy']
    }
  },
  {
    id: '2',
    title: 'Research Grant Opportunities - NIH Funding',
    description: 'Comprehensive guide to NIH funding opportunities available for UCSF researchers. Includes application deadlines, eligibility criteria, and submission guidelines.',
    url: 'https://research.ucsf.edu/nih-grants',
    source: 'UCSF Research',
    category: 'Research',
    date: new Date('2024-12-10'),
    relevanceScore: 88,
    metadata: {
      department: 'Research Administration',
      tags: ['Grants', 'NIH', 'Funding']
    }
  },
  {
    id: '3',
    title: 'Employee Benefits Open Enrollment 2025',
    description: 'Open enrollment period for 2025 employee benefits. Review your health, dental, vision, and retirement plan options.',
    url: 'https://hr.ucsf.edu/benefits-enrollment',
    source: 'UCSF HR',
    category: 'HR & Benefits',
    date: new Date('2024-11-28'),
    relevanceScore: 92,
    metadata: {
      department: 'Human Resources',
      tags: ['Benefits', 'Enrollment', 'Health Insurance']
    }
  },
  {
    id: '4',
    title: 'New Cancer Immunotherapy Breakthrough Published',
    description: 'UCSF researchers publish groundbreaking study on novel immunotherapy approach for treating pancreatic cancer in Nature Medicine.',
    url: 'https://news.ucsf.edu/cancer-immunotherapy-breakthrough',
    source: 'UCSF News',
    category: 'News',
    date: new Date('2024-12-18'),
    relevanceScore: 85,
    metadata: {
      author: 'Dr. Sarah Chen',
      department: 'Helen Diller Family Comprehensive Cancer Center',
      tags: ['Cancer', 'Research', 'Immunotherapy']
    }
  },
  {
    id: '5',
    title: 'IT Security Training: Phishing Awareness',
    description: 'Mandatory cybersecurity training module for all UCSF employees. Learn to identify and report phishing attempts and protect sensitive data.',
    url: 'https://it.ucsf.edu/security-training',
    source: 'UCSF IT',
    category: 'Training',
    date: new Date('2024-12-01'),
    relevanceScore: 78,
    metadata: {
      department: 'Information Technology',
      tags: ['Security', 'Training', 'Cybersecurity']
    }
  },
  {
    id: '6',
    title: 'Campus Shuttle Schedule Changes',
    description: 'Updated shuttle routes and schedules effective January 2025. New routes added to Mission Bay and Parnassus campuses.',
    url: 'https://transportation.ucsf.edu/shuttle-schedule',
    source: 'UCSF Transportation',
    category: 'Campus Services',
    date: new Date('2024-12-05'),
    relevanceScore: 72,
    metadata: {
      department: 'Transportation Services',
      tags: ['Transportation', 'Shuttle', 'Campus']
    }
  },
  {
    id: '7',
    title: 'Clinical Research Coordinator Position - Neurology',
    description: 'Open position for Clinical Research Coordinator in the Department of Neurology. Seeking candidate with clinical trials experience.',
    url: 'https://careers.ucsf.edu/position/neurology-crc',
    source: 'UCSF Careers',
    category: 'Jobs',
    date: new Date('2024-12-12'),
    relevanceScore: 68,
    metadata: {
      department: 'Neurology',
      tags: ['Jobs', 'Clinical Research', 'Neurology']
    }
  },
  {
    id: '8',
    title: 'Library Database Access: PubMed and UpToDate',
    description: 'Guide to accessing medical databases and journals through UCSF Library. Includes remote access instructions and troubleshooting.',
    url: 'https://library.ucsf.edu/database-access',
    source: 'UCSF Library',
    category: 'Resources',
    date: new Date('2024-11-20'),
    relevanceScore: 81,
    metadata: {
      department: 'Library',
      tags: ['Research', 'Databases', 'Access']
    }
  },
  {
    id: '9',
    title: 'Patient Safety Quality Improvement Initiative',
    description: 'Hospital-wide quality improvement program focused on reducing medical errors and improving patient outcomes. Join monthly meetings.',
    url: 'https://quality.ucsfhealth.org/patient-safety',
    source: 'UCSF Health',
    category: 'Quality & Safety',
    date: new Date('2024-12-08'),
    relevanceScore: 86,
    metadata: {
      department: 'Quality & Patient Safety',
      tags: ['Patient Safety', 'Quality Improvement', 'Healthcare']
    }
  },
  {
    id: '10',
    title: 'Diversity and Inclusion Town Hall - January 2025',
    description: 'Join our quarterly town hall to discuss diversity, equity, and inclusion initiatives across UCSF. Submit questions in advance.',
    url: 'https://diversity.ucsf.edu/townhall',
    source: 'UCSF Office of Diversity',
    category: 'Events',
    date: new Date('2024-12-14'),
    relevanceScore: 75,
    metadata: {
      department: 'Office of Diversity and Outreach',
      tags: ['Diversity', 'Inclusion', 'Events']
    }
  },
  {
    id: '11',
    title: 'Medical Records System Upgrade Scheduled',
    description: 'Epic EMR system will undergo scheduled maintenance and upgrades. Downtime expected from 2-6 AM on December 28th.',
    url: 'https://it.ucsf.edu/epic-upgrade',
    source: 'UCSF IT',
    category: 'IT Updates',
    date: new Date('2024-12-16'),
    relevanceScore: 90,
    metadata: {
      department: 'Information Technology',
      tags: ['Epic', 'EMR', 'Maintenance']
    }
  },
  {
    id: '12',
    title: 'Wellness Program: Mindfulness and Stress Management',
    description: 'Free mindfulness meditation sessions for UCSF employees. Weekly sessions available at Mission Bay and Parnassus locations.',
    url: 'https://wellness.ucsf.edu/mindfulness',
    source: 'UCSF Wellness',
    category: 'Employee Wellness',
    date: new Date('2024-11-25'),
    relevanceScore: 70,
    metadata: {
      department: 'Employee Health & Wellness',
      tags: ['Wellness', 'Mental Health', 'Benefits']
    }
  }
];

export const predefinedSearches = [
  'Benefits enrollment',
  'Research grants',
  'IT security training',
  'Campus parking',
  'Clinical trials',
  'Library resources',
  'Job opportunities',
  'COVID-19 updates'
];

export const searchSources = [
  'All Sources',
  'UCSF Health',
  'UCSF Research',
  'UCSF HR',
  'UCSF News',
  'UCSF IT',
  'UCSF Library',
  'UCSF Careers',
  'UCSF Transportation',
  'UCSF Office of Diversity',
  'UCSF Wellness'
];

export const searchCategories = [
  'All Categories',
  'Policy',
  'Research',
  'HR & Benefits',
  'News',
  'Training',
  'Campus Services',
  'Jobs',
  'Resources',
  'Quality & Safety',
  'Events',
  'IT Updates',
  'Employee Wellness'
];
