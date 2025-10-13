// User registration storage utilities

export interface RegisteredUser {
  email: string;
  password: string;
  name: string;
  registeredAt: string;
}

const STORAGE_KEY = 'living_with_logic_users';

// Get all registered users from localStorage
export const getRegisteredUsers = (): RegisteredUser[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const users = localStorage.getItem(STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error reading users from localStorage:', error);
    return [];
  }
};

// Save a new user to localStorage
export const registerUser = (userData: Omit<RegisteredUser, 'registeredAt'>): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const users = getRegisteredUsers();
    
    // Check if user already exists
    const existingUser = users.find(user => user.email.toLowerCase() === userData.email.toLowerCase());
    if (existingUser) {
      return false; // User already exists
    }
    
    // Add new user
    const newUser: RegisteredUser = {
      ...userData,
      registeredAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    return true;
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
    return false;
  }
};

// Check if user exists and credentials match
export const validateUserCredentials = (email: string, password: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const users = getRegisteredUsers();
    const user = users.find(user => 
      user.email.toLowerCase() === email.toLowerCase() && 
      user.password === password
    );
    return !!user;
  } catch (error) {
    console.error('Error validating user credentials:', error);
    return false;
  }
};

// Check if email is registered (regardless of password)
export const isEmailRegistered = (email: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const users = getRegisteredUsers();
    return users.some(user => user.email.toLowerCase() === email.toLowerCase());
  } catch (error) {
    console.error('Error checking email registration:', error);
    return false;
  }
};

// Clear all registered users (for development/testing)
export const clearAllUsers = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing users from localStorage:', error);
  }
};
