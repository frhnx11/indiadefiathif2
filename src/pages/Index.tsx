import React, { useEffect, useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  BookOpen, 
  Shield, 
  TrendingUp, 
  ArrowRight,
  Play,
  FileText,
  Globe,
  Zap,
  Award,
  Lightbulb,
  CheckCircle,
  ExternalLink,
  Download,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
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

  const stats = [
    { number: "1.4B+", label: "Indians to Empower", icon: <Users className="w-6 h-6" /> },
    { number: "$100B+", label: "Annual Remittances", icon: <Globe className="w-6 h-6" /> },
    { number: "50+", label: "Industry Partners", icon: <Shield className="w-6 h-6" /> },
    { number: "10K+", label: "Community Members", icon: <Award className="w-6 h-6" /> },
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Educational Excellence",
      description: "Comprehensive DeFi handbook, interactive glossary in multiple languages, and expert-led video tutorials.",
      highlight: "Multi-language Support"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Policy Advocacy",
      description: "Working directly with regulators to create balanced frameworks that protect consumers while fostering innovation.",
      highlight: "Direct Regulatory Engagement"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Cutting-edge Research",
      description: "Partnerships with IIT Bombay and leading universities to advance DeFi security, governance, and inclusion.",
      highlight: "Academic Partnerships"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Thriving Community",
      description: "Connect with innovators, regulators, and institutions in India's most active DeFi community.",
      highlight: "Active Network"
    }
  ];

  const quickActions = [
    {
      title: "Download Vision Document",
      description: "Get our comprehensive vision for DeFi in India",
      icon: <Download className="w-5 h-5" />,
      action: "Download PDF",
      variant: "default" as const
    },
    {
      title: "Join the Alliance",
      description: "Become part of India's DeFi revolution",
      icon: <Users className="w-5 h-5" />,
      action: "Join Now",
      variant: "outline" as const
    },
    {
      title: "Explore Resources",
      description: "Access educational materials and research",
      icon: <BookOpen className="w-5 h-5" />,
      action: "Learn More",
      variant: "outline" as const
    }
  ];

  const objectives = [
    "Bridge developer-policymaker knowledge gaps through direct dialogue and collaboration",
    "Advocate for clear, balanced regulations that protect consumers while fostering innovation",
    "Educate stakeholders through authoritative publications, events, and interactive resources",
    "Drive cutting-edge research on security, governance, and financial inclusion initiatives",
    "Facilitate partnerships between academic institutions, industry players, and regulators",
    "Foster an engaged, knowledgeable DeFi community across India"
  ];

  const faqData = [
    {
      question: "What is DeFi?",
      answer: "Decentralized Finance (DeFi) is an open, blockchain‑based system of financial protocols and applications that lets anyone lend, borrow, trade, and earn yield—without traditional intermediaries."
    },
    {
      question: "What are the benefits of DeFi?",
      answer: "• Financial Freedom: Access banking‑like services from anywhere.\n• Crystal‑Clear Transparency: Every transaction and smart contract is on‑chain and auditable.\n• Programmable Money: Automate loans, swaps, staking—no middlemen, just code.\n• Composable Innovation: Mix 'n' match protocols to invent entirely new products.\n• Lean & Mean: Peer‑to‑peer transactions slash fees."
    },
    {
      question: "Why does DeFi challenge traditional regulation?",
      answer: "Instead of a single bank or broker, DeFi runs on global, permissionless code. Regulators must shift from entity‑centric rules to overseeing open, self‑enforcing protocols."
    },
    {
      question: "What is DeFi not?",
      answer: "• Not a centralized service \"hosted\" on blockchain.\n• Not pure token gambling—real utility underpins the protocols.\n• Not lawless: smart contracts encode governance and safety checks.\n• Not a magic bullet for all financial woes."
    },
    {
      question: "Why is India unique to the DeFi ecosystem?",
      answer: "India has the most foreign remittance inflows globally, creating massive opportunities for DeFi to provide more efficient cross-border payment solutions and financial inclusion."
    },
    {
      question: "What does India DeFi Alliance aim to achieve?",
      answer: "Bridge gaps between builders and policy‑makers—advocating clear rules, publishing playbooks, hosting roundtables, and equipping every Indian to harness DeFi."
    },
    {
      question: "How will we achieve these aims?",
      answer: "• White Papers & Memos: Actionable policy blueprints.\n• Roundtables & Webinars: Direct dialogue with regulators.\n• Academic Partnerships: Cutting‑edge research with IITs and universities.\n• Hands‑On Toolkits: Interactive handbooks, glossaries, video primers."
    },
    {
      question: "Who are our members?",
      answer: "From DeFi protocol architects and financial institutions to regulators, legal experts, academics, and curious enthusiasts—organized into Founding, Full, and Associate tiers."
    },
    {
      question: "How can I join?",
      answer: "Click \"Join the Alliance,\" pick your tier, fill out a 1‑minute form—and instantly unlock premium reports, event invites, and working‑group seats."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        
        {/* Introduction Section */}
        <section className="relative py-12 lg:py-16 pb-4 overflow-hidden bg-gradient-rainbow">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-300/20 to-violet-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-300/15 to-blue-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="content-layer container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <Card className="content-box-enhanced animate-staggered-fade-in p-12 lg:p-16 border-violet-200/50 bg-gradient-to-br from-white/95 via-violet-50/30 to-cyan-50/30 backdrop-blur-lg">
                <CardContent className="p-0 text-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-slate-600 max-w-4xl mx-auto">
                    Building the future of{' '}
                    <span className="font-bold text-gradient-rainbow">decentralized finance</span>{' '}
                    in India
                  </p>
                  <div className="mt-8 pt-6 border-t border-violet-200/30">
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
                      Connecting innovators • Shaping policy • Driving adoption
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="relative py-8 lg:py-12 bg-gradient-sunset overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-rose-300/25 to-pink-300/25 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-fuchsia-300/20 to-purple-300/20 rounded-full blur-2xl animate-bounce-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <Card className="content-box-enhanced animate-staggered-fade-in p-12 lg:p-16 border-rose-200/50 bg-gradient-to-br from-white/90 via-rose-50/40 to-pink-50/30 backdrop-blur-lg shadow-2xl shadow-rose-200/20">
                <CardContent className="p-0 text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gradient-rainbow mb-8">
                    Our Mission
                  </h2>
                  <p className="text-xl md:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto font-light">
                    Empowering India through decentralized finance
                  </p>
                  <div className="mt-8 pt-6 border-t border-rose-200/30">
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
                      A non-profit consortium bridging innovation and regulation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-8 lg:py-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden shadow-colorful">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-200/15 to-blue-200/15 rounded-full blur-2xl animate-spin-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const colors = [
                    { bg: 'from-emerald-400/20 to-teal-400/20', icon: 'text-emerald-600', text: 'text-emerald-700', border: 'border-emerald-200/50' },
                    { bg: 'from-teal-400/20 to-cyan-400/20', icon: 'text-teal-600', text: 'text-teal-700', border: 'border-teal-200/50' },
                    { bg: 'from-cyan-400/20 to-blue-400/20', icon: 'text-cyan-600', text: 'text-cyan-700', border: 'border-cyan-200/50' },
                    { bg: 'from-blue-400/20 to-indigo-400/20', icon: 'text-blue-600', text: 'text-blue-700', border: 'border-blue-200/50' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced text-center animate-staggered-fade-in stagger-${index + 1} animate-card-hover ${color.border} bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500`}
                    >
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <div className={`${color.icon} transform hover:rotate-12 transition-transform duration-300`}>
                            {stat.icon}
                          </div>
                        </div>
                        <div className={`text-2xl lg:text-3xl font-bold ${color.text} mb-2`}>{stat.number}</div>
                        <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Enhanced */}
        <section ref={sectionRef} className="py-12 lg:py-16">
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
                    <p className="body-text text-lg leading-relaxed mb-6">
                      To bridge the knowledge gap between DeFi innovators and policymakers, 
                      advocate for clear and balanced regulatory frameworks, educate stakeholders 
                      through authoritative publications and events, drive cutting‑edge research, 
                      and cultivate a thriving DeFi community in India.
                    </p>
                    <Button variant="outline" className="mt-4 btn-vibrant border-2 border-blue-500 text-blue-700 hover:text-white hover:border-blue-600 shadow-colorful-hover">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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
                    <p className="body-text text-lg leading-relaxed mb-6">
                      A resilient, open, and transparent financial system—built on decentralized 
                      technologies—that empowers every Indian with equitable access to financial 
                      services and economic opportunity.
                    </p>
                    <Button variant="outline" className="mt-4 btn-vibrant border-2 border-purple-500 text-purple-700 hover:text-white hover:border-purple-600 shadow-colorful-hover">
                      Our Strategy <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Resources */}
        <section className="relative py-12 lg:py-16 mt-8 lg:mt-12 bg-gradient-ocean overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-10 right-1/3 w-48 h-48 bg-gradient-to-br from-pink-300/25 to-rose-300/25 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-gradient-rainbow">Learning Hub</h2>
                <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light">
                  Essential resources for your DeFi journey
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-1 border-indigo-200/50 bg-gradient-to-br from-white/90 via-indigo-50/40 to-purple-50/30 backdrop-blur-lg shadow-xl hover:shadow-indigo-200/25">
                  <CardHeader className="pb-4">
                    <div className="w-18 h-18 bg-gradient-to-br from-indigo-400/50 to-blue-500/50 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-colorful">
                      <BookOpen className="w-10 h-10 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent font-bold">Comprehensive DeFi Handbook</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-text text-center text-slate-700">
                      Step‑by‑step guide covering smart contracts, lending, AMMs, governance, and risk management.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-2 border-emerald-200/50 bg-gradient-to-br from-white/90 via-emerald-50/40 to-teal-50/30 backdrop-blur-lg shadow-xl hover:shadow-emerald-200/25">
                  <CardHeader className="pb-4">
                    <div className="w-18 h-18 bg-gradient-to-br from-emerald-400/50 to-teal-500/50 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-colorful">
                      <Globe className="w-10 h-10 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">Interactive DeFi Glossary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-text text-center text-slate-700">
                      Searchable definitions of 100+ core DeFi terms in English, Hindi, and Tamil, with examples and deeper dives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-3 border-violet-200/50 bg-gradient-to-br from-white/90 via-violet-50/40 to-purple-50/30 backdrop-blur-lg shadow-xl hover:shadow-violet-200/25">
                  <CardHeader className="pb-4">
                    <div className="w-18 h-18 bg-gradient-to-br from-violet-400/50 to-purple-500/50 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-colorful">
                      <Play className="w-10 h-10 text-violet-600" />
                    </div>
                    <CardTitle className="text-xl text-center bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-bold">Video Primer: "DeFi Basics"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-text text-center text-slate-700">
                      10‑minute animated explainer introducing concepts, use‑cases, and safety best practices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-heading mb-4">Get Started Today</h2>
                <p className="body-text text-lg">
                  Join the movement to transform India's financial landscape through decentralized finance.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {quickActions.map((action, index) => (
                  <Card 
                    key={index} 
                    className={`content-box-enhanced text-center animate-card-hover animate-staggered-fade-in stagger-${index + 1}`}
                  >
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {action.icon}
                      </div>
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{action.title}</h3>
                      <p className="body-text text-sm mb-6">{action.description}</p>
                      <Button variant={action.variant} className={`w-full ${action.variant === 'default' ? 'btn-vibrant bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-colorful-hover' : 'border-2 border-blue-400 text-blue-700 hover:bg-blue-50 hover:border-blue-500 shadow-colorful-hover'} transform hover:scale-105 transition-all duration-300`}>
                        {action.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Objectives */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/50 to-background/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="content-box-enhanced animate-background-shift animate-staggered-fade-in p-8 lg:p-12">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h2 className="section-heading animate-text-glow mb-4">Our Core Objectives</h2>
                    <p className="body-text text-lg">
                      Six key areas where we're making a meaningful impact on India's DeFi ecosystem.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {objectives.map((objective, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 animate-staggered-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                        <p className="body-text">{objective}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button size="lg" className="btn-vibrant bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-colorful-hover transform hover:scale-105 transition-all duration-300">
                      Learn About Our Work <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/50 to-background/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-heading mb-4 animate-text-glow">Frequently Asked Questions</h2>
                <p className="body-text text-lg max-w-3xl mx-auto">
                  Get answers to common questions about DeFi and the India DeFi Alliance.
                </p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="content-box-enhanced animate-staggered-fade-in overflow-hidden">
                    <div 
                      className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                          openFAQ === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                    {openFAQ === index && (
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-4">
                          {faq.answer.includes('•') ? (
                            <div className="body-text space-y-2">
                              {faq.answer.split('\n').map((line, lineIndex) => (
                                <p key={lineIndex}>{line}</p>
                              ))}
                            </div>
                          ) : (
                            <p className="body-text">{faq.answer}</p>
                          )}
                          {index === faqData.length - 1 && (
                            <div className="mt-4">
                              <Button variant="outline" className="btn-vibrant border-2 border-emerald-500 text-emerald-700 hover:text-white hover:bg-emerald-500 shadow-colorful-hover transform hover:scale-105 transition-all duration-300">
                                Join the Alliance <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="content-box-enhanced animate-pulse-glow p-12 lg:p-16">
                <CardContent className="p-0">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gradient-rainbow mb-6">
                    Ready to Shape India's DeFi Future?
                  </h2>
                  <p className="body-text text-xl mb-8 max-w-2xl mx-auto">
                    Whether you're a developer, regulator, researcher, or enthusiast, 
                    there's a place for you in India's most influential DeFi community.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 py-4 btn-vibrant bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 hover:from-green-600 hover:via-blue-700 hover:to-purple-700 text-white shadow-colorful-hover transform hover:scale-105 transition-all duration-300">
                      <Users className="w-5 h-5 mr-2" />
                      Join the Alliance
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-gradient-to-r border-purple-500 text-purple-700 hover:bg-purple-50 hover:border-purple-600 shadow-colorful-hover transform hover:scale-105 transition-all duration-300">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Get in Touch
                    </Button>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Questions? Contact us at{' '}
                      <a href="mailto:contact@indiadefalliance.org" className="text-primary hover:underline">
                        contact@indiadefalliance.org
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Continuous Updates Carousel */}
        <section className="py-8 bg-primary/5 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Latest Updates</h3>
              <p className="text-sm text-muted-foreground">Stay informed with our newest reports, press releases, and upcoming events</p>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-horizontal space-x-6">
                {/* Reports */}
                <Card className="content-box-enhanced min-w-[300px] cursor-pointer animate-card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className="mb-2 text-xs bg-blue-100 text-blue-800">New Report</Badge>
                        <h4 className="font-semibold text-sm text-primary mb-1 line-clamp-2">
                          DeFi Regulatory Framework for India - White Paper
                        </h4>
                        <p className="text-xs text-muted-foreground">July 25, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Press Release */}
                <Card className="content-box-enhanced min-w-[300px] cursor-pointer animate-card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                        <ExternalLink className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className="mb-2 text-xs bg-green-100 text-green-800">Press Release</Badge>
                        <h4 className="font-semibold text-sm text-primary mb-1 line-clamp-2">
                          India DeFi Alliance Partners with IIT Bombay
                        </h4>
                        <p className="text-xs text-muted-foreground">July 22, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Event */}
                <Card className="content-box-enhanced min-w-[300px] cursor-pointer animate-card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className="mb-2 text-xs bg-purple-100 text-purple-800">Upcoming Event</Badge>
                        <h4 className="font-semibold text-sm text-primary mb-1 line-clamp-2">
                          RBI Roundtable on DeFi Regulation
                        </h4>
                        <p className="text-xs text-muted-foreground">Aug 28, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Report 2 */}
                <Card className="content-box-enhanced min-w-[300px] cursor-pointer animate-card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className="mb-2 text-xs bg-orange-100 text-orange-800">Research</Badge>
                        <h4 className="font-semibold text-sm text-primary mb-1 line-clamp-2">
                          DeFi Security Framework Analysis
                        </h4>
                        <p className="text-xs text-muted-foreground">July 20, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Webinar */}
                <Card className="content-box-enhanced min-w-[300px] cursor-pointer animate-card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                        <Play className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className="mb-2 text-xs bg-teal-100 text-teal-800">Webinar</Badge>
                        <h4 className="font-semibold text-sm text-primary mb-1 line-clamp-2">
                          DeFi Security Best Practices
                        </h4>
                        <p className="text-xs text-muted-foreground">Sep 12, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Event 2 */}
                <Card className="content-box-enhanced min-w-[300px] cursor-pointer animate-card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                        <Award className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className="mb-2 text-xs bg-red-100 text-red-800">Launch Event</Badge>
                        <h4 className="font-semibold text-sm text-primary mb-1 line-clamp-2">
                          Second White Paper Launch
                        </h4>
                        <p className="text-xs text-muted-foreground">Oct 5, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

export default Index;
