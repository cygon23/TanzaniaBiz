import { supabase } from '@/lib/supabase';
import type { AuthUser, UserRole } from '@/types';

export class AuthService {
  /**
   * Sign up a new user
   */
  static async signUp(
    email: string,
    password: string,
    fullName: string,
    role: UserRole,
    companyName?: string
  ) {
    try {
      // 1. Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role,
            company_name: companyName,
          },
        },
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('User creation failed');

      // 2. Create profile
      const { error: profileError } = await supabase.from('profiles').insert({
        id: authData.user.id,
        email,
        full_name: fullName,
        role,
        company_name: companyName,
      });

      if (profileError) throw profileError;

      // 3. Create role-specific profile
      if (role === 'entrepreneur') {
        // We'll create a default business later when they set up their profile
      } else if (role === 'mentor') {
        const { error: mentorError } = await supabase.from('mentor_profiles').insert({
          user_id: authData.user.id,
          expertise: [],
          years_experience: 0,
          session_hours: 0,
          success_rate: 0,
          rating: 0,
          total_mentees: 0,
          active_mentees: 0,
        });
        if (mentorError) throw mentorError;
      } else if (role === 'company') {
        const { error: companyError } = await supabase.from('company_profiles').insert({
          user_id: authData.user.id,
          industry: '',
          total_funding_deployed: 0,
          entrepreneurs_supported: 0,
          success_rate: 0,
          active_programs: 0,
        });
        if (companyError) throw companyError;
      }

      return { user: authData.user, session: authData.session };
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  }

  /**
   * Sign in an existing user
   */
  static async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      if (!data.user) throw new Error('Sign in failed');

      // Get user profile to get role
      const profile = await this.getUserProfile(data.user.id);

      return {
        user: data.user,
        session: data.session,
        profile,
      };
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  }

  /**
   * Sign out the current user
   */
  static async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  }

  /**
   * Get current session
   */
  static async getSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      return data.session;
    } catch (error) {
      console.error('Get session error:', error);
      return null;
    }
  }

  /**
   * Get current user
   */
  static async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      if (!user) return null;

      const profile = await this.getUserProfile(user.id);
      return profile;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }

  /**
   * Get user profile
   */
  static async getUserProfile(userId: string): Promise<AuthUser | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      if (!data) return null;

      return {
        id: data.id,
        email: data.email,
        full_name: data.full_name,
        role: data.role,
        avatar_url: data.avatar_url || undefined,
        company_name: data.company_name || undefined,
      };
    } catch (error) {
      console.error('Get user profile error:', error);
      return null;
    }
  }

  /**
   * Update user profile
   */
  static async updateProfile(userId: string, updates: Partial<AuthUser>) {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: updates.full_name,
          avatar_url: updates.avatar_url,
          phone: updates.phone,
          company_name: updates.company_name,
          updated_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (error) throw error;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  }

  /**
   * Reset password
   */
  static async resetPassword(email: string) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
    } catch (error) {
      console.error('Reset password error:', error);
      throw error;
    }
  }

  /**
   * Update password
   */
  static async updatePassword(newPassword: string) {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;
    } catch (error) {
      console.error('Update password error:', error);
      throw error;
    }
  }

  /**
   * Listen to auth state changes
   */
  static onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const profile = await this.getUserProfile(session.user.id);
        callback(profile);
      } else {
        callback(null);
      }
    });
  }
}
