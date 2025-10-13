'use client';

import Link from 'next/link';
import { useState } from 'react';
import FormField from '@/components/ui/FormField';
import { validation } from '@/utils/validation';
import { showToast } from '@/utils/toast';
import { validateUserCredentials, isEmailRegistered } from '@/utils/userStorage';
import { motion } from 'framer-motion';
import { LogIn, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

// Note: metadata moved to layout or wrapper since this is now a client component

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const emailError = validation.email(formData.email);
    const passwordError = validation.password(formData.password);
    
    return !emailError && !passwordError;
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
      
      console.log('Login form submitted:', formData);
      
      // Check if user exists and credentials match
      const isValidUser = validateUserCredentials(formData.email, formData.password);
      const isRegistered = isEmailRegistered(formData.email);
      
      if (isValidUser) {
        // User exists with correct credentials - account under review
        showToast.accountUnderReview();
      } else if (isRegistered) {
        // User exists but wrong password
        showToast.error('Invalid credentials. Please check your password.');
      } else {
        // User doesn't exist - redirect to signup
        showToast.loginRedirect();
      }
      
      setFormData({ email: '', password: '' });
    } catch {
      showToast.error('There was an error with your login. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-primary-900 to-surface-900"></div>
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-accent-900/20 via-transparent to-primary-900/20"></div>
      
      <div className="relative flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
              <Shield size={20} className="mr-2" />
              CLIENT PORTAL
            </div>
            <h2 className="heading-section text-white mb-4">
              Welcome{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Back
              </span>
            </h2>
            <p className="body-regular text-surface-300">
              Access your consulting materials and resources
            </p>
          </div>
        </motion.div>

        {/* Login Form */}
        <motion.div 
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="card-glass p-8 border-surface-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={updateField('password')}
                validation={validation.password}
                autoComplete="current-password"
                darkMode={true}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-surface-300 rounded bg-surface-800 focus-ring"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-surface-300">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-accent-400 hover:text-accent-300 transition-colors">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !validateForm()}
                  className="w-full inline-flex justify-center items-center space-x-2 py-3 px-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-bold shadow-soft hover:shadow-elevated focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <>
                      <LogIn size={20} />
                      <span>Sign In</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-surface-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-surface-800 text-surface-400">Don&apos;t have an account?</span>
                </div>
              </div>

              <div className="mt-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/signup"
                    className="w-full inline-flex justify-center items-center space-x-2 py-3 px-4 border-2 border-accent-400/50 rounded-xl text-accent-400 bg-white/5 hover:bg-accent-400 hover:text-surface-900 transition-all duration-300 font-bold focus-ring"
                  >
                    <span>Create New Account</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Support */}
            <div className="mt-8 text-center">
              <p className="text-sm text-surface-400">
                Need help?{' '}
                <Link href="/contact" className="text-accent-400 hover:text-accent-300 font-medium transition-colors">
                  Contact our support team
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-6 text-surface-400 text-sm">
            <div className="flex items-center">
              <Shield size={16} className="mr-2" />
              <span>Secure Login</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 size={16} className="mr-2" />
              <span>Encrypted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
