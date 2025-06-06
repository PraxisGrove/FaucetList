import React from 'react';
import { ExternalLink, Shield, AlertCircle, Clock, Network, Coins, Key, Star } from 'lucide-react';
import { Faucet } from '../types/faucet';

interface FaucetCardProps {
  faucet: Faucet;
  translations: any;
}

export default function FaucetCard({ faucet, translations }: FaucetCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-[520px] flex flex-col">
      {/* Header - Fixed Height */}
      <div className="relative p-6 pb-4 flex-shrink-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 truncate">
              {faucet.name}
            </h3>
            {faucet.description && (
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {faucet.description}
              </p>
            )}
          </div>
          <div className={`p-2 rounded-lg flex-shrink-0 ml-3 ${faucet.requiresMainnetFunds ? 'bg-yellow-100' : 'bg-green-100'}`}>
            {faucet.requiresMainnetFunds ? (
              <AlertCircle className="h-5 w-5 text-yellow-600" />
            ) : (
              <Shield className="h-5 w-5 text-green-600" />
            )}
          </div>
        </div>

        {/* Mainnet Requirement Badge */}
        <div className="mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            faucet.requiresMainnetFunds 
              ? 'bg-yellow-100 text-yellow-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {faucet.requiresMainnetFunds 
              ? translations.faucetCard.mainnetRequired 
              : translations.faucetCard.noMainnetRequired
            }
          </span>
        </div>
      </div>

      {/* Content - Flexible Height */}
      <div className="px-6 pb-4 flex-1 space-y-4 overflow-hidden">
        {/* Networks */}
        <div className="h-[72px]">
          <div className="flex items-center space-x-2 mb-2">
            <Network className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-sm font-semibold text-gray-700">{translations.faucetCard.networks}</span>
          </div>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
            <div className="flex space-x-2 pb-2 min-w-max">
              {faucet.supportedNetworks.map((network, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium whitespace-nowrap flex-shrink-0"
                >
                  {network}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tokens */}
        <div className="h-[72px]">
          <div className="flex items-center space-x-2 mb-2">
            <Coins className="h-4 w-4 text-green-600 flex-shrink-0" />
            <span className="text-sm font-semibold text-gray-700">{translations.faucetCard.tokens}</span>
          </div>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
            <div className="flex space-x-2 pb-2 min-w-max">
              {faucet.supportedTokens.map((token, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs rounded-md font-medium whitespace-nowrap flex-shrink-0"
                >
                  {token}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Authentication */}
        <div className="h-[72px]">
          <div className="flex items-center space-x-2 mb-2">
            <Key className="h-4 w-4 text-purple-600 flex-shrink-0" />
            <span className="text-sm font-semibold text-gray-700">{translations.faucetCard.auth}</span>
          </div>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
            <div className="flex space-x-2 pb-2 min-w-max">
              {faucet.authMethods.map((method, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md font-medium whitespace-nowrap flex-shrink-0"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="h-[72px]">
          <div className="flex items-center space-x-2 mb-2">
            <Star className="h-4 w-4 text-orange-600 flex-shrink-0" />
            <span className="text-sm font-semibold text-gray-700">{translations.faucetCard.features}</span>
          </div>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
            <div className="flex space-x-2 pb-2 min-w-max">
              {faucet.features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-md font-medium whitespace-nowrap flex-shrink-0"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Fixed Height */}
      <div className="px-6 pb-6 flex-shrink-0 mt-auto">
        {/* Last Updated */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 pb-4 border-t border-gray-100 pt-4 mb-4">
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span className="truncate">{translations.faucetCard.lastUpdated}: {formatDate(faucet.lastUpdated)}</span>
        </div>

        {/* Action Button */}
        <a
          href={faucet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 group"
        >
          <span>{translations.faucetCard.visitFaucet}</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
        </a>
      </div>
    </div>
  );
}