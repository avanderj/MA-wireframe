import { Sparkles, ChevronRight, Boxes } from "lucide-react";
import { AppBundle } from "./AppBundlesSection";

export function DiscoverToolsSection({
    appBundles,
    onBundleClick,
    onBrowseAll,
}: {
    appBundles: AppBundle[];
    onBundleClick: (bundle: AppBundle) => void;
    onBrowseAll: () => void;
}) {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-5">
            <div className="mb-6">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-2.5 mb-2">
                            <Sparkles className="w-5 h-5 text-[#18A1CD]" strokeWidth={2.5} />
                            <h2 className="text-2xl font-bold text-[#052049] tracking-tight">
                                Discover Tools For You
                            </h2>
                        </div>
                        <p className="text-[14px] text-gray-600 leading-relaxed">
                            Curated app collections based on common workflows and your role
                        </p>
                    </div>
                    <button
                        onClick={onBrowseAll}
                        className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#052049] hover:bg-gray-50 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 self-end"
                    >
                        Browse All Bundles
                        <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                </div>
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
    );
}
