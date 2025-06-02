"use client"
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion';

export default function Contact() {
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Get in touch and let's discuss your next signage project.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div>
            <motion.div className="space-y-8" variants={container}>
              <motion.div 
                className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-colors duration-300"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400 hover:text-white transition-colors duration-200">hello@prosignmedia.com</p>
                  <p className="text-gray-400 hover:text-white transition-colors duration-200">sales@prosignmedia.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-colors duration-300"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400 hover:text-white transition-colors duration-200">+91 98765 43210</p>
                  <p className="text-gray-400 hover:text-white transition-colors duration-200">+91 87654 32109</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-colors duration-300"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400 hover:text-white transition-colors duration-200">New Delhi, India</p>
                  <p className="text-gray-400 hover:text-white transition-colors duration-200">Serving PAN India</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 neon-glow"
            variants={item}
          >
            <form className="space-y-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={container}
              >
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-500/50"
                  variants={item}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-500/50"
                  variants={item}
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              
              <motion.input
                type="text"
                placeholder="Subject"
                className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-500/50"
                variants={item}
                whileFocus={{ scale: 1.02 }}
              />
              
              <motion.textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all duration-300 hover:border-purple-500/50"
                variants={item}
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
              
              <motion.button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}