import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, MessageCircle } from 'lucide-react';

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
        <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-[#1E4B8E] rounded-full"></div>
                  <span className="text-slate-600 text-sm uppercase tracking-wider font-medium">Get in Touch</span>
                  <div className="w-8 h-1 bg-[#2E9E5B] rounded-full"></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  Contact Us
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                Connect with us to explore partnerships and collaborations
              </p>
              
              {/* Contact Options */}
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-[#1E4B8E] bg-[#1E4B8E]/10 px-4 py-2 rounded-full border border-[#1E4B8E]/20">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email Us</span>
                </div>
                <div className="flex items-center gap-2 text-[#2E9E5B] bg-[#2E9E5B]/10 px-4 py-2 rounded-full border border-[#2E9E5B]/20">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Join Discussion</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5A623] bg-[#F5A623]/10 px-4 py-2 rounded-full border border-[#F5A623]/20">
                  <Send className="w-4 h-4" />
                  <span className="text-sm">Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="content-box-enhanced bg-white/95 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-[#1E4B8E]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                      <Mail className="w-10 h-10 text-[#1E4B8E]" />
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
                              className="text-[#1E4B8E] hover:text-[#163a6e] font-medium"
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