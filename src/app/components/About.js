"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Counter component for animated numbers
const Counter = ({ value, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

 return <span>{count}{value === 500 ? '+' : ''}</span>;
};

export default function About() {
  const stats = {
    projects: {
      value: 500,
      duration: 2
    },
    satisfaction: {
      value: 99,
      duration: 1.5
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-900/30 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="floating-shape floating-shape--purple" 
           style={{
             width: '500px',
             height: '500px',
             top: '10%',
             right: '10%',
             animation: 'float 20s ease-in-out infinite, rotateSlow 60s linear infinite'
           }}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Rebrand Your Vision
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We live and breathe signage, and we're obsessed with delivering exceptional work. 
              Based in New Delhi but serving PAN India, we've grown our presence from Chandigarh to Kerala.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We're creative architects who turn ideas into vibrant reality through simple, effective solutions. 
              Our expertise spans acrylic displays, LED signage, promotional materials, and safety solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                 <Counter value={stats.projects.value} duration={stats.projects.duration} />
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  <Counter value={stats.satisfaction.value} duration={stats.satisfaction.duration} />%
                </div>
                <div className="text-gray-400">Client Satisfaction</div>
              </motion.div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-180 transition-transform duration-1000">
                  <span className="text-2xl font-bold">PS</span>
                </div>
                <div className="text-gray-400">Award-Winning Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}