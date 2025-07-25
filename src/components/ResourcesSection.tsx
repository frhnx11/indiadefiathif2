import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Search, Play, ArrowRight } from 'lucide-react';

const ResourcesSection = () => {
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

  const resources = [
    {
      icon: BookOpen,
      title: "Comprehensive DeFi Handbook",
      description: "Step‑by‑step guide covering smart contracts, lending, AMMs, governance, and risk management.",
      delay: "delay-0"
    },
    {
      icon: Search,
      title: "Interactive DeFi Glossary",
      description: "Searchable definitions of 100+ core DeFi terms in English, Hindi, Tamil",
      delay: "delay-200"
    },
    {
      icon: Play,
      title: 'Video Primer: "DeFi Basics"',
      description: "10‑minute animated explainer introducing concepts and best practices",
      delay: "delay-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="resources"
      className="py-16 lg:py-20 mt-12 lg:mt-16 bg-geometric"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-16 transition-all duration-800 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Key Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential tools and knowledge to navigate the DeFi landscape with confidence
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`group transition-all duration-800 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } ${resource.delay}`}
              >
                <div className="content-box p-8 h-full transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div 
            className={`text-center mt-16 transition-all duration-800 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Button variant="cta" size="xl">
              Explore All Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;