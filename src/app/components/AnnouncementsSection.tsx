import { Newspaper, ChevronRight, AlertTriangle } from "lucide-react";
import { announcements as defaultAnnouncements } from "../data/mock-data";

export function AnnouncementsSection({
    onNavigateToNews,
    news,
}: {
    onNavigateToNews: () => void;
    news?: any[];
}) {
    const displayNews = news || defaultAnnouncements;

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                    <Newspaper className="w-6 h-6 text-[#18A1CD]" strokeWidth={2.5} />
                    <h2 className="text-2xl font-bold text-[#052049] tracking-tight">
                        News & Announcements
                    </h2>
                </div>
                <button
                    onClick={onNavigateToNews}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#052049] hover:bg-gray-50 rounded-xl transition-all flex items-center gap-2"
                >
                    Browse All News and Announcements
                    <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {displayNews.map((announcement, i) => i < 3 && (
                    <article
                        key={announcement.id}
                        className={`bg-white rounded-2xl p-5 border transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/10 cursor-pointer hover:-translate-y-0.5 ${announcement.urgent
                            ? "border-red-200/60 bg-gradient-to-br from-red-50/30 to-orange-50/30"
                            : "border-gray-200/60 hover:border-[#18A1CD]/40"
                            }`}
                    >
                        {announcement.urgent && (
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-black text-[10px] font-bold rounded-full mb-3 shadow-sm">
                                <AlertTriangle className="w-3 h-3" strokeWidth={2.5} />
                                URGENT
                            </div>
                        )}
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                {announcement.category}
                            </span>
                            <time className="text-[10px] text-gray-400 font-medium">
                                {announcement.date}
                            </time>
                        </div>
                        <h3 className="font-bold text-[15px] text-[#052049] mb-2 line-clamp-2 tracking-tight leading-snug">
                            {announcement.title}
                        </h3>
                        <p className="text-gray-600 text-[13px] line-clamp-2 leading-relaxed">
                            {announcement.excerpt}
                        </p>
                        <button className="mt-4 text-[#18A1CD] hover:text-[#052049] font-semibold text-[12px] flex items-center gap-1.5 group transition-colors">
                            Read more
                            <ChevronRight
                                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                strokeWidth={2.5}
                            />
                        </button>
                    </article>
                ))}
            </div>
        </div>
    );
}
