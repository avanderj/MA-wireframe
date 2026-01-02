import { useState } from "react";
import {
  Package,
  Palette,
  BarChart3,
  UserCheck,
  MessagesSquare,
  DollarSign,
  ShieldCheck,
  Boxes,
  ChevronRight,
  X,
  Zap,
} from "lucide-react";
import imgRectangle134 from "../../assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";

interface App {
  id: number;
  name: string;
  category: string;
  hasAccess: boolean;
  description: string;
}

export interface AppBundle {
  id: string;
  title: string;
  description: string;
  icon: typeof Package;
  color: string;
  appIds: number[];
  gradient: string;
  saved?: boolean;
}

export const appBundles: AppBundle[] = [
  {
    id: "creative-suite",
    title: "Creative Suite",
    description:
      "Design, video, and creative tools for marketing and communications teams",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-50 to-pink-50",
    appIds: [13, 3, 17], // Adobe Creative Cloud, Box, OneDrive
  },
  {
    id: "research-analytics",
    title: "Research & Analytics",
    description:
      "Data analysis, surveys, and research platforms for investigators",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-500",
    gradient: "from-blue-50 to-indigo-50",
    appIds: [9, 22], // Tableau Analytics, Qualtrics
  },
  {
    id: "hr-workforce",
    title: "HR & Workforce",
    description: "Human resources, payroll, and workforce management systems",
    icon: UserCheck,
    color: "from-rose-500 to-orange-500",
    gradient: "from-rose-50 to-orange-50",
    appIds: [8, 18, 21], // Workday, Kronos Workforce, PeopleSoft
  },
  {
    id: "collaboration",
    title: "Communication Hub",
    description:
      "Email, messaging, and video conferencing for seamless collaboration",
    icon: MessagesSquare,
    color: "from-cyan-500 to-blue-500",
    gradient: "from-cyan-50 to-blue-50",
    appIds: [5, 14, 10], // Email, Siteimprove, Zoom
  },
  {
    id: "finance-procurement",
    title: "Finance & Procurement",
    description: "Purchasing, expense management, and financial systems",
    icon: DollarSign,
    color: "from-teal-500 to-emerald-500",
    gradient: "from-teal-50 to-emerald-50",
    appIds: [2, 12], // BearBuy, Concur Expense
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    description: "Identity management, access control, and security tools",
    icon: ShieldCheck,
    color: "from-red-500 to-orange-500",
    gradient: "from-red-50 to-orange-50",
    appIds: [1, 15, 19], // Access Management, Okta Identity, CyberArk
  },
  {
    id: "productivity",
    title: "Productivity Suite",
    description: "Office tools, project management, and workflow automation",
    icon: Boxes,
    color: "from-violet-500 to-purple-500",
    gradient: "from-violet-50 to-purple-50",
    appIds: [6, 16, 11, 20], // Office 365, JIRA, ServiceNow, Smartsheet
  },
];

interface AppBundlesSectionProps {
  applications: App[];
  onBundleClick: (bundle: AppBundle) => void;
}

export function AppBundlesSection({
  applications,
  onBundleClick,
}: AppBundlesSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Package className="w-5 h-5 text-[#18A1CD]" />
          <h2 className="text-2xl font-bold text-[#052049]">
            Recommended for Your Role
          </h2>
        </div>
        <p className="text-gray-600">
          Curated app collections based on common workflows and job functions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {appBundles.map((bundle) => {
          const Icon = bundle.icon;
          const bundleApps = applications.filter((app) =>
            bundle.appIds.includes(app.id)
          );

          return (
            <button
              key={bundle.id}
              onClick={() => onBundleClick(bundle)}
              className="group w-full bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#18A1CD] transition-all hover:shadow-lg text-left"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br ${bundle.color} text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="font-bold text-lg text-[#052049] mb-2 group-hover:text-[#18A1CD] transition-colors">
                {bundle.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {bundle.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Boxes className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-semibold text-gray-700">
                    {bundleApps.length} apps
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#18A1CD] transition-all" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
