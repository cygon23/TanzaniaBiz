import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  Building2, 
  Users,
  CheckCircle,
  Clock,
  FileText,
  ExternalLink,
  Target,
  Award
} from "lucide-react";

export default function Funding() {
  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center">
              <DollarSign className="w-8 h-8 mr-3 text-primary" />
              Funding Opportunities
            </h1>
            <p className="text-muted-foreground mt-1">
              Discover grants, loans, and investment opportunities for your business.
            </p>
          </div>
          <Button variant="hero">
            <FileText className="w-4 h-4 mr-2" />
            Apply for Funding
          </Button>
        </div>

        {/* Funding Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-4 text-center">
            <DollarSign className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">$0</p>
            <p className="text-sm text-muted-foreground">Total Raised</p>
          </Card>
          <Card className="p-4 text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Applications Submitted</p>
          </Card>
          <Card className="p-4 text-center">
            <Clock className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Pending Reviews</p>
          </Card>
          <Card className="p-4 text-center">
            <Target className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold">$25K</p>
            <p className="text-sm text-muted-foreground">Funding Goal</p>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Available Opportunities */}
          <div className="lg:col-span-2 space-y-6">
            {/* Government Grants */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Government Grants</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Youth Development Fund",
                    amount: "Up to $10,000",
                    deadline: "30 days left",
                    eligibility: "18-35 years old",
                    type: "Grant",
                    description: "Supporting young entrepreneurs in Tanzania with startup capital.",
                    status: "eligible"
                  },
                  {
                    title: "Women in Business Initiative",
                    amount: "Up to $15,000",
                    deadline: "45 days left",
                    eligibility: "Women entrepreneurs",
                    type: "Grant",
                    description: "Empowering women-led businesses across Tanzania.",
                    status: "applied"
                  },
                  {
                    title: "Agricultural Innovation Fund",
                    amount: "Up to $20,000",
                    deadline: "60 days left",
                    eligibility: "Agriculture sector",
                    type: "Grant",
                    description: "Supporting innovative agricultural businesses and practices.",
                    status: "not-eligible"
                  },
                ].map((grant, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{grant.title}</h4>
                          <Badge variant="outline">{grant.type}</Badge>
                          {grant.status === 'eligible' && <Badge className="bg-success text-success-foreground">Eligible</Badge>}
                          {grant.status === 'applied' && <Badge className="bg-warning text-warning-foreground">Applied</Badge>}
                          {grant.status === 'not-eligible' && <Badge variant="secondary">Not Eligible</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{grant.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Amount: </span>
                            <span className="font-medium text-success">{grant.amount}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Deadline: </span>
                            <span className="font-medium">{grant.deadline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Eligibility: {grant.eligibility}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Learn More
                        </Button>
                        {grant.status === 'eligible' && (
                          <Button variant="hero" size="sm">Apply Now</Button>
                        )}
                        {grant.status === 'applied' && (
                          <Button variant="outline" size="sm" disabled>Applied</Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Private Funding */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Private Investment</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "TechStars Africa",
                    amount: "$50K - $200K",
                    type: "Accelerator",
                    stage: "Seed",
                    description: "3-month accelerator program for tech startups in Africa.",
                    requirements: "Tech startup, MVP ready"
                  },
                  {
                    title: "Savannah Fund",
                    amount: "$25K - $100K",
                    type: "Venture Capital",
                    stage: "Pre-seed",
                    description: "Early-stage investment for African startups.",
                    requirements: "Scalable business model"
                  },
                ].map((investor, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{investor.title}</h4>
                          <Badge variant="outline">{investor.type}</Badge>
                          <Badge className="bg-primary text-primary-foreground">{investor.stage}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{investor.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Investment: </span>
                            <span className="font-medium text-success">{investor.amount}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Requirements: </span>
                            <span className="font-medium">{investor.requirements}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Visit Website
                      </Button>
                      <Button variant="hero" size="sm">Apply</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* My Applications */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">My Applications</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Women in Business Initiative",
                    amount: "$15,000",
                    submittedDate: "2 weeks ago",
                    status: "Under Review",
                    progress: 60
                  },
                  {
                    title: "SME Development Fund",
                    amount: "$8,000",
                    submittedDate: "1 month ago",
                    status: "Approved",
                    progress: 100
                  },
                  {
                    title: "Innovation Challenge 2024",
                    amount: "$5,000",
                    submittedDate: "3 weeks ago",
                    status: "Rejected",
                    progress: 100
                  },
                ].map((application, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{application.title}</h4>
                          <Badge 
                            className={
                              application.status === 'Approved' ? 'bg-success text-success-foreground' :
                              application.status === 'Under Review' ? 'bg-warning text-warning-foreground' :
                              'bg-destructive text-destructive-foreground'
                            }
                          >
                            {application.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <span className="text-muted-foreground">Amount: </span>
                            <span className="font-medium">{application.amount}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Submitted: </span>
                            <span className="font-medium">{application.submittedDate}</span>
                          </div>
                        </div>
                        {application.status === 'Under Review' && (
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Review Progress</span>
                              <span>{application.progress}%</span>
                            </div>
                            <Progress value={application.progress} className="h-2" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      {application.status === 'Under Review' && (
                        <Button variant="outline" size="sm">Track Progress</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Funding Goal Progress */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Funding Goal</h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-primary mb-2">$0</div>
                <div className="text-sm text-muted-foreground">of $25,000 goal</div>
              </div>
              <Progress value={0} className="mb-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Startup Costs</span>
                  <span>$15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Working Capital</span>
                  <span>$7,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing</span>
                  <span>$3,000</span>
                </div>
              </div>
            </Card>

            {/* Funding Tips */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Funding Tips</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Complete Your Business Plan</p>
                      <p className="text-muted-foreground text-xs">Investors want to see a clear strategy.</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="w-4 h-4 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Show Market Traction</p>
                      <p className="text-muted-foreground text-xs">Demonstrate demand for your product.</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-success/5 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Users className="w-4 h-4 text-success mt-0.5" />
                    <div>
                      <p className="font-medium">Build Your Network</p>
                      <p className="text-muted-foreground text-xs">Connect with other entrepreneurs and mentors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Funding Readiness Check
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building2 className="w-4 h-4 mr-2" />
                  Find Investors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Join Pitch Events
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Apply for Competitions
                </Button>
              </div>
            </Card>

            {/* Success Stories */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Success Stories</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gradient-card rounded-lg border border-border/50">
                  <p className="text-sm font-medium mb-1">TechHub Tanzania</p>
                  <p className="text-xs text-muted-foreground mb-2">Raised $50K through government grants</p>
                  <div className="flex items-center space-x-1">
                    <Award className="w-3 h-3 text-success" />
                    <span className="text-xs text-success">Featured Success</span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-card rounded-lg border border-border/50">
                  <p className="text-sm font-medium mb-1">AgroConnect</p>
                  <p className="text-xs text-muted-foreground mb-2">Secured $75K Series A funding</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary">Growing Fast</span>
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