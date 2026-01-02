import { useState } from "react";
import {
    Home,
    Library,
    Newspaper,
    Search,
    HelpCircle,
    ChevronDown,
    GraduationCap,
    FileText,
    BookOpen,
    Flag,
    Menu,
} from "lucide-react";
import { UCSFBranding } from "./UCSFBranding";

export function Header({
    activeView,
    onViewChange,
    onProfileClick,
    onSearchClick,
}: {
    activeView: "my-apps" | "app-library" | "bundle-detail" | "admin" | "news";
    onViewChange: (
        view: "my-apps" | "app-library" | "bundle-detail" | "admin" | "news"
    ) => void;
    onProfileClick: () => void;
    onSearchClick: () => void;
}) {
    const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            role="banner"
            className="bg-white/80 backdrop-blur-xl border-b border-gray-100/60 sticky top-0 z-30"
        >
            <div className="px-4 md:px-10 py-5">
                <div className="flex items-center justify-between">
                    {/* Left: Logo, Navigation and Search */}
                    <div className="flex items-center gap-3 md:gap-6 flex-1">
                        {/* UCSF Branding */}
                        <UCSFBranding
                            variant="header-light"
                            onClick={() => onViewChange("my-apps")}
                            className="cursor-pointer"
                        />

                        <div
                            className="hidden md:block w-px h-8 bg-gray-200/60"
                            aria-hidden="true"
                        ></div>

                        {/* Desktop Navigation Buttons */}
                        <nav
                            aria-label="Main navigation"
                            className="hidden lg:flex items-center gap-3"
                        >
                            <button
                                onClick={() => onViewChange("my-apps")}
                                className={`px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2 ${activeView === "my-apps"
                                        ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-lg shadow-[#052049]/20"
                                        : "text-gray-700 hover:bg-gray-50/80 hover:text-[#052049]"
                                    }`}
                                aria-current={activeView === "my-apps" ? "page" : undefined}
                                aria-label="Home page"
                            >
                                <Home
                                    className="w-[18px] h-[18px]"
                                    strokeWidth={2.5}
                                    aria-hidden="true"
                                />
                                <span className="font-semibold text-[13px] tracking-wide">
                                    Home
                                </span>
                            </button>
                            <button
                                onClick={() => onViewChange("app-library")}
                                className={`px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2 ${activeView === "app-library" || activeView === "bundle-detail"
                                        ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-lg shadow-[#052049]/20"
                                        : "text-gray-700 hover:bg-gray-50/80 hover:text-[#052049]"
                                    }`}
                                aria-current={
                                    activeView === "app-library" || activeView === "bundle-detail"
                                        ? "page"
                                        : undefined
                                }
                                aria-label="App Library page"
                            >
                                <Library
                                    className="w-[18px] h-[18px]"
                                    strokeWidth={2.5}
                                    aria-hidden="true"
                                />
                                <span className="font-semibold text-[13px] tracking-wide">
                                    App Library
                                </span>
                            </button>
                            <button
                                onClick={() => onViewChange("news")}
                                className={`px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2 ${activeView === "news"
                                        ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-lg shadow-[#052049]/20"
                                        : "text-gray-700 hover:bg-gray-50/80 hover:text-[#052049]"
                                    }`}
                                aria-current={activeView === "news" ? "page" : undefined}
                                aria-label="News page"
                            >
                                <Newspaper
                                    className="w-[18px] h-[18px]"
                                    strokeWidth={2.5}
                                    aria-hidden="true"
                                />
                                <span className="font-semibold text-[13px] tracking-wide">
                                    News
                                </span>
                            </button>
                        </nav>

                        {/* Desktop Global Search Bar */}
                        <div className="hidden xl:flex items-center gap-4 ml-6">
                            <div className="w-px h-8 bg-gray-200/60" aria-hidden="true"></div>
                            <button
                                onClick={onSearchClick}
                                className="flex items-center gap-3 bg-gray-50/50 rounded-xl px-4 py-2.5 border border-gray-200/60 hover:border-gray-300/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2 w-96"
                            >
                                <Search
                                    className="w-[18px] h-[18px] text-gray-400"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                />
                                <span className="text-[14px] text-gray-400 flex-1 text-left">
                                    Search applications...
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Mobile Menu Button, Search, Help and Profile */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Mobile Search Button */}
                        <button
                            onClick={onSearchClick}
                            className="lg:hidden p-2 hover:bg-gray-50/80 rounded-xl transition-all duration-200"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5 text-gray-600" strokeWidth={2} />
                        </button>

                        {/* Help Dropdown - Hidden on smallest mobile */}
                        <div className="hidden md:block relative">
                            <button
                                onClick={() => setIsHelpDropdownOpen(!isHelpDropdownOpen)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50/80 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2"
                                aria-label="Help and Support menu"
                                aria-expanded={isHelpDropdownOpen}
                                aria-haspopup="true"
                            >
                                <HelpCircle className="w-5 h-5 text-gray-600" strokeWidth={2} />
                                <span className="hidden lg:inline text-sm font-semibold text-gray-700">
                                    Help & Support
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-gray-500 transition-transform ${isHelpDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    strokeWidth={2}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {isHelpDropdownOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setIsHelpDropdownOpen(false)}
                                    />
                                    <div className="absolute right-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-200/60 z-50 overflow-hidden backdrop-blur-xl">
                                        <div className="p-4">
                                            <div className="px-4 py-3 mb-2">
                                                <div className="font-bold text-[15px] text-[#052049] tracking-tight">
                                                    Help & Support
                                                </div>
                                                <div className="text-[13px] text-gray-500 mt-0.5">
                                                    Quick access to resources
                                                </div>
                                            </div>
                                            <a
                                                href="#"
                                                className="flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50/50 rounded-xl transition-all duration-200 group"
                                                onClick={() => setIsHelpDropdownOpen(false)}
                                            >
                                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center group-hover:from-[#052049] group-hover:to-[#18A1CD] transition-all duration-200 shadow-sm">
                                                    <GraduationCap
                                                        className="w-5 h-5 text-[#052049] group-hover:text-white transition-colors"
                                                        strokeWidth={2}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-[14px] text-gray-900 tracking-tight">
                                                        UC Learning Center
                                                    </div>
                                                    <div className="text-[12px] text-gray-500 mt-0.5">
                                                        Training and courses
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50/50 rounded-xl transition-all duration-200 group"
                                                onClick={() => setIsHelpDropdownOpen(false)}
                                            >
                                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center group-hover:from-[#052049] group-hover:to-[#18A1CD] transition-all duration-200 shadow-sm">
                                                    <HelpCircle
                                                        className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors"
                                                        strokeWidth={2}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-[14px] text-gray-900 tracking-tight">
                                                        IT Service Desk
                                                    </div>
                                                    <div className="text-[12px] text-gray-500 mt-0.5">
                                                        Support tickets
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50/50 rounded-xl transition-all duration-200 group"
                                                onClick={() => setIsHelpDropdownOpen(false)}
                                            >
                                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center group-hover:from-[#052049] group-hover:to-[#18A1CD] transition-all duration-200 shadow-sm">
                                                    <FileText
                                                        className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors"
                                                        strokeWidth={2}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-[14px] text-gray-900 tracking-tight">
                                                        IT Documentation
                                                    </div>
                                                    <div className="text-[12px] text-gray-500 mt-0.5">
                                                        Technical guides
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50/50 rounded-xl transition-all duration-200 group"
                                                onClick={() => setIsHelpDropdownOpen(false)}
                                            >
                                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center group-hover:from-[#052049] group-hover:to-[#18A1CD] transition-all duration-200 shadow-sm">
                                                    <BookOpen
                                                        className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors"
                                                        strokeWidth={2}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-[14px] text-gray-900 tracking-tight">
                                                        Employee Handbook
                                                    </div>
                                                    <div className="text-[12px] text-gray-500 mt-0.5">
                                                        Policies & procedures
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50/50 rounded-xl transition-all duration-200 group"
                                                onClick={() => setIsHelpDropdownOpen(false)}
                                            >
                                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center group-hover:from-[#052049] group-hover:to-[#18A1CD] transition-all duration-200 shadow-sm">
                                                    <Flag
                                                        className="w-5 h-5 text-red-600 group-hover:text-white transition-colors"
                                                        strokeWidth={2}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-[14px] text-gray-900 tracking-tight">
                                                        Report Phishing
                                                    </div>
                                                    <div className="text-[12px] text-gray-500 mt-0.5">
                                                        Security threats
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <button
                            onClick={onProfileClick}
                            className="flex items-center gap-2 md:gap-3 hover:bg-gray-50/80 rounded-xl px-2 md:px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2"
                            aria-label="Open profile menu for Chris Garcia"
                        >
                            <div
                                className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#052049] to-[#18A1CD] flex items-center justify-center font-bold text-[13px] shadow-lg shadow-[#052049]/20 text-white"
                                aria-hidden="true"
                            >
                                CG
                            </div>
                            <div className="hidden md:flex flex-col items-start">
                                <span className="text-sm font-semibold text-gray-900">
                                    Chris Garcia
                                </span>
                                <span className="text-xs text-gray-500">Go to Profile</span>
                            </div>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-gray-50/80 rounded-xl transition-all duration-200"
                            aria-label="Menu"
                        >
                            <Menu className="w-5 h-5 text-gray-600" strokeWidth={2} />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-2">
                        <button
                            onClick={() => {
                                onViewChange("my-apps");
                                setIsMobileMenuOpen(false);
                            }}
                            className={`w-full px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${activeView === "my-apps"
                                    ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            <Home className="w-5 h-5" strokeWidth={2.5} />
                            <span className="font-semibold">Home</span>
                        </button>
                        <button
                            onClick={() => {
                                onViewChange("app-library");
                                setIsMobileMenuOpen(false);
                            }}
                            className={`w-full px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${activeView === "app-library" || activeView === "bundle-detail"
                                    ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            <Library className="w-5 h-5" strokeWidth={2.5} />
                            <span className="font-semibold">App Library</span>
                        </button>
                        <button
                            onClick={() => {
                                onViewChange("news");
                                setIsMobileMenuOpen(false);
                            }}
                            className={`w-full px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${activeView === "news"
                                    ? "bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            <Newspaper className="w-5 h-5" strokeWidth={2.5} />
                            <span className="font-semibold">News</span>
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}
