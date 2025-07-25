import React, { useEffect, useState, useRef } from 'react';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;
  const fadeOffset = Math.max(0, Math.min(1, (window.innerHeight - (sectionRef.current?.getBoundingClientRect().top || 0)) / window.innerHeight));

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-20 pb-0 overflow-hidden"
      style={{ minHeight: '60vh', background: 'transparent' }}
    >
      {/* Content Container */}
      <div className="content-layer container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`content-box-intro p-8 lg:p-12 transition-all duration-1000 transform ${
              isVisible 
                ? 'animate-slide-up-scale' 
                : 'opacity-0 translate-y-16 scale-95'
            }`}
            style={{
              transform: `translateY(${isVisible ? 0 : 64}px) translateY(${-parallaxOffset * 0.2}px)`,
              opacity: fadeOffset
            }}
          >
            <p className="text-center max-w-5xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-muted-foreground">
              At the forefront of the DeFi revolution, the{' '}
              <span className="font-semibold text-gradient">India DeFi Alliance</span>{' '}
              connects innovators, regulators, and institutions to co-create a{' '}
              <span className="font-semibold">secure</span>,{' '}
              <span className="font-semibold">inclusive</span>, and{' '}
              <span className="font-semibold">transparent</span>{' '}
              financial ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;