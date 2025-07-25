import React, { useEffect, useState, useRef } from 'react';

const MissionVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="pt-0 pb-8 lg:pb-12"
      style={{ background: 'transparent' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <div 
              className={`content-box p-8 lg:p-10 h-full transition-all duration-800 transform hover:-translate-y-1 ${
                isVisible 
                  ? 'animate-slide-up-scale translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="text-center mb-6">
                <h2 className="section-heading animate-content-reveal" style={{ animationDelay: '0.1s' }}>Our Mission</h2>
              </div>
              <div className="animate-content-reveal text-center" style={{ animationDelay: '0.3s' }}>
                <p className="body-text">
                  To bridge the knowledge gap between DeFi innovators and policymakers, 
                  advocate for clear and balanced regulatory frameworks, educate stakeholders 
                  through authoritative publications and events, drive cutting‑edge research, 
                  and cultivate a thriving DeFi community in India.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div 
              className={`content-box p-8 lg:p-10 h-full transition-all duration-800 transform hover:-translate-y-1 delay-200 ${
                isVisible 
                  ? 'animate-slide-up-scale translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              <div className="text-center mb-6">
                <h2 className="section-heading animate-content-reveal" style={{ animationDelay: '0.2s' }}>Our Vision</h2>
              </div>
              <div className="animate-content-reveal text-center" style={{ animationDelay: '0.4s' }}>
                <p className="body-text">
                  A resilient, open, and transparent financial system—built on decentralized 
                  technologies—that empowers every Indian with equitable access to financial 
                  services and economic opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;