'use client';

import Link from 'next/link';
import { useState } from 'react';
import FormField from '@/components/ui/FormField';
import { validation } from '@/utils/validation';
import { showToast } from '@/utils/toast';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Shield, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const emailError = validation.email(email);
    return !emailError;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Password reset requested for:', email);
      
      // Show success message
      showToast.passwordResetSuccess();
      setEmail('');
    } catch {
      showToast.error('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-accent-900/10"></div>

      <div className="relative w-full max-w-md">
        {/* Back to Login Link */}
        <motion.div 
          className="mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/login" 
            className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to Login</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-6">
            <Shield size={20} className="mr-2" />
            PASSWORD RESET
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Forgot Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
              Password?
            </span>
          </h1>
          <p className="text-surface-300 text-lg">
            No worries! Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div 
          className="card-glass p-8 border-surface-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="your.email@company.com"
              value={email}
              onChange={setEmail}
              validation={validation.email}
              autoComplete="email"
              darkMode={true}
            />

            <motion.button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg rounded-xl hover:from-primary-700 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-surface-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-soft hover:shadow-elevated"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Mail size={20} />
                  <span>Send Reset Link</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Information Cards */}
          <div className="mt-8 space-y-4">
            <motion.div 
              className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-400/30 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-green-300 font-semibold text-sm mb-1">What happens next?</p>
                <p className="text-surface-300 text-sm">
                  You&apos;ll receive an email with a secure link to reset your password within a few minutes.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-3 p-4 bg-amber-500/10 border border-amber-400/30 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <AlertCircle size={20} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-amber-300 font-semibold text-sm mb-1">Can&apos;t find the email?</p>
                <p className="text-surface-300 text-sm">
                  Check your spam folder or contact our support team for assistance.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-surface-400 text-sm">
            Remember your password?{' '}
            <Link 
              href="/login" 
              className="font-medium text-accent-400 hover:text-accent-300 transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </motion.div>

        {/* Security Badge */}
        <motion.div 
          className="flex items-center justify-center space-x-4 mt-8 text-surface-500 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="flex items-center space-x-1">
            <Shield size={14} />
            <span>Secure Reset</span>
          </div>
          <div className="w-1 h-1 bg-surface-600 rounded-full"></div>
          <span>256-bit Encryption</span>
        </motion.div>
      </div>
    </div>
  );
}
