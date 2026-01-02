import ucsfLogo from "../../assets/77d7076c78f4fbfe1fda5f5ba58d10c85d3f10f8.png";

interface UCSFBrandingProps {
  variant?: "header-dark" | "header-light" | "footer";
  className?: string;
  onClick?: () => void;
}

export function UCSFBranding({
  variant = "header-dark",
  className = "",
  onClick,
}: UCSFBrandingProps) {
  const isDark = variant === "header-dark";
  const isLight = variant === "header-light";
  const isFooter = variant === "footer";

  // Size configuration
  const logoHeight = isFooter ? "h-10" : "h-8";
  const textSize = isFooter ? "text-xl" : "text-lg";

  // Color configuration
  const textColor = isDark
    ? "text-white"
    : isLight
      ? "text-[#052049]"
      : "text-blue-200";

  const Content = (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* UCSF Logo */}
      <img
        src={ucsfLogo}
        alt="UCSF Logo"
        className={`${logoHeight} w-auto object-contain`}
      />

      {/* Connect Text - Adjacent to Logo */}
      <div className={`${textSize} tracking-wide ${textColor}`}>
        <span style={{ fontWeight: 300 }}>My</span>
        <span style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>
          Access
        </span>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="focus:outline-none text-left">
        {Content}
      </button>
    );
  }

  return Content;
}
