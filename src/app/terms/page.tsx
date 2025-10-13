'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Users, Shield, Award, AlertTriangle, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

// Note: metadata moved to layout or wrapper since this is now a client component

const termsSections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    icon: CheckCircle2,
    content: 'By accessing and using Living With Logic\'s website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.'
  },
  {
    id: 'services',
    title: 'Service Description',
    icon: Award,
    content: 'Living With Logic provides professional business consulting services, including but not limited to:',
    list: [
      'Strategic planning and business consultation',
      'Leadership development and executive coaching',
      'Team workshops and organizational training',
      'Organizational transformation and change management',
      'Performance improvement and process optimization'
    ]
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    icon: Users,
    content: 'As a client, you agree to:',
    list: [
      'Provide accurate and complete information',
      'Maintain confidentiality of proprietary methodologies and materials',
      'Use our services in accordance with applicable laws and regulations',
      'Respect intellectual property rights',
      'Pay fees according to agreed terms'
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    icon: Shield,
    content: 'All content, methodologies, frameworks, and materials provided by Living With Logic remain our intellectual property. Clients receive a limited license to use these materials for their internal business purposes only.'
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    icon: FileText,
    content: 'We maintain strict confidentiality regarding all client information and business details. Similarly, clients agree to maintain confidentiality regarding our proprietary methodologies and business practices.'
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    icon: AlertTriangle,
    content: 'Our liability is limited to the fees paid for the specific services in question. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.'
  },
  {
    id: 'termination',
    title: 'Termination',
    icon: FileText,
    content: 'Either party may terminate consulting engagements with appropriate notice as specified in individual service agreements. Certain obligations, including confidentiality, survive termination.'
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-primary-900/80 to-surface-900"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <FileText size={20} className="mr-2" />
              TERMS OF SERVICE
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Service{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Terms & Conditions
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Please read these terms and conditions carefully before using our services. 
              These terms govern your relationship with Living With Logic.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Terms Content Sections */}
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
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {termsSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <motion.div 
                    key={section.id}
                    className="card-elevated p-10 hover:shadow-elevated transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft ${
                        section.icon === AlertTriangle 
                          ? 'bg-gradient-to-br from-amber-600 to-orange-600' 
                          : 'bg-gradient-to-br from-primary-600 to-accent-600'
                      }`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="heading-card text-surface-900 mb-6">
                          {section.title}
                        </h2>
                        
                        {section.content && (
                          <p className="body-regular text-surface-600 mb-6 leading-relaxed">
                            {section.content}
                          </p>
                        )}
                        
                        {section.list && (
                          <ul className="space-y-3">
                            {section.list.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-3">
                                <CheckCircle2 size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                                <span className="body-regular text-surface-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Changes to Terms Section */}
              <motion.div 
                className="card-elevated p-10 hover:shadow-elevated transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft">
                    <AlertTriangle size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="heading-card text-surface-900 mb-6">
                      Changes to Terms
                    </h2>
                    <p className="body-regular text-surface-600 leading-relaxed">
                      We reserve the right to modify these terms at any time. Changes will be effective immediately 
                      upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-accent-900/10"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Mail size={20} className="mr-2" />
              LEGAL INQUIRIES
            </motion.div>
            <motion.h2 
              className="heading-section text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Questions About Our Terms?
            </motion.h2>
            <motion.p 
              className="body-large text-surface-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              For questions about these Terms of Service or legal matters, please contact our legal team.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a 
                  href="mailto:legal@livingwithlogic.com"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Mail size={20} />
                  <span>legal@livingwithlogic.com</span>
                </a>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <span>General Contact</span>
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