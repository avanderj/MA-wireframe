import {
  X,
  ChevronRight,
  Zap,
  ExternalLink,
  BookmarkPlus,
  Bookmark,
} from "lucide-react";
import { AppBundle } from "./AppBundlesSection";
import { UCSFLogo } from "./UCSFLogo";
import { Application } from "../data/ucsf-applications";
import imgZoomLogo from "../../assets/f8fb47a62ff06b9569f3c73cfd5169f2d8dea8e8.png";
import imgDocuSignLogo from "../../assets/3cfb2198fa4e98c265566cc5b64ac65e01d54e8c.png";
import imgREDCapLogo from "../../assets/01233216aabb735f875a8e369654e75a611d3e80.png";
import imgSmartsheetLogo from "../../assets/e801352a1def02c0d77674762164da7c50f98764.png";
import imgUCPathLogo from "../../assets/2274419e69e2ad389edb37ac7343c1910439a124.png";
import imgServiceNowLogo from "../../assets/201d7fc08ec03da4fe46bc87373e39e0acd22b32.png";
import imgQualtricsLogo from "../../assets/1200174f576d7f6a4242e532269c3d4bfeb60960.png";

interface BundleDrawerProps {
  bundle: AppBundle | null;
  applications: Application[];
  isOpen: boolean;
  onClose: () => void;
  onAppClick: (app: Application) => void;
  onToggleSaveBundle?: (bundleId: string) => void;
}

// Map app IDs to their imported logo images
const appLogoMap: Record<number, string> = {
  14: imgDocuSignLogo, // DocuSign - UCSF
  26: imgQualtricsLogo, // Qualtrics
  27: imgREDCapLogo, // REDCap
  29: imgServiceNowLogo, // ServiceNow
  31: imgSmartsheetLogo, // Smartsheet
  32: imgUCPathLogo, // UCPath
  33: imgZoomLogo, // Zoom
};

// Helper function to get the correct logo URL for an app
function getAppLogo(app: Application): string | undefined {
  if (appLogoMap[app.id]) {
    return appLogoMap[app.id];
  }
  return app.logoUrl;
}

export function BundleDrawer({
  bundle,
  applications,
  isOpen,
  onClose,
  onAppClick,
  onToggleSaveBundle,
}: BundleDrawerProps) {
  if (!bundle) return null;

  const Icon = bundle.icon;
  const bundleApps = applications.filter((app) =>
    bundle.appIds.includes(app.id)
  );
  const appsWithAccess = bundleApps.filter((app) => app.hasAccess);
  const appsWithoutAccess = bundleApps.filter((app) => !app.hasAccess);
  const isSaved = bundle.saved || false;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 h-full w-full max-w-2xl bg-gradient-to-br from-white to-gray-50 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header with Gradient */}
          <div className={`bg-gradient-to-r ${bundle.color} text-white p-8`}>
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex gap-6 items-start">
              <div
                className={`w-24 h-24 flex-shrink-0 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-white/30`}
              >
                <Icon className="w-14 h-14 text-white" />
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-3xl font-bold mb-3 leading-tight">
                  {bundle.title}
                </h2>
                <p className="text-white/90 text-base leading-relaxed">
                  {bundle.description}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="space-y-8">
              {/* About This Bundle - Moved to top */}
              <div
                className={`bg-gradient-to-br ${bundle.gradient} rounded-2xl p-6 border-2 border-gray-200`}
              >
                <h3 className="font-bold text-lg text-[#052049] mb-3">
                  About This Bundle
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  This curated collection includes the essential applications
                  for {bundle.title.toLowerCase()}. These tools are commonly
                  used together for streamlined workflows and improved
                  productivity.
                </p>
                <button
                  onClick={() => onToggleSaveBundle?.(bundle.id)}
                  className={`w-full px-4 py-3 rounded-xl transition-all shadow-md font-semibold text-sm flex items-center justify-center gap-2 ${
                    isSaved
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                      : "bg-gradient-to-r from-[#052049] to-[#18A1CD] hover:from-[#041938] hover:to-[#1590BA] text-white"
                  }`}
                >
                  {isSaved ? (
                    <>
                      <Bookmark className="w-4 h-4" />
                      Saved to My Bundles
                    </>
                  ) : (
                    <>
                      <BookmarkPlus className="w-4 h-4" />
                      Save This Bundle
                    </>
                  )}
                </button>
              </div>

              {/* Apps with Access */}
              {appsWithAccess.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#052049] flex items-center gap-2">
                    <Zap className="w-5 h-5 text-emerald-500" />
                    Apps You Have Access To
                  </h3>
                  <div className="space-y-3">
                    {appsWithAccess.map((app) => (
                      <div
                        key={app.id}
                        className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-[#18A1CD] hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => onAppClick(app)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden ring-2 ring-gray-200 p-2">
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
                            <div className="font-bold text-base text-[#052049] group-hover:text-[#18A1CD] transition-colors mb-1">
                              {app.name}
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {app.description}
                            </p>
                            <div className="flex items-center gap-1 mt-2">
                              <Zap className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-xs font-semibold text-emerald-600">
                                Active Access
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="px-4 py-2 bg-gradient-to-r from-[#052049] to-[#18A1CD] hover:from-[#041938] hover:to-[#1590BA] text-white rounded-lg flex items-center gap-2 transition-all shadow-md text-sm font-semibold">
                              Launch
                              <ExternalLink className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#18A1CD] transition-colors" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Apps without Access */}
              {appsWithoutAccess.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#052049]">
                    Request Access to These Apps
                  </h3>
                  <div className="space-y-3">
                    {appsWithoutAccess.map((app) => (
                      <div
                        key={app.id}
                        className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5 border-2 border-gray-200 hover:border-[#18A1CD] hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => onAppClick(app)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden ring-2 ring-gray-200 p-2">
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
                            <div className="font-bold text-base text-[#052049] group-hover:text-[#18A1CD] transition-colors mb-1">
                              {app.name}
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {app.description}
                            </p>
                            <div className="text-xs font-semibold text-gray-500 mt-2">
                              Access not yet granted
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="px-4 py-2 border-2 border-[#18A1CD] text-[#18A1CD] hover:bg-[#18A1CD] hover:text-white rounded-lg transition-all text-sm font-semibold">
                              Request
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#18A1CD] transition-colors" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t bg-white p-6">
            <button
              onClick={onClose}
              className="w-full px-6 py-4 border-2 border-gray-300 hover:bg-gray-50 rounded-xl transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
