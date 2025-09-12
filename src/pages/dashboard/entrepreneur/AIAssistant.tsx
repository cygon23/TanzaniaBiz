import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AIChat } from "@/components/dashboard/AIChat";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  MessageCircle, 
  FileText, 
  TrendingUp, 
  Users,
  Clock,
  Zap,
  BookOpen
} from "lucide-react";

export default function EntrepreneurAI() {
  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center">
              <Bot className="w-8 h-8 mr-3 text-primary" />
              AI Business Assistant
            </h1>
            <p className="text-muted-foreground mt-1">
              Get intelligent guidance in Swahili and English for all your business needs.
            </p>
          </div>
          <Badge variant="outline" className="mt-4 md:mt-0">
            <Zap className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-4 text-center">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">247</p>
            <p className="text-sm text-muted-foreground">Questions Asked</p>
          </Card>
          <Card className="p-4 text-center">
            <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
            <p className="text-2xl font-bold">24/7</p>
            <p className="text-sm text-muted-foreground">Available</p>
          </Card>
          <Card className="p-4 text-center">
            <FileText className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold">45</p>
            <p className="text-sm text-muted-foreground">Documents Generated</p>
          </Card>
          <Card className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">95%</p>
            <p className="text-sm text-muted-foreground">Accuracy Rate</p>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Chat - Large */}
          <div className="lg:col-span-2">
            <div className="h-[600px]">
              <AIChat />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Business Plan
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find Mentors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Market Analysis
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  BRELA Guide
                </Button>
              </div>
            </Card>

            {/* Popular Topics */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
              <div className="space-y-3">
                {[
                  "How to register with BRELA?",
                  "TRA tax requirements",
                  "Finding startup funding",
                  "Market research strategies",
                  "Business plan templates",
                  "Legal compliance checklist"
                ].map((topic, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-sm h-auto p-3 text-left"
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            </Card>

            {/* AI Capabilities */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">What I Can Help With</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Business registration and legal compliance</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Financial planning and funding strategies</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Market research and analysis</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></span>
                  <span>Document generation and templates</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}