import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Award, Target } from "lucide-react";

const menteeProgress = [
  {
    name: "Sarah Johnson",
    business: "Tech Startup",
    overallProgress: 85,
    goals: [
      { title: "Business Plan", progress: 100, status: "completed" },
      { title: "Market Research", progress: 90, status: "in-progress" },
      { title: "Funding Prep", progress: 60, status: "in-progress" },
      { title: "Legal Setup", progress: 30, status: "pending" }
    ],
    trend: "up"
  },
  {
    name: "James Mwangi",
    business: "Agriculture",
    overallProgress: 70,
    goals: [
      { title: "Business Registration", progress: 100, status: "completed" },
      { title: "Supply Chain", progress: 80, status: "in-progress" },
      { title: "Marketing Plan", progress: 45, status: "in-progress" },
      { title: "Financial Planning", progress: 25, status: "pending" }
    ],
    trend: "up"
  },
  {
    name: "Grace Mbeki",
    business: "Retail",
    overallProgress: 92,
    goals: [
      { title: "Store Setup", progress: 100, status: "completed" },
      { title: "Inventory System", progress: 95, status: "in-progress" },
      { title: "Staff Training", progress: 100, status: "completed" },
      { title: "Grand Opening", progress: 75, status: "in-progress" }
    ],
    trend: "stable"
  }
];

export default function Progress() {
  return (
    <DashboardLayout userRole="mentor">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mentee Progress</h1>
          <p className="text-muted-foreground mt-2">
            Track the development and achievements of your mentees
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82%</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Goals Completed</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">Out of 45 total</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Grace M.</div>
              <p className="text-xs text-muted-foreground">92% completion</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground">Goal completion rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Individual Progress */}
        <div className="space-y-4">
          {menteeProgress.map((mentee, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{mentee.name}</CardTitle>
                    <CardDescription>{mentee.business}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">{mentee.overallProgress}%</span>
                    {mentee.trend === 'up' ? (
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    ) : mentee.trend === 'down' ? (
                      <TrendingDown className="h-5 w-5 text-red-500" />
                    ) : (
                      <div className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <ProgressBar value={mentee.overallProgress} className="h-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">Current Goals</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mentee.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{goal.title}</span>
                          <Badge 
                            variant={
                              goal.status === 'completed' ? 'default' :
                              goal.status === 'in-progress' ? 'secondary' : 'outline'
                            }
                          >
                            {goal.status}
                          </Badge>
                        </div>
                        <ProgressBar value={goal.progress} className="h-1" />
                        <span className="text-xs text-muted-foreground">{goal.progress}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}