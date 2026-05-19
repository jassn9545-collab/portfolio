import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { Github, ExternalLink, Download, ArrowDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Hero = () => {
  const { isDark } = useTheme();
  const typewriterText = useTypewriter(
    ['React Developer', 'Frontend Engineer', 'UI/UX Enthusiast', 'Problem Solver'],
    100,
    50,
    2000
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`} />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-float" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: '4s' }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className={`h-full w-full ${isDark ? 'bg-grid-white' : 'bg-grid-black'}`}
            style={{
              backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-purple-400 border border-purple-400/30">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>Amandeep</span>
            <span className="block gradient-text">Singh</span>
          </motion.h1>

          {/* Typewriter Text */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-2xl md:text-3xl font-medium">
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>I build</span>
              <span className="gradient-text ml-2">{typewriterText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Passionate frontend developer with 3+ years of experience building scalable,
            user-friendly web applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              <Github size={20} className="mr-2" />
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
                isDark
                  ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
              }`}
            >
              <Download size={20} className="mr-2" />
              Hire Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: ExternalLink, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: ExternalLink, href: 'https://twitter.com', label: 'Twitter' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                className={`p-3 rounded-full glass transition-all duration-300 ${
                  isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                }`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className={`p-2 rounded-full glass cursor-pointer ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
