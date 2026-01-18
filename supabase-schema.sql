-- TanzaniaBiz Database Schema
-- Run this SQL in your Supabase SQL Editor to set up all tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE user_role AS ENUM ('entrepreneur', 'mentor', 'company', 'admin');
CREATE TYPE business_stage AS ENUM ('idea', 'startup', 'growing', 'established');
CREATE TYPE compliance_status AS ENUM ('pending', 'in_progress', 'completed', 'expired');
CREATE TYPE session_status AS ENUM ('scheduled', 'completed', 'cancelled', 'in_progress');

-- ============================================
-- PROFILES TABLE
-- ============================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'entrepreneur',
  avatar_url TEXT,
  phone TEXT,
  company_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admin can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================
-- BUSINESSES TABLE
-- ============================================
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  business_type TEXT NOT NULL,
  stage business_stage DEFAULT 'idea',
  description TEXT,
  location TEXT NOT NULL,
  registration_number TEXT,
  business_score INTEGER DEFAULT 0 CHECK (business_score >= 0 AND business_score <= 100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own businesses" ON businesses
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own businesses" ON businesses
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own businesses" ON businesses
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admin can view all businesses" ON businesses
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================
-- BUSINESS PLANS TABLE
-- ============================================
CREATE TABLE business_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  executive_summary TEXT,
  market_analysis TEXT,
  financial_projections JSONB,
  status TEXT DEFAULT 'draft',
  version INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE business_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own business plans" ON business_plans
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM businesses b
      WHERE b.id = business_plans.business_id AND b.user_id = auth.uid()
    )
  );

-- ============================================
-- COMPLIANCE RECORDS TABLE
-- ============================================
CREATE TABLE compliance_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'BRELA', 'TRA', 'business_license', 'bank_account'
  status compliance_status DEFAULT 'pending',
  document_url TEXT,
  expiry_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE compliance_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own compliance records" ON compliance_records
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM businesses b
      WHERE b.id = compliance_records.business_id AND b.user_id = auth.uid()
    )
  );

-- ============================================
-- MENTOR PROFILES TABLE
-- ============================================
CREATE TABLE mentor_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  expertise TEXT[] DEFAULT '{}',
  bio TEXT,
  years_experience INTEGER DEFAULT 0,
  session_hours INTEGER DEFAULT 0,
  success_rate DECIMAL(5,2) DEFAULT 0.00 CHECK (success_rate >= 0 AND success_rate <= 100),
  rating DECIMAL(3,2) DEFAULT 0.00 CHECK (rating >= 0 AND rating <= 5),
  total_mentees INTEGER DEFAULT 0,
  active_mentees INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE mentor_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view mentor profiles" ON mentor_profiles
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Mentors can update own profile" ON mentor_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- ============================================
-- MENTORSHIPS TABLE
-- ============================================
CREATE TABLE mentorships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  mentor_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  mentee_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'active', -- 'active', 'completed', 'cancelled'
  start_date DATE NOT NULL,
  end_date DATE,
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT different_users CHECK (mentor_id != mentee_id)
);

ALTER TABLE mentorships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Mentors can view own mentorships" ON mentorships
  FOR SELECT USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);

CREATE POLICY "Mentors can update own mentorships" ON mentorships
  FOR UPDATE USING (auth.uid() = mentor_id);

CREATE POLICY "Entrepreneurs can insert mentorships" ON mentorships
  FOR INSERT WITH CHECK (auth.uid() = mentee_id);

-- ============================================
-- Add mentorship-dependent policies for businesses
-- ============================================
CREATE POLICY "Mentors can view mentee businesses" ON businesses
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM mentorships m
      WHERE m.business_id = businesses.id AND m.mentor_id = auth.uid()
    )
  );

-- ============================================
-- Add mentorship-dependent policies for business_plans
-- ============================================
CREATE POLICY "Mentors can view mentee business plans" ON business_plans
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM businesses b
      JOIN mentorships m ON m.business_id = b.id
      WHERE b.id = business_plans.business_id AND m.mentor_id = auth.uid()
    )
  );

-- ============================================
-- MENTOR SESSIONS TABLE
-- ============================================
CREATE TABLE mentor_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  mentorship_id UUID NOT NULL REFERENCES mentorships(id) ON DELETE CASCADE,
  scheduled_date TIMESTAMPTZ NOT NULL,
  duration INTEGER NOT NULL DEFAULT 60, -- in minutes
  topic TEXT NOT NULL,
  notes TEXT,
  status session_status DEFAULT 'scheduled',
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE mentor_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions" ON mentor_sessions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM mentorships m
      WHERE m.id = mentor_sessions.mentorship_id
        AND (m.mentor_id = auth.uid() OR m.mentee_id = auth.uid())
    )
  );

CREATE POLICY "Users can manage own sessions" ON mentor_sessions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM mentorships m
      WHERE m.id = mentor_sessions.mentorship_id
        AND (m.mentor_id = auth.uid() OR m.mentee_id = auth.uid())
    )
  );

-- ============================================
-- COMPANY PROFILES TABLE
-- ============================================
CREATE TABLE company_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  industry TEXT NOT NULL,
  description TEXT,
  total_funding_deployed DECIMAL(15,2) DEFAULT 0.00,
  entrepreneurs_supported INTEGER DEFAULT 0,
  success_rate DECIMAL(5,2) DEFAULT 0.00 CHECK (success_rate >= 0 AND success_rate <= 100),
  active_programs INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE company_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view company profiles" ON company_profiles
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Companies can update own profile" ON company_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- ============================================
-- PROGRAMS TABLE
-- ============================================
CREATE TABLE programs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES company_profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  budget DECIMAL(15,2) NOT NULL,
  participants INTEGER DEFAULT 0,
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  status TEXT DEFAULT 'active', -- 'active', 'completed', 'paused'
  start_date DATE NOT NULL,
  end_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view programs" ON programs
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Companies can manage own programs" ON programs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM company_profiles cp
      WHERE cp.id = programs.company_id AND cp.user_id = auth.uid()
    )
  );

-- ============================================
-- ACTIVITIES TABLE (Activity Feed)
-- ============================================
CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'business_update', 'session_completed', 'funding_received', etc.
  description TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own activities" ON activities
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own activities" ON activities
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================
-- INDEXES FOR BETTER PERFORMANCE
-- ============================================
CREATE INDEX idx_businesses_user_id ON businesses(user_id);
CREATE INDEX idx_business_plans_business_id ON business_plans(business_id);
CREATE INDEX idx_compliance_business_id ON compliance_records(business_id);
CREATE INDEX idx_mentorships_mentor_id ON mentorships(mentor_id);
CREATE INDEX idx_mentorships_mentee_id ON mentorships(mentee_id);
CREATE INDEX idx_mentorships_business_id ON mentorships(business_id);
CREATE INDEX idx_sessions_mentorship_id ON mentor_sessions(mentorship_id);
CREATE INDEX idx_programs_company_id ON programs(company_id);
CREATE INDEX idx_activities_user_id ON activities(user_id);
CREATE INDEX idx_activities_created_at ON activities(created_at DESC);

-- ============================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_businesses_updated_at BEFORE UPDATE ON businesses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_business_plans_updated_at BEFORE UPDATE ON business_plans
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_compliance_updated_at BEFORE UPDATE ON compliance_records
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mentor_profiles_updated_at BEFORE UPDATE ON mentor_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mentorships_updated_at BEFORE UPDATE ON mentorships
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sessions_updated_at BEFORE UPDATE ON mentor_sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_company_profiles_updated_at BEFORE UPDATE ON company_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- FUNCTION TO AUTO-CREATE PROFILE ON USER SIGNUP
-- ============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'entrepreneur')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
