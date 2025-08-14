import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Newspaper, Languages, ExternalLink, Download, Search, GraduationCap, Library } from 'lucide-react';

const Resources = () => {
  const educationResources = [
    {
      title: "DeFi Handbook",
      type: "Interactive Guide",
      description: "Step by step guide covering the basics of DeFi: Smart Contracts, Lending, AMMs, governance, and risk management.",
      link: "https://docs.google.com/document/d/1KDjPoDt95mdLGr2qWSuC_eLJdK7vNRr9Ajaue0GGmiw/mobilebasic",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "DeFi Glossary",
      type: "Multi-Language Resource",
      description: "Core DeFi terms in English, Hindi, and Tamil, with examples and deep dives.",
      link: "https://docs.google.com/document/d/19Syxk0ozGBHp06uaOy4_uMURHovJnu7UUoMGo0YhFHQ/edit?tab=t.0#heading=h.g4j5o7n8zrps",
      icon: <Languages className="w-8 h-8 text-green-600" />,
    },
  ];

  const mediaItems = [
    {
      outlet: "Economic Times",
      headline: "India DeFi Alliance Advocates for Balanced Regulatory Framework",
      date: "July 22, 2025",
      link: "#",
    },
    {
      outlet: "Business Standard",
      headline: "DeFi Education Initiative Gains Momentum in Indian Universities",
      date: "July 18, 2025",
      link: "#",
    },
    {
      outlet: "LiveMint",
      headline: "Regulatory Clarity Needed for DeFi Growth, Says Alliance",
      date: "July 14, 2025",
      link: "#",
    },
    {
      outlet: "Hindu BusinessLine",
      headline: "IIT Bombay Partners with DeFi Alliance for Research Initiative",
      date: "July 10, 2025",
      link: "#",
    },
  ];

  const researchReports = [
    {
      title: "DeFi Regulatory Framework for India",
      date: "July 2025",
      type: "White Paper",
      description: "Comprehensive framework for regulatory compliance and reporting standards in DeFi protocols.",
      link: "#",
    },
    {
      title: "DeFi Security Best Practices",
      date: "June 2025",
      type: "Research Paper",
      description: "Analysis of security vulnerabilities and mitigation strategies for DeFi protocols.",
      link: "#",
    },
    {
      title: "Financial Inclusion through DeFi",
      date: "May 2025",
      type: "Study",
      description: "Research on DeFi's potential to provide financial services to underserved communities.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-white border-b border-gray-200">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-teal-400/15 to-cyan-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-300/25 to-indigo-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          {/* Network Lines Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <path d="M100 200L300 150L500 250L700 100L900 300" stroke="url(#resourceGradient1)" strokeWidth="3" opacity="0.6" className="animate-pulse" />
              <path d="M150 400L350 300L550 450L750 200L950 500" stroke="url(#resourceGradient2)" strokeWidth="3" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="100" cy="200" r="6" fill="url(#resourceNode1)" className="animate-glow-pulse" />
              <circle cx="300" cy="150" r="8" fill="url(#resourceNode2)" className="animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="500" cy="250" r="7" fill="url(#resourceNode3)" className="animate-glow-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="700" cy="100" r="9" fill="url(#resourceNode4)" className="animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
              <defs>
                <linearGradient id="resourceGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="resourceGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="resourceNode1"><stop offset="0%" style={{ stopColor: '#10b981' }} /></radialGradient>
                <radialGradient id="resourceNode2"><stop offset="0%" style={{ stopColor: '#14b8a6' }} /></radialGradient>
                <radialGradient id="resourceNode3"><stop offset="0%" style={{ stopColor: '#06b6d4' }} /></radialGradient>
                <radialGradient id="resourceNode4"><stop offset="0%" style={{ stopColor: '#3b82f6' }} /></radialGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Resource Icons */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 animate-float">
              <BookOpen className="w-12 h-12 text-emerald-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <Search className="w-10 h-10 text-teal-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <Library className="w-11 h-11 text-blue-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <GraduationCap className="w-10 h-10 text-cyan-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <FileText className="w-9 h-9 text-indigo-300 drop-shadow-lg" />
            </div>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-emerald-400 rounded-full animate-glow-pulse shadow-lg shadow-emerald-400/50"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-teal-400 rounded-full animate-glow-pulse shadow-lg shadow-teal-400/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-glow-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <span className="text-slate-600 text-sm uppercase tracking-wider font-medium">Knowledge Hub</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  Resources
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                Essential Resources • Media Coverage • Research Reports
              </p>
              
              {/* Resource Categories */}
              <div className="flex flex-wrap justify-center gap-6 animate-staggered-fade-in stagger-3">
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">Educational Materials</span>
                </div>
                <div className="flex items-center gap-2 text-teal-700 bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Research Papers</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-700 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200">
                  <Newspaper className="w-4 h-4" />
                  <span className="text-sm">Media Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Resources */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Essential Resources</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {educationResources.map((resource, index) => (
                  <Card key={index} className="content-box-enhanced bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                        {resource.icon}
                      </div>
                      <Badge variant="secondary" className="mb-3">{resource.type}</Badge>
                      <CardTitle className="text-xl font-bold text-slate-800">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-6">{resource.description}</p>
                      <a href={resource.link} className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center">
                        Link <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* In the Media */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">In the Media</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {mediaItems.map((item, index) => (
                  <Card key={index} className="content-box-enhanced bg-white hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Newspaper className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">{item.outlet}</Badge>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.headline}</h3>
                          <p className="text-sm text-slate-500 mb-3">{item.date}</p>
                          <a href={item.link} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Read More →
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research and Reports */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Research and Reports</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {researchReports.map((report, index) => (
                  <Card key={index} className="content-box-enhanced bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <FileText className="w-6 h-6 text-purple-600" />
                      </div>
                      <Badge className="mb-2">{report.type}</Badge>
                      <CardTitle className="text-lg font-bold text-slate-800">{report.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 mb-4">{report.description}</p>
                      <p className="text-xs text-slate-500 mb-4">{report.date}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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

export default Resources;