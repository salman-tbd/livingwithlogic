'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import FormField from '@/components/ui/FormField';
import { validation } from '@/utils/validation';
import { showToast } from '@/utils/toast';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, ArrowRight, MessageSquare, MapPin, Clock, CheckCircle2, Send, HelpCircle } from 'lucide-react';

// Note: metadata export removed since this is now a client component
// SEO will be handled by the parent layout or a wrapper component

const contactMethods = [
  {
    title: 'Schedule a Consultation',
    description: 'Book a free 30-minute consultation to discuss your business challenges and explore how we can help.',
    icon: Calendar,
    action: 'Book Now',
    href: '/booking'
  },
  {
    title: 'Send us a Message',
    description: 'Have a specific question or want to share details about your project? Send us a detailed message.',
    icon: MessageSquare,
    action: 'Contact Form',
    href: '#contact-form'
  },
  {
    title: 'Call us Directly',
    description: 'Prefer to speak directly? Call us during business hours for immediate assistance.',
    icon: Phone,
    action: 'Call Now',
    href: 'tel:+1-555-LOGIC-1'
  }
];

const officeInfo = [
  {
    title: 'Headquarters',
    address: '503-B, Priviera Nehrunagar Circle\nNear Bank of Baroda,\nAhmedabad – 380015',
    phone: '+1 (555) LOGIC-1',
    email: 'info@livingwithlogic.com'
  },
  {
    title: 'Business Hours',
    address: 'Monday - Friday\n10:00 AM - 7:00 PM IST\n\nWeekends\nBy Appointment Only',
    phone: 'Emergency: +1 (555) LOGIC-2',
    email: 'info@livingwithlogic.com'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const nameError = validation.name(formData.name);
    const emailError = validation.email(formData.email);
    const messageError = validation.message(formData.message);
    
    return !nameError && !emailError && !messageError;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submitted:', formData);
      
      showToast.contact();
      setFormData({ name: '', email: '', message: '' });
    } catch {
      showToast.error('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            src="/assets/contact/businessman-talking-cellphone-while-his-partner-working-laptop-office.jpg"
            alt="Businessman talking on cellphone while his partner working on laptop in office"
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
              <MessageSquare size={20} className="mr-2" />
              CONNECT WITH US
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Let&apos;s Start The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Conversation
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Ready to transform your business? Let&apos;s start the conversation. We&apos;re here to help you navigate your challenges and achieve your goals.
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
                  <span>Schedule Call</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a 
                  href="tel:+1-555-LOGIC-1"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
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

      {/* Contact Methods - Professional Light */}
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
                <MessageSquare size={20} className="mr-2" />
                HOW CAN WE HELP?
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Choose Your Preferred{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Connection
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                Choose the best way to connect with us based on your needs and preferences.
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index} 
                  className="card-elevated p-10 text-center hover:shadow-elevated transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                    {method.icon ? React.createElement(method.icon, { size: 32, className: "text-white" }) : (
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    )}
                  </div>
                  <h3 className="heading-card text-surface-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="body-regular text-surface-600 mb-8 group-hover:text-surface-700 transition-colors">
                    {method.description}
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      href={method.href}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-bold shadow-soft hover:shadow-elevated focus-ring"
                    >
                      <span>{method.action}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form - Professional Dark */}
      <motion.section 
        id="contact-form" 
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
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <Send size={20} className="mr-2" />
                SEND MESSAGE
              </div>
              <h2 className="heading-section text-white mb-8">
                Send Us a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Message
                </span>
              </h2>
              <p className="body-large text-surface-300">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="card-glass p-12 border-surface-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  id="name"
                  name="name"
                  label="Full Name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={updateField('name')}
                  validation={validation.name}
                  autoComplete="name"
                  darkMode={true}
                />

                <FormField
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={updateField('email')}
                  validation={validation.email}
                  autoComplete="email"
                  darkMode={true}
                />

                <FormField
                  id="message"
                  name="message"
                  type="textarea"
                  label="Message"
                  placeholder="Tell us about your business challenges, goals, and how we can help you..."
                  value={formData.message}
                  onChange={updateField('message')}
                  validation={validation.message}
                  rows={6}
                  darkMode={true}
                />

                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !validateForm()}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-bold text-lg shadow-soft hover:shadow-elevated focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                  <p className="text-sm text-surface-400 mt-4 flex items-center justify-center">
                    <Clock size={14} className="mr-2" />
                    We&apos;ll respond soon during business days.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Office Information - Professional Light */}
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
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-secondary-600 font-bold rounded-2xl shadow-soft border border-secondary-200/50 mb-8">
                <MapPin size={20} className="mr-2" />
                OFFICE INFO
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Visit Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-accent-600">
                  Office
                </span>
              </h2>
            </motion.div>

            {/* Office Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {officeInfo.map((office, index) => (
                <motion.div 
                  key={index} 
                  className="card-elevated p-10 hover:shadow-elevated transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="heading-card text-surface-900 mb-8">{office.title}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-secondary-600 mb-3 text-lg flex items-center">
                        <MapPin size={18} className="mr-2" />
                        Address
                      </h4>
                      <p className="text-surface-700 whitespace-pre-line leading-relaxed">{office.address}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-600 mb-3 text-lg flex items-center">
                        <Mail size={18} className="mr-2" />
                        Email
                      </h4>
                      <p className="text-surface-700 text-lg">{office.email}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - Professional Dark */}
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
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <HelpCircle size={20} className="mr-2" />
                FAQ
              </div>
              <h2 className="heading-section text-white mb-8">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Questions
                </span>
              </h2>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-8">
              {[
                {
                  question: "How long does a typical consulting engagement last?",
                  answer: "Engagement duration varies based on project scope. Strategic consulting typically runs 3-6 months, while leadership development programs range from 6-12 months. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you work with companies of all sizes?",
                  answer: "Yes, we work with organizations ranging from startups to Fortune 500 companies. Our methodologies are scalable and can be adapted to fit the unique needs and resources of any organization size."
                },
                {
                  question: "What's included in the free consultation?",
                  answer: "Our 30-minute consultation includes an assessment of your current challenges, discussion of your goals, overview of our relevant services, and preliminary recommendations. There's no obligation to proceed."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-8 border-surface-700/50 hover:bg-white/15 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-white mb-4 text-xl group-hover:text-accent-300 transition-colors flex items-start">
                    <HelpCircle size={20} className="mr-3 mt-1 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-surface-300 leading-relaxed text-lg group-hover:text-white transition-colors ml-11">
                    {faq.answer}
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
              START YOUR JOURNEY
            </motion.div>
            <motion.h2 
              className="heading-section text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let&apos;s Start Your Transformation Journey
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Every successful transformation begins with a conversation. Schedule your free consultation today and discover how we can help you achieve your goals.
            </motion.p>
            <motion.div
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
                  <span>Schedule Free Consultation</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
