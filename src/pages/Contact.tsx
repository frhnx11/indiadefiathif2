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
        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900">
          {/* Communication Wave Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <path d="M0,200 Q250,100 500,200 T1000,200" stroke="white" strokeWidth="2" fill="none" opacity="0.3" className="animate-pulse" />
              <path d="M0,250 Q250,150 500,250 T1000,250" stroke="white" strokeWidth="2" fill="none" opacity="0.2" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <path d="M0,150 Q250,50 500,150 T1000,150" stroke="white" strokeWidth="2" fill="none" opacity="0.2" className="animate-pulse" style={{ animationDelay: '2s' }} />
            </svg>
          </div>

          {/* Floating Contact Icons */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-20 animate-float">
              <Mail className="w-8 h-8 text-green-300" />
            </div>
            <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '2s' }}>
              <Phone className="w-8 h-8 text-emerald-300" />
            </div>
            <div className="absolute bottom-28 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
              <MessageCircle className="w-10 h-10 text-teal-300" />
            </div>
            <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
              <MapPin className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <Send className="w-7 h-7 text-emerald-400" />
            </div>
          </div>

          {/* Signal Ripples */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10">
            <div className="absolute inset-0 border-2 border-white rounded-full animate-ping"></div>
            <div className="absolute inset-2 border-2 border-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-4 border-2 border-white rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 animate-staggered-fade-in">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-200 text-sm uppercase tracking-wider font-medium">Let's Connect</span>
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-glow">
                  Get in Touch
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8 animate-staggered-fade-in stagger-2">
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
        <section className="py-12 lg:py-16 bg-gradient-to-r from-background/30 to-background/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index} 
                    className={`content-box-enhanced text-center cursor-pointer animate-card-hover animate-staggered-fade-in stagger-${index + 1}`}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                        {method.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{method.title}</h3>
                      <p className="body-text text-sm mb-3">{method.description}</p>
                      <p className="font-medium text-primary mb-4">{method.contact}</p>
                      <Button variant="outline" size="sm">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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