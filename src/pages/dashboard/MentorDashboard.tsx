import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Clock, 
  Star, 
  TrendingUp,
  MessageCircle,
  Calendar,
  Video,
  Award
} from "lucide-react";

export default function MentorDashboard() {
  return (
    <DashboardLayout userRole="mentor">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Mentor Dashboard</h1>
            <p className="text-muted-foreground mt-1">Guide and empower the next generation of Tanzanian entrepreneurs.</p>
          </div>
          <Button variant="hero">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Session
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Active Mentees"
            value="12"
            description="Currently mentoring"
            icon={Users}
            trend={{ value: 2, isPositive: true }}
          />
          <StatsCard
            title="Session Hours"
            value="84"
            description="This month"
            icon={Clock}
            trend={{ value: 15, isPositive: true }}
          />
          <StatsCard
            title="Success Rate"
            value="92%"
            description="Mentee completion rate"
            icon={TrendingUp}
            trend={{ value: 5, isPositive: true }}
          />
          <StatsCard
            title="Rating"
            value="4.9"
            description="Average mentor rating"
            icon={Star}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Mentees & Sessions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Mentees */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Active Mentees</h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Amina Hassan", business: "Textile Manufacturing", progress: 75, status: "On Track", nextSession: "Tomorrow 2:00 PM" },
                  { name: "John Mwanga", business: "Tech Startup", progress: 60, status: "Needs Support", nextSession: "Friday 10:00 AM" },
                  { name: "Grace Kimaro", business: "Agriculture", progress: 90, status: "Excellent", nextSession: "Next Week" },
                  { name: "Hassan Abdallah", business: "Restaurant", progress: 45, status: "Getting Started", nextSession: "Today 4:00 PM" },
                ].map((mentee, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-all">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{mentee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{mentee.name}</p>
                        <p className="text-sm text-muted-foreground">{mentee.business}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={
                          mentee.status === 'Excellent' ? 'bg-success text-success-foreground' :
                          mentee.status === 'On Track' ? 'bg-primary text-primary-foreground' :
                          mentee.status === 'Needs Support' ? 'bg-warning text-warning-foreground' :
                          'bg-muted text-muted-foreground'
                        }
                      >
                        {mentee.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{mentee.nextSession}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Sessions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Sessions</h3>
              <div className="space-y-4">
                {[
                  { mentee: "Amina Hassan", topic: "Market Research Strategies", date: "2 hours ago", duration: "45 min", rating: 5 },
                  { mentee: "John Mwanga", topic: "Funding Preparation", date: "Yesterday", duration: "60 min", rating: 5 },
                  { mentee: "Grace Kimaro", topic: "Financial Planning", date: "3 days ago", duration: "30 min", rating: 4 },
                ].map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{session.topic}</p>
                      <p className="text-xs text-muted-foreground">with {session.mentee}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-1 mb-1">
                        {[...Array(session.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-accent fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">{session.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Impact Metrics */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Your Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-success" />
                  </div>
                  <p className="text-2xl font-bold text-success">23</p>
                  <p className="text-sm text-muted-foreground">Businesses Launched</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-primary">47</p>
                  <p className="text-sm text-muted-foreground">Total Mentees</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-accent">340</p>
                  <p className="text-sm text-muted-foreground">Total Hours</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Schedule & Actions */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Hassan Abdallah</p>
                    <p className="text-xs text-muted-foreground">Business Strategy</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">4:00 PM</p>
                    <Badge variant="outline">Video Call</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Amina Hassan</p>
                    <p className="text-xs text-muted-foreground">Progress Review</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">6:00 PM</p>
                    <Badge variant="outline">In Person</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Video className="w-4 h-4 mr-2" />
                  Start Video Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message Mentees
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Manage Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find New Mentees
                </Button>
              </div>
            </Card>

            {/* Performance Overview */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">This Month</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Sessions Completed</span>
                    <span>18/20</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mentee Satisfaction</span>
                    <span>4.9/5</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Response Time</span>
                    <span>2.3 hrs</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}