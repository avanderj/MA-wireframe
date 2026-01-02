import { Edit, Plus, Trash2, LogOut, Package, List, Tag, Search, Newspaper, Users, BarChart3, TrendingUp, Activity, UserCheck, Shield, Building, Download, EyeOff, Clock, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { Application } from '../data/ucsf-applications';
import { AppBundle } from './AppBundlesSection';
import { AppEditor } from './AppEditor';
import { CuratedListEditor } from './CuratedListEditor';
import { NewsEditor } from './NewsEditor';
import { Breadcrumbs } from './Breadcrumbs';

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

interface UserAccount {
  id: string;
  name: string;
  email: string;
  department: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
  lastLogin: Date;
  accessLevel: string[];
}

interface UsageStats {
  totalUsers: number;
  activeUsers: number;
  totalApplications: number;
  totalLogins: number;
  mostAccessedApps: { app: string; count: number }[];
  recentActivity: { user: string; action: string; time: Date }[];
}

interface AdminDashboardProps {
  applications: Application[];
  bundles: AppBundle[];
  news: NewsItem[];
  onUpdateApp: (appId: number, updates: Partial<Application>) => void;
  onUpdateBundle: (bundle: AppBundle) => void;
  onDeleteBundle: (bundleId: string) => void;
  onUpdateNews: (news: NewsItem) => void;
  onDeleteNews: (newsId: number) => void;
  onLogout: () => void;
}

// Mock user data
const mockUsers: UserAccount[] = [
  {
    id: 'u1',
    name: 'Chris Garcia',
    email: 'chris.garcia@ucsf.edu',
    department: 'IT Department',
    role: 'admin',
    status: 'active',
    lastLogin: new Date('2024-12-23T10:30:00'),
    accessLevel: ['all'],
  },
  {
    id: 'u2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@ucsf.edu',
    department: 'Clinical Research',
    role: 'user',
    status: 'active',
    lastLogin: new Date('2024-12-22T14:15:00'),
    accessLevel: ['Epic', 'REDCap', 'Qualtrics'],
  },
  {
    id: 'u3',
    name: 'Michael Chen',
    email: 'michael.chen@ucsf.edu',
    department: 'Human Resources',
    role: 'user',
    status: 'active',
    lastLogin: new Date('2024-12-21T09:45:00'),
    accessLevel: ['Workday', 'DocuSign'],
  },
  {
    id: 'u4',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@ucsf.edu',
    department: 'Finance',
    role: 'user',
    status: 'inactive',
    lastLogin: new Date('2024-11-15T16:20:00'),
    accessLevel: ['Workday', 'Concur'],
  },
];

// Mock usage statistics
const mockUsageStats: UsageStats = {
  totalUsers: 8547,
  activeUsers: 6234,
  totalApplications: 42,
  totalLogins: 45823,
  mostAccessedApps: [
    { app: 'Epic', count: 12453 },
    { app: 'Workday', count: 8921 },
    { app: 'Zoom', count: 7654 },
    { app: 'Outlook', count: 6543 },
    { app: 'Box', count: 5432 },
  ],
  recentActivity: [
    { user: 'Chris Garcia', action: 'Logged in', time: new Date('2024-12-23T10:30:00') },
    { user: 'Sarah Johnson', action: 'Accessed Epic', time: new Date('2024-12-23T10:25:00') },
    { user: 'Michael Chen', action: 'Updated profile', time: new Date('2024-12-23T10:20:00') },
    { user: 'Jessica Lee', action: 'Logged in', time: new Date('2024-12-23T10:15:00') },
    { user: 'David Park', action: 'Accessed Workday', time: new Date('2024-12-23T10:10:00') },
  ],
};

export function AdminDashboard({
  applications,
  bundles,
  news,
  onUpdateApp,
  onUpdateBundle,
  onDeleteBundle,
  onUpdateNews,
  onDeleteNews,
  onLogout
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'analytics' | 'users' | 'apps' | 'bundles' | 'news'>('analytics');
  const [editingApp, setEditingApp] = useState<Application | null>(null);
  const [editingBundle, setEditingBundle] = useState<AppBundle | null>(null);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [editingUser, setEditingUser] = useState<UserAccount | null>(null);
  const [isCreatingBundle, setIsCreatingBundle] = useState(false);
  const [isCreatingNews, setIsCreatingNews] = useState(false);
  const [isCreatingApp, setIsCreatingApp] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [userSearchTerm, setUserSearchTerm] = useState('');
  
  // Sorting state
  const [appSortField, setAppSortField] = useState<'name' | 'category' | 'owner' | null>(null);
  const [appSortDirection, setAppSortDirection] = useState<'asc' | 'desc'>('asc');
  const [userSortField, setUserSortField] = useState<'name' | 'department' | 'role' | 'status' | 'lastLogin' | null>(null);
  const [userSortDirection, setUserSortDirection] = useState<'asc' | 'desc'>('asc');
  const [newsSortField, setNewsSortField] = useState<'title' | 'category' | 'date' | null>(null);
  const [newsSortDirection, setNewsSortDirection] = useState<'asc' | 'desc'>('asc');

  const filteredApps = applications.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(userSearchTerm.toLowerCase())
  );

  const handleSaveApp = (appId: number, updates: Partial<Application>) => {
    onUpdateApp(appId, updates);
    setEditingApp(null);
  };

  const handleSaveBundle = (bundle: AppBundle) => {
    onUpdateBundle(bundle);
    setEditingBundle(null);
    setIsCreatingBundle(false);
  };

  const handleSaveNews = (news: NewsItem) => {
    onUpdateNews(news);
    setEditingNews(null);
    setIsCreatingNews(false);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  // Sort handlers
  const handleAppSort = (field: 'name' | 'category' | 'owner') => {
    if (appSortField === field) {
      setAppSortDirection(appSortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setAppSortField(field);
      setAppSortDirection('asc');
    }
  };

  const handleUserSort = (field: 'name' | 'department' | 'role' | 'status' | 'lastLogin') => {
    if (userSortField === field) {
      setUserSortDirection(userSortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setUserSortField(field);
      setUserSortDirection('asc');
    }
  };

  const handleNewsSort = (field: 'title' | 'category' | 'date') => {
    if (newsSortField === field) {
      setNewsSortDirection(newsSortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setNewsSortField(field);
      setNewsSortDirection('asc');
    }
  };

  // Apply sorting to filtered arrays
  const sortedApps = [...filteredApps].sort((a, b) => {
    if (!appSortField) return 0;
    
    let aValue, bValue;
    if (appSortField === 'name') {
      aValue = a.name.toLowerCase();
      bValue = b.name.toLowerCase();
    } else if (appSortField === 'category') {
      aValue = a.category.toLowerCase();
      bValue = b.category.toLowerCase();
    } else {
      aValue = a.metadata.owner.toLowerCase();
      bValue = b.metadata.owner.toLowerCase();
    }
    
    if (aValue < bValue) return appSortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return appSortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!userSortField) return 0;
    
    let aValue, bValue;
    if (userSortField === 'name') {
      aValue = a.name.toLowerCase();
      bValue = b.name.toLowerCase();
    } else if (userSortField === 'department') {
      aValue = a.department.toLowerCase();
      bValue = b.department.toLowerCase();
    } else if (userSortField === 'role') {
      aValue = a.role;
      bValue = b.role;
    } else if (userSortField === 'status') {
      aValue = a.status;
      bValue = b.status;
    } else {
      return userSortDirection === 'asc' ? 
        a.lastLogin.getTime() - b.lastLogin.getTime() :
        b.lastLogin.getTime() - a.lastLogin.getTime();
    }
    
    if (aValue < bValue) return userSortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return userSortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const sortedNews = [...news].sort((a, b) => {
    if (!newsSortField) return 0;
    
    let aValue, bValue;
    if (newsSortField === 'title') {
      aValue = a.title.toLowerCase();
      bValue = b.title.toLowerCase();
    } else if (newsSortField === 'category') {
      aValue = a.category.toLowerCase();
      bValue = b.category.toLowerCase();
    } else {
      aValue = a.date;
      bValue = b.date;
    }
    
    if (aValue < bValue) return newsSortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return newsSortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Helper to render sort icon
  const SortIcon = ({ field, activeField, direction }: { field: string, activeField: string | null, direction: 'asc' | 'desc' }) => {
    if (field !== activeField) {
      return <ArrowUpDown className="w-3 h-3 text-gray-400" strokeWidth={2} />;
    }
    return direction === 'asc' ? 
      <ArrowUp className="w-3 h-3 text-[#18A1CD]" strokeWidth={2} /> :
      <ArrowDown className="w-3 h-3 text-[#18A1CD]" strokeWidth={2} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-white/80">Manage users, applications, and monitor portal analytics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: 'Admin Dashboard' }]} />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'bg-white border-2 border-[#18A1CD] text-[#052049] shadow-md'
                : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <BarChart3 className="w-4 h-4" strokeWidth={2} />
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeTab === 'users'
                ? 'bg-white border-2 border-[#18A1CD] text-[#052049] shadow-md'
                : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <Users className="w-4 h-4" strokeWidth={2} />
            Users ({mockUsers.length})
          </button>
          <button
            onClick={() => setActiveTab('apps')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeTab === 'apps'
                ? 'bg-white border-2 border-[#18A1CD] text-[#052049] shadow-md'
                : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <List className="w-4 h-4" strokeWidth={2} />
            Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('bundles')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeTab === 'bundles'
                ? 'bg-white border-2 border-[#18A1CD] text-[#052049] shadow-md'
                : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <Package className="w-4 h-4" strokeWidth={2} />
            App Bundles ({bundles.length})
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeTab === 'news'
                ? 'bg-white border-2 border-[#18A1CD] text-[#052049] shadow-md'
                : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <Newspaper className="w-4 h-4" strokeWidth={2} />
            News ({news.length})
          </button>
        </div>

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Header with Export Button */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#052049]">Usage Analytics</h2>
                <p className="text-sm text-gray-600 mt-1">Overview of portal usage and performance metrics</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                <Download className="w-4 h-4" strokeWidth={2} />
                Export Report
              </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" strokeWidth={2} />
                </div>
                <p className="text-sm text-gray-600 mb-1">Total Users</p>
                <p className="text-3xl font-bold text-[#052049]">{mockUsageStats.totalUsers.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-2">+12% from last month</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" strokeWidth={2} />
                </div>
                <p className="text-sm text-gray-600 mb-1">Active Users</p>
                <p className="text-3xl font-bold text-[#052049]">{mockUsageStats.activeUsers.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-2">{((mockUsageStats.activeUsers / mockUsageStats.totalUsers) * 100).toFixed(1)}% active rate</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <Activity className="w-5 h-5 text-[#18A1CD]" strokeWidth={2} />
                </div>
                <p className="text-sm text-gray-600 mb-1">Applications</p>
                <p className="text-3xl font-bold text-[#052049]">{mockUsageStats.totalApplications}</p>
                <p className="text-xs text-gray-500 mt-2">Across all categories</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" strokeWidth={2} />
                </div>
                <p className="text-sm text-gray-600 mb-1">Total Logins</p>
                <p className="text-3xl font-bold text-[#052049]">{mockUsageStats.totalLogins.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-2">+8% from last week</p>
              </div>
            </div>

            {/* Most Accessed Apps & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Most Accessed Apps */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#052049] mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" strokeWidth={2} />
                  Most Accessed Applications
                </h3>
                <div className="space-y-3">
                  {mockUsageStats.mostAccessedApps.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
                          <span className="text-sm font-bold text-[#052049]">{index + 1}</span>
                        </div>
                        <span className="font-semibold text-gray-900">{item.app}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 rounded-full h-2 w-32">
                          <div
                            className="bg-gradient-to-r from-[#052049] to-[#18A1CD] h-2 rounded-full"
                            style={{ width: `${(item.count / mockUsageStats.mostAccessedApps[0].count) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-600 w-16 text-right">{item.count.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#052049] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" strokeWidth={2} />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {mockUsageStats.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4 h-4 text-purple-600" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span className="font-semibold">{activity.user}</span>{' '}
                          <span className="text-gray-600">{activity.action}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{formatTimeAgo(activity.time)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* News Analytics */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm mt-6">
              <h3 className="text-lg font-bold text-[#052049] mb-4 flex items-center gap-2">
                <Newspaper className="w-5 h-5" strokeWidth={2} />
                News & Announcements Analytics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Total Articles</p>
                  <p className="text-3xl font-bold text-[#052049]">{news.length}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Featured Stories</p>
                  <p className="text-3xl font-bold text-[#052049]">{news.filter(n => n.featured).length}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Urgent Announcements</p>
                  <p className="text-3xl font-bold text-[#052049]">{news.filter(n => n.urgent).length}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 text-sm">Recent News Items</h4>
                {news.slice(0, 5).map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                          item.category === 'Security' ? 'bg-red-100 text-red-700' :
                          item.category === 'Announcement' ? 'bg-blue-100 text-blue-700' :
                          item.category === 'Policy' ? 'bg-purple-100 text-purple-700' :
                          item.category === 'Update' ? 'bg-teal-100 text-teal-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                        {item.featured && (
                          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                            Featured
                          </span>
                        )}
                        {item.urgent && (
                          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-100 text-red-700">
                            Urgent
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Search */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#052049]">User Management</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  <Plus className="w-4 h-4" strokeWidth={2} />
                  Add User
                </button>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                <input
                  type="text"
                  value={userSearchTerm}
                  onChange={(e) => setUserSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
                  placeholder="Search users by name, email, or department..."
                />
              </div>
            </div>

            {/* Users List */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleUserSort('name')}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider hover:text-[#18A1CD] transition-colors"
                      >
                        User
                        <SortIcon field="name" activeField={userSortField} direction={userSortDirection} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleUserSort('department')}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider hover:text-[#18A1CD] transition-colors"
                      >
                        Department
                        <SortIcon field="department" activeField={userSortField} direction={userSortDirection} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleUserSort('role')}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider hover:text-[#18A1CD] transition-colors"
                      >
                        Role
                        <SortIcon field="role" activeField={userSortField} direction={userSortDirection} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleUserSort('status')}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider hover:text-[#18A1CD] transition-colors"
                      >
                        Status
                        <SortIcon field="status" activeField={userSortField} direction={userSortDirection} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleUserSort('lastLogin')}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider hover:text-[#18A1CD] transition-colors"
                      >
                        Last Login
                        <SortIcon field="lastLogin" activeField={userSortField} direction={userSortDirection} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Building className="w-4 h-4 text-gray-400" />
                          {user.department}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-lg ${
                          user.role === 'admin'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          <Shield className="w-3 h-3" strokeWidth={2} />
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-lg ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                          }`}></div>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-700">{formatTimeAgo(user.lastLogin)}</p>
                        <p className="text-xs text-gray-500">{user.lastLogin.toLocaleDateString()}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setEditingUser(user)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#052049] text-white rounded-lg hover:bg-[#041938] transition-colors"
                        >
                          <Edit className="w-4 h-4" strokeWidth={2} />
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Apps Tab */}
        {activeTab === 'apps' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Search */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#052049]">Application Management</h2>
                <button 
                  onClick={() => setIsCreatingApp(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  <Plus className="w-4 h-4" strokeWidth={2} />
                  Add Application
                </button>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#18A1CD] focus:ring-4 focus:ring-[#18A1CD]/10 transition-all"
                  placeholder="Search applications..."
                />
              </div>
            </div>

            {/* Apps List */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleAppSort('name')}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider hover:text-[#18A1CD] transition-colors"
                      >
                        Application
                        <SortIcon field="name" activeField={appSortField} direction={appSortDirection} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleAppSort('category')}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider hover:text-[#18A1CD] transition-colors"
                      >
                        Category
                        <SortIcon field="category" activeField={appSortField} direction={appSortDirection} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleAppSort('owner')}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider hover:text-[#18A1CD] transition-colors"
                      >
                        Owner
                        <SortIcon field="owner" activeField={appSortField} direction={appSortDirection} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedApps.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-semibold text-gray-900">{app.name}</p>
                            <p className="text-sm text-gray-500 line-clamp-1">{app.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg">
                          <Tag className="w-3 h-3" strokeWidth={2} />
                          {app.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-700">{app.metadata.owner}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          {!app.hidden && app.hasAccess && (
                            <span className="text-xs text-green-600 font-semibold">✓ Active</span>
                          )}
                          {app.featured && (app.id === 1 || app.id === 10 || app.id === 11) && (
                            <span className="text-xs text-amber-600 font-semibold">★ Featured</span>
                          )}
                          {app.hidden && (
                            <span className="text-xs text-gray-500 font-semibold">○ Hidden</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setEditingApp(app)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#052049] text-white rounded-lg hover:bg-[#041938] transition-colors"
                        >
                          <Edit className="w-4 h-4" strokeWidth={2} />
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bundles Tab */}
        {activeTab === 'bundles' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Manage curated application bundles for easier discovery
              </p>
              <button
                onClick={() => setIsCreatingBundle(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                <Plus className="w-4 h-4" strokeWidth={2} />
                Create New Bundle
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bundles.map((bundle) => (
                <div
                  key={bundle.id}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#18A1CD] transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${bundle.color} text-white`}>
                      {bundle.icon && <bundle.icon className="w-6 h-6" strokeWidth={2} />}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingBundle(bundle)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4 text-gray-600" strokeWidth={2} />
                      </button>
                      <button
                        onClick={() => onDeleteBundle(bundle.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#052049] mb-2">{bundle.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{bundle.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{bundle.appIds.length} applications</span>
                    {bundle.saved && bundle.id !== 'research-analytics' && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                        Saved
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* News Tab */}
        {activeTab === 'news' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Manage news and announcements for the portal
              </p>
              <button
                onClick={() => setIsCreatingNews(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                <Plus className="w-4 h-4" strokeWidth={2} />
                Create News Item
              </button>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedNews.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500 mt-1">{item.excerpt}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{item.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{item.date}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          {item.source && (
                            <span className={`text-xs font-semibold ${
                              item.source === 'external' ? 'text-blue-600' : 'text-green-600'
                            }`}>
                              {item.source === 'external' ? '⊕ External' : '⊙ Internal'}
                            </span>
                          )}
                          {item.urgent && (
                            <span className="text-xs text-red-600 font-semibold">⚠ Urgent</span>
                          )}
                          {item.featured && (
                            <span className="text-xs text-amber-600 font-semibold">★ Featured</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => setEditingNews(item)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#052049] text-white rounded-lg hover:bg-[#041938] transition-colors"
                          >
                            <Edit className="w-4 h-4" strokeWidth={2} />
                            Edit
                          </button>
                          <button
                            onClick={() => onDeleteNews(item.id)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" strokeWidth={2} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {(editingApp || isCreatingApp) && (
        <AppEditor
          app={editingApp || undefined}
          applications={applications}
          onSave={handleSaveApp}
          onClose={() => {
            setEditingApp(null);
            setIsCreatingApp(false);
          }}
        />
      )}

      {(editingBundle || isCreatingBundle) && (
        <CuratedListEditor
          bundle={editingBundle}
          applications={applications}
          onSave={handleSaveBundle}
          onClose={() => {
            setEditingBundle(null);
            setIsCreatingBundle(false);
          }}
        />
      )}

      {(editingNews || isCreatingNews) && (
        <NewsEditor
          news={editingNews || undefined}
          onSave={handleSaveNews}
          onClose={() => {
            setEditingNews(null);
            setIsCreatingNews(false);
          }}
        />
      )}
    </div>
  );
}