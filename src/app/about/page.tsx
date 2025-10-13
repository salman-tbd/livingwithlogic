'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Zap, BarChart3, CheckCircle2, Brain, Lightbulb, Award, ArrowRight } from 'lucide-react';

// Note: metadata moved to layout or wrapper since this is now a client component

const expertiseAreas = [
  {
    title: 'Strategic Excellence',
    specialization: 'Business Strategy & Planning',
    description: 'Deep expertise in strategic planning, market analysis, competitive positioning, and growth strategy development for sustainable business success.',
    icon: Target
  },
  {
    title: 'Leadership Development',
    specialization: 'Executive & Team Coaching',
    description: 'Comprehensive leadership development programs, executive coaching, and succession planning to build high-performance leadership teams.',
    icon: Award
  },
  {
    title: 'Operational Excellence',
    specialization: 'Process & Performance Optimization',
    description: 'Advanced process optimization, digital transformation, and operational excellence methodologies to maximize efficiency and results.',
    icon: TrendingUp
  }
];

const values = [
  {
    title: 'Logic-Driven Approach',
    description: 'Every recommendation is backed by data, research, and proven frameworks.',
    icon: BarChart3
  },
  {
    title: 'Measurable Results',
    description: 'We focus on tangible outcomes and long-term sustainable transformation.',
    icon: TrendingUp
  },
  {
    title: 'Collaborative Partnership',
    description: 'We work alongside your team, not just for them, ensuring knowledge transfer.',
    icon: Users
  },
  {
    title: 'Continuous Innovation',
    description: 'We stay ahead of industry trends and continuously refine our methodologies.',
    icon: Zap
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/139706.jpg"
            alt="Professional business team collaboration"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              // Hide image on error and show gradient background
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-primary-900/80 to-surface-900"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Award size={20} className="mr-2" />
              ABOUT LIVING WITH LOGIC
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transforming Businesses Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Strategic Logic
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Founded in 2014, Living With Logic has helped over 200 organizations achieve sustainable growth through strategic thinking and logical frameworks.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/services"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-surface-900 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
              >
                  <span>Our Services</span>
                  <ArrowRight size={20} />
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
              >
                  <span>Get In Touch</span>
                  <ArrowRight size={20} />
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowRight size={24} className="rotate-90" />
        </motion.div>
      </motion.section>

      {/* Mission & Vision - Professional Blue/Gray */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-primary-50"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 via-transparent to-accent-900/5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Mission Card */}
              <motion.div 
                className="card-elevated p-10 hover:shadow-elevated transition-all duration-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-2xl shadow-soft mb-8">
                  <Target size={20} className="mr-2" />
                  OUR MISSION
                </div>
                <h2 className="heading-card text-surface-900 mb-8">Empowering Strategic Excellence</h2>
                <p className="body-large text-surface-600 mb-10">
                  To empower organizations with logical, evidence-based strategies that drive sustainable transformation. We believe that every business challenge has a logical solution – it just takes the right framework to find it.
                </p>
                <h3 className="heading-card text-surface-900 mb-6">Our Approach</h3>
                <ul className="space-y-4">
                  {[
                    'Data-driven analysis and strategic planning',
                    'Customized solutions for each organization\'s unique needs',
                    'Hands-on implementation support and training',
                    'Long-term partnership for sustained success'
                  ].map((approach, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-surface-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{approach}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Vision Card */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="card-elevated p-10 hover:shadow-elevated transition-all duration-500">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-600 to-accent-600 text-white font-bold rounded-2xl shadow-soft mb-8">
                    <Lightbulb size={20} className="mr-2" />
                  OUR VISION
                  </div>
                  <h2 className="heading-card text-surface-900 mb-8">Leading Transformation</h2>
                  <p className="body-large text-surface-600 mb-10">
                    To be the leading consulting firm that transforms how businesses think, operate, and grow by bridging the gap between strategy and execution through logical, practical solutions.
                  </p>
                </div>
                
                {/* Statistics Card */}
                <div className="card-elevated p-8 bg-gradient-to-br from-white to-surface-50 border border-primary-200/50">
                  <h3 className="heading-card text-surface-900 mb-8 text-center">Why Choose Us?</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '98%', label: 'Client Satisfaction' },
                      { value: '200+', label: 'Projects Completed' },
                      { value: '15+', label: 'Industries Served' },
                      { value: '10+', label: 'Years Experience' }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="text-center group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="text-4xl font-black text-primary-600 mb-2 group-hover:text-accent-600 transition-colors">
                          {stat.value}
                    </div>
                        <div className="font-semibold text-surface-700">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Values - Professional Dark */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-accent-900/10"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <Brain size={20} className="mr-2" />
                OUR CORE VALUES
              </div>
              <h2 className="heading-section text-white mb-8">
                Principles That Drive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Excellence
                </span>
              </h2>
              <p className="body-large text-surface-300 max-w-4xl mx-auto">
                These principles guide every decision we make and every solution we deliver.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="card-glass p-8 text-center hover:bg-white/15 transition-all duration-500 border-surface-700/50 hover:border-accent-400/50 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    {value.icon ? React.createElement(value.icon, { size: 32, className: "text-white" }) : (
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    )}
                  </div>
                  <h3 className="heading-card text-white mb-4 group-hover:text-accent-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="body-regular text-surface-300 group-hover:text-white transition-colors">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expertise Section - Professional Light */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 via-transparent to-accent-900/5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-primary-600 font-bold rounded-2xl shadow-soft border border-primary-200/50 mb-8">
                <Brain size={20} className="mr-2" />
                OUR CORE EXPERTISE
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Areas of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Excellence
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                We bring specialized expertise across key business transformation areas to drive your success.
              </p>
            </motion.div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {expertiseAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="text-center card-elevated p-10 hover:shadow-elevated transition-all duration-500 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-primary-200/50 shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-105">
                      <IconComponent size={48} className="text-primary-600 group-hover:text-accent-600 transition-colors" />
                    </div>
                    <h3 className="heading-card text-surface-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {area.title}
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-xl font-bold mb-6 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                      {area.specialization}
                    </div>
                    <p className="body-regular text-surface-600 group-hover:text-surface-700 transition-colors">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Professional Gradient */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/20 via-transparent to-surface-900/10"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl shadow-glow border border-white/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 size={20} className="mr-2" />
              READY TO START?
            </motion.div>
            <motion.h2 
              className="heading-section text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let&apos;s discuss how our logical approach can solve your biggest business challenges and drive sustainable growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/booking"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
              >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={20} />
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
              >
                  <span>Get In Touch</span>
                  <ArrowRight size={20} />
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
