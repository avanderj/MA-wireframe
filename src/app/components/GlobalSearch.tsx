import { Search, X, Clock, ExternalLink, Bookmark, FileText, Building2, GraduationCap, Calendar, ChevronDown, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Application } from '../data/ucsf-applications';
import { UCSFLogo } from './UCSFLogo';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  applications: Application[];
  onSelectApp: (app: Application) => void;
}

// UCSF Resource types
type ResourceType = 'application' | 'website' | 'document' | 'event' | 'department';
type SortOption = 'relevance' | 'date' | 'name';

interface SearchResource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  source: string;
  url?: string;
  date?: Date;
  category?: string;
  metadata?: Record<string, any>;
}

// Predefined search queries
const quickSearches = [
  { label: 'IT Support', query: 'IT support helpdesk' },
  { label: 'Email & Calendar', query: 'email calendar outlook' },
  { label: 'Security Training', query: 'security training phishing' },
  { label: 'Clinical Apps', query: 'clinical epic patient' },
  { label: 'Research Tools', query: 'research data analysis' },
  { label: 'HR & Payroll', query: 'workday payroll benefits' },
];

// Mock UCSF resources (in real app, this would come from API)
const mockUCSFResources: SearchResource[] = [
  {
    id: 'res-1',
    title: 'UCSF IT Service Desk',
    description: 'Get help with technology issues, submit tickets, and track support requests',
    type: 'website',
    source: 'it.ucsf.edu',
    url: 'https://it.ucsf.edu/service-desk',
    date: new Date('2024-12-01'),
  },
  {
    id: 'res-2',
    title: 'Email Migration Guide',
    description: 'Step-by-step instructions for migrating to the new email system',
    type: 'document',
    source: 'it.ucsf.edu',
    date: new Date('2024-11-15'),
  },
  {
    id: 'res-3',
    title: 'Cyber Security Awareness Training',
    description: 'Annual mandatory training for all UCSF employees on security best practices',
    type: 'document',
    source: 'security.ucsf.edu',
    date: new Date('2024-12-10'),
  },
  {
    id: 'res-4',
    title: 'UCSF Medical Center',
    description: 'Information about UCSF Medical Center facilities, services, and departments',
    type: 'website',
    source: 'ucsfhealth.org',
    url: 'https://www.ucsfhealth.org',
    date: new Date('2024-10-20'),
  },
  {
    id: 'res-5',
    title: 'Research Computing Resources',
    description: 'High-performance computing, data storage, and research IT support',
    type: 'website',
    source: 'research-it.ucsf.edu',
    date: new Date('2024-11-28'),
  },
];

export function GlobalSearch({ isOpen, onClose, applications, onSelectApp }: GlobalSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ResourceType[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Focus input when opened and scroll to top
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    } else {
      setSearchQuery('');
      setSelectedSources([]);
      setSelectedTypes([]);
      setSortBy('relevance');
      setShowFilters(false);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Convert applications to search resources
  const appResources: SearchResource[] = applications.map(app => ({
    id: `app-${app.id}`,
    title: app.name,
    description: app.description,
    type: 'application' as ResourceType,
    source: 'UCSF Connect',
    category: app.category,
    metadata: { app },
  }));

  // Combine all resources
  const allResources = [...appResources, ...mockUCSFResources];

  // Get unique sources
  const availableSources = Array.from(new Set(allResources.map(r => r.source))).sort();

  // Recently viewed apps
  const recentApps = applications.filter(app => app.lastUsed).slice(0, 4);

  // Search and filter logic
  const getFilteredResults = () => {
    if (searchQuery.trim().length === 0) return [];

    let results = allResources.filter(resource => 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (resource.category && resource.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Apply source filter
    if (selectedSources.length > 0) {
      results = results.filter(r => selectedSources.includes(r.source));
    }

    // Apply type filter
    if (selectedTypes.length > 0) {
      results = results.filter(r => selectedTypes.includes(r.type));
    }

    // Apply sorting
    if (sortBy === 'date') {
      results.sort((a, b) => {
        const dateA = a.date || new Date(0);
        const dateB = b.date || new Date(0);
        return dateB.getTime() - dateA.getTime();
      });
    } else if (sortBy === 'name') {
      results.sort((a, b) => a.title.localeCompare(b.title));
    }
    // relevance is the default order

    return results;
  };

  const searchResults = getFilteredResults();

  const handleSelectResource = (resource: SearchResource) => {
    if (resource.type === 'application' && resource.metadata?.app) {
      onSelectApp(resource.metadata.app);
      onClose();
    } else if (resource.url) {
      window.open(resource.url, '_blank');
    }
  };

  const handleQuickSearch = (query: string) => {
    setSearchQuery(query);
    inputRef.current?.focus();
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    inputRef.current?.focus();
  };

  const toggleSource = (source: string) => {
    setSelectedSources(prev =>
      prev.includes(source) ? prev.filter(s => s !== source) : [...prev, source]
    );
  };

  const toggleType = (type: ResourceType) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case 'application': return ExternalLink;
      case 'website': return Building2;
      case 'document': return FileText;
      case 'event': return Calendar;
      case 'department': return Building2;
      default: return FileText;
    }
  };

  const getResourceTypeLabel = (type: ResourceType) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Search Overlay */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 px-4">
        <div className="w-full max-w-5xl">
          {/* Search Input */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200">
            <div className="flex items-center gap-3 p-4 border-b border-gray-200">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={2} />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search applications, resources, and more..."
                className="flex-1 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none bg-transparent"
                aria-label="Search UCSF resources"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Clear search"
                >
                  <span className="text-sm font-medium text-gray-600">Clear</span>
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Filters and Sort Bar */}
            {searchQuery.trim().length > 0 && (
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    showFilters || selectedSources.length > 0 || selectedTypes.length > 0
                      ? 'bg-[#052049] text-white'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {(selectedSources.length > 0 || selectedTypes.length > 0) && (
                    <span className="px-1.5 py-0.5 bg-white/20 rounded text-xs">
                      {selectedSources.length + selectedTypes.length}
                    </span>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:border-transparent"
                  >
                    <option value="relevance">Sort by Relevance</option>
                    <option value="date">Sort by Date</option>
                    <option value="name">Sort by Name</option>
                  </select>
                </div>

                <div className="flex-1"></div>

                <span className="text-xs text-gray-500">
                  {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
                </span>
              </div>
            )}

            {/* Filter Panel */}
            {showFilters && searchQuery.trim().length > 0 && (
              <div className="grid grid-cols-2 gap-4 px-4 py-4 border-b border-gray-100 bg-gray-50/30">
                {/* Source Filter */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Source</h4>
                  <div className="space-y-1.5">
                    {availableSources.map((source) => (
                      <label key={source} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedSources.includes(source)}
                          onChange={() => toggleSource(source)}
                          className="w-4 h-4 rounded border-gray-300 text-[#052049] focus:ring-[#18A1CD]"
                        />
                        <span className="text-sm text-gray-700">{source}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Resource Type</h4>
                  <div className="space-y-1.5">
                    {(['application', 'website', 'document'] as ResourceType[]).map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type)}
                          onChange={() => toggleType(type)}
                          className="w-4 h-4 rounded border-gray-300 text-[#052049] focus:ring-[#18A1CD]"
                        />
                        <span className="text-sm text-gray-700">{getResourceTypeLabel(type)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            <div 
              ref={contentRef}
              className="max-h-[55vh] overflow-y-auto"
            >
              {searchQuery.trim().length === 0 ? (
                <div className="p-6">
                  {/* Quick Searches */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                      Quick Searches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {quickSearches.map((qs) => (
                        <button
                          key={qs.label}
                          onClick={() => handleQuickSearch(qs.query)}
                          className="px-4 py-2 bg-gradient-to-br from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 border border-blue-200/60 hover:border-[#18A1CD] rounded-xl text-sm font-medium text-[#052049] transition-all"
                        >
                          <Search className="w-3.5 h-3.5 inline mr-1.5" />
                          {qs.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Section */}
                  {recentApps.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3 px-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent</h3>
                      </div>
                      <div className="space-y-1">
                        {recentApps.map((app) => (
                          <button
                            key={app.id}
                            onClick={() => { onSelectApp(app); onClose(); }}
                            className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left group"
                          >
                            <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden ring-2 ring-gray-200 p-1.5">
                              {app.logoUrl ? (
                                <img 
                                  src={app.logoUrl} 
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <UCSFLogo className="w-full h-full" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-[#052049] group-hover:text-[#18A1CD] transition-colors text-sm">
                                {app.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {app.category} • {app.metadata.owner}
                              </div>
                            </div>
                            {app.saved && (
                              <Bookmark className="w-4 h-4 text-[#18A1CD] fill-current flex-shrink-0" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Search Results Section */
                <div className="p-4">
                  {searchResults.length > 0 ? (
                    <div className="space-y-1">
                      {searchResults.map((resource) => {
                        const Icon = getResourceIcon(resource.type);
                        return (
                          <button
                            key={resource.id}
                            onClick={() => handleSelectResource(resource)}
                            className="w-full flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left group"
                          >
                            <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-[#052049]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-[#052049] group-hover:text-[#18A1CD] transition-colors text-sm mb-0.5">
                                {resource.title}
                              </div>
                              <div className="text-xs text-gray-500 mb-1">
                                {getResourceTypeLabel(resource.type)} • {resource.source}
                                {resource.date && (
                                  <> • Updated {resource.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</>
                                )}
                              </div>
                              <div className="text-xs text-gray-600 line-clamp-2">
                                {resource.description}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {resource.type === 'application' && resource.metadata?.app?.saved && (
                                <Bookmark className="w-4 h-4 text-[#18A1CD] fill-current" />
                              )}
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#18A1CD] transition-colors" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm">No results found</p>
                      <p className="text-gray-400 text-xs mt-1">Try adjusting your search or filters</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Keyboard shortcuts hint */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Press <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20 text-white/80 font-mono">ESC</kbd> to close
            </p>
          </div>
        </div>
      </div>
    </>
  );
}