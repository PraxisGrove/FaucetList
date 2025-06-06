import React from 'react';
import { MessageCircle, BookOpen, HelpCircle, Github, Twitter, Send } from 'lucide-react';

interface FooterProps {
  translations: any;
}

export default function Footer({ translations }: FooterProps) {
  const handleFeedback = () => {
    window.open('mailto:feedback@praxisgrove.com?subject=Praxis Grove Feedback', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>{translations.footer.community}</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discord.gg/praxisgrove"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Discord</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/praxisgrove"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://reddit.com/r/praxisgrove"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Reddit</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>{translations.footer.documentation}</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/getting-started"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="/faucet-guide"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Faucet Guide
                </a>
              </li>
              <li>
                <a
                  href="/api-docs"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <HelpCircle className="h-5 w-5" />
              <span>{translations.footer.support}</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={handleFeedback}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{translations.footer.feedback}</span>
                </button>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <span>{translations.footer.social}</span>
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/praxisgrove"
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/praxisgrove"
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linktr.ee/praxisgrove"
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Praxis Grove. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Built with ❤️ for the blockchain community
          </p>
        </div>
      </div>
    </footer>
  );
}