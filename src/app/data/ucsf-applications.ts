// UCSF Connect Application Directory
// Comprehensive list of all UCSF enterprise applications

export interface Application {
  id: number;
  name: string;
  category: string;
  saved: boolean;
  description: string;
  hasAccess: boolean;
  featured: boolean;
  lastUsed?: Date;
  logoUrl?: string; // URL to service logo (e.g., Box, Zoom, Salesforce) - otherwise uses UCSF logo
  thumbnail?: string; // URL to application thumbnail icon
  authMode?: string; // Authentication mode (SAML SSO, OAuth 2.0, etc.)
  metadata: {
    owner: string;
    lastUpdated: string;
    users: string;
    compliance: string;
    version: string;
  };
  requirements?: string; // VPN, SSO, MFA requirements
  dateAdded?: Date; // When app was added to portal
  usageCount?: number; // Track usage for "Most Popular"
  ucsfPick?: boolean; // Curated by UCSF admins
  hidden?: boolean; // Hidden from user view
}

// Helper to determine if an app should have a third-party service logo
// For known third-party services, we'll indicate they need their service logo
// For UCSF-internal tools, they'll use the UCSF logo by default

export const applications: Application[] = [
  {
    id: 1,
    name: "25Live Classroom Scheduling",
    category: "Scheduling",
    saved: false,
    description: "Check classroom availability and submit scheduling requests online.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Registrar",
      lastUpdated: "May 14, 2024",
      users: "850 active users",
      compliance: "FERPA",
      version: "Series 25"
    }
  },
  {
    id: 2,
    name: "Accelerate: Virtual Home for Clinical and Translational Research",
    category: "Research",
    saved: false,
    description: "The online access point for research resources and services, including training, funding, and collaboration tools. Powered by CTSI.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "CTSI",
      lastUpdated: "December 22, 2023",
      users: "1,234 active users",
      compliance: "NIH",
      version: "v2.0"
    }
  },
  {
    id: 3,
    name: "Access Management",
    category: "Security",
    saved: true,
    description: "Application for Access Admin and Security Admins only.",
    hasAccess: true,
    featured: true,
    hidden: true,
    lastUsed: new Date(Date.now() - 2 * 60 * 60 * 1000),
    requirements: "SSO",
    dateAdded: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
    usageCount: 450,
    ucsfPick: true,
    metadata: {
      owner: "IT Security",
      lastUpdated: "December 17, 2019",
      users: "45 active users",
      compliance: "SOC 2, HIPAA",
      version: "v1.5"
    }
  },
  {
    id: 4,
    name: "Adobe Creative Cloud",
    category: "Productivity",
    saved: true,
    description: "Design and creative applications suite for marketing and creative professionals.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg", // Would use actual Adobe logo
    metadata: {
      owner: "Marketing",
      lastUpdated: "December 18, 2024",
      users: "567 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 5,
    name: "Ambulatory Reporting Portal",
    category: "Business",
    saved: false,
    description: "Access various reports as a member of the FPO Operations and Ambulatory Finance team.",
    hasAccess: true,
    featured: false,
    hidden: true,
    requirements: "VPN, SSO",
    metadata: {
      owner: "FPO Operations",
      lastUpdated: "March 13, 2024",
      users: "125 active users",
      compliance: "HIPAA",
      version: "v3.1"
    }
  },
  {
    id: 6,
    name: "Annual Faculty Review",
    category: "HR",
    saved: false,
    description: "A web-based process for yearly faculty career-planning meetings with division chiefs or designees.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, SSO",
    metadata: {
      owner: "Academic Personnel",
      lastUpdated: "January 18, 2024",
      users: "2,500 active users",
      compliance: "FERPA",
      version: "v4.2"
    }
  },
  {
    id: 7,
    name: "ArcGIS Online - Campus Operations & Administration Portal",
    category: "Facilities",
    saved: false,
    description: "For campus and health operational staff and administrators. UCSF's campus cloud-based GIS for facilities, operations, Emergency Operations Center.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS-Online.png", // Esri logo
    metadata: {
      owner: "Facilities",
      lastUpdated: "June 15, 2021",
      users: "340 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 8,
    name: "ArcGIS Online - Research & Academic Portal",
    category: "Research",
    saved: false,
    description: "For researchers and students only. Cloud-based GIS from Esri with tools for spatial analysis, web maps, survey forms, and dashboards.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS-Online.png", // Esri logo
    metadata: {
      owner: "Research IT",
      lastUpdated: "June 16, 2021",
      users: "890 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 9,
    name: "Award Verification Tool",
    category: "Finance",
    saved: false,
    description: "UCSF's online tool for verifications of sponsored award expenses by Principal Investigators.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, SSO",
    metadata: {
      owner: "CGA",
      lastUpdated: "May 24, 2021",
      users: "456 active users",
      compliance: "OMB Circular",
      version: "v2.8"
    }
  },
  {
    id: 10,
    name: "BearBuy",
    category: "Finance",
    saved: true,
    description: "UCSF campus e-Procurement system for purchasing goods and services.",
    hasAccess: true,
    featured: true,
    lastUsed: new Date(Date.now() - 24 * 60 * 60 * 1000),
    requirements: "SSO",
    dateAdded: new Date(Date.now() - 350 * 24 * 60 * 60 * 1000),
    usageCount: 3200,
    ucsfPick: true,
    metadata: {
      owner: "Procurement",
      lastUpdated: "September 27, 2021",
      users: "3,200 active users",
      compliance: "PCI DSS",
      version: "v8.5"
    }
  },
  {
    id: 11,
    name: "Box",
    category: "Productivity",
    saved: true,
    description: "Secure, enterprise, cloud-based file collaboration solution. Store restricted data in your secure folder.",
    hasAccess: true,
    featured: true,
    lastUsed: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://images.ctfassets.net/w8fc6tgspyjz/5WLmKy3DYQ0wO6y8U0wMki/f1a08c7a7f9ff6f1c2c4f93d83f1c39d/box-logo.svg", // Box logo
    dateAdded: new Date(Date.now() - 420 * 24 * 60 * 60 * 1000),
    usageCount: 8500,
    ucsfPick: true,
    metadata: {
      owner: "IT Services",
      lastUpdated: "December 16, 2020",
      users: "8,500 active users",
      compliance: "SOC 2, GDPR, HIPAA",
      version: "Enterprise"
    }
  },
  {
    id: 12,
    name: "Canvas LMS",
    category: "Education",
    saved: true,
    description: "UCSF's centrally supported learning management system for delivering online courses and supporting in-person instruction.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://www.instructure.com/sites/default/files/image/2021-12/Canvas_logo_single_mark.png", // Canvas logo
    dateAdded: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    usageCount: 12000,
    ucsfPick: true,
    metadata: {
      owner: "Educational Technology",
      lastUpdated: "December 17, 2025",
      users: "12,000 active users",
      compliance: "FERPA",
      version: "Production"
    }
  },
  {
    id: 13,
    name: "CITI Program",
    category: "Education",
    saved: false,
    description: "Collaborative Institutional Training Initiative - Research education materials to enhance integrity and professionalism of investigators.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Research Compliance",
      lastUpdated: "May 16, 2024",
      users: "5,600 active users",
      compliance: "OHRP, FDA",
      version: "Current"
    }
  },
  {
    id: 14,
    name: "DocuSign - UCSF",
    category: "Legal",
    saved: true,
    description: "Electronic signature application that also manages routing of documents.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "figma:asset/3cfb2198fa4e98c265566cc5b64ac65e01d54e8c.png", // DocuSign logo
    metadata: {
      owner: "Legal Services",
      lastUpdated: "May 06, 2021",
      users: "2,100 active users",
      compliance: "ESIGN Act, HIPAA",
      version: "v24.4"
    }
  },
  {
    id: 15,
    name: "Email in the Cloud - UCSF Email",
    category: "Communication",
    saved: true,
    description: "Cloud-based service for email, calendaring, contacts, and spam filtering.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 10 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft logo
    metadata: {
      owner: "IT Communications",
      lastUpdated: "April 21, 2020",
      users: "15,000 active users",
      compliance: "SOC 2, HIPAA",
      version: "Microsoft 365"
    }
  },
  {
    id: 16,
    name: "Enterprise Tableau Production",
    category: "Business",
    saved: true,
    description: "Self-service business intelligence and analytics platform.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    requirements: "SSO, MFA",
    logoUrl: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png", // Tableau logo
    metadata: {
      owner: "Data Analytics",
      lastUpdated: "October 07, 2024",
      users: "1,890 active users",
      compliance: "SOC 2",
      version: "2024.3"
    }
  },
  {
    id: 17,
    name: "Everbridge Manager Portal",
    category: "Security",
    saved: false,
    description: "Emergency alert application for sending critical notifications.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.everbridge.com/wp-content/uploads/2021/03/Everbridge-Logo.png", // Everbridge logo
    metadata: {
      owner: "Emergency Management",
      lastUpdated: "May 05, 2025",
      users: "150 active users",
      compliance: "NIST",
      version: "Enterprise"
    }
  },
  {
    id: 18,
    name: "iLab",
    category: "Research",
    saved: false,
    description: "Core facility management system for service requests, equipment scheduling, project tracking, communication, billing, and reporting.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Research Resources",
      lastUpdated: "June 02, 2025",
      users: "2,300 active users",
      compliance: "NIH",
      version: "v6.2"
    }
  },
  {
    id: 19,
    name: "Ilios",
    category: "Education",
    saved: false,
    description: "Curriculum Management System for UCSF and the Health Professions educational community.",
    hasAccess: true,
    featured: false,
    requirements: "SSO, MFA",
    metadata: {
      owner: "Medical Education",
      lastUpdated: "December 02, 2025",
      users: "3,400 active users",
      compliance: "FERPA",
      version: "v3.x"
    }
  },
  {
    id: 20,
    name: "LinkedIn Learning",
    category: "Education",
    saved: true,
    description: "Online learning portal for professional development and skill building.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg", // LinkedIn logo
    metadata: {
      owner: "Learning & Development",
      lastUpdated: "October 29, 2020",
      users: "6,700 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 21,
    name: "Microsoft Office 365",
    category: "Productivity",
    saved: true,
    description: "Productivity suite and collaboration tools for teams including Word, Excel, PowerPoint, and Teams.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft logo
    metadata: {
      owner: "IT Services",
      lastUpdated: "December 20, 2024",
      users: "14,500 active users",
      compliance: "SOC 2, GDPR, HIPAA",
      version: "E5 License"
    }
  },
  {
    id: 22,
    name: "MyExpense",
    category: "Finance",
    saved: true,
    description: "UCSF campus automated reimbursement system for employee travel, non-travel, and guest travel expenses.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    metadata: {
      owner: "Finance",
      lastUpdated: "November 14, 2023",
      users: "4,200 active users",
      compliance: "IRS, SOC 2",
      version: "v5.0"
    }
  },
  {
    id: 23,
    name: "MyTime",
    category: "HR",
    saved: true,
    description: "Enterprise timekeeping and scheduling platform.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    requirements: "SSO, MFA",
    metadata: {
      owner: "HR Operations",
      lastUpdated: "May 10, 2025",
      users: "8,900 active users",
      compliance: "FLSA",
      version: "UKG Pro"
    }
  },
  {
    id: 24,
    name: "PeopleSoft Financials",
    category: "Finance",
    saved: true,
    description: "General ledger, asset management, supply chain management, and the Research Administration System.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    requirements: "VPN, SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Oracle logo
    metadata: {
      owner: "Finance Systems",
      lastUpdated: "March 14, 2023",
      users: "3,800 active users",
      compliance: "GAAP, OMB",
      version: "9.2"
    }
  },
  {
    id: 25,
    name: "Poll Everywhere",
    category: "Education",
    saved: false,
    description: "Online polling for audience participation via SMS, smartphone, or computer.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.polleverywhere.com/images/logo.svg", // Poll Everywhere logo
    metadata: {
      owner: "Educational Technology",
      lastUpdated: "August 07, 2020",
      users: "1,200 active users",
      compliance: "FERPA",
      version: "Enterprise"
    }
  },
  {
    id: 26,
    name: "Qualtrics",
    category: "Business",
    saved: true,
    description: "Build, distribute, analyze, and collaborate on surveys for research and operational needs.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://www.qualtrics.com/m/assets/wp-content/uploads/2020/01/qualtrics-logo.svg", // Qualtrics logo
    metadata: {
      owner: "Research IT",
      lastUpdated: "April 16, 2020",
      users: "2,900 active users",
      compliance: "SOC 2, GDPR, HIPAA",
      version: "XM"
    }
  },
  {
    id: 27,
    name: "REDCap",
    category: "Research",
    saved: true,
    description: "HIPAA compliant data capture system for researchers to build and manage online surveys and databases.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    requirements: "SSO, MFA",
    logoUrl: "figma:asset/01233216aabb735f875a8e369654e75a611d3e80.png", // REDCap logo
    metadata: {
      owner: "Research IT",
      lastUpdated: "April 21, 2020",
      users: "4,500 active users",
      compliance: "HIPAA, 21 CFR Part 11",
      version: "14.0.x"
    }
  },
  {
    id: 28,
    name: "Salesforce - Global Brain Health Institute",
    category: "Business",
    saved: false,
    description: "Manage program fellows and fellowship applications for GBHI.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", // Salesforce logo
    metadata: {
      owner: "GBHI",
      lastUpdated: "May 06, 2025",
      users: "85 active users",
      compliance: "SOC 2",
      version: "Lightning"
    }
  },
  {
    id: 29,
    name: "ServiceNow",
    category: "Productivity",
    saved: true,
    description: "Enterprise service management platform for IT tickets, incidents, and service requests.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 1 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://www.servicenow.com/etc.clientlibs/servicenow/clientlibs/clientlib-site/resources/images/sn-logo.svg", // ServiceNow logo
    metadata: {
      owner: "IT Operations",
      lastUpdated: "May 06, 2020",
      users: "15,000 active users",
      compliance: "SOC 2, ISO 27001",
      version: "Xanadu"
    }
  },
  {
    id: 30,
    name: "Siteimprove",
    category: "Communication",
    saved: true,
    description: "Web governance platform for accessibility, quality assurance, and analytics compliance.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 30 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://www.siteimprove.com/globalassets/main-site/logos/siteimprove-logo.svg", // Siteimprove logo
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "December 20, 2024",
      users: "450 active users",
      compliance: "WCAG 2.1, Section 508",
      version: "Enterprise"
    }
  },
  {
    id: 31,
    name: "SmartSheet",
    category: "Productivity",
    saved: true,
    description: "Cloud-based project and task management. No PHI, PII, or FERPA allowed.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "figma:asset/e801352a1def02c0d77674762164da7c50f98764.png", // Smartsheet logo
    metadata: {
      owner: "PMO",
      lastUpdated: "May 10, 2022",
      users: "1,100 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 32,
    name: "UCPath",
    category: "HR",
    saved: true,
    description: "UC payroll, benefits, and HR system for managing pay, benefits, and personnel information.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    requirements: "MFA",
    logoUrl: "https://www.ucop.edu/local/ucophome/images/uc-logo.svg", // UC logo
    metadata: {
      owner: "HR Shared Services",
      lastUpdated: "February 05, 2021",
      users: "20,000 active users",
      compliance: "IRS, SSA",
      version: "Production"
    }
  },
  {
    id: 33,
    name: "Zoom",
    category: "Communication",
    saved: true,
    description: "Video conferencing solution for meetings, webinars, and virtual events.",
    hasAccess: true,
    featured: false,
    hidden: true,
    lastUsed: new Date(Date.now() - 2 * 60 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "figma:asset/f8fb47a62ff06b9569f3c73cfd5169f2d8dea8e8.png", // Zoom logo
    metadata: {
      owner: "IT Communications",
      lastUpdated: "April 27, 2022",
      users: "18,000 active users",
      compliance: "SOC 2, GDPR, HIPAA",
      version: "Enterprise"
    }
  },
  {
    id: 34,
    name: "Workday",
    category: "HR",
    saved: false,
    description: "Enterprise resource planning system for human capital management and financial planning.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.workday.com/content/dam/web/en-us/images/logos/workday-logo.svg",
    metadata: {
      owner: "HR Systems",
      lastUpdated: "November 12, 2024",
      users: "10,500 active users",
      compliance: "SOC 2",
      version: "2024R2"
    }
  },
  {
    id: 35,
    name: "Slack",
    category: "Communication",
    saved: true,
    description: "Team collaboration and messaging platform for real-time communication.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 30 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
    metadata: {
      owner: "IT Communications",
      lastUpdated: "December 18, 2024",
      users: "7,800 active users",
      compliance: "SOC 2, GDPR",
      version: "Enterprise Grid"
    }
  },
  {
    id: 36,
    name: "GitHub Enterprise",
    category: "Productivity",
    saved: false,
    description: "Code repository and version control platform for software development teams.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    metadata: {
      owner: "Research IT",
      lastUpdated: "October 15, 2024",
      users: "1,450 active users",
      compliance: "SOC 2",
      version: "Enterprise Server"
    }
  },
  {
    id: 37,
    name: "Concur Travel & Expense",
    category: "Finance",
    saved: false,
    description: "Integrated travel booking and expense management solution.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.sap.com/dam/application/shared/logos/sap-logo.svg",
    metadata: {
      owner: "Travel Services",
      lastUpdated: "August 22, 2024",
      users: "3,600 active users",
      compliance: "PCI DSS",
      version: "Standard Edition"
    }
  },
  {
    id: 38,
    name: "STAR Clinical Research System",
    category: "Research",
    saved: false,
    description: "Research management system for clinical trials and study coordination.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, SSO, MFA",
    metadata: {
      owner: "Clinical Research Services",
      lastUpdated: "September 10, 2024",
      users: "2,100 active users",
      compliance: "21 CFR Part 11, HIPAA",
      version: "v10.2"
    }
  },
  {
    id: 39,
    name: "Epic MyChart Provider",
    category: "Clinical",
    saved: false,
    description: "Electronic health record system access for clinical providers.",
    hasAccess: false,
    featured: false,
    requirements: "VPN, SSO, MFA",
    metadata: {
      owner: "UCSF Health IT",
      lastUpdated: "December 01, 2024",
      users: "8,500 active users",
      compliance: "HIPAA, HITECH",
      version: "2023"
    }
  },
  {
    id: 40,
    name: "Cayuse SP",
    category: "Research",
    saved: false,
    description: "Streamlined research proposal development and electronic routing for sponsored projects.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Sponsored Projects",
      lastUpdated: "July 18, 2024",
      users: "1,800 active users",
      compliance: "OMB Uniform Guidance",
      version: "v8.0"
    }
  },
  {
    id: 41,
    name: "Dropbox Business",
    category: "Productivity",
    saved: false,
    description: "Cloud storage and file synchronization service for team collaboration.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg",
    metadata: {
      owner: "IT Services",
      lastUpdated: "May 20, 2023",
      users: "980 active users",
      compliance: "SOC 2, GDPR",
      version: "Business Advanced"
    }
  },
  {
    id: 42,
    name: "Turnitin",
    category: "Education",
    saved: false,
    description: "Plagiarism detection and academic integrity platform for coursework.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.turnitin.com/static/resources/images/turnitin-logo.svg",
    metadata: {
      owner: "Educational Technology",
      lastUpdated: "March 12, 2024",
      users: "4,200 active users",
      compliance: "FERPA",
      version: "Feedback Studio"
    }
  },
  {
    id: 43,
    name: "Zoom Rooms",
    category: "Communication",
    saved: false,
    description: "Conference room video system for hybrid meetings and collaboration.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "figma:asset/f8fb47a62ff06b9569f3c73cfd5169f2d8dea8e8.png",
    metadata: {
      owner: "Facilities AV",
      lastUpdated: "June 08, 2024",
      users: "250 active rooms",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 44,
    name: "Miro",
    category: "Productivity",
    saved: false,
    description: "Digital whiteboard and visual collaboration platform for brainstorming.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://miro.com/static/images/page/mr-logo.svg",
    metadata: {
      owner: "Project Management",
      lastUpdated: "November 03, 2024",
      users: "1,350 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 45,
    name: "PubMed",
    category: "Research",
    saved: false,
    description: "Biomedical literature database from the National Library of Medicine.",
    hasAccess: true,
    featured: false,
    requirements: "None",
    logoUrl: "https://pubmed.ncbi.nlm.nih.gov/static/img/pubmed-logo.svg",
    metadata: {
      owner: "Library",
      lastUpdated: "December 22, 2024",
      users: "15,000+ active users",
      compliance: "Public Access",
      version: "Current"
    }
  },
  {
    id: 46,
    name: "LabArchives",
    category: "Research",
    saved: false,
    description: "Electronic lab notebook for documenting research activities and data.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Research IT",
      lastUpdated: "February 14, 2024",
      users: "3,100 active users",
      compliance: "21 CFR Part 11",
      version: "Professional"
    }
  },
  {
    id: 47,
    name: "Monday.com",
    category: "Productivity",
    saved: false,
    description: "Work operating system for managing projects, workflows, and team collaboration.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://dapulse-res.cloudinary.com/image/upload/monday_logo/v1624863277/monday_logo_new.png",
    metadata: {
      owner: "Operations",
      lastUpdated: "September 30, 2024",
      users: "650 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 48,
    name: "Asana",
    category: "Productivity",
    saved: false,
    description: "Project management and team coordination platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://luna1.co/assets/img/asana-logo.png",
    metadata: {
      owner: "PMO",
      lastUpdated: "October 11, 2024",
      users: "890 active users",
      compliance: "SOC 2",
      version: "Business"
    }
  },
  {
    id: 49,
    name: "Notion",
    category: "Productivity",
    saved: false,
    description: "All-in-one workspace for notes, docs, wikis, and project management.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    metadata: {
      owner: "Knowledge Management",
      lastUpdated: "December 15, 2024",
      users: "1,200 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 50,
    name: "Trello",
    category: "Productivity",
    saved: false,
    description: "Kanban-based project management tool for organizing tasks and workflows.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/trello-logo-blue.svg",
    metadata: {
      owner: "Team Collaboration",
      lastUpdated: "July 25, 2024",
      users: "2,100 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 51,
    name: "Confluence",
    category: "Productivity",
    saved: false,
    description: "Team workspace for documentation, knowledge sharing, and collaboration.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://wac-cdn.atlassian.com/dam/jcr:5d1374c2-276f-4bca-9ce4-813aba614b7a/confluence-icon-gradient-blue.svg",
    metadata: {
      owner: "Documentation Services",
      lastUpdated: "August 14, 2024",
      users: "3,400 active users",
      compliance: "SOC 2",
      version: "Cloud Premium"
    }
  },
  {
    id: 52,
    name: "Jira",
    category: "Productivity",
    saved: false,
    description: "Issue tracking and agile project management for software teams.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a2e-c89d8bf89df4/jira-icon-gradient-blue.svg",
    metadata: {
      owner: "IT Development",
      lastUpdated: "September 22, 2024",
      users: "1,950 active users",
      compliance: "SOC 2",
      version: "Cloud Premium"
    }
  },
  {
    id: 53,
    name: "WordPress - UCSF Sites",
    category: "Communication",
    saved: false,
    description: "Content management system for creating and managing departmental websites.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "November 28, 2024",
      users: "1,600 active users",
      compliance: "WCAG 2.1",
      version: "6.4"
    }
  },
  {
    id: 54,
    name: "Drupal - UCSF Web",
    category: "Communication",
    saved: false,
    description: "Enterprise content management platform for complex web applications.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "October 19, 2024",
      users: "420 active users",
      compliance: "WCAG 2.1, Section 508",
      version: "10.x"
    }
  },
  {
    id: 55,
    name: "Google Workspace",
    category: "Productivity",
    saved: false,
    description: "Cloud-based productivity suite including Gmail, Drive, Docs, and Sheets.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.gstatic.com/images/branding/product/2x/workspace_48dp.png",
    metadata: {
      owner: "IT Services",
      lastUpdated: "December 10, 2024",
      users: "2,800 active users",
      compliance: "SOC 2, GDPR",
      version: "Enterprise Plus"
    }
  },
  {
    id: 56,
    name: "OneDrive for Business",
    category: "Productivity",
    saved: false,
    description: "Cloud storage solution integrated with Microsoft 365.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    metadata: {
      owner: "IT Services",
      lastUpdated: "November 05, 2024",
      users: "12,000 active users",
      compliance: "SOC 2, HIPAA",
      version: "Plan 2"
    }
  },
  {
    id: 57,
    name: "SharePoint Online",
    category: "Productivity",
    saved: false,
    description: "Intranet and document management platform for team sites.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    metadata: {
      owner: "IT Services",
      lastUpdated: "October 30, 2024",
      users: "8,700 active users",
      compliance: "SOC 2",
      version: "Plan 2"
    }
  },
  {
    id: 58,
    name: "Microsoft Teams",
    category: "Communication",
    saved: true,
    description: "Chat-based workspace for team collaboration and meetings.",
    hasAccess: true,
    featured: false,
    lastUsed: new Date(Date.now() - 45 * 60 * 1000),
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    metadata: {
      owner: "IT Communications",
      lastUpdated: "December 22, 2024",
      users: "13,500 active users",
      compliance: "SOC 2, GDPR",
      version: "Enterprise"
    }
  },
  {
    id: 59,
    name: "Power BI",
    category: "Business",
    saved: false,
    description: "Business analytics service for creating reports and dashboards.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    metadata: {
      owner: "Data Analytics",
      lastUpdated: "November 18, 2024",
      users: "1,340 active users",
      compliance: "SOC 2",
      version: "Pro"
    }
  },
  {
    id: 60,
    name: "Grants.gov Workspace",
    category: "Research",
    saved: false,
    description: "Federal grant application and submission portal.",
    hasAccess: true,
    featured: false,
    requirements: "MFA",
    metadata: {
      owner: "Grant Administration",
      lastUpdated: "August 05, 2024",
      users: "450 active users",
      compliance: "Federal Grant Requirements",
      version: "Current"
    }
  },
  {
    id: 61,
    name: "IACUC Protocol Manager",
    category: "Research",
    saved: false,
    description: "Institutional Animal Care and Use Committee protocol management system.",
    hasAccess: true,
    featured: false,
    requirements: "SSO, MFA",
    metadata: {
      owner: "IACUC Office",
      lastUpdated: "June 12, 2024",
      users: "890 active users",
      compliance: "AAALAC, PHS Policy",
      version: "v3.5"
    }
  },
  {
    id: 62,
    name: "IRB Manager",
    category: "Research",
    saved: false,
    description: "Institutional Review Board protocol submission and management.",
    hasAccess: true,
    featured: false,
    requirements: "SSO, MFA",
    metadata: {
      owner: "Human Research Protection",
      lastUpdated: "July 28, 2024",
      users: "2,100 active users",
      compliance: "45 CFR 46, HIPAA",
      version: "v4.1"
    }
  },
  {
    id: 63,
    name: "ChemInventory",
    category: "Research",
    saved: false,
    description: "Chemical inventory management and safety compliance tracking.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Environment, Health & Safety",
      lastUpdated: "May 17, 2024",
      users: "1,650 active users",
      compliance: "OSHA, EPA",
      version: "v2.9"
    }
  },
  {
    id: 64,
    name: "BioRAFT",
    category: "Research",
    saved: false,
    description: "Lab safety management including training, inspections, and incident reporting.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Environment, Health & Safety",
      lastUpdated: "September 05, 2024",
      users: "3,200 active users",
      compliance: "OSHA, NIH Guidelines",
      version: "Enterprise"
    }
  },
  {
    id: 65,
    name: "Freezer Pro",
    category: "Research",
    saved: false,
    description: "Sample tracking and freezer inventory management system.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Research Resources",
      lastUpdated: "March 22, 2024",
      users: "780 active users",
      compliance: "21 CFR Part 11",
      version: "v8.2"
    }
  },
  {
    id: 66,
    name: "LabVantage LIMS",
    category: "Research",
    saved: false,
    description: "Laboratory information management system for sample tracking.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, SSO",
    metadata: {
      owner: "Core Labs",
      lastUpdated: "April 18, 2024",
      users: "450 active users",
      compliance: "21 CFR Part 11, CLIA",
      version: "v8.7"
    }
  },
  {
    id: 67,
    name: "Agilent OpenLab",
    category: "Research",
    saved: false,
    description: "Chromatography data system for analytical instrumentation.",
    hasAccess: true,
    featured: false,
    requirements: "VPN",
    metadata: {
      owner: "Mass Spectrometry Core",
      lastUpdated: "February 10, 2024",
      users: "120 active users",
      compliance: "21 CFR Part 11",
      version: "CDS 2.7"
    }
  },
  {
    id: 68,
    name: "FlowJo",
    category: "Research",
    saved: false,
    description: "Flow cytometry analysis software for immunology research.",
    hasAccess: true,
    featured: false,
    requirements: "License Key",
    metadata: {
      owner: "Flow Cytometry Core",
      lastUpdated: "August 30, 2024",
      users: "560 active users",
      compliance: "Research Use",
      version: "v10.9"
    }
  },
  {
    id: 69,
    name: "ImageJ/Fiji",
    category: "Research",
    saved: false,
    description: "Open-source image processing and analysis platform.",
    hasAccess: true,
    featured: false,
    requirements: "None",
    metadata: {
      owner: "Imaging Core",
      lastUpdated: "November 15, 2024",
      users: "2,300 active users",
      compliance: "Open Source",
      version: "1.54"
    }
  },
  {
    id: 70,
    name: "GraphPad Prism",
    category: "Research",
    saved: false,
    description: "Statistical analysis and scientific graphing software.",
    hasAccess: true,
    featured: false,
    requirements: "License Key",
    metadata: {
      owner: "Research IT",
      lastUpdated: "July 12, 2024",
      users: "1,890 active users",
      compliance: "Commercial License",
      version: "v10.2"
    }
  },
  {
    id: 71,
    name: "SPSS Statistics",
    category: "Research",
    saved: false,
    description: "Statistical analysis software for data science and social sciences.",
    hasAccess: true,
    featured: false,
    requirements: "License Key",
    logoUrl: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
    metadata: {
      owner: "Research IT",
      lastUpdated: "September 18, 2024",
      users: "1,240 active users",
      compliance: "Commercial License",
      version: "v29"
    }
  },
  {
    id: 72,
    name: "SAS",
    category: "Research",
    saved: false,
    description: "Advanced analytics, business intelligence, and data management.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, License",
    metadata: {
      owner: "Biostatistics Core",
      lastUpdated: "June 25, 2024",
      users: "650 active users",
      compliance: "21 CFR Part 11",
      version: "9.4"
    }
  },
  {
    id: 73,
    name: "MATLAB",
    category: "Research",
    saved: false,
    description: "Programming platform for numerical computing and algorithm development.",
    hasAccess: true,
    featured: false,
    requirements: "License Key",
    metadata: {
      owner: "Research IT",
      lastUpdated: "October 22, 2024",
      users: "1,450 active users",
      compliance: "Commercial License",
      version: "R2024b"
    }
  },
  {
    id: 74,
    name: "Python Jupyter Hub",
    category: "Research",
    saved: false,
    description: "Multi-user server for Jupyter notebooks for data science.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Research IT",
      lastUpdated: "December 08, 2024",
      users: "2,100 active users",
      compliance: "Open Source",
      version: "4.0"
    }
  },
  {
    id: 75,
    name: "RStudio Server",
    category: "Research",
    saved: false,
    description: "Web-based interface for R programming and statistical computing.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Research IT",
      lastUpdated: "November 20, 2024",
      users: "1,780 active users",
      compliance: "Open Source",
      version: "2024.09"
    }
  },
  {
    id: 76,
    name: "GitHub Copilot",
    category: "Productivity",
    saved: false,
    description: "AI-powered code completion and programming assistant.",
    hasAccess: true,
    featured: false,
    requirements: "SSO, GitHub Account",
    logoUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    metadata: {
      owner: "Research IT",
      lastUpdated: "October 28, 2024",
      users: "380 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 77,
    name: "AWS Console - UCSF Research",
    category: "Research",
    saved: false,
    description: "Amazon Web Services cloud computing platform for research workloads.",
    hasAccess: true,
    featured: false,
    requirements: "SSO, MFA",
    logoUrl: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
    metadata: {
      owner: "Research IT",
      lastUpdated: "December 20, 2024",
      users: "890 active users",
      compliance: "SOC 2, HIPAA",
      version: "Current"
    }
  },
  {
    id: 78,
    name: "Google Cloud Platform - UCSF",
    category: "Research",
    saved: false,
    description: "Google cloud services for compute, storage, and machine learning.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.gstatic.com/images/branding/product/2x/gcp_48dp.png",
    metadata: {
      owner: "Research IT",
      lastUpdated: "November 30, 2024",
      users: "560 active users",
      compliance: "SOC 2, HIPAA",
      version: "Current"
    }
  },
  {
    id: 79,
    name: "Azure Portal - UCSF",
    category: "Research",
    saved: false,
    description: "Microsoft Azure cloud platform for research computing.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    metadata: {
      owner: "Research IT",
      lastUpdated: "December 12, 2024",
      users: "420 active users",
      compliance: "SOC 2, HIPAA",
      version: "Current"
    }
  },
  {
    id: 80,
    name: "Wynton HPC Cluster",
    category: "Research",
    saved: false,
    description: "High-performance computing cluster for computational research.",
    hasAccess: true,
    featured: false,
    requirements: "SSH Key, SSO",
    metadata: {
      owner: "Research IT",
      lastUpdated: "December 18, 2024",
      users: "1,650 active users",
      compliance: "HIPAA-capable",
      version: "Current"
    }
  },
  {
    id: 81,
    name: "CryoSPARC",
    category: "Research",
    saved: false,
    description: "Cryo-electron microscopy data processing and structure determination.",
    hasAccess: true,
    featured: false,
    requirements: "License, VPN",
    metadata: {
      owner: "Cryo-EM Core",
      lastUpdated: "October 05, 2024",
      users: "95 active users",
      compliance: "Research Use",
      version: "v4.5"
    }
  },
  {
    id: 82,
    name: "RELION",
    category: "Research",
    saved: false,
    description: "REgularised LIkelihood OptimisatioN for cryo-EM image processing.",
    hasAccess: true,
    featured: false,
    requirements: "HPC Access",
    metadata: {
      owner: "Cryo-EM Core",
      lastUpdated: "September 12, 2024",
      users: "120 active users",
      compliance: "Open Source",
      version: "4.0"
    }
  },
  {
    id: 83,
    name: "PyMOL",
    category: "Research",
    saved: false,
    description: "Molecular visualization system for structural biology.",
    hasAccess: true,
    featured: false,
    requirements: "License Key",
    metadata: {
      owner: "Structural Biology",
      lastUpdated: "August 15, 2024",
      users: "890 active users",
      compliance: "Educational License",
      version: "2.5"
    }
  },
  {
    id: 84,
    name: "Benchling",
    category: "Research",
    saved: false,
    description: "Life science R&D cloud platform for molecular biology and collaboration.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Research IT",
      lastUpdated: "November 08, 2024",
      users: "1,100 active users",
      compliance: "SOC 2, 21 CFR Part 11",
      version: "Enterprise"
    }
  },
  {
    id: 85,
    name: "SnapGene",
    category: "Research",
    saved: false,
    description: "Molecular cloning and DNA sequence analysis software.",
    hasAccess: true,
    featured: false,
    requirements: "License Key",
    metadata: {
      owner: "Research IT",
      lastUpdated: "July 30, 2024",
      users: "650 active users",
      compliance: "Commercial License",
      version: "7.1"
    }
  },
  {
    id: 86,
    name: "Addgene Plasmid Repository",
    category: "Research",
    saved: false,
    description: "Non-profit plasmid repository for molecular biology research.",
    hasAccess: true,
    featured: false,
    requirements: "Account Registration",
    metadata: {
      owner: "Research Resources",
      lastUpdated: "December 01, 2024",
      users: "1,800 active users",
      compliance: "Material Transfer Agreement",
      version: "Current"
    }
  },
  {
    id: 87,
    name: "Covidence",
    category: "Research",
    saved: false,
    description: "Systematic review management software for evidence synthesis.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Library",
      lastUpdated: "October 17, 2024",
      users: "420 active users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 88,
    name: "EndNote",
    category: "Research",
    saved: false,
    description: "Reference management software for bibliographies and citations.",
    hasAccess: true,
    featured: false,
    requirements: "License Key",
    metadata: {
      owner: "Library",
      lastUpdated: "September 25, 2024",
      users: "3,500 active users",
      compliance: "Commercial License",
      version: "21"
    }
  },
  {
    id: 89,
    name: "Mendeley",
    category: "Research",
    saved: false,
    description: "Reference manager and academic social network.",
    hasAccess: true,
    featured: false,
    requirements: "Account Registration",
    metadata: {
      owner: "Library",
      lastUpdated: "August 08, 2024",
      users: "2,100 active users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 90,
    name: "Zotero",
    category: "Research",
    saved: false,
    description: "Free, open-source reference management tool.",
    hasAccess: true,
    featured: false,
    requirements: "None",
    metadata: {
      owner: "Library",
      lastUpdated: "November 22, 2024",
      users: "1,850 active users",
      compliance: "Open Source",
      version: "6.0"
    }
  },
  {
    id: 91,
    name: "ORCID Registry",
    category: "Research",
    saved: false,
    description: "Persistent digital identifier for researchers and scholars.",
    hasAccess: true,
    featured: false,
    requirements: "Account Registration",
    metadata: {
      owner: "Library",
      lastUpdated: "December 15, 2024",
      users: "8,900 registered users",
      compliance: "Open Standard",
      version: "Current"
    }
  },
  {
    id: 92,
    name: "ClinicalTrials.gov",
    category: "Research",
    saved: false,
    description: "Clinical trial registry and results database.",
    hasAccess: true,
    featured: false,
    requirements: "PRS Account",
    metadata: {
      owner: "Clinical Research",
      lastUpdated: "December 10, 2024",
      users: "450 active users",
      compliance: "FDAAA, ICMJE",
      version: "Current"
    }
  },
  {
    id: 93,
    name: "OnCore Clinical Trials Management",
    category: "Research",
    saved: false,
    description: "Enterprise system for clinical trial management and regulatory compliance.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, SSO, MFA",
    metadata: {
      owner: "Clinical Research Services",
      lastUpdated: "November 02, 2024",
      users: "1,200 active users",
      compliance: "21 CFR Part 11, HIPAA",
      version: "v21.3"
    }
  },
  {
    id: 94,
    name: "Veeva Vault",
    category: "Research",
    saved: false,
    description: "Clinical content management for regulatory documents.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Clinical Operations",
      lastUpdated: "October 28, 2024",
      users: "280 active users",
      compliance: "21 CFR Part 11, GxP",
      version: "23R3"
    }
  },
  {
    id: 95,
    name: "Medidata Rave",
    category: "Research",
    saved: false,
    description: "Electronic data capture for clinical trials.",
    hasAccess: false,
    featured: false,
    requirements: "SSO, Study-specific",
    metadata: {
      owner: "Clinical Data Management",
      lastUpdated: "September 15, 2024",
      users: "180 active users",
      compliance: "21 CFR Part 11, HIPAA",
      version: "2024.1"
    }
  },
  {
    id: 96,
    name: "LabCorp Link",
    category: "Clinical",
    saved: false,
    description: "Laboratory test ordering and results portal.",
    hasAccess: false,
    featured: false,
    requirements: "VPN, Credentialing",
    metadata: {
      owner: "Laboratory Medicine",
      lastUpdated: "August 20, 2024",
      users: "650 active users",
      compliance: "CLIA, HIPAA",
      version: "Current"
    }
  },
  {
    id: 97,
    name: "Quest Diagnostics Care360",
    category: "Clinical",
    saved: false,
    description: "Laboratory results and ordering system.",
    hasAccess: false,
    featured: false,
    requirements: "Credentialing",
    metadata: {
      owner: "Laboratory Medicine",
      lastUpdated: "July 18, 2024",
      users: "420 active users",
      compliance: "CLIA, HIPAA",
      version: "Current"
    }
  },
  {
    id: 98,
    name: "PeopleSoft HCM",
    category: "HR",
    saved: false,
    description: "Human capital management system for recruitment and workforce administration.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    metadata: {
      owner: "HR Systems",
      lastUpdated: "May 30, 2023",
      users: "2,100 active users",
      compliance: "SOC 2",
      version: "9.2"
    }
  },
  {
    id: 99,
    name: "Taleo Recruiting",
    category: "HR",
    saved: false,
    description: "Applicant tracking system for recruitment and hiring.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    metadata: {
      owner: "Talent Acquisition",
      lastUpdated: "June 12, 2024",
      users: "850 active users",
      compliance: "EEOC, OFCCP",
      version: "Current"
    }
  },
  {
    id: 100,
    name: "Learning Management System (HealthStream)",
    category: "Education",
    saved: false,
    description: "Healthcare-specific training and continuing education platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Clinical Education",
      lastUpdated: "October 10, 2024",
      users: "9,500 active users",
      compliance: "Joint Commission, ANCC",
      version: "Current"
    }
  },
  {
    id: 101,
    name: "SkillSoft Percipio",
    category: "Education",
    saved: false,
    description: "Online learning platform for professional development and IT skills.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Learning & Development",
      lastUpdated: "September 28, 2024",
      users: "1,900 active users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 102,
    name: "Coursera for Enterprise",
    category: "Education",
    saved: false,
    description: "Online courses from universities and companies for skill development.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-v2-194x194.png",
    metadata: {
      owner: "Learning & Development",
      lastUpdated: "November 12, 2024",
      users: "1,450 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 103,
    name: "Lynda.com (LinkedIn Learning)",
    category: "Education",
    saved: false,
    description: "Video tutorials for software, creative, and business skills.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    metadata: {
      owner: "Learning & Development",
      lastUpdated: "August 19, 2024",
      users: "6,700 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 104,
    name: "Academic Keys",
    category: "HR",
    saved: false,
    description: "Faculty and academic job board for recruitment.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Faculty Affairs",
      lastUpdated: "July 22, 2024",
      users: "120 active users",
      compliance: "EEOC",
      version: "Current"
    }
  },
  {
    id: 105,
    name: "HigherEdJobs",
    category: "HR",
    saved: false,
    description: "Academic and administrative position posting service.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Talent Acquisition",
      lastUpdated: "June 30, 2024",
      users: "95 active users",
      compliance: "EEOC",
      version: "Current"
    }
  },
  {
    id: 106,
    name: "CalAnswers",
    category: "Business",
    saved: false,
    description: "UC system-wide business intelligence and data warehouse.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Institutional Research",
      lastUpdated: "October 02, 2024",
      users: "380 active users",
      compliance: "FERPA",
      version: "Current"
    }
  },
  {
    id: 107,
    name: "Campus Assessment Tool (CAT)",
    category: "Education",
    saved: false,
    description: "Assessment management for educational program evaluation.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Academic Affairs",
      lastUpdated: "September 08, 2024",
      users: "340 active users",
      compliance: "ACCME, FERPA",
      version: "v2.8"
    }
  },
  {
    id: 108,
    name: "Curriculum Trak",
    category: "Education",
    saved: false,
    description: "Curriculum mapping and assessment tool for medical education.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Medical Education",
      lastUpdated: "August 25, 2024",
      users: "280 active users",
      compliance: "LCME, FERPA",
      version: "v5.0"
    }
  },
  {
    id: 109,
    name: "ExamSoft",
    category: "Education",
    saved: false,
    description: "Assessment platform for secure testing and exam administration.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Educational Technology",
      lastUpdated: "November 15, 2024",
      users: "3,800 active users",
      compliance: "FERPA, ADA",
      version: "Current"
    }
  },
  {
    id: 110,
    name: "Panopto",
    category: "Education",
    saved: false,
    description: "Video content management system for lecture capture.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Educational Technology",
      lastUpdated: "October 20, 2024",
      users: "4,500 active users",
      compliance: "FERPA, COPPA",
      version: "v16.2"
    }
  },
  {
    id: 111,
    name: "Kaltura MediaSpace",
    category: "Education",
    saved: false,
    description: "Enterprise video platform for educational content.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Educational Technology",
      lastUpdated: "September 18, 2024",
      users: "2,900 active users",
      compliance: "FERPA, WCAG 2.1",
      version: "Current"
    }
  },
  {
    id: 112,
    name: "Zoom Webinar",
    category: "Communication",
    saved: false,
    description: "Large-scale webinar hosting for virtual events.",
    hasAccess: true,
    featured: false,
    requirements: "SSO, Approved Host",
    logoUrl: "figma:asset/f8fb47a62ff06b9569f3c73cfd5169f2d8dea8e8.png",
    metadata: {
      owner: "Events & Communications",
      lastUpdated: "November 08, 2024",
      users: "850 licensed hosts",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 113,
    name: "Cvent Event Management",
    category: "Business",
    saved: false,
    description: "Event registration, management, and attendee tracking platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Events & Marketing",
      lastUpdated: "October 12, 2024",
      users: "220 active users",
      compliance: "GDPR, PCI DSS",
      version: "Enterprise"
    }
  },
  {
    id: 114,
    name: "Eventbrite",
    category: "Business",
    saved: false,
    description: "Ticketing and event planning platform for public events.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Community Relations",
      lastUpdated: "July 15, 2024",
      users: "180 active users",
      compliance: "PCI DSS",
      version: "Current"
    }
  },
  {
    id: 115,
    name: "Mailchimp",
    category: "Communication",
    saved: false,
    description: "Email marketing and newsletter distribution platform.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    logoUrl: "https://eep.io/images/yzco4xsimv0y/5fOvgNLkQr2AzfBxrW7QxQ/4d2cc20ae446f6a2a9db2d90e5e36a1f/Mailchimp_Logo-Email.png",
    metadata: {
      owner: "Marketing",
      lastUpdated: "September 20, 2024",
      users: "420 active users",
      compliance: "GDPR, CAN-SPAM",
      version: "Standard"
    }
  },
  {
    id: 116,
    name: "Constant Contact",
    category: "Communication",
    saved: false,
    description: "Email marketing service for department communications.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Marketing",
      lastUpdated: "June 18, 2024",
      users: "180 active users",
      compliance: "GDPR, CAN-SPAM",
      version: "Current"
    }
  },
  {
    id: 117,
    name: "Emma Email Marketing",
    category: "Communication",
    saved: false,
    description: "Email campaign management and analytics platform.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Advancement",
      lastUpdated: "August 05, 2024",
      users: "95 active users",
      compliance: "GDPR, CAN-SPAM",
      version: "Current"
    }
  },
  {
    id: 118,
    name: "Hootsuite",
    category: "Communication",
    saved: false,
    description: "Social media management and scheduling platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Strategic Communications",
      lastUpdated: "October 30, 2024",
      users: "75 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 119,
    name: "Sprout Social",
    category: "Communication",
    saved: false,
    description: "Social media engagement and analytics tool.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Strategic Communications",
      lastUpdated: "November 05, 2024",
      users: "45 active users",
      compliance: "SOC 2",
      version: "Professional"
    }
  },
  {
    id: 120,
    name: "Adobe Analytics",
    category: "Communication",
    saved: false,
    description: "Web analytics and digital marketing measurement.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "September 12, 2024",
      users: "120 active users",
      compliance: "GDPR",
      version: "Premium"
    }
  },
  {
    id: 121,
    name: "Google Analytics 4",
    category: "Communication",
    saved: false,
    description: "Website traffic and user behavior analytics.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    logoUrl: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "December 05, 2024",
      users: "450 active users",
      compliance: "GDPR",
      version: "GA4"
    }
  },
  {
    id: 122,
    name: "Hotjar",
    category: "Communication",
    saved: false,
    description: "Website heatmaps and user behavior analytics.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "August 28, 2024",
      users: "85 active users",
      compliance: "GDPR",
      version: "Business"
    }
  },
  {
    id: 123,
    name: "Figma",
    category: "Productivity",
    saved: false,
    description: "Collaborative interface design and prototyping tool.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png",
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "November 25, 2024",
      users: "340 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 124,
    name: "Sketch",
    category: "Productivity",
    saved: false,
    description: "Digital design toolkit for UI/UX design.",
    hasAccess: true,
    featured: false,
    requirements: "License Key",
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "July 08, 2024",
      users: "95 active users",
      compliance: "Commercial License",
      version: "v99"
    }
  },
  {
    id: 125,
    name: "InVision",
    category: "Productivity",
    saved: false,
    description: "Digital product design and collaboration platform.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Digital Strategy",
      lastUpdated: "May 12, 2024",
      users: "120 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 126,
    name: "Canva Pro",
    category: "Productivity",
    saved: false,
    description: "Graphic design and visual content creation platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg",
    metadata: {
      owner: "Marketing",
      lastUpdated: "October 18, 2024",
      users: "890 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 127,
    name: "Lucidchart",
    category: "Productivity",
    saved: false,
    description: "Diagramming and visual collaboration application.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "September 22, 2024",
      users: "1,100 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 128,
    name: "Visio Online",
    category: "Productivity",
    saved: false,
    description: "Diagramming and vector graphics application.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "August 15, 2024",
      users: "650 active users",
      compliance: "SOC 2",
      version: "Plan 2"
    }
  },
  {
    id: 129,
    name: "Draw.io (diagrams.net)",
    category: "Productivity",
    saved: false,
    description: "Free online diagram software for flowcharts and diagrams.",
    hasAccess: true,
    featured: false,
    requirements: "None",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "November 10, 2024",
      users: "2,300 active users",
      compliance: "Open Source",
      version: "Current"
    }
  },
  {
    id: 130,
    name: "Adobe Sign",
    category: "Legal",
    saved: false,
    description: "E-signature and document workflow solution.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
    metadata: {
      owner: "Legal Services",
      lastUpdated: "July 28, 2024",
      users: "580 active users",
      compliance: "ESIGN Act, eIDAS",
      version: "Enterprise"
    }
  },
  {
    id: 131,
    name: "HelloSign",
    category: "Legal",
    saved: false,
    description: "Electronic signature requests and document signing.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Contracts",
      lastUpdated: "June 15, 2024",
      users: "220 active users",
      compliance: "ESIGN Act",
      version: "Business"
    }
  },
  {
    id: 132,
    name: "PandaDoc",
    category: "Legal",
    saved: false,
    description: "Document automation and e-signature platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Business Development",
      lastUpdated: "September 05, 2024",
      users: "150 active users",
      compliance: "ESIGN Act, SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 133,
    name: "LexisNexis",
    category: "Legal",
    saved: false,
    description: "Legal research database and case law repository.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, Account",
    metadata: {
      owner: "Legal Services",
      lastUpdated: "October 22, 2024",
      users: "85 active users",
      compliance: "Subscription",
      version: "Current"
    }
  },
  {
    id: 134,
    name: "Westlaw",
    category: "Legal",
    saved: false,
    description: "Legal research and information service.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, Account",
    metadata: {
      owner: "Legal Services",
      lastUpdated: "November 18, 2024",
      users: "65 active users",
      compliance: "Subscription",
      version: "Current"
    }
  },
  {
    id: 135,
    name: "SimpleLegal",
    category: "Legal",
    saved: false,
    description: "Legal operations management and matter tracking.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Legal Operations",
      lastUpdated: "August 12, 2024",
      users: "45 active users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 136,
    name: "iManage Work",
    category: "Legal",
    saved: false,
    description: "Document and email management for legal departments.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, SSO",
    metadata: {
      owner: "Legal Services",
      lastUpdated: "September 28, 2024",
      users: "120 active users",
      compliance: "SOC 2",
      version: "v10.3"
    }
  },
  {
    id: 137,
    name: "NetDocuments",
    category: "Legal",
    saved: false,
    description: "Cloud-based document management for legal teams.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Legal Services",
      lastUpdated: "July 30, 2024",
      users: "95 active users",
      compliance: "SOC 2, ISO 27001",
      version: "Current"
    }
  },
  {
    id: 138,
    name: "Procurement Card Management",
    category: "Finance",
    saved: false,
    description: "Corporate purchasing card administration and reconciliation.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Procurement",
      lastUpdated: "October 08, 2024",
      users: "2,800 active cardholders",
      compliance: "PCI DSS",
      version: "v6.2"
    }
  },
  {
    id: 139,
    name: "Coupa Procurement",
    category: "Finance",
    saved: false,
    description: "Business spend management and procurement platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Procurement",
      lastUpdated: "November 12, 2024",
      users: "1,450 active users",
      compliance: "SOC 2",
      version: "2024.11"
    }
  },
  {
    id: 140,
    name: "Ariba Network",
    category: "Finance",
    saved: false,
    description: "Supplier collaboration and procurement network.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    logoUrl: "https://www.sap.com/dam/application/shared/logos/sap-logo.svg",
    metadata: {
      owner: "Supply Chain",
      lastUpdated: "September 15, 2024",
      users: "380 active users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 141,
    name: "Workday Adaptive Planning",
    category: "Finance",
    saved: false,
    description: "Cloud-based budgeting, forecasting, and financial planning.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://www.workday.com/content/dam/web/en-us/images/logos/workday-logo.svg",
    metadata: {
      owner: "Budget Office",
      lastUpdated: "October 25, 2024",
      users: "520 active users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 142,
    name: "Blackbaud Financial Edge",
    category: "Finance",
    saved: false,
    description: "Fund accounting system for fundraising and donations.",
    hasAccess: true,
    featured: false,
    requirements: "VPN, SSO",
    metadata: {
      owner: "University Development",
      lastUpdated: "August 22, 2024",
      users: "280 active users",
      compliance: "SOC 2",
      version: "NXT"
    }
  },
  {
    id: 143,
    name: "Raiser's Edge NXT",
    category: "Finance",
    saved: false,
    description: "Donor management and fundraising CRM platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Advancement Services",
      lastUpdated: "September 30, 2024",
      users: "450 active users",
      compliance: "PCI DSS",
      version: "NXT"
    }
  },
  {
    id: 144,
    name: "CrowdStrike Falcon",
    category: "Security",
    saved: false,
    description: "Endpoint detection and response cybersecurity platform.",
    hasAccess: true,
    featured: false,
    requirements: "Installed Agent",
    metadata: {
      owner: "IT Security",
      lastUpdated: "December 20, 2024",
      users: "18,000 endpoints",
      compliance: "SOC 2, ISO 27001",
      version: "7.09"
    }
  },
  {
    id: 145,
    name: "Duo Security",
    category: "Security",
    saved: false,
    description: "Multi-factor authentication and access security.",
    hasAccess: true,
    featured: false,
    requirements: "MFA Enrollment",
    metadata: {
      owner: "IT Security",
      lastUpdated: "November 28, 2024",
      users: "20,000 active users",
      compliance: "SOC 2, HIPAA",
      version: "Current"
    }
  },
  {
    id: 146,
    name: "Okta Identity Management",
    category: "Security",
    saved: false,
    description: "Single sign-on and identity governance platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Security",
      lastUpdated: "December 15, 2024",
      users: "System-wide",
      compliance: "SOC 2, ISO 27001",
      version: "Current"
    }
  },
  {
    id: 147,
    name: "Proofpoint Email Security",
    category: "Security",
    saved: false,
    description: "Email threat protection and phishing defense.",
    hasAccess: true,
    featured: false,
    requirements: "Automatic",
    metadata: {
      owner: "IT Security",
      lastUpdated: "December 10, 2024",
      users: "All email users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 148,
    name: "KnowBe4 Security Awareness",
    category: "Security",
    saved: false,
    description: "Security awareness training and phishing simulation.",
    hasAccess: true,
    featured: false,
    requirements: "Email Assignment",
    metadata: {
      owner: "IT Security",
      lastUpdated: "November 22, 2024",
      users: "15,000 active users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 149,
    name: "Splunk Enterprise Security",
    category: "Security",
    saved: false,
    description: "Security information and event management (SIEM).",
    hasAccess: true,
    featured: false,
    requirements: "Admin Access Only",
    metadata: {
      owner: "IT Security Operations",
      lastUpdated: "December 18, 2024",
      users: "35 SOC analysts",
      compliance: "SOC 2, NIST",
      version: "9.1"
    }
  },
  {
    id: 150,
    name: "Tenable Nessus",
    category: "Security",
    saved: false,
    description: "Vulnerability assessment and network security scanning.",
    hasAccess: true,
    featured: false,
    requirements: "Security Team Only",
    metadata: {
      owner: "IT Security",
      lastUpdated: "December 12, 2024",
      users: "25 security analysts",
      compliance: "NIST, HIPAA",
      version: "Professional"
    }
  },
  {
    id: 151,
    name: "Rapid7 InsightVM",
    category: "Security",
    saved: false,
    description: "Vulnerability management and risk prioritization.",
    hasAccess: true,
    featured: false,
    requirements: "Security Team Only",
    metadata: {
      owner: "IT Security",
      lastUpdated: "November 30, 2024",
      users: "18 security analysts",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 152,
    name: "Qualys Cloud Platform",
    category: "Security",
    saved: false,
    description: "Cloud security, compliance, and vulnerability management.",
    hasAccess: true,
    featured: false,
    requirements: "Security Team Only",
    metadata: {
      owner: "IT Security",
      lastUpdated: "December 05, 2024",
      users: "22 security analysts",
      compliance: "SOC 2, PCI DSS",
      version: "Enterprise"
    }
  },
  {
    id: 153,
    name: "Cisco AnyConnect VPN",
    category: "Security",
    saved: false,
    description: "Virtual private network client for secure remote access.",
    hasAccess: true,
    featured: false,
    requirements: "Client Installation",
    metadata: {
      owner: "Network Services",
      lastUpdated: "November 15, 2024",
      users: "12,000 active users",
      compliance: "NIST, HIPAA",
      version: "4.10"
    }
  },
  {
    id: 154,
    name: "Palo Alto GlobalProtect VPN",
    category: "Security",
    saved: false,
    description: "Next-generation VPN for secure connectivity.",
    hasAccess: true,
    featured: false,
    requirements: "Client Installation",
    metadata: {
      owner: "Network Services",
      lastUpdated: "December 08, 2024",
      users: "8,500 active users",
      compliance: "NIST, HIPAA",
      version: "6.2"
    }
  },
  {
    id: 155,
    name: "LastPass Enterprise",
    category: "Security",
    saved: false,
    description: "Password management and credential security.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Security",
      lastUpdated: "October 28, 2024",
      users: "3,200 active users",
      compliance: "SOC 2, GDPR",
      version: "Enterprise"
    }
  },
  {
    id: 156,
    name: "1Password Business",
    category: "Security",
    saved: false,
    description: "Team password manager and secrets vault.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Security",
      lastUpdated: "November 12, 2024",
      users: "1,850 active users",
      compliance: "SOC 2, GDPR",
      version: "Business"
    }
  },
  {
    id: 157,
    name: "Bitwarden Enterprise",
    category: "Security",
    saved: false,
    description: "Open-source password management solution.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Security",
      lastUpdated: "December 01, 2024",
      users: "980 active users",
      compliance: "SOC 2, Open Source",
      version: "2024.11"
    }
  },
  {
    id: 158,
    name: "Jamf Pro",
    category: "Productivity",
    saved: false,
    description: "Apple device management for Mac, iPad, and iPhone.",
    hasAccess: true,
    featured: false,
    requirements: "Managed Device",
    metadata: {
      owner: "IT Desktop Services",
      lastUpdated: "December 18, 2024",
      users: "8,500 devices",
      compliance: "SOC 2",
      version: "11.2"
    }
  },
  {
    id: 159,
    name: "Microsoft Intune",
    category: "Productivity",
    saved: false,
    description: "Mobile device and application management.",
    hasAccess: true,
    featured: false,
    requirements: "Enrolled Device",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    metadata: {
      owner: "IT Desktop Services",
      lastUpdated: "December 15, 2024",
      users: "9,200 devices",
      compliance: "SOC 2, HIPAA",
      version: "Current"
    }
  },
  {
    id: 160,
    name: "VMware Workspace ONE",
    category: "Productivity",
    saved: false,
    description: "Digital workspace platform for unified endpoint management.",
    hasAccess: true,
    featured: false,
    requirements: "Enrolled Device",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "November 20, 2024",
      users: "3,400 devices",
      compliance: "SOC 2",
      version: "2024.06"
    }
  },
  {
    id: 161,
    name: "TeamViewer",
    category: "Productivity",
    saved: false,
    description: "Remote access and support software.",
    hasAccess: true,
    featured: false,
    requirements: "IT Staff Only",
    metadata: {
      owner: "IT Support",
      lastUpdated: "October 15, 2024",
      users: "250 licenses",
      compliance: "SOC 2, GDPR",
      version: "15.x"
    }
  },
  {
    id: 162,
    name: "LogMeIn Pro",
    category: "Productivity",
    saved: false,
    description: "Remote desktop access for IT support.",
    hasAccess: true,
    featured: false,
    requirements: "IT Staff Only",
    metadata: {
      owner: "IT Support",
      lastUpdated: "September 22, 2024",
      users: "180 licenses",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 163,
    name: "BeyondTrust Privilege Management",
    category: "Security",
    saved: false,
    description: "Privileged access management and elevation control.",
    hasAccess: true,
    featured: false,
    requirements: "Admin Access",
    metadata: {
      owner: "IT Security",
      lastUpdated: "December 10, 2024",
      users: "450 privileged users",
      compliance: "SOC 2, NIST",
      version: "24.2"
    }
  },
  {
    id: 164,
    name: "CyberArk Vault",
    category: "Security",
    saved: false,
    description: "Privileged credential and secrets management.",
    hasAccess: true,
    featured: false,
    requirements: "Admin Access",
    metadata: {
      owner: "IT Security",
      lastUpdated: "November 25, 2024",
      users: "320 admin accounts",
      compliance: "SOC 2, PCI DSS",
      version: "14.0"
    }
  },
  {
    id: 165,
    name: "HashiCorp Vault",
    category: "Security",
    saved: false,
    description: "Secrets management and data protection.",
    hasAccess: true,
    featured: false,
    requirements: "Developer Access",
    metadata: {
      owner: "DevOps",
      lastUpdated: "December 12, 2024",
      users: "280 developers",
      compliance: "SOC 2, Open Source",
      version: "1.15"
    }
  },
  {
    id: 166,
    name: "Ansible Automation Platform",
    category: "Productivity",
    saved: false,
    description: "IT automation and configuration management.",
    hasAccess: true,
    featured: false,
    requirements: "DevOps Team",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "November 18, 2024",
      users: "85 operators",
      compliance: "Open Source",
      version: "2.4"
    }
  },
  {
    id: 167,
    name: "Jenkins CI/CD",
    category: "Productivity",
    saved: false,
    description: "Continuous integration and delivery automation server.",
    hasAccess: true,
    featured: false,
    requirements: "Developer Access",
    metadata: {
      owner: "DevOps",
      lastUpdated: "December 15, 2024",
      users: "220 developers",
      compliance: "Open Source",
      version: "2.426"
    }
  },
  {
    id: 168,
    name: "GitLab",
    category: "Productivity",
    saved: false,
    description: "DevOps platform for CI/CD and source code management.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "DevOps",
      lastUpdated: "December 18, 2024",
      users: "650 developers",
      compliance: "SOC 2",
      version: "16.7"
    }
  },
  {
    id: 169,
    name: "Docker Enterprise",
    category: "Productivity",
    saved: false,
    description: "Container platform for application deployment.",
    hasAccess: true,
    featured: false,
    requirements: "Developer Access",
    metadata: {
      owner: "DevOps",
      lastUpdated: "November 22, 2024",
      users: "380 developers",
      compliance: "Open Source",
      version: "24.0"
    }
  },
  {
    id: 170,
    name: "Kubernetes Dashboard",
    category: "Productivity",
    saved: false,
    description: "Container orchestration management interface.",
    hasAccess: true,
    featured: false,
    requirements: "DevOps Team",
    metadata: {
      owner: "Cloud Operations",
      lastUpdated: "December 08, 2024",
      users: "120 operators",
      compliance: "Open Source",
      version: "v2.7"
    }
  },
  {
    id: 171,
    name: "Terraform Cloud",
    category: "Productivity",
    saved: false,
    description: "Infrastructure as code provisioning and management.",
    hasAccess: true,
    featured: false,
    requirements: "DevOps Team",
    metadata: {
      owner: "Cloud Operations",
      lastUpdated: "December 12, 2024",
      users: "95 operators",
      compliance: "SOC 2",
      version: "1.6"
    }
  },
  {
    id: 172,
    name: "Datadog",
    category: "Productivity",
    saved: false,
    description: "Infrastructure monitoring and application performance management.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "December 20, 2024",
      users: "280 users",
      compliance: "SOC 2, GDPR",
      version: "Current"
    }
  },
  {
    id: 173,
    name: "New Relic",
    category: "Productivity",
    saved: false,
    description: "Application performance monitoring and observability.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Application Services",
      lastUpdated: "November 28, 2024",
      users: "180 developers",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 174,
    name: "Grafana",
    category: "Productivity",
    saved: false,
    description: "Metrics dashboards and data visualization platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "December 10, 2024",
      users: "340 users",
      compliance: "Open Source",
      version: "10.2"
    }
  },
  {
    id: 175,
    name: "Prometheus",
    category: "Productivity",
    saved: false,
    description: "Systems monitoring and alerting toolkit.",
    hasAccess: true,
    featured: false,
    requirements: "DevOps Team",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "November 30, 2024",
      users: "150 operators",
      compliance: "Open Source",
      version: "2.48"
    }
  },
  {
    id: 176,
    name: "PagerDuty",
    category: "Productivity",
    saved: false,
    description: "Incident management and on-call scheduling.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "December 15, 2024",
      users: "420 users",
      compliance: "SOC 2, ISO 27001",
      version: "Current"
    }
  },
  {
    id: 177,
    name: "Opsgenie",
    category: "Productivity",
    saved: false,
    description: "Alert and incident management platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Operations",
      lastUpdated: "November 18, 2024",
      users: "280 users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 178,
    name: "StatusPage",
    category: "Communication",
    saved: false,
    description: "Status communication and incident updates platform.",
    hasAccess: true,
    featured: false,
    requirements: "Admin Team",
    metadata: {
      owner: "IT Communications",
      lastUpdated: "October 22, 2024",
      users: "45 admins",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 179,
    name: "Pingdom",
    category: "Productivity",
    saved: false,
    description: "Website monitoring and performance tracking.",
    hasAccess: true,
    featured: false,
    requirements: "IT Operations",
    metadata: {
      owner: "Web Services",
      lastUpdated: "November 12, 2024",
      users: "85 users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 180,
    name: "UptimeRobot",
    category: "Productivity",
    saved: false,
    description: "Uptime monitoring and alerting service.",
    hasAccess: true,
    featured: false,
    requirements: "IT Operations",
    metadata: {
      owner: "Web Services",
      lastUpdated: "October 30, 2024",
      users: "120 users",
      compliance: "GDPR",
      version: "Current"
    }
  },
  {
    id: 181,
    name: "Postman",
    category: "Productivity",
    saved: false,
    description: "API development and testing platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Application Development",
      lastUpdated: "December 18, 2024",
      users: "580 developers",
      compliance: "SOC 2",
      version: "11.0"
    }
  },
  {
    id: 182,
    name: "Insomnia",
    category: "Productivity",
    saved: false,
    description: "API design and debugging tool.",
    hasAccess: true,
    featured: false,
    requirements: "Developer Access",
    metadata: {
      owner: "Application Development",
      lastUpdated: "November 08, 2024",
      users: "320 developers",
      compliance: "Open Source",
      version: "2024.1"
    }
  },
  {
    id: 183,
    name: "SonarQube",
    category: "Productivity",
    saved: false,
    description: "Code quality and security analysis platform.",
    hasAccess: true,
    featured: false,
    requirements: "Developer Access",
    metadata: {
      owner: "Application Development",
      lastUpdated: "December 05, 2024",
      users: "450 developers",
      compliance: "Open Source",
      version: "10.3"
    }
  },
  {
    id: 184,
    name: "Snyk",
    category: "Security",
    saved: false,
    description: "Developer security and vulnerability scanning.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Application Security",
      lastUpdated: "December 12, 2024",
      users: "380 developers",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 185,
    name: "Veracode",
    category: "Security",
    saved: false,
    description: "Application security testing and analysis.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Application Security",
      lastUpdated: "November 25, 2024",
      users: "220 developers",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 186,
    name: "Checkmarx",
    category: "Security",
    saved: false,
    description: "Static and dynamic application security testing.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Application Security",
      lastUpdated: "December 08, 2024",
      users: "180 developers",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 187,
    name: "JIRA Service Management",
    category: "Productivity",
    saved: false,
    description: "IT service desk and change management.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    logoUrl: "https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a2e-c89d8bf89df4/jira-icon-gradient-blue.svg",
    metadata: {
      owner: "IT Service Desk",
      lastUpdated: "November 30, 2024",
      users: "2,100 users",
      compliance: "SOC 2",
      version: "Premium"
    }
  },
  {
    id: 188,
    name: "Freshservice",
    category: "Productivity",
    saved: false,
    description: "Cloud-based IT service management solution.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Service Desk",
      lastUpdated: "October 18, 2024",
      users: "850 users",
      compliance: "SOC 2",
      version: "Enterprise"
    }
  },
  {
    id: 189,
    name: "Zendesk Support",
    category: "Productivity",
    saved: false,
    description: "Customer support ticketing and help desk.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "User Services",
      lastUpdated: "November 22, 2024",
      users: "380 agents",
      compliance: "SOC 2, GDPR",
      version: "Enterprise"
    }
  },
  {
    id: 190,
    name: "Intercom",
    category: "Communication",
    saved: false,
    description: "Customer messaging and support platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "User Engagement",
      lastUpdated: "October 25, 2024",
      users: "120 users",
      compliance: "SOC 2, GDPR",
      version: "Current"
    }
  },
  {
    id: 191,
    name: "Calendly",
    category: "Scheduling",
    saved: false,
    description: "Automated scheduling and appointment booking.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Administrative Services",
      lastUpdated: "November 15, 2024",
      users: "1,850 users",
      compliance: "SOC 2, GDPR",
      version: "Teams"
    }
  },
  {
    id: 192,
    name: "Doodle Scheduling",
    category: "Scheduling",
    saved: false,
    description: "Group meeting scheduling and poll creation.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Administrative Services",
      lastUpdated: "September 12, 2024",
      users: "980 users",
      compliance: "GDPR",
      version: "Pro"
    }
  },
  {
    id: 193,
    name: "Acuity Scheduling",
    category: "Scheduling",
    saved: false,
    description: "Online appointment scheduling software.",
    hasAccess: true,
    featured: false,
    requirements: "Account",
    metadata: {
      owner: "Patient Services",
      lastUpdated: "August 28, 2024",
      users: "450 users",
      compliance: "HIPAA-capable",
      version: "Professional"
    }
  },
  {
    id: 194,
    name: "Resource25",
    category: "Scheduling",
    saved: false,
    description: "Space and resource management system.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Facilities Management",
      lastUpdated: "October 05, 2024",
      users: "620 users",
      compliance: "FERPA",
      version: "v7.2"
    }
  },
  {
    id: 195,
    name: "EMS Room Booking",
    category: "Scheduling",
    saved: false,
    description: "Event and meeting space reservation system.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Events Management",
      lastUpdated: "September 18, 2024",
      users: "1,100 users",
      compliance: "SOC 2",
      version: "v44.1"
    }
  },
  {
    id: 196,
    name: "Robin Meeting Room Manager",
    category: "Scheduling",
    saved: false,
    description: "Desk and meeting room booking platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Workplace Services",
      lastUpdated: "November 08, 2024",
      users: "3,200 users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 197,
    name: "Envoy Visitors",
    category: "Security",
    saved: false,
    description: "Visitor management and front desk system.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Security Services",
      lastUpdated: "October 30, 2024",
      users: "85 reception desks",
      compliance: "GDPR",
      version: "Enterprise"
    }
  },
  {
    id: 198,
    name: "Proxyclick Visitor Management",
    category: "Security",
    saved: false,
    description: "Digital visitor registration and badge printing.",
    hasAccess: true,
    featured: false,
    requirements: "Reception Staff",
    metadata: {
      owner: "Security Services",
      lastUpdated: "September 22, 2024",
      users: "45 locations",
      compliance: "GDPR, SOC 2",
      version: "Current"
    }
  },
  {
    id: 199,
    name: "Lenel OnGuard",
    category: "Security",
    saved: false,
    description: "Access control and security management system.",
    hasAccess: true,
    featured: false,
    requirements: "Security Personnel",
    metadata: {
      owner: "Physical Security",
      lastUpdated: "November 12, 2024",
      users: "120 operators",
      compliance: "NIST, FIPS",
      version: "8.5"
    }
  },
  {
    id: 200,
    name: "Genetec Security Center",
    category: "Security",
    saved: false,
    description: "Unified security platform for video surveillance and access control.",
    hasAccess: true,
    featured: false,
    requirements: "Security Personnel",
    metadata: {
      owner: "Physical Security",
      lastUpdated: "December 01, 2024",
      users: "95 operators",
      compliance: "NIST",
      version: "5.11"
    }
  },
  {
    id: 201,
    name: "Milestone XProtect",
    category: "Security",
    saved: false,
    description: "Video management software for surveillance systems.",
    hasAccess: true,
    featured: false,
    requirements: "Security Personnel",
    metadata: {
      owner: "Physical Security",
      lastUpdated: "November 18, 2024",
      users: "75 operators",
      compliance: "NIST",
      version: "2024 R1"
    }
  },
  {
    id: 202,
    name: "Facilities Management System (FMS)",
    category: "Facilities",
    saved: false,
    description: "Work order and maintenance management platform.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Facilities Services",
      lastUpdated: "October 28, 2024",
      users: "850 users",
      compliance: "SOC 2",
      version: "v9.5"
    }
  },
  {
    id: 203,
    name: "Building Automation System (BAS)",
    category: "Facilities",
    saved: false,
    description: "HVAC and building systems control and monitoring.",
    hasAccess: true,
    featured: false,
    requirements: "Facilities Staff",
    metadata: {
      owner: "Building Operations",
      lastUpdated: "November 25, 2024",
      users: "180 operators",
      compliance: "Energy Standards",
      version: "WebCTRL"
    }
  },
  {
    id: 204,
    name: "ARCHIBUS Space Management",
    category: "Facilities",
    saved: false,
    description: "Space planning and real estate management system.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Real Estate Services",
      lastUpdated: "September 30, 2024",
      users: "320 users",
      compliance: "SOC 2",
      version: "v26"
    }
  },
  {
    id: 205,
    name: "ServiceChannel",
    category: "Facilities",
    saved: false,
    description: "Facilities maintenance and contractor management.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Facilities Services",
      lastUpdated: "October 15, 2024",
      users: "280 users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 206,
    name: "Brivo Access Control",
    category: "Security",
    saved: false,
    description: "Cloud-based physical access control system.",
    hasAccess: true,
    featured: false,
    requirements: "Security Personnel",
    metadata: {
      owner: "Physical Security",
      lastUpdated: "November 08, 2024",
      users: "65 administrators",
      compliance: "SOC 2, ISO 27001",
      version: "Current"
    }
  },
  {
    id: 207,
    name: "Asset Panda",
    category: "Facilities",
    saved: false,
    description: "Asset tracking and inventory management system.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "Asset Management",
      lastUpdated: "October 22, 2024",
      users: "420 users",
      compliance: "SOC 2",
      version: "Current"
    }
  },
  {
    id: 208,
    name: "SnipeIT Asset Management",
    category: "Facilities",
    saved: false,
    description: "Open-source IT asset management system.",
    hasAccess: true,
    featured: false,
    requirements: "SSO",
    metadata: {
      owner: "IT Asset Management",
      lastUpdated: "December 10, 2024",
      users: "180 users",
      compliance: "Open Source",
      version: "v7.0"
    }
  },
  {
    id: 209,
    name: "Lansweeper",
    category: "Productivity",
    saved: false,
    description: "IT asset discovery and inventory management.",
    hasAccess: true,
    featured: false,
    requirements: "IT Personnel",
    metadata: {
      owner: "IT Asset Management",
      lastUpdated: "November 30, 2024",
      users: "95 users",
      compliance: "SOC 2",
      version: "10.4"
    }
  }
];

// Category mappings for filtering
export const categories = [
  "All Categories",
  "Business",
  "Clinical",
  "Communication",
  "Education",
  "Facilities",
  "Finance",
  "HR",
  "Legal",
  "Productivity",
  "Research",
  "Scheduling",
  "Security"
];
