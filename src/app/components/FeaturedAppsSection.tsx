import { Application } from "../data/ucsf-applications";

interface FeaturedAppsSectionProps {
  apps: Application[];
  onGetInfo: (app: Application) => void;
  onToggleSave: (app: Application) => void;
}

export function FeaturedAppsSection({
  apps,
  onGetInfo,
  onToggleSave,
}: FeaturedAppsSectionProps) {
  // Get featured apps (limit to 3)
  const featuredApps = apps.filter((app) => app.featured).slice(0, 3);

  if (featuredApps.length === 0) {
    return null;
  }

  const getAppLogo = (app: Application) => {
    return app.logoUrl || null;
  };

  return (
    <div className="bg-white border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-1 pb-10">
        {/* Featured Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredApps.map((app) => (
            <article
              key={app.id}
              className="bg-white rounded-xl border-2 border-gray-200/60 hover:border-[#18A1CD]/60 hover:shadow-lg transition-all duration-200 overflow-hidden group"
            >
              <div className="p-5">
                {/* Logo and Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-gray-100 p-2">
                    {getAppLogo(app) ? (
                      <img
                        src={getAppLogo(app)!}
                        alt=""
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const parent = e.currentTarget.parentElement;
                          if (parent && !parent.querySelector("svg")) {
                            parent.innerHTML =
                              '<svg viewBox="0 0 100 100" fill="currentColor" class="w-full h-full text-[#052049]"><rect width="100" height="100" fill="#052049"/><text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="40" font-weight="bold" font-family="Arial">U</text></svg>';
                          }
                        }}
                      />
                    ) : (
                      <svg
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        className="w-full h-full text-[#052049]"
                      >
                        <rect width="100" height="100" fill="#052049" />
                        <text
                          x="50"
                          y="50"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="40"
                          fontWeight="bold"
                          fontFamily="Arial"
                        >
                          U
                        </text>
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 leading-snug mb-1">
                      {app.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {app.metadata.owner}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
                  {app.description}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => onGetInfo(app)}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-[#052049] to-[#18A1CD] hover:from-[#041938] hover:to-[#1590BA] text-white rounded-xl transition-all shadow-md hover:shadow-lg font-semibold text-sm"
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
