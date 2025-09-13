import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, MapPin } from "lucide-react";

const sessions = [
  {
    id: 1,
    mentee: "Sarah Johnson",
    title: "Business Plan Review",
    date: "2024-01-15",
    time: "10:00 AM",
    duration: "1 hour",
    type: "video",
    status: "upcoming"
  },
  {
    id: 2,
    mentee: "James Mwangi",
    title: "Financial Planning",
    date: "2024-01-16",
    time: "2:00 PM",
    duration: "45 minutes",
    type: "in-person",
    status: "upcoming"
  },
  {
    id: 3,
    mentee: "Grace Mbeki",
    title: "Marketing Strategy",
    date: "2024-01-12",
    time: "3:00 PM",
    duration: "1 hour",
    type: "video",
    status: "completed"
  }
];

export default function Sessions() {
  return (
    <DashboardLayout userRole="mentor">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mentoring Sessions</h1>
          <p className="text-muted-foreground mt-2">
            Manage your upcoming and past mentoring sessions
          </p>
        </div>

        {/* Session Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Sessions scheduled</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Video Calls</CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">75% of sessions</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In-Person</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">25% of sessions</p>
            </CardContent>
          </Card>
        </div>

        {/* Sessions List */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
            <CardDescription>Your scheduled mentoring appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{session.title}</h3>
                    <p className="text-sm text-muted-foreground">with {session.mentee}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {session.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {session.time} ({session.duration})
                      </div>
                      <div className="flex items-center">
                        {session.type === 'video' ? (
                          <Video className="h-4 w-4 mr-1" />
                        ) : (
                          <MapPin className="h-4 w-4 mr-1" />
                        )}
                        {session.type === 'video' ? 'Video Call' : 'In-Person'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={session.status === 'upcoming' ? 'default' : 'secondary'}>
                      {session.status}
                    </Badge>
                    {session.status === 'upcoming' && (
                      <Button size="sm">
                        {session.type === 'video' ? 'Join Call' : 'View Details'}
                      </Button>
                    )}
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