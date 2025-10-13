import toast from 'react-hot-toast';

export const showToast = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  info: (message: string) => toast(message, { icon: 'ℹ️' }),
  
  // Form-specific success messages
  contact: () => toast.success('Thank you for contacting us, we will contact you soon'),
  booking: () => toast.success('Thank you for booking, we will contact you soon'),
  newsletter: () => toast.success('Thank you for subscribing, we will contact you soon'),
  signup: () => toast.success('Thank you for signup, we will contact you soon'),
  loginRedirect: () => toast('Please signup', { icon: 'ℹ️' }),
  blogLoginRequired: () => toast('Login first for reading article', { 
    icon: '🔒',
    duration: 4000,
    style: {
      background: '#1f2937',
      color: '#fff',
      fontWeight: 'bold'
    }
  }),
  planLoginRequired: () => toast('Login first to go with the plan', { 
    icon: '🔒',
    duration: 4000,
    style: {
      background: '#1f2937',
      color: '#fff',
      fontWeight: 'bold'
    }
  }),
  slotLoginRequired: () => toast('Login first to grab your preferred slot', { 
    icon: '🔒',
    duration: 4000,
    style: {
      background: '#1f2937',
      color: '#fff',
      fontWeight: 'bold'
    }
  }),
  passwordResetSuccess: () => toast('Your reset password request is placed successfull and will receive an reset link in your email', { 
    duration: 5000,
    style: {
      background: '#065f46',
      color: '#fff',
      fontWeight: 'bold'
    }
  }),
  accountUnderReview: () => toast('Your account is under review we will get back soon', { 
    icon: '⏳',
    duration: 5000,
    style: {
      background: '#1d4ed8',
      color: '#fff',
      fontWeight: 'bold'
    }
  }),
  newsletterSuccess: () => toast('Thank you for subscribing us we will contact you soon', { 
    icon: '📧',
    duration: 5000,
    style: {
      background: '#065f46',
      color: '#fff',
      fontWeight: 'bold'
    }
  }),
  
  // Generic form success with dynamic context
  formSuccess: (context: string) => toast.success(`Thank you for ${context}, we will contact you soon`)
};
