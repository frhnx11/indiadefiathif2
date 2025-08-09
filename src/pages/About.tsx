import React, { useEffect, useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, BookOpen, Shield, Handshake, TrendingUp } from 'lucide-react';

const About = () => {
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

  const objectives = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Bridge Developer-Policymaker Knowledge Gaps",
      description: "Facilitate meaningful dialogue between DeFi innovators and regulatory authorities to ensure informed policy decisions.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Advocate Clear, Balanced Regulations",
      description: "Work with regulators to develop practical frameworks that protect consumers while fostering innovation.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Educate via Publications and Events",
      description: "Create comprehensive educational resources and host events to increase DeFi awareness and understanding.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Lead Research on Security & Governance",
      description: "Drive cutting-edge research on DeFi security, governance models, and financial inclusion initiatives.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Facilitate Academic-Industry Partnerships",
      description: "Foster collaboration between universities, industry players, and regulatory bodies for comprehensive ecosystem development.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Foster an Engaged DeFi Community",
      description: "Build a vibrant community of DeFi enthusiasts, developers, and stakeholders across India.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400/15 to-teal-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-violet-300/25 to-purple-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          {/* Network Connection Lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <path d="M100 100L300 200L500 150L700 250L900 200" stroke="url(#gradient1)" strokeWidth="3" opacity="0.6" className="animate-pulse" />
              <path d="M150 300L350 400L550 350L750 450L950 400" stroke="url(#gradient2)" strokeWidth="3" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="100" cy="100" r="6" fill="url(#gradient3)" opacity="0.8" className="animate-glow-pulse" />
              <circle cx="300" cy="200" r="6" fill="url(#gradient4)" opacity="0.8" className="animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="500" cy="150" r="6" fill="url(#gradient5)" opacity="0.8" className="animate-glow-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="700" cy="250" r="6" fill="url(#gradient6)" opacity="0.8" className="animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="gradient3"><stop offset="0%" style={{ stopColor: '#06b6d4' }} /></radialGradient>
                <radialGradient id="gradient4"><stop offset="0%" style={{ stopColor: '#8b5cf6' }} /></radialGradient>
                <radialGradient id="gradient5"><stop offset="0%" style={{ stopColor: '#f59e0b' }} /></radialGradient>
                <radialGradient id="gradient6"><stop offset="0%" style={{ stopColor: '#ec4899' }} /></radialGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Mission Icons */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 animate-float">
              <Target className="w-10 h-10 text-cyan-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <Users className="w-12 h-12 text-emerald-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <Handshake className="w-10 h-10 text-pink-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <TrendingUp className="w-11 h-11 text-yellow-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <Shield className="w-9 h-9 text-teal-300 drop-shadow-lg" />
            </div>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-glow-pulse shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-pink-400 rounded-full animate-glow-pulse shadow-lg shadow-pink-400/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-glow-pulse shadow-lg shadow-yellow-400/50" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-200 text-sm uppercase tracking-wider font-medium">Our Story & Mission</span>
                  <div className="w-8 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent mb-8 animate-gradient-x leading-relaxed py-2">
                  About & Objectives
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8 animate-staggered-fade-in stagger-2">
                Discover who we are, our founding principles, and our mission to transform India's financial landscape through decentralized finance.
              </p>
              
              {/* Key Focus Areas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-staggered-fade-in stagger-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-emerald-300" />
                  </div>
                  <span className="text-xs text-emerald-200">Community</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-teal-300" />
                  </div>
                  <span className="text-xs text-teal-200">Mission</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="w-6 h-6 text-cyan-300" />
                  </div>
                  <span className="text-xs text-cyan-200">Education</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-6 h-6 text-teal-300" />
                  </div>
                  <span className="text-xs text-emerald-200">Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About India DeFi Alliance */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="content-box-enhanced animate-staggered-fade-in p-8 lg:p-12">
                <CardContent className="p-0">
                  <h2 className="section-heading text-center mb-8 animate-text-glow">About India DeFi Alliance</h2>
                  <div className="space-y-6">
                    <p className="body-text text-lg leading-relaxed">
                      India DeFi Alliance is a non-profit consortium of industry leaders, regulators, and academics 
                      committed to harnessing blockchain-based financial innovations to empower millions and foster 
                      economic inclusion across India.
                    </p>
                    <p className="body-text text-lg leading-relaxed">
                      Founded in 2024, our alliance emerged from the recognition that India's vast population and 
                      digital-first economy position it uniquely to benefit from decentralized finance. With over 
                      1.4 billion people, many of whom remain underbanked, DeFi presents unprecedented opportunities 
                      for financial inclusion and economic empowerment.
                    </p>
                    <p className="body-text text-lg leading-relaxed">
                      Our founding principles are rooted in transparency, education, and collaborative governance. 
                      We believe that the future of finance in India must be built on open, accessible, and 
                      secure foundations that serve all citizens, regardless of their economic status or geographic location.
                    </p>
                    <p className="body-text text-lg leading-relaxed">
                      As a bridge between innovation and regulation, we work tirelessly to ensure that India's 
                      regulatory framework evolves thoughtfully, balancing the need for consumer protection with 
                      the imperative to foster technological advancement and financial innovation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision Enhanced */}
        <section ref={sectionRef} className="py-12 lg:py-16 bg-gradient-to-r from-background/30 to-background/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Mission */}
                <div 
                  className={`content-box-mission p-10 lg:p-12 h-full transition-all duration-800 transform hover:-translate-y-1 ${
                    isVisible 
                      ? 'animate-slide-up-scale translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="section-heading animate-content-reveal" style={{ animationDelay: '0.1s' }}>Our Mission</h2>
                  </div>
                  <div className="animate-content-reveal text-center" style={{ animationDelay: '0.3s' }}>
                    <p className="body-text text-lg leading-relaxed">
                      To bridge the knowledge gap between DeFi innovators and policymakers, 
                      advocate for clear and balanced regulatory frameworks, educate stakeholders 
                      through authoritative publications and events, drive cutting‑edge research, 
                      and cultivate a thriving DeFi community in India.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div 
                  className={`content-box-vision p-10 lg:p-12 h-full transition-all duration-800 transform hover:-translate-y-1 delay-200 ${
                    isVisible 
                      ? 'animate-slide-up-scale translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ animationDelay: '200ms' }}
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                    </div>
                    <h2 className="section-heading animate-content-reveal" style={{ animationDelay: '0.2s' }}>Our Vision</h2>
                  </div>
                  <div className="animate-content-reveal text-center" style={{ animationDelay: '0.4s' }}>
                    <p className="body-text text-lg leading-relaxed">
                      A resilient, open, and transparent financial system—built on decentralized 
                      technologies—that empowers every Indian with equitable access to financial 
                      services and economic opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Objectives */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-300/15 to-orange-300/15 rounded-full blur-2xl animate-spin-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-center mb-12 bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">Our Objectives</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {objectives.map((objective, index) => {
                  const colors = [
                    { bg: 'from-red-400/20 to-pink-400/20', icon: 'text-red-600', text: 'text-red-700', border: 'border-red-200/50', shadow: 'hover:shadow-red-200/25' },
                    { bg: 'from-orange-400/20 to-yellow-400/20', icon: 'text-orange-600', text: 'text-orange-700', border: 'border-orange-200/50', shadow: 'hover:shadow-orange-200/25' },
                    { bg: 'from-yellow-400/20 to-amber-400/20', icon: 'text-yellow-600', text: 'text-yellow-700', border: 'border-yellow-200/50', shadow: 'hover:shadow-yellow-200/25' },
                    { bg: 'from-green-400/20 to-emerald-400/20', icon: 'text-green-600', text: 'text-green-700', border: 'border-green-200/50', shadow: 'hover:shadow-green-200/25' },
                    { bg: 'from-blue-400/20 to-cyan-400/20', icon: 'text-blue-600', text: 'text-blue-700', border: 'border-blue-200/50', shadow: 'hover:shadow-blue-200/25' },
                    { bg: 'from-purple-400/20 to-violet-400/20', icon: 'text-purple-600', text: 'text-purple-700', border: 'border-purple-200/50', shadow: 'hover:shadow-purple-200/25' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-${(index % 6) + 1} ${color.border} ${color.shadow} bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg shadow-xl transition-all duration-500`}
                    >
                      <CardContent className="p-8 text-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${color.bg} rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg`}>
                          <div className={`${color.icon} transform hover:rotate-12 transition-transform duration-300`}>
                            {React.cloneElement(objective.icon as React.ReactElement, {
                              className: `w-10 h-10 ${color.icon}`
                            })}
                          </div>
                        </div>
                        <h3 className={`text-lg font-bold ${color.text} mb-4 leading-tight`}>
                          {objective.title}
                        </h3>
                        <p className="body-text text-slate-700">
                          {objective.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why India is Unique */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/50 to-background/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="content-box-enhanced animate-background-shift animate-staggered-fade-in p-8 lg:p-12">
                <CardContent className="p-0">
                  <h2 className="section-heading text-center mb-8">Why India is Unique to the DeFi Ecosystem</h2>
                  <div className="space-y-6">
                    <p className="body-text text-lg leading-relaxed">
                      India stands at the epicenter of global financial transformation. With the world's largest 
                      remittance recipient status, receiving over $100 billion annually, India demonstrates the 
                      massive potential for DeFi solutions to reduce costs and increase efficiency in cross-border payments.
                    </p>
                    <p className="body-text text-lg leading-relaxed">
                      Our digital payments infrastructure, anchored by the Unified Payments Interface (UPI), 
                      has already revolutionized domestic transactions. This existing digital-first mindset 
                      creates a natural foundation for DeFi adoption and innovation.
                    </p>
                    <p className="body-text text-lg leading-relaxed">
                      India's vast unbanked and underbanked population presents an enormous opportunity for 
                      financial inclusion through DeFi protocols. Decentralized finance can provide accessible 
                      lending, savings, and investment opportunities to millions who have been excluded from 
                      traditional financial services.
                    </p>
                    <p className="body-text text-lg leading-relaxed">
                      Furthermore, India's robust technology sector, world-class educational institutions, 
                      and growing blockchain developer community position the country to be a global leader 
                      in DeFi innovation and implementation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBot />
    </div>
  );
};

export default About;