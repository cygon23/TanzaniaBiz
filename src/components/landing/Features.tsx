import { 
  Bot, 
  Users, 
  FileText, 
  TrendingUp, 
  Shield, 
  Smartphone,
  BookOpen,
  DollarSign 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Business Assistant",
    description: "Get 24/7 intelligent guidance in Swahili and English for all your business questions and decisions.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "BRELA & TRA Compliance",
    description: "Stay compliant with Tanzanian regulations. Automated tracking and reminders for all legal requirements.",
    color: "text-success"
  },
  {
    icon: Users,
    title: "Expert Mentorship Matching",
    description: "Connect with experienced Tanzanian business mentors who understand your market and challenges.",
    color: "text-accent"
  },
  {
    icon: FileText,
    title: "Business Plan Builder",
    description: "Create professional business plans with AI assistance, templates, and market-specific insights.",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Market Analysis & Insights",
    description: "Access real-time market data and AI-driven insights specific to Tanzanian business opportunities.",
    color: "text-warning"
  },
  {
    icon: DollarSign,
    title: "Funding Opportunities",
    description: "Discover grants, loans, and investment opportunities tailored to your business stage and sector.",
    color: "text-primary"
  },
  {
    icon: BookOpen,
    title: "Financial Literacy Training",
    description: "Master essential financial skills with interactive courses designed for Tanzanian entrepreneurs.",
    color: "text-success"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Access everything from your mobile device with offline capabilities for areas with limited connectivity.",
    color: "text-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and resources designed specifically for the Tanzanian business ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 card-gradient border-border/50"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-card flex items-center justify-center shadow-soft ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-hero rounded-full shadow-glow">
            <span className="text-white font-medium">Ready to transform your business?</span>
          </div>
        </div>
      </div>
    </section>
  );
};