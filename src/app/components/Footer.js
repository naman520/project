"use client"
import { Zap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from 'framer-motion';

export default function Footer() {
  const productCategories = [
    "LED Signage",
    "Acrylic Displays",
    "Safety Signage",
    "QR Code Stands",
    "Floor Decals",
    "Hand Sanitizer Stands",
  ];

  const services = [
    "Custom Design",
    "Installation",
    "Maintenance",
    "Consultation",
    "Bulk Orders",
    "Express Delivery",
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-500">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">ProSign</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Award-winning signage solutions that transform your brand vision
              into vibrant reality.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.div 
                  key={index}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-bold text-white mb-6">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {product}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-bold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <motion.div 
              className="flex"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/50 border border-gray-700 rounded-l-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-r-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ProSign Media. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}