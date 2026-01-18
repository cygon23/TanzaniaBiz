import { supabase } from '@/lib/supabase';
import type { CompanyStats, Program, CompanyImpact } from '@/types';

export class CompanyService {
  /**
   * Get company dashboard statistics
   */
  static async getDashboardStats(userId: string): Promise<CompanyStats> {
    try {
      const { data: companyProfile, error: profileError } = await supabase
        .from('company_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError;
      }

      if (!companyProfile) {
        return {
          entrepreneursSupported: 0,
          fundingDeployed: '$0',
          successRate: 0,
          activePrograms: 0,
        };
      }

      return {
        entrepreneursSupported: companyProfile.entrepreneurs_supported || 0,
        fundingDeployed: `$${(companyProfile.total_funding_deployed || 0).toLocaleString()}`,
        successRate: companyProfile.success_rate || 0,
        activePrograms: companyProfile.active_programs || 0,
      };
    } catch (error) {
      console.error('Error fetching company stats:', error);
      throw error;
    }
  }

  /**
   * Get company's programs
   */
  static async getPrograms(userId: string): Promise<Program[]> {
    try {
      // First get company profile
      const { data: companyProfile, error: profileError } = await supabase
        .from('company_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError;
      }

      if (!companyProfile) {
        return [];
      }

      const { data, error } = await supabase
        .from('programs')
        .select('*')
        .eq('company_id', companyProfile.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return (data || []).map((program) => ({
        id: program.id,
        name: program.name,
        participants: program.participants || 0,
        budget: `$${program.budget.toLocaleString()}`,
        progress: program.progress || 0,
        status: program.status,
      }));
    } catch (error) {
      console.error('Error fetching programs:', error);
      throw error;
    }
  }

  /**
   * Get company impact metrics
   */
  static async getImpact(userId: string): Promise<CompanyImpact> {
    try {
      // First get company profile
      const { data: companyProfile, error: profileError } = await supabase
        .from('company_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError;
      }

      if (!companyProfile) {
        return {
          businessesLaunched: 0,
          jobsCreated: 0,
          revenue: '$0',
          stillOperating: 0,
        };
      }

      // Get programs
      const { data: programs } = await supabase
        .from('programs')
        .select('participants')
        .eq('company_id', companyProfile.id);

      const totalParticipants = programs?.reduce((sum, p) => sum + (p.participants || 0), 0) || 0;

      // TODO: These metrics should come from actual tracking tables
      // For now, using estimates based on participants
      const businessesLaunched = Math.floor(totalParticipants * 0.6); // 60% success rate
      const jobsCreated = businessesLaunched * 3; // Average 3 jobs per business
      const avgRevenue = 25000; // Average revenue per business
      const totalRevenue = businessesLaunched * avgRevenue;
      const stillOperating = Math.floor(businessesLaunched * 0.85); // 85% still operating

      return {
        businessesLaunched,
        jobsCreated,
        revenue: `$${totalRevenue.toLocaleString()}`,
        stillOperating,
      };
    } catch (error) {
      console.error('Error fetching company impact:', error);
      throw error;
    }
  }

  /**
   * Create a new program
   */
  static async createProgram(
    userId: string,
    programData: {
      name: string;
      description?: string;
      budget: number;
      start_date: string;
      end_date?: string;
    }
  ) {
    try {
      // Get company profile
      const { data: companyProfile, error: profileError } = await supabase
        .from('company_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (profileError) throw profileError;
      if (!companyProfile) throw new Error('Company profile not found');

      const { data, error } = await supabase
        .from('programs')
        .insert({
          company_id: companyProfile.id,
          ...programData,
          status: 'active',
        })
        .select()
        .single();

      if (error) throw error;

      // Update active programs count
      await this.updateCompanyStats(userId);

      return data;
    } catch (error) {
      console.error('Error creating program:', error);
      throw error;
    }
  }

  /**
   * Update program
   */
  static async updateProgram(
    programId: string,
    updates: Partial<{
      name: string;
      description: string;
      budget: number;
      participants: number;
      progress: number;
      status: string;
      end_date: string;
    }>
  ) {
    try {
      const { data, error } = await supabase
        .from('programs')
        .update(updates)
        .eq('id', programId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating program:', error);
      throw error;
    }
  }

  /**
   * Update company statistics
   */
  static async updateCompanyStats(userId: string) {
    try {
      // Get company profile
      const { data: companyProfile, error: profileError } = await supabase
        .from('company_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (profileError || !companyProfile) return;

      // Count active programs
      const { count: activePrograms } = await supabase
        .from('programs')
        .select('id', { count: 'exact', head: true })
        .eq('company_id', companyProfile.id)
        .eq('status', 'active');

      // Sum total participants (entrepreneurs supported)
      const { data: programs } = await supabase
        .from('programs')
        .select('participants, budget')
        .eq('company_id', companyProfile.id);

      const entrepreneursSupported = programs?.reduce((sum, p) => sum + (p.participants || 0), 0) || 0;
      const totalFunding = programs?.reduce((sum, p) => sum + (p.budget || 0), 0) || 0;

      // Calculate success rate (businesses still operating / total launched)
      const businessesLaunched = Math.floor(entrepreneursSupported * 0.6);
      const stillOperating = Math.floor(businessesLaunched * 0.85);
      const successRate = businessesLaunched > 0 ? (stillOperating / businessesLaunched) * 100 : 0;

      // Update company profile
      await supabase
        .from('company_profiles')
        .update({
          active_programs: activePrograms || 0,
          entrepreneurs_supported: entrepreneursSupported,
          total_funding_deployed: totalFunding,
          success_rate: Math.round(successRate),
        })
        .eq('id', companyProfile.id);
    } catch (error) {
      console.error('Error updating company stats:', error);
      // Don't throw - stats update should not break main flow
    }
  }

  /**
   * Get recent activities for company
   */
  static async getRecentActivities(userId: string, limit: number = 10) {
    try {
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching activities:', error);
      throw error;
    }
  }

  /**
   * Log activity
   */
  static async logActivity(
    userId: string,
    type: string,
    description: string,
    metadata?: any
  ) {
    try {
      const { error } = await supabase.from('activities').insert({
        user_id: userId,
        type,
        description,
        metadata,
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error logging activity:', error);
      // Don't throw - activity logging should not break main flow
    }
  }
}
