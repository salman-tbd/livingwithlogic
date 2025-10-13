'use client';

import Link from 'next/link';
import { useState } from 'react';
import FormField from '@/components/ui/FormField';
import { validation } from '@/utils/validation';
import { showToast } from '@/utils/toast';
import { registerUser } from '@/utils/userStorage';
import { motion } from 'framer-motion';
import { UserPlus, ArrowRight, Shield, CheckCircle2, Star } from 'lucide-react';

// Note: metadata moved to layout or wrapper since this is now a client component

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const nameError = validation.name(formData.name);
    const emailError = validation.email(formData.email);
    const passwordError = validation.signupPassword(formData.password);
    
    return !nameError && !emailError && !passwordError;
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
      
      // Store user in localStorage
      const userRegistered = registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      if (userRegistered) {
        console.log('User registered successfully:', formData.email);
        showToast.signup();
        setFormData({ name: '', email: '', password: '' });
      } else {
        showToast.error('This email is already registered. Please use a different email or login.');
      }
    } catch {
      showToast.error('There was an error creating your account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600"></div>
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-900/20 via-transparent to-surface-900/10"></div>
      
      <div className="relative flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl shadow-glow border border-white/30 mb-8">
              <Star size={20} className="mr-2" />
              JOIN ELITE CLIENT PORTAL
            </div>
            <h2 className="heading-section text-white mb-4">
              Create Your Account
            </h2>
            <p className="body-regular text-white/90">
              Join our exclusive client portal for premium resources and support
            </p>
          </div>
        </motion.div>

        {/* Signup Form */}
        <motion.div 
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-glow">
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
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Create a secure password (min 8 chars, upper/lower/number)"
                value={formData.password}
                onChange={updateField('password')}
                validation={validation.signupPassword}
                autoComplete="new-password"
                darkMode={true}
              />

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-white/30 rounded bg-white/10 mt-1 focus-ring"
                />
                <label htmlFor="terms" className="ml-3 block text-sm text-white/90 leading-relaxed">
                  I agree to the{' '}
                  <Link href="/terms" className="text-white font-medium hover:text-white/80 underline transition-colors">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-white font-medium hover:text-white/80 underline transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !validateForm()}
                  className="w-full inline-flex justify-center items-center space-x-2 py-3 px-4 bg-white text-primary-600 rounded-xl hover:bg-surface-50 transition-all duration-300 font-bold shadow-soft hover:shadow-elevated focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-600/30 border-t-primary-600 rounded-full animate-spin"></div>
                      <span>Creating account...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus size={20} />
                      <span>Create Account</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white/10 text-white/80">Already have an account?</span>
                </div>
              </div>

              <div className="mt-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/login"
                    className="w-full inline-flex justify-center items-center space-x-2 py-3 px-4 border-2 border-white/30 rounded-xl text-white bg-white/5 hover:bg-white hover:text-primary-600 transition-all duration-300 font-bold focus-ring-inset"
                  >
                    <span>Sign In to Existing Account</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Support */}
            <div className="mt-8 text-center">
              <p className="text-sm text-white/80">
                Questions?{' '}
                <Link href="/contact" className="text-white font-medium hover:text-white/80 transition-colors">
                  Contact our team
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-md mx-auto text-white/80 text-sm">
            <div className="flex items-center justify-center">
              <Shield size={16} className="mr-2" />
              <span>Secure Portal</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle2 size={16} className="mr-2" />
              <span>Premium Resources</span>
            </div>
            <div className="flex items-center justify-center">
              <Star size={16} className="mr-2" />
              <span>Expert Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
