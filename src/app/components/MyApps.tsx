import { Key, ExternalLink } from "lucide-react";
import { Application } from "../data/ucsf-applications";
import { AppBundle } from "./AppBundlesSection";
import { RecentlyUsedSection } from "./RecentlyUsedSection";
import { DiscoverToolsSection } from "./DiscoverToolsSection";
import { AnnouncementsSection } from "./AnnouncementsSection";
export function MyApps({
  applications,
  appBundles,
  news,
  onGetInfo,
  onNavigateToLibrary,
  onBundleClick,
  onBrowseAllBundles,
  onNavigateToNews,
}: {
  applications: Application[];
  appBundles: AppBundle[];
  news: any[];
  onGetInfo: (app: Application) => void;
  onNavigateToLibrary: (mode: "saved" | "all") => void;
  onBundleClick: (bundle: AppBundle) => void;
  onBrowseAllBundles: () => void;
  onNavigateToNews: () => void;
}) {
  return (
    <div className="pb-8">
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
                Ready to make today productive? Here's your UCSF workspace.
              </p>
            </div>
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
          onGetInfo={onGetInfo}
          onNavigateToLibrary={onNavigateToLibrary}
        />
        <DiscoverToolsSection
          appBundles={appBundles}
          onBundleClick={onBundleClick}
          onBrowseAll={onBrowseAllBundles}
        />
        <AnnouncementsSection onNavigateToNews={onNavigateToNews} news={news} />
        {/* <ActionCenterSection /> */}
      </main>
    </div>
  );
}
