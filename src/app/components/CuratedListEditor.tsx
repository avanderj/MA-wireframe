import { Save, X, Plus, Trash2, GripVertical, Palette, BarChart3, UserCheck, MessagesSquare, DollarSign, ShieldCheck, Package, Info, Eye, EyeOff, Check } from 'lucide-react';
import { useState } from 'react';
import { Application } from '../data/ucsf-applications';
import { AppBundle } from './AppBundlesSection';

interface CuratedListEditorProps {
  bundle: AppBundle | null;
  applications: Application[];
  onSave: (bundle: AppBundle) => void;
  onDelete: (bundleId: string) => void;
  onClose: () => void;
}

const ICON_COMPONENTS = {
  Package,
  Palette,
  BarChart3,
  UserCheck,
  MessagesSquare,
  DollarSign,
  ShieldCheck
};

const ICON_NAMES = Object.keys(ICON_COMPONENTS) as Array<keyof typeof ICON_COMPONENTS>;

const COLOR_OPTIONS = [
  { name: 'Purple/Pink', gradient: 'from-purple-500 to-pink-500', bg: 'from-purple-50 to-pink-50' },
  { name: 'Blue/Indigo', gradient: 'from-blue-500 to-indigo-500', bg: 'from-blue-50 to-indigo-50' },
  { name: 'Rose/Orange', gradient: 'from-rose-500 to-orange-500', bg: 'from-rose-50 to-orange-50' },
  { name: 'Cyan/Blue', gradient: 'from-cyan-500 to-blue-500', bg: 'from-cyan-50 to-blue-50' },
  { name: 'Teal/Emerald', gradient: 'from-teal-500 to-emerald-500', bg: 'from-teal-50 to-emerald-50' },
  { name: 'Red/Orange', gradient: 'from-red-500 to-orange-500', bg: 'from-red-50 to-orange-50' },
  { name: 'Violet/Purple', gradient: 'from-violet-500 to-purple-500', bg: 'from-violet-50 to-purple-50' }
];

export function CuratedListEditor({ bundle, applications, onSave, onDelete, onClose }: CuratedListEditorProps) {
  const [title, setTitle] = useState(bundle?.title || '');
  const [description, setDescription] = useState(bundle?.description || '');
  const [selectedAppIds, setSelectedAppIds] = useState<number[]>(bundle?.appIds || []);
  const [colorIndex, setColorIndex] = useState(0);
  const [iconName, setIconName] = useState<keyof typeof ICON_COMPONENTS>(
    (bundle?.iconName as keyof typeof ICON_COMPONENTS) || 'Package'
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>(bundle?.status || 'active');

  const filteredApps = applications.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleApp = (appId: number) => {
    setSelectedAppIds(prev =>
      prev.includes(appId)
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  const removeApp = (appId: number) => {
    setSelectedAppIds(prev => prev.filter(id => id !== appId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBundle: AppBundle = {
      id: bundle?.id || `custom-${Date.now()}`,
      title,
      description,
      icon: ICON_COMPONENTS[iconName],
      iconName,
      color: COLOR_OPTIONS[colorIndex].gradient,
      gradient: COLOR_OPTIONS[colorIndex].bg,
      appIds: selectedAppIds,
      status
    };

    onSave(newBundle);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold">
                {bundle ? 'Edit Curated List' : 'Create Curated List'}
              </h2>
              {bundle && (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border flex items-center gap-1 ${status === 'active'
                  ? 'bg-green-500/20 text-white border-green-400/50'
                  : 'bg-gray-500/20 text-white/90 border-white/30'
                  }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${status === 'active' ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                  {status === 'active' ? 'Active' : 'Inactive'}
                </span>
              )}
            </div>
            <p className="text-white/80">Bundle applications together for easy discovery</p>
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
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left Column - Bundle Details */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bundle Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
                  placeholder="e.g., Creative Suite"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all resize-none"
                  placeholder="Brief description of this bundle..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Icon
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {ICON_NAMES.map((name) => {
                    const IconComponent = ICON_COMPONENTS[name];
                    const isSelected = iconName === name;
                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => setIconName(name)}
                        className={`relative p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${isSelected
                          ? 'border-4 border-[#18A1CD] bg-[#18A1CD]/20'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <IconComponent className={`w-6 h-6 ${isSelected ? 'text-[#18A1CD]' : 'text-gray-700'}`} strokeWidth={2} />
                        <div className="flex flex-col items-center leading-tight">
                          <p className={`text-xs font-semibold ${isSelected ? 'text-[#18A1CD]' : 'text-gray-700'}`}>{name}</p>
                          {name === 'Package' && <span className="text-[10px] text-gray-500 pt-0.5">(Default)</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Color Theme
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {COLOR_OPTIONS.map((color, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setColorIndex(index)}
                      className={`p-3 rounded-xl border-2 transition-all ${colorIndex === index
                        ? 'border-[#18A1CD] ring-4 ring-[#18A1CD]/10'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className={`h-8 rounded-lg bg-gradient-to-r ${color.gradient} mb-2`}></div>
                      <p className="text-xs font-semibold text-gray-700">{color.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Apps Preview */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Selected Apps ({selectedAppIds.length})
                </label>
                <div className="space-y-2 max-h-64 overflow-y-auto bg-gray-50 rounded-xl p-3 border border-gray-200">
                  {selectedAppIds.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">
                      No apps selected yet
                    </p>
                  ) : (
                    selectedAppIds.map(appId => {
                      const app = applications.find(a => a.id === appId);
                      if (!app) return null;
                      return (
                        <div
                          key={appId}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
                        >
                          <GripVertical className="w-4 h-4 text-gray-400" strokeWidth={2} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <p className="text-sm font-semibold text-gray-700 truncate">{app.name}</p>
                              {!app.hidden && app.hasAccess ? (
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">Active</span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs font-bold">Inactive</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500">{app.category}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeApp(appId)}
                            className="p-1.5 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" strokeWidth={2} />
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - App Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Add Applications
              </label>

              {/* Search */}
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all mb-3"
                placeholder="Search applications..."
              />

              {/* App List */}
              <div className="space-y-2 max-h-[600px] overflow-y-auto bg-gray-50 rounded-xl p-3 border border-gray-200">
                {filteredApps.map(app => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => toggleApp(app.id)}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg border-2 transition-all text-left ${selectedAppIds.includes(app.id)
                      ? 'bg-[#18A1CD]/10 border-[#18A1CD]'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAppIds.includes(app.id)}
                      onChange={() => { }}
                      className="mt-1 w-4 h-4 text-[#18A1CD] border-gray-300 rounded focus:ring-[#18A1CD]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-700 mb-0.5">{app.name}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{app.description}</p>
                      <div className="mt-1">
                        <span className="inline-block px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-semibold rounded">
                          {app.category}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bundle Actions - Similar to AppEditor */}
          {bundle && (
            <div className="border-t border-gray-200 mx-6 pt-6 pb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Bundle Actions</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const newStatus = status === 'active' ? 'inactive' : 'active';
                    onSave({
                      ...bundle,
                      title,
                      description,
                      icon: ICON_COMPONENTS[iconName],
                      iconName,
                      color: COLOR_OPTIONS[colorIndex].gradient,
                      gradient: COLOR_OPTIONS[colorIndex].bg,
                      appIds: selectedAppIds,
                      status: newStatus
                    });
                    onClose();
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors min-w-[180px]"
                >
                  {status === 'active' ? (
                    <>
                      <EyeOff className="w-4 h-4" strokeWidth={2} />
                      Mark Bundle as Inactive
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" strokeWidth={2} />
                      Mark Bundle as Active
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this bundle? This action cannot be undone.')) {
                      onDelete(bundle.id);
                      onClose();
                    }
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 font-semibold rounded-xl transition-colors min-w-[180px]"
                >
                  <Trash2 className="w-4 h-4" strokeWidth={2} />
                  Delete Bundle
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Inactive bundles won't appear in user views. Deleted bundles are permanently removed.
              </p>
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {selectedAppIds.length} apps selected
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!title || !description || selectedAppIds.length === 0}
              className="px-6 py-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" strokeWidth={2} />
              Save Bundle
            </button>
          </div>
        </div>
      </div >
    </div >
  );
}
