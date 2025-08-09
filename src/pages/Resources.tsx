import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Search, Play, Beaker, GraduationCap, Shield, TrendingUp, Languages } from 'lucide-react';

const Resources = () => {
  const educationResources = [
    {
      title: "Comprehensive DeFi Handbook",
      type: "Interactive Guide",
      description: "Step-by-step guide covering smart contracts, lending protocols, automated market makers (AMMs), governance mechanisms, and risk management strategies.",
      modules: ["Smart Contract Basics", "Lending & Borrowing", "AMM Mechanics", "Governance Tokens", "Risk Assessment"],
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Interactive DeFi Glossary",
      type: "Multi-Language Resource",
      description: "Searchable definitions of 100+ core DeFi terms with practical examples and links to deeper educational content. Available in English, Hindi, and Tamil.",
      modules: ["English", "हिंदी (Hindi)", "தமிழ் (Tamil)"],
      icon: <Languages className="w-8 h-8 text-green-600" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Video Primer: DeFi Basics",
      type: "Educational Video Series",
      description: "10-minute animated explainer videos introducing core DeFi concepts, real-world use cases, and essential safety best practices for new users.",
      modules: ["Introduction to DeFi", "Smart Contracts Explained", "Safety Best Practices", "Use Cases", "Getting Started"],
      icon: <Play className="w-8 h-8 text-purple-600" />,
      bgColor: "bg-purple-50",
    },
  ];

  const researchProjects = [
    {
      title: "IIT Bombay DeFi Security Initiative",
      partner: "IIT Bombay",
      status: "Ongoing",
      description: "Collaborative research project focused on identifying and mitigating security vulnerabilities in DeFi protocols through formal verification and advanced testing methodologies.",
      outcomes: ["Security Framework", "Audit Tools", "Best Practices Guide"],
    },
    {
      title: "National DeFi Security Framework",
      partner: "Multiple Universities",
      status: "Phase 2",
      description: "Comprehensive study developing national standards for DeFi security, covering protocol design, audit procedures, and regulatory compliance requirements.",
      outcomes: ["Security Standards", "Regulatory Guidelines", "Implementation Roadmap"],
    },
    {
      title: "Liquidity Aggregation Studies",
      partner: "ISB Hyderabad",
      status: "Completed",
      description: "Research into optimal liquidity aggregation mechanisms for Indian DeFi markets, focusing on efficiency improvements and reduced slippage for users.",
      outcomes: ["Research Paper", "Protocol Recommendations", "Market Analysis"],
    },
    {
      title: "Social Impact Lending Proofs-of-Concept",
      partner: "IIIT Delhi",
      status: "Pilot Phase",
      description: "Experimental programs testing DeFi lending protocols designed specifically for financial inclusion and social impact in underserved communities.",
      outcomes: ["Pilot Results", "Impact Assessment", "Scalability Analysis"],
    },
  ];

  const tutorials = [
    {
      title: "Setting Up Your First DeFi Wallet",
      duration: "15 minutes",
      level: "Beginner",
      description: "Complete walkthrough of wallet setup, security practices, and initial funding.",
    },
    {
      title: "Understanding Yield Farming",
      duration: "25 minutes", 
      level: "Intermediate",
      description: "Deep dive into yield farming strategies, risks, and optimization techniques.",
    },
    {
      title: "DeFi Governance Participation",
      duration: "20 minutes",
      level: "Intermediate",
      description: "How to participate in DAO governance and make informed voting decisions.",
    },
    {
      title: "Advanced DeFi Risk Management",
      duration: "30 minutes",
      level: "Advanced",
      description: "Sophisticated risk assessment and portfolio management strategies.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-amber-600 via-orange-700 to-red-800">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-red-400/15 to-pink-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-orange-300/25 to-amber-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          {/* Floating Educational Icons */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 animate-float">
              <BookOpen className="w-12 h-12 text-yellow-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <Play className="w-10 h-10 text-orange-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <Beaker className="w-11 h-11 text-red-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <GraduationCap className="w-10 h-10 text-yellow-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <Search className="w-9 h-9 text-orange-300 drop-shadow-lg" />
            </div>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-yellow-400 rounded-full animate-glow-pulse shadow-lg shadow-yellow-400/50"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-orange-400 rounded-full animate-glow-pulse shadow-lg shadow-orange-400/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-red-400 rounded-full animate-glow-pulse shadow-lg shadow-red-400/50" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-emerald-400 animate-pulse" />
                  <span className="text-emerald-200 text-sm uppercase tracking-wider font-medium">Knowledge Hub</span>
                  <Search className="w-6 h-6 text-teal-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <h1 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-8 animate-gradient-x leading-relaxed py-2">
                  Knowledge Center
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto mb-8 animate-staggered-fade-in stagger-2 font-light">
                Learn • Research • Innovate
              </p>
              
              {/* Resource Categories */}
              <div className="flex flex-wrap justify-center gap-6 animate-staggered-fade-in stagger-3">
                <div className="flex items-center gap-2 text-emerald-200 bg-emerald-900/30 px-4 py-2 rounded-full">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">Educational Materials</span>
                </div>
                <div className="flex items-center gap-2 text-teal-200 bg-teal-900/30 px-4 py-2 rounded-full">
                  <Beaker className="w-4 h-4" />
                  <span className="text-sm">Active Research</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-200 bg-cyan-900/30 px-4 py-2 rounded-full">
                  <Play className="w-4 h-4" />
                  <span className="text-sm">Video Tutorials</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-12 bg-white/80 backdrop-blur-sm border border-border/50">
                  <TabsTrigger value="education" className="text-lg py-3">Education & Resources</TabsTrigger>
                  <TabsTrigger value="research" className="text-lg py-3">Research & Innovation</TabsTrigger>
                </TabsList>

                {/* Education & Resources Tab */}
                <TabsContent value="education" className="space-y-12">
                  {/* Core Educational Resources */}
                  <div className="relative py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl animate-float"></div>
                      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-8">
                      <h2 className="text-3xl md:text-4xl font-light text-center mb-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Essential Resources</h2>
                      <div className="grid lg:grid-cols-3 gap-8">
                        {educationResources.map((resource, index) => {
                          const colors = [
                            { bg: 'from-blue-400/20 to-indigo-400/20', icon: 'text-blue-600', border: 'border-blue-200/50', shadow: 'hover:shadow-blue-200/25' },
                            { bg: 'from-emerald-400/20 to-green-400/20', icon: 'text-emerald-600', border: 'border-emerald-200/50', shadow: 'hover:shadow-emerald-200/25' },
                            { bg: 'from-purple-400/20 to-violet-400/20', icon: 'text-purple-600', border: 'border-purple-200/50', shadow: 'hover:shadow-purple-200/25' }
                          ];
                          const color = colors[index % colors.length];
                          
                          return (
                            <Card 
                              key={index} 
                              className={`content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-${index + 1} ${color.border} ${color.shadow} bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg shadow-xl transition-all duration-500`}
                            >
                              <CardHeader className="text-center pb-4">
                                <div className={`w-20 h-20 bg-gradient-to-br ${color.bg} rounded-3xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                  {React.cloneElement(resource.icon as React.ReactElement, {
                                    className: `w-10 h-10 ${color.icon}`
                                  })}
                                </div>
                                <Badge variant="secondary" className="mb-3 font-medium">{resource.type}</Badge>
                                <CardTitle className="text-xl font-bold text-slate-700">{resource.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-slate-600 mb-6 leading-relaxed">{resource.description}</p>
                                <div className="space-y-3 mb-6">
                                  <h4 className="font-semibold text-slate-700 text-sm">Modules:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {resource.modules.map((module, idx) => (
                                      <Badge key={idx} variant="outline" className={`text-xs ${color.border.replace('border-', 'border-')} ${color.icon.replace('text-', 'text-')}`}>
                                        {module}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <Button variant="outline" className={`w-full ${color.border.replace('border-', 'border-')} hover:bg-gradient-to-r hover:${color.bg.split(' ')[0].replace('from-', 'from-').replace('/20', '/10')} hover:${color.bg.split(' ')[1].replace('to-', 'to-').replace('/20', '/10')} transition-all duration-300`}>
                                  Explore Now
                                </Button>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Video Tutorials */}
                  <div className="bg-gradient-to-r from-background/30 to-background/50 rounded-2xl p-8 lg:p-12">
                    <h2 className="section-heading text-center mb-8">Video Tutorials</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {tutorials.map((tutorial, index) => (
                        <Card 
                          key={index} 
                          className="content-box-enhanced animate-card-hover animate-staggered-fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                <Play className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="outline" className="text-xs">{tutorial.level}</Badge>
                                  <span className="text-xs text-muted-foreground">{tutorial.duration}</span>
                                </div>
                                <h3 className="font-semibold text-primary mb-2">{tutorial.title}</h3>
                                <p className="body-text text-sm">{tutorial.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Research & Innovation Tab */}
                <TabsContent value="research" className="space-y-12">
                  {/* Research Projects */}
                  <div>
                    <h2 className="section-heading text-center mb-8">Active Research Projects</h2>
                    <div className="space-y-6">
                      {researchProjects.map((project, index) => (
                        <Card 
                          key={index} 
                          className="content-box-enhanced animate-pulse-glow animate-staggered-fade-in"
                          style={{ animationDelay: `${index * 0.15}s` }}
                        >
                          <CardContent className="p-8">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                              <div className="flex items-center gap-4 shrink-0">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                  <Beaker className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                  <Badge 
                                    variant={project.status === 'Completed' ? 'default' : 'secondary'} 
                                    className="mb-2"
                                  >
                                    {project.status}
                                  </Badge>
                                  <p className="text-sm text-muted-foreground">{project.partner}</p>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                                <p className="body-text mb-4">{project.description}</p>
                                <div>
                                  <h4 className="font-semibold text-primary text-sm mb-2">Expected Outcomes:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.outcomes.map((outcome, idx) => (
                                      <Badge key={idx} variant="outline" className="text-xs">
                                        {outcome}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Research Focus Areas */}
                  <div className="bg-gradient-to-r from-background/50 to-background/30 rounded-2xl p-8 lg:p-12">
                    <h2 className="section-heading text-center mb-8">Research Focus Areas</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { icon: <Shield className="w-8 h-8" />, title: "Security & Auditing", color: "text-red-600" },
                        { icon: <TrendingUp className="w-8 h-8" />, title: "Market Dynamics", color: "text-green-600" },
                        { icon: <GraduationCap className="w-8 h-8" />, title: "Education & Adoption", color: "text-blue-600" },
                        { icon: <Search className="w-8 h-8" />, title: "Regulatory Research", color: "text-purple-600" },
                      ].map((area, index) => (
                        <Card 
                          key={index} 
                          className={`content-box-enhanced text-center animate-card-hover animate-staggered-fade-in stagger-${index + 1}`}
                        >
                          <CardContent className="p-6">
                            <div className={`w-12 h-12 mx-auto mb-4 ${area.color}`}>
                              {area.icon}
                            </div>
                            <h3 className="font-semibold text-primary">{area.title}</h3>
                          </CardContent>
                        </Card>
                      ))}
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

export default Resources;