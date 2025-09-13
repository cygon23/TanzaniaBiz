import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const complianceItems = [
  {
    id: 1,
    company: "TechCorp Tanzania",
    requirement: "Business License Renewal",
    status: "compliant",
    dueDate: "2024-06-15",
    progress: 100,
    priority: "medium"
  },
  {
    id: 2,
    company: "AgriSolutions Ltd",
    requirement: "Tax Filing (VAT)",
    status: "pending",
    dueDate: "2024-02-28",
    progress: 75,
    priority: "high"
  },
  {
    id: 3,
    company: "EcoEnergy Co",
    requirement: "Environmental Impact Assessment",
    status: "in_progress",
    dueDate: "2024-03-15",
    progress: 45,
    priority: "high"
  },
  {
    id: 4,
    company: "HealthPlus Systems",
    requirement: "Data Protection Compliance",
    status: "overdue",
    dueDate: "2024-01-30",
    progress: 25,
    priority: "critical"
  }
];

export default function AdminCompliance() {
  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Compliance Management</h1>
          <p className="text-muted-foreground mt-2">
            Monitor and manage regulatory compliance across all platform users
          </p>
        </div>

        {/* Compliance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliant</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">134 of 154 requirements</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Awaiting completion</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Requires immediate attention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Low</div>
              <p className="text-xs text-muted-foreground">Platform risk assessment</p>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Items */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Requirements</CardTitle>
            <CardDescription>Track regulatory compliance across all platform participants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceItems.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium">{item.requirement}</h3>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                      <p className="text-xs text-muted-foreground">Due: {item.dueDate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant={
                          item.priority === 'critical' ? 'destructive' :
                          item.priority === 'high' ? 'default' : 'secondary'
                        }
                      >
                        {item.priority}
                      </Badge>
                      <Badge 
                        variant={
                          item.status === 'compliant' ? 'default' :
                          item.status === 'overdue' ? 'destructive' : 'secondary'
                        }
                      >
                        {item.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                  <div className="flex justify-end mt-3">
                    <Button size="sm" variant="outline">
                      Review Details
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