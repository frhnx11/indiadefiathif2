import React, { useEffect, useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, FileText, Newspaper, Users, ExternalLink, Download } from 'lucide-react';

const PolicyInsights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const publications = [
    {
      title: "Coming Soon",
      type: "White Paper",
      summary: "Coming Soon",
    },
    {
      title: "Coming Soon",
      type: "Position Paper",
      summary: "Coming Soon",
    },
    {
      title: "Coming Soon",
      type: "Regulatory Submission",
      summary: "Coming Soon",
    },
  ];

  const policyUpdates = [
    {
      title: "Coming Soon",
      summary: "Coming Soon",
    },
    {
      title: "Coming Soon",
      summary: "Coming Soon",
    },
    {
      title: "Coming Soon",
      summary: "Coming Soon",
    },
    {
      title: "Coming Soon",
      summary: "Coming Soon",
    },
  ];

  const newsItems = [
    {
      headline: "Coming Soon",
    },
    {
      headline: "Coming Soon",
    },
    {
      headline: "Coming Soon",
    },
    {
      headline: "Coming Soon",
    },
  ];

  const upcomingEvents = [
    {
      title: "Coming Soon",
      type: "Event",
      description: "Coming Soon",
    },
    {
      title: "Coming Soon",
      type: "Event",
      description: "Coming Soon",
    },
    {
      title: "Coming Soon",
      type: "Event",
      description: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-[#1E4B8E] rounded-full"></div>
                  <span className="text-slate-600 text-sm uppercase tracking-wider font-medium">Policy & Regulation</span>
                  <div className="w-8 h-1 bg-[#2E9E5B] rounded-full"></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight font-playfair">
                  Policy Insights
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                Navigate regulatory developments and industry insights shaping India's DeFi future
              </p>

              {/* Action Indicators */}
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-[#1E4B8E] bg-[#1E4B8E]/10 px-4 py-2 rounded-full border border-[#1E4B8E]/20">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Live Updates</span>
                </div>
                <div className="flex items-center gap-2 text-[#2E9E5B] bg-[#2E9E5B]/10 px-4 py-2 rounded-full border border-[#2E9E5B]/20">
                  <Newspaper className="w-4 h-4" />
                  <span className="text-sm">Expert Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5A623] bg-[#F5A623]/10 px-4 py-2 rounded-full border border-[#F5A623]/20">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Regulatory Insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Publications */}
        <section ref={sectionRef} className="py-12 lg:py-16 bg-gray-50">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Key Publications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publications.map((pub, index) => {
                  const colors = [
                    { bg: 'from-indigo-400/15 to-blue-400/15', icon: 'text-[#1E4B8E]', title: 'text-indigo-700', border: 'border-indigo-200/50', badge: 'bg-indigo-100 text-indigo-700', button: 'hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50' },
                    { bg: 'from-purple-400/15 to-violet-400/15', icon: 'text-[#F5A623]', title: 'text-purple-700', border: 'border-purple-200/50', badge: 'bg-[#F5A623]/10 text-purple-700', button: 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50' },
                    { bg: 'from-pink-400/15 to-rose-400/15', icon: 'text-pink-600', title: 'text-pink-700', border: 'border-pink-200/50', badge: 'bg-pink-100 text-pink-700', button: 'hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced h-full animate-staggered-fade-in stagger-${index + 1} ${color.border} bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <CardHeader className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={`text-xs font-medium ${color.badge} border-none px-3 py-1`}>
                            {pub.type}
                          </Badge>
                        </div>
                        <CardTitle className={`text-lg leading-tight font-bold ${color.title}`}>{pub.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <p className="text-slate-600 mb-6 leading-relaxed font-light">{pub.summary}</p>
                        <Badge variant="secondary" className="w-full justify-center">Coming Soon</Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 bg-gradient-to-r from-slate-600 via-gray-600 to-slate-600 bg-clip-text text-transparent">Latest Policy Updates</h2>
              <div className="space-y-6">
                {policyUpdates.map((update, index) => {
                  const colors = [
                    { border: 'border-emerald-200/50', title: 'text-emerald-700', icon: 'text-emerald-500', button: 'hover:bg-emerald-50 text-[#2E9E5B]' },
                    { border: 'border-blue-200/50', title: 'text-blue-700', icon: 'text-blue-500', button: 'hover:bg-blue-50 text-[#1E4B8E]' },
                    { border: 'border-orange-200/50', title: 'text-orange-700', icon: 'text-orange-500', button: 'hover:bg-orange-50 text-orange-600' },
                    { border: 'border-purple-200/50', title: 'text-purple-700', icon: 'text-purple-500', button: 'hover:bg-purple-50 text-[#F5A623]' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced animate-card-hover animate-staggered-fade-in ${color.border} bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                          <div className="flex-1">
                            <h3 className={`text-xl md:text-2xl font-bold ${color.title} mb-4 leading-tight`}>{update.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-light">{update.summary}</p>
                          </div>
                          <Badge variant="secondary" className="shrink-0">Coming Soon</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* In the News */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-300/15 to-indigo-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">In the News</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {newsItems.map((news, index) => {
                  const colors = [
                    { bg: 'from-cyan-400/20 to-blue-400/20', icon: 'text-cyan-600', title: 'text-cyan-700', border: 'border-cyan-200/50', outlet: 'text-cyan-600' },
                    { bg: 'from-blue-400/20 to-indigo-400/20', icon: 'text-[#1E4B8E]', title: 'text-blue-700', border: 'border-blue-200/50', outlet: 'text-[#1E4B8E]' },
                    { bg: 'from-indigo-400/20 to-purple-400/20', icon: 'text-[#1E4B8E]', title: 'text-indigo-700', border: 'border-indigo-200/50', outlet: 'text-[#1E4B8E]' },
                    { bg: 'from-purple-400/20 to-violet-400/20', icon: 'text-[#F5A623]', title: 'text-purple-700', border: 'border-purple-200/50', outlet: 'text-[#F5A623]' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced cursor-pointer animate-card-hover animate-staggered-fade-in ${color.border} bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center shrink-0 shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                            <Newspaper className={`w-8 h-8 ${color.icon} drop-shadow-lg`} />
                          </div>
                          <div className="flex-1">
                            <div className="mb-3">
                              <Badge variant="secondary">Coming Soon</Badge>
                            </div>
                            <h3 className={`font-bold ${color.title} leading-tight hover:underline cursor-pointer transition-all duration-300`}>{news.headline}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-300/15 to-red-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => {
                  const colors = [
                    { bg: 'from-amber-400/20 to-orange-400/20', icon: 'text-amber-600', title: 'text-amber-700', border: 'border-amber-200/50', button: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600', badge: 'bg-amber-100 text-amber-700' },
                    { bg: 'from-orange-400/20 to-red-400/20', icon: 'text-orange-600', title: 'text-orange-700', border: 'border-orange-200/50', button: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600', badge: 'bg-orange-100 text-orange-700' },
                    { bg: 'from-red-400/20 to-rose-400/20', icon: 'text-red-600', title: 'text-red-700', border: 'border-red-200/50', button: 'bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600', badge: 'bg-red-100 text-red-700' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced animate-pulse-glow animate-staggered-fade-in ${color.border} bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                          <div className="flex items-center gap-4 shrink-0">
                            <div className={`w-16 h-16 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                              <Users className={`w-8 h-8 ${color.icon}`} />
                            </div>
                            <div>
                              <Badge className={`text-xs ${color.badge} border-none font-medium`}>
                                {event.type}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold ${color.title} mb-3 leading-tight`}>{event.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-light">{event.description}</p>
                          </div>
                          <Badge variant="secondary" className="shrink-0">Coming Soon</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
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

export default PolicyInsights;
