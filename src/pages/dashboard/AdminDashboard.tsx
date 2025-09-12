import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building2, 
  TrendingUp, 
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  UserCheck,
  Settings
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage and monitor the TanzaniaBiz platform.</p>
          </div>
          <Button variant="hero">
            <Settings className="w-4 h-4 mr-2" />
            System Settings
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Users"
            value="10,247"
            description="Active entrepreneurs"
            icon={Users}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Companies"
            value="156"
            description="Partner companies"
            icon={Building2}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Success Rate"
            value="85%"
            description="Business completion rate"
            icon={TrendingUp}
            trend={{ value: 3, isPositive: true }}
          />
          <StatsCard
            title="Monthly Revenue"
            value="$24,600"
            description="Platform revenue"
            icon={BarChart3}
            trend={{ value: 15, isPositive: true }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - System Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* System Alerts */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">System Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <div>
                      <p className="text-sm font-medium">High server load detected</p>
                      <p className="text-xs text-muted-foreground">API response times increased by 40%</p>
                    </div>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-warning/5 border border-warning/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-warning" />
                    <div>
                      <p className="text-sm font-medium">BRELA API maintenance scheduled</p>
                      <p className="text-xs text-muted-foreground">Tomorrow 2:00 AM - 4:00 AM EAT</p>
                    </div>
                  </div>
                  <Badge className="bg-warning text-warning-foreground">Scheduled</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-success/5 border border-success/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <p className="text-sm font-medium">Database backup completed</p>
                      <p className="text-xs text-muted-foreground">All user data backed up successfully</p>
                    </div>
                  </div>
                  <Badge className="bg-success text-success-foreground">Completed</Badge>
                </div>
              </div>
            </Card>

            {/* Recent User Registrations */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recent User Registrations</h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Amina Hassan", email: "amina@example.com", type: "Entrepreneur", status: "Verified" },
                  { name: "John Mwanga", email: "john@techstart.co.tz", type: "Entrepreneur", status: "Pending" },
                  { name: "Sarah Kimani", email: "sarah@mentor.co.tz", type: "Mentor", status: "Verified" },
                  { name: "TechHub Dar", email: "contact@techhub.co.tz", type: "Company", status: "Review" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{user.type}</Badge>
                      <Badge 
                        className={
                          user.status === 'Verified' ? 'bg-success text-success-foreground' :
                          user.status === 'Pending' ? 'bg-warning text-warning-foreground' :
                          'bg-muted text-muted-foreground'
                        }
                      >
                        {user.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Content Management */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Content Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg text-center">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Blog Posts</p>
                  <p className="text-2xl font-bold text-primary">47</p>
                  <Button variant="link" size="sm">Manage</Button>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-medium">Mentors</p>
                  <p className="text-2xl font-bold text-secondary">123</p>
                  <Button variant="link" size="sm">Manage</Button>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <Building2 className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium">Partners</p>
                  <p className="text-2xl font-bold text-accent">34</p>
                  <Button variant="link" size="sm">Manage</Button>
                </div>
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
                  <UserCheck className="w-4 h-4 mr-2" />
                  Approve Mentors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Review Content
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building2 className="w-4 h-4 mr-2" />
                  Partner Requests
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  System Health
                </Button>
              </div>
            </Card>

            {/* Platform Analytics */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Platform Analytics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>User Engagement</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Success Rate</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>System Uptime</span>
                    <span>99.8%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '99.8%'}}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Server</span>
                  <Badge className="bg-success text-success-foreground">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge className="bg-success text-success-foreground">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">BRELA Integration</span>
                  <Badge className="bg-warning text-warning-foreground">Slow</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">AI Services</span>
                  <Badge className="bg-success text-success-foreground">Online</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}