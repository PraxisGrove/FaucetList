import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { FilterState } from '../types/faucet';

interface SearchFiltersProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
  translations: any;
  networks: string[];
  tokens: string[];
  authMethods: string[];
  features: string[];
}

export default function SearchFilters({
  filters,
  onFilterChange,
  onClearFilters,
  translations,
  networks,
  tokens,
  authMethods,
  features
}: SearchFiltersProps) {
  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder={translations.searchPlaceholder}
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
        />
      </div>

      {/* Filter Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Filters</span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700 transition-colors duration-200"
            >
              <X className="h-4 w-4" />
              <span>Clear All</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* Network Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {translations.filters.network}
            </label>
            <select
              value={filters.network}
              onChange={(e) => onFilterChange('network', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
            >
              <option value="">{translations.filters.all}</option>
              {networks.map(network => (
                <option key={network} value={network}>{network}</option>
              ))}
            </select>
          </div>

          {/* Token Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {translations.filters.token}
            </label>
            <select
              value={filters.token}
              onChange={(e) => onFilterChange('token', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
            >
              <option value="">{translations.filters.all}</option>
              {tokens.map(token => (
                <option key={token} value={token}>{token}</option>
              ))}
            </select>
          </div>

          {/* Auth Method Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {translations.filters.authMethod}
            </label>
            <select
              value={filters.authMethod}
              onChange={(e) => onFilterChange('authMethod', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
            >
              <option value="">{translations.filters.all}</option>
              {authMethods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>

          {/* Mainnet Requirement Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {translations.filters.mainnet}
            </label>
            <select
              value={filters.requiresMainnet}
              onChange={(e) => onFilterChange('requiresMainnet', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
            >
              <option value="">{translations.filters.all}</option>
              <option value="true">{translations.filters.yes}</option>
              <option value="false">{translations.filters.no}</option>
            </select>
          </div>

          {/* Feature Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {translations.filters.feature}
            </label>
            <select
              value={filters.feature}
              onChange={(e) => onFilterChange('feature', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
            >
              <option value="">{translations.filters.all}</option>
              {features.map(feature => (
                <option key={feature} value={feature}>{feature}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}