import React from 'react';
import { ExternalLink, Droplets, Globe } from 'lucide-react';
import { Language } from '../types/faucet';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  translations: any;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export default function Header({ currentLanguage, onLanguageChange, translations }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <Droplets className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{translations.title}</h1>
              <p className="text-blue-100 text-sm">Blockchain Faucet Directory</p>
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm"
                onClick={() => {
                  const nextLang = languages.find(lang => lang.code !== currentLanguage.code);
                  if (nextLang) onLanguageChange(nextLang);
                }}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {currentLanguage.flag} {currentLanguage.name}
                </span>
              </button>
            </div>

            {/* Social Link */}
            <a
              href="https://linktr.ee/praxisgrove"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm group"
            >
              <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {translations.subtitle}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover and access the best blockchain faucets across multiple networks. 
            Get testnet tokens for development and testing purposes.
          </p>
        </div>
      </div>
    </header>
  );
}