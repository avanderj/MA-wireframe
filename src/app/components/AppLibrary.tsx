import { Application } from "../data/ucsf-applications";
import { AppBundle, AppBundle as Bundle } from "./AppBundlesSection";
import { Breadcrumbs } from "./Breadcrumbs";
import { FeaturedAppsSection } from "./FeaturedAppsSection";
import { UnifiedApplicationsSection } from "./UnifiedApplicationsSection";
export function AppLibrary({
  applications,
  appBundles,
  viewMode,
  categoryFilter,
  curatedView,
  onHomeClick,
  onGetInfo,
  onToggleSave,
  onViewModeChange,
  onCategoryFilterChange,
  onCuratedViewChange,
  onBundleClick,
}: {
  applications: Application[];
  appBundles: AppBundle[];
  viewMode: "saved" | "all";
  categoryFilter: string;
  curatedView:
    | "all"
    | "most-popular"
    | "recently-added"
    | "ucsf-picks"
    | "bundles";
  onHomeClick: () => void;
  onGetInfo: (app: Application) => void;
  onToggleSave: (app: Application) => void;
  onViewModeChange: (mode: "saved" | "all") => void;
  onCategoryFilterChange: (filter: string) => void;
  onCuratedViewChange: (
    view: "all" | "most-popular" | "recently-added" | "ucsf-picks" | "bundles",
  ) => void;
  onBundleClick: (bundle: Bundle) => void;
}) {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-50/40 to-white">
        <div className="max-w-7xl mx-auto px-[40px] md:px-10 py-[16px] md:py-12 pt-[48px] pr-[40px] pb-[24px] pl-[40px]">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: "App Library" }]}
              onHomeClick={onHomeClick}
            />
          </div>
          <div className="mb-0">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#052049] to-[#18A1CD] bg-clip-text text-transparent mb-3 tracking-tight">
              App Library
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-4">
              Browse and access all enterprise applications available to you
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
          onGetInfo={onGetInfo}
          onToggleSave={onToggleSave}
        />
        <UnifiedApplicationsSection
          apps={applications}
          onGetInfo={onGetInfo}
          viewMode={viewMode}
          onViewModeChange={onViewModeChange}
          categoryFilter={categoryFilter}
          onCategoryFilterChange={onCategoryFilterChange}
          curatedView={curatedView}
          onCuratedViewChange={onCuratedViewChange}
          appBundles={appBundles}
          onBundleClick={onBundleClick}
        />
      </main>
    </>
  );
}
