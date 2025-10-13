'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, TrendingUp, Users, Award, Zap, Target, Brain, Rocket, Lightbulb, CheckCircle2, Star } from 'lucide-react';

const stats = [
  { number: '200+', label: 'Companies Transformed', icon: TrendingUp, color: 'text-accent-400' },
  { number: '500+', label: 'Leaders Developed', icon: Users, color: 'text-secondary-400' },
  { number: '99%', label: 'Client Satisfaction', icon: Star, color: 'text-amber-400' },
  { number: '15+', label: 'Years Excellence', icon: Award, color: 'text-primary-400' }
];

const achievements = [
  { metric: '$50M+', description: 'In client revenue generated', trend: '+40%' },
  { metric: '95%', description: 'Project success rate', trend: '+15%' },
  { metric: '48hrs', description: 'Average response time', trend: '-60%' },
  { metric: '200+', description: 'Companies transformed', trend: '+25%' }
];

const services = [
  {
    icon: Target,
    title: 'Strategic Consulting',
    description: 'Transform challenges into opportunities with data-driven strategies and logical frameworks.',
    features: ['Strategic Planning', 'Market Analysis', 'Growth Strategy', 'Risk Management'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'Leadership Development',
    description: 'Build confident leaders who inspire teams and drive sustainable organizational change.',
    features: ['Executive Coaching', 'Leadership Training', 'Succession Planning', 'Performance Management'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Rocket,
    title: 'Organizational Excellence',
    description: 'Optimize operations and culture for maximum efficiency and employee engagement.',
    features: ['Process Optimization', 'Culture Transformation', 'Change Management', 'Team Building'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Strategy',
    description: 'Future-proof your business with innovative approaches and emerging technology integration.',
    features: ['Digital Transformation', 'Innovation Labs', 'Technology Strategy', 'Market Disruption'],
    color: 'from-orange-500 to-orange-600'
  }
];

export default function HomePage() {
  useEffect(() => {
    // Component mounted
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Gradient Spotlight */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-section/business-team-working-new-strategy.jpg"
            alt="Business team working on strategy"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Enhanced gradient overlay with spotlight effect */}
          <div className="absolute inset-0 bg-gradient-spotlight from-surface-900/95 via-surface-900/85 to-surface-900/95"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-900/20"></div>
          <div className="absolute inset-0 bg-noise"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust Badge */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-accent-300 font-semibold rounded-2xl border border-accent-400/30 shadow-glow">
                <Star className="mr-2" size={16} />
                Trusted by 200+ Companies Worldwide
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="heading-hero text-white mb-8 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Where{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400">
                Logic
              </span>{' '}
              Meets
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400">
                Leadership
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-4xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your business with strategic clarity and logical frameworks. We help organizations achieve{' '}
              <span className="font-bold text-white">measurable results</span> through expert consulting and proven methodologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
              <Link 
                href="/booking"
                  className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-surface-900 font-bold text-lg rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 focus-ring"
                >
                  <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>Book Free Consultation</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
              <Link 
                href="/services"
                  className="btn-ghost text-white border-white/30 hover:bg-white/20 hover:border-white/50"
              >
                  <span>Explore Our Solutions</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              </motion.div>
            </motion.div>
            
            {/* Glass Metrics Row */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div 
                  key={index} 
                    className="card-glass p-6 text-center group hover:bg-white/20 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} bg-white/10 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent size={24} />
                  </div>
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-accent-300 transition-colors">
                      {stat.number}
                </div>
                    <div className="text-sm font-medium text-surface-300 group-hover:text-white transition-colors">
                      {stat.label}
            </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-medium text-surface-300 uppercase tracking-wider">Scroll</span>
            <ArrowRight size={20} className="rotate-90" />
        </div>
        </motion.div>
      </section>

      {/* Company Overview Section - Professional Gradient */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-200"></div>
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
                <Target size={20} className="mr-2" />
                TRANSFORMING BUSINESSES
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Strategic Excellence Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Logical Frameworks
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                We bridge the gap between strategic thinking and practical execution, delivering measurable results through proven methodologies and data-driven insights.
              </p>
            </motion.div>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Challenge Card */}
                <div className="card-elevated p-8 hover:shadow-elevated transition-all duration-500 group">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                      <Brain size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-card text-surface-900 mb-4">The Challenge</h3>
                      <p className="body-regular text-surface-600 leading-relaxed">
                        Modern businesses face unprecedented complexity: unclear strategies, fragmented teams, ineffective leadership, and rapid market changes that demand logical, structured responses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution Card */}
                <div className="card-elevated p-8 hover:shadow-elevated transition-all duration-500 group">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                      <CheckCircle2 size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-card text-surface-900 mb-4">Our Approach</h3>
                      <p className="body-regular text-surface-600 leading-relaxed">
                        We provide logical frameworks, strategic clarity, and actionable solutions that align leadership, engage teams, and create sustainable competitive advantages.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Why Logic Works */}
              <motion.div 
                className="card-elevated p-10 hover:shadow-elevated transition-all duration-500"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="heading-card text-surface-900 mb-8 text-center">Why Logic-Based Consulting Works</h3>
                <div className="space-y-6">
                  {[
                    { icon: Zap, title: 'Eliminates Guesswork', desc: 'Data-driven decisions replace emotional reactions' },
                    { icon: Target, title: 'Creates Clarity', desc: 'Clear pathways to measurable success' },
                    { icon: Users, title: 'Builds Confidence', desc: 'Leadership alignment and team engagement' },
                    { icon: TrendingUp, title: 'Delivers Results', desc: 'Sustainable, long-term transformation' }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4 group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {item.icon ? React.createElement(item.icon, { size: 20, className: "text-primary-600" }) : (
                          <div className="w-5 h-5 bg-primary-600/20 rounded"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-surface-900 mb-2">{item.title}</h4>
                        <p className="text-surface-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Achievement Metrics */}
            <motion.div 
              className="card-elevated p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-white to-surface-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-section text-surface-900 text-center mb-12 lg:mb-16">Proven Track Record</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-surface-200/50 group-hover:border-primary-200 h-full flex flex-col justify-between min-h-[180px]">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-600 mb-3 lg:mb-4 group-hover:text-accent-600 transition-colors">
                        {achievement.metric}
                      </div>
                      <div className="text-surface-700 text-sm sm:text-base mb-3 lg:mb-4 font-semibold leading-tight line-clamp-2">
                        {achievement.description}
                      </div>
                      <div className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full">
                        <span className="text-white font-bold text-xs sm:text-sm">{achievement.trend}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section - Professional Dark */}
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
                <Rocket size={20} className="mr-2" />
                OUR SERVICES
              </div>
              <h2 className="heading-section text-white mb-8">
                Comprehensive Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Modern Businesses
                </span>
              </h2>
              <p className="body-large text-surface-300 max-w-4xl mx-auto">
                From strategic planning to implementation, we provide end-to-end consulting services that transform your vision into measurable results through logical frameworks and proven methodologies.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="card-glass p-8 hover:bg-white/15 transition-all duration-500 group border-surface-700/50 hover:border-accent-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      {service.icon ? React.createElement(service.icon, { size: 28, className: "text-white" }) : (
                        <div className="w-7 h-7 bg-white/20 rounded-lg"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-card text-white mb-4 group-hover:text-accent-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="body-regular text-surface-300 group-hover:text-white transition-colors">
                        {service.description}
                      </p>
                </div>
              </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-surface-200 group-hover:text-white transition-colors">
                        <div className="w-2 h-2 bg-accent-400 rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="font-medium">{feature}</span>
                </div>
                    ))}
              </div>

                  <div className="pt-6 border-t border-surface-700/50 group-hover:border-accent-400/30 transition-colors">
                    <Link 
                      href="/services" 
                      className="inline-flex items-center text-accent-400 font-bold hover:text-accent-300 transition-colors group"
                    >
                      Learn More
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
              <Link 
                href="/services"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-surface-900 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <span>View All Services</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section - Professional Blue */}
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
                <Award size={20} className="mr-2" />
                WHY CHOOSE US
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Why Choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Living With Logic
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                We bring a unique combination of strategic thinking, practical experience, and logical frameworks that set us apart in the consulting industry.
              </p>
            </motion.div>

            {/* Value Proposition Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              {/* Left Column */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Target,
                    title: 'Logic-First Approach',
                    description: 'Unlike traditional consultants who rely on generic frameworks, we develop custom logical models tailored to your specific challenges.',
                    features: ['Data-driven decision frameworks', 'Customized strategic models', 'Measurable outcome tracking']
                  },
                  {
                    icon: Rocket,
                    title: 'Implementation Focus',
                    description: 'We don\'t just provide recommendations—we work alongside your team to ensure successful implementation and sustainable results.',
                    features: ['Hands-on implementation support', 'Team training and development', 'Long-term partnership approach']
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="card-elevated p-8 hover:shadow-elevated transition-all duration-500 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                        {item.icon ? React.createElement(item.icon, { size: 28, className: "text-white" }) : (
                          <div className="w-7 h-7 bg-white/20 rounded"></div>
                        )}
                    </div>
                      <div className="flex-1">
                        <h3 className="heading-card text-surface-900 mb-4">{item.title}</h3>
                        <p className="body-regular text-surface-600 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-surface-700">
                              <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="font-medium text-sm">{feature}</span>
                    </li>
                          ))}
                  </ul>
                </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Column */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Brain,
                    title: 'Deep Expertise',
                    description: 'Our team combines decades of experience across multiple industries with advanced academic credentials and continuous learning.',
                    features: ['Cross-industry experience', 'Advanced certifications', 'Continuous innovation']
                  },
                  {
                    icon: Zap,
                    title: 'Rapid Results',
                    description: 'Our logical frameworks and proven methodologies enable faster decision-making and quicker time-to-value for your organization.',
                    features: ['30-day initial impact', 'Agile delivery methods', 'Continuous optimization']
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="card-elevated p-8 hover:shadow-elevated transition-all duration-500 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                        {item.icon ? React.createElement(item.icon, { size: 28, className: "text-white" }) : (
                          <div className="w-7 h-7 bg-white/20 rounded"></div>
                        )}
                    </div>
                      <div className="flex-1">
                        <h3 className="heading-card text-surface-900 mb-4">{item.title}</h3>
                        <p className="body-regular text-surface-600 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-surface-700">
                              <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="font-medium text-sm">{feature}</span>
                    </li>
                          ))}
                  </ul>
                </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Industries We Serve */}
            <motion.div 
              className="card-elevated p-12 bg-gradient-to-br from-white to-surface-50 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h3 className="heading-card text-surface-900 mb-6">Industries We Serve</h3>
                <p className="body-large text-surface-600 max-w-3xl mx-auto">
                  Our logical frameworks adapt to any industry, delivering customized solutions that drive results.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  { icon: Lightbulb, label: 'Technology' },
                  { icon: Users, label: 'Healthcare' },
                  { icon: Target, label: 'Manufacturing' },
                  { icon: TrendingUp, label: 'Financial Services' },
                  { icon: Brain, label: 'Education' },
                  { icon: Rocket, label: 'Retail & E-commerce' }
                ].map((industry, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl shadow-soft flex items-center justify-center mb-4 group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110 border border-primary-200/50">
                      {industry.icon ? React.createElement(industry.icon, { size: 32, className: "text-primary-600" }) : (
                        <div className="w-8 h-8 bg-primary-600/20 rounded-lg"></div>
                      )}
                    </div>
                    <p className="text-sm font-bold text-surface-700 group-hover:text-primary-600 transition-colors">{industry.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div 
              className="card-elevated p-12 bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h3 className="heading-card text-surface-900 mb-6">Our Credentials</h3>
            </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { title: 'MBA Strategy', subtitle: 'Top Business Schools' },
                    { title: 'PMP Certified', subtitle: 'Project Management' },
                    { title: 'Lean Six Sigma', subtitle: 'Black Belt Certified' },
                    { title: 'Agile Coach', subtitle: 'Scrum Alliance' }
                  ].map((credential, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-soft group-hover:shadow-elevated transition-all duration-300 border border-primary-200/50">
                      <CheckCircle2 size={32} className="text-secondary-600 group-hover:text-primary-600 transition-colors" />
                    </div>
                    <p className="font-bold text-surface-900 mb-1">{credential.title}</p>
                    <p className="text-surface-600 text-sm">{credential.subtitle}</p>
                  </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process Section - Professional Methodology */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-primary-900 to-surface-900"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-accent-900/20 via-transparent to-secondary-900/20"></div>
        
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
                OUR METHODOLOGY
              </div>
              <h2 className="heading-section text-white mb-8">
                Our Proven{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  4D Process
                </span>
              </h2>
              <p className="body-large text-surface-300 max-w-4xl mx-auto">
                Every transformation follows our structured, logical approach that ensures measurable results and sustainable change through systematic execution.
              </p>
            </motion.div>

            {/* Process Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Discover', 
                  description: 'Deep analysis of your current state, challenges, and opportunities through comprehensive assessment',
                  icon: Brain,
                  color: 'from-primary-500 to-accent-500'
                },
                { 
                  step: '02', 
                  title: 'Design', 
                  description: 'Create customized strategies and frameworks tailored to your specific goals and industry context',
                  icon: Lightbulb,
                  color: 'from-accent-500 to-secondary-500'
                },
                { 
                  step: '03', 
                  title: 'Develop', 
                  description: 'Implement solutions with your team through guided execution and hands-on support',
                  icon: Rocket,
                  color: 'from-secondary-500 to-primary-500'
                },
                { 
                  step: '04', 
                  title: 'Deliver', 
                  description: 'Measure results and ensure sustainable long-term success with continuous optimization',
                  icon: TrendingUp,
                  color: 'from-primary-600 to-accent-600'
                }
              ].map((phase, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative">
                    {/* Connection Line (except for last item) */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-accent-400 to-transparent transform translate-x-4 opacity-60"></div>
                    )}
                    
                    <div className="card-glass p-8 hover:bg-white/15 transition-all duration-500 border-surface-700/50 group-hover:border-accent-400/50 h-full">
                      {/* Step Number */}
                      <div className="mb-6">
                        <div className="w-16 h-16 mx-auto mb-4 relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-2xl shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}></div>
                          <div className="relative w-full h-full flex items-center justify-center">
                            {phase.icon ? React.createElement(phase.icon, { size: 24, className: "text-white" }) : (
                              <div className="w-6 h-6 bg-white/20 rounded"></div>
                            )}
                          </div>
                        </div>
                        <div className="text-2xl font-black text-accent-300 group-hover:text-white transition-colors mb-2">
                          {phase.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="heading-card text-white mb-4 group-hover:text-accent-300 transition-colors">
                        {phase.title}
                      </h3>
                      <p className="body-regular text-surface-300 group-hover:text-white transition-colors leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process Benefits */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-glass p-12 bg-gradient-to-br from-white/10 to-white/5 border-accent-400/30">
                <h3 className="heading-card text-white mb-8">Why Our Process Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {[
                    { icon: CheckCircle2, title: 'Structured Approach', desc: 'Systematic methodology ensures nothing is missed' },
                    { icon: Target, title: 'Measurable Results', desc: 'Clear KPIs and milestones track progress' },
                    { icon: Users, title: 'Collaborative Execution', desc: 'Your team is involved every step of the way' }
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        {benefit.icon ? React.createElement(benefit.icon, { size: 20, className: "text-white" }) : (
                          <div className="w-5 h-5 bg-white/20 rounded"></div>
                        )}
                      </div>
                      <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                      <p className="text-surface-300 text-sm">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
              Join 200+ companies that have achieved remarkable growth through our logical approach to business transformation. 
              Your success story starts with a conversation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
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
                  <span>Book Your Free Consultation</span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl lg:text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-white/70 font-medium">Support Available</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl lg:text-4xl font-black text-white mb-2">30-Day</div>
                <div className="text-white/70 font-medium">Money-Back Guarantee</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl lg:text-4xl font-black text-white mb-2">Free</div>
                <div className="text-white/70 font-medium">Initial Consultation</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
