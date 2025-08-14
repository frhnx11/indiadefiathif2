import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Policy', href: '/policy-insights' },
    { name: 'Resources', href: '/resources' },
    { name: 'Why Join Us', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Area */}
          <div className="flex items-center space-x-3">
            <img 
              src="/ChatGPT Image Jul 25, 2025, 02_15_19 PM.png" 
              alt="India DeFi Alliance Logo" 
              className="h-8 lg:h-10 w-auto object-contain"
            />
            <span className="text-lg lg:text-xl font-display font-bold text-primary">
              India DeFi Alliance
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto mr-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="nav"
                asChild
                className="navigation-text text-base"
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-base py-3"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;