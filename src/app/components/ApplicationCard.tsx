import {
    Bookmark,
    ExternalLink,
    Shield,
    Info,
} from "lucide-react";
import { Application } from "../data/ucsf-applications";
import { getAppLogo, categoryColors } from "../utils/app-helpers";
import { UCSFLogo } from "./UCSFLogo";

type App = Application;

export function ApplicationCard({
    app,
    onGetInfo,
}: {
    app: App;
    onGetInfo: (app: App) => void;
}) {
    const categoryColor =
        categoryColors[app.category] ||
        "bg-gray-500/10 text-gray-700 border-gray-200";

    return (
        <article className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 hover:border-[#18A1CD] hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
            <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-5 mb-5">
                    <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden ring-2 ring-gray-200 shadow-md p-2">
                        {getAppLogo(app) ? (
                            <img
                                src={getAppLogo(app)}
                                alt={`${app.name} logo`}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    // Fallback to UCSF logo if external logo fails to load
                                    e.currentTarget.style.display = "none";
                                    const parent = e.currentTarget.parentElement;
                                    if (parent && !parent.querySelector("svg")) {
                                        parent.innerHTML = "";
                                        const ucsfLogo = document.createElementNS(
                                            "http://www.w3.org/2000/svg",
                                            "svg"
                                        );
                                        ucsfLogo.setAttribute("viewBox", "0 0 100 100");
                                        ucsfLogo.setAttribute("class", "w-full h-full");
                                        ucsfLogo.innerHTML =
                                            '<circle cx="50" cy="50" r="45" fill="#052049"/><rect x="44" y="25" width="12" height="50" fill="white" rx="1.5"/><rect x="25" y="44" width="50" height="12" fill="white" rx="1.5"/><circle cx="50" cy="50" r="6" fill="#18A1CD"/>';
                                        parent.appendChild(ucsfLogo);
                                    }
                                }}
                            />
                        ) : (
                            <UCSFLogo className="w-full h-full" />
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-3">
                            <h3 className="font-bold text-lg text-[#052049] line-clamp-2 leading-snug group-hover:text-[#18A1CD] transition-colors">
                                {app.name}
                            </h3>
                            <button
                                className={`flex-shrink-0 transition-colors ${app.saved
                                        ? "text-[#18A1CD] hover:text-teal-600"
                                        : "text-gray-400 hover:text-[#18A1CD]"
                                    }`}
                                aria-label={app.saved ? "Saved" : "Save"}
                            >
                                <Bookmark
                                    className={`w-5 h-5 ${app.saved ? "fill-current" : ""}`}
                                />
                            </button>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span
                                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${categoryColor}`}
                            >
                                {app.category}
                            </span>
                        </div>
                        {app.requirements && (
                            <div className="flex items-center gap-2 flex-wrap">
                                {app.requirements.split(",").map((req, index) => {
                                    const requirement = req.trim();
                                    let iconColor = "text-gray-500";
                                    if (requirement === "SSO") iconColor = "text-blue-600";
                                    if (requirement === "VPN") iconColor = "text-purple-600";
                                    if (requirement === "MFA") iconColor = "text-emerald-600";

                                    return (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-1 text-xs font-medium text-gray-600"
                                        >
                                            <Shield className={`w-3 h-3 ${iconColor}`} />
                                            {requirement}
                                        </span>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed text-sm">
                    {app.description}
                </p>

                {/* Action zone - anchored to bottom */}
                <div className="flex items-center justify-between pt-5 border-t-2 border-gray-100 mt-auto">
                    <button
                        onClick={() => onGetInfo(app)}
                        className="text-gray-600 hover:text-[#052049] flex items-center gap-2 group/link transition-colors font-medium text-sm"
                    >
                        <Info className="w-4 h-4" />
                        <span className="underline underline-offset-2 decoration-2">
                            Details
                        </span>
                    </button>
                    {app.hasAccess ? (
                        <button className="px-5 py-2.5 bg-gradient-to-r from-[#052049] to-[#18A1CD] hover:from-[#041938] hover:to-[#1590BA] text-white rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg font-semibold text-sm">
                            <span>Launch</span>
                            <ExternalLink className="w-4 h-4" />
                        </button>
                    ) : (
                        <button className="px-5 py-2.5 border-2 border-gray-300 hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 rounded-xl transition-all font-semibold text-gray-700 hover:text-teal-700 text-sm">
                            Request
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
}
