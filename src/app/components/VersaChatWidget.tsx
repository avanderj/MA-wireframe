import { MessageSquare, X, Send, Minimize2, Maximize2, ExternalLink, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import versaLogo from '../../assets/c4a9ef1e637d7e03c04f7b5e353e65a0f6d9f4d7.png';

interface VersaChatWidgetProps {
  hasAccess: boolean;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'versa';
  timestamp: Date;
}

export function VersaChatWidget({ hasAccess }: VersaChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Versa, your AI assistant for UCSF Connect. I can help you find applications, answer questions about UCSF resources, and guide you through common tasks. How can I assist you today?",
      sender: 'versa',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I can help you with that. Let me search our application directory for you.",
        "Based on your request, I recommend checking out the following applications in the App Library.",
        "Great question! Here's what I found in UCSF resources...",
        "I understand you're looking for information about that. Would you like me to search across all UCSF resources?",
        "That's a common task. I can guide you through the process step by step."
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'versa',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // No Access View - Documentation Link
  if (!hasAccess) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://ucsf.edu/versa-ai-assistant-docs"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-5 bg-white text-gray-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-gray-200"
        >
          <div className="relative w-10 h-10 flex-shrink-0">
            <img src={versaLogo} alt="Versa AI" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <div className="font-bold tracking-tight text-[#052049]">Versa AI Assistant</div>
            <div className="text-sm text-gray-600 mt-0.5">Learn more & request access</div>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#18A1CD] transition-colors" />
        </a>
      </div>
    );
  }

  // Has Access View - Chat Interface
  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div 
          className={`fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 z-40 flex flex-col ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7 flex-shrink-0">
                <img src={versaLogo} alt="Versa AI" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-tight">Versa AI Assistant</h3>
                {!isMinimized && <p className="text-xs text-white/80 mt-0.5">Online • Ready to help</p>}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50/50 to-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white'
                          : 'bg-white border-2 border-gray-200 text-gray-900'
                      }`}
                    >
                      {message.sender === 'versa' && (
                        <div className="flex items-center gap-2 mb-2">
                          <img src={versaLogo} alt="Versa" className="w-4 h-4 object-contain" />
                          <span className="text-xs font-semibold text-[#052049]">Versa</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' ? 'text-white/60' : 'text-gray-400'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Prompts (show only at start) */}
              {messages.length <= 1 && (
                <div className="px-5 pb-3 space-y-2 flex-shrink-0 border-t border-gray-100 pt-3">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Suggested prompts:</p>
                  <button
                    onClick={() => setInputValue("How do I request access to an application?")}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-xs text-gray-700 transition-colors border border-gray-200"
                  >
                    How do I request access to an application?
                  </button>
                  <button
                    onClick={() => setInputValue("Show me research tools")}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-xs text-gray-700 transition-colors border border-gray-200"
                  >
                    Show me research tools
                  </button>
                </div>
              )}

              {/* Input */}
              <div className="border-t-2 border-gray-100 p-4 bg-white flex-shrink-0">
                <div className="flex items-end gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#18A1CD]/30 focus:border-[#18A1CD] text-sm transition-all"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="p-3 bg-gradient-to-r from-[#052049] to-[#18A1CD] text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  AI responses may vary. Always verify critical information.
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group fixed bottom-6 right-6 w-16 h-16 bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-40 border-2 border-gray-200"
          aria-label="Open Versa AI Assistant"
        >
          <img src={versaLogo} alt="Versa AI" className="w-10 h-10 object-contain" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with Versa AI
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}
    </>
  );
}