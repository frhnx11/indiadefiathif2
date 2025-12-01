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
          colors={['#FFFDE7', '#FFF59D', '#FFEE58', '#FDD835']}
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
                Connecting innovators, policymakers, and industry leaders to drive open and inclusive finance
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
              <Button
                size="lg"
                className="group relative bg-[#1E4B8E] hover:bg-[#163a6e] text-white border-0 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden px-8 py-4"
                onClick={() => window.open('/updatedVision.pdf', '_blank')}
              >
                <span className="relative flex items-center gap-2 text-base font-medium">
                  Explore Our Purpose
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>

              <Button
                size="lg"
                className="group bg-[#2E9E5B] hover:bg-[#257a48] text-white border-0 shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 px-8 py-4"
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
