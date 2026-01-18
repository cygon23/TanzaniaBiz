import { supabase } from '@/lib/supabase';
import type { MentorStats, Mentee, Session, MentorImpact } from '@/types';

export class MentorService {
  /**
   * Get mentor dashboard statistics
   */
  static async getDashboardStats(userId: string): Promise<MentorStats> {
    try {
      const { data: mentorProfile, error: profileError } = await supabase
        .from('mentor_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError;
      }

      if (!mentorProfile) {
        return {
          activeMentees: 0,
          sessionHours: 0,
          successRate: 0,
          rating: 0,
        };
      }

      return {
        activeMentees: mentorProfile.active_mentees || 0,
        sessionHours: mentorProfile.session_hours || 0,
        successRate: mentorProfile.success_rate || 0,
        rating: mentorProfile.rating || 0,
      };
    } catch (error) {
      console.error('Error fetching mentor stats:', error);
      throw error;
    }
  }

  /**
   * Get mentor's mentees with their business info
   */
  static async getMentees(userId: string): Promise<Mentee[]> {
    try {
      const { data, error } = await supabase
        .from('mentorships')
        .select(`
          id,
          progress,
          status,
          mentee:profiles!mentorships_mentee_id_fkey(id, full_name, email, avatar_url),
          business:businesses(id, business_name, business_score)
        `)
        .eq('mentor_id', userId)
        .eq('status', 'active');

      if (error) throw error;

      if (!data) return [];

      // Get next session for each mentorship
      const menteePromises = data.map(async (mentorship: any) => {
        const { data: nextSession } = await supabase
          .from('mentor_sessions')
          .select('scheduled_date')
          .eq('mentorship_id', mentorship.id)
          .eq('status', 'scheduled')
          .order('scheduled_date', { ascending: true })
          .limit(1)
          .single();

        return {
          id: mentorship.mentee.id,
          name: mentorship.mentee.full_name,
          business: mentorship.business?.business_name || 'No business',
          progress: mentorship.progress || 0,
          status: mentorship.status,
          nextSession: nextSession?.scheduled_date,
          avatar: mentorship.mentee.avatar_url,
        };
      });

      return await Promise.all(menteePromises);
    } catch (error) {
      console.error('Error fetching mentees:', error);
      throw error;
    }
  }

  /**
   * Get mentor's sessions
   */
  static async getSessions(userId: string, limit: number = 10): Promise<Session[]> {
    try {
      const { data, error } = await supabase
        .from('mentor_sessions')
        .select(`
          id,
          scheduled_date,
          duration,
          topic,
          notes,
          status,
          rating,
          mentorship:mentorships(
            mentee:profiles!mentorships_mentee_id_fkey(full_name)
          )
        `)
        .in('mentorship_id',
          supabase
            .from('mentorships')
            .select('id')
            .eq('mentor_id', userId)
        )
        .order('scheduled_date', { ascending: false })
        .limit(limit);

      if (error) throw error;

      if (!data) return [];

      return data.map((session: any) => ({
        id: session.id,
        mentee: session.mentorship?.mentee?.full_name || 'Unknown',
        topic: session.topic,
        date: session.scheduled_date,
        duration: session.duration,
        rating: session.rating,
        status: session.status,
      }));
    } catch (error) {
      console.error('Error fetching sessions:', error);
      throw error;
    }
  }

  /**
   * Get mentor impact metrics
   */
  static async getImpact(userId: string): Promise<MentorImpact> {
    try {
      const { data: mentorProfile, error: profileError } = await supabase
        .from('mentor_profiles')
        .select('total_mentees, session_hours')
        .eq('user_id', userId)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError;
      }

      // Count businesses launched (completed mentorships with successful outcome)
      const { count: businessesLaunched, error: countError } = await supabase
        .from('mentorships')
        .select('id', { count: 'exact', head: true })
        .eq('mentor_id', userId)
        .eq('status', 'completed');

      if (countError) throw countError;

      return {
        businessesLaunched: businessesLaunched || 0,
        totalMentees: mentorProfile?.total_mentees || 0,
        totalHours: mentorProfile?.session_hours || 0,
      };
    } catch (error) {
      console.error('Error fetching mentor impact:', error);
      throw error;
    }
  }

  /**
   * Create a mentorship relationship
   */
  static async createMentorship(
    mentorId: string,
    menteeId: string,
    businessId: string
  ) {
    try {
      const { data, error } = await supabase
        .from('mentorships')
        .insert({
          mentor_id: mentorId,
          mentee_id: menteeId,
          business_id: businessId,
          start_date: new Date().toISOString().split('T')[0],
          status: 'active',
        })
        .select()
        .single();

      if (error) throw error;

      // Update mentor's active mentees count
      await this.updateMentorStats(mentorId);

      return data;
    } catch (error) {
      console.error('Error creating mentorship:', error);
      throw error;
    }
  }

  /**
   * Schedule a session
   */
  static async scheduleSession(
    mentorshipId: string,
    sessionData: {
      scheduled_date: string;
      duration: number;
      topic: string;
    }
  ) {
    try {
      const { data, error } = await supabase
        .from('mentor_sessions')
        .insert({
          mentorship_id: mentorshipId,
          ...sessionData,
          status: 'scheduled',
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error scheduling session:', error);
      throw error;
    }
  }

  /**
   * Complete a session
   */
  static async completeSession(
    sessionId: string,
    notes?: string,
    rating?: number
  ) {
    try {
      const { data: session, error: sessionError } = await supabase
        .from('mentor_sessions')
        .update({
          status: 'completed',
          notes,
          rating,
        })
        .eq('id', sessionId)
        .select('mentorship_id, duration')
        .single();

      if (sessionError) throw sessionError;

      // Update mentor's session hours
      const { data: mentorship } = await supabase
        .from('mentorships')
        .select('mentor_id')
        .eq('id', session.mentorship_id)
        .single();

      if (mentorship) {
        await this.updateMentorStats(mentorship.mentor_id);
      }

      return session;
    } catch (error) {
      console.error('Error completing session:', error);
      throw error;
    }
  }

  /**
   * Update mentor statistics
   */
  static async updateMentorStats(mentorId: string) {
    try {
      // Count active mentorships
      const { count: activeMentees } = await supabase
        .from('mentorships')
        .select('id', { count: 'exact', head: true })
        .eq('mentor_id', mentorId)
        .eq('status', 'active');

      // Count total mentees
      const { count: totalMentees } = await supabase
        .from('mentorships')
        .select('id', { count: 'exact', head: true })
        .eq('mentor_id', mentorId);

      // Sum session hours
      const { data: sessions } = await supabase
        .from('mentor_sessions')
        .select('duration')
        .eq('status', 'completed')
        .in('mentorship_id',
          supabase
            .from('mentorships')
            .select('id')
            .eq('mentor_id', mentorId)
        );

      const totalMinutes = sessions?.reduce((sum, s) => sum + (s.duration || 0), 0) || 0;
      const sessionHours = Math.floor(totalMinutes / 60);

      // Calculate average rating
      const sessionsWithRating = sessions?.filter(s => s.rating) || [];
      const avgRating = sessionsWithRating.length > 0
        ? sessionsWithRating.reduce((sum, s) => sum + (s.rating || 0), 0) / sessionsWithRating.length
        : 0;

      // Update mentor profile
      await supabase
        .from('mentor_profiles')
        .update({
          active_mentees: activeMentees || 0,
          total_mentees: totalMentees || 0,
          session_hours: sessionHours,
          rating: avgRating,
        })
        .eq('user_id', mentorId);
    } catch (error) {
      console.error('Error updating mentor stats:', error);
      // Don't throw - stats update should not break main flow
    }
  }
}
