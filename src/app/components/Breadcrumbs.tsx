import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onHomeClick?: () => void;
}

export function Breadcrumbs({ items, onHomeClick }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <button
        onClick={onHomeClick || (() => window.location.href = '#/')}
        className="flex items-center gap-1.5 text-gray-600 hover:text-[#052049] transition-colors"
      >
        <Home className="w-4 h-4" strokeWidth={2} />
        <span>Home</span>
      </button>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
          {item.href || item.onClick ? (
            <button
              onClick={item.onClick || (() => item.href && (window.location.href = item.href))}
              className={`transition-colors ${index === items.length - 1
                  ? 'text-[#052049] font-semibold'
                  : 'text-gray-600 hover:text-[#052049]'
                }`}
            >
              {item.label}
            </button>
          ) : (
            <span className="text-[#052049] font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
