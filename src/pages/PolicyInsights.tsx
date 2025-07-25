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
      title: "White Paper: Defining the DeFi Reporting Entity",
      type: "White Paper",
      date: "March 2024",
      summary: "Comprehensive framework for regulatory compliance and reporting standards in DeFi protocols.",
      downloadUrl: "#",
    },
    {
      title: "Position Paper: DeFi & Anti-Money Laundering Frameworks",
      type: "Position Paper",
      date: "February 2024",
      summary: "Analysis of AML requirements and their application to decentralized finance protocols.",
      downloadUrl: "#",
    },
    {
      title: "Regulatory Submission: Recommendations on DeFi Taxation",
      type: "Regulatory Submission",
      date: "January 2024",
      summary: "Policy recommendations for fair and practical taxation of DeFi transactions in India.",
      downloadUrl: "#",
    },
  ];

  const policyUpdates = [
    {
      date: "July 20, 2025",
      title: "RBI Issues New Guidelines on Digital Asset Custody",
      summary: "Reserve Bank of India releases comprehensive guidelines for digital asset custody services affecting DeFi protocols.",
      readMore: "#",
    },
    {
      date: "July 15, 2025",
      title: "SEBI Proposes Framework for Tokenized Securities",
      summary: "Securities and Exchange Board of India seeks public consultation on regulatory framework for blockchain-based securities.",
      readMore: "#",
    },
    {
      date: "July 10, 2025",
      title: "Parliamentary Committee Reviews DeFi Regulations",
      summary: "Standing Committee on Finance conducts comprehensive review of current DeFi regulatory landscape.",
      readMore: "#",
    },
    {
      date: "July 5, 2025",
      title: "Ministry of Finance Announces DeFi Tax Clarifications",
      summary: "New clarifications provide guidance on tax treatment of DeFi yield farming and liquidity provision.",
      readMore: "#",
    },
  ];

  const newsItems = [
    {
      outlet: "Economic Times",
      headline: "India DeFi Alliance Advocates for Balanced Regulatory Framework",
      date: "July 22, 2025",
      thumbnail: "/placeholder.svg",
    },
    {
      outlet: "Business Standard",
      headline: "DeFi Education Initiative Gains Momentum in Indian Universities",
      date: "July 18, 2025",
      thumbnail: "/placeholder.svg",
    },
    {
      outlet: "LiveMint",
      headline: "Regulatory Clarity Needed for DeFi Growth, Says Alliance",
      date: "July 14, 2025",
      thumbnail: "/placeholder.svg",
    },
    {
      outlet: "Hindu BusinessLine",
      headline: "IIT Bombay Partners with DeFi Alliance for Research Initiative",
      date: "July 10, 2025",
      thumbnail: "/placeholder.svg",
    },
  ];

  const upcomingEvents = [
    {
      title: "RBI Roundtable on DeFi",
      date: "Aug 28, 2025",
      type: "Roundtable",
      description: "High-level discussion with RBI officials on DeFi regulatory framework.",
    },
    {
      title: "DeFi Security Webinar",
      date: "Sep 12, 2025",
      type: "Webinar",
      description: "Educational session on DeFi security best practices and risk management.",
    },
    {
      title: "Launch of Second White Paper",
      date: "Oct 5, 2025",
      type: "Publication",
      description: "Release of comprehensive policy recommendations for DeFi governance frameworks.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-purple-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-indigo-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 }}
            ></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-200 text-sm uppercase tracking-wider font-medium">Policy & Regulation</span>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-glow">
                  Policy Insights
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-staggered-fade-in stagger-2">
                Stay informed with the latest policy developments, regulatory updates, and industry insights shaping India's DeFi landscape.
              </p>
              
              {/* Action Indicators */}
              <div className="flex justify-center gap-6 animate-staggered-fade-in stagger-3">
                <div className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live Updates</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm">Expert Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-200">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <span className="text-sm">Regulatory Insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Publications */}
        <section ref={sectionRef} className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-center mb-12 animate-text-glow">Key Publications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publications.map((pub, index) => (
                  <Card 
                    key={index} 
                    className={`content-box-enhanced h-full animate-staggered-fade-in stagger-${index + 1} ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {pub.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{pub.date}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text mb-6">{pub.summary}</p>
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

        {/* Policy Updates */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/50 to-background/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center mb-12">Latest Policy Updates</h2>
              <div className="space-y-6">
                {policyUpdates.map((update, index) => (
                  <Card 
                    key={index} 
                    className="content-box-enhanced animate-card-hover animate-staggered-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{update.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-primary mb-2">{update.title}</h3>
                          <p className="body-text">{update.summary}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="shrink-0">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* In the News */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-center mb-12">In the News</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {newsItems.map((news, index) => (
                  <Card 
                    key={index} 
                    className="content-box-enhanced cursor-pointer animate-card-hover animate-staggered-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center shrink-0">
                          <Newspaper className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-primary">{news.outlet}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{news.date}</span>
                          </div>
                          <h3 className="font-semibold text-primary leading-tight">{news.headline}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/30 to-background/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center mb-12">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card 
                    key={index} 
                    className="content-box-enhanced animate-pulse-glow animate-staggered-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-primary">{event.date}</div>
                            <Badge variant="outline" className="text-xs mt-1">
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-primary mb-2">{event.title}</h3>
                          <p className="body-text">{event.description}</p>
                        </div>
                        <Button variant="outline" size="sm" className="shrink-0">
                          Register
                        </Button>
                      </div>
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

export default PolicyInsights;