import React from 'react';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">IDA</span>
                </div>
                <span className="text-xl font-bold">India DeFi Alliance</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Building a secure, inclusive, and transparent financial ecosystem through 
                decentralized technologies in India.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Resources', 'Membership', 'Blog', 'About'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Join the Alliance
                </Button>
                <Button variant="outline" className="w-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Download Vision
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
                © 2024 India DeFi Alliance. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;