'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import FormField from '@/components/ui/FormField';
import { validation } from '@/utils/validation';
import { showToast } from '@/utils/toast';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, ArrowRight, Star, Users, Phone, Mail, MessageSquare, Send } from 'lucide-react';

// Note: metadata moved to layout or wrapper since this is now a client component

const consultationOptions = [
  {
    title: 'Strategy Discovery Call',
    duration: '30 minutes',
    price: 'Free',
    description: 'Perfect for initial discussions about your business challenges and exploration of how we can help.',
    features: [
      'Business challenge assessment',
      'Strategic recommendations overview',
      'Service alignment discussion',
      'Next steps planning',
      'No obligation consultation'
    ],
    popular: true
  },
  {
    title: 'Deep Dive Strategy Session',
    duration: '90 minutes',
    price: '$500',
    description: 'Comprehensive analysis session with detailed strategic recommendations and implementation roadmap.',
    features: [
      'Comprehensive business analysis',
      'Detailed strategic recommendations',
      'Implementation roadmap',
      'Priority action items',
      'Follow-up summary report'
    ],
    popular: false
  },
  {
    title: 'Executive Leadership Assessment',
    duration: '2 hours',
    price: '$750',
    description: 'In-depth leadership evaluation with personalized development plan and coaching recommendations.',
    features: [
      'Leadership assessment tools',
      'Personality and style analysis',
      'Personalized development plan',
      'Coaching recommendations',
      'Team dynamics evaluation'
    ],
    popular: false
  }
];

const availableSlots = [
  { date: '2024-01-25', day: 'Thursday', slots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
  { date: '2024-01-26', day: 'Friday', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
  { date: '2024-01-29', day: 'Monday', slots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
  { date: '2024-01-30', day: 'Tuesday', slots: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'] },
  { date: '2024-01-31', day: 'Wednesday', slots: ['9:00 AM', '11:00 AM', '2:00 PM'] }
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePlanSelection = () => {
    showToast.planLoginRequired();
  };

  const handleSlotSelection = (date: string, slot: string) => {
    const slotKey = `${date}-${slot}`;
    setSelectedSlot(slotKey);
  };

  const handleGrabSeat = () => {
    showToast.slotLoginRequired();
  };

  const validateForm = () => {
    const fullNameError = validation.fullName(formData.fullName);
    const emailError = validation.email(formData.email);
    const phoneError = validation.phone(formData.phone);
    const dateError = validation.required(formData.date);
    
    return !fullNameError && !emailError && !phoneError && !dateError;
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
      
      console.log('Booking form submitted:', formData);
      
      showToast.booking();
      setFormData({ fullName: '', email: '', phone: '', date: '' });
    } catch {
      showToast.error('There was an error with your booking. Please try again.');
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
            src="/assets/booking/day-office-travel-agency.jpg"
            alt="Professional office environment for travel and business planning"
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
              <Calendar size={20} className="mr-2" />
              BOOK YOUR CONSULTATION
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your Journey To Success{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Starts Here
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Take the first step toward transforming your business. Schedule a consultation with our expert team and discover how we can help you achieve your goals.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a 
                  href="#consultation-options"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-surface-900 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Calendar size={20} />
                  <span>Choose Consultation</span>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <MessageSquare size={20} />
                  <span>Ask Questions First</span>
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

      {/* Consultation Options - Professional Dark */}
      <motion.section 
        id="consultation-options" 
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
                <Users size={20} className="mr-2" />
                CONSULTATION OPTIONS
              </div>
              <h2 className="heading-section text-white mb-8">
                Choose Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Consultation Type
                </span>
              </h2>
              <p className="body-large text-surface-300 max-w-4xl mx-auto">
                Select the consultation format that best fits your needs and objectives.
              </p>
            </motion.div>

            {/* Consultation Options Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {consultationOptions.map((option, index) => (
                <motion.div 
                  key={index} 
                  className={`relative card-glass p-10 border-surface-700/50 hover:bg-white/15 transition-all duration-500 group ${option.popular ? 'ring-2 ring-accent-400/50' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-500 to-secondary-500 text-white rounded-2xl font-bold shadow-glow text-sm">
                        <Star size={16} className="mr-2" />
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="heading-card text-white mb-4 group-hover:text-accent-300 transition-colors">
                      {option.title}
                    </h3>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400 mb-3">
                      {option.price}
                    </div>
                    <div className="flex items-center justify-center text-surface-300 text-lg">
                      <Clock size={18} className="mr-2" />
                      {option.duration}
                    </div>
                  </div>
                  
                  <p className="text-surface-300 mb-8 text-center leading-relaxed group-hover:text-white transition-colors">
                    {option.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-surface-300 group-hover:text-white transition-colors">
                        <CheckCircle2 size={18} className="text-secondary-500 mr-3 flex-shrink-0" />
                        <span className="font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    onClick={handlePlanSelection}
                    className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring ${
                      option.popular 
                        ? 'bg-gradient-to-r from-accent-600 to-secondary-600 text-white hover:from-accent-700 hover:to-secondary-700' 
                        : 'bg-white/10 text-white border-2 border-accent-400/50 hover:bg-accent-400 hover:text-surface-900'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Select This Option
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Booking Calendar - Professional Light */}
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
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-primary-600 font-bold rounded-2xl shadow-soft border border-primary-200/50 mb-8">
                <Calendar size={20} className="mr-2" />
                SELECT DATE & TIME
              </div>
              <h2 className="heading-section text-surface-900 mb-6">
                Select Your Preferred{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Date & Time
                </span>
              </h2>
              <p className="body-regular text-surface-600">
                All times are shown in Eastern Standard Time (EST)
              </p>
            </motion.div>

            {/* Calendar Grid */}
            <motion.div 
              className="card-elevated p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableSlots.map((daySlots, index) => (
                  <motion.div 
                    key={index} 
                    className="border border-surface-200 rounded-2xl p-6 hover:border-primary-300 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-6">
                      <h3 className="heading-card text-surface-900 mb-2">{daySlots.day}</h3>
                      <p className="text-surface-500 text-sm">
                        {new Date(daySlots.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {daySlots.slots.map((slot, slotIndex) => {
                        const slotKey = `${daySlots.date}-${slot}`;
                        const isSelected = selectedSlot === slotKey;
                        return (
                          <motion.button
                            key={slotIndex}
                            onClick={() => handleSlotSelection(daySlots.date, slot)}
                            className={`w-full py-3 px-4 text-sm border rounded-xl transition-all duration-300 font-medium focus-ring ${
                              isSelected 
                                ? 'border-primary-600 bg-primary-50 text-primary-700' 
                                : 'border-surface-300 hover:bg-primary-50 hover:border-primary-400 hover:text-primary-600'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-center">
                              <Clock size={14} className="mr-2" />
                              {slot}
                              {isSelected && <CheckCircle2 size={14} className="ml-2 text-primary-600" />}
                            </div>
                          </motion.button>
                        );
                      })}
                      
                      {/* Grab Your Seat Button - Shows when a slot from this day is selected */}
                      {daySlots.slots.some(slot => selectedSlot === `${daySlots.date}-${slot}`) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-3 border-t border-surface-200"
                        >
                          <motion.button
                            onClick={handleGrabSeat}
                            className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-bold text-sm hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-center">
                              <Calendar size={16} className="mr-2" />
                              Grab Your Seat
                            </div>
                          </motion.button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Custom Scheduling */}
              <motion.div 
                className="text-center mt-8 p-6 bg-surface-50 rounded-2xl border border-surface-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-surface-600 mb-4">
                  Don&apos;t see a time that works for you?
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-accent-600 font-bold transition-colors"
                  >
                    <span>Contact us for custom scheduling</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Booking Form - Professional Dark */}
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
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <Send size={20} className="mr-2" />
                COMPLETE BOOKING
              </div>
              <h2 className="heading-section text-white mb-6">
                Complete Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Booking
                </span>
              </h2>
              <p className="body-large text-surface-300">
                Please provide your details to confirm your consultation.
              </p>
            </motion.div>

            {/* Booking Form */}
            <motion.div 
              className="card-glass p-8 border-surface-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={updateField('fullName')}
                  validation={validation.fullName}
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
                  id="date"
                  name="date"
                  type="date"
                  label="Preferred Date"
                  value={formData.date}
                  onChange={updateField('date')}
                  validation={validation.required}
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
                        <span>Booking...</span>
                      </>
                    ) : (
                      <>
                        <Calendar size={20} />
                        <span>Confirm Booking</span>
                      </>
                    )}
                  </motion.button>
                  <p className="text-sm text-surface-400 mt-4 flex items-center justify-center">
                    <Mail size={14} className="mr-2" />
                    You&apos;ll receive a confirmation email with meeting details within 24 hours.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What to Expect - Professional Light */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-secondary-50"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/5 via-transparent to-accent-900/5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-secondary-600 font-bold rounded-2xl shadow-soft border border-secondary-200/50 mb-8">
                <CheckCircle2 size={20} className="mr-2" />
                WHAT TO EXPECT
              </div>
              <h2 className="heading-section text-surface-900 mb-6">
                What to Expect During Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-accent-600">
                  Consultation
                </span>
              </h2>
            </motion.div>

            {/* Expectation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Before the Meeting",
                  items: [
                    "Receive confirmation email with meeting link",
                    "Brief pre-consultation questionnaire",
                    "Calendar reminder 24 hours prior"
                  ]
                },
                {
                  title: "During the Meeting",
                  items: [
                    "Discussion of your business challenges",
                    "Initial strategic recommendations",
                    "Q&A about our services and approach"
                  ]
                },
                {
                  title: "After the Meeting",
                  items: [
                    "Follow-up email with key insights",
                    "Proposed next steps (if applicable)",
                    "No pressure, no obligation"
                  ]
                },
                {
                  title: "Need to Reschedule?",
                  items: [
                    "24-hour advance notice appreciated",
                    "Contact us via email or phone",
                    "We'll find a new time that works"
                  ]
                }
              ].map((section, index) => (
                <motion.div 
                  key={index}
                  className="card-elevated p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="heading-card text-surface-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle2 size={16} className="text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-surface-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Alternative Contact - Professional Gradient */}
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
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl shadow-glow border border-white/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MessageSquare size={20} className="mr-2" />
              ALTERNATIVE OPTIONS
            </motion.div>
            <motion.h2 
              className="heading-section text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Prefer a Different Approach?
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Not ready to book a meeting yet? We&apos;re here to help in whatever way works best for you.
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
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Mail size={20} />
                  <span>Send us a Message</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a 
                  href="tel:+1-555-LOGIC-1"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <Phone size={20} />
                  <span>Call Us Directly</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
