import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Search,
  Globe,
  Shield,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Languages,
  Database,
  Coins,
  Network,
  Lock,
  Zap,
  Activity,
  BarChart3,
  FileText,
  Users,
  ArrowUpDown,
  Wallet
} from 'lucide-react';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [activeSection, setActiveSection] = useState('overview');

  // Glossary terms data
  const glossaryTerms = [
    {
      term: "Decentralized Finance (DeFi)",
      category: "Core Concepts",
      icon: <Network className="w-5 h-5" />,
      english: "An emerging peer-to-peer financial system using blockchain, cryptocurrencies, and smart contracts to automate financial services without intermediaries.",
      hindi: "डिसेंट्रलाइज़्ड फाइनेंस (DeFi): एक उभरती हुई पीयर-टू-पीयर वित्तीय प्रणाली जो बिना किसी बिचौलिये के वित्तीय सेवाओं को स्वचालित करने के लिए ब्लॉकचेन, क्रिप्टोकरेंसी और स्मार्ट कॉन्ट्रैक्ट का उपयोग करती है।",
      tamil: "மத்தியப்படுத்தப்படாத நிதி (DeFi): இடைத்தரகர்கள் இல்லாமல் நிதி சேவைகளை தானியக்கமாக்க, பிளாக்செயின், கிரிப்டோகரன்சிகள் மற்றும் ஸ்மார்ட் ஒப்பந்தங்களைப் பயன்படுத்தும் ஒரு வளர்ந்து வரும் பியர்-டு-பியர் நிதி அமைப்பு.",
      example: "A user lends cryptocurrency to another user on a platform like Aave and earns interest, all through a smart contract, without a bank's involvement.",
      risk: "DeFi introduces technical risks from smart contract vulnerabilities, market risks from volatility, and regulatory uncertainty."
    },
    {
      term: "Smart Contract",
      category: "Technology",
      icon: <FileText className="w-5 h-5" />,
      english: "A self-executing agreement with the terms of the contract directly written into lines of code, deployed on a blockchain.",
      hindi: "स्मार्ट कॉन्ट्रैक्ट: एक स्व-निष्पादित समझौता जिसमें अनुबंध की शर्तें सीधे कोड की लाइनों में लिखी जाती हैं, जिसे ब्लॉकचेन पर तैनात किया जाता है।",
      tamil: "ஸ்மார்ட் ஒப்பந்தம்: ஒரு பிளாக்செயினில் பயன்படுத்தப்படும், ஒப்பந்தத்தின் விதிமுறைகள் நேரடியாக குறியீட்டின் வரிகளில் எழுதப்பட்டிருக்கும் ஒரு சுய-செயல்பாட்டு ஒப்பந்தம்.",
      example: "A borrower uses a smart contract to get an instant loan by depositing collateral. If the collateral's value falls below a certain threshold, the contract automatically liquidates it.",
      risk: "Smart contracts are immutable, meaning bugs or vulnerabilities cannot be easily fixed. An exploit can lead to irreversible loss of funds."
    },
    {
      term: "Impermanent Loss",
      category: "DeFi Risks",
      icon: <TrendingUp className="w-5 h-5" />,
      english: "The temporary reduction in the value of an asset held in a liquidity pool compared to simply holding the asset outside the pool, due to price divergence.",
      hindi: "अस्थायी नुकसान: मूल्य के विचलन के कारण किसी लिक्विडिटी पूल में रखी गई संपत्ति के मूल्य में होने वाली अस्थायी कमी।",
      tamil: "நிரந்தரமற்ற இழப்பு: விலை வேறுபாடுகள் காரணமாக, ஒரு சொத்தை ஒரு திரவத்தன்மை குளத்தில் வைத்திருப்பதற்கும், அதை வெளியே வைத்திருப்பதற்கும் இடையே உள்ள மதிப்பு வேறுபாடு.",
      example: "A user deposits 1 ETH and 2,000 USDT into a liquidity pool. If ETH's price doubles, the user may withdraw less ETH and more USDT than initially deposited.",
      risk: "The loss becomes permanent if assets are withdrawn before prices revert. LPs must manage this risk by using stablecoin pairs or seeking high-fee pools."
    },
    {
      term: "Liquid Staking",
      category: "Staking",
      icon: <Coins className="w-5 h-5" />,
      english: "A method of staking cryptocurrencies where users receive a tokenized representation of their staked assets, which can then be used in other DeFi protocols.",
      hindi: "लिक्विड स्टेकिंग: क्रिप्टोकरेंसी को स्टेकिंग पर लगाने की एक विधि, जिसमें उपयोगकर्ता को अपनी स्टेकिंग पर लगी हुई संपत्ति का टोकन वाला प्रतिनिधित्व मिलता है।",
      tamil: "திரவ ஸ்டேக்கிங்: கிரிப்டோகரன்சிகளை ஸ்டேக் செய்யும் முறை, இதில் பயனர்கள் தங்கள் ஸ்டேக் செய்யப்பட்ட சொத்துகளின் டோக்கன் செய்யப்பட்ட பிரதிநிதித்துவத்தைப் பெறுகிறார்கள்.",
      example: "A user stakes 1 ETH with Lido and receives 1 stETH, which can be used as collateral while still earning staking rewards.",
      risk: "The LST's price can diverge from the underlying asset, and the protocol is susceptible to smart contract vulnerabilities and slashing penalties."
    },
    {
      term: "Automated Market Maker (AMM)",
      category: "Trading",
      icon: <Activity className="w-5 h-5" />,
      english: "A type of decentralized exchange protocol that uses mathematical formulas to price assets and facilitate trading without order books.",
      hindi: "ऑटोमेटेड मार्केट मेकर (AMM): एक प्रकार का विकेन्द्रीकृत एक्सचेंज प्रोटोकॉल जो संपत्ति की कीमत निर्धारित करने और ऑर्डर बुक के बिना व्यापार की सुविधा के लिए गणितीय सूत्रों का उपयोग करता है।",
      tamil: "தானியங்கி சந்தை உருவாக்குநர் (AMM): ஆர்டர் புத்தகங்கள் இல்லாமல் சொத்துகளின் விலையை நிர்ணயிக்கவும் வர்த்தகத்தை எளிதாக்கவும் கணித சூத்திரங்களைப் பயன்படுத்தும் ஒரு வகை பரவலாக்கப்பட்ட பரிமாற்ற நெறிமுறை.",
      example: "Uniswap uses the formula x·y=k to maintain liquidity pools and enable instant token swaps.",
      risk: "AMMs expose liquidity providers to impermanent loss and can suffer from price slippage on large trades."
    },
    {
      term: "Yield Farming",
      category: "DeFi Strategies",
      icon: <TrendingUp className="w-5 h-5" />,
      english: "The practice of staking or lending crypto assets to generate high returns or rewards in additional cryptocurrency.",
      hindi: "यील्ड फार्मिंग: अतिरिक्त क्रिप्टोकरेंसी में उच्च रिटर्न या पुरस्कार उत्पन्न करने के लिए क्रिप्टो संपत्ति को स्टेकिंग या उधार देने की प्रथा।",
      tamil: "விளைச்சல் வேளாண்மை: கூடுதல் கிரிப்டோகரன்சியில் அதிக வருமானம் அல்லது வெகுமதிகளை உருவாக்க கிரிப்டோ சொத்துகளை பங்குபெறுதல் அல்லது கடன் கொடுத்தல்.",
      example: "A user provides liquidity to a DEX and stakes the LP tokens on another platform to earn additional rewards.",
      risk: "High APYs are often unsustainable and can diminish quickly. Smart contract risks and impermanent loss are significant concerns."
    },
    {
      term: "Gas Fees",
      category: "Blockchain Basics",
      icon: <Zap className="w-5 h-5" />,
      english: "Transaction fees paid to validators for processing and validating transactions on a blockchain network.",
      hindi: "गैस फीस: ब्लॉकचेन नेटवर्क पर लेनदेन को प्रोसेसिंग और सत्यापित करने के लिए सत्यापनकर्ताओं को भुगतान की जाने वाली लेनदेन फीस।",
      tamil: "கேஸ் கட்டணங்கள்: பிளாக்செயின் நெட்வொர்க்கில் பரிவர்த்தனைகளை செயலாக்க மற்றும் சரிபார்க்க சரிபார்ப்பாளர்களுக்கு செலுத்தப்படும் பரிவர்த்தனை கட்டணங்கள்.",
      example: "During high network congestion on Ethereum, gas fees can exceed $100 for a simple token transfer.",
      risk: "High gas fees can make small transactions economically unviable and can fluctuate dramatically based on network demand."
    },
    {
      term: "Flash Loan",
      category: "Advanced DeFi",
      icon: <Zap className="w-5 h-5" />,
      english: "An uncollateralized loan that must be borrowed and repaid within the same blockchain transaction.",
      hindi: "फ्लैश लोन: एक गैर-संपार्श्विक ऋण जिसे एक ही ब्लॉकचेन लेनदेन के भीतर उधार लिया और चुकाया जाना चाहिए।",
      tamil: "ஃப்ளாஷ் கடன்: ஒரே பிளாக்செயின் பரிவர்த்தனையில் கடன் வாங்கி திருப்பிச் செலுத்த வேண்டிய பிணையமில்லாத கடன்.",
      example: "A trader borrows 10,000 ETH, uses it for arbitrage across DEXs, and repays it all in one transaction.",
      risk: "Flash loans are often used to exploit vulnerabilities in DeFi protocols, leading to significant losses for other users."
    },
    {
      term: "Wallet",
      category: "Blockchain Basics",
      icon: <Wallet className="w-5 h-5" />,
      english: "A digital tool for storing, managing, and transacting with cryptocurrencies and digital assets.",
      hindi: "वॉलेट: क्रिप्टोकरेंसी और डिजिटल संपत्ति को स्टोर करने, प्रबंधित करने और लेनदेन करने के लिए एक डिजिटल उपकरण।",
      tamil: "பணப்பை: கிரிப்டோகரன்சிகள் மற்றும் டிஜிட்டல் சொத்துகளை சேமித்தல், நிர்வகித்தல் மற்றும் பரிவர்த்தனை செய்வதற்கான டிஜிட்டல் கருவி.",
      example: "MetaMask is a popular Web3 wallet that allows users to interact with DeFi protocols directly from their browser.",
      risk: "Loss of private keys means permanent loss of funds. Phishing attacks and malware targeting wallets are common threats."
    },
    {
      term: "Oracle",
      category: "Infrastructure",
      icon: <Database className="w-5 h-5" />,
      english: "A third-party service that provides external data to blockchain smart contracts.",
      hindi: "ओरेकल: एक तृतीय-पक्ष सेवा जो ब्लॉकचेन स्मार्ट कॉन्ट्रैक्ट को बाहरी डेटा प्रदान करती है।",
      tamil: "ஆரக்கிள்: பிளாக்செயின் ஸ்மார்ட் ஒப்பந்தங்களுக்கு வெளிப்புற தரவை வழங்கும் மூன்றாம் தரப்பு சேவை.",
      example: "Chainlink provides price feeds to DeFi lending protocols to determine collateral values and liquidation thresholds.",
      risk: "Oracle manipulation can lead to incorrect smart contract execution. Centralized oracles introduce single points of failure."
    }
  ];

  // Filter terms based on search
  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group terms by category
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    if (!acc[term.category]) {
      acc[term.category] = [];
    }
    acc[term.category].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border-b border-gray-200">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-violet-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-violet-400/15 to-indigo-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-indigo-300/25 to-purple-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <span className="text-slate-600 text-sm uppercase tracking-wider font-medium">Interactive Resource</span>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  DeFi Glossary
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                Core DeFi terms explained in English, Hindi, and Tamil
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 animate-staggered-fade-in stagger-3">
                <Badge className="px-4 py-2 bg-purple-100 text-purple-700 border-purple-200">
                  <BookOpen className="w-4 h-4 mr-2" />
                  100+ Terms
                </Badge>
                <Badge className="px-4 py-2 bg-violet-100 text-violet-700 border-violet-200">
                  <Languages className="w-4 h-4 mr-2" />
                  Multi-Language Support
                </Badge>
                <Badge className="px-4 py-2 bg-indigo-100 text-indigo-700 border-indigo-200">
                  <Shield className="w-4 h-4 mr-2" />
                  Risk Analysis
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card className="content-box-enhanced bg-gradient-to-br from-white via-purple-50/30 to-violet-50/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">Executive Summary: The Evolving DeFi Landscape</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-lg leading-relaxed text-slate-700 mb-6">
                    The Decentralized Finance (DeFi) ecosystem is undergoing a significant transformation, moving from a niche realm of speculative capital and early adopters to a more mature and strategically relevant sector attracting institutional interest.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        Market Dynamics
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600 mt-1 shrink-0" />
                          <span>SEC's 2024 approval of spot crypto ETFs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600 mt-1 shrink-0" />
                          <span>Resurgence of the "Coinbase premium"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600 mt-1 shrink-0" />
                          <span>Growing institutional confidence</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Network className="w-5 h-5 text-indigo-600" />
                        Technical Evolution
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-indigo-600 mt-1 shrink-0" />
                          <span>Multi-chain interoperability solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-indigo-600 mt-1 shrink-0" />
                          <span>Wrapped Bitcoin (wBTC) integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-indigo-600 mt-1 shrink-0" />
                          <span>Cross-chain liquidity bridges</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">Key Insight</h4>
                        <p className="text-slate-700">
                          The future of DeFi is not about a single chain winning, but about building interconnected networks that can efficiently aggregate and leverage the world's most significant pools of liquidity.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50 sticky top-20 z-20 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white"
                  />
                </div>
                <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage} className="w-full md:w-auto">
                  <TabsList className="grid grid-cols-3 w-full md:w-[300px]">
                    <TabsTrigger value="english">English</TabsTrigger>
                    <TabsTrigger value="hindi">हिंदी</TabsTrigger>
                    <TabsTrigger value="tamil">தமிழ்</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Glossary Terms Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {Object.entries(groupedTerms).map(([category, terms]) => (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    {terms[0].icon}
                    {category}
                    <Badge variant="secondary" className="ml-2">{terms.length} terms</Badge>
                  </h2>
                  <div className="grid gap-6">
                    {terms.map((term, index) => (
                      <Card 
                        key={index} 
                        className="content-box-enhanced bg-white hover:shadow-xl transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg flex items-center justify-center">
                                {term.icon}
                              </div>
                              <div>
                                <CardTitle className="text-xl font-bold text-slate-800">{term.term}</CardTitle>
                                <Badge variant="outline" className="mt-1">{term.category}</Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Tabs value={selectedLanguage} className="w-full">
                            <TabsContent value="english" className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-slate-800 mb-2">Definition</h4>
                                <p className="text-slate-700">{term.english}</p>
                              </div>
                            </TabsContent>
                            <TabsContent value="hindi" className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-slate-800 mb-2">परिभाषा</h4>
                                <p className="text-slate-700">{term.hindi}</p>
                              </div>
                            </TabsContent>
                            <TabsContent value="tamil" className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-slate-800 mb-2">வரையறை</h4>
                                <p className="text-slate-700">{term.tamil}</p>
                              </div>
                            </TabsContent>
                          </Tabs>
                          
                          <div className="mt-6 space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-blue-600" />
                                Example
                              </h5>
                              <p className="text-sm text-slate-700">{term.example}</p>
                            </div>
                            
                            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                              <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-600" />
                                Risk Analysis
                              </h5>
                              <p className="text-sm text-slate-700">{term.risk}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blockchain Comparison Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Top Blockchains Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-xl">
                  <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Blockchain</th>
                      <th className="px-6 py-4 text-left">Token</th>
                      <th className="px-6 py-4 text-left">Consensus</th>
                      <th className="px-6 py-4 text-left">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Bitcoin</td>
                      <td className="px-6 py-4">BTC</td>
                      <td className="px-6 py-4">Proof-of-Work</td>
                      <td className="px-6 py-4">Store of Value, Digital Gold</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Ethereum</td>
                      <td className="px-6 py-4">ETH</td>
                      <td className="px-6 py-4">Proof-of-Stake</td>
                      <td className="px-6 py-4">DeFi Leader, Smart Contracts, NFTs</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Solana</td>
                      <td className="px-6 py-4">SOL</td>
                      <td className="px-6 py-4">PoS + PoH</td>
                      <td className="px-6 py-4">High-speed DeFi, Gaming, NFTs</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">BNB Chain</td>
                      <td className="px-6 py-4">BNB</td>
                      <td className="px-6 py-4">DPoS</td>
                      <td className="px-6 py-4">Low-cost DeFi, EVM-compatible</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Cardano</td>
                      <td className="px-6 py-4">ADA</td>
                      <td className="px-6 py-4">Proof-of-Stake</td>
                      <td className="px-6 py-4">Smart Contracts, BTC interoperability</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management Matrix */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">DeFi Risk Management Matrix</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="content-box-enhanced bg-gradient-to-br from-red-50 to-rose-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Technical Risks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Smart Contract Vulnerabilities</li>
                      <li>• Oracle Manipulation</li>
                      <li>• Flash Loan Attacks</li>
                      <li>• Reentrancy Attacks</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced bg-gradient-to-br from-amber-50 to-orange-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-amber-700 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Market Risks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Price Volatility</li>
                      <li>• Impermanent Loss</li>
                      <li>• Liquidity Risks</li>
                      <li>• MEV Exploitation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced bg-gradient-to-br from-purple-50 to-violet-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-purple-700 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Regulatory Risks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Regulatory Uncertainty</li>
                      <li>• Compliance Requirements</li>
                      <li>• Tax Implications</li>
                      <li>• Cross-border Restrictions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-green-700 flex items-center gap-2">
                      <Lock className="w-5 h-5" />
                      Operational Risks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Private Key Management</li>
                      <li>• Phishing Attacks</li>
                      <li>• User Error</li>
                      <li>• Wallet Security</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-blue-700 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Governance Risks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Centralization Concerns</li>
                      <li>• Voting Manipulation</li>
                      <li>• Protocol Changes</li>
                      <li>• DAO Vulnerabilities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced bg-gradient-to-br from-indigo-50 to-purple-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-indigo-700 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Mitigation Strategies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Diversification</li>
                      <li>• Due Diligence</li>
                      <li>• Risk Assessment</li>
                      <li>• Insurance Protocols</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Continue Your DeFi Education
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Explore more resources and join our community to stay updated on the latest in DeFi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                  onClick={() => window.location.href = '/handbook'}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  View DeFi Handbook
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSduy4NyNRcuivBY89H75z9ks8d6G6tlhDnpErxiTPS1_eHg3g/viewform', '_blank')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join the Alliance
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBot />
    </div>
  );
};

export default Glossary;