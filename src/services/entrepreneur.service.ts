import { supabase } from '@/lib/supabase';
import type {
  EntrepreneurStats,
  RegistrationStep,
  Activity,
} from '@/types';

export class EntrepreneurService {
  /**
   * Get entrepreneur dashboard statistics
   */
  static async getDashboardStats(userId: string): Promise<EntrepreneurStats> {
    try {
      // Get user's business
      const { data: business, error: businessError } = await supabase
        .from('businesses')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (businessError && businessError.code !== 'PGRST116') {
        throw businessError;
      }

      // If no business exists, return default stats
      if (!business) {
        return {
          businessScore: 0,
          complianceStatus: 0,
          learningProgress: { completed: 0, total: 12 },
          fundingRaised: 0,
        };
      }

      // Get compliance records count
      const { data: complianceRecords, error: complianceError } = await supabase
        .from('compliance_records')
        .select('*')
        .eq('business_id', business.id);

      if (complianceError) throw complianceError;

      const totalCompliance = 4; // BRELA, TRA, License, Bank
      const completedCompliance = complianceRecords?.filter(
        (r) => r.status === 'completed'
      ).length || 0;
      const compliancePercentage = (completedCompliance / totalCompliance) * 100;

      return {
        businessScore: business.business_score || 0,
        complianceStatus: Math.round(compliancePercentage),
        learningProgress: {
          completed: 0, // TODO: Implement learning module tracking
          total: 12,
        },
        fundingRaised: 0, // TODO: Implement funding tracking
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  }

  /**
   * Get business registration steps
   */
  static async getRegistrationSteps(userId: string): Promise<RegistrationStep[]> {
    try {
      // Get user's business
      const { data: business, error: businessError } = await supabase
        .from('businesses')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (businessError && businessError.code !== 'PGRST116') {
        throw businessError;
      }

      if (!business) {
        return [
          { id: '1', label: 'BRELA Registration', status: 'pending' },
          { id: '2', label: 'TRA Registration', status: 'pending' },
          { id: '3', label: 'Business License', status: 'pending' },
          { id: '4', label: 'Bank Account', status: 'pending' },
        ];
      }

      // Get compliance records
      const { data: complianceRecords, error } = await supabase
        .from('compliance_records')
        .select('*')
        .eq('business_id', business.id);

      if (error) throw error;

      const steps = [
        { id: '1', label: 'BRELA Registration', type: 'BRELA' },
        { id: '2', label: 'TRA Registration', type: 'TRA' },
        { id: '3', label: 'Business License', type: 'business_license' },
        { id: '4', label: 'Bank Account', type: 'bank_account' },
      ];

      return steps.map((step) => {
        const record = complianceRecords?.find((r) => r.type === step.type);
        return {
          id: step.id,
          label: step.label,
          status: record?.status === 'completed'
            ? 'completed'
            : record?.status === 'in_progress'
            ? 'in_progress'
            : 'pending',
          completedDate: record?.updated_at,
        };
      });
    } catch (error) {
      console.error('Error fetching registration steps:', error);
      throw error;
    }
  }

  /**
   * Get recent activities
   */
  static async getRecentActivities(userId: string, limit: number = 10): Promise<Activity[]> {
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
   * Create a new business
   */
  static async createBusiness(
    userId: string,
    businessData: {
      business_name: string;
      business_type: string;
      location: string;
      description?: string;
      stage?: 'idea' | 'startup' | 'growing' | 'established';
    }
  ) {
    try {
      const { data, error } = await supabase
        .from('businesses')
        .insert({
          user_id: userId,
          ...businessData,
        })
        .select()
        .single();

      if (error) throw error;

      // Create initial compliance records
      const complianceTypes = ['BRELA', 'TRA', 'business_license', 'bank_account'];
      const complianceRecords = complianceTypes.map((type) => ({
        business_id: data.id,
        type,
        status: 'pending' as const,
      }));

      await supabase.from('compliance_records').insert(complianceRecords);

      // Log activity
      await this.logActivity(userId, 'business_created', `Created business: ${businessData.business_name}`);

      return data;
    } catch (error) {
      console.error('Error creating business:', error);
      throw error;
    }
  }

  /**
   * Update business information
   */
  static async updateBusiness(
    businessId: string,
    updates: Partial<{
      business_name: string;
      business_type: string;
      location: string;
      description: string;
      stage: 'idea' | 'startup' | 'growing' | 'established';
    }>
  ) {
    try {
      const { data, error } = await supabase
        .from('businesses')
        .update(updates)
        .eq('id', businessId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating business:', error);
      throw error;
    }
  }

  /**
   * Get user's business
   */
  static async getBusiness(userId: string) {
    try {
      const { data, error } = await supabase
        .from('businesses')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error fetching business:', error);
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
