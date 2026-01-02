import {
  Palette,
  BarChart3,
  UserCheck,
  MessagesSquare,
  DollarSign,
  ShieldCheck,
  Package,
  Boxes,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  applications as initialApplications,
  Application,
} from "./data/ucsf-applications";
import { ProfileDrawer } from "./components/ProfileDrawer";
import {
  AppBundle,
  appBundles as initialBundles,
} from "./components/AppBundlesSection";
import { BundleDetailPage } from "./components/BundleDetailPage";
import { Footer } from "./components/Footer";
import { AdminDashboard } from "./components/AdminDashboard";
import { VersaChatWidget } from "./components/VersaChatWidget";
import { GlobalSearch } from "./components/GlobalSearch";
import { NewsPage } from "./components/NewsPage";

// New Component Imports
import { Header } from "./components/Header";
import { AppDetailDrawer } from "./components/AppDetailDrawer";
import { MyApps } from "./components/MyApps";
import { AppLibrary } from "./components/AppLibrary";
import { defaultNews } from "./utils/defaultNews";

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
  >("all"); // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Versa access state
  const [hasVersaAccess, setHasVersaAccess] = useState(false);
  // Demo: navigation layout (user preference)
  const [navLayout, setNavLayout] = useState<"top" | "sidebar">("top");
  // Viewport state: force top nav on mobile (< lg)
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)"); // Tailwind lg starts at 1024px
    const update = () => setIsMobileView(mql.matches);
    update();
    // Support older Safari
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } else {
      // @ts-expect-error - legacy API
      mql.addListener(update);
      // @ts-expect-error - legacy API
      return () => mql.removeListener(update);
    }
  }, []);
  const effectiveNavLayout: "top" | "sidebar" = isMobileView
    ? "top"
    : navLayout;
  // Admin state
  const [isAdmin, setIsAdmin] = useState(false); // Load applications and bundles from localStorage or use defaults
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
    return defaultNews;
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
      prev.map((a) => (a.id === app.id ? { ...a, saved: !a.saved } : a)),
    );
  };

  const handleToggleSaveBundle = (bundleId: string) => {
    setAppBundles((prev) =>
      prev.map((b) => (b.id === bundleId ? { ...b, saved: !b.saved } : b)),
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
      prev.map((app) => (app.id === appId ? { ...app, ...updates } : app)),
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
    <div
      className={`min-h-screen bg-gray-50 ${
        effectiveNavLayout === "sidebar" ? "flex" : "flex flex-col"
      }`}
    >
      {/* Skip to main content link for WCAG accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#052049] focus:text-white focus:rounded-lg focus:shadow-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      {/* Header (top or left sidebar depending on demo flag) */}
      <Header
        activeView={activeView}
        onViewChange={setActiveView}
        onProfileClick={() => setIsProfileDrawerOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        navLayout={effectiveNavLayout}
      />
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {activeView === "my-apps" && (
          <MyApps
            applications={applications}
            appBundles={appBundles}
            news={news}
            onGetInfo={handleGetInfo}
            onNavigateToLibrary={handleNavigateToLibrary}
            onBundleClick={handleBundleClick}
            onBrowseAllBundles={() => {
              setActiveView("app-library");
              setCuratedView("bundles");
            }}
            onNavigateToNews={() => setActiveView("news")}
          />
        )}
        {activeView === "app-library" && (
          <AppLibrary
            applications={applications}
            appBundles={appBundles}
            viewMode={viewMode}
            categoryFilter={categoryFilter}
            curatedView={curatedView}
            onHomeClick={() => setActiveView("my-apps")}
            onGetInfo={handleGetInfo}
            onToggleSave={handleToggleSave}
            onViewModeChange={setViewMode}
            onCategoryFilterChange={setCategoryFilter}
            onCuratedViewChange={setCuratedView}
            onBundleClick={handleBundleClick}
          />
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
        hasSidebarNav={effectiveNavLayout === "sidebar"}
        onToggleSidebarNav={() =>
          setNavLayout((prev) => (prev === "sidebar" ? "top" : "sidebar"))
        }
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
