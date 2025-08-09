import React, { useEffect, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, ArrowDown } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Generate particles with useMemo for better performance
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
      color: i % 3 === 0 
        ? 'rgba(59, 130, 246, 0.6)'
        : i % 3 === 1
        ? 'rgba(34, 197, 94, 0.6)'
        : 'rgba(168, 85, 247, 0.6)'
    })),
    []
  );

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [controls, isInView]);

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 60%),
              radial-gradient(circle at 80% 60%, rgba(99, 102, 241, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 60%),
              linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)
            `
          }}
        />
        
        {/* Animated gradient elements */}
        <motion.div 
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-2xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{
            duration: 10,
            delay: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        
        {/* Floating elements */}
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                background: i % 3 === 0 
                  ? 'rgba(59, 130, 246, 0.6)'
                  : i % 3 === 1
                  ? 'rgba(34, 197, 94, 0.6)'
                  : 'rgba(168, 85, 247, 0.6)',
                boxShadow: '0 0 20px currentColor',
                zIndex: 1
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          );
        })}
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: particle.color,
              boxShadow: `0 0 20px ${particle.color}`,
              zIndex: 1
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              y: [0, -50, -100, -150],
              x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
              scale: [0, 1, 1.2, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              times: [0, 0.3, 0.7, 1]
            }}
          />
        ))}
      </div>

      {/* Enhanced Geometric Shapes & Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large morphing circles with multiple layers */}
        <div className="absolute top-10 left-10 w-96 h-96 opacity-25">
          <motion.div 
            className="w-full h-full bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
              borderRadius: ['60%', '50%', '60%']
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
          <motion.div 
            className="absolute inset-8 w-80 h-80 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              borderRadius: ['50%', '60%', '50%']
            }}
            transition={{
              duration: 20,
              delay: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        </div>
        
        {/* Hexagonal patterns */}
        <div className="absolute top-1/4 right-20 w-64 h-64 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-emerald-400/40 to-green-400/40 animate-spin-slow blur-2xl"
               style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></div>
        </div>
        
        {/* Dynamic triangular elements */}
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 opacity-35">
          <div className="w-full h-full bg-gradient-to-t from-purple-400/50 to-indigo-400/50 animate-pulse-slow blur-xl"
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        </div>
        
        {/* Concentric rings with glow */}
        <div className="absolute top-1/2 left-1/4 w-56 h-56 animate-spin-reverse opacity-20">
          <div className="w-full h-full border-4 border-blue-400/30 rounded-full shadow-lg shadow-blue-400/20"></div>
          <div className="absolute inset-6 w-44 h-44 border-3 border-indigo-400/40 rounded-full animate-spin shadow-md shadow-indigo-400/20"></div>
          <div className="absolute inset-12 w-32 h-32 border-2 border-cyan-400/50 rounded-full animate-spin-reverse shadow-sm shadow-cyan-400/20"></div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute bottom-32 right-1/3 w-24 h-24 opacity-25">
          <div className="w-full h-full bg-gradient-to-br from-violet-400/40 to-purple-400/40 rounded-lg animate-float blur-lg transform rotate-45"></div>
        </div>
        
        <div className="absolute top-1/3 left-1/5 w-20 h-20 opacity-30">
          <div className="w-full h-full bg-gradient-to-tr from-green-400/40 to-emerald-400/40 animate-bounce-slow blur-md"
               style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        </div>
      </div>

      {/* Static Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Enhanced Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-32 w-6 h-6 bg-blue-400 rounded-full animate-glow-pulse shadow-2xl shadow-blue-400/60"></div>
        <div className="absolute bottom-32 left-24 w-8 h-8 bg-indigo-400 rounded-full animate-glow-pulse shadow-2xl shadow-indigo-400/60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-glow-pulse shadow-xl shadow-cyan-400/60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-7 h-7 bg-purple-400 rounded-full animate-glow-pulse shadow-2xl shadow-purple-400/60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-32 left-1/3 w-5 h-5 bg-emerald-400 rounded-full animate-glow-pulse shadow-xl shadow-emerald-400/60" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-rose-400 rounded-full animate-glow-pulse shadow-2xl shadow-rose-400/60" style={{ animationDelay: '0.8s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto text-center">
          
          {/* Enhanced Logo with Multiple Layers */}
          <div className="flex justify-center mb-12 group">
            <div className="relative">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Main logo */}
              <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6 border border-white/20">
                <div className="absolute inset-1 bg-gradient-to-br from-white/25 to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-3xl"></div>
                <Sparkles className="w-10 h-10 text-white animate-spin-slow drop-shadow-lg" />
              </div>
              
              {/* Enhanced floating icons */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg shadow-cyan-400/50">
                <Zap className="w-4 h-4 text-white drop-shadow-sm" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg shadow-indigo-400/50" style={{ animationDelay: '1s' }}>
                <Target className="w-4 h-4 text-white drop-shadow-sm" />
              </div>
              <div className="absolute top-1/2 -right-10 w-7 h-7 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.5s' }}>
                <TrendingUp className="w-3.5 h-3.5 text-white drop-shadow-sm" />
              </div>
              <div className="absolute top-1/2 -left-10 w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg shadow-emerald-400/50" style={{ animationDelay: '1.5s' }}>
                <Sparkles className="w-3 h-3 text-white drop-shadow-sm" />
              </div>
            </div>
          </div>
          
          {/* Enhanced Title with Multiple Gradients */}
          <div className="text-center relative">
            {/* Main title */}
            <div className="w-full mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight py-4 animate-slide-up-stagger text-center">
                <span className="text-slate-800 drop-shadow-sm">Shaping the Future of </span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x">DeFi </span>
                <span className="block sm:inline">in <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent animate-gradient-x">India</span></span>
              </h1>
            </div>
            
            {/* Enhanced subtitle with better typography */}
            <div className="relative mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-slate-700 max-w-4xl mx-auto leading-relaxed animate-slide-up-stagger" style={{ animationDelay: '0.8s' }}>
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent font-medium">Innovation</span>
                <span className="text-slate-500"> × </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">Policy</span>
                <span className="text-slate-500"> × </span>
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent font-medium">Finance</span>
              </h2>
            </div>
            
            {/* Enhanced description */}
            <div className="relative max-w-3xl mx-auto mb-10">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light animate-slide-up-stagger" style={{ animationDelay: '1.1s' }}>
                Empowering India's financial future through decentralized technology.
                <span className="block mt-3 text-sm text-slate-500">
                  Join our alliance of innovators, policymakers, and financial leaders building the next generation of finance.
                </span>
              </p>
            </div>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center animate-slide-up-stagger" style={{ animationDelay: '1.4s' }}>
              <Button 
                size="lg" 
                className="group relative button-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden px-8 py-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2 text-base font-medium">
                  <Sparkles className="w-5 h-5 animate-spin-slow" />
                  Read Our Vision
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group button-text border-2 border-slate-300 bg-white/70 backdrop-blur-sm text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-400 hover:text-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 px-8 py-4"
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

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          
          {/* Main scroll indicator */}
          <div className="relative w-10 h-16 border-2 border-slate-300/60 bg-white/20 backdrop-blur-sm rounded-full flex justify-center shadow-lg">
            <div className="w-1.5 h-4 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full mt-3 animate-scroll-indicator shadow-sm"></div>
          </div>
          
          {/* Arrow with enhanced styling */}
          <div className="flex justify-center mt-3">
            <div className="relative">
              <ArrowDown className="w-5 h-5 text-slate-500 group-hover:text-blue-600 animate-bounce transition-colors duration-300 drop-shadow-sm" />
            </div>
          </div>
          
          {/* Hint text */}
          <p className="text-xs text-slate-400 text-center mt-2 font-light tracking-wide">Scroll to explore</p>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;