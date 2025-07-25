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
  MessageCircle
} from 'lucide-react';

const Index = () => {
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

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        
        {/* Introduction Section */}
        <section className="relative py-12 lg:py-16 pb-4 overflow-hidden">
          <div className="content-layer container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card className="content-box-enhanced animate-staggered-fade-in p-8 lg:p-12">
                <CardContent className="p-0 text-center">
                  <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium text-muted-foreground max-w-5xl mx-auto">
                    At the forefront of the DeFi revolution, the{' '}
                    <span className="font-semibold text-gradient">India DeFi Alliance</span>{' '}
                    connects innovators, regulators, and institutions to co-create a{' '}
                    <span className="font-semibold text-blue-600">secure</span>,{' '}
                    <span className="font-semibold text-green-600">inclusive</span>, and{' '}
                    <span className="font-semibold text-purple-600">transparent</span>{' '}
                    financial ecosystem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card className="content-box-enhanced animate-staggered-fade-in p-8 lg:p-12">
                <CardContent className="p-0 text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 animate-text-glow">
                    Who We Are & Why DeFi Matters
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">
                    India DeFi Alliance is a non‑profit consortium of industry leaders, regulators, and academics 
                    committed to harnessing blockchain‑based financial innovations to empower millions and foster 
                    economic inclusion across India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className={`content-box-enhanced text-center animate-staggered-fade-in stagger-${index + 1} animate-card-hover`}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
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
                    <Button variant="outline" className="mt-4">
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
                    <Button variant="outline" className="mt-4">
                      Our Strategy <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Resources */}
        <section className="py-12 lg:py-16 mt-8 lg:mt-12 bg-gradient-to-r from-background/30 to-background/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-heading mb-4 animate-text-glow">Key Resources</h2>
                <p className="body-text text-lg max-w-3xl mx-auto">
                  Comprehensive educational materials and tools to help you understand and navigate the DeFi ecosystem.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-1">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-center">Comprehensive DeFi Handbook</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-text text-center">
                      Step‑by‑step guide covering smart contracts, lending, AMMs, governance, and risk management.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-2">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-center">Interactive DeFi Glossary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-text text-center">
                      Searchable definitions of 100+ core DeFi terms in English, Hindi, and Tamil, with examples and deeper dives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-3">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl text-center">Video Primer: "DeFi Basics"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-text text-center">
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
                      <h3 className="text-lg font-semibold text-primary mb-2">{action.title}</h3>
                      <p className="body-text text-sm mb-6">{action.description}</p>
                      <Button variant={action.variant} className="w-full">
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
                    <Button size="lg">
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-heading mb-4 animate-text-glow">Frequently Asked Questions</h2>
                <p className="body-text text-lg max-w-3xl mx-auto">
                  Get answers to common questions about DeFi and the India DeFi Alliance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="content-box-enhanced animate-staggered-fade-in stagger-1">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">What is DeFi?</h3>
                    <p className="body-text">
                      Decentralized Finance (DeFi) is an open, blockchain‑based system of financial protocols 
                      and applications that lets anyone lend, borrow, trade, and earn yield—without traditional intermediaries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced animate-staggered-fade-in stagger-2">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">What are the benefits of DeFi?</h3>
                    <ul className="body-text space-y-2">
                      <li>• Financial Freedom: Access banking‑like services from anywhere.</li>
                      <li>• Crystal‑Clear Transparency: Every transaction and smart contract is on‑chain and auditable.</li>
                      <li>• Programmable Money: Automate loans, swaps, staking—no middlemen, just code.</li>
                      <li>• Composable Innovation: Mix 'n' match protocols to invent entirely new products.</li>
                      <li>• Lean & Mean: Peer‑to‑peer transactions slash fees.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced animate-staggered-fade-in stagger-3">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">Why does DeFi challenge traditional regulation?</h3>
                    <p className="body-text">
                      Instead of a single bank or broker, DeFi runs on global, permissionless code. 
                      Regulators must shift from entity‑centric rules to overseeing open, self‑enforcing protocols.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced animate-staggered-fade-in stagger-4">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">What is DeFi not?</h3>
                    <ul className="body-text space-y-2">
                      <li>• Not a centralized service "hosted" on blockchain.</li>
                      <li>• Not pure token gambling—real utility underpins the protocols.</li>
                      <li>• Not lawless: smart contracts encode governance and safety checks.</li>
                      <li>• Not a magic bullet for all financial woes.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced animate-staggered-fade-in stagger-5">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">Why is India unique to the DeFi ecosystem?</h3>
                    <p className="body-text">
                      India has the most foreign remittance inflows globally, creating massive opportunities for 
                      DeFi to provide more efficient cross-border payment solutions and financial inclusion.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced animate-staggered-fade-in stagger-6">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">What does India DeFi Alliance aim to achieve?</h3>
                    <p className="body-text">
                      Bridge gaps between builders and policy‑makers—advocating clear rules, publishing playbooks, 
                      hosting roundtables, and equipping every Indian to harness DeFi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced animate-staggered-fade-in stagger-7">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">How will we achieve these aims?</h3>
                    <ul className="body-text space-y-2">
                      <li>• White Papers & Memos: Actionable policy blueprints.</li>
                      <li>• Roundtables & Webinars: Direct dialogue with regulators.</li>
                      <li>• Academic Partnerships: Cutting‑edge research with IITs and universities.</li>
                      <li>• Hands‑On Toolkits: Interactive handbooks, glossaries, video primers.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced animate-staggered-fade-in stagger-8">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">Who are our members?</h3>
                    <p className="body-text">
                      From DeFi protocol architects and financial institutions to regulators, legal experts, 
                      academics, and curious enthusiasts—organized into Founding, Full, and Associate tiers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-box-enhanced animate-staggered-fade-in stagger-9 md:col-span-2">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">How can I join?</h3>
                    <p className="body-text mb-4">
                      Click "Join the Alliance," pick your tier, fill out a 1‑minute form—and instantly unlock 
                      premium reports, event invites, and working‑group seats.
                    </p>
                    <Button variant="outline">
                      Join the Alliance <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
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
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 animate-text-glow">
                    Ready to Shape India's DeFi Future?
                  </h2>
                  <p className="body-text text-xl mb-8 max-w-2xl mx-auto">
                    Whether you're a developer, regulator, researcher, or enthusiast, 
                    there's a place for you in India's most influential DeFi community.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 py-4">
                      <Users className="w-5 h-5 mr-2" />
                      Join the Alliance
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
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
