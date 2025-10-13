'use client';

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Calendar, LogIn } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-soft-lg border-b border-surface-200/50' 
            : 'bg-white/80 backdrop-blur-md shadow-soft border-b border-surface-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/" 
                className="flex items-center group focus-ring"
                aria-label="Living With Logic - Home"
              >
                <div className="relative flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/logo/Living with logic Logo-02.png"
                    alt="Living With Logic"
                    width={200}
                    height={64}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" aria-label="Main navigation">
              {mainNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl group focus-ring ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50 shadow-soft'
                        : 'text-surface-700 hover:text-primary-600 hover:bg-surface-50'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary-600 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop Auth & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/login"
                className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-surface-700 hover:text-primary-600 transition-colors rounded-xl focus-ring group"
              >
                <LogIn size={16} className="group-hover:scale-110 transition-transform" />
                <span>Login</span>
              </Link>
              
              <Link
                href="/signup"
                className="px-5 py-2.5 bg-surface-100 hover:bg-surface-200 text-surface-900 font-semibold rounded-xl transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
              >
                Sign up
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/booking"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-elevated hover:from-primary-700 hover:to-accent-700 transition-all duration-300 focus-ring group"
                >
                  <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                  <span>Book Consultation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              onClick={toggleMobileMenu}
              className="lg:hidden relative p-3 text-surface-700 hover:text-primary-600 focus-ring-inset rounded-xl transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 relative">
                {isMobileMenuOpen ? (
                  <X size={24} className="absolute inset-0" />
                ) : (
                  <Menu size={24} className="absolute inset-0" />
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-surface-900/50 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-80 h-full bg-white shadow-soft-lg lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-surface-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <span className="font-display font-black text-surface-900">Menu</span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-surface-500 hover:text-surface-700 focus-ring-inset rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 py-8" aria-label="Mobile navigation">
                  <div className="space-y-3">
                    {mainNavItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl ${
                            isActive(item.href)
                              ? 'text-primary-600 bg-primary-50 shadow-soft'
                              : 'text-surface-700 hover:text-primary-600 hover:bg-surface-50'
                          }`}
                          aria-current={isActive(item.href) ? 'page' : undefined}
                        >
                          {item.label}
                          {isActive(item.href) && (
                            <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></div>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Auth Section */}
                  <div className="mt-8 pt-8 border-t border-surface-200">
                    <div className="space-y-3">
                      <Link
                        href="/login"
                        className="flex items-center space-x-3 px-4 py-3 text-base font-semibold text-surface-700 hover:text-primary-600 hover:bg-surface-50 transition-all duration-300 rounded-xl"
                      >
                        <LogIn size={20} />
                        <span>Login</span>
                      </Link>
                      
                      <Link
                        href="/signup"
                        className="flex items-center justify-center px-4 py-3 bg-surface-100 text-surface-900 font-semibold rounded-xl hover:bg-surface-200 transition-all duration-300 shadow-soft"
                      >
                        Sign up
                      </Link>
                      
                      <Link
                        href="/booking"
                        className="flex items-center justify-center space-x-2 px-4 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-soft"
                      >
                        <Calendar size={20} />
                        <span>Book Consultation</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}