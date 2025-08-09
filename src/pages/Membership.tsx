import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Users, ArrowRight } from 'lucide-react';

const Membership = () => {
  const membershipTiers = [
    {
      name: "Associate Member",
      price: "Free",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: "border-blue-200 bg-blue-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false,
      description: "Perfect for DeFi enthusiasts and learners who want to stay connected with the community.",
      benefits: [
        "Monthly newsletter with latest DeFi insights",
        "Access to community forum and discussions",
        "Invitations to public webinars and events",
        "Basic educational resources and glossary",
        "Networking opportunities with fellow members",
      ],
      limitations: [
        "Limited access to premium research reports",
        "No early access to exclusive events",
        "Standard support response time",
      ],
    },
    {
      name: "Full Member", 
      price: "₹5,000/year",
      icon: <Star className="w-8 h-8 text-purple-600" />,
      color: "border-purple-200 bg-purple-50",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true,
      description: "Ideal for professionals and organizations actively working in the DeFi space.",
      benefits: [
        "All Associate Member benefits",
        "Early preview access to research reports and white papers",
        "Discounted rates for premium events and workshops",
        "Quarterly member-only networking sessions",
        "Access to policy working groups",
        "Priority customer support",
        "Comprehensive DeFi handbook and resources",
        "Direct communication channels with alliance leadership",
      ],
      limitations: [
        "Limited advisory board access",
        "No exclusive regulatory briefings",
      ],
    },
    {
      name: "Founding Member",
      price: "₹25,000/year",
      icon: <Crown className="w-8 h-8 text-gold-600" />,
      color: "border-yellow-200 bg-yellow-50", 
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      popular: false,
      description: "Exclusive tier for industry leaders who want to shape the future of DeFi in India.",
      benefits: [
        "All Full Member benefits",
        "Advisory board participation and voting rights",
        "Access to exclusive regulatory briefings and policy discussions",
        "Direct access to premium research and market intelligence",
        "Invitation to private roundtables with regulators and policymakers",
        "Co-branding opportunities on alliance publications",
        "Dedicated relationship manager",
        "Custom research and consulting services",
        "VIP access to all alliance events",
        "Annual strategy session participation",
      ],
      limitations: [],
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Choose Your Tier",
      description: "Select the membership tier that best fits your needs and goals.",
    },
    {
      step: 2,
      title: "Complete Application",
      description: "Fill out our comprehensive membership application form with your details and interests.",
    },
    {
      step: 3,
      title: "Review Process",
      description: "Our team will review your application and may schedule a brief call for premium tiers.",
    },
    {
      step: 4,
      title: "Welcome to the Alliance",
      description: "Upon approval, you'll receive your welcome package and access to member benefits.",
    },
  ];

  const memberBenefitsOverview = [
    "Exclusive access to cutting-edge DeFi research and analysis",
    "Networking opportunities with industry leaders and regulators", 
    "Educational resources and professional development programs",
    "Influence on policy advocacy and regulatory framework development",
    "Early insights into market trends and regulatory changes",
    "Community support and collaboration opportunities",
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-teal-400/15 to-cyan-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-300/25 to-teal-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          {/* Membership Tier Symbols */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 animate-float">
              <Star className="w-12 h-12 text-emerald-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <Crown className="w-14 h-14 text-yellow-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <Users className="w-10 h-10 text-teal-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <Star className="w-8 h-8 text-cyan-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <Check className="w-9 h-9 text-green-300 drop-shadow-lg" />
            </div>
          </div>

          {/* Community Connection Network */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <path d="M100 200L300 150L500 250L700 100L900 300" stroke="url(#memberGradient1)" strokeWidth="3" opacity="0.6" className="animate-pulse" />
              <path d="M150 400L350 300L550 450L750 200L950 500" stroke="url(#memberGradient2)" strokeWidth="3" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="100" cy="200" r="8" fill="url(#nodeGrad1)" className="animate-glow-pulse" />
              <circle cx="300" cy="150" r="6" fill="url(#nodeGrad2)" className="animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="500" cy="250" r="7" fill="url(#nodeGrad3)" className="animate-glow-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="700" cy="100" r="9" fill="url(#nodeGrad4)" className="animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
              <defs>
                <linearGradient id="memberGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="memberGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="nodeGrad1"><stop offset="0%" style={{ stopColor: '#10b981' }} /></radialGradient>
                <radialGradient id="nodeGrad2"><stop offset="0%" style={{ stopColor: '#06b6d4' }} /></radialGradient>
                <radialGradient id="nodeGrad3"><stop offset="0%" style={{ stopColor: '#0891b2' }} /></radialGradient>
                <radialGradient id="nodeGrad4"><stop offset="0%" style={{ stopColor: '#f59e0b' }} /></radialGradient>
              </defs>
            </svg>
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
                  <span className="text-emerald-200 text-sm uppercase tracking-wider font-medium">Join the Community</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent mb-8 animate-gradient-x leading-relaxed py-2">
                  Membership
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto mb-8 animate-staggered-fade-in stagger-2 font-light">
                Shape the future of decentralized finance through collaboration, education, and advocacy
              </p>
              
              {/* Membership Tiers Preview */}
              <div className="flex flex-wrap justify-center gap-6 animate-staggered-fade-in stagger-3">
                <div className="flex items-center gap-2 text-emerald-200 bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-700/30">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Associate Member</span>
                </div>
                <div className="flex items-center gap-2 text-teal-200 bg-teal-900/30 px-4 py-2 rounded-full border border-teal-700/30">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">Full Member</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-200 bg-yellow-900/30 px-4 py-2 rounded-full border border-yellow-700/30">
                  <Crown className="w-4 h-4" />
                  <span className="text-sm">Founding Member</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Why Join the Alliance?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {memberBenefitsOverview.map((benefit, index) => {
                  const colors = [
                    { bg: 'from-emerald-400/15 to-green-400/15', icon: 'text-emerald-600', border: 'border-emerald-200/50' },
                    { bg: 'from-blue-400/15 to-cyan-400/15', icon: 'text-blue-600', border: 'border-blue-200/50' },
                    { bg: 'from-purple-400/15 to-violet-400/15', icon: 'text-purple-600', border: 'border-purple-200/50' },
                    { bg: 'from-orange-400/15 to-red-400/15', icon: 'text-orange-600', border: 'border-orange-200/50' },
                    { bg: 'from-indigo-400/15 to-blue-400/15', icon: 'text-indigo-600', border: 'border-indigo-200/50' },
                    { bg: 'from-teal-400/15 to-cyan-400/15', icon: 'text-teal-600', border: 'border-teal-200/50' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced animate-card-hover animate-staggered-fade-in stagger-${index + 1} ${color.border} bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                            <Check className={`w-6 h-6 ${color.icon}`} />
                          </div>
                          <p className="text-slate-700 leading-relaxed font-light">{benefit}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300/15 to-yellow-300/15 rounded-full blur-2xl animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-300/10 to-orange-300/10 rounded-full blur-xl animate-float"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 bg-gradient-to-r from-rose-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">Membership Tiers</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {membershipTiers.map((tier, index) => {
                  const colorSchemes = [
                    { 
                      bg: 'from-blue-400/20 to-cyan-400/20', 
                      border: 'border-blue-200/50', 
                      icon: 'text-blue-600', 
                      iconBg: 'bg-gradient-to-br from-blue-400/20 to-cyan-400/20',
                      title: 'text-blue-700',
                      price: 'text-blue-800',
                      button: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
                      popular: 'bg-gradient-to-r from-blue-500 to-cyan-500'
                    },
                    { 
                      bg: 'from-purple-400/20 to-violet-400/20', 
                      border: 'border-purple-200/50', 
                      icon: 'text-purple-600', 
                      iconBg: 'bg-gradient-to-br from-purple-400/20 to-violet-400/20',
                      title: 'text-purple-700',
                      price: 'text-purple-800',
                      button: 'bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600',
                      popular: 'bg-gradient-to-r from-purple-500 to-violet-500'
                    },
                    { 
                      bg: 'from-amber-400/20 to-yellow-400/20', 
                      border: 'border-amber-200/50', 
                      icon: 'text-amber-600', 
                      iconBg: 'bg-gradient-to-br from-amber-400/20 to-yellow-400/20',
                      title: 'text-amber-700',
                      price: 'text-amber-800',
                      button: 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600',
                      popular: 'bg-gradient-to-r from-amber-500 to-yellow-500'
                    }
                  ];
                  const colors = colorSchemes[index];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`relative h-full content-box-enhanced animate-card-hover animate-staggered-fade-in stagger-${index + 1} ${colors.border} bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                    >
                      <CardHeader className="text-center pb-6 p-8">
                        <div className={`w-20 h-20 mx-auto mb-6 ${colors.iconBg} rounded-3xl flex items-center justify-center shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                          {React.cloneElement(tier.icon as React.ReactElement, {
                            className: `w-10 h-10 ${colors.icon}`
                          })}
                        </div>
                        <CardTitle className={`text-2xl font-bold ${colors.title} mb-3`}>{tier.name}</CardTitle>
                        <div className={`text-3xl md:text-4xl font-bold ${colors.price} mb-4`}>{tier.price}</div>
                        <p className="text-slate-600 leading-relaxed font-light">{tier.description}</p>
                      </CardHeader>
                      <CardContent className="px-8 pb-8">
                        <div className="space-y-6 mb-8">
                          <h4 className={`font-bold ${colors.title} text-lg`}>What's Included:</h4>
                          <ul className="space-y-3">
                            {tier.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-5 h-5 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 text-emerald-600" />
                                </div>
                                <span className="text-slate-700 text-sm leading-relaxed font-light">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {tier.limitations.length > 0 && (
                          <div className="space-y-4 mb-8">
                            <h4 className="font-semibold text-slate-500 text-sm">Limitations:</h4>
                            <ul className="space-y-2">
                              {tier.limitations.map((limitation, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="w-2 h-2 bg-slate-300 rounded-full shrink-0 mt-2"></span>
                                  <span className="text-slate-500 text-sm leading-relaxed font-light">{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <Button 
                          className={`w-full ${colors.button} text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium`}
                          size="lg"
                        >
                          {tier.price === "Free" ? "Join Now" : "Apply Now"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-teal-300/15 to-cyan-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">How to Apply</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {applicationSteps.map((step, index) => {
                  const colors = [
                    { bg: 'from-green-400/20 to-emerald-400/20', icon: 'text-green-600', number: 'bg-gradient-to-r from-green-500 to-emerald-500', border: 'border-green-200/50' },
                    { bg: 'from-emerald-400/20 to-teal-400/20', icon: 'text-emerald-600', number: 'bg-gradient-to-r from-emerald-500 to-teal-500', border: 'border-emerald-200/50' },
                    { bg: 'from-teal-400/20 to-cyan-400/20', icon: 'text-teal-600', number: 'bg-gradient-to-r from-teal-500 to-cyan-500', border: 'border-teal-200/50' },
                    { bg: 'from-cyan-400/20 to-blue-400/20', icon: 'text-cyan-600', number: 'bg-gradient-to-r from-cyan-500 to-blue-500', border: 'border-cyan-200/50' }
                  ];
                  const color = colors[index];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced text-center h-full animate-card-hover animate-staggered-fade-in stagger-${index + 1} ${color.border} bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500`}
                    >
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 ${color.number} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                          {step.step}
                        </div>
                        <h3 className={`text-lg font-bold ${color.icon} mb-4`}>{step.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-light">{step.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-8">
                  Start Your Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 bg-gradient-to-r from-slate-600 via-gray-600 to-slate-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "Who can become a member of the India DeFi Alliance?",
                    answer: "Our membership is open to DeFi protocol architects, financial institutions, regulators, legal experts, academics, researchers, entrepreneurs, and curious enthusiasts who are interested in advancing the DeFi ecosystem in India.",
                  },
                  {
                    question: "What is the difference between membership tiers?",
                    answer: "Associate membership is free and provides basic access to our community and resources. Full membership offers enhanced benefits including early access to research and discounted events. Founding membership provides the highest level of access with advisory board participation and exclusive regulatory briefings.",
                  },
                  {
                    question: "How long does the application process take?",
                    answer: "Associate membership applications are typically approved within 24-48 hours. Full and Founding membership applications may take 5-7 business days as they include a more comprehensive review process and may require a brief call with our team.",
                  },
                  {
                    question: "Can I upgrade my membership tier later?",
                    answer: "Yes, you can upgrade your membership tier at any time. The price difference will be prorated based on your remaining membership period, and you'll gain immediate access to the enhanced benefits of your new tier.",
                  },
                ].map((faq, index) => {
                  const colors = [
                    { border: 'border-indigo-200/50', title: 'text-indigo-700' },
                    { border: 'border-purple-200/50', title: 'text-purple-700' },
                    { border: 'border-pink-200/50', title: 'text-pink-700' },
                    { border: 'border-rose-200/50', title: 'text-rose-700' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced animate-card-hover animate-staggered-fade-in ${color.border} bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-8">
                        <h3 className={`text-lg font-bold ${color.title} mb-4 leading-tight`}>{faq.question}</h3>
                        <p className="text-slate-600 leading-relaxed font-light">{faq.answer}</p>
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

export default Membership;