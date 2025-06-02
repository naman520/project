'use client'
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '../LoadingScreen';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [backgroundElements, setBackgroundElements] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Generate random background elements
    const elements = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 10 + 10,
      color: Math.random() > 0.5 ? 'purple' : 'pink'
    }));
    setBackgroundElements(elements);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Loading screen */}
      <LoadingScreen/>
      
      {/* Dynamic background elements */}
      {backgroundElements.map((element) => (
        <div
          key={element.id}
          className={`floating-shape floating-shape--${element.color}`}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            top: `${element.top}%`,
            left: `${element.left}%`,
            animation: `float ${element.animationDuration}s ease-in-out ${element.animationDelay}s infinite alternate`,
            filter: `blur(${element.size / 10}px)`
          }}
        />
      ))}

      {/* Existing animated blobs */}
      <div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float animate-rotate-slow"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-delayed"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }} // Match delay with loading screen
        >
        
          {/* Badge with animation */}
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-8 animate-fade-in-up hover:shadow-purple-500/20 hover:shadow-lg transition-all duration-300">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-gray-300 text-sm">Award-Winning Design Solutions</span>
          </div>
          
          {/* Headline with staggered animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block animate-fade-in-up">We craft</span>{' '}
            <span className="inline-block gradient-text animate-gradient animate-fade-in-up delay-100">distinctive</span>{' '}
            <span className="inline-block animate-fade-in-up delay-150">signage that</span>{' '}
            <span className="inline-block gradient-text animate-gradient animate-fade-in-up delay-200">captivates</span>
          </h1>
          
          {/* Subtext with animation */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            From acrylic displays to digital signage, we transform your vision into vibrant reality 
            through premium materials and cutting-edge design. We're obsessed with quality.
          </p>
          
          {/* Buttons with hover animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 flex items-center space-x-2 transform hover:scale-105 hover:-translate-y-1 group">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover-grow">
              View Portfolio
            </button>
          </div>
        
     </motion.div>
      </div>
    </section>
  );
}