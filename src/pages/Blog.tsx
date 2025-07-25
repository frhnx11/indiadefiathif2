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
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900">
          {/* Newspaper Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='30' height='2'/%3E%3Crect x='0' y='10' width='25' height='2'/%3E%3Crect x='0' y='20' width='20' height='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 }}
            ></div>
          </div>

          {/* Floating News Elements */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-16 left-16 animate-float">
              <Newspaper className="w-8 h-8 text-slate-300" />
            </div>
            <div className="absolute top-24 right-20 text-gray-300 font-bold text-lg animate-float" style={{ animationDelay: '1s' }}>📰</div>
            <div className="absolute bottom-24 left-1/4 animate-float" style={{ animationDelay: '3s' }}>
              <User className="w-6 h-6 text-zinc-300" />
            </div>
            <div className="absolute bottom-16 right-1/3 text-slate-400 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
              Breaking...
            </div>
            <div className="absolute top-1/3 right-16 animate-float" style={{ animationDelay: '4s' }}>
              <Calendar className="w-7 h-7 text-gray-400" />
            </div>
          </div>

          {/* Content Stream Lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-glow">
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
                  <div className="mb-12">
                    <Card className="content-box-enhanced animate-pulse-glow overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="h-64 bg-muted flex items-center justify-center">
                            <Newspaper className="w-16 h-16 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="md:w-2/3 p-8">
                          <Badge className={`mb-3 ${getCategoryColor(blogPosts[0].category)}`}>
                            Featured
                          </Badge>
                          <h2 className="text-2xl font-bold text-primary mb-4">{blogPosts[0].title}</h2>
                          <p className="body-text mb-4">{blogPosts[0].excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {blogPosts[0].author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {blogPosts[0].date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {blogPosts[0].readTime}
                              </div>
                            </div>
                            <Button variant="outline">
                              Read More <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Blog Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(1).map((post, index) => (
                      <Card 
                        key={index} 
                        className={`content-box-enhanced h-full cursor-pointer animate-card-hover animate-staggered-fade-in stagger-${(index % 6) + 1}`}
                      >
                        <CardHeader className="p-0">
                          <div className="h-48 bg-muted rounded-t-lg flex items-center justify-center">
                            <Newspaper className="w-12 h-12 text-muted-foreground" />
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <Badge className={`mb-3 text-xs ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </Badge>
                          <CardTitle className="text-lg mb-3 leading-tight">{post.title}</CardTitle>
                          <p className="body-text text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                            <span>{post.author}</span>
                            <span>{post.date}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                            <Button variant="ghost" size="sm">
                              Read More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Press & News Tab */}
                <TabsContent value="press">
                  <div className="space-y-6">
                    {pressItems.map((item, index) => (
                      <Card 
                        key={index} 
                        className="content-box-enhanced cursor-pointer animate-card-hover animate-staggered-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center shrink-0">
                              <Newspaper className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge className={`text-xs ${getTypeColor(item.type)}`}>
                                  {item.type}
                                </Badge>
                                <span className="text-sm font-medium text-primary">{item.outlet}</span>
                                <span className="text-xs text-muted-foreground">•</span>
                                <span className="text-xs text-muted-foreground">{item.date}</span>
                              </div>
                              <h3 className="text-lg font-semibold text-primary mb-3 leading-tight">
                                {item.headline}
                              </h3>
                              <p className="body-text text-sm mb-4">{item.summary}</p>
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Read Full Article
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
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