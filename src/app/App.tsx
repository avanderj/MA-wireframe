import {
  Palette,
  BarChart3,
  UserCheck,
  MessagesSquare,
  DollarSign,
  ShieldCheck,
  Package,
  Key,
  ExternalLink,
  Boxes,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  applications as initialApplications,
  Application,
} from "./data/ucsf-applications";
import { ProfileDrawer } from "./components/ProfileDrawer";
import { AppBundlesSection, AppBundle, appBundles as initialBundles } from "./components/AppBundlesSection";
import { BundleDetailPage } from "./components/BundleDetailPage";
import { FeaturedAppsSection } from "./components/FeaturedAppsSection";
import { Footer } from "./components/Footer";
import { AdminDashboard } from "./components/AdminDashboard";
import { VersaChatWidget } from "./components/VersaChatWidget";
import { GlobalSearch } from "./components/GlobalSearch";
import { NewsPage } from "./components/NewsPage";
import { Breadcrumbs } from "./components/Breadcrumbs";

// New Component Imports
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { RecentlyUsedSection } from "./components/RecentlyUsedSection";
import { DiscoverToolsSection } from "./components/DiscoverToolsSection";
import { AnnouncementsSection } from "./components/AnnouncementsSection";
import { ActionCenterSection } from "./components/ActionCenterSection";
import { UnifiedApplicationsSection } from "./components/UnifiedApplicationsSection";
import { AppDetailDrawer } from "./components/AppDetailDrawer";

type App = Application;

export default function App() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState<AppBundle | null>(null);
  const [activeView, setActiveView] = useState<
    "my-apps" | "app-library" | "bundle-detail" | "admin" | "news"
  >("my-apps");
  const [viewMode, setViewMode] = useState<"saved" | "all">("saved");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Curated views state
  const [curatedView, setCuratedView] = useState<
    "all" | "most-popular" | "recently-added" | "ucsf-picks" | "bundles"
  >("all");

  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Versa access state
  const [hasVersaAccess, setHasVersaAccess] = useState(false);

  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);

  // Load applications and bundles from localStorage or use defaults
  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem("ucsf-applications");
    // Force refresh to get new data if count doesn't match
    if (saved) {
      const parsed = JSON.parse(saved);
      // If saved data doesn't have all 209 apps, use fresh data
      if (parsed.length !== initialApplications.length) {
        localStorage.removeItem("ucsf-applications");
        return initialApplications;
      }
      // Convert date strings back to Date objects and merge with initial data to get missing fields
      return parsed.map((app: Application) => {
        const initialApp = initialApplications.find((a) => a.id === app.id);
        return {
          ...initialApp, // Start with initial data (has all fields like requirements)
          ...app, // Override with saved data (preserves user changes like saved status)
          lastUsed: app.lastUsed ? new Date(app.lastUsed) : undefined,
        };
      });
    }
    return initialApplications;
  });

  const [appBundles, setAppBundles] = useState<AppBundle[]>(() => {
    const saved = localStorage.getItem("ucsf-bundles-v2");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Map icon names back to components
      const iconMap: Record<string, any> = {
        Palette,
        BarChart3,
        UserCheck,
        MessagesSquare,
        DollarSign,
        ShieldCheck,
        Package,
        Boxes,
      };
      return parsed.map((bundle: any) => ({
        ...bundle,
        icon: iconMap[bundle.iconName] || Palette,
      }));
    }

    // Default bundles
    return initialBundles;
  });

  const [news, setNews] = useState<any[]>(() => {
    const saved = localStorage.getItem("ucsf-news-v2");
    if (saved) {
      const parsedNews = JSON.parse(saved);
      if (parsedNews.length > 0) {
        return parsedNews;
      }
    }
    return [
      {
        id: 1,
        title: "New Security Policy Updates",
        excerpt:
          "Important changes to multi-factor authentication requirements effective January 1st.",
        content: "UCSF is implementing enhanced security measures...",
        date: "Dec 18, 2024",
        category: "Security",
        urgent: true,
        source: "internal",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMHNlY3VyaXR5fGVufDF8fHx8MTc2NjUxNTE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        readTime: "3 min read",
      },
      {
        id: 2,
        title: "Holiday Schedule: IT Support Hours",
        excerpt:
          "IT support will have modified hours during the holiday period. Emergency support remains available 24/7.",
        content: "During the winter holiday season...",
        date: "Dec 15, 2024",
        category: "Announcement",
        urgent: false,
        source: "internal",
        featured: true,
        readTime: "2 min read",
      },
      {
        id: 3,
        title: "UC System-Wide Policy Change on Data Governance",
        excerpt:
          "New UC system guidelines on data handling and storage compliance take effect next quarter.",
        content:
          "The University of California Office of the President has announced...",
        date: "Dec 12, 2024",
        category: "Policy",
        urgent: false,
        source: "external",
        externalUrl: "https://ucop.edu",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1719342399567-4b31027198b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2NDIyODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        readTime: "4 min read",
      },
      {
        id: 4,
        title: "UCSF Health System Update: Epic Optimization",
        excerpt:
          "Learn about the latest Epic EHR enhancements and upcoming training sessions for clinical staff.",
        content: "UCSF Health is rolling out several Epic optimizations...",
        date: "Dec 10, 2024",
        category: "Update",
        urgent: false,
        source: "internal",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1766299892693-2370a8d47e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjQ5MzU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        readTime: "5 min read",
      },
      {
        id: 5,
        title: "NIH Grant Deadline Reminder",
        excerpt:
          "National Institutes of Health announces upcoming grant submission deadlines for Q1 2025.",
        content: "Researchers should note the following important deadlines...",
        date: "Dec 8, 2024",
        category: "Research",
        urgent: true,
        source: "external",
        externalUrl: "https://grants.nih.gov",
        featured: false,
        readTime: "2 min read",
      },
      {
        id: 6,
        title: "New Collaboration Tools Added to UCSF Connect",
        excerpt:
          "We've added Miro and Figma to the application library to support remote collaboration.",
        content: "In response to user feedback...",
        date: "Dec 5, 2024",
        category: "Announcement",
        urgent: false,
        source: "internal",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1761039808584-ece726074e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjY1MTM4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        readTime: "3 min read",
      },
    ];
  });

  // Persist changes to localStorage
  useEffect(() => {
    localStorage.setItem("ucsf-applications", JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem("ucsf-news-v2", JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    const bundlesToSave = appBundles.map((bundle) => {
      // Icon name is already stored in bundle.iconName
      // We just need to remove the icon component which can't be stringified
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { icon, ...rest } = bundle;
      return rest;
    });

    localStorage.setItem("ucsf-bundles-v2", JSON.stringify(bundlesToSave));
  }, [appBundles]);

  const handleGetInfo = (app: App) => {
    setSelectedApp(app);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedApp(null), 300);
  };

  const handleLaunch = (app: App) => {
    console.log("Launching app:", app.name);
    handleCloseDrawer();
  };

  const handleRequestAccess = (app: App) => {
    console.log("Requesting access to:", app.name);
    handleCloseDrawer();
  };

  const handleBundleClick = (bundle: AppBundle) => {
    setSelectedBundle(bundle);
    setActiveView("bundle-detail");
  };

  const handleBackFromBundle = () => {
    setActiveView("app-library");
    setSelectedBundle(null);
  };

  const handleToggleSave = (app: App) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === app.id ? { ...a, saved: !a.saved } : a))
    );
  };

  const handleToggleSaveBundle = (bundleId: string) => {
    setAppBundles((prev) =>
      prev.map((b) => (b.id === bundleId ? { ...b, saved: !b.saved } : b))
    );
  };

  const handleNavigateToLibrary = (mode: "saved" | "all") => {
    setViewMode(mode);
    setActiveView("app-library");
  };

  // Admin handlers
  const handleAdminToggle = () => {
    if (isAdmin) {
      // Logout
      setIsAdmin(false);
      setActiveView("my-apps");
    } else {
      // Login directly
      setIsAdmin(true);
      setActiveView("admin");
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setActiveView("my-apps");
  };

  const handleUpdateApp = (appId: number, updates: Partial<Application>) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, ...updates } : app))
    );
  };

  const handleUpdateBundle = (bundle: AppBundle) => {
    setAppBundles((prev) => {
      const existing = prev.find((b) => b.id === bundle.id);
      if (existing) {
        return prev.map((b) => (b.id === bundle.id ? bundle : b));
      } else {
        return [...prev, bundle];
      }
    });
  };

  const handleDeleteBundle = (bundleId: string) => {
    setAppBundles((prev) => prev.filter((b) => b.id !== bundleId));
  };

  const handleUpdateNews = (newsItem: any) => {
    setNews((prev) => {
      const existing = prev.find((n) => n.id === newsItem.id);
      if (existing) {
        return prev.map((n) => (n.id === newsItem.id ? newsItem : n));
      } else {
        return [...prev, newsItem];
      }
    });
  };

  const handleDeleteNews = (newsId: number) => {
    setNews((prev) => prev.filter((n) => n.id !== newsId));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Skip to main content link for WCAG accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#052049] focus:text-white focus:rounded-lg focus:shadow-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header for all pages */}
        <Header
          activeView={activeView}
          onViewChange={setActiveView}
          onProfileClick={() => setIsProfileDrawerOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
        />

        {activeView === "my-apps" && (
          <div className="pb-8">
            {/* <HeroSection onSearchClick={() => setIsSearchOpen(true)} /> */}
            <div className="bg-gradient-to-b from-blue-50/60 via-teal-50/40 to-white relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#052049]/20 via-[#18A1CD]/25 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute top-10 left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#18A1CD]/20 via-[#052049]/15 to-transparent rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s", animationDuration: "3s" }}
                ></div>
              </div>
              <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
                  <div className="flex-1 min-w-0">
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#052049] to-[#18A1CD] bg-clip-text text-transparent mb-3 tracking-tight leading-tight pb-1">
                      Good morning, Chris
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                      Ready to make today productive? Here's your UCSF
                      workspace.
                    </p>
                  </div>

                  {/* Change Password Action Card - Right Side */}
                  <a
                    href="#"
                    className="group block bg-white rounded-xl p-5 border border-red-200/60 bg-gradient-to-br from-red-50/30 to-orange-50/30 hover:border-red-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10 hover:-translate-y-0.5 w-full lg:w-[540px] flex-shrink-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-red-600 border-1 rounded-xl group-hover:text-red-700 transition-colors">
                        <Key className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="font-bold text-base text-red-900 tracking-tight leading-snug flex items-center gap-2">
                            Change Your Password
                            <ExternalLink className="w-4 h-4" strokeWidth={2} />
                          </h3>
                          <span className="px-2.5 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm">
                            Overdue
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Your password has expired and needs to be updated
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <main id="main-content" role="main">
              <RecentlyUsedSection
                apps={applications}
                onGetInfo={handleGetInfo}
                onNavigateToLibrary={handleNavigateToLibrary}
              />
              <DiscoverToolsSection
                appBundles={appBundles}
                onBundleClick={handleBundleClick}
                onBrowseAll={() => {
                  setActiveView("app-library");
                  setCuratedView("bundles");
                }}
              />
              <AnnouncementsSection
                onNavigateToNews={() => setActiveView("news")}
                news={news}
              />
              {/* <ActionCenterSection /> */}
            </main>
          </div>
        )}

        {activeView === "app-library" && (
          <>
            {/* App Library Header */}
            <div className="bg-gradient-to-b from-gray-50/40 to-white">
              <div className="max-w-7xl mx-auto px-[40px] md:px-10 py-[16px] md:py-12 pt-[48px] pr-[40px] pb-[24px] pl-[40px]">
                {/* Breadcrumbs */}
                <div className="mb-6">
                  <Breadcrumbs
                    items={[{ label: "App Library" }]}
                    onHomeClick={() => setActiveView("my-apps")}
                  />
                </div>
                <div className="mb-0">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-[#052049] to-[#18A1CD] bg-clip-text text-transparent mb-3 tracking-tight">
                    App Library
                  </h1>
                  <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-4">
                    Browse and access all enterprise applications available to
                    you
                  </p>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold text-[#052049] tracking-tight mb-3">
                      Featured Applications
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <main id="main-content" role="main" className="pb-12">
              <FeaturedAppsSection
                apps={applications}
                onGetInfo={handleGetInfo}
                onToggleSave={handleToggleSave}
              />
              <UnifiedApplicationsSection
                apps={applications}
                onGetInfo={handleGetInfo}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                categoryFilter={categoryFilter}
                onCategoryFilterChange={setCategoryFilter}
                curatedView={curatedView}
                onCuratedViewChange={setCuratedView}
                appBundles={appBundles}
                onBundleClick={handleBundleClick}
              />
            </main>
          </>
        )}

        {activeView === "bundle-detail" && selectedBundle && (
          <>
            <BundleDetailPage
              bundle={selectedBundle}
              applications={applications}
              onBack={handleBackFromBundle}
              onAppClick={handleGetInfo}
              onToggleSaveBundle={handleToggleSaveBundle}
            />
            <Footer />
          </>
        )}

        {activeView === "news" && (
          <NewsPage news={news} onHomeClick={() => setActiveView("my-apps")} />
        )}

        {activeView === "admin" && isAdmin && (
          <AdminDashboard
            applications={applications}
            bundles={appBundles}
            news={news}
            onUpdateApp={handleUpdateApp}
            onUpdateBundle={handleUpdateBundle}
            onDeleteBundle={handleDeleteBundle}
            onUpdateNews={handleUpdateNews}
            onDeleteNews={handleDeleteNews}
            onLogout={handleAdminLogout}
          />
        )}

        {/* Global Footer */}
        {activeView !== "admin" && activeView !== "bundle-detail" && <Footer />}
      </div>

      <AppDetailDrawer
        app={selectedApp}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onLaunch={handleLaunch}
        onRequestAccess={handleRequestAccess}
      />

      <ProfileDrawer
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
        hasVersaAccess={hasVersaAccess}
        onToggleVersaAccess={() => setHasVersaAccess(!hasVersaAccess)}
        isAdmin={isAdmin}
        onAdminLogin={handleAdminToggle}
      />

      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        applications={applications}
        onSelectApp={handleGetInfo}
      />

      {/* Versa Chat Widget */}
      <VersaChatWidget hasAccess={hasVersaAccess} />
    </div>
  );
}
