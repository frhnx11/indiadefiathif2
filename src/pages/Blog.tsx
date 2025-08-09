import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, Newspaper, ExternalLink, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of DeFi Regulation in India: A Balanced Approach",
      author: "Dr. Priya Sharma",
      date: "July 20, 2025",
      readTime: "8 min read",
      category: "Policy Analysis",
      excerpt: "Exploring how India can create a regulatory framework that fosters innovation while protecting consumers in the rapidly evolving DeFi landscape.",
      tags: ["Regulation", "Policy", "India"],
      image: "/placeholder.svg",
    },
    {
      title: "Understanding Smart Contract Security: Lessons from Recent Audits",
      author: "Rajesh Kumar",
      date: "July 15, 2025", 
      readTime: "12 min read",
      category: "Technical Analysis",
      excerpt: "A deep dive into common smart contract vulnerabilities and best practices for building secure DeFi protocols.",
      tags: ["Security", "Smart Contracts", "Audits"],
      image: "/placeholder.svg",
    },
    {
      title: "DeFi Adoption in Rural India: Opportunities and Challenges",
      author: "Anita Patel",
      date: "July 10, 2025",
      readTime: "6 min read", 
      category: "Research Insights",
      excerpt: "Examining how DeFi can bridge the financial inclusion gap in India's rural communities and the barriers that need to be addressed.",
      tags: ["Financial Inclusion", "Rural", "Adoption"],
      image: "/placeholder.svg",
    },
    {
      title: "Yield Farming Strategies: Risk Assessment and Optimization",
      author: "Michael Chen",
      date: "July 5, 2025",
      readTime: "10 min read",
      category: "Educational",
      excerpt: "A comprehensive guide to yield farming strategies, risk management techniques, and portfolio optimization for DeFi investors.",
      tags: ["Yield Farming", "DeFi", "Investment"],
      image: "/placeholder.svg",
    },
    {
      title: "The Role of DAOs in Decentralized Governance",
      author: "Sarah Williams",
      date: "June 30, 2025",
      readTime: "7 min read",
      category: "Governance",
      excerpt: "Understanding how Decentralized Autonomous Organizations are reshaping corporate governance and community decision-making.",
      tags: ["DAO", "Governance", "Community"],
      image: "/placeholder.svg",
    },
    {
      title: "Cross-Border Payments Revolution: DeFi vs Traditional Systems",
      author: "Ahmed Hassan",
      date: "June 25, 2025",
      readTime: "9 min read",
      category: "Market Analysis",
      excerpt: "Comparing the efficiency, cost, and accessibility of DeFi-based cross-border payments against traditional banking systems.",
      tags: ["Payments", "Cross-border", "Comparison"],
      image: "/placeholder.svg",
    },
  ];

  const pressItems = [
    {
      outlet: "The Economic Times",
      headline: "India DeFi Alliance Releases Comprehensive Regulatory Framework Proposal",
      date: "July 22, 2025",
      type: "Press Release",
      thumbnail: "/placeholder.svg",
      summary: "The alliance's latest white paper outlines key recommendations for balanced DeFi regulation in India.",
    },
    {
      outlet: "Business Standard", 
      headline: "IIT Bombay Partners with DeFi Alliance for Blockchain Security Research",
      date: "July 18, 2025",
      type: "Media Coverage",
      thumbnail: "/placeholder.svg", 
      summary: "New partnership aims to develop advanced security frameworks for DeFi protocols.",
    },
    {
      outlet: "LiveMint",
      headline: "DeFi Education Initiative Reaches 10,000 Students Across India",
      date: "July 14, 2025",
      type: "Press Release",
      thumbnail: "/placeholder.svg",
      summary: "Educational outreach program successfully introduces DeFi concepts to university students nationwide.",
    },
    {
      outlet: "Hindu BusinessLine",
      headline: "Regulatory Clarity Key to India's DeFi Growth, Says Alliance Report",
      date: "July 10, 2025", 
      type: "Media Coverage",
      thumbnail: "/placeholder.svg",
      summary: "Latest research highlights the importance of clear regulatory guidelines for DeFi ecosystem development.",
    },
    {
      outlet: "Financial Express",
      headline: "India DeFi Alliance Hosts First National DeFi Policy Summit",
      date: "July 6, 2025",
      type: "Event Coverage",
      thumbnail: "/placeholder.svg",
      summary: "Industry leaders, regulators, and academics gather to discuss DeFi policy framework for India.",
    },
    {
      outlet: "Moneycontrol",
      headline: "DeFi Alliance Launches Multi-Language Educational Resources",
      date: "July 2, 2025",
      type: "Press Release", 
      thumbnail: "/placeholder.svg",
      summary: "New educational materials now available in Hindi and Tamil to increase DeFi accessibility.",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Policy Analysis": "bg-blue-100 text-blue-800",
      "Technical Analysis": "bg-green-100 text-green-800", 
      "Research Insights": "bg-purple-100 text-purple-800",
      "Educational": "bg-orange-100 text-orange-800",
      "Governance": "bg-red-100 text-red-800",
      "Market Analysis": "bg-teal-100 text-teal-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Press Release": "bg-blue-100 text-blue-800",
      "Media Coverage": "bg-green-100 text-green-800",
      "Event Coverage": "bg-purple-100 text-purple-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-indigo-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-teal-300/25 to-cyan-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          {/* Floating Blog Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 animate-float">
              <Newspaper className="w-12 h-12 text-cyan-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <User className="w-10 h-10 text-teal-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <Calendar className="w-11 h-11 text-blue-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <Clock className="w-9 h-9 text-cyan-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <ExternalLink className="w-8 h-8 text-teal-300 drop-shadow-lg" />
            </div>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-cyan-400 rounded-full animate-glow-pulse shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-teal-400 rounded-full animate-glow-pulse shadow-lg shadow-teal-400/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-glow-pulse shadow-lg shadow-blue-400/50" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <span className="text-slate-200 text-sm uppercase tracking-wider font-medium">Latest Insights</span>
                  <div className="w-2 h-2 bg-zinc-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-8 animate-gradient-x leading-relaxed py-2">
                  Blog & News
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto mb-8 animate-staggered-fade-in stagger-2">
                Stay informed with the latest insights, analysis, and news from the world of decentralized finance and blockchain technology.
              </p>
              
              {/* Content Types */}
              <div className="flex flex-wrap justify-center gap-6 animate-staggered-fade-in stagger-3">
                <div className="flex items-center gap-2 text-slate-200 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-700">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Expert Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                  <Newspaper className="w-4 h-4" />
                  <span className="text-sm">Industry News</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-700">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Real-time Updates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="blog" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-12 bg-white/80 backdrop-blur-sm border border-border/50">
                  <TabsTrigger value="blog" className="text-lg py-3">Insights & Analysis</TabsTrigger>
                  <TabsTrigger value="press" className="text-lg py-3">News & Press Archive</TabsTrigger>
                </TabsList>

                {/* Blog Posts Tab */}
                <TabsContent value="blog">
                  {/* Featured Post */}
                  <div className="mb-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 rounded-3xl transform -rotate-1"></div>
                    <Card className="content-box-enhanced animate-pulse-glow overflow-hidden relative z-10 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg shadow-2xl border border-indigo-200/30">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 animate-pulse"></div>
                            <Newspaper className="w-16 h-16 text-indigo-600 relative z-10 drop-shadow-lg" />
                          </div>
                        </div>
                        <div className="md:w-2/3 p-8">
                          <div className="flex items-center gap-2 mb-4">
                            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium px-3 py-1">
                              ✨ Featured Article
                            </Badge>
                            <Badge className={`${getCategoryColor(blogPosts[0].category)} font-medium`}>
                              {blogPosts[0].category}
                            </Badge>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-4 leading-tight">{blogPosts[0].title}</h2>
                          <p className="text-slate-600 mb-6 leading-relaxed font-light">{blogPosts[0].excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4 text-indigo-500" />
                                <span className="font-medium">{blogPosts[0].author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-purple-500" />
                                {blogPosts[0].date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-pink-500" />
                                {blogPosts[0].readTime}
                              </div>
                            </div>
                            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                              Read Article <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Blog Grid */}
                  <div className="relative py-8">
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-teal-300/10 rounded-full blur-3xl animate-float"></div>
                      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-300/8 to-indigo-300/8 rounded-full blur-2xl animate-pulse-slow"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                      {blogPosts.slice(1).map((post, index) => {
                        const colors = [
                          { bg: 'from-rose-400/15 to-pink-400/15', header: 'from-rose-400/25 to-pink-400/25', icon: 'text-rose-600', title: 'text-rose-700', border: 'border-rose-200/50', badge: 'bg-rose-100 text-rose-700' },
                          { bg: 'from-emerald-400/15 to-green-400/15', header: 'from-emerald-400/25 to-green-400/25', icon: 'text-emerald-600', title: 'text-emerald-700', border: 'border-emerald-200/50', badge: 'bg-emerald-100 text-emerald-700' },
                          { bg: 'from-blue-400/15 to-cyan-400/15', header: 'from-blue-400/25 to-cyan-400/25', icon: 'text-blue-600', title: 'text-blue-700', border: 'border-blue-200/50', badge: 'bg-blue-100 text-blue-700' },
                          { bg: 'from-amber-400/15 to-yellow-400/15', header: 'from-amber-400/25 to-yellow-400/25', icon: 'text-amber-600', title: 'text-amber-700', border: 'border-amber-200/50', badge: 'bg-amber-100 text-amber-700' },
                          { bg: 'from-purple-400/15 to-violet-400/15', header: 'from-purple-400/25 to-violet-400/25', icon: 'text-purple-600', title: 'text-purple-700', border: 'border-purple-200/50', badge: 'bg-purple-100 text-purple-700' },
                          { bg: 'from-teal-400/15 to-cyan-400/15', header: 'from-teal-400/25 to-cyan-400/25', icon: 'text-teal-600', title: 'text-teal-700', border: 'border-teal-200/50', badge: 'bg-teal-100 text-teal-700' }
                        ];
                        const color = colors[index % colors.length];
                        
                        return (
                          <Card 
                            key={index} 
                            className={`content-box-enhanced h-full cursor-pointer animate-card-hover animate-staggered-fade-in stagger-${(index % 6) + 1} ${color.border} bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}
                          >
                            <CardHeader className="p-0">
                              <div className={`h-48 bg-gradient-to-br ${color.header} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent animate-pulse"></div>
                                <Newspaper className={`w-12 h-12 ${color.icon} relative z-10 drop-shadow-lg`} />
                              </div>
                            </CardHeader>
                            <CardContent className="p-6">
                              <Badge className={`mb-3 text-xs font-medium ${color.badge} border-none`}>
                                {post.category}
                              </Badge>
                              <CardTitle className={`text-lg mb-3 leading-tight font-bold ${color.title}`}>{post.title}</CardTitle>
                              <p className="text-slate-600 text-sm mb-4 leading-relaxed font-light line-clamp-3">{post.excerpt}</p>
                              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                                <span className="font-medium">{post.author}</span>
                                <span>{post.date}</span>
                              </div>
                              <div className="flex flex-wrap gap-1 mb-4">
                                {post.tags.map((tag, idx) => (
                                  <Badge key={idx} variant="outline" className={`text-xs ${color.border.replace('border-', 'border-')} text-slate-600 hover:${color.bg.replace('from-', 'bg-').replace('/15', '/20').split(' ')[0]}`}>
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {post.readTime}
                                </span>
                                <Button variant="ghost" size="sm" className={`${color.title} hover:${color.bg.replace('from-', 'bg-').replace('/15', '/20').split(' ')[0]} transition-all duration-300`}>
                                  Read More
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                {/* Press & News Tab */}
                <TabsContent value="press">
                  <div className="relative">
                    <div className="absolute inset-0">
                      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-300/10 to-teal-300/10 rounded-full blur-3xl animate-spin-slow"></div>
                      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-300/8 to-cyan-300/8 rounded-full blur-2xl animate-float"></div>
                    </div>
                    <div className="space-y-6 relative z-10">
                      {pressItems.map((item, index) => {
                        const colors = [
                          { bg: 'from-sky-400/15 to-cyan-400/15', thumbnail: 'from-sky-400/25 to-cyan-400/25', icon: 'text-sky-600', text: 'text-sky-700', border: 'border-sky-200/50', badge: 'bg-sky-100 text-sky-700' },
                          { bg: 'from-green-400/15 to-emerald-400/15', thumbnail: 'from-green-400/25 to-emerald-400/25', icon: 'text-green-600', text: 'text-green-700', border: 'border-green-200/50', badge: 'bg-green-100 text-green-700' },
                          { bg: 'from-violet-400/15 to-purple-400/15', thumbnail: 'from-violet-400/25 to-purple-400/25', icon: 'text-violet-600', text: 'text-violet-700', border: 'border-violet-200/50', badge: 'bg-violet-100 text-violet-700' },
                          { bg: 'from-orange-400/15 to-red-400/15', thumbnail: 'from-orange-400/25 to-red-400/25', icon: 'text-orange-600', text: 'text-orange-700', border: 'border-orange-200/50', badge: 'bg-orange-100 text-orange-700' },
                          { bg: 'from-indigo-400/15 to-blue-400/15', thumbnail: 'from-indigo-400/25 to-blue-400/25', icon: 'text-indigo-600', text: 'text-indigo-700', border: 'border-indigo-200/50', badge: 'bg-indigo-100 text-indigo-700' },
                          { bg: 'from-pink-400/15 to-rose-400/15', thumbnail: 'from-pink-400/25 to-rose-400/25', icon: 'text-pink-600', text: 'text-pink-700', border: 'border-pink-200/50', badge: 'bg-pink-100 text-pink-700' }
                        ];
                        const color = colors[index % colors.length];
                        
                        return (
                          <Card 
                            key={index} 
                            className={`content-box-enhanced cursor-pointer animate-card-hover animate-staggered-fade-in ${color.border} bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <CardContent className="p-8">
                              <div className="flex gap-6">
                                <div className={`w-24 h-24 bg-gradient-to-br ${color.thumbnail} rounded-2xl flex items-center justify-center shrink-0 shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                                  <Newspaper className={`w-10 h-10 ${color.icon} drop-shadow-lg`} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-4">
                                    <Badge className={`text-xs font-medium ${color.badge} border-none px-3 py-1`}>
                                      {item.type}
                                    </Badge>
                                    <span className={`text-sm font-bold ${color.text}`}>{item.outlet}</span>
                                    <span className="text-xs text-slate-400">•</span>
                                    <span className="text-xs text-slate-500 font-medium">{item.date}</span>
                                  </div>
                                  <h3 className={`text-xl font-bold ${color.text} mb-4 leading-tight hover:underline cursor-pointer transition-all duration-300`}>
                                    {item.headline}
                                  </h3>
                                  <p className="text-slate-600 mb-6 leading-relaxed font-light">{item.summary}</p>
                                  <Button variant="ghost" size="sm" className={`${color.text} hover:${color.bg.replace('from-', 'bg-').replace('/15', '/20').split(' ')[0]} transition-all duration-300 font-medium`}>
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Read Full Article
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBot />
    </div>
  );
};

export default Blog;