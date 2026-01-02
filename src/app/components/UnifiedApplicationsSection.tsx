import {
    Bookmark,
    Library,
    TrendingUp,
    Sparkles,
    Boxes,
    Shield,
} from "lucide-react";
import { Application } from "../data/ucsf-applications";
import { categoryColors } from "../utils/app-helpers";
import { AppBundle } from "./AppBundlesSection";
import { ApplicationCard } from "./ApplicationCard";

type App = Application;

export function UnifiedApplicationsSection({
    apps,
    onGetInfo,
    viewMode,
    onViewModeChange,
    categoryFilter,
    onCategoryFilterChange,
    curatedView,
    onCuratedViewChange,
    appBundles,
    onBundleClick,
}: {
    apps: App[];
    onGetInfo: (app: App) => void;
    viewMode: "saved" | "all";
    onViewModeChange: (mode: "saved" | "all") => void;
    categoryFilter: string;
    onCategoryFilterChange: (filter: string) => void;
    curatedView:
    | "all"
    | "most-popular"
    | "recently-added"
    | "ucsf-picks"
    | "bundles";
    onCuratedViewChange: (
        view: "all" | "most-popular" | "recently-added" | "ucsf-picks" | "bundles"
    ) => void;
    appBundles?: AppBundle[];
    onBundleClick?: (bundle: AppBundle) => void;
}) {
    // Get apps based on view mode
    const baseApps =
        viewMode === "saved" ? apps.filter((app) => app.saved) : apps;

    // Apply curated view filter
    let curatedApps = baseApps;
    if (curatedView === "most-popular") {
        curatedApps = baseApps
            .filter((app) => app.usageCount && app.usageCount > 0)
            .sort((a, b) => (b.usageCount || 0) - (a.usageCount || 0))
            .slice(0, 12);
    } else if (curatedView === "recently-added") {
        curatedApps = baseApps
            .filter((app) => app.dateAdded)
            .sort((a, b) => {
                const dateA =
                    a.dateAdded instanceof Date
                        ? a.dateAdded.getTime()
                        : new Date(a.dateAdded!).getTime();
                const dateB =
                    b.dateAdded instanceof Date
                        ? b.dateAdded.getTime()
                        : new Date(b.dateAdded!).getTime();
                return dateB - dateA;
            })
            .slice(0, 12);
    } else if (curatedView === "ucsf-picks") {
        curatedApps = baseApps.filter((app) => app.ucsfPick);
    }

    // Apply category filter
    const filteredApps =
        categoryFilter === "all"
            ? curatedApps
            : curatedApps.filter((app) => app.category === categoryFilter);

    const categories = [
        "All",
        "Security",
        "Finance",
        "Productivity",
        "Legal",
        "Communication",
        "Business",
        "HR",
        "Education",
        "Research",
        "Facilities",
        "Scheduling",
    ];
    const availableCategories = new Set(baseApps.map((app) => app.category));

    const savedCount = apps.filter((app) => app.saved).length;

    return (
        <div className="max-w-7xl mx-auto px-8 py-8">
            {/* Main Applications Section */}
            <div>
                {/* Section Header - More Prominent */}
                <div className="mb-2">
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold text-[#052049] tracking-tight">
                            All Applications
                        </h2>
                    </div>
                </div>

                {/* View Mode Toggle - More Prominent */}
                <div className="mb-8">
                    <div className="inline-flex bg-white rounded-2xl p-1.5 border-2 border-gray-200">
                        <button
                            onClick={() => onViewModeChange("saved")}
                            className={`px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 ${viewMode === "saved"
                                    ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-md"
                                    : "text-gray-700 hover:text-[#052049] hover:bg-gray-50"
                                }`}
                        >
                            <Bookmark className="w-4 h-4" strokeWidth={2.5} />
                            Saved ({savedCount})
                        </button>
                        <button
                            onClick={() => onViewModeChange("all")}
                            className={`px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 ${viewMode === "all"
                                    ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-md"
                                    : "text-gray-700 hover:text-[#052049] hover:bg-gray-50"
                                }`}
                        >
                            <Library className="w-4 h-4" strokeWidth={2.5} />
                            All Applications ({apps.length})
                        </button>
                    </div>
                </div>

                {/* Curated Views */}
                {viewMode === "all" && (
                    <div className="mb-6">
                        <div className="flex items-center gap-4 flex-wrap">
                            <span className="font-bold text-[#052049]">View:</span>
                            <div className="inline-flex bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1.5 gap-1.5 border-2 border-gray-200 shadow-sm">
                                <button
                                    onClick={() => onCuratedViewChange("all")}
                                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${curatedView === "all"
                                            ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-md"
                                            : "text-gray-700 hover:text-[#052049] hover:bg-white/60"
                                        }`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => onCuratedViewChange("most-popular")}
                                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${curatedView === "most-popular"
                                            ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-md"
                                            : "text-gray-700 hover:text-[#052049] hover:bg-white/60"
                                        }`}
                                >
                                    <TrendingUp className="w-4 h-4" strokeWidth={2.5} />
                                    Most Popular
                                </button>
                                <button
                                    onClick={() => onCuratedViewChange("recently-added")}
                                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${curatedView === "recently-added"
                                            ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-md"
                                            : "text-gray-700 hover:text-[#052049] hover:bg-white/60"
                                        }`}
                                >
                                    <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                                    Recently Added
                                </button>
                                <button
                                    onClick={() => onCuratedViewChange("bundles")}
                                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${curatedView === "bundles"
                                            ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-md"
                                            : "text-gray-700 hover:text-[#052049] hover:bg-white/60"
                                        }`}
                                >
                                    <Boxes className="w-4 h-4" strokeWidth={2.5} />
                                    App Bundles
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Category Filters */}
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => {
                            const isAvailable =
                                category === "All" || availableCategories.has(category);
                            if (!isAvailable) return null;

                            const categoryColor =
                                categoryColors[category] ||
                                "bg-gray-500/10 text-gray-700 border-gray-200";
                            const isActive =
                                (category === "All" && categoryFilter === "all") ||
                                categoryFilter === category;
                            const count =
                                category === "All"
                                    ? baseApps.length
                                    : baseApps.filter((a) => a.category === category).length;

                            return (
                                <button
                                    key={category}
                                    onClick={() =>
                                        onCategoryFilterChange(
                                            category === "All" ? "all" : category
                                        )
                                    }
                                    className={`px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all whitespace-nowrap flex items-center gap-2 ${isActive
                                            ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white border-transparent shadow-md"
                                            : categoryColor
                                        }`}
                                >
                                    {category}
                                    <span
                                        className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${isActive ? "bg-white/20" : "bg-gray-200"
                                            }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Special Sections for Curated Views */}
                {curatedView === "bundles" && appBundles && onBundleClick ? (
                    <div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#052049] mb-2">
                                App Bundles
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Curated collections based on common workflows and roles
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {appBundles.map((bundle) => {
                                const Icon = bundle.icon;
                                return (
                                    <button
                                        key={bundle.id}
                                        onClick={() => onBundleClick(bundle)}
                                        className={`group w-full rounded-2xl p-5 border border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/10 text-left bg-gradient-to-br ${bundle.gradient} hover:border-gray-200/80 hover:-translate-y-1`}
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${bundle.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <Icon className="w-6 h-6" strokeWidth={2} />
                                        </div>

                                        <h3 className="font-bold text-[15px] text-[#052049] mb-2 group-hover:text-[#18A1CD] transition-colors tracking-tight leading-snug">
                                            {bundle.title}
                                        </h3>

                                        <p className="text-[12px] text-gray-600 line-clamp-2 leading-relaxed mb-3">
                                            {bundle.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-1">
                                            <div className="flex items-center gap-1.5">
                                                <Boxes
                                                    className="w-3.5 h-3.5 text-gray-400"
                                                    strokeWidth={2}
                                                />
                                                <span className="text-[12px] font-semibold text-gray-700">
                                                    {bundle.appIds.length} apps
                                                </span>
                                            </div>
                                            <ChevronRight
                                                className="w-4 h-4 text-gray-400 group-hover:text-[#18A1CD] group-hover:translate-x-1 transition-all duration-300"
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ) : curatedView === "most-popular" ? (
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                                <TrendingUp
                                    className="w-6 h-6 text-amber-600"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#052049]">
                                    Most Popular
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Top applications by usage across UCSF
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredApps.map((app) => (
                                <ApplicationCard key={app.id} app={app} onGetInfo={onGetInfo} />
                            ))}
                        </div>
                    </div>
                ) : curatedView === "recently-added" ? (
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                                <Sparkles
                                    className="w-6 h-6 text-purple-600"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#052049]">
                                    Recently Added
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    New applications added to the library
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredApps.map((app) => (
                                <ApplicationCard key={app.id} app={app} onGetInfo={onGetInfo} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Applications Grid - Default View */}
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-gray-600 text-sm">
                                Showing{" "}
                                <span className="font-semibold text-[#052049]">
                                    {filteredApps.length}
                                </span>{" "}
                                {filteredApps.length === 1 ? "application" : "applications"}
                            </p>

                            {/* Authentication Key */}
                            <div className="flex items-center gap-3 text-xs">
                                <div className="flex items-center gap-1">
                                    <Shield className="w-3 h-3 text-blue-600" />
                                    <span className="text-gray-600">SSO: Single Sign-On</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Shield className="w-3 h-3 text-purple-600" />
                                    <span className="text-gray-600">
                                        VPN: Virtual Private Network
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Shield className="w-3 h-3 text-emerald-600" />
                                    <span className="text-gray-600">
                                        MFA: Multi-Factor Authentication
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredApps.map((app) => (
                                <ApplicationCard key={app.id} app={app} onGetInfo={onGetInfo} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
