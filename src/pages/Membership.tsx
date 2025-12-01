import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Globe, Shield, Rocket, Users, Code } from 'lucide-react';

const Membership = () => {
  const whyJoinReasons = [
    {
      title: "Shape the Future of Finance",
      description: "Join a movement redefining India's financial landscape through open, transparent, and inclusive systems.",
      icon: <Rocket className="w-8 h-8 text-[#1E4B8E]" />
    },
    {
      title: "Bridge Innovation and Policy",
      description: "Collaborate with builders, thinkers, and regulators to turn visionary ideas into impactful policy and practice.",
      icon: <Globe className="w-8 h-8 text-[#2E9E5B]" />
    },
    {
      title: "Lead Global Standards from India",
      description: "Help set benchmarks for responsible decentralization and financial inclusion that influence the world.",
      icon: <Shield className="w-8 h-8 text-[#F5A623]" />
    },
    {
      title: "Build for Everyone",
      description: "Ensure the next chapter of finance is accessible, fair, and resilient — leaving no one behind.",
      icon: <Users className="w-8 h-8 text-orange-600" />
    }
  ];

  const personas = [
    {
      title: "For the Contrarian Builder",
      subtitle: "Help Us fix India's Trillion-Dollar Mistake",
      content: "For years, the smart money has written off India's crypto scene as a regulatory nightmare. They're not wrong. But they're also missing the point. India has the best developers on the planet, and they are building the future for everyone else. We're creating an alliance to end this absurdity. The goal is simple: fix the policy, unleash the talent, and capture the trillion-dollar opportunity everyone is too scared to touch. This is a call for builders and backers, not talkers. Are you in?",
      icon: <Code className="w-12 h-12 text-[#1E4B8E]" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "For the Geopolitical Strategist",
      subtitle: "India's Choice: Digital Colony or Network State?",
      content: "A nation of 1.4 billion people is at a crossroads. Path one is the status quo: a digital colony, using financial protocols built and controlled by other nations. Path two is technological sovereignty. We are forming the Indian DeFi Alliance to force the choice for path two. This isn't just about business; it's about architecting the future of a subcontinent and ensuring it isn't a passive rule-taker in the Internet of Value. We are assembling the people who understand the stakes. Your voice is needed. Are you in?",
      icon: <Globe className="w-12 h-12 text-[#2E9E5B]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "For the Hard-Nosed VC",
      subtitle: "This is the Biggest Asymmetric Bet in Crypto Right Now",
      content: "The market has priced in India's policy chaos. That's the opportunity. We have the talent and the user base, but a self-inflicted \"Innovation Tax\" is strangling growth. The Indian DeFi Alliance is being formed to eliminate that tax. This is the ground floor of influencing the rules for a future trillion-dollar market. For a small contribution of capital and credibility, the upside is shaping the regulatory alpha for the next decade. This is the most asymmetric bet available in the ecosystem today. Let's talk.",
      icon: <Rocket className="w-12 h-12 text-[#F5A623]" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "For the Visionary Founder",
      subtitle: "The Talent is Here. The Rules are meant to be broken.",
      content: "Capital is a coward and talent seeks freedom. Right now, India is offering neither. Our policy is actively pushing the world's best developers—our developers—to Dubai and Singapore. It's a catastrophic, self-inflicted wound. The Indian DeFi Alliance is a focused insurgency to reverse this. We are uniting the ecosystem to demand clarity and build a sovereign financial future. We need the world's most respected founders to stand with us and show our government what real innovation looks like.",
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      bgColor: "bg-orange-50"
    },
    {
      title: "For the Libertarian Technologist",
      subtitle: "Permissionless Leverage for a Billion People",
      content: "The state cannot stop math. DeFi is creating capital leverage for the individual, and a nation of a billion people will inevitably seize it. The only question is whether they do it offshore, in the shadows, or onshore, in a system that fosters open innovation. We are building the Indian DeFi Alliance to advocate for the latter. This is about ensuring the principles of open protocols and user sovereignty become the foundation of India's next economy. We need thinkers like you to help us make the case.",
      icon: <Users className="w-12 h-12 text-red-600" />,
      bgColor: "bg-red-50"
    }
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
                  <span className="text-slate-600 text-sm uppercase tracking-wider font-medium">Join the Alliance</span>
                  <div className="w-8 h-1 bg-[#2E9E5B] rounded-full"></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  Why Join Us
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                Be part of the movement that's shaping India's decentralized financial future
              </p>

              {/* Member Benefits */}
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-[#1E4B8E] bg-[#1E4B8E]/10 px-4 py-2 rounded-full border border-[#1E4B8E]/20">
                  <Rocket className="w-4 h-4" />
                  <span className="text-sm">Shape Policy</span>
                </div>
                <div className="flex items-center gap-2 text-[#2E9E5B] bg-[#2E9E5B]/10 px-4 py-2 rounded-full border border-[#2E9E5B]/20">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Build Networks</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5A623] bg-[#F5A623]/10 px-4 py-2 rounded-full border border-[#F5A623]/20">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Lead Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Section - Why Join */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {whyJoinReasons.map((reason, index) => (
                  <Card key={index} className="content-box-enhanced bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                        {reason.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{reason.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - Personas */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Find Your Path</h2>
              <div className="space-y-8">
                {personas.map((persona, index) => (
                  <Card key={index} className={`${persona.bgColor} content-box-enhanced hover:shadow-xl transition-all duration-300`}>
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/4 p-8 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                          {persona.icon}
                        </div>
                      </div>
                      <div className="lg:w-3/4 p-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{persona.title}</h3>
                        <h4 className="text-lg font-semibold text-slate-700 mb-4">{persona.subtitle}</h4>
                        <p className="text-slate-600 leading-relaxed mb-6">{persona.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1E4B8E]">Ready to Join the Alliance?</h2>
              <p className="text-xl mb-8 text-slate-600">
                Be part of India's DeFi revolution and help shape the future of finance
              </p>
              <Button
                size="lg"
                className="bg-[#2E9E5B] hover:bg-[#257a48] text-white font-semibold px-8 py-6 text-lg"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSduy4NyNRcuivBY89H75z9ks8d6G6tlhDnpErxiTPS1_eHg3g/viewform', '_blank')}
              >
                Join Here
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
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
