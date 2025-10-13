'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Shield, LinkedinIcon, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog & Insights' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/booking', label: 'Book Consultation' },
  ];

  const serviceLinks = [
    { href: '/services', label: 'Strategic Consulting' },
    { href: '/services', label: 'Leadership Development' },
    { href: '/services', label: 'Organizational Excellence' },
    { href: '/services', label: 'Innovation Strategy' },
  ];

  // const resourceLinks = [
  //   { href: '/blog', label: 'Articles & Insights' },
  //   { href: '/services', label: 'Case Studies' },
  //   { href: '/contact', label: 'Free Consultation' },
  //   { href: '/about', label: 'Our Methodology' },
  // ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/livingwithlogic/',
      icon: ({ size }: { size: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600'
    },
    {
      name: 'Twitter', 
      href: 'https://x.com/livingwith27991',
      icon: Twitter,
      color: 'hover:bg-blue-400'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61582139523081',
      icon: Facebook,
      color: 'hover:bg-blue-700'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 text-white overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info & Newsletter */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <Link 
                  href="/" 
                  className="inline-block group focus-ring"
                  aria-label="Living With Logic - Home"
                >
                  <div className="relative h-16 w-auto group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/assets/logo/Living with logic Logo-04.png"
                      alt="Living With Logic"
                      width={200}
                      height={64}
                      className="h-16 w-auto object-contain brightness-0 invert transition-transform duration-300"
                      priority
                    />
                  </div>
                </Link>
                <p className="mt-4 text-surface-300 leading-relaxed">
                  Transforming businesses through strategic clarity and logical frameworks. We help organizations achieve measurable results.
                </p>
              </div>

            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="flex items-center text-surface-300 hover:text-accent-400 transition-colors group focus-ring"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-white mb-6">Services</h3>
              <ul className="space-y-4">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="flex items-center text-surface-300 hover:text-accent-400 transition-colors group focus-ring"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-white mb-6">Get in Touch</h3>
              
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 group">
                  <Mail size={16} className="text-accent-400 flex-shrink-0" />
                  <a 
                    href="mailto:info@livingwithlogic.com" 
                    className="text-surface-300 hover:text-white transition-colors focus-ring"
                  >
                    info@livingwithlogic.com
                  </a>
                </div>
              
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-accent-400 flex-shrink-0 mt-0.5" />
                  <address className="text-surface-300 not-italic">
                  503-B, Priviera Nehrunagar Circle,
                  Near Bank of Baroda,
                  Ahmedabad – 380015
                  </address>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mb-8"
              >
                <Link
                  href="/booking"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring group"
                >
                  <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                  <span>Book Consultation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Social Media Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-surface-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring group`}
                        aria-label={`Follow us on ${social.name}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent size={18} className="group-hover:scale-110 transition-transform" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-surface-700/50 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-surface-400 text-sm">
                © {currentYear} Living With Logic. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <Link 
                  href="/privacy" 
                  className="text-surface-400 hover:text-white transition-colors focus-ring"
                >
                  Privacy Policy
                </Link>
                <span className="text-surface-600">•</span>
                <Link 
                  href="/terms" 
                  className="text-surface-400 hover:text-white transition-colors focus-ring"
                >
                  Terms of Service
                </Link>
                <span className="text-surface-600">•</span>
                <Link 
                  href="/login" 
                  className="text-surface-400 hover:text-white transition-colors focus-ring"
                >
                  Client Portal
                </Link>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-surface-400 text-sm">
              <Shield size={16} className="text-secondary-400" />
              <span>Certified Business Consultants</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}