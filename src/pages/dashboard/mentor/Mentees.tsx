import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";

const mentees = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    business: "Tech Startup",
    progress: 75,
    lastSession: "2 days ago",
    status: "active"
  },
  {
    id: 2,
    name: "James Mwangi",
    email: "james@example.com",
    business: "Agriculture",
    progress: 60,
    lastSession: "1 week ago",
    status: "pending"
  },
  {
    id: 3,
    name: "Grace Mbeki",
    email: "grace@example.com",
    business: "Retail",
    progress: 90,
    lastSession: "Yesterday",
    status: "active"
  }
];

export default function Mentees() {
  return (
    <DashboardLayout userRole="mentor">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Mentees</h1>
          <p className="text-muted-foreground mt-2">
            Guide and support your assigned entrepreneurs
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Mentees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Sessions this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Mentees List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Mentees</CardTitle>
            <CardDescription>Manage and track your mentee relationships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mentees.map((mentee) => (
                <div key={mentee.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg`} />
                      <AvatarFallback>{mentee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{mentee.name}</h3>
                      <p className="text-sm text-muted-foreground">{mentee.business}</p>
                      <p className="text-xs text-muted-foreground">{mentee.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{mentee.progress}% Progress</p>
                      <p className="text-xs text-muted-foreground">Last: {mentee.lastSession}</p>
                    </div>
                    <Badge variant={mentee.status === 'active' ? 'default' : 'secondary'}>
                      {mentee.status}
                    </Badge>
                    <Button size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}