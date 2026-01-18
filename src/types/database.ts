export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'entrepreneur' | 'mentor' | 'company' | 'admin';

export type BusinessStage = 'idea' | 'startup' | 'growing' | 'established';

export type ComplianceStatus = 'pending' | 'in_progress' | 'completed' | 'expired';

export type SessionStatus = 'scheduled' | 'completed' | 'cancelled' | 'in_progress';

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          role: UserRole;
          avatar_url: string | null;
          phone: string | null;
          company_name: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          role: UserRole;
          avatar_url?: string | null;
          phone?: string | null;
          company_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          role?: UserRole;
          avatar_url?: string | null;
          phone?: string | null;
          company_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      businesses: {
        Row: {
          id: string;
          user_id: string;
          business_name: string;
          business_type: string;
          stage: BusinessStage;
          description: string | null;
          location: string;
          registration_number: string | null;
          business_score: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          business_name: string;
          business_type: string;
          stage?: BusinessStage;
          description?: string | null;
          location: string;
          registration_number?: string | null;
          business_score?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          business_name?: string;
          business_type?: string;
          stage?: BusinessStage;
          description?: string | null;
          location?: string;
          registration_number?: string | null;
          business_score?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      business_plans: {
        Row: {
          id: string;
          business_id: string;
          title: string;
          executive_summary: string | null;
          market_analysis: string | null;
          financial_projections: Json | null;
          status: string;
          version: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          title: string;
          executive_summary?: string | null;
          market_analysis?: string | null;
          financial_projections?: Json | null;
          status?: string;
          version?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          title?: string;
          executive_summary?: string | null;
          market_analysis?: string | null;
          financial_projections?: Json | null;
          status?: string;
          version?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      compliance_records: {
        Row: {
          id: string;
          business_id: string;
          type: string;
          status: ComplianceStatus;
          document_url: string | null;
          expiry_date: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          type: string;
          status?: ComplianceStatus;
          document_url?: string | null;
          expiry_date?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          type?: string;
          status?: ComplianceStatus;
          document_url?: string | null;
          expiry_date?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      mentorships: {
        Row: {
          id: string;
          mentor_id: string;
          mentee_id: string;
          business_id: string;
          status: string;
          start_date: string;
          end_date: string | null;
          progress: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          mentor_id: string;
          mentee_id: string;
          business_id: string;
          status?: string;
          start_date: string;
          end_date?: string | null;
          progress?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          mentor_id?: string;
          mentee_id?: string;
          business_id?: string;
          status?: string;
          start_date?: string;
          end_date?: string | null;
          progress?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      mentor_sessions: {
        Row: {
          id: string;
          mentorship_id: string;
          scheduled_date: string;
          duration: number;
          topic: string;
          notes: string | null;
          status: SessionStatus;
          rating: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          mentorship_id: string;
          scheduled_date: string;
          duration: number;
          topic: string;
          notes?: string | null;
          status?: SessionStatus;
          rating?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          mentorship_id?: string;
          scheduled_date?: string;
          duration?: number;
          topic?: string;
          notes?: string | null;
          status?: SessionStatus;
          rating?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      mentor_profiles: {
        Row: {
          id: string;
          user_id: string;
          expertise: string[];
          bio: string | null;
          years_experience: number;
          session_hours: number;
          success_rate: number;
          rating: number;
          total_mentees: number;
          active_mentees: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          expertise: string[];
          bio?: string | null;
          years_experience?: number;
          session_hours?: number;
          success_rate?: number;
          rating?: number;
          total_mentees?: number;
          active_mentees?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          expertise?: string[];
          bio?: string | null;
          years_experience?: number;
          session_hours?: number;
          success_rate?: number;
          rating?: number;
          total_mentees?: number;
          active_mentees?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      company_profiles: {
        Row: {
          id: string;
          user_id: string;
          industry: string;
          description: string | null;
          total_funding_deployed: number;
          entrepreneurs_supported: number;
          success_rate: number;
          active_programs: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          industry: string;
          description?: string | null;
          total_funding_deployed?: number;
          entrepreneurs_supported?: number;
          success_rate?: number;
          active_programs?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          industry?: string;
          description?: string | null;
          total_funding_deployed?: number;
          entrepreneurs_supported?: number;
          success_rate?: number;
          active_programs?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      programs: {
        Row: {
          id: string;
          company_id: string;
          name: string;
          description: string | null;
          budget: number;
          participants: number;
          progress: number;
          status: string;
          start_date: string;
          end_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          company_id: string;
          name: string;
          description?: string | null;
          budget: number;
          participants?: number;
          progress?: number;
          status?: string;
          start_date: string;
          end_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          company_id?: string;
          name?: string;
          description?: string | null;
          budget?: number;
          participants?: number;
          progress?: number;
          status?: string;
          start_date?: string;
          end_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      activities: {
        Row: {
          id: string;
          user_id: string;
          type: string;
          description: string;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          type: string;
          description: string;
          metadata?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          type?: string;
          description?: string;
          metadata?: Json | null;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_role: UserRole;
      business_stage: BusinessStage;
      compliance_status: ComplianceStatus;
      session_status: SessionStatus;
    };
  };
}
