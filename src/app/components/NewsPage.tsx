import { Calendar, Clock, ExternalLink, AlertTriangle, Newspaper, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  urgent: boolean;
  source: 'internal' | 'external';
  externalUrl?: string;
  featured: boolean;
  image?: string;
  readTime?: string;
}

interface NewsPageProps {
  news: NewsItem[];
}

export function NewsPage({ news }: NewsPageProps) {
  const featuredNews = news.filter(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'security':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'announcement':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'policy':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'update':
        return 'bg-teal-100 text-teal-700 border-teal-200';
      case 'research':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: 'News & Announcements' }]} />
        </div>
        
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#052049] to-[#18A1CD] bg-clip-text text-transparent tracking-tight">
              News & Announcements
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              Stay informed with the latest updates and important information
            </p>
          </div>
        </div>

        {/* Featured News Section */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#052049] mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#052049] to-[#18A1CD] rounded-full"></div>
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/60"
                >
                  {item.image && (
                    <div className="h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      {item.urgent && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                          <AlertTriangle className="w-3 h-3" strokeWidth={2.5} />
                          Urgent
                        </span>
                      )}
                      {item.source === 'external' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                          <ExternalLink className="w-3 h-3" strokeWidth={2.5} />
                          External
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#18A1CD] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" strokeWidth={2} />
                          {item.date}
                        </span>
                        {item.readTime && (
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" strokeWidth={2} />
                            {item.readTime}
                          </span>
                        )}
                      </div>
                      <button className="flex items-center gap-2 text-sm font-semibold text-[#18A1CD] hover:text-[#052049] transition-colors group-hover:gap-3">
                        Read More
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All News Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#052049] mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-[#052049] to-[#18A1CD] rounded-full"></div>
            All Updates
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {regularNews.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/60"
              >
                <div className={item.image ? 'flex flex-col md:flex-row' : ''}>
                  {item.image && (
                    <div className="md:w-80 h-56 md:h-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      {item.urgent && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                          <AlertTriangle className="w-3 h-3" strokeWidth={2.5} />
                          Urgent
                        </span>
                      )}
                      {item.source === 'external' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                          <ExternalLink className="w-3 h-3" strokeWidth={2.5} />
                          External
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#18A1CD] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" strokeWidth={2} />
                          {item.date}
                        </span>
                        {item.readTime && (
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" strokeWidth={2} />
                            {item.readTime}
                          </span>
                        )}
                      </div>
                      <button className="flex items-center gap-2 text-sm font-semibold text-[#18A1CD] hover:text-[#052049] transition-colors group-hover:gap-3">
                        Read More
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {news.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-10 h-10 text-gray-400" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No News Available</h3>
            <p className="text-gray-600">Check back later for updates and announcements</p>
          </div>
        )}
      </div>
    </div>
  );
}