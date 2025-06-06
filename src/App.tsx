import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import FaucetCard from './components/FaucetCard';
import Footer from './components/Footer';
import { faucets, translations } from './data/faucets';
import { Language, FilterState } from './types/faucet';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  });

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    network: '',
    token: '',
    authMethod: '',
    requiresMainnet: '',
    feature: ''
  });

  // Get current translations
  const t = translations[currentLanguage.code];

  // Extract unique values for filter options
  const filterOptions = useMemo(() => {
    const networks = [...new Set(faucets.flatMap(f => f.supportedNetworks))].sort();
    const tokens = [...new Set(faucets.flatMap(f => f.supportedTokens))].sort();
    const authMethods = [...new Set(faucets.flatMap(f => f.authMethods))].sort();
    const features = [...new Set(faucets.flatMap(f => f.features))].sort();

    return { networks, tokens, authMethods, features };
  }, []);

  // Filter faucets based on current filters
  const filteredFaucets = useMemo(() => {
    return faucets.filter(faucet => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch = 
          faucet.name.toLowerCase().includes(searchTerm) ||
          faucet.description?.toLowerCase().includes(searchTerm) ||
          faucet.supportedNetworks.some(network => network.toLowerCase().includes(searchTerm)) ||
          faucet.supportedTokens.some(token => token.toLowerCase().includes(searchTerm));
        
        if (!matchesSearch) return false;
      }

      // Network filter
      if (filters.network && !faucet.supportedNetworks.includes(filters.network)) {
        return false;
      }

      // Token filter
      if (filters.token && !faucet.supportedTokens.includes(filters.token)) {
        return false;
      }

      // Auth method filter
      if (filters.authMethod && !faucet.authMethods.includes(filters.authMethod)) {
        return false;
      }

      // Mainnet requirement filter
      if (filters.requiresMainnet) {
        const requiresMainnet = filters.requiresMainnet === 'true';
        if (faucet.requiresMainnetFunds !== requiresMainnet) {
          return false;
        }
      }

      // Feature filter
      if (filters.feature && !faucet.features.includes(filters.feature)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      network: '',
      token: '',
      authMethod: '',
      requiresMainnet: '',
      feature: ''
    });
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        translations={t}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          translations={t}
          networks={filterOptions.networks}
          tokens={filterOptions.tokens}
          authMethods={filterOptions.authMethods}
          features={filterOptions.features}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredFaucets.length} of {faucets.length} faucets
          </p>
        </div>

        {/* Faucet Grid */}
        {filteredFaucets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {filteredFaucets.map(faucet => (
              <FaucetCard
                key={faucet.id}
                faucet={faucet}
                translations={t}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No faucets found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or clearing filters to see more results.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </main>

      <Footer translations={t} />
    </div>
  );
}

export default App;