import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Handshake, TrendingUp, Users, Calendar } from "lucide-react";

const partnerships = [
  {
    id: 1,
    partner: "TechStartup Innovation Hub",
    type: "Incubator",
    status: "active",
    startDate: "2023-06-15",
    entrepreneurs: 12,
    sector: "Technology",
    investment: "$250K"
  },
  {
    id: 2,
    partner: "Green Energy Ventures",
    type: "Accelerator",
    status: "pending",
    startDate: "2024-02-01",
    entrepreneurs: 5,
    sector: "Renewable Energy",
    investment: "$150K"
  },
  {
    id: 3,
    partner: "Agricultural Innovation Network",
    type: "Mentorship",
    status: "active",
    startDate: "2023-09-20",
    entrepreneurs: 18,
    sector: "Agriculture",
    investment: "$75K"
  },
  {
    id: 4,
    partner: "FinTech Development Alliance",
    type: "Joint Venture",
    status: "negotiating",
    startDate: "2024-03-15",
    entrepreneurs: 8,
    sector: "Financial Technology",
    investment: "$500K"
  }
];

export default function Partnerships() {
  return (
    <DashboardLayout userRole="company">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Strategic Partnerships</h1>
          <p className="text-muted-foreground mt-2">
            Manage and develop partnerships with entrepreneurs and organizations
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Partnerships</CardTitle>
              <Handshake className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 this quarter</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Entrepreneurs Supported</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Across all partnerships</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.4M</div>
              <p className="text-xs text-muted-foreground">Committed funding</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">Partnership success</p>
            </CardContent>
          </Card>
        </div>

        {/* Partnerships List */}
        <Card>
          <CardHeader>
            <CardTitle>Current Partnerships</CardTitle>
            <CardDescription>Overview of active and pending partnerships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {partnerships.map((partnership) => (
                <div key={partnership.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg`} />
                      <AvatarFallback>
                        {partnership.partner.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{partnership.partner}</h3>
                      <p className="text-sm text-muted-foreground">{partnership.sector}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                        <span>Since: {partnership.startDate}</span>
                        <span>{partnership.entrepreneurs} entrepreneurs</span>
                        <span>{partnership.investment} invested</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="capitalize">
                      {partnership.type}
                    </Badge>
                    <Badge 
                      variant={
                        partnership.status === 'active' ? 'default' :
                        partnership.status === 'pending' ? 'secondary' : 'outline'
                      }
                    >
                      {partnership.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Manage
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