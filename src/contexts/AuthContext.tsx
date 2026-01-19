import React, { createContext, useContext, useEffect, useState } from 'react';
import type { AuthUser, UserRole } from '@/types';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  demoLogin: (role: UserRole, fullName?: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage
    const storedUser = localStorage.getItem('demo_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('demo_user');
      }
    }
    setLoading(false);
  }, []);

  const demoLogin = (role: UserRole, fullName?: string) => {
    const demoUser: AuthUser = {
      id: `demo-${role}-${Date.now()}`,
      email: `demo.${role}@rav.co.tz`,
      full_name: fullName || `Demo ${role.charAt(0).toUpperCase() + role.slice(1)}`,
      role: role,
    };

    setUser(demoUser);
    localStorage.setItem('demo_user', JSON.stringify(demoUser));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('demo_user');
  };

  const value: AuthContextType = {
    user,
    loading,
    demoLogin,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
