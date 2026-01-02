import { Search, X, Filter, Calendar, TrendingUp, ExternalLink, Tag, Building2, ChevronDown, ArrowUpDown, Boxes, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SearchResult, mockSearchResults, predefinedSearches, searchSources, searchCategories } from '../data/ucsf-search-results';
import { Application } from '../data/ucsf-applications';

interface SearchResultsProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  applications: Application[];
  onGetInfo: (app: Application) => void;
}

export function SearchResults({ isOpen, onClose, initialQuery = '', applications, onGetInfo }: SearchResultsProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedSource, setSelectedSource] = useState('All Sources');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState<'relevance' | 'date'>('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [matchingApps, setMatchingApps] = useState<Application[]>([]);

  // Perform search
  useEffect(() => {
    if (searchQuery.trim()) {
      // Mock search - in production this would be an API call
      const searchTerms = searchQuery.toLowerCase().split(' ');
      const searchResults = mockSearchResults.filter(result => {
        const searchableText = `${result.title} ${result.description} ${result.category} ${result.metadata.tags?.join(' ')}`.toLowerCase();
        return searchTerms.some(term => searchableText.includes(term));
      });
      setResults(searchResults);
      
      // Search applications
      const appResults = applications.filter(app => {
        const searchableText = `${app.name} ${app.description} ${app.category} ${app.metadata.owner}`.toLowerCase();
        return searchTerms.some(term => searchableText.includes(term));
      });
      setMatchingApps(appResults);
    } else {
      setResults([]);
      setMatchingApps([]);
    }
  }, [searchQuery, applications]);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...results];

    // Filter by source
    if (selectedSource !== 'All Sources') {
      filtered = filtered.filter(r => r.source === selectedSource);
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    // Sort results
    if (sortBy === 'relevance') {
      filtered.sort((a, b) => b.relevanceScore - a.relevanceScore);
    } else {
      filtered.sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    setFilteredResults(filtered);
  }, [results, selectedSource, selectedCategory, sortBy]);

  const handlePredefinedSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearFilters = () => {
    setSelectedSource('All Sources');
    setSelectedCategory('All Categories');
    setSortBy('relevance');
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getAppLogo = (app: Application) => {
    return app.logoUrl || null;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-hidden">
      <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white shadow-xl">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Search className="w-7 h-7" strokeWidth={2.5} />
                <h1 className="text-3xl font-bold">Search UCSF Resources</h1>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for applications, policies, research, resources, news, and more..."
                className="w-full pl-14 pr-6 py-4 bg-white text-gray-900 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl text-[15px] placeholder:text-gray-400"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>

            {/* Predefined Searches */}
            {!searchQuery && (
              <div className="mt-6">
                <p className="text-sm text-white/80 mb-3 font-semibold">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {predefinedSearches.map((query) => (
                    <button
                      key={query}
                      onClick={() => handlePredefinedSearch(query)}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold transition-all border border-white/30 hover:border-white/50"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-8 py-8">
          {searchQuery && (
            <>
              {/* Applications Section */}
              {matchingApps.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Boxes className="w-5 h-5 text-[#052049]" strokeWidth={2.5} />
                    <h2 className="text-2xl font-bold text-[#052049]">
                      Applications ({matchingApps.length})
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchingApps.map((app) => (
                      <article
                        key={app.id}
                        className="bg-white rounded-xl shadow-sm border-2 border-gray-200 hover:border-[#18A1CD] hover:shadow-md transition-all p-5 group cursor-pointer"
                        onClick={() => onGetInfo(app)}
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-gray-100 p-2">
                            {getAppLogo(app) ? (
                              <img 
                                src={getAppLogo(app)!} 
                                alt=""
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const parent = e.currentTarget.parentElement;
                                  if (parent && !parent.querySelector('svg')) {
                                    parent.innerHTML = '<svg viewBox="0 0 100 100" fill="currentColor" class="w-full h-full text-[#052049]"><rect width="100" height="100" fill="#052049"/><text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="40" font-weight="bold" font-family="Arial">U</text></svg>';
                                  }
                                }}
                              />
                            ) : (
                              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#052049]">
                                <rect width="100" height="100" fill="#052049"/>
                                <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="40" fontWeight="bold" fontFamily="Arial">U</text>
                              </svg>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#18A1CD] transition-colors">
                              {app.name}
                            </h3>
                            <p className="text-xs text-gray-500">{app.category}</p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                          {app.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{app.metadata.owner}</span>
                          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white rounded-lg text-xs font-semibold group-hover:shadow-md transition-all">
                            <Info className="w-3.5 h-3.5" />
                            Details
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Web Resources Section Header */}
              {filteredResults.length > 0 && (
                <div className="flex items-center gap-3 mb-4">
                  <ExternalLink className="w-5 h-5 text-[#052049]" strokeWidth={2.5} />
                  <h2 className="text-2xl font-bold text-[#052049]">
                    Web Resources ({filteredResults.length})
                  </h2>
                </div>
              )}

              {/* Results Header with Filters */}
              {filteredResults.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600">
                        Showing {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'}
                        {selectedSource !== 'All Sources' || selectedCategory !== 'All Categories' ? ' (filtered)' : ''}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                        showFilters
                          ? 'bg-[#052049] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Filter className="w-4 h-4" />
                      Filters & Sort
                      <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Filter Panel */}
                  {showFilters && (
                    <div className="border-t border-gray-200 pt-6 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Source Filter */}
                        <div>
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                            <Building2 className="w-4 h-4 text-[#18A1CD]" />
                            Filter by Source
                          </label>
                          <select
                            value={selectedSource}
                            onChange={(e) => setSelectedSource(e.target.value)}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A1CD]/30 focus:border-[#18A1CD] text-sm"
                          >
                            {searchSources.map((source) => (
                              <option key={source} value={source}>
                                {source}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Category Filter */}
                        <div>
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                            <Tag className="w-4 h-4 text-[#18A1CD]" />
                            Filter by Category
                          </label>
                          <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A1CD]/30 focus:border-[#18A1CD] text-sm"
                          >
                            {searchCategories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Sort */}
                        <div>
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                            <ArrowUpDown className="w-4 h-4 text-[#18A1CD]" />
                            Sort by
                          </label>
                          <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'relevance' | 'date')}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A1CD]/30 focus:border-[#18A1CD] text-sm"
                          >
                            <option value="relevance">Relevance</option>
                            <option value="date">Date (Newest First)</option>
                          </select>
                        </div>
                      </div>

                      {/* Clear Filters */}
                      {(selectedSource !== 'All Sources' || selectedCategory !== 'All Categories' || sortBy !== 'relevance') && (
                        <div className="mt-4 flex justify-end">
                          <button
                            onClick={clearFilters}
                            className="text-sm font-semibold text-[#18A1CD] hover:text-[#052049] transition-colors"
                          >
                            Clear all filters
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Results List */}
              {filteredResults.length > 0 ? (
                <div className="space-y-4">
                  {filteredResults.map((result) => (
                    <article
                      key={result.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-[#18A1CD]/30 transition-all p-6 group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block px-3 py-1 bg-[#052049]/5 text-[#052049] text-xs font-semibold rounded-full">
                              {result.source}
                            </span>
                            <span className="inline-block px-3 py-1 bg-[#18A1CD]/10 text-[#18A1CD] text-xs font-semibold rounded-full">
                              {result.category}
                            </span>
                            {sortBy === 'relevance' && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full">
                                <TrendingUp className="w-3 h-3" />
                                {result.relevanceScore}% match
                              </span>
                            )}
                          </div>
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-bold text-[#052049] hover:text-[#18A1CD] transition-colors group-hover:underline inline-flex items-center gap-2"
                          >
                            {result.title}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {formatDate(result.date)}
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {result.description}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        {result.metadata.department && (
                          <div className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4" />
                            {result.metadata.department}
                          </div>
                        )}
                        {result.metadata.author && (
                          <div className="flex items-center gap-1.5">
                            By {result.metadata.author}
                          </div>
                        )}
                        {result.metadata.tags && result.metadata.tags.length > 0 && (
                          <div className="flex items-center gap-2 ml-auto">
                            <Tag className="w-3.5 h-3.5" />
                            <div className="flex gap-2">
                              {result.metadata.tags.slice(0, 3).map((tag, idx) => (
                                <span key={idx} className="text-xs text-gray-600">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : matchingApps.length === 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any results matching your search criteria. Try adjusting your filters or search terms.
                  </p>
                  {(selectedSource !== 'All Sources' || selectedCategory !== 'All Categories') && (
                    <button
                      onClick={clearFilters}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white rounded-lg font-semibold hover:shadow-md transition-all"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {/* Initial State - No Search */}
          {!searchQuery && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <Search className="w-20 h-20 text-[#18A1CD] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#052049] mb-3">Search Across UCSF Resources</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                Access information from UCSF Health, Research, HR, IT, Library, and more. Use the search bar above or click a popular search term to get started.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-[#052049] mb-2">Comprehensive Search</h3>
                  <p className="text-sm text-gray-600">Search across all UCSF websites and resources</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-[#052049] mb-2">Smart Filtering</h3>
                  <p className="text-sm text-gray-600">Filter by source, category, and sort by relevance</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-[#052049] mb-2">Real-time Results</h3>
                  <p className="text-sm text-gray-600">Get instant access to the latest information</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
