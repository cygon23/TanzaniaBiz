import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Star, 
  MessageCircle, 
  Calendar,
  Video,
  Clock,
  Award,
  Search,
  Filter
} from "lucide-react";

export default function Mentorship() {
  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center">
              <Users className="w-8 h-8 mr-3 text-primary" />
              Mentorship Hub
            </h1>
            <p className="text-muted-foreground mt-1">
              Connect with experienced Tanzanian business mentors and grow your network.
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Find Mentors
            </Button>
            <Button variant="hero">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Session
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-4 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Active Mentors</p>
          </Card>
          <Card className="p-4 text-center">
            <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">Hours Mentored</p>
          </Card>
          <Card className="p-4 text-center">
            <Video className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold">18</p>
            <p className="text-sm text-muted-foreground">Sessions Completed</p>
          </Card>
          <Card className="p-4 text-center">
            <Star className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold">4.8</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Mentors & Available Mentors */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Mentors */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Your Mentors</h3>
              <div className="space-y-4">
                {[
                  { 
                    name: "Sarah Mwangi", 
                    expertise: "E-commerce & Digital Marketing", 
                    experience: "15 years", 
                    rating: 4.9,
                    nextSession: "Tomorrow 2:00 PM",
                    totalSessions: 8,
                    location: "Nairobi, Kenya"
                  },
                  { 
                    name: "David Kimaro", 
                    expertise: "Financial Planning & Investment", 
                    experience: "12 years", 
                    rating: 4.8,
                    nextSession: "Friday 10:00 AM",
                    totalSessions: 6,
                    location: "Dar es Salaam, Tanzania"
                  },
                  { 
                    name: "Grace Mushi", 
                    expertise: "Agricultural Business & Supply Chain", 
                    experience: "20 years", 
                    rating: 5.0,
                    nextSession: "Next Week",
                    totalSessions: 4,
                    location: "Arusha, Tanzania"
                  },
                ].map((mentor, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{mentor.name}</h4>
                          <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
                          <p className="text-xs text-muted-foreground">{mentor.experience} experience • {mentor.location}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-3 h-3 text-warning fill-current" />
                            <span className="text-xs">{mentor.rating}</span>
                            <span className="text-xs text-muted-foreground">• {mentor.totalSessions} sessions</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{mentor.nextSession}</Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="w-3 h-3 mr-1" />
                        Video Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Available Mentors */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recommended Mentors</h3>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-1" />
                  Filter
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { 
                    name: "Ahmed Hassan", 
                    expertise: "Tech Startups & Innovation", 
                    experience: "18 years", 
                    rating: 4.9,
                    price: "Free",
                    availability: "Available",
                    location: "Dar es Salaam, Tanzania",
                    mentees: 45
                  },
                  { 
                    name: "Fatuma Juma", 
                    expertise: "Women Entrepreneurship", 
                    experience: "10 years", 
                    rating: 4.7,
                    price: "$25/hour",
                    availability: "Available",
                    location: "Stone Town, Zanzibar",
                    mentees: 32
                  },
                ].map((mentor, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{mentor.name}</h4>
                          <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
                          <p className="text-xs text-muted-foreground">{mentor.experience} experience • {mentor.location}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-3 h-3 text-warning fill-current" />
                            <span className="text-xs">{mentor.rating}</span>
                            <span className="text-xs text-muted-foreground">• {mentor.mentees} mentees</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">{mentor.availability}</Badge>
                        <p className="text-sm font-medium">{mentor.price}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View Profile</Button>
                      <Button variant="hero" size="sm">Connect</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">SM</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Sarah Mwangi</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                  <p className="text-xs text-muted-foreground">Marketing Strategy Review</p>
                </div>
                <div className="p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">DK</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">David Kimaro</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Friday, 10:00 AM</p>
                  <p className="text-xs text-muted-foreground">Financial Planning</p>
                </div>
              </div>
            </Card>

            {/* Mentorship Progress */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Business Knowledge</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Financial Literacy</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Marketing Skills</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-success/5 border border-success/20 rounded-lg">
                  <Award className="w-6 h-6 text-success" />
                  <div>
                    <p className="text-sm font-medium">First Session</p>
                    <p className="text-xs text-muted-foreground">Completed your first mentorship session</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Business Plan Expert</p>
                    <p className="text-xs text-muted-foreground">Completed business plan with mentor</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Find New Mentors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message All Mentors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="w-4 h-4 mr-2" />
                  Rate Last Session
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}