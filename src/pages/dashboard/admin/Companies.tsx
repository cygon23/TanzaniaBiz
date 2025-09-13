import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, DollarSign, TrendingUp } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "TechCorp Tanzania",
    industry: "Technology",
    employees: 150,
    revenue: "$2.5M",
    status: "verified",
    partnerships: 8,
    location: "Dar es Salaam"
  },
  {
    id: 2,
    name: "AgriSolutions Ltd",
    industry: "Agriculture",
    employees: 75,
    revenue: "$1.2M",
    status: "pending",
    partnerships: 3,
    location: "Arusha"
  },
  {
    id: 3,
    name: "EcoEnergy Co",
    industry: "Renewable Energy",
    employees: 200,
    revenue: "$4.1M",
    status: "verified",
    partnerships: 12,
    location: "Dodoma"
  },
  {
    id: 4,
    name: "HealthPlus Systems",
    industry: "Healthcare",
    employees: 95,
    revenue: "$1.8M",
    status: "under_review",
    partnerships: 5,
    location: "Mwanza"
  }
];

export default function Companies() {
  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Company Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage corporate partners and their platform participation
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Companies</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+12 this quarter</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">134</div>
              <p className="text-xs text-muted-foreground">85.9% verified</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Partnerships</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">347</div>
              <p className="text-xs text-muted-foreground">Active partnerships</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Combined Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24.7M</div>
              <p className="text-xs text-muted-foreground">Platform participants</p>
            </CardContent>
          </Card>
        </div>

        {/* Companies List */}
        <Card>
          <CardHeader>
            <CardTitle>Registered Companies</CardTitle>
            <CardDescription>Monitor and manage corporate platform members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {companies.map((company) => (
                <div key={company.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.industry} • {company.location}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>{company.employees} employees</span>
                      <span>{company.revenue} revenue</span>
                      <span>{company.partnerships} partnerships</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge 
                      variant={
                        company.status === 'verified' ? 'default' :
                        company.status === 'pending' ? 'secondary' : 'outline'
                      }
                    >
                      {company.status.replace('_', ' ')}
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Details
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