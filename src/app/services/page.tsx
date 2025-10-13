'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart3, Users, Lightbulb, RefreshCw, ArrowRight, CheckCircle2, Target, TrendingUp, Zap, Calendar } from 'lucide-react';

// Note: metadata moved to layout or wrapper since this is now a client component

const services = [
  {
    title: 'Strategic Consulting',
    description: 'Comprehensive business strategy development and implementation guidance.',
    longDescription: 'Our strategic consulting service helps organizations develop clear, actionable strategies that drive sustainable growth. We work with leadership teams to assess current market position, identify opportunities, and create detailed roadmaps for success.',
    features: [
      'Market analysis and competitive positioning',
      'Strategic planning and roadmap development',
      'Performance metrics and KPI framework',
      'Change management and implementation support',
      'Quarterly strategy reviews and adjustments'
    ],
    duration: '3-6 months',
    investment: 'Starting from $15,000',
    icon: BarChart3
  },
  {
    title: 'Leadership Development',
    description: 'Executive coaching and leadership training programs for all levels.',
    longDescription: 'Develop exceptional leaders who can navigate complex challenges and drive organizational success. Our evidence-based approach combines individual coaching with group development programs.',
    features: [
      'Executive coaching and mentoring',
      'Leadership assessment and 360-degree feedback',
      'Customized development plans',
      'Team leadership workshops',
      'Succession planning and talent pipeline development'
    ],
    duration: '6-12 months',
    investment: 'Starting from $8,000',
    icon: Users
  },
  {
    title: 'Team Workshops',
    description: 'Interactive workshops designed to enhance team performance and collaboration.',
    longDescription: 'Transform your team dynamics with our hands-on workshops that focus on practical skills, improved communication, and enhanced collaboration for immediate and lasting impact.',
    features: [
      'Team communication and collaboration workshops',
      'Problem-solving and innovation sessions',
      'Conflict resolution and team building',
      'Process improvement workshops',
      'Skills development and training programs'
    ],
    duration: '1-3 days',
    investment: 'Starting from $3,500',
    icon: Lightbulb
  },
  {
    title: 'Organizational Transformation',
    description: 'Complete organizational restructuring and culture change initiatives.',
    longDescription: 'Guide your organization through major transformations with our comprehensive approach that addresses structure, process, technology, and culture to ensure sustainable change.',
    features: [
      'Organizational assessment and design',
      'Culture change and transformation',
      'Process optimization and automation',
      'Technology integration and adoption',
      'Performance management system design'
    ],
    duration: '6-18 months',
    investment: 'Starting from $25,000',
    icon: RefreshCw
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'We start with a comprehensive analysis of your current situation, challenges, and goals.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Based on our findings, we develop a customized strategy and implementation plan.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We work alongside your team to execute the plan with hands-on support and guidance.'
  },
  {
    step: '04',
    title: 'Monitoring & Optimization',
    description: 'Continuous tracking of progress with regular adjustments to ensure optimal results.'
  }
];

export default function ServicesPage() {
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
            src="/assets/services/detectives-work.jpg"
            alt="Professional detective work and strategic analysis"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              // Hide image on error and show gradient background
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-surface-900/70 via-primary-900/60 to-surface-900/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Target size={20} className="mr-2" />
              OUR COMPREHENSIVE SERVICES
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Strategic Solutions That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Connect & Transform
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Comprehensive solutions designed to transform your business through strategic thinking, leadership excellence, and operational optimization.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/booking"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-surface-900 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Calendar size={20} />
                  <span>Schedule Free Consultation</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <span>Request Proposal</span>
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

      {/* Services Grid - Professional Light */}
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
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-primary-600 font-bold rounded-2xl shadow-soft border border-primary-200/50 mb-8">
                <Zap size={20} className="mr-2" />
                TRANSFORMATIONAL SERVICES
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Expert Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Every Challenge
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                From strategic planning to team development, our services are designed to address every aspect of organizational excellence.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="card-elevated p-6 sm:p-8 lg:p-10 hover:shadow-elevated transition-all duration-500 group h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {/* Service Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start mb-6 lg:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 mx-auto sm:mx-0 shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      {service.icon ? React.createElement(service.icon, { size: 28, className: "text-white" }) : (
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg"></div>
                      )}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="heading-card text-surface-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="body-regular text-surface-600">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Long Description */}
                  <p className="body-regular text-surface-600 mb-6 lg:mb-8 flex-grow">{service.longDescription}</p>
                  
                  {/* Features */}
                  <div className="mb-6 lg:mb-8">
                    <h4 className="font-bold mb-4 text-surface-900">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-surface-700">
                          <CheckCircle2 size={16} className="text-secondary-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="font-medium text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-6 lg:pt-8 border-t border-surface-200/50 mt-auto">
                    <div className="text-center sm:text-left">
                      <div className="text-surface-500 mb-1 text-sm">Duration: {service.duration}</div>
                      <div className="text-xl sm:text-2xl font-bold text-primary-600">{service.investment}</div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                      <Link 
                        href="/booking"
                        className="inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-bold shadow-soft hover:shadow-elevated focus-ring w-full sm:w-auto"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Process Section - Professional Dark */}
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
                <Target size={20} className="mr-2" />
                OUR PROVEN PROCESS
              </div>
              <h2 className="heading-section text-white mb-8">
                Systematic{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Excellence Delivery
                </span>
              </h2>
              <p className="body-large text-surface-300 max-w-4xl mx-auto">
                A systematic approach that ensures measurable results and sustainable transformation.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="text-center card-glass p-8 hover:bg-white/15 transition-all duration-500 border-surface-700/50 hover:border-accent-400/50 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <span className="text-white">{step.step}</span>
                  </div>
                  <h3 className="heading-card text-white mb-4 group-hover:text-accent-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="body-regular text-surface-300 group-hover:text-white transition-colors">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Industries Section - Professional Light */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-accent-50 to-surface-100"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/5 via-transparent to-accent-900/5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-secondary-600 font-bold rounded-2xl shadow-soft border border-secondary-200/50 mb-8">
                <TrendingUp size={20} className="mr-2" />
                INDUSTRIES WE SERVE
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Cross-Industry{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-accent-600">
                  Excellence
                </span>
              </h2>
              <p className="body-large text-surface-600 mb-16 max-w-4xl mx-auto">
                Our expertise spans across multiple industries, bringing specialized knowledge and proven methodologies to each sector.
              </p>
            </motion.div>
            
            {/* Industries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 text-center">
              {['Technology', 'Healthcare', 'Financial Services', 'Manufacturing', 'Retail', 'Professional Services'].map((industry, index) => (
                <motion.div 
                  key={index} 
                  className="card-elevated p-4 sm:p-6 hover:shadow-elevated transition-all duration-500 group min-h-[80px] flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <p className="font-bold text-surface-900 group-hover:text-secondary-600 transition-colors text-sm sm:text-base leading-tight">
                    {industry}
                  </p>
                </motion.div>
              ))}
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
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let&apos;s discuss which of our services can best address your specific challenges and help you achieve your business objectives.
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
                  <Calendar size={20} />
                  <span>Book Free Consultation</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <span>Request Proposal</span>
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
