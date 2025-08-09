import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Mail, Phone, Twitter, Linkedin, MessageCircle, Send, Clock, Users } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      description: "Send us your questions or feedback",
      contact: "contact@indiadefalliance.org",
      action: "Send Email",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Call Us", 
      description: "Speak directly with our team",
      contact: "+91 80-1234-5678",
      action: "Call Now",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-600" />,
      title: "Join Our Community",
      description: "Connect with us on Telegram",
      contact: "@IndiaDefiAlliance",
      action: "Join Channel",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-400/15 to-rose-400/15 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-violet-300/25 to-indigo-300/25 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          {/* Communication Wave Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <path d="M0,200 Q250,100 500,200 T1000,200" stroke="url(#waveGradient1)" strokeWidth="3" fill="none" opacity="0.6" className="animate-pulse" />
              <path d="M0,250 Q250,150 500,250 T1000,250" stroke="url(#waveGradient2)" strokeWidth="3" fill="none" opacity="0.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <path d="M0,150 Q250,50 500,150 T1000,150" stroke="url(#waveGradient3)" strokeWidth="3" fill="none" opacity="0.4" className="animate-pulse" style={{ animationDelay: '2s' }} />
              <defs>
                <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Contact Icons */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 animate-float">
              <Mail className="w-10 h-10 text-cyan-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <Phone className="w-10 h-10 text-emerald-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <MessageCircle className="w-12 h-12 text-pink-300 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <MapPin className="w-10 h-10 text-yellow-300 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <Send className="w-9 h-9 text-teal-300 drop-shadow-lg" />
            </div>
          </div>

          {/* Signal Ripples */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20">
            <div className="absolute inset-0 border-2 border-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping"></div>
            <div className="absolute inset-2 border-2 border-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-4 border-2 border-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-cyan-400 rounded-full animate-glow-pulse shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-pink-400 rounded-full animate-glow-pulse shadow-lg shadow-pink-400/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-glow-pulse shadow-lg shadow-yellow-400/50" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-200 text-sm uppercase tracking-wider font-medium">Let's Connect</span>
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent mb-8 animate-gradient-x leading-relaxed py-2">
                  Get in Touch
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8 animate-staggered-fade-in stagger-2">
                Questions, partnership inquiries, or media requests? We'd love to hear from you. Let's work together to advance DeFi in India.
              </p>
              
              {/* Contact Methods Preview */}
              <div className="flex flex-wrap justify-center gap-6 animate-staggered-fade-in stagger-3">
                <div className="flex items-center gap-2 text-green-200">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email Us</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-200">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Call Direct</span>
                </div>
                <div className="flex items-center gap-2 text-teal-200">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Live Chat</span>
                </div>
                <div className="flex items-center gap-2 text-green-200">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Visit Office</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-300/15 to-indigo-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => {
                  const colors = [
                    { bg: 'from-blue-400/20 to-cyan-400/20', icon: 'bg-blue-500', text: 'text-blue-700', border: 'border-blue-200/50', shadow: 'hover:shadow-blue-200/25' },
                    { bg: 'from-emerald-400/20 to-green-400/20', icon: 'bg-emerald-500', text: 'text-emerald-700', border: 'border-emerald-200/50', shadow: 'hover:shadow-emerald-200/25' },
                    { bg: 'from-purple-400/20 to-violet-400/20', icon: 'bg-purple-500', text: 'text-purple-700', border: 'border-purple-200/50', shadow: 'hover:shadow-purple-200/25' }
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Card 
                      key={index} 
                      className={`content-box-enhanced text-center cursor-pointer animate-card-hover animate-staggered-fade-in stagger-${index + 1} ${color.border} ${color.shadow} bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg shadow-xl transition-all duration-500 hover:scale-105`}
                    >
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 mx-auto mb-6 ${color.icon} rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                          {React.cloneElement(method.icon as React.ReactElement, {
                            className: 'w-8 h-8 text-white'
                          })}
                        </div>
                        <h3 className={`text-lg font-bold ${color.text} mb-3`}>{method.title}</h3>
                        <p className="body-text text-sm mb-4 text-slate-600">{method.description}</p>
                        <p className={`font-semibold ${color.text} mb-6`}>{method.contact}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className={`${color.border.replace('border-', 'border-')} hover:bg-gradient-to-r hover:${color.bg.split(' ')[0].replace('from-', 'from-').replace('/20', '/10')} hover:${color.bg.split(' ')[1].replace('to-', 'to-').replace('/20', '/10')} transition-all duration-300`}
                        >
                          {method.action}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="content-box-enhanced animate-staggered-fade-in">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input id="organization" placeholder="Your company or institution" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="membership">Membership Question</SelectItem>
                            <SelectItem value="partnership">Partnership Proposal</SelectItem>
                            <SelectItem value="media">Media Request</SelectItem>
                            <SelectItem value="research">Research Collaboration</SelectItem>
                            <SelectItem value="policy">Policy Discussion</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your inquiry, partnership idea, or how we can help you..."
                          rows={6}
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Office Info & Social */}
                <div className="space-y-8">
                  {/* Office Information */}
                  <Card className="content-box-enhanced animate-staggered-fade-in stagger-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Office & Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Headquarters</h4>
                          <p className="body-text">
                            123 Blockchain Lane<br />
                            Koramangala, Bengaluru 560001<br />
                            Karnataka, India
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Office Hours: Mon-Fri, 9:00 AM - 6:00 PM IST</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Social Media */}
                  <Card className="content-box-enhanced animate-staggered-fade-in stagger-3">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Connect With Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="body-text text-sm">
                          Follow us on social media for the latest updates, insights, and community discussions.
                        </p>
                        <div className="flex gap-4">
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Twitter className="w-4 h-4" />
                            Twitter
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Telegram
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Response Info */}
                  <Card className="content-box-enhanced animate-background-shift animate-staggered-fade-in stagger-4 bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-primary mb-3">Response Times</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>General Inquiries:</span>
                          <span className="font-medium">24-48 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Partnership Requests:</span>
                          <span className="font-medium">3-5 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Media Requests:</span>
                          <span className="font-medium">Same day</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Technical Support:</span>
                          <span className="font-medium">1-2 business days</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/50 to-background/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center mb-8">Common Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "How can I schedule a meeting with your team?",
                    answer: "For meeting requests, please use our contact form and select 'Partnership Proposal' or 'General Inquiry'. We'll respond within 24-48 hours to schedule a convenient time.",
                  },
                  {
                    question: "Do you offer consulting services?",
                    answer: "Yes, we provide custom research and consulting services for Founding Members. For non-members, we offer limited consulting on a case-by-case basis.",
                  },
                  {
                    question: "How can I contribute to your research?",
                    answer: "We welcome research collaborations! Please contact us with your research proposal, background, and how it aligns with our mission.",
                  },
                  {
                    question: "Can I visit your office?",
                    answer: "Office visits are welcome but require prior appointment. Please contact us at least 48 hours in advance to schedule your visit.",
                  },
                ].map((faq, index) => (
                  <Card 
                    key={index} 
                    className="content-box-enhanced h-full animate-card-hover animate-staggered-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-primary mb-3">{faq.question}</h3>
                      <p className="body-text text-sm">{faq.answer}</p>
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

export default Contact;