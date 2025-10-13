// Validation utility functions

export const validation = {
  name: (value: string) => {
    const trimmed = value.trim();
    if (trimmed.length < 2) return 'Name must be at least 2 characters long';
    if (trimmed.length > 80) return 'Name must be less than 80 characters';
    return null;
  },

  fullName: (value: string) => {
    const trimmed = value.trim();
    if (trimmed.length < 2) return 'Full name must be at least 2 characters long';
    return null;
  },

  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return null;
  },

  password: (value: string) => {
    if (value.length < 6) return 'Password must be at least 6 characters long';
    return null;
  },

  signupPassword: (value: string) => {
    if (value.length < 8) return 'Password must be at least 8 characters long';
    if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
    if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
    if (!/\d/.test(value)) return 'Password must contain at least one number';
    return null;
  },

  phone: (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length < 7 || cleaned.length > 20) return 'Phone number must be 7-20 digits';
    return null;
  },

  message: (value: string) => {
    const trimmed = value.trim();
    if (trimmed.length < 10) return 'Message must be at least 10 characters long';
    if (trimmed.length > 2000) return 'Message must be less than 2000 characters';
    return null;
  },

  required: (value: string) => {
    if (!value || value.trim().length === 0) return 'This field is required';
    return null;
  }
};

export type ValidationFunction = (value: string) => string | null;
