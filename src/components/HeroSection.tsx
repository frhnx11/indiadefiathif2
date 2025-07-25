import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/ecf59bf2-74f1-4376-a6e0-101c6f41280f.png')`,
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/20" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Title and Tagline positioned in upper-left area */}
          <div className="text-left animate-fade-in-up">
            <h1 className="main-title mb-6">
              India DeFi
              <br />
              <span className="text-gradient">Alliance</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6 max-w-3xl">
              Bridging Innovation & Policy for Decentralized Finance in India
            </h2>
            <p className="tagline max-w-3xl mb-8">
              At the forefront of the DeFi revolution, the India DeFi Alliance connects innovators, regulators, and institutions to co-create a secure, inclusive, and transparent financial ecosystem.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="cta" size="xl" className="button-text animate-fade-in-up">
                Download the DeFi Alliance Vision Document
              </Button>
              <Button variant="outline" size="xl" className="button-text animate-fade-in-up">
                Join the Alliance
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;