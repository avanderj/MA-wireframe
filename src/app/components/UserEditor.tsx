import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

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

interface UserEditorProps {
    user: UserAccount;
    onSave: (userId: string, updates: Partial<UserAccount>) => void;
    onClose: () => void;
}

export function UserEditor({ user, onSave, onClose }: UserEditorProps) {
    const [role, setRole] = useState<'admin' | 'user'>(user.role);
    const [status, setStatus] = useState<'active' | 'inactive'>(user.status);

    useEffect(() => {
        setRole(user.role);
        setStatus(user.status);
    }, [user]);

    const handleSave = () => {
        onSave(user.id, { role, status });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-black px-6 py-4 flex items-center justify-between rounded-t-2xl">
                    <div>
                        <h2 className="text-2xl font-bold">Edit User</h2>
                        <p className="text-black/80 text-sm mt-1">Update user role and status</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                        <X className="w-6 h-6" strokeWidth={2} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* User Info (Read-only) */}
                    <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                        <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3">User Information</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-black font-bold text-lg">
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{user.name}</p>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-300">
                                <p className="text-sm text-gray-600 mt-1">
                                    <span className="font-semibold">Last Login:</span> {user.lastLogin.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                            User Role
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setRole('user')}
                                className={`p-4 rounded-xl border-2 transition-all ${role === 'user'
                                    ? 'border-[#18A1CD] bg-[#18A1CD]/5 shadow-md'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-gray-900">User</span>
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${role === 'user'
                                            ? 'border-[#18A1CD] bg-[#18A1CD]'
                                            : 'border-gray-300'
                                            }`}
                                    >
                                        {role === 'user' && (
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 text-left">
                                    Standard access to applications and resources
                                </p>
                            </button>

                            <button
                                onClick={() => setRole('admin')}
                                className={`p-4 rounded-xl border-2 transition-all ${role === 'admin'
                                    ? 'border-[#18A1CD] bg-[#18A1CD]/5 shadow-md'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-gray-900">Admin</span>
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${role === 'admin'
                                            ? 'border-[#18A1CD] bg-[#18A1CD]'
                                            : 'border-gray-300'
                                            }`}
                                    >
                                        {role === 'admin' && (
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 text-left">
                                    Full administrative access and management capabilities
                                </p>
                            </button>
                        </div>
                    </div>

                    {/* Status Selection */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                            Account Status
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setStatus('active')}
                                className={`p-4 rounded-xl border-2 transition-all ${status === 'active'
                                    ? 'border-green-500 bg-green-50 shadow-md'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="font-bold text-gray-900">Active</span>
                                    </div>
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${status === 'active'
                                            ? 'border-green-500 bg-green-500'
                                            : 'border-gray-300'
                                            }`}
                                    >
                                        {status === 'active' && (
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 text-left">
                                    User can access the portal and applications
                                </p>
                            </button>

                            <button
                                onClick={() => setStatus('inactive')}
                                className={`p-4 rounded-xl border-2 transition-all ${status === 'inactive'
                                    ? 'border-gray-400 bg-gray-50 shadow-md'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                                        <span className="font-bold text-gray-900">Inactive</span>
                                    </div>
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${status === 'inactive'
                                            ? 'border-gray-400 bg-gray-400'
                                            : 'border-gray-300'
                                            }`}
                                    >
                                        {status === 'inactive' && (
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 text-left">
                                    User account is disabled and cannot access the portal
                                </p>
                            </button>
                        </div>
                    </div>

                    {/* Warning for role changes */}
                    {role !== user.role && (
                        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                            <p className="text-sm text-amber-800">
                                <span className="font-bold">⚠ Warning:</span> Changing the user role will modify their access permissions.
                                {role === 'admin' && ' This user will gain full administrative capabilities.'}
                                {role === 'user' && ' This user will lose administrative capabilities.'}
                            </p>
                        </div>
                    )}

                    {/* Warning for status changes */}
                    {status !== user.status && status === 'inactive' && (
                        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                            <p className="text-sm text-red-800">
                                <span className="font-bold">⚠ Warning:</span> Deactivating this account will immediately revoke all access to the portal and applications.
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex items-center justify-end gap-3 border-t-2 border-gray-200 rounded-b-2xl">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
