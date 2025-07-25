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
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-900 to-cyan-900">
          {/* Tech Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
                 }}
            ></div>
          </div>

          {/* Floating Code Elements */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-16 left-16 text-emerald-300 font-mono text-lg animate-float">&lt;/&gt;</div>
            <div className="absolute top-24 right-20 text-teal-300 font-mono text-xl animate-float" style={{ animationDelay: '1s' }}>{ }</div>
            <div className="absolute bottom-24 left-1/4 text-cyan-300 font-mono text-lg animate-float" style={{ animationDelay: '3s' }}>[ ]</div>
            <div className="absolute bottom-16 right-1/3 text-emerald-400 font-mono text-2xl animate-float" style={{ animationDelay: '2s' }}>📚</div>
            <div className="absolute top-1/3 right-16 text-teal-400 font-mono text-lg animate-float" style={{ animationDelay: '4s' }}>🔬</div>
          </div>

          {/* Binary Rain Effect */}
          <div className="absolute inset-0 opacity-5 overflow-hidden">
            <div className="absolute top-0 left-1/4 text-emerald-300 font-mono text-xs animate-bounce" style={{ animationDelay: '0.5s' }}>
              1010<br/>0101<br/>1100<br/>0011
            </div>
            <div className="absolute top-0 right-1/4 text-teal-300 font-mono text-xs animate-bounce" style={{ animationDelay: '1.5s' }}>
              1111<br/>0000<br/>1010<br/>0101
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-emerald-400 animate-pulse" />
                  <span className="text-emerald-200 text-sm uppercase tracking-wider font-medium">Knowledge Hub</span>
                  <Search className="w-6 h-6 text-teal-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-glow">
                  Resources & Research
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto mb-8 animate-staggered-fade-in stagger-2">
                Access comprehensive educational materials, cutting-edge research, and practical tools to deepen your understanding of decentralized finance.
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
                  <div>
                    <h2 className="section-heading text-center mb-8">Core Educational Resources</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                      {educationResources.map((resource, index) => (
                        <Card 
                          key={index} 
                          className={`content-box-enhanced h-full animate-card-hover animate-staggered-fade-in stagger-${index + 1}`}
                        >
                          <CardHeader className="text-center pb-4">
                            <div className={`w-16 h-16 ${resource.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                              {resource.icon}
                            </div>
                            <Badge variant="secondary" className="mb-3">{resource.type}</Badge>
                            <CardTitle className="text-xl">{resource.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="body-text mb-6">{resource.description}</p>
                            <div className="space-y-3 mb-6">
                              <h4 className="font-semibold text-primary text-sm">Key Modules:</h4>
                              <div className="flex flex-wrap gap-2">
                                {resource.modules.map((module, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {module}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Button variant="outline" className="w-full">
                              Access Resource
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
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