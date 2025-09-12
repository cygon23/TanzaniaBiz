import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AIChat } from "@/components/dashboard/AIChat";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  FileText, 
  DollarSign, 
  CheckCircle, 
  Clock,
  AlertCircle,
  ArrowRight,
  Calendar,
  BookOpen
} from "lucide-react";

export default function EntrepreneurDashboard() {
  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Demo Entrepreneur!</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your business today.</p>
          </div>
          <Button variant="hero" className="mt-4 md:mt-0">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Mentor Session
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Business Score"
            value="78%"
            description="Your overall business health"
            icon={TrendingUp}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Compliance Status"
            value="85%"
            description="BRELA & TRA requirements"
            icon={CheckCircle}
            trend={{ value: 5, isPositive: true }}
          />
          <StatsCard
            title="Learning Progress"
            value="6/12"
            description="Modules completed"
            icon={BookOpen}
          />
          <StatsCard
            title="Funding Raised"
            value="0 TSH"
            description="Total funding secured"
            icon={DollarSign}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Tasks & Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <FileText className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Update Business Plan</div>
                    <div className="text-xs text-muted-foreground">Last updated 3 days ago</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <Users className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Find a Mentor</div>
                    <div className="text-xs text-muted-foreground">Get expert guidance</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <DollarSign className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Apply for Funding</div>
                    <div className="text-xs text-muted-foreground">3 opportunities available</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Check Compliance</div>
                    <div className="text-xs text-muted-foreground">2 items pending</div>
                  </div>
                </Button>
              </div>
            </Card>

            {/* Business Registration Progress */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Business Registration Progress</h3>
                <span className="text-sm text-muted-foreground">3 of 5 completed</span>
              </div>
              <Progress value={60} className="mb-4" />
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-success mr-3" />
                  <span className="line-through text-muted-foreground">Business name reservation</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-success mr-3" />
                  <span className="line-through text-muted-foreground">BRELA certificate application</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-success mr-3" />
                  <span className="line-through text-muted-foreground">TIN number registration</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 text-warning mr-3" />
                  <span>Business license application</span>
                  <Button variant="link" size="sm" className="ml-auto">
                    Continue <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
                <div className="flex items-center text-sm">
                  <AlertCircle className="w-4 h-4 text-muted-foreground mr-3" />
                  <span className="text-muted-foreground">Bank account opening</span>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed Financial Literacy Module 3</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Updated business plan draft</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Matched with mentor: Sarah Mwangi</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - AI Chat */}
          <div className="space-y-6">
            <AIChat />
            
            {/* Upcoming Events */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium">Mentor Session</p>
                  <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                  <p className="text-sm font-medium">Business Plan Workshop</p>
                  <p className="text-xs text-muted-foreground">Friday, 10:00 AM</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm font-medium">Funding Pitch Training</p>
                  <p className="text-xs text-muted-foreground">Next Monday, 3:00 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}