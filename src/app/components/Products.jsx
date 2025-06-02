"use client"
import { Star, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion';

export default function Products() {
  const products = [
    {
      name: 'Acrylic Lollipop Signage',
      category: 'LED Signage',
      price: '₹950',
      originalPrice: '₹1,200',
      discount: '21%',
      image: '/api/placeholder/300/200',
      rating: 4.8,
      features: ['18x18" Square', '3mm Acrylic', 'LED Backlit', 'Aluminum Frame']
    },
    {
      name: 'QR Code Table Stand',
      category: 'PVC Displays',
      price: '₹85',
      originalPrice: '₹120',
      discount: '29%',
      image: '/api/placeholder/300/200',
      rating: 4.9,
      features: ['4x9.5" Size', 'PVC Material', 'L-Shape Stand', 'Multi-payment Support']
    },
    {
      name: 'Social Distance Floor Decals',
      category: 'Safety Signage',
      price: '₹95',
      originalPrice: '₹150',
      discount: '37%',
      image: '/api/placeholder/300/200',
      rating: 4.7,
      features: ['12x12" Size', 'High Adhesion', 'UV Resistant', 'Laminated Finish']
    },
    {
      name: 'Hand Sanitizer Stand',
      category: 'Safety Equipment',
      price: '₹2,500',
      originalPrice: '₹3,200',
      discount: '22%',
      image: '/api/placeholder/300/200',
      rating: 4.8,
      features: ['18x44" Size', 'Foot Paddle', 'Branding Area', 'Contact-free Operation']
    }
  ]
 const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };


  return (
   <section id="products" className="py-20 px-4 bg-gray-900/30 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="floating-shape floating-shape--purple" 
           style={{
             width: '400px',
             height: '400px',
             top: '20%',
             left: '-100px',
             animation: 'floatX 15s ease-in-out infinite alternate'
           }}></div>
      
      <div className="floating-shape floating-shape--pink"
           style={{
             width: '300px',
             height: '300px',
             top: '60%',
             right: '-50px',
             animation: 'floatY 12s ease-in-out infinite alternate'
           }}></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Hot Deals
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium signage solutions at unbeatable prices. Limited time offers on our bestselling products.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className="bg-black/50 border border-gray-800 rounded-2xl overflow-hidden card-hover hover-grow"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >

              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{product.category}</span>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  -{product.discount}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-400 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">{product.category}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                
                <ul className="text-sm text-gray-400 mb-6 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                
               <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <ShoppingCart className="w-4 h-4 group-hover:scale-125 transition-transform" />
                  <span className="group-hover:font-bold transition-all">Buy Now</span>
                </button>
              </div>
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}