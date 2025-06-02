"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Set loaded after initial render
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500); // Match with loading screen duration

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 py-2"
          : "bg-black/80 backdrop-blur-md py-4"
      } border-b border-gray-800`}
      initial={{ y: -100 }}
      animate={{ y: isLoaded ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 100, delay: 2.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:rotate-12">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
              ProSign
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transform hover:scale-110 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="animate-spin-in" />
            ) : (
              <Menu size={24} className="animate-fade-in" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 transform hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold w-fit transform hover:scale-105 transition-transform duration-200 mt-4">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
