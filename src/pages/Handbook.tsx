import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Coins, 
  Shield, 
  TrendingUp, 
  Lock,
  ArrowRight,
  ChevronRight,
  Layers,
  Network,
  Zap,
  Globe,
  Users,
  FileText,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const Handbook = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction to DeFi', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'fundamentals', title: 'DeFi Fundamentals', icon: <Layers className="w-5 h-5" /> },
    { id: 'protocols', title: 'Key Protocols', icon: <Network className="w-5 h-5" /> },
    { id: 'lending', title: 'Lending & Borrowing', icon: <Coins className="w-5 h-5" /> },
    { id: 'amm', title: 'Automated Market Makers', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'governance', title: 'Governance', icon: <Users className="w-5 h-5" /> },
    { id: 'security', title: 'Security & Risks', icon: <Shield className="w-5 h-5" /> },
    { id: 'getting-started', title: 'Getting Started', icon: <Zap className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      const currentSection = sectionElements.find(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b border-gray-200">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-300/25 to-blue-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <span className="text-slate-600 text-sm uppercase tracking-wider font-medium">Educational Resource</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  DeFi Handbook
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                Your comprehensive guide to understanding Decentralized Finance
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 animate-staggered-fade-in stagger-3">
                <Badge className="px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Step-by-Step Guide
                </Badge>
                <Badge className="px-4 py-2 bg-indigo-100 text-indigo-700 border-indigo-200">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Best Practices
                </Badge>
                <Badge className="px-4 py-2 bg-purple-100 text-purple-700 border-purple-200">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Real-World Examples
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto flex gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block w-64 shrink-0">
              <Card className="sticky top-24 bg-white/95 backdrop-blur-sm shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-slate-800">Contents</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1 p-4 pt-0">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-medium border-l-4 border-blue-500'
                            : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'
                        }`}
                      >
                        {section.icon}
                        <span className="text-sm">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-12">
              {/* Introduction Section */}
              <section id="introduction" className="scroll-mt-24">
                <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-800">Introduction to DeFi</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">Understanding the basics of Decentralized Finance</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <p className="text-lg leading-relaxed text-slate-700 mb-6">
                      Decentralized Finance (DeFi) represents a paradigm shift in how we think about and interact with financial services. Built on blockchain technology, DeFi eliminates intermediaries and enables peer-to-peer financial transactions through smart contracts.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl my-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">What is DeFi?</h3>
                      <p className="text-slate-700 mb-4">
                        DeFi is an open, permissionless, and transparent financial ecosystem built on public blockchains, primarily Ethereum. It recreates traditional financial services—lending, borrowing, trading, insurance—without centralized authorities.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span className="text-slate-700">No intermediaries or central authorities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span className="text-slate-700">24/7 global accessibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span className="text-slate-700">Transparent and auditable transactions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span className="text-slate-700">Programmable money through smart contracts</span>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Why DeFi Matters</h3>
                    <p className="text-slate-700 mb-4">
                      DeFi democratizes access to financial services, especially for the unbanked and underbanked populations. In India, where millions lack access to traditional banking, DeFi offers an alternative path to financial inclusion.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* DeFi Fundamentals */}
              <section id="fundamentals" className="scroll-mt-24">
                <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <Layers className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-800">DeFi Fundamentals</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">Core concepts and building blocks</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">Smart Contracts</h4>
                        <p className="text-slate-700 text-sm">
                          Self-executing contracts with terms directly written into code. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">Blockchain Technology</h4>
                        <p className="text-slate-700 text-sm">
                          A distributed ledger that records all transactions across a network of computers, ensuring transparency, immutability, and security.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">Decentralization</h4>
                        <p className="text-slate-700 text-sm">
                          Distribution of control across multiple participants rather than a single entity, reducing single points of failure and censorship risks.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl">
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">Composability</h4>
                        <p className="text-slate-700 text-sm">
                          DeFi protocols can be combined like building blocks to create new financial products and services, often called "money legos."
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800 mb-2">Key Terminology</h4>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li><strong>Gas:</strong> Transaction fees paid to execute operations on the blockchain</li>
                            <li><strong>Wallet:</strong> Digital tool for storing and managing cryptocurrencies</li>
                            <li><strong>Private Key:</strong> Secret code that proves ownership of digital assets</li>
                            <li><strong>dApp:</strong> Decentralized application running on blockchain</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Key Protocols */}
              <section id="protocols" className="scroll-mt-24">
                <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center">
                        <Network className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-800">Key DeFi Protocols</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">Major protocols powering the DeFi ecosystem</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-6 py-2">
                        <h4 className="text-lg font-semibold text-slate-800">Uniswap</h4>
                        <p className="text-slate-600 text-sm mt-1">Decentralized exchange protocol for automated token swaps</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-6 py-2">
                        <h4 className="text-lg font-semibold text-slate-800">Aave</h4>
                        <p className="text-slate-600 text-sm mt-1">Open-source liquidity protocol for lending and borrowing</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-6 py-2">
                        <h4 className="text-lg font-semibold text-slate-800">Compound</h4>
                        <p className="text-slate-600 text-sm mt-1">Algorithmic money market protocol for earning interest</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-6 py-2">
                        <h4 className="text-lg font-semibold text-slate-800">MakerDAO</h4>
                        <p className="text-slate-600 text-sm mt-1">Decentralized credit platform supporting DAI stablecoin</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Lending & Borrowing */}
              <section id="lending" className="scroll-mt-24">
                <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                        <Coins className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-800">Lending & Borrowing</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">Earn interest or access liquidity without selling assets</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <p className="text-slate-700 mb-6">
                      DeFi lending protocols enable users to lend their crypto assets to earn interest or borrow against their holdings without selling them. This creates a more efficient and accessible credit market.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">For Lenders</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                            <span>Earn passive income on idle assets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                            <span>No minimum investment requirements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                            <span>Withdraw funds anytime</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">For Borrowers</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                            <span>Access liquidity without selling assets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                            <span>No credit checks required</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                            <span>Flexible repayment terms</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mt-6">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Collateralization</h4>
                      <p className="text-slate-700 text-sm">
                        DeFi loans are typically over-collateralized, meaning borrowers must deposit assets worth more than the loan amount. This protects lenders from default risk in a trustless environment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* AMMs */}
              <section id="amm" className="scroll-mt-24">
                <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-800">Automated Market Makers (AMMs)</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">Decentralized trading without order books</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <p className="text-slate-700 mb-6">
                      AMMs are smart contracts that create liquidity pools for trading pairs. Instead of matching buyers and sellers, they use mathematical formulas to determine prices and execute trades instantly.
                    </p>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-6">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">How AMMs Work</h4>
                      <ol className="space-y-3 text-sm text-slate-700">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                          <span>Liquidity providers deposit token pairs into pools</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                          <span>Smart contracts manage the pool automatically</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                          <span>Traders swap tokens directly with the pool</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                          <span>Prices adjust based on supply and demand</span>
                        </li>
                      </ol>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-xl">
                        <h5 className="font-semibold text-slate-800 mb-2">Benefits</h5>
                        <ul className="space-y-1 text-sm text-slate-600">
                          <li>• 24/7 trading availability</li>
                          <li>• No order matching needed</li>
                          <li>• Earn fees as liquidity provider</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-xl">
                        <h5 className="font-semibold text-slate-800 mb-2">Risks</h5>
                        <ul className="space-y-1 text-sm text-slate-600">
                          <li>• Impermanent loss</li>
                          <li>• Smart contract vulnerabilities</li>
                          <li>• Price slippage on large trades</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Governance */}
              <section id="governance" className="scroll-mt-24">
                <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-800">Governance</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">Community-driven protocol management</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <p className="text-slate-700 mb-6">
                      DeFi protocols are governed by their communities through decentralized autonomous organizations (DAOs). Token holders can propose and vote on protocol changes, ensuring democratic decision-making.
                    </p>

                    <div className="bg-cyan-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">Governance Process</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center">
                            <FileText className="w-4 h-4 text-cyan-700" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">Proposal Creation</p>
                            <p className="text-sm text-slate-600">Community members submit improvement proposals</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-cyan-700" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">Community Discussion</p>
                            <p className="text-sm text-slate-600">Open debate and refinement of proposals</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-cyan-700" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">Voting & Implementation</p>
                            <p className="text-sm text-slate-600">Token holders vote and approved changes are executed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Security & Risks */}
              <section id="security" className="scroll-mt-24">
                <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-rose-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-800">Security & Risk Management</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">Protecting your assets in DeFi</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800 mb-2">Common Risks in DeFi</h4>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li><strong>Smart Contract Risk:</strong> Bugs or vulnerabilities in code</li>
                            <li><strong>Impermanent Loss:</strong> Value changes in liquidity pools</li>
                            <li><strong>Liquidation Risk:</strong> Under-collateralized loans being liquidated</li>
                            <li><strong>Rug Pulls:</strong> Malicious developers draining funds</li>
                            <li><strong>Oracle Failures:</strong> Incorrect price feed data</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Security Best Practices</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-xl">
                        <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <Lock className="w-4 h-4 text-green-600" />
                          Wallet Security
                        </h5>
                        <ul className="space-y-1 text-sm text-slate-600">
                          <li>• Use hardware wallets for large amounts</li>
                          <li>• Never share private keys or seed phrases</li>
                          <li>• Enable 2FA where available</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-blue-600" />
                          Protocol Safety
                        </h5>
                        <ul className="space-y-1 text-sm text-slate-600">
                          <li>• Research protocols before using</li>
                          <li>• Check audit reports</li>
                          <li>• Start with small amounts</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Risk Mitigation Strategies</h4>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li>1. <strong>Diversification:</strong> Don't put all funds in one protocol</li>
                        <li>2. <strong>Due Diligence:</strong> Research team, audits, and community</li>
                        <li>3. <strong>Insurance:</strong> Consider DeFi insurance protocols</li>
                        <li>4. <strong>Monitor Positions:</strong> Regularly check your investments</li>
                        <li>5. <strong>Stay Informed:</strong> Follow protocol updates and news</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Getting Started */}
              <section id="getting-started" className="scroll-mt-24">
                <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-800">Getting Started with DeFi</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">Your first steps into decentralized finance</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <p className="text-slate-700 mb-6">
                      Ready to explore DeFi? Follow this step-by-step guide to begin your journey safely and confidently.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-green-800 font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">Set Up a Wallet</h4>
                            <p className="text-sm text-slate-600">Download MetaMask or another Web3 wallet. Secure your seed phrase offline.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-blue-800 font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">Get Some Crypto</h4>
                            <p className="text-sm text-slate-600">Buy ETH from an exchange and transfer to your wallet for gas fees.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-purple-800 font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">Choose a Protocol</h4>
                            <p className="text-sm text-slate-600">Start with established protocols like Uniswap, Aave, or Compound.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-orange-800 font-bold">4</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">Start Small</h4>
                            <p className="text-sm text-slate-600">Begin with small amounts to understand how protocols work before investing more.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl text-center">
                      <Globe className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Ready to Start Your DeFi Journey?</h3>
                      <p className="text-slate-600 mb-6">Join the India DeFi Alliance community for support, resources, and updates.</p>
                      <Button 
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSduy4NyNRcuivBY89H75z9ks8d6G6tlhDnpErxiTPS1_eHg3g/viewform', '_blank')}
                      >
                        Join the Community
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Additional Resources */}
              <section className="mt-12">
                <Card className="content-box-enhanced bg-gradient-to-r from-slate-50 to-gray-50 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Additional Resources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <a href="/glossary" className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                        <BookOpen className="w-8 h-8 text-blue-600" />
                        <div>
                          <p className="font-semibold text-slate-800">DeFi Glossary</p>
                          <p className="text-sm text-slate-600">Multi-language terminology guide</p>
                        </div>
                      </a>
                      <a href="/resources" className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                        <FileText className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="font-semibold text-slate-800">Research Papers</p>
                          <p className="text-sm text-slate-600">Latest DeFi research and analysis</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingBot />
    </div>
  );
};

export default Handbook;