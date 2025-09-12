import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Building2,
  Handshake,
  Target,
  Award,
  BarChart3
} from "lucide-react";

export default function CompanyDashboard() {
  return (
    <DashboardLayout userRole="company">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Company Partnership Dashboard</h1>
            <p className="text-muted-foreground mt-1">Track your impact and engagement with Tanzanian entrepreneurs.</p>
          </div>
          <Button variant="hero">
            <Handshake className="w-4 h-4 mr-2" />
            New Partnership
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Entrepreneurs Supported"
            value="247"
            description="Total beneficiaries"
            icon={Users}
            trend={{ value: 18, isPositive: true }}
          />
          <StatsCard
            title="Funding Deployed"
            value="$125K"
            description="Total investment"
            icon={DollarSign}
            trend={{ value: 25, isPositive: true }}
          />
          <StatsCard
            title="Success Rate"
            value="78%"
            description="Supported business success"
            icon={TrendingUp}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Active Programs"
            value="5"
            description="Running initiatives"
            icon={Building2}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Programs & Impact */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Programs */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Active Programs</h3>
                <Button variant="outline" size="sm">Create Program</Button>
              </div>
              <div className="space-y-4">
                {[
                  { 
                    name: "Women in Tech Initiative", 
                    participants: 45, 
                    budget: "$25,000", 
                    progress: 75, 
                    status: "On Track",
                    startDate: "Jan 2024"
                  },
                  { 
                    name: "Agricultural Innovation Fund", 
                    participants: 78, 
                    budget: "$50,000", 
                    progress: 60, 
                    status: "Active",
                    startDate: "Mar 2024"
                  },
                  { 
                    name: "Youth Entrepreneur Bootcamp", 
                    participants: 120, 
                    budget: "$35,000", 
                    progress: 90, 
                    status: "Completing",
                    startDate: "Feb 2024"
                  },
                ].map((program, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{program.name}</h4>
                      <Badge 
                        className={
                          program.status === 'On Track' ? 'bg-success text-success-foreground' :
                          program.status === 'Active' ? 'bg-primary text-primary-foreground' :
                          'bg-warning text-warning-foreground'
                        }
                      >
                        {program.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-muted-foreground">Participants</p>
                        <p className="font-medium">{program.participants}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Budget</p>
                        <p className="font-medium">{program.budget}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Started</p>
                        <p className="font-medium">{program.startDate}</p>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{program.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{width: `${program.progress}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Impact Metrics */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Impact Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Business Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Businesses Launched</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Jobs Created</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Revenue Generated</span>
                      <span className="font-medium">$2.3M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Still Operating</span>
                      <span className="font-medium">122 (78%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Social Impact</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Women Entrepreneurs</span>
                      <span className="font-medium">98 (63%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Youth (18-35)</span>
                      <span className="font-medium">189 (76%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Rural Areas</span>
                      <span className="font-medium">87 (35%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tech Sector</span>
                      <span className="font-medium">45 (18%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Activities */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {[
                  { action: "Funded 5 new startups", amount: "$15,000", time: "2 hours ago", type: "funding" },
                  { action: "Mentorship session completed", amount: "TechHub Program", time: "1 day ago", type: "mentorship" },
                  { action: "New partnership proposal", amount: "AgriTech Initiative", time: "2 days ago", type: "partnership" },
                  { action: "Impact report generated", amount: "Q1 2024 Results", time: "3 days ago", type: "report" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'funding' ? 'bg-success' :
                        activity.type === 'mentorship' ? 'bg-primary' :
                        activity.type === 'partnership' ? 'bg-accent' :
                        'bg-secondary'
                      }`} />
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.amount}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Analytics */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Deploy Funding
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  View Applications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Set New Goals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </Card>

            {/* CSR Goals */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">CSR Goals (2024)</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Support 300 Entrepreneurs</span>
                    <span>247/300</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Deploy $200K Funding</span>
                    <span>$125K/$200K</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{width: '62.5%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Create 1,500 Jobs</span>
                    <span>1,247/1,500</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '83%'}}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recognition */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recognition</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <Award className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-sm font-medium">CSR Excellence Award</p>
                    <p className="text-xs text-muted-foreground">Tanzania Business Council</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-success/5 border border-success/20 rounded-lg">
                  <Award className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-sm font-medium">Impact Partner 2024</p>
                    <p className="text-xs text-muted-foreground">TanzaniaBiz Platform</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Partnership Performance */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Partnership Performance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">ROI on Investment</span>
                  <span className="font-medium text-success">340%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Brand Visibility</span>
                  <span className="font-medium text-primary">High</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Community Impact</span>
                  <span className="font-medium text-accent">Excellent</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Partnership Score</span>
                  <span className="font-medium text-secondary">9.2/10</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}