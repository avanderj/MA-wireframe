import {
  Bookmark,
  BookmarkPlus,
  ArrowLeft,
  Shield,
  ExternalLink,
  Info,
} from "lucide-react";
import { AppBundle } from "./AppBundlesSection";
import { Application } from "../data/ucsf-applications";
import { UCSFLogo } from "./UCSFLogo";
import { Breadcrumbs } from "./Breadcrumbs";
import imgZoomLogo from "../../assets/f8fb47a62ff06b9569f3c73cfd5169f2d8dea8e8.png";
import imgDocuSignLogo from "../../assets/3cfb2198fa4e98c265566cc5b64ac65e01d54e8c.png";
import imgREDCapLogo from "../../assets/01233216aabb735f875a8e369654e75a611d3e80.png";
import imgSmartsheetLogo from "../../assets/e801352a1def02c0d77674762164da7c50f98764.png";
import imgUCPathLogo from "../../assets/2274419e69e2ad389edb37ac7343c1910439a124.png";
import imgServiceNowLogo from "../../assets/201d7fc08ec03da4fe46bc87373e39e0acd22b32.png";
import imgQualtricsLogo from "../../assets/1200174f576d7f6a4242e532269c3d4bfeb60960.png";

interface BundleDetailPageProps {
  bundle: AppBundle;
  applications: Application[];
  onBack: () => void;
  onAppClick: (app: Application) => void;
  onToggleSaveBundle: (bundleId: string) => void;
}

// Map app IDs to their imported logo images
const appLogoMap: Record<number, string> = {
  14: imgDocuSignLogo,
  26: imgQualtricsLogo,
  27: imgREDCapLogo,
  29: imgServiceNowLogo,
  31: imgSmartsheetLogo,
  32: imgUCPathLogo,
  33: imgZoomLogo,
};

function getAppLogo(app: Application): string | undefined {
  if (appLogoMap[app.id]) {
    return appLogoMap[app.id];
  }
  return app.logoUrl;
}

export function BundleDetailPage({
  bundle,
  applications,
  onBack,
  onAppClick,
  onToggleSaveBundle,
}: BundleDetailPageProps) {
  const Icon = bundle.icon;
  const bundleApps = applications.filter((app) =>
    bundle.appIds.includes(app.id)
  );
  const appsWithAccess = bundleApps.filter((app) => app.hasAccess);
  const appsWithoutAccess = bundleApps.filter((app) => !app.hasAccess);
  const isSaved = bundle.saved || false;

  return (
    <div className="pb-12">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "App Library", onClick: onBack },
                { label: bundle.title },
              ]}
            />
          </div>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#18A1CD] hover:text-[#052049] font-semibold mb-6 group transition-colors"
          >
            <ArrowLeft
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              strokeWidth={2.5}
            />
            Back To App Library
          </button>

          {/* Bundle Header */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8">
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${bundle.color} flex items-center justify-center shadow-xl`}
            >
              <Icon
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                strokeWidth={2}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#052049] to-[#18A1CD] bg-clip-text text-transparent mb-3 tracking-tight">
                {bundle.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {bundle.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        <div className="space-y-8">
          {/* Apps with Access */}
          {appsWithAccess.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#052049] tracking-tight mb-5">
                Applications in this bundle
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appsWithAccess.map((app) => {
                  const categoryColor =
                    app.category === "Clinical"
                      ? "bg-red-50/50 text-red-700 border-red-200"
                      : app.category === "Research"
                      ? "bg-blue-50/50 text-blue-700 border-blue-200"
                      : app.category === "Communication"
                      ? "bg-purple-50/50 text-purple-700 border-purple-200"
                      : app.category === "Finance"
                      ? "bg-emerald-50/50 text-emerald-700 border-emerald-200"
                      : app.category === "Administrative"
                      ? "bg-amber-50/50 text-amber-700 border-amber-200"
                      : "bg-gray-50/50 text-gray-700 border-gray-200";

                  return (
                    <article
                      key={app.id}
                      className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 hover:border-[#18A1CD] hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="p-6">
                        <div className="flex gap-5 mb-5">
                          <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden ring-2 ring-gray-200 shadow-md p-2">
                            {getAppLogo(app) ? (
                              <img
                                src={getAppLogo(app)}
                                alt={`${app.name} logo`}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <UCSFLogo className="w-full h-full" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <h3 className="font-bold text-lg text-[#052049] line-clamp-2 leading-snug group-hover:text-[#18A1CD] transition-colors">
                                {app.name}
                              </h3>
                              {app.saved && (
                                <button
                                  className="flex-shrink-0 text-[#18A1CD] hover:text-teal-600 transition-colors"
                                  aria-label="Saved"
                                >
                                  <Bookmark className="w-5 h-5 fill-current" />
                                </button>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${categoryColor}`}
                              >
                                {app.category}
                              </span>
                            </div>
                            {app.requirements && (
                              <div className="flex items-center gap-2 flex-wrap">
                                {app.requirements
                                  .split(",")
                                  .map((req, index) => {
                                    const requirement = req.trim();
                                    let iconColor = "text-gray-500";
                                    if (requirement === "SSO")
                                      iconColor = "text-blue-600";
                                    if (requirement === "VPN")
                                      iconColor = "text-purple-600";
                                    if (requirement === "MFA")
                                      iconColor = "text-emerald-600";

                                    return (
                                      <span
                                        key={index}
                                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-600"
                                      >
                                        <Shield
                                          className={`w-3 h-3 ${iconColor}`}
                                        />
                                        {requirement}
                                      </span>
                                    );
                                  })}
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed text-sm">
                          {app.description}
                        </p>

                        <div className="flex items-center justify-between pt-5 border-t-2 border-gray-100">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAppClick(app);
                            }}
                            className="text-gray-600 hover:text-[#052049] flex items-center gap-2 group/link transition-colors font-medium text-sm"
                          >
                            <Info className="w-4 h-4" />
                            <span className="underline underline-offset-2 decoration-2">
                              Details
                            </span>
                          </button>
                          {app.hasAccess ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("Launch", app.name);
                              }}
                              className="px-5 py-2.5 bg-gradient-to-r from-[#052049] to-[#18A1CD] hover:from-[#041938] hover:to-[#1590BA] text-white rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg font-semibold text-sm"
                            >
                              <span>Launch</span>
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("Request access", app.name);
                              }}
                              className="px-5 py-2.5 border-2 border-gray-300 hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 rounded-xl transition-all font-semibold text-gray-700 hover:text-teal-700 text-sm"
                            >
                              Request
                            </button>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* Apps without Access */}
          {appsWithoutAccess.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#052049] mb-5 tracking-tight">
                Request Access to These Apps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appsWithoutAccess.map((app) => (
                  <article
                    key={app.id}
                    className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 hover:border-[#18A1CD] hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => onAppClick(app)}
                  >
                    <div className="p-6">
                      <div className="flex gap-5 mb-5">
                        <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden ring-2 ring-gray-200 shadow-md p-2">
                          {getAppLogo(app) ? (
                            <img
                              src={getAppLogo(app)}
                              alt={`${app.name} logo`}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <UCSFLogo className="w-full h-full" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-[#052049] line-clamp-2 leading-snug group-hover:text-[#18A1CD] transition-colors mb-3">
                            {app.name}
                          </h3>
                          <span className="text-xs font-semibold text-gray-500">
                            Access not yet granted
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                        {app.description}
                      </p>
                      <div className="flex items-center gap-3 pt-5 border-t-2 border-gray-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log("Request access", app.name);
                          }}
                          className="flex-1 px-4 py-2.5 border-2 border-[#18A1CD] text-[#18A1CD] hover:bg-[#18A1CD] hover:text-white rounded-xl transition-all text-sm font-semibold"
                        >
                          Request Access
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAppClick(app);
                          }}
                          className="px-4 py-2.5 border-2 border-gray-300 hover:border-[#18A1CD] hover:bg-gray-50 rounded-xl transition-all text-sm font-semibold text-gray-700 flex items-center gap-2"
                        >
                          <Info className="w-4 h-4" />
                          Details
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
