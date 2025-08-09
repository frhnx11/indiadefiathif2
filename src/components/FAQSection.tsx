import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "What is DeFi?",
      answer: "Decentralized Finance (DeFi) refers to financial services built on blockchain technology that operate without traditional intermediaries like banks. It enables peer-to-peer transactions, lending, borrowing, and trading through smart contracts."
    },
    {
      question: "What are the benefits of DeFi?",
      answer: "DeFi offers greater financial inclusion, transparency, lower fees, 24/7 accessibility, programmable money, and the ability to earn yield on digital assets. It removes geographical barriers and provides financial services to the unbanked."
    },
    {
      question: "Why does DeFi challenge traditional regulation?",
      answer: "DeFi operates on decentralized networks without central authorities, making traditional regulatory frameworks challenging to apply. The borderless nature, pseudonymous transactions, and rapid innovation in DeFi require new regulatory approaches."
    },
    {
      question: "What does India DeFi Alliance aim to achieve?",
      answer: "We aim to bridge the gap between DeFi innovation and regulatory clarity in India. Our mission includes educating stakeholders, advocating for balanced regulations, conducting research, and building a thriving DeFi ecosystem."
    },
    {
      question: "How can I join?",
      answer: "You can join the India DeFi Alliance by submitting a membership application through our website. We welcome individuals, organizations, and institutions committed to advancing DeFi in India through education and advocacy."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any
      }
    })
  };

  const contentVariants: Variants = {
    closed: { 
      height: 0, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as any
      }
    },
    open: { 
      height: 'auto',
      opacity: 1,
      transition: { 
        duration: 0.3, 
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-16 transition-all duration-800 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about DeFi and our mission
            </p>
          </div>

          {/* FAQ Items */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={faqItemVariants}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 lg:px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset flex items-center justify-between"
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                  whileTap={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-primary pr-4 text-left">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={openIndex === index ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={contentVariants}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;