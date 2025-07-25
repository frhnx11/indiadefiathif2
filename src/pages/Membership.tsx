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
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-violet-800 via-purple-900 to-indigo-900">
          {/* Membership Tier Symbols */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 animate-float">
              <Star className="w-12 h-12 text-violet-300" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <Crown className="w-14 h-14 text-purple-300" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <Users className="w-10 h-10 text-indigo-300" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <Star className="w-8 h-8 text-violet-400" />
            </div>
          </div>

          {/* Connection Network */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1000 600">
              <defs>
                <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                </radialGradient>
              </defs>
              <circle cx="200" cy="150" r="30" fill="url(#nodeGrad)" className="animate-pulse" />
              <circle cx="500" cy="200" r="25" fill="url(#nodeGrad)" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="800" cy="180" r="35" fill="url(#nodeGrad)" className="animate-pulse" style={{ animationDelay: '2s' }} />
              <line x1="200" y1="150" x2="500" y2="200" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="500" y1="200" x2="800" y2="180" stroke="white" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-violet-400 animate-pulse" />
                  <span className="text-violet-200 text-sm uppercase tracking-wider font-medium">Join the Community</span>
                  <Crown className="w-6 h-6 text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-glow">
                  Membership
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto mb-8 animate-staggered-fade-in stagger-2">
                Join India's leading DeFi community and help shape the future of decentralized finance through collaboration, education, and advocacy.
              </p>
              
              {/* Membership Tiers Preview */}
              <div className="flex justify-center gap-8 animate-staggered-fade-in stagger-3">
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-8 h-8 text-violet-300" />
                  </div>
                  <span className="text-sm text-violet-200">Associate</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-8 h-8 text-purple-300" />
                  </div>
                  <span className="text-sm text-purple-200">Full Member</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Crown className="w-8 h-8 text-indigo-300" />
                  </div>
                  <span className="text-sm text-indigo-200">Founding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/30 to-background/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center mb-8">Why Join the Alliance?</h2>
              <Card className="content-box-enhanced animate-staggered-fade-in">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {memberBenefitsOverview.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                        <p className="body-text">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="section-heading text-center mb-12">Membership Tiers</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {membershipTiers.map((tier, index) => (
                  <Card 
                    key={index} 
                    className={`relative h-full content-box-enhanced animate-card-hover animate-staggered-fade-in ${tier.color} border-2 stagger-${index + 1}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-600 text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                        {tier.icon}
                      </div>
                      <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary mt-2">{tier.price}</div>
                      <p className="body-text text-sm mt-3">{tier.description}</p>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <div className="space-y-4 mb-6">
                        <h4 className="font-semibold text-primary">Included Benefits:</h4>
                        <ul className="space-y-2">
                          {tier.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                              <span className="body-text text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {tier.limitations.length > 0 && (
                        <div className="space-y-4 mb-6">
                          <h4 className="font-semibold text-muted-foreground text-sm">Limitations:</h4>
                          <ul className="space-y-2">
                            {tier.limitations.map((limitation, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5">•</span>
                                <span className="body-text text-sm text-muted-foreground">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Button 
                        className={`w-full ${tier.buttonColor} text-white`}
                        size="lg"
                      >
                        {tier.price === "Free" ? "Join Now" : "Apply Now"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/50 to-background/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center mb-12">How to Apply</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applicationSteps.map((step, index) => (
                  <Card 
                    key={index} 
                    className={`content-box-enhanced text-center h-full animate-card-hover animate-staggered-fade-in stagger-${index + 1}`}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                      <p className="body-text text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
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
                ].map((faq, index) => (
                  <Card 
                    key={index} 
                    className="content-box-enhanced animate-card-hover animate-staggered-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                      <p className="body-text">{faq.answer}</p>
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

export default Membership;