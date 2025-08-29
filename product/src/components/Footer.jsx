import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">SmartResume</h2>
          <p className="text-sm mb-4">
            The enterprise AI platform trusted by Fortune 500 companies to
            transform talent acquisition at scale. Secure, compliant,
            enterprise-ready.
          </p>
          <p className="text-sm">📧 enterprise@smartresume.ai</p>
          <p className="text-sm">📞 +1 (800) SMART-HR</p>
          <p className="text-sm">Global Headquarters: San Francisco, CA</p>

          {/* Social Icons */}
          <div className="flex justify-start sm:justify-start lg:justify-start gap-3 mt-4">
            <a href="#" className="p-2 bg-slate-800 rounded hover:bg-slate-700">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded hover:bg-slate-700">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded hover:bg-slate-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Enterprise Platform</a></li>
            <li><a href="#">AI Engine</a></li>
            <li><a href="#">Analytics Suite</a></li>
            <li><a href="#">API & Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About SmartResume</a></li>
            <li><a href="#">Leadership Team</a></li>
            <li><a href="#">Press & Media</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Enterprise Guides</a></li>
            <li><a href="#">Customer Success</a></li>
            <li><a href="#">Compliance</a></li>
            <li><a href="#">ROI Calculator</a></li>
          </ul>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-slate-800 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            Get the latest insights on AI recruitment and hiring best practices.
          </p>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded bg-slate-900 text-gray-200 border border-slate-700 focus:outline-none"
            />
            <button className="bg-white text-slate-900 px-4 py-2 rounded font-medium hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs sm:text-sm text-gray-400 py-4 border-t border-slate-700">
        © 2024 SmartResume. All rights reserved.
      </div>
    </footer>
  );
}
