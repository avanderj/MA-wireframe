import { AlertTriangle, Calendar, ChevronRight } from "lucide-react";
import { actionItems } from "../data/mock-data";

export function ActionCenterSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-5">
            <div className="flex items-center gap-2.5 mb-5">
                <AlertTriangle className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                <h2 className="text-2xl font-bold text-[#052049] tracking-tight">
                    Action Center
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {actionItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.id}
                            href={item.link}
                            className="group bg-white rounded-2xl p-5 border border-red-200/60 bg-gradient-to-br from-red-50/30 to-orange-50/30 hover:border-red-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-0.5"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-red-600 group-hover:text-red-700 transition-colors">
                                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-bold text-[15px] text-red-900 tracking-tight leading-snug">
                                            {item.title}
                                        </h3>
                                        {item.status && (
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm">
                                                {item.status}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-700 mb-3 text-[13px] leading-relaxed">
                                        {item.description}
                                    </p>
                                    {item.progress !== undefined && (
                                        <div className="mb-3">
                                            <div className="flex items-center justify-between text-[11px] mb-1.5">
                                                <span className="text-gray-600 font-medium">
                                                    Progress
                                                </span>
                                                <span className="font-bold text-[#052049]">
                                                    {item.progress}%
                                                </span>
                                            </div>
                                            <div className="h-2 bg-gray-200/60 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-500"
                                                    style={{ width: `${item.progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {item.dueDate && (
                                        <div className="flex items-center gap-2 text-[11px] text-gray-600 mb-3">
                                            <Calendar className="w-3 h-3" strokeWidth={2} />
                                            <span className="font-medium">Due: {item.dueDate}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 text-red-600 font-semibold text-[12px] group-hover:gap-3 transition-all">
                                        <span>Take Action</span>
                                        <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
