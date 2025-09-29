import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Search, Star, ExternalLink, ChevronUp, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_1h_in_currency: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
  sparkline_in_7d?: {
    price: number[];
  };
}

const getCryptoDescriptions = (id: string): { description: string; technology: string; useCase: string } => {
  const descriptions: Record<string, { description: string; technology: string; useCase: string }> = {
    bitcoin: {
      description: "The first and most valuable cryptocurrency, Bitcoin is digital gold and a store of value.",
      technology: "Proof of Work blockchain with SHA-256 hashing",
      useCase: "Digital store of value, peer-to-peer payments, hedge against inflation"
    },
    ethereum: {
      description: "The world's programmable blockchain enabling smart contracts and decentralized applications.",
      technology: "Proof of Stake blockchain with Ethereum Virtual Machine (EVM)",
      useCase: "Smart contracts, DeFi, NFTs, dApps, programmable money"
    },
    solana: {
      description: "High-performance blockchain supporting thousands of transactions per second.",
      technology: "Proof of History consensus with Proof of Stake",
      useCase: "Fast payments, DeFi, NFTs, Web3 applications"
    },
    cardano: {
      description: "A proof-of-stake blockchain platform focused on sustainability and peer-reviewed research.",
      technology: "Ouroboros Proof of Stake consensus mechanism",
      useCase: "Smart contracts, DeFi, identity management, supply chain"
    },
    avalanche: {
      description: "A layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks.",
      technology: "Avalanche consensus protocol with subnet architecture",
      useCase: "DeFi, enterprise applications, custom blockchains"
    },
    chainlink: {
      description: "Decentralized oracle network connecting smart contracts to real-world data.",
      technology: "Oracle network with multiple data sources and aggregation",
      useCase: "Price feeds, external data, cross-chain interoperability"
    },
    polygon: {
      description: "Layer 2 scaling solution for Ethereum with fast and cheap transactions.",
      technology: "Plasma and PoS based sidechain solution",
      useCase: "Ethereum scaling, DeFi, gaming, NFT marketplaces"
    },
    polkadot: {
      description: "A multi-chain blockchain platform that enables different blockchains to transfer messages and value.",
      technology: "Nominated Proof of Stake with parachain architecture",
      useCase: "Cross-chain interoperability, custom blockchains, DeFi"
    }
  };

  return descriptions[id] || {
    description: "A cryptocurrency with innovative blockchain technology and diverse use cases.",
    technology: "Advanced blockchain consensus mechanism",
    useCase: "Various blockchain applications and financial services"
  };
};

const CryptoGrid = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof CryptoData; direction: 'asc' | 'desc' }>({
    key: 'market_cap_rank',
    direction: 'asc'
  });
  const [watchlist, setWatchlist] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const fetchCryptoData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch crypto data');
      }
      
      const data = await response.json();
      setCryptoData(data);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      toast({
        title: "Error loading crypto data",
        description: "Using fallback data. Please check your internet connection.",
        variant: "destructive",
      });
      
      // Fallback data in case API fails
      setCryptoData([
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "btc",
          image: "",
          current_price: 43250,
          market_cap: 847200000000,
          market_cap_rank: 1,
          fully_diluted_valuation: 847200000000,
          total_volume: 15200000000,
          high_24h: 44000,
          low_24h: 42500,
          price_change_24h: 1045.5,
          price_change_percentage_24h: 2.45,
          price_change_percentage_7d_in_currency: 5.2,
          price_change_percentage_1h_in_currency: 0.5,
          market_cap_change_24h: 20000000000,
          market_cap_change_percentage_24h: 2.4,
          circulating_supply: 19600000,
          total_supply: 21000000,
          max_supply: 21000000,
          ath: 69000,
          ath_change_percentage: -37.3,
          ath_date: "2021-11-10T14:24:11.849Z",
          atl: 67.81,
          atl_change_percentage: 63600.0,
          atl_date: "2013-07-06T00:00:00.000Z",
          last_updated: new Date().toISOString(),
        } as CryptoData
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const handleSort = (key: keyof CryptoData) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleWatchlist = (id: string) => {
    const newWatchlist = new Set(watchlist);
    if (newWatchlist.has(id)) {
      newWatchlist.delete(id);
    } else {
      newWatchlist.add(id);
    }
    setWatchlist(newWatchlist);
  };

  const filteredAndSortedData = cryptoData
    .filter(crypto => 
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;
      
      if (sortConfig.direction === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const formatNumber = (num: number | null, prefix = "", suffix = "") => {
    if (num === null || num === undefined) return "N/A";
    
    if (num >= 1e12) return `${prefix}${(num / 1e12).toFixed(2)}T${suffix}`;
    if (num >= 1e9) return `${prefix}${(num / 1e9).toFixed(2)}B${suffix}`;
    if (num >= 1e6) return `${prefix}${(num / 1e6).toFixed(2)}M${suffix}`;
    if (num >= 1e3) return `${prefix}${(num / 1e3).toFixed(2)}K${suffix}`;
    return `${prefix}${num.toFixed(2)}${suffix}`;
  };

  const formatPrice = (price: number) => {
    if (price >= 1) return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return `$${price.toFixed(6)}`;
  };

  const getPriceChangeColor = (change: number) => {
    if (change > 0) return "text-web3-green";
    if (change < 0) return "text-red-500";
    return "text-muted-foreground";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Live Crypto Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time cryptocurrency prices powered by CoinGecko API
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search cryptocurrencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 backdrop-blur-md border-border/50 focus:border-web3-purple"
            />
          </div>
          <Button
            onClick={fetchCryptoData}
            disabled={loading}
            variant="outline"
            className="border-web3-purple text-web3-purple hover:bg-web3-purple hover:text-white"
          >
            {loading ? "Refreshing..." : "Refresh Data"}
          </Button>
        </motion.div>

        {/* Market Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-web3-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading market data...</p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border/50">
                  <tr className="text-left">
                    <th className="p-4 font-semibold text-muted-foreground">
                      <button
                        onClick={() => handleSort('market_cap_rank')}
                        className="flex items-center space-x-1 hover:text-web3-purple transition-colors"
                      >
                        <span>#</span>
                        {sortConfig.key === 'market_cap_rank' && (
                          sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </th>
                    <th className="p-4 font-semibold text-muted-foreground">Coin</th>
                    <th className="p-4 font-semibold text-muted-foreground">
                      <button
                        onClick={() => handleSort('current_price')}
                        className="flex items-center space-x-1 hover:text-web3-purple transition-colors"
                      >
                        <span>Price</span>
                        {sortConfig.key === 'current_price' && (
                          sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </th>
                    <th className="p-4 font-semibold text-muted-foreground">1h%</th>
                    <th className="p-4 font-semibold text-muted-foreground">24h%</th>
                    <th className="p-4 font-semibold text-muted-foreground">7d%</th>
                    <th className="p-4 font-semibold text-muted-foreground">
                      <button
                        onClick={() => handleSort('market_cap')}
                        className="flex items-center space-x-1 hover:text-web3-purple transition-colors"
                      >
                        <span>Market Cap</span>
                        {sortConfig.key === 'market_cap' && (
                          sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </th>
                    <th className="p-4 font-semibold text-muted-foreground">Volume(24h)</th>
                    <th className="p-4 font-semibold text-muted-foreground">Circulating Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedData.slice(0, 50).map((crypto, index) => (
                    <motion.tr
                      key={crypto.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      viewport={{ once: true }}
                      className="border-b border-border/30 hover:bg-secondary/30 transition-colors cursor-pointer"
                      onClick={() => setSelectedCrypto(crypto)}
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWatchlist(crypto.id);
                            }}
                            className={`${watchlist.has(crypto.id) ? 'text-yellow-400' : 'text-muted-foreground hover:text-yellow-400'} transition-colors`}
                          >
                            <Star className="w-4 h-4" fill={watchlist.has(crypto.id) ? "currentColor" : "none"} />
                          </button>
                          <span className="font-medium">{crypto.market_cap_rank}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          {crypto.image ? (
                            <img src={crypto.image} alt={crypto.name} className="w-8 h-8 rounded-full" />
                          ) : (
                            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {crypto.symbol.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <div className="font-semibold hover:text-web3-purple transition-colors">
                              {crypto.name}
                            </div>
                            <div className="text-sm text-muted-foreground uppercase">
                              {crypto.symbol}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-semibold">
                        {formatPrice(crypto.current_price)}
                      </td>
                      <td className={`p-4 font-medium ${getPriceChangeColor(crypto.price_change_percentage_1h_in_currency || 0)}`}>
                        {crypto.price_change_percentage_1h_in_currency ? 
                          `${crypto.price_change_percentage_1h_in_currency > 0 ? '+' : ''}${crypto.price_change_percentage_1h_in_currency.toFixed(2)}%` 
                          : 'N/A'
                        }
                      </td>
                      <td className={`p-4 font-medium ${getPriceChangeColor(crypto.price_change_percentage_24h)}`}>
                        <div className="flex items-center space-x-1">
                          {crypto.price_change_percentage_24h > 0 ? 
                            <TrendingUp className="w-4 h-4" /> : 
                            <TrendingDown className="w-4 h-4" />
                          }
                          <span>
                            {crypto.price_change_percentage_24h > 0 ? '+' : ''}{crypto.price_change_percentage_24h.toFixed(2)}%
                          </span>
                        </div>
                      </td>
                      <td className={`p-4 font-medium ${getPriceChangeColor(crypto.price_change_percentage_7d_in_currency || 0)}`}>
                        {crypto.price_change_percentage_7d_in_currency ? 
                          `${crypto.price_change_percentage_7d_in_currency > 0 ? '+' : ''}${crypto.price_change_percentage_7d_in_currency.toFixed(2)}%` 
                          : 'N/A'
                        }
                      </td>
                      <td className="p-4 font-medium">
                        {formatNumber(crypto.market_cap, "$")}
                      </td>
                      <td className="p-4 font-medium">
                        {formatNumber(crypto.total_volume, "$")}
                      </td>
                      <td className="p-4 font-medium">
                        <div>
                          {formatNumber(crypto.circulating_supply)} {crypto.symbol.toUpperCase()}
                          {crypto.max_supply && (
                            <div className="text-xs text-muted-foreground">
                              Max: {formatNumber(crypto.max_supply)}
                            </div>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Crypto Detail Modal */}
        <Dialog open={!!selectedCrypto} onOpenChange={() => setSelectedCrypto(null)}>
          <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-md border-border/50 max-h-[90vh] overflow-y-auto">
            {selectedCrypto && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {selectedCrypto.image ? (
                        <img src={selectedCrypto.image} alt={selectedCrypto.name} className="w-12 h-12 rounded-full" />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          {selectedCrypto.symbol.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold">{selectedCrypto.name}</span>
                          <span className="text-muted-foreground text-lg">({selectedCrypto.symbol.toUpperCase()})</span>
                          <span className="bg-web3-purple/20 text-web3-purple px-2 py-1 rounded text-sm">
                            Rank #{selectedCrypto.market_cap_rank}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWatchlist(selectedCrypto.id);
                      }}
                      className={`${watchlist.has(selectedCrypto.id) ? 'text-yellow-400' : 'text-muted-foreground hover:text-yellow-400'} transition-colors`}
                    >
                      <Star className="w-6 h-6" fill={watchlist.has(selectedCrypto.id) ? "currentColor" : "none"} />
                    </button>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Price Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="text-muted-foreground text-sm">Current Price</div>
                      <div className="text-2xl font-bold">{formatPrice(selectedCrypto.current_price)}</div>
                      <div className={`text-sm flex items-center space-x-1 mt-1 ${getPriceChangeColor(selectedCrypto.price_change_percentage_24h)}`}>
                        {selectedCrypto.price_change_percentage_24h > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        <span>{selectedCrypto.price_change_percentage_24h > 0 ? '+' : ''}{selectedCrypto.price_change_percentage_24h.toFixed(2)}% (24h)</span>
                      </div>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="text-muted-foreground text-sm">Market Cap</div>
                      <div className="text-2xl font-bold">{formatNumber(selectedCrypto.market_cap, "$")}</div>
                      <div className={`text-sm mt-1 ${getPriceChangeColor(selectedCrypto.market_cap_change_percentage_24h)}`}>
                        {selectedCrypto.market_cap_change_percentage_24h > 0 ? '+' : ''}{selectedCrypto.market_cap_change_percentage_24h.toFixed(2)}% (24h)
                      </div>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="text-muted-foreground text-sm">24h Volume</div>
                      <div className="text-2xl font-bold">{formatNumber(selectedCrypto.total_volume, "$")}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Vol/MCap: {((selectedCrypto.total_volume / selectedCrypto.market_cap) * 100).toFixed(2)}%
                      </div>
                    </div>
                  </div>

                  {/* Price Changes */}
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-3 text-web3-purple">Price Changes</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-muted-foreground text-sm">1 Hour</div>
                        <div className={`font-bold ${getPriceChangeColor(selectedCrypto.price_change_percentage_1h_in_currency || 0)}`}>
                          {selectedCrypto.price_change_percentage_1h_in_currency ? 
                            `${selectedCrypto.price_change_percentage_1h_in_currency > 0 ? '+' : ''}${selectedCrypto.price_change_percentage_1h_in_currency.toFixed(2)}%` 
                            : 'N/A'
                          }
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground text-sm">24 Hours</div>
                        <div className={`font-bold ${getPriceChangeColor(selectedCrypto.price_change_percentage_24h)}`}>
                          {selectedCrypto.price_change_percentage_24h > 0 ? '+' : ''}{selectedCrypto.price_change_percentage_24h.toFixed(2)}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground text-sm">7 Days</div>
                        <div className={`font-bold ${getPriceChangeColor(selectedCrypto.price_change_percentage_7d_in_currency || 0)}`}>
                          {selectedCrypto.price_change_percentage_7d_in_currency ? 
                            `${selectedCrypto.price_change_percentage_7d_in_currency > 0 ? '+' : ''}${selectedCrypto.price_change_percentage_7d_in_currency.toFixed(2)}%` 
                            : 'N/A'
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Supply Information */}
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-3 text-web3-cyan">Supply Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-muted-foreground text-sm">Circulating Supply</div>
                        <div className="font-bold">{formatNumber(selectedCrypto.circulating_supply)} {selectedCrypto.symbol.toUpperCase()}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-sm">Total Supply</div>
                        <div className="font-bold">
                          {selectedCrypto.total_supply ? formatNumber(selectedCrypto.total_supply) : 'N/A'} {selectedCrypto.symbol.toUpperCase()}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-sm">Max Supply</div>
                        <div className="font-bold">
                          {selectedCrypto.max_supply ? formatNumber(selectedCrypto.max_supply) : '∞'} {selectedCrypto.symbol.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* All-Time High/Low */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-web3-green/10 border border-web3-green/20 rounded-lg p-4">
                      <div className="text-web3-green text-sm font-medium">All-Time High</div>
                      <div className="font-bold text-lg">{formatPrice(selectedCrypto.ath)}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(selectedCrypto.ath_date).toLocaleDateString()}
                      </div>
                      <div className="text-red-500 text-sm">
                        {selectedCrypto.ath_change_percentage.toFixed(1)}% from ATH
                      </div>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <div className="text-red-500 text-sm font-medium">All-Time Low</div>
                      <div className="font-bold text-lg">{formatPrice(selectedCrypto.atl)}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(selectedCrypto.atl_date).toLocaleDateString()}
                      </div>
                      <div className="text-web3-green text-sm">
                        +{selectedCrypto.atl_change_percentage.toFixed(1)}% from ATL
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  {(() => {
                    const { description, technology, useCase } = getCryptoDescriptions(selectedCrypto.id);
                    return (
                      <>
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-web3-purple">Description</h4>
                          <p className="text-muted-foreground leading-relaxed">{description}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-web3-cyan">Technology</h4>
                          <p className="text-muted-foreground leading-relaxed">{technology}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-web3-green">Use Cases</h4>
                          <p className="text-muted-foreground leading-relaxed">{useCase}</p>
                        </div>
                      </>
                    );
                  })()}

                  {/* External Links */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`https://www.coingecko.com/en/coins/${selectedCrypto.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-web3-purple/20 text-web3-purple px-4 py-2 rounded-lg hover:bg-web3-purple/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View on CoinGecko</span>
                      </a>
                      <a
                        href={`https://coinmarketcap.com/currencies/${selectedCrypto.id}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-web3-cyan/20 text-web3-cyan px-4 py-2 rounded-lg hover:bg-web3-cyan/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View on CoinMarketCap</span>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CryptoGrid;