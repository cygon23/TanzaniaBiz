import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Edit, 
  Share, 
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Users
} from "lucide-react";

export default function BusinessPlan() {
  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center">
              <FileText className="w-8 h-8 mr-3 text-primary" />
              Business Plan Builder
            </h1>
            <p className="text-muted-foreground mt-1">
              Create a comprehensive business plan with AI-powered guidance.
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            <Button variant="hero">
              <Edit className="w-4 h-4 mr-2" />
              Continue Editing
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Plan Completion</h3>
            <Badge variant="outline">Draft</Badge>
          </div>
          <Progress value={65} className="mb-4" />
          <p className="text-sm text-muted-foreground">7 of 12 sections completed</p>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Business Plan Sections */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Business Plan Sections</h3>
              <div className="space-y-4">
                {[
                  { section: "Executive Summary", status: "completed", progress: 100 },
                  { section: "Company Description", status: "completed", progress: 100 },
                  { section: "Market Analysis", status: "completed", progress: 100 },
                  { section: "Organization & Management", status: "completed", progress: 100 },
                  { section: "Service/Product Line", status: "completed", progress: 100 },
                  { section: "Marketing & Sales", status: "in-progress", progress: 60 },
                  { section: "Funding Request", status: "in-progress", progress: 40 },
                  { section: "Financial Projections", status: "pending", progress: 0 },
                  { section: "Implementation Timeline", status: "pending", progress: 0 },
                  { section: "Risk Analysis", status: "pending", progress: 0 },
                  { section: "Exit Strategy", status: "pending", progress: 0 },
                  { section: "Appendix", status: "pending", progress: 0 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-all">
                    <div className="flex items-center space-x-3">
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : item.status === 'in-progress' ? (
                        <Clock className="w-5 h-5 text-warning" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <p className="font-medium">{item.section}</p>
                        <div className="w-48 bg-muted rounded-full h-2 mt-1">
                          <div 
                            className={`h-2 rounded-full ${
                              item.status === 'completed' ? 'bg-success' :
                              item.status === 'in-progress' ? 'bg-warning' :
                              'bg-muted-foreground'
                            }`}
                            style={{width: `${item.progress}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {item.status === 'completed' ? 'View' : item.status === 'in-progress' ? 'Continue' : 'Start'}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: "Updated Marketing Strategy section", time: "2 hours ago" },
                  { action: "AI generated financial projections", time: "1 day ago" },
                  { action: "Completed market analysis research", time: "2 days ago" },
                  { action: "Added competitor analysis", time: "3 days ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm">{activity.action}</span>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan Overview */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Plan Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Business Type</span>
                  <span className="text-sm font-medium">E-commerce</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Industry</span>
                  <span className="text-sm font-medium">Retail</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Target Market</span>
                  <span className="text-sm font-medium">Tanzania</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Funding Needed</span>
                  <span className="text-sm font-medium">$25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Timeline</span>
                  <span className="text-sm font-medium">12 months</span>
                </div>
              </div>
            </Card>

            {/* AI Suggestions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">AI Suggestions</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-sm font-medium mb-1">Market Opportunity</p>
                  <p className="text-xs text-muted-foreground">Add more detail about the growing e-commerce market in Tanzania.</p>
                </div>
                <div className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
                  <p className="text-sm font-medium mb-1">Financial Projections</p>
                  <p className="text-xs text-muted-foreground">Include seasonal variations in your revenue projections.</p>
                </div>
                <div className="p-3 bg-success/5 border border-success/20 rounded-lg">
                  <p className="text-sm font-medium mb-1">Risk Mitigation</p>
                  <p className="text-xs text-muted-foreground">Consider adding backup suppliers to reduce supply chain risks.</p>
                </div>
              </div>
            </Card>

            {/* Key Metrics */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">$150K</p>
                  <p className="text-sm text-muted-foreground">Projected Revenue (Year 1)</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-8 h-8 text-success mx-auto mb-2" />
                  <p className="text-2xl font-bold">22%</p>
                  <p className="text-sm text-muted-foreground">Projected Profit Margin</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Jobs to Create</p>
                </div>
              </div>
            </Card>

            {/* Export Options */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Export & Share</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Export as PDF
                </Button>
                <Button variant="outline" className="w-full">
                  <Share className="w-4 h-4 mr-2" />
                  Share with Mentor
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit to Investor
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}