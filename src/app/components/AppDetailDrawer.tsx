import {
    X,
    Zap,
    Building,
    Users,
    Calendar,
    Shield,
    Info,
    Lock,
    BookOpen,
    FileText,
    ExternalLink,
} from "lucide-react";
import { Application } from "../data/ucsf-applications";
import { getAppLogo } from "../utils/app-helpers";
// import imgRectangle134 from "../assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";

type App = Application;

interface AppDetailDrawerProps {
    app: App | null;
    isOpen: boolean;
    onClose: () => void;
    onLaunch: (app: App) => void;
    onRequestAccess: (app: App) => void;
}
export function AppDetailDrawer({
    app,
    isOpen,
    onClose,
    onLaunch,
    onRequestAccess,
}: AppDetailDrawerProps) {
    if (!app) return null;

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            <div
                className={`fixed right-0 top-0 h-full w-full sm:max-w-2xl bg-gradient-to-br from-white to-gray-50 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-full flex flex-col">
                    {/* Header with Gradient */}
                    <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white p-4 sm:p-8">
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 sm:right-6 sm:top-6 p-2 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex gap-3 sm:gap-5 items-start">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md ring-2 ring-white/30 shadow-lg p-2">
                                {getAppLogo(app) ? (
                                    <img
                                        src={getAppLogo(app)}
                                        alt={`${app.name} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <img
                                        src={imgRectangle134}
                                        alt={app.name}
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>
                            <div className="flex-1 pt-2">
                                <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                                    {app.name}
                                </h2>
                                <div className="flex gap-2 items-center flex-wrap">
                                    <span
                                        className={`inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30`}
                                    >
                                        {app.category}
                                    </span>
                                    {app.hasAccess && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm text-emerald-100 text-sm font-semibold rounded-full border border-emerald-400/30">
                                            <Zap className="w-3.5 h-3.5" />
                                            Active
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-[#052049]">
                                    About this application
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    {app.description}
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
                                <h3 className="text-xl font-semibold mb-5 text-[#052049]">
                                    Application Details
                                </h3>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                            <Building className="w-5 h-5 text-[#052049]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500 mb-1">
                                                Owner Department
                                            </div>
                                            <div className="font-medium text-gray-900">
                                                {app.metadata.owner}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                            <Users className="w-5 h-5 text-[#18A1CD]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500 mb-1">
                                                Active Users
                                            </div>
                                            <div className="font-medium text-gray-900">
                                                {app.metadata.users}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                            <Calendar className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500 mb-1">
                                                Last Updated
                                            </div>
                                            <div className="font-medium text-gray-900">
                                                {app.metadata.lastUpdated}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                            <Shield className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500 mb-1">
                                                Compliance
                                            </div>
                                            <div className="font-medium text-gray-900">
                                                {app.metadata.compliance}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                            <Info className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500 mb-1">Version</div>
                                            <div className="font-medium text-gray-900">
                                                {app.metadata.version}
                                            </div>
                                        </div>
                                    </div>

                                    {app.requirements && (
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                                <Lock className="w-5 h-5 text-amber-600" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm text-gray-500 mb-1">
                                                    Authentication
                                                </div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    {app.requirements.split(",").map((req, index) => {
                                                        const requirement = req.trim();
                                                        let bgColor = "bg-gray-100";
                                                        let textColor = "text-gray-700";
                                                        if (requirement === "SSO") {
                                                            bgColor = "bg-blue-100";
                                                            textColor = "text-blue-700";
                                                        }
                                                        if (requirement === "VPN") {
                                                            bgColor = "bg-purple-100";
                                                            textColor = "text-purple-700";
                                                        }
                                                        if (requirement === "MFA") {
                                                            bgColor = "bg-emerald-100";
                                                            textColor = "text-emerald-700";
                                                        }

                                                        return (
                                                            <span
                                                                key={index}
                                                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${bgColor} ${textColor} text-sm font-medium`}
                                                            >
                                                                <Shield className="w-4 h-4" />
                                                                {requirement}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Resources Section */}
                            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                                <h3 className="text-xl font-semibold mb-5 text-[#052049]">
                                    Resources & Support
                                </h3>
                                <div className="space-y-3">
                                    <a
                                        href="#"
                                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-all group border border-blue-100 hover:border-[#18A1CD]"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                            <BookOpen className="w-5 h-5 text-[#052049]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-[#052049] group-hover:text-[#18A1CD] transition-colors">
                                                How To Documentation
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                Step-by-step guides and tutorials
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#18A1CD] transition-colors" />
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all group border border-purple-100 hover:border-[#18A1CD]"
                                    >

                                        <div className="flex-1">
                                            <div className="font-semibold text-[#052049] group-hover:text-[#18A1CD] transition-colors">
                                                App Support Contact
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                Get help from the support team
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#18A1CD] transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="border-t bg-white p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {app.hasAccess ? (
                                <button
                                    onClick={() => onLaunch(app)}
                                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#052049] to-[#18A1CD] hover:from-[#041938] hover:to-[#1590BA] text-white rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 font-semibold"
                                >
                                    <span>Launch Application</span>
                                    <ExternalLink className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => onRequestAccess(app)}
                                    className="flex-1 px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-xl transition-all shadow-lg shadow-teal-500/25 font-semibold"
                                >
                                    Request Access
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                className="px-6 py-4 border-2 border-gray-300 hover:bg-gray-50 rounded-xl transition-colors font-medium"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
