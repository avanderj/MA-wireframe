import { Sparkles, ExternalLink } from 'lucide-react';

interface VersaEmbedProps {
  hasAccess: boolean;
}

export function VersaEmbed({ hasAccess }: VersaEmbedProps) {
  if (hasAccess) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl">UCSF Versa</h3>
              <p className="text-white/80 text-sm">AI-Powered Assistant</p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden" style={{ height: '500px' }}>
            <iframe
              src="https://ai.ucsf.edu/versa-embed"
              className="w-full h-full border-0"
              title="UCSF Versa AI Assistant"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Ask Versa questions about UCSF resources, policies, and services
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-xl">UCSF Versa</h3>
            <p className="text-white/80 text-sm">AI-Powered Assistant</p>
          </div>
        </div>
      </div>
      
      <div className="p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-gray-400" />
          </div>
          
          <h4 className="font-bold text-xl mb-3 text-gray-900">
            Get Access to UCSF Versa
          </h4>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            UCSF Versa is an AI-powered assistant designed to help you find information about UCSF resources, policies, and services. Complete the steps below to gain access.
          </p>
          
          <div className="bg-[#052049]/5 rounded-xl p-6 mb-6 text-left">
            <h5 className="font-semibold text-sm mb-3 text-gray-900">Access Requirements:</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#18A1CD] rounded-full mt-1.5 flex-shrink-0"></span>
                <span>Active UCSF employee or affiliate status</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#18A1CD] rounded-full mt-1.5 flex-shrink-0"></span>
                <span>Complete AI tools training module</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#18A1CD] rounded-full mt-1.5 flex-shrink-0"></span>
                <span>Accept UCSF AI usage policy</span>
              </li>
            </ul>
          </div>
          
          <a
            href="https://ai.ucsf.edu/platforms-tools-and-resources/ucsf-versa?check_logged_in=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#18A1CD] text-white font-semibold rounded-xl hover:bg-[#052049] transition-colors duration-200"
          >
            Request Versa Access
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}