import { UCSFBranding } from './UCSFBranding';

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#052049] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* UCSF Logo and Address */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <UCSFBranding variant="footer" />
            </div>
            <address className="not-italic text-[13px] text-blue-100 leading-relaxed">
              University of California,<br />
              San Francisco<br />
              505 Parnassus Ave<br />
              San Francisco, CA 94143<br />
              <a href="tel:+14154762345" className="hover:text-white transition-colors mt-2 inline-block">(415) 476-2345</a>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[15px] mb-4 tracking-tight">Quick Links</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Employee Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  IT Service Desk
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  UC Learning Center
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Campus Directory
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  UCSF Health
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Security */}
          <div>
            <h3 className="font-bold text-[15px] mb-4 tracking-tight">Support & Security</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Security Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Report Phishing
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="font-bold text-[15px] mb-4 tracking-tight">Legal & Policies</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Data Usage Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-blue-200">
            © {new Date().getFullYear()} The Regents of the University of California. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px]">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Feedback
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
