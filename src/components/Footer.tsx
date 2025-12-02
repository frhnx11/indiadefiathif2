import React from 'react';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2E9E5B] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/logo.png"
                  alt="India DeFi Alliance Logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xl font-bold font-playfair">India DeFi Alliance</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Building a secure, inclusive, and transparent financial ecosystem for everyone through Decentralized Technology.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Resources', 'Why Join Us', 'Contact'].map((link) => {
                  const href = link === 'Why Join Us' ? '/membership' : `/${link.toLowerCase().replace(' ', '-')}`;
                  return (
                    <li key={link}>
                      <a
                        href={href === '/home' ? '/' : href}
                        className="text-white/80 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSduy4NyNRcuivBY89H75z9ks8d6G6tlhDnpErxiTPS1_eHg3g/viewform', '_blank')}
                >
                  Join the Alliance
                </Button>
                <Button variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  Download Vision
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 md:mb-0">
                © 2024 India DeFi Alliance. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;