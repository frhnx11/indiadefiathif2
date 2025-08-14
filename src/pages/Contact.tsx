import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, MessageCircle, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const emails = [
    { name: "Athif Ahmed", email: "athif.ahmed@indiadefialliance.com" },
    { name: "Reddy Pawan", email: "reddy.pawan@indiadefialliance.com" },
    { name: "Aritra Sarkhel", email: "aritra.sarkhel@indiadefialliance.com" }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-white border-b border-gray-200">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-300/25 to-teal-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          {/* Network Lines Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <path d="M100 250L300 200L500 300L700 150L900 350" stroke="url(#contactGradient1)" strokeWidth="3" opacity="0.6" className="animate-pulse" />
              <path d="M150 450L350 350L550 400L750 250L950 450" stroke="url(#contactGradient2)" strokeWidth="3" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="100" cy="250" r="6" fill="url(#contactNode1)" className="animate-glow-pulse" />
              <circle cx="300" cy="200" r="8" fill="url(#contactNode2)" className="animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="500" cy="300" r="7" fill="url(#contactNode3)" className="animate-glow-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="700" cy="150" r="9" fill="url(#contactNode4)" className="animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
              <defs>
                <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="contactGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="contactNode1"><stop offset="0%" style={{ stopColor: '#3b82f6' }} /></radialGradient>
                <radialGradient id="contactNode2"><stop offset="0%" style={{ stopColor: '#06b6d4' }} /></radialGradient>
                <radialGradient id="contactNode3"><stop offset="0%" style={{ stopColor: '#0891b2' }} /></radialGradient>
                <radialGradient id="contactNode4"><stop offset="0%" style={{ stopColor: '#6366f1' }} /></radialGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Contact Icons */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 animate-float">
              <Mail className="w-12 h-12 text-blue-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <MessageCircle className="w-10 h-10 text-cyan-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <Phone className="w-11 h-11 text-indigo-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <Send className="w-10 h-10 text-teal-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <MapPin className="w-9 h-9 text-blue-300 drop-shadow-lg" />
            </div>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-glow-pulse shadow-lg shadow-blue-400/50"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-cyan-400 rounded-full animate-glow-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-teal-400 rounded-full animate-glow-pulse shadow-lg shadow-teal-400/50" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <span className="text-slate-600 text-sm uppercase tracking-wider font-medium">Get in Touch</span>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  Contact Us
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                Connect with us to explore partnerships and collaborations
              </p>
              
              {/* Contact Options */}
              <div className="flex flex-wrap justify-center gap-6 animate-staggered-fade-in stagger-3">
                <div className="flex items-center gap-2 text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email Us</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-700 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Join Discussion</span>
                </div>
                <div className="flex items-center gap-2 text-teal-700 bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
                  <Send className="w-4 h-4" />
                  <span className="text-sm">Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                      <Mail className="w-10 h-10 text-blue-600" />
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      We'd love to hear from you. Whether you are looking to partner, collaborate or require our support drop us an email - we are here for you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">Email Us</h3>
                      <div className="space-y-3">
                        {emails.map((contact, index) => (
                          <div key={index} className="text-center">
                            <p className="text-sm text-slate-500 mb-1">{contact.name}</p>
                            <a 
                              href={`mailto:${contact.email}`} 
                              className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                              {contact.email}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default Contact;