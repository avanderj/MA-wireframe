// UCSF Logo component - Simple representation of UCSF branding
export function UCSFLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* UCSF medical cross and circle symbol */}
      <circle cx="50" cy="50" r="45" fill="#052049"/>
      <rect x="44" y="25" width="12" height="50" fill="white" rx="1.5"/>
      <rect x="25" y="44" width="50" height="12" fill="white" rx="1.5"/>
      <circle cx="50" cy="50" r="6" fill="#18A1CD"/>
    </svg>
  );
}
