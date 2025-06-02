"use client"
import { Lightbulb, Palette, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'LED Signage',
      description: 'Brilliant illuminated displays that make your brand shine day and night with energy-efficient LED technology.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Acrylic Displays',
      description: 'Premium thermoformed acrylic signage with crystal-clear visibility and professional finishing.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Digital Solutions',
      description: 'Interactive digital displays and smart signage solutions for modern business environments.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety Signage',
      description: 'Compliant safety and social distancing signage with durable materials and clear messaging.'
    }
  ]

 const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We only do what we're exceptional at, and that's everything you'll ever need for premium signage.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 card-hover neon-glow"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}