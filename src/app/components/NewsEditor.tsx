import { Save, X, Globe, Calendar } from 'lucide-react';
import { useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  urgent: boolean;
  source?: 'internal' | 'external';
  externalUrl?: string;
  featured?: boolean;
}

interface NewsEditorProps {
  news: NewsItem | null;
  onSave: (news: NewsItem) => void;
  onClose: () => void;
}

const CATEGORIES = ['Security', 'Announcement', 'Update', 'Policy', 'Event', 'Training'];

export function NewsEditor({ news, onSave, onClose }: NewsEditorProps) {
  const [title, setTitle] = useState(news?.title || '');
  const [excerpt, setExcerpt] = useState(news?.excerpt || '');
  const [content, setContent] = useState(news?.content || '');
  const [category, setCategory] = useState(news?.category || 'Announcement');
  const [urgent, setUrgent] = useState(news?.urgent || false);
  const [featured, setFeatured] = useState(news?.featured || false);
  const [source, setSource] = useState<'internal' | 'external'>(news?.source || 'internal');
  const [externalUrl, setExternalUrl] = useState(news?.externalUrl || '');

  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link'],
      ['clean']
    ],
  }), []);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'color', 'background',
    'link'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newsItem: NewsItem = {
      id: news?.id || Date.now(),
      title,
      excerpt,
      content,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category,
      urgent,
      source,
      externalUrl: source === 'external' ? externalUrl : undefined,
      featured
    };

    onSave(newsItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white p-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">
              {news ? 'Edit News Item' : 'Create News Item'}
            </h2>
            <p className="text-white/80">Manage announcements and news for the portal</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Source Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                News Source
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-[#18A1CD] transition-colors flex-1">
                  <input
                    type="radio"
                    value="internal"
                    checked={source === 'internal'}
                    onChange={() => setSource('internal')}
                    className="w-4 h-4 text-[#18A1CD]"
                  />
                  <span className="font-semibold text-gray-700">Internal News</span>
                </label>
                <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-[#18A1CD] transition-colors flex-1">
                  <input
                    type="radio"
                    value="external"
                    checked={source === 'external'}
                    onChange={() => setSource('external')}
                    className="w-4 h-4 text-[#18A1CD]"
                  />
                  <span className="font-semibold text-gray-700">External Source</span>
                </label>
              </div>
            </div>

            {/* External URL */}
            {source === 'external' && (
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Globe className="w-4 h-4" strokeWidth={2} />
                  External URL
                </label>
                <input
                  type="url"
                  value={externalUrl}
                  onChange={(e) => setExternalUrl(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
                  placeholder="https://example.com/news/article"
                  required={source === 'external'}
                />
              </div>
            )}

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
                placeholder="Enter news title..."
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all resize-none"
                placeholder="Brief summary..."
                required
              />
            </div>

            {/* Content - WYSIWYG Editor */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content
              </label>
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-[#18A1CD] focus-within:ring-4 focus-within:ring-[#18A1CD]/10 transition-all">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  placeholder="Write your news content here..."
                  className="h-64"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-[#18A1CD] transition-colors">
                <input
                  type="checkbox"
                  checked={urgent}
                  onChange={(e) => setUrgent(e.target.checked)}
                  className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-600"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-700">Urgent</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Mark as urgent/important
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-[#18A1CD] transition-colors">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-5 h-5 text-[#18A1CD] border-gray-300 rounded focus:ring-[#18A1CD]"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-700">Featured</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Show prominently on homepage
                  </p>
                </div>
              </label>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" strokeWidth={2} />
            <span>
              {news 
                ? `Last edited: ${news.date}` 
                : `Publishing: ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
              }
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!title || !excerpt || (source === 'external' && !externalUrl)}
              className="px-6 py-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" strokeWidth={2} />
              {news ? 'Update News' : 'Publish News'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
