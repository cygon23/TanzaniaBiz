import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const impactData = [
  { month: "Jan", businesses: 5, jobs: 23, revenue: 45000 },
  { month: "Feb", businesses: 8, jobs: 34, revenue: 78000 },
  { month: "Mar", businesses: 12, jobs: 52, revenue: 120000 },
  { month: "Apr", businesses: 18, jobs: 74, revenue: 180000 },
  { month: "May", businesses: 25, jobs: 103, revenue: 250000 },
  { month: "Jun", businesses: 32, jobs: 142, revenue: 340000 }
];

const sectorImpact = [
  { sector: "Technology", businesses: 15, jobs: 78, funding: 450000 },
  { sector: "Agriculture", businesses: 22, jobs: 156, funding: 320000 },
  { sector: "Healthcare", businesses: 8, jobs: 34, funding: 180000 },
  { sector: "Education", businesses: 12, jobs: 45, funding: 240000 },
  { sector: "Manufacturing", businesses: 6, jobs: 89, funding: 150000 }
];

const successStories = [
  {
    name: "EcoFarm Solutions",
    sector: "Agriculture",
    impact: "Increased crop yield by 40% for 200+ farmers",
    funding: "$50,000",
    jobs: 15
  },
  {
    name: "HealthTech Innovations",
    sector: "Healthcare",
    impact: "Provided healthcare access to 5,000+ rural residents",
    funding: "$75,000",
    jobs: 12
  },
  {
    name: "EduConnect Platform",
    sector: "Education",
    impact: "Connected 1,000+ students with quality education",
    funding: "$35,000",
    jobs: 8
  }
];

export default function Impact() {
  return (
    <DashboardLayout userRole="company">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Impact Measurement</h1>
          <p className="text-muted-foreground mt-2">
            Track the social and economic impact of your entrepreneurship programs
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Businesses Created</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+32 this year</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jobs Created</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">847</div>
              <p className="text-xs text-muted-foreground">Direct employment</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue Generated</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3.2M</div>
              <p className="text-xs text-muted-foreground">By supported businesses</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Awards Won</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">By portfolio companies</p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Impact Analytics</CardTitle>
            <CardDescription>Detailed analysis of your program's impact</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="timeline" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="timeline">Impact Timeline</TabsTrigger>
                <TabsTrigger value="sectors">Sector Breakdown</TabsTrigger>
              </TabsList>
              
              <TabsContent value="timeline" className="space-y-4">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={impactData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="businesses" stackId="1" stroke="#8884d8" fill="#8884d8" />
                      <Area type="monotone" dataKey="jobs" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="sectors" className="space-y-4">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sectorImpact}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sector" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="businesses" fill="#8884d8" />
                      <Bar dataKey="jobs" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>Highlighting the achievements of supported entrepreneurs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {successStories.map((story, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-medium">{story.name}</h3>
                      <Badge variant="outline">{story.sector}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{story.impact}</p>
                    <div className="flex justify-between text-sm">
                      <span>Funding: {story.funding}</span>
                      <span>Jobs: {story.jobs}</span>
                    </div>
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