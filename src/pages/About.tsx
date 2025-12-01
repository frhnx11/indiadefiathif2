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
      icon: <Users className="w-8 h-8 text-[#1E4B8E]" />,
      title: "Connect developers and policymakers",
      description: "Foster informed dialogue and practical solutions.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#2E9E5B]" />,
      title: "Advocate pro-innovation regulations",
      description: "Protect consumers while encouraging experimentation.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#F5A623]" />,
      title: "Educate stakeholders",
      description: "Through events, workshops, and authoritative publications.",
    },
    {
      icon: <Target className="w-8 h-8 text-[#1E4B8E]" />,
      title: "Advance research",
      description: "On security, governance, and the social impact of DeFi.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-[#2E9E5B]" />,
      title: "Build partnerships",
      description: "Across academia, industry, and government.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#F5A623]" />,
      title: "Grow an informed community",
      description: "That actively shapes the direction of decentralized finance in India.",
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
                  <span className="text-slate-600 text-sm uppercase tracking-wider font-medium">Our Story & Mission</span>
                  <div className="w-8 h-1 bg-[#2E9E5B] rounded-full"></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  About & Objectives
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                Discover who we are, our founding principles, and our mission to transform India's financial landscape through decentralized finance.
              </p>

              {/* Key Focus Areas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2E9E5B]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#2E9E5B]/20">
                    <Users className="w-6 h-6 text-[#2E9E5B]" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Community</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#1E4B8E]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#1E4B8E]/20">
                    <Target className="w-6 h-6 text-[#1E4B8E]" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Mission</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#F5A623]/20">
                    <BookOpen className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Education</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#1E4B8E]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#1E4B8E]/20">
                    <TrendingUp className="w-6 h-6 text-[#1E4B8E]" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Growth</span>
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
                  <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">About India DeFi Alliance</h2>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-slate-600">
                      India DeFi Alliance is a non-profit policy consortium uniting innovators, industry leaders, and regulators to shape the future of decentralized finance in India. We provide a neutral platform for dialogue, research, and collaboration, ensuring that DeFi develops in a way that is secure, inclusive, and transparent.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-600">
                      Our work bridges the gap between rapid technological innovation and regulatory frameworks, enabling India to lead in responsible DeFi adoption. By connecting diverse stakeholders—protocol architects, policymakers, academics, investors, and developers—we aim to create an environment where open financial systems can thrive while safeguarding consumer interests.
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
                    <div className="w-16 h-16 bg-[#1E4B8E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-[#1E4B8E]" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Mission</h2>
                  </div>
                  <div className="animate-content-reveal text-center" style={{ animationDelay: '0.3s' }}>
                    <p className="text-lg leading-relaxed text-slate-600">
                      To bridge innovators and policymakers, shape balanced regulations, and build India's DeFi future through research, education, and collaboration.
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
                    <div className="w-16 h-16 bg-[#2E9E5B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-[#2E9E5B]" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Vision</h2>
                  </div>
                  <div className="animate-content-reveal text-center" style={{ animationDelay: '0.4s' }}>
                    <p className="text-lg leading-relaxed text-slate-600">
                      A resilient, open, and transparent financial system—built on decentralized technologies—that gives every Indian fair access to finance and opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Objectives */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Objectives</h2>
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

        {/* Why India */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white border border-gray-200 p-8 lg:p-12">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Why India</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#1E4B8E] mt-1">•</span>
                      <p className="text-lg text-slate-600">
                        The world's largest remittance market, with strong potential to reduce cross-border transaction costs through blockchain solutions.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1E4B8E] mt-1">•</span>
                      <p className="text-lg text-slate-600">
                        A rapidly digitising economy driven by UPI and mobile adoption, primed for on-chain financial innovation.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1E4B8E] mt-1">•</span>
                      <p className="text-lg text-slate-600">
                        Over 190 million unbanked or underbanked citizens who can benefit from inclusive DeFi products.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1E4B8E] mt-1">•</span>
                      <p className="text-lg text-slate-600">
                        A thriving developer ecosystem and global leadership in Web3 talent, capable of building scalable financial infrastructure.
                      </p>
                    </li>
                  </ul>
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