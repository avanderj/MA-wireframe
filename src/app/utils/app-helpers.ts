import { Application } from "../data/ucsf-applications";
import imgDocuSignLogo from "../../assets/3cfb2198fa4e98c265566cc5b64ac65e01d54e8c.png";
import imgREDCapLogo from "../../assets/01233216aabb735f875a8e369654e75a611d3e80.png";
import imgSmartsheetLogo from "../../assets/e801352a1def02c0d77674762164da7c50f98764.png";
import imgUCPathLogo from "../../assets/2274419e69e2ad389edb37ac7343c1910439a124.png";
import imgServiceNowLogo from "../../assets/201d7fc08ec03da4fe46bc87373e39e0acd22b32.png";
import imgQualtricsLogo from "../../assets/1200174f576d7f6a4242e532269c3d4bfeb60960.png";
import imgZoomLogo from "../../assets/f8fb47a62ff06b9569f3c73cfd5169f2d8dea8e8.png";

type App = Application;

export const categoryColors: Record<string, string> = {
    Security: "bg-[#052049]/10 text-[#052049] border-[#052049]/30",
    Finance: "bg-teal-500/10 text-teal-700 border-teal-300",
    Productivity: "bg-[#18A1CD]/10 text-[#18A1CD] border-[#18A1CD]/30",
    Legal: "bg-amber-500/10 text-amber-700 border-amber-300",
    Communication: "bg-cyan-500/10 text-cyan-700 border-cyan-300",
    Business: "bg-indigo-500/10 text-indigo-700 border-indigo-300",
    HR: "bg-rose-500/10 text-rose-700 border-rose-300",
    Education: "bg-purple-500/10 text-purple-700 border-purple-300",
    Research: "bg-emerald-500/10 text-emerald-700 border-emerald-300",
    Facilities: "bg-orange-500/10 text-orange-700 border-orange-300",
    Scheduling: "bg-blue-500/10 text-blue-700 border-blue-300",
};

// Map app IDs to their imported logo images
export const appLogoMap: Record<number, string> = {
    14: imgDocuSignLogo, // DocuSign - UCSF
    26: imgQualtricsLogo, // Qualtrics
    27: imgREDCapLogo, // REDCap
    29: imgServiceNowLogo, // ServiceNow
    31: imgSmartsheetLogo, // Smartsheet
    32: imgUCPathLogo, // UCPath
    33: imgZoomLogo, // Zoom
};

// Helper function to get the correct logo URL for an app
export function getAppLogo(app: App): string | undefined {
    // First check if there's a mapped imported logo
    if (appLogoMap[app.id]) {
        return appLogoMap[app.id];
    }
    // Otherwise return the logoUrl from the data
    return app.logoUrl;
}

export function getTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return diffMins <= 1 ? "Just now" : `${diffMins} min ago`;
    if (diffHours < 24)
        return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    return `${Math.floor(diffDays / 7)} weeks ago`;
}
