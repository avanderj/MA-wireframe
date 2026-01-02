import { Clock, ChevronRight, Bookmark, Lock } from "lucide-react";
import { UCSFLogo } from "./UCSFLogo";
import { Application } from "../data/ucsf-applications";
import { getAppLogo, categoryColors } from "../utils/app-helpers";

type App = Application;

export function RecentlyUsedSection({
    apps,
    onGetInfo,
    onNavigateToLibrary,
}: {
    apps: App[];
    onGetInfo: (app: App) => void;
    onNavigateToLibrary: (mode: "saved" | "all") => void;
}) {
    // Recently used apps (top 6, sorted by most recent) - changed to show in 2 rows
    const recentApps = apps
        .filter((app) => app.lastUsed)
        .sort((a, b) => {
            if (!a.lastUsed || !b.lastUsed) return 0;
            return b.lastUsed.getTime() - a.lastUsed.getTime();
        })
        .slice(0, 6);

    if (recentApps.length === 0) return null;

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div>
                    <div className="flex items-center gap-2.5">
                        <Clock className="w-5 h-5 text-[#18A1CD]" strokeWidth={2.5} />
                        <h2 className="text-2xl font-bold text-[#052049] tracking-tight">
                            Pick Up Where You Left Off
                        </h2>
                    </div>
                    <p className="text-sm text-gray-600 ml-7 mt-1">
                        Your recently used applications
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onNavigateToLibrary("all")}
                        className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#052049] hover:bg-gray-50 rounded-xl transition-all flex items-center gap-2"
                    >
                        Browse All Apps
                        <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                    <button
                        onClick={() => onNavigateToLibrary("saved")}
                        className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#052049] to-[#18A1CD] hover:from-[#041938] hover:to-[#1590BA] text-white rounded-xl transition-all shadow-md flex items-center gap-2"
                    >
                        <Bookmark className="w-4 h-4" strokeWidth={2} />
                        View Saved Apps
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {recentApps.map((app) => {
                    const categoryColor =
                        categoryColors[app.category] ||
                        "bg-gray-500/10 text-gray-700 border-gray-200";
                    return (
                        <article
                            key={app.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200/60 hover:border-[#18A1CD] hover:shadow-lg transition-all duration-200 overflow-hidden group cursor-pointer"
                            onClick={() => onGetInfo(app)}
                        >
                            <div className="p-4">
                                <div className="flex gap-3 items-center">
                                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-2 ring-1 ring-gray-200/60 shadow-sm overflow-hidden">
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
                                        <h3 className="font-bold text-[14px] text-[#052049] line-clamp-1 group-hover:text-[#18A1CD] transition-colors mb-1.5 tracking-tight">
                                            {app.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span
                                                className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded-full border ${categoryColor}`}
                                            >
                                                {app.category}
                                            </span>
                                        </div>
                                        {app.requirements && (
                                            <div className="flex items-center gap-1.5 flex-wrap mt-1">
                                                {app.requirements.split(",").map((req, index) => {
                                                    const requirement = req.trim();
                                                    let iconColor = "text-gray-500";
                                                    if (requirement === "SSO") iconColor = "text-blue-600";
                                                    if (requirement === "VPN")
                                                        iconColor = "text-purple-600";
                                                    if (requirement === "MFA")
                                                        iconColor = "text-emerald-600";

                                                    return (
                                                        <span
                                                            key={index}
                                                            className="inline-flex items-center gap-0.5 text-[10px] font-medium text-gray-600"
                                                        >
                                                            <Lock className={`w-2.5 h-2.5 ${iconColor}`} />
                                                            {requirement}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
