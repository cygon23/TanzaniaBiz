import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  FileText,
  ExternalLink,
  Calendar,
  Info
} from "lucide-react";

export default function Compliance() {
  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center">
              <Shield className="w-8 h-8 mr-3 text-primary" />
              Compliance Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Stay compliant with BRELA, TRA, and other Tanzanian regulations.
            </p>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success border-success/30 mt-4 md:mt-0">
            <CheckCircle className="w-3 h-3 mr-1" />
            85% Compliant
          </Badge>
        </div>

        {/* Overall Compliance Status */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Overall Compliance Status</h3>
            <span className="text-sm text-muted-foreground">11 of 13 requirements met</span>
          </div>
          <Progress value={85} className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <CheckCircle className="w-6 h-6 text-success mx-auto mb-1" />
              <p className="text-sm font-medium">11 Completed</p>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 text-warning mx-auto mb-1" />
              <p className="text-sm font-medium">2 In Progress</p>
            </div>
            <div className="text-center">
              <AlertCircle className="w-6 h-6 text-destructive mx-auto mb-1" />
              <p className="text-sm font-medium">0 Overdue</p>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Compliance Requirements */}
          <div className="lg:col-span-2 space-y-6">
            {/* BRELA Requirements */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">BRELA Requirements</h3>
              <div className="space-y-4">
                {[
                  { task: "Business Name Reservation", status: "completed", dueDate: "Completed", urgent: false },
                  { task: "Certificate of Formation", status: "completed", dueDate: "Completed", urgent: false },
                  { task: "Business License Application", status: "in-progress", dueDate: "Due in 5 days", urgent: true },
                  { task: "Annual Return Filing", status: "pending", dueDate: "Due in 30 days", urgent: false },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : item.status === 'in-progress' ? (
                        <Clock className="w-5 h-5 text-warning" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <p className="font-medium">{item.task}</p>
                        <p className={`text-sm ${item.urgent ? 'text-destructive' : 'text-muted-foreground'}`}>
                          {item.dueDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.urgent && <Badge variant="destructive">Urgent</Badge>}
                      <Button variant="ghost" size="sm">
                        {item.status === 'completed' ? 'View' : 'Complete'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* TRA Requirements */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">TRA (Tax) Requirements</h3>
              <div className="space-y-4">
                {[
                  { task: "TIN Registration", status: "completed", dueDate: "Completed", urgent: false },
                  { task: "VAT Registration", status: "completed", dueDate: "Completed", urgent: false },
                  { task: "Monthly VAT Return", status: "in-progress", dueDate: "Due in 7 days", urgent: false },
                  { task: "PAYE Registration", status: "completed", dueDate: "Completed", urgent: false },
                  { task: "Skills Development Levy", status: "pending", dueDate: "Due in 15 days", urgent: false },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : item.status === 'in-progress' ? (
                        <Clock className="w-5 h-5 text-warning" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <p className="font-medium">{item.task}</p>
                        <p className={`text-sm ${item.urgent ? 'text-destructive' : 'text-muted-foreground'}`}>
                          {item.dueDate}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {item.status === 'completed' ? 'View' : 'Complete'}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Other Requirements */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Other Requirements</h3>
              <div className="space-y-4">
                {[
                  { task: "Workers' Compensation Registration", status: "completed", dueDate: "Completed", urgent: false },
                  { task: "Environmental Impact Assessment", status: "pending", dueDate: "Due in 45 days", urgent: false },
                  { task: "Fire Safety Certificate", status: "pending", dueDate: "Due in 60 days", urgent: false },
                  { task: "Health Department Permit", status: "completed", dueDate: "Completed", urgent: false },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : item.status === 'in-progress' ? (
                        <Clock className="w-5 h-5 text-warning" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <p className="font-medium">{item.task}</p>
                        <p className={`text-sm ${item.urgent ? 'text-destructive' : 'text-muted-foreground'}`}>
                          {item.dueDate}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {item.status === 'completed' ? 'View' : 'Complete'}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                <div className="p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="w-4 h-4 text-destructive" />
                    <span className="text-sm font-medium">Business License</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Due in 5 days</p>
                </div>
                <div className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="w-4 h-4 text-warning" />
                    <span className="text-sm font-medium">VAT Return</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Due in 7 days</p>
                </div>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Skills Development Levy</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Due in 15 days</p>
                </div>
              </div>
            </Card>

            {/* Quick Resources */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Resources</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  BRELA Forms
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  TRA Guidelines
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Info className="w-4 h-4 mr-2" />
                  Compliance Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Set Reminders
                </Button>
              </div>
            </Card>

            {/* Compliance Score */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Compliance Score</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">85%</div>
                <p className="text-sm text-muted-foreground mb-4">Great job! You're well on track.</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>BRELA</span>
                    <span className="text-success">90%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TRA</span>
                    <span className="text-success">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other</span>
                    <span className="text-warning">75%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Compliance Tips */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Tips</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium mb-1">Set Calendar Reminders</p>
                  <p className="text-muted-foreground text-xs">Never miss a deadline by setting up automatic reminders.</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <p className="font-medium mb-1">Keep Documents Organized</p>
                  <p className="text-muted-foreground text-xs">Maintain digital copies of all compliance documents.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
