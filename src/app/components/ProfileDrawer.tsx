import { X, User, Mail, Key, Hash, Briefcase, MapPin, Phone, Settings, Shield, ChevronRight, Sparkles, Lock, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import duoLogo from 'figma:asset/ce48dacfb2d4957ea230cdc9dc45d09f954c80e9.png';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  hasVersaAccess?: boolean;
  onToggleVersaAccess?: () => void;
  isAdmin?: boolean;
  onAdminLogin?: () => void;
}

export function ProfileDrawer({ isOpen, onClose, hasVersaAccess = false, onToggleVersaAccess, isAdmin = false, onAdminLogin }: ProfileDrawerProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [idTab, setIdTab] = useState<'campus' | 'health'>('campus');

  // Scroll to top when drawer opens
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-drawer-title"
        className={`fixed right-0 top-0 h-full w-full sm:max-w-2xl bg-gradient-to-br from-white to-gray-50 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] text-black p-4 sm:p-8">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 p-2 hover:bg-white/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#052049]"
              aria-label="Close profile drawer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-2xl font-bold text-3xl sm:text-4xl" aria-hidden="true">
                CG
              </div>
              <div className="flex-1 pt-2">
                <h2 id="profile-drawer-title" className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">Chris Garcia</h2>
                <p className="text-black text-base sm:text-lg mb-1">IT Department</p>
                <p className="text-black text-sm">Senior Systems Administrator</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8" ref={contentRef}>
            <div className="space-y-8">
              {/* Employee Information */}
              <div>
                <h3 className="text-xl font-semibold mb-5 text-[#052049] flex items-center gap-2">
                  <User className="w-5 h-5" />
                  My ID
                </h3>

                {/* Campus Content - No tabs here anymore */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <div className="font-semibold text-gray-900">chris.garcia@ucsf.edu</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">UCSF ID</div>
                      <div className="font-semibold text-gray-900">018473625</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">UCPath ID</div>
                      <div className="font-semibold text-gray-900">10847392</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Primary Department</div>
                      <div className="font-semibold text-gray-900">Information Technology Services (502341)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Primary Title</div>
                      <div className="font-semibold text-gray-900">SENIOR SYSTEMS ADMINISTRATOR</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Primary UCSF Affiliation</div>
                      <div className="font-semibold text-gray-900">staff</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">MyAccess SFID</div>
                      <div className="font-semibold text-gray-900">SF847392</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Edu Person Principal Name (ePPN)</div>
                      <div className="font-semibold text-gray-900">847392@ucsf.edu</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div>
                <h3 className="text-xl font-semibold mb-5 text-[#052049] flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Account Details
                </h3>

                {/* Tabs moved here */}
                <div className="flex gap-8 mb-6 border-b-2 border-gray-200">
                  <button
                    onClick={() => setIdTab('campus')}
                    className={`pb-3 px-1 font-semibold transition-all relative ${idTab === 'campus'
                        ? 'text-[#18A1CD]'
                        : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    Campus
                    {idTab === 'campus' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#052049] to-[#18A1CD]"></div>
                    )}
                  </button>
                  <button
                    onClick={() => setIdTab('health')}
                    className={`pb-3 px-1 font-semibold transition-all relative ${idTab === 'health'
                        ? 'text-[#18A1CD]'
                        : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    Health
                    {idTab === 'health' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#052049] to-[#18A1CD]"></div>
                    )}
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Campus Tab Content for Account Details */}
                  {idTab === 'campus' && (
                    <>
                      {/* Username, Domain, Duo, and Mail Info */}
                      <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-5 border border-blue-100 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="text-xs text-gray-500">Username</div>
                            <div className="text-sm font-semibold text-gray-900">cgarcia</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="text-xs text-gray-500">Domain</div>
                            <div className="text-sm font-semibold text-gray-900">campus.net.ucsf.edu</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="text-xs text-gray-500">Duo Enrollment</div>
                            <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                              Yes
                              <span className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                            </div>
                            <a
                              href="https://it.ucsf.edu/service/two-factor-authentication"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#18A1CD] hover:text-[#052049] flex items-center gap-1 mt-1 transition-colors"
                            >
                              Get help with two factor authentication
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="text-xs text-gray-500">Mail Enabled?</div>
                            <div className="text-sm font-semibold text-gray-900">Yes</div>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-white rounded-xl p-5 border-2 border-red-200/60 bg-gradient-to-br from-red-50/30 to-orange-50/30 text-left group" aria-label="Update password - Overdue">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm" aria-hidden="true">
                                <Key className="w-6 h-6 text-red-600 transition-colors" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <div className="font-bold text-red-900">Update Password</div>
                                  <span className="px-2 py-0.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold rounded-full shadow-sm">
                                    Overdue
                                  </span>
                                </div>
                                <div className="text-sm text-gray-700">Your password has expired and needs to be updated</div>
                              </div>
                            </div>
                            <ExternalLink className="w-5 h-5 text-red-600 transition-colors" aria-hidden="true" />
                          </div>

                          <div className="pt-3 border-t border-red-200/40">
                            <div className="flex items-center gap-3">
                              <div className="flex-1">
                                <div className="text-xs text-gray-500">Last Password Change</div>
                                <div className="text-sm font-semibold text-gray-900">October 15, 2024 08:23:14 AM</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              <div className="text-xs text-gray-500">Password Policy</div>
                              <div className="text-sm font-semibold text-gray-900 italic">No password policy.</div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </>
                  )}

                  {/* Health Tab Content - Empty for now */}
                  {idTab === 'health' && (
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <p className="text-gray-500 text-center">No health system account details available</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Tools */}
              {(onToggleVersaAccess || onAdminLogin) && (
                <div>
                  <h3 className="text-xl font-semibold mb-5 text-[#052049] flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Demo Tools
                  </h3>
                  <div className="space-y-3">
                    {/* Versa AI Access Toggle */}
                    {onToggleVersaAccess && (
                      <button
                        onClick={onToggleVersaAccess}
                        className={`w-full rounded-xl p-5 border-2 transition-all text-left group focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2 ${hasVersaAccess
                            ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-300'
                            : 'bg-white border-gray-200 hover:border-[#18A1CD] hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50'
                          }`}
                        aria-label={hasVersaAccess ? "Disable Versa AI Assistant" : "Enable Versa AI Assistant"}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${hasVersaAccess
                                ? 'bg-gradient-to-br from-purple-400 to-indigo-500'
                                : 'bg-gradient-to-br from-purple-100 to-indigo-100 group-hover:from-[#052049] group-hover:to-[#18A1CD]'
                              }`} aria-hidden="true">
                              <Sparkles className={`w-6 h-6 transition-colors ${hasVersaAccess ? 'text-white' : 'text-purple-600 group-hover:text-white'
                                }`} strokeWidth={2.5} />
                            </div>
                            <div>
                              <div className="font-bold text-[#052049] flex items-center gap-2">
                                Versa AI Assistant
                                {hasVersaAccess && (
                                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">Active</span>
                                )}
                              </div>
                              <div className="text-sm text-gray-600">
                                {hasVersaAccess ? 'AI chat assistant enabled' : 'Enable AI-powered help'}
                              </div>
                            </div>
                          </div>
                          <div className={`w-12 h-6 rounded-full transition-all flex items-center ${hasVersaAccess ? 'bg-gradient-to-r from-[#052049] to-[#18A1CD]' : 'bg-gray-300'
                            }`}>
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${hasVersaAccess ? 'translate-x-6' : 'translate-x-1'
                              }`}></div>
                          </div>
                        </div>
                      </button>
                    )}

                    {/* Admin Login Button */}
                    {onAdminLogin && (
                      <button
                        onClick={onAdminLogin}
                        className={`w-full rounded-xl p-5 border-2 transition-all text-left group focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2 ${isAdmin
                            ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-300'
                            : 'bg-white border-gray-200 hover:border-[#18A1CD] hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50'
                          }`}
                        aria-label={isAdmin ? "Disable Admin Dashboard" : "Enable Admin Dashboard"}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isAdmin
                                ? 'bg-gradient-to-br from-purple-400 to-indigo-500'
                                : 'bg-gradient-to-br from-purple-100 to-indigo-100 group-hover:from-[#052049] group-hover:to-[#18A1CD]'
                              }`} aria-hidden="true">
                              <Lock className={`w-6 h-6 transition-colors ${isAdmin ? 'text-white' : 'text-purple-600 group-hover:text-white'
                                }`} strokeWidth={2.5} />
                            </div>
                            <div>
                              <div className="font-bold text-[#052049] flex items-center gap-2">
                                Admin Dashboard
                                {isAdmin && (
                                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">Active</span>
                                )}
                              </div>
                              <div className="text-sm text-gray-600">
                                {isAdmin ? 'Admin access enabled' : 'Enable admin access'}
                              </div>
                            </div>
                          </div>
                          <div className={`w-12 h-6 rounded-full transition-all flex items-center ${isAdmin ? 'bg-gradient-to-r from-[#052049] to-[#18A1CD]' : 'bg-gray-300'
                            }`}>
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${isAdmin ? 'translate-x-6' : 'translate-x-1'
                              }`}></div>
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t bg-white p-6">
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-4 border-2 border-gray-300 hover:bg-gray-50 rounded-xl transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-[#18A1CD] focus:ring-offset-2"
              >
                Close
              </button>
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-xl transition-all shadow-lg font-semibold focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2" aria-label="Sign out of UCSF Connect">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}