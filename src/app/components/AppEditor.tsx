import { Save, X, Tag, EyeOff, Trash2, Star, Image, Shield, Upload, AlertCircle, FileText, Building2, Package, Eye } from 'lucide-react';
import { useState } from 'react';
import { Application } from '../data/ucsf-applications';

interface AppEditorProps {
  app?: Application;
  applications?: Application[];
  onSave: (appId: number, updates: Partial<Application>) => void;
  onClose: () => void;
}

const AVAILABLE_CATEGORIES = [
  'Security',
  'Finance',
  'Research',
  'Communication',
  'Productivity',
  'Healthcare',
  'Education',
  'HR',
  'Scheduling',
  'Analytics',
  'Collaboration',
  'Infrastructure'
];

const AUTHENTICATION_MODES = [
  'Multi-Factor Authentication',
  'Single Sign-On',
  'VPN'
];

export function AppEditor({ app, applications, onSave, onClose }: AppEditorProps) {
  const [name, setName] = useState(app?.name || '');
  const [category, setCategory] = useState(app?.category || 'Security');
  const [description, setDescription] = useState(app?.description || '');
  const [featured, setFeatured] = useState(app?.featured || false);
  const [thumbnailUrl, setThumbnailUrl] = useState(app?.thumbnail || '');
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [authModes, setAuthModes] = useState<string[]>(
    app?.authMode ? app.authMode.split(', ') : []
  );
  const [owner, setOwner] = useState(app?.metadata.owner || '');
  const [version, setVersion] = useState(app?.metadata.version || '');
  const [compliance, setCompliance] = useState(app?.metadata.compliance || '');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showFeaturedModal, setShowFeaturedModal] = useState(false);

  // Get currently featured apps
  const featuredApps = applications?.filter(a => a.featured) || [];
  const currentAppFeatured = featuredApps.find(a => a.id === app?.id);
  const otherFeaturedApps = featuredApps.filter(a => a.id !== app?.id);
  const canBeFeatured = featured || otherFeaturedApps.length < 3;

  const handleAuthModeToggle = (mode: string) => {
    setAuthModes(prev =>
      prev.includes(mode)
        ? prev.filter(m => m !== mode)
        : [...prev, mode]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      // In a real app, you would upload this file and get a URL
      // For now, we'll just create a local preview URL
      const previewUrl = URL.createObjectURL(file);
      setThumbnailUrl(previewUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(app?.id || 0, {
      name,
      category,
      description,
      featured,
      thumbnail: thumbnailUrl,
      authMode: authModes.join(', '),
      metadata: {
        owner,
        version,
        compliance,
        lastUpdated: app?.metadata.lastUpdated || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        users: app?.metadata.users || '0 active users'
      }
    });
  };

  const handleToggleStatus = () => {
    // Prevent hiding if the app is featured and currently active
    if (app?.featured && !app.hidden) {
      alert('Cannot hide a featured application. Please remove featured status first.');
      return;
    }

    const newHidden = !app?.hidden;
    onSave(app?.id || 0, {
      hidden: newHidden,
      hasAccess: !newHidden  // Hidden apps cannot be active
    });
    onClose();
  };

  const handleDelete = () => {
    // In a real app, this would call a delete API
    console.log('Delete application:', app?.id);
    onClose();
  };

  const handleFeatureToggle = () => {
    // Prevent featuring if the app is hidden
    if (app?.hidden && !featured) {
      alert('Cannot feature a hidden application. Hidden applications must be unhidden first.');
      return;
    }
    if (!canBeFeatured && !featured) {
      // Show modal when trying to feature but limit reached
      setShowFeaturedModal(true);
    } else {
      setFeatured(!featured);
    }
  };

  const handleUnfeatureApp = (appId: number) => {
    // Unfeature the selected app
    onSave(appId, { featured: false });
    setShowFeaturedModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4">
      <div className="bg-white rounded-none sm:rounded-2xl shadow-2xl max-w-2xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white p-4 sm:p-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">{app ? 'Edit Application' : 'Add Application'}</h2>
            <p className="text-sm sm:text-base text-white/80">{app?.name || 'Create a new application'}</p>
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
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
              placeholder="Enter application name..."
            />
            <p className="mt-2 text-xs text-gray-500">
              Provide a unique name for this application
            </p>
          </div>

          {/* Category Selection */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <Tag className="w-4 h-4" strokeWidth={2} />
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
            >
              {AVAILABLE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <p className="mt-2 text-xs text-gray-500">
              Select the primary category for this application
            </p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all resize-none"
              placeholder="Enter application description..."
            />
            <p className="mt-2 text-xs text-gray-500">
              Provide a brief description of what this application does
            </p>
          </div>

          {/* Thumbnail Upload/URL */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <Image className="w-4 h-4" strokeWidth={2} />
              Thumbnail Image
            </label>

            {/* URL Input */}
            <input
              type="text"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all mb-3"
              placeholder="Enter thumbnail URL..."
            />

            {/* File Upload */}
            <div className="flex items-center gap-3">
              <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#18A1CD] hover:bg-gray-50 transition-all cursor-pointer">
                <Upload className="w-4 h-4 text-gray-500" strokeWidth={2} />
                <span className="text-sm text-gray-600">
                  {thumbnailFile ? thumbnailFile.name : 'Or upload a file'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Recommended size: 256x256px or 512x512px (PNG or JPG, max 2MB)
            </p>

            {/* Preview */}
            {thumbnailUrl && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-2">Preview:</p>
                <img
                  src={thumbnailUrl}
                  alt="Thumbnail preview"
                  className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          {/* Authentication Modes (Multi-Select) */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <Shield className="w-4 h-4" strokeWidth={2} />
              Authentication Requirements
            </label>
            <div className="space-y-2">
              {AUTHENTICATION_MODES.map((mode) => (
                <label
                  key={mode}
                  className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl hover:border-[#18A1CD] hover:bg-gray-50 transition-all cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={authModes.includes(mode)}
                    onChange={() => handleAuthModeToggle(mode)}
                    className="w-4 h-4 text-[#18A1CD] bg-gray-100 border-gray-300 rounded focus:ring-[#18A1CD] focus:ring-2"
                  />
                  <span className="text-sm text-gray-700">{mode}</span>
                </label>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Select all authentication methods required for this application
            </p>
          </div>

          {/* Feature Application Section */}
          <div className="mb-6 border-2 border-gray-200 rounded-xl p-4">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <Star className="w-4 h-4" strokeWidth={2} />
              Feature Application
            </label>

            <button
              type="button"
              onClick={handleFeatureToggle}
              disabled={!canBeFeatured && !featured}
              className={`w-full px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${featured
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:shadow-lg'
                : canBeFeatured
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
            >
              <Star className={`w-4 h-4 ${featured ? 'fill-white' : ''}`} strokeWidth={2} />
              {featured ? 'Featured Application' : 'Feature This Application'}
            </button>

            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <div className="flex-1">
                  <p className="text-xs text-blue-800 font-semibold mb-1">
                    Only three applications may be featured at a time
                  </p>
                  {otherFeaturedApps.length > 0 && (
                    <div className="text-xs text-blue-700">
                      <p className="mb-1">Currently featured:</p>
                      <ul className="space-y-1">
                        {otherFeaturedApps.map((app) => (
                          <li key={app.id} className="flex items-center justify-between">
                            <span>• {app.name}</span>
                            {!canBeFeatured && (
                              <button
                                type="button"
                                onClick={() => handleUnfeatureApp(app.id)}
                                className="text-blue-600 hover:text-blue-800 underline ml-2"
                              >
                                Remove
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {currentAppFeatured && (
                    <p className="text-xs text-blue-700 mt-1">
                      ✓ This application is currently featured
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Current Metadata (Read-only) */}
          {app && (
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                <FileText className="w-4 h-4" strokeWidth={2} />
                Application Metadata
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {/* Owner */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-2">
                    <Building2 className="w-3.5 h-3.5" strokeWidth={2} />
                    Owner
                  </label>
                  <input
                    type="text"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
                    placeholder="e.g., IT Services, HR Department"
                  />
                </div>

                {/* Version and Compliance in a row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-2">
                      <Package className="w-3.5 h-3.5" strokeWidth={2} />
                      Version
                    </label>
                    <input
                      type="text"
                      value={version}
                      onChange={(e) => setVersion(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
                      placeholder="e.g., 2024.1"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-2">
                      <Shield className="w-3.5 h-3.5" strokeWidth={2} />
                      Compliance
                    </label>
                    <input
                      type="text"
                      value={compliance}
                      onChange={(e) => setCompliance(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
                      placeholder="e.g., HIPAA"
                    />
                  </div>
                </div>

                {/* Display read-only Users field */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Users (Read-only)</p>
                  <p className="text-sm font-semibold text-gray-700">{app?.metadata.users || 'N/A'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {app && (
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Application Actions</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleToggleStatus}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
                >
                  {app?.hidden ? <Eye className="w-4 h-4" strokeWidth={2} /> : <EyeOff className="w-4 h-4" strokeWidth={2} />}
                  {app?.hidden ? 'Mark Application as Active' : 'Mark Application as Inactive'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmDelete(true)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 font-semibold rounded-xl transition-colors"
                >
                  <Trash2 className="w-4 h-4" strokeWidth={2} />
                  Delete Application
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Hidden applications won't appear in user views. Deleted applications are permanently removed.
              </p>
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            <Save className="w-4 h-4" strokeWidth={2} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Application?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <span className="font-semibold">{app?.name}</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmDelete(false)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Featured App Limit Modal */}
      {showFeaturedModal && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Featured App Limit Reached</h3>
            <p className="text-gray-600 mb-4">
              Only three applications can be featured at a time. Please remove one of the currently featured apps first.
            </p>
            <div className="mb-6 space-y-2">
              {otherFeaturedApps.map((featuredApp) => (
                <div key={featuredApp.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700">{featuredApp.name}</span>
                  <button
                    onClick={() => handleUnfeatureApp(featuredApp.id)}
                    className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowFeaturedModal(false)}
              className="w-full px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}