import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Edit, Calendar, User } from "lucide-react";

const content = [
  {
    id: 1,
    title: "Business Registration Guide 2024",
    type: "guide",
    author: "Admin Team",
    status: "published",
    views: 2547,
    lastUpdated: "2024-01-10",
    category: "Legal"
  },
  {
    id: 2,
    title: "Tax Compliance Workshop Series",
    type: "course",
    author: "Dr. Sarah Wilson",
    status: "draft",
    views: 0,
    lastUpdated: "2024-01-12",
    category: "Finance"
  },
  {
    id: 3,
    title: "Digital Marketing for SMEs",
    type: "webinar",
    author: "Marketing Team",
    status: "published",
    views: 1893,
    lastUpdated: "2024-01-08",
    category: "Marketing"
  },
  {
    id: 4,
    title: "Funding Opportunities Newsletter",
    type: "newsletter",
    author: "Finance Team",
    status: "scheduled",
    views: 0,
    lastUpdated: "2024-01-15",
    category: "Finance"
  }
];

export default function Content() {
  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage platform content, courses, and educational materials
          </p>
        </div>

        {/* Content Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Content</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">+15 this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">198</div>
              <p className="text-xs text-muted-foreground">80.2% published</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47.2K</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Edit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Content List */}
        <Card>
          <CardHeader>
            <CardTitle>Content Library</CardTitle>
            <CardDescription>Manage guides, courses, and educational content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {content.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      by {item.author} • {item.category}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Updated: {item.lastUpdated}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {item.views} views
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="capitalize">
                      {item.type}
                    </Badge>
                    <Badge 
                      variant={
                        item.status === 'published' ? 'default' :
                        item.status === 'draft' ? 'secondary' : 'outline'
                      }
                    >
                      {item.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
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