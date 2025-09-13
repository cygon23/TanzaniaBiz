import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DollarSign, TrendingUp, Target, Users } from "lucide-react";

const fundingInitiatives = [
  {
    id: 1,
    name: "TechStartup Accelerator Fund",
    target: 500000,
    raised: 425000,
    entrepreneurs: 15,
    status: "active",
    endDate: "2024-06-30",
    sector: "Technology"
  },
  {
    id: 2,
    name: "Green Innovation Grant",
    target: 250000,
    raised: 180000,
    entrepreneurs: 8,
    status: "active",
    endDate: "2024-04-15",
    sector: "Environmental"
  },
  {
    id: 3,
    name: "Women Entrepreneurs Fund",
    target: 300000,
    raised: 300000,
    entrepreneurs: 22,
    status: "completed",
    endDate: "2024-01-31",
    sector: "Cross-sector"
  },
  {
    id: 4,
    name: "Agriculture Innovation Program",
    target: 400000,
    raised: 75000,
    entrepreneurs: 3,
    status: "planning",
    endDate: "2024-08-01",
    sector: "Agriculture"
  }
];

export default function CompanyFunding() {
  return (
    <DashboardLayout userRole="company">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Funding Programs</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track your entrepreneurship funding initiatives
          </p>
        </div>

        {/* Funding Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Committed</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1.45M</div>
              <p className="text-xs text-muted-foreground">Across all programs</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Funds Deployed</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$980K</div>
              <p className="text-xs text-muted-foreground">67.6% deployed</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Programs</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Currently running</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Beneficiaries</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">Entrepreneurs supported</p>
            </CardContent>
          </Card>
        </div>

        {/* Funding Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Funding Initiatives</CardTitle>
            <CardDescription>Monitor and manage your funding programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fundingInitiatives.map((initiative) => (
                <div key={initiative.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium">{initiative.name}</h3>
                      <p className="text-sm text-muted-foreground">{initiative.sector}</p>
                      <p className="text-xs text-muted-foreground">
                        Ends: {initiative.endDate} • {initiative.entrepreneurs} entrepreneurs
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant={
                          initiative.status === 'completed' ? 'default' :
                          initiative.status === 'active' ? 'secondary' : 'outline'
                        }
                      >
                        {initiative.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Funding Progress</span>
                      <span>
                        ${(initiative.raised / 1000).toFixed(0)}K / ${(initiative.target / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <Progress value={(initiative.raised / initiative.target) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {((initiative.raised / initiative.target) * 100).toFixed(1)}% of target reached
                    </p>
                  </div>
                  <div className="flex justify-end mt-3 space-x-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    {initiative.status === 'active' && (
                      <Button size="sm">
                        Manage Fund
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