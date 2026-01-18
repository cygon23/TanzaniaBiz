export type { Database, UserRole, BusinessStage, ComplianceStatus, SessionStatus } from './database';

// Auth Types
export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  full_name: string;
  avatar_url?: string;
  company_name?: string;
}

// Entrepreneur Dashboard Types
export interface EntrepreneurStats {
  businessScore: number;
  complianceStatus: number;
  learningProgress: {
    completed: number;
    total: number;
  };
  fundingRaised: number;
}

export interface RegistrationStep {
  id: string;
  label: string;
  status: 'completed' | 'in_progress' | 'pending';
  completedDate?: string;
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  time: string;
  amount?: string;
}

// Mentor Dashboard Types
export interface MentorStats {
  activeMentees: number;
  sessionHours: number;
  successRate: number;
  rating: number;
}

export interface Mentee {
  id: string;
  name: string;
  business: string;
  progress: number;
  status: string;
  nextSession?: string;
  avatar?: string;
}

export interface Session {
  id: string;
  mentee: string;
  topic: string;
  date: string;
  duration: number;
  rating?: number;
  status: string;
}

export interface MentorImpact {
  businessesLaunched: number;
  totalMentees: number;
  totalHours: number;
}

// Company Dashboard Types
export interface CompanyStats {
  entrepreneursSupported: number;
  fundingDeployed: string;
  successRate: number;
  activePrograms: number;
}

export interface Program {
  id: string;
  name: string;
  participants: number;
  budget: string;
  progress: number;
  status: string;
}

export interface CompanyImpact {
  businessesLaunched: number;
  jobsCreated: number;
  revenue: string;
  stillOperating: number;
}

// Business Plan Types
export interface BusinessPlan {
  id: string;
  business_id: string;
  title: string;
  executive_summary?: string;
  market_analysis?: string;
  financial_projections?: any;
  status: string;
  version: number;
  created_at: string;
  updated_at: string;
}

// Compliance Types
export interface ComplianceRecord {
  id: string;
  business_id: string;
  type: string;
  status: ComplianceStatus;
  document_url?: string;
  expiry_date?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}
