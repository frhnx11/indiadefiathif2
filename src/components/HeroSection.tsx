import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import LiquidEther from './LiquidEther';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* LiquidEther Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LiquidEther
          colors={['#E3F2FD', '#90CAF9', '#42A5F5', '#1E88E5']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto text-center">

          {/* Title */}
          <div className="text-center relative">
            <div className="w-full mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight py-4 text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '800', letterSpacing: '-0.02em' }}>
                <span className="text-slate-900">India DeFi Alliance</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="relative mb-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Connecting Innovators, Policymakers, and Industry Leaders to drive open and inclusive finance
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden px-8 py-4"
                onClick={() => window.open('/updatedVision.pdf', '_blank')}
              >
                <span className="relative flex items-center gap-2 text-base font-medium">
                  Explore Our Purpose
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-slate-300 bg-white/70 backdrop-blur-sm text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-400 hover:text-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 px-8 py-4"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSduy4NyNRcuivBY89H75z9ks8d6G6tlhDnpErxiTPS1_eHg3g/viewform', '_blank')}
              >
                <span className="flex items-center gap-2 text-base font-medium">
                  <TrendingUp className="w-5 h-5 group-hover:animate-bounce transition-transform duration-300" />
                  Join Us
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
