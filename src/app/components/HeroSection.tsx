import { Search } from "lucide-react";

export function HeroSection({ onSearchClick }: { onSearchClick: () => void }) {
    return (
        <div className="bg-gradient-to-b from-gray-50/40 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-14">
                <div className="mb-6 md:mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#052049] to-[#18A1CD] bg-clip-text text-transparent mb-3 md:mb-4 tracking-tight">
                        Welcome back, Chris
                    </h1>
                    <p className="text-base md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                        Your personalized dashboard with quick access to applications,
                        resources, and important updates.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl">
                    <Search
                        className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        strokeWidth={2}
                    />
                    <input
                        type="text"
                        placeholder="Search for applications..."
                        onClick={onSearchClick}
                        readOnly
                        className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 bg-white border border-gray-200/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#18A1CD]/10 focus:border-[#18A1CD] transition-all duration-200 shadow-sm hover:shadow-md text-sm md:text-[15px] placeholder:text-gray-400 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}
