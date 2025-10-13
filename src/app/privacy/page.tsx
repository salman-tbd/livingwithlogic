'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

// Note: metadata moved to layout or wrapper since this is now a client component

const privacySections = [
  {
    id: 'information-collection',
    title: 'Information We Collect',
    icon: FileText,
    subsections: [
      {
        title: 'Personal Information',
        content: 'We collect information you provide directly to us, including your name, email address, phone number, company information, job title, and any other information you choose to provide when you contact us, book consultations, or use our services.'
      },
      {
        title: 'Usage Information',
        content: 'We automatically collect certain information about your use of our website, including your IP address, browser type, pages visited, and the time and date of your visit.'
      }
    ]
  },
  {
    id: 'information-use',
    title: 'How We Use Your Information',
    icon: Eye,
    content: 'We use the information we collect to:',
    list: [
      'Provide, maintain, and improve our consulting services',
      'Communicate with you about our services and respond to your inquiries',
      'Schedule and conduct consultations and meetings',
      'Send you relevant business insights and updates (with your consent)',
      'Comply with legal obligations and protect our rights',
      'Analyze website usage to improve user experience'
    ]
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing and Disclosure',
    icon: Lock,
    content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:',
    list: [
      'With service providers who assist us in operating our website and conducting our business',
      'When required by law or to protect our rights and safety',
      'In connection with a merger, acquisition, or sale of assets (with prior notice)'
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: Shield,
    content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
  },
  {
    id: 'user-rights',
    title: 'Your Rights',
    icon: CheckCircle2,
    content: 'You have the right to:',
    list: [
      'Access and receive a copy of your personal information',
      'Correct inaccurate or incomplete personal information',
      'Request deletion of your personal information',
      'Object to or restrict the processing of your personal information',
      'Withdraw consent where processing is based on consent'
    ]
  }
];

export default function PrivacyPage() {
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
              <Shield size={20} className="mr-2" />
              PRIVACY POLICY
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Privacy Matters
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              Learn how we collect, use, and safeguard your data.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Privacy Content Sections */}
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
              {privacySections.map((section, index) => {
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
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="heading-card text-surface-900 mb-6">
                          {section.title}
                        </h2>
                        
                        {section.subsections ? (
                          <div className="space-y-6">
                            {section.subsections.map((subsection, subIndex) => (
                              <div key={subIndex}>
                                <h3 className="text-xl font-bold text-surface-800 mb-3">
                                  {subsection.title}
                                </h3>
                                <p className="body-regular text-surface-600 leading-relaxed">
                                  {subsection.content}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
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
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Additional Sections */}
              <motion.div 
                className="card-elevated p-10 hover:shadow-elevated transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Eye size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="heading-card text-surface-900 mb-6">
                      Cookie Policy
                    </h2>
                    <p className="body-regular text-surface-600 leading-relaxed">
                      Our website uses cookies and similar technologies to enhance your browsing experience, 
                      analyze website traffic, and understand where our visitors are coming from. You can control 
                      cookie preferences through your browser settings.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="card-elevated p-10 hover:shadow-elevated transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft">
                    <FileText size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="heading-card text-surface-900 mb-6">
                      Changes to This Policy
                    </h2>
                    <p className="body-regular text-surface-600 leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by 
                      posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
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
              HAVE QUESTIONS?
            </motion.div>
            <motion.h2 
              className="heading-section text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Contact Us About Privacy
            </motion.h2>
            <motion.p 
              className="body-large text-surface-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              If you have any questions about this Privacy Policy, please don&apos;t hesitate to reach out to us.
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
                  href="mailto:privacy@livingwithlogic.com"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Mail size={20} />
                  <span>privacy@livingwithlogic.com</span>
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