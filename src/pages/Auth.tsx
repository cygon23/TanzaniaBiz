import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Users,
  Building,
  Shield,
  User,
  Rocket,
  Sparkles,
  TrendingUp,
  Target,
  Star,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { demoLogin, user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(`/dashboard/${user.role}`);
    }
  }, [user, navigate]);

  const handleDemoLogin = (
    role: "entrepreneur" | "admin" | "mentor" | "company"
  ) => {
    demoLogin(role);
    toast({
      title: "Welcome to RAV!",
      description: `Accessing ${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard`,
    });
    navigate(`/dashboard/${role}`);
  };

  const roles = [
    {
      role: "entrepreneur" as const,
      title: "Entrepreneur",
      description: "Build and grow your business with AI-powered tools",
      icon: User,
      gradient: "from-primary to-primary/80",
      features: ["Business Planning", "AI Assistant", "Compliance Tools", "Funding Access"],
    },
    {
      role: "mentor" as const,
      title: "Mentor",
      description: "Guide and support the next generation of entrepreneurs",
      icon: Users,
      gradient: "from-blue-500 to-blue-600",
      features: ["Mentee Management", "Session Scheduling", "Progress Tracking", "Impact Metrics"],
    },
    {
      role: "company" as const,
      title: "Company",
      description: "Deploy programs and support entrepreneurship",
      icon: Building,
      gradient: "from-purple-500 to-purple-600",
      features: ["Program Management", "Entrepreneur Support", "Impact Dashboard", "Funding Deployment"],
    },
    {
      role: "admin" as const,
      title: "Admin",
      description: "Manage platform and monitor system performance",
      icon: Shield,
      gradient: "from-secondary to-secondary/80",
      features: ["User Management", "System Analytics", "Content Moderation", "Settings Control"],
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 flex relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
        <div
          className='absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl animate-bounce'
          style={{ animationDelay: "1s", animationDuration: "3s" }}></div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col items-center justify-center p-6 lg:p-12 relative z-10'>
        <div className='w-full max-w-5xl'>
          {/* Back to Home */}
          <Link
            to='/'
            className='inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors group'>
            <ArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
            Back to Home
          </Link>

          {/* Header */}
          <div className='text-center mb-12'>
            <div className='flex items-center justify-center gap-3 mb-6'>
              <div className='w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center'>
                <Rocket className='w-8 h-8 text-white' />
              </div>
              <h1 className='text-4xl md:text-5xl font-bold text-slate-800'>
                Welcome to RAV
              </h1>
            </div>
            <p className='text-xl text-slate-600 max-w-2xl mx-auto mb-4'>
              Choose your role to access the dashboard
            </p>
            <div className='flex items-center justify-center gap-2 text-sm text-slate-500'>
              <Sparkles className='w-4 h-4 text-primary' />
              <span>Demo Mode - No login required</span>
            </div>
          </div>

          {/* Role Cards */}
          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            {roles.map((roleItem) => (
              <Card
                key={roleItem.role}
                className='group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden'
                onClick={() => handleDemoLogin(roleItem.role)}>
                <CardHeader className={`bg-gradient-to-r ${roleItem.gradient} text-white p-6`}>
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center'>
                          <roleItem.icon className='w-6 h-6 text-white' />
                        </div>
                        <CardTitle className='text-2xl font-bold text-white'>
                          {roleItem.title}
                        </CardTitle>
                      </div>
                      <CardDescription className='text-white/90'>
                        {roleItem.description}
                      </CardDescription>
                    </div>
                    <Target className='w-5 h-5 text-white/70 group-hover:text-white transition-colors' />
                  </div>
                </CardHeader>
                <CardContent className='p-6'>
                  <div className='space-y-3'>
                    {roleItem.features.map((feature, index) => (
                      <div key={index} className='flex items-center gap-3 text-slate-600'>
                        <Star className='w-4 h-4 text-primary fill-primary' />
                        <span className='text-sm'>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className='w-full mt-6 h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300'>
                    <Sparkles className='w-4 h-4 mr-2' />
                    Enter Dashboard
                    <Target className='w-4 h-4 ml-2 group-hover:rotate-90 transition-transform duration-300' />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 text-center'>
              <div className='text-3xl font-bold text-primary mb-1'>15K+</div>
              <div className='text-sm text-slate-600'>Entrepreneurs</div>
            </div>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 text-center'>
              <div className='text-3xl font-bold text-primary mb-1'>500+</div>
              <div className='text-sm text-slate-600'>Expert Mentors</div>
            </div>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 text-center'>
              <div className='text-3xl font-bold text-primary mb-1'>95%</div>
              <div className='text-sm text-slate-600'>Success Rate</div>
            </div>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 text-center'>
              <div className='text-3xl font-bold text-primary mb-1'>500M+</div>
              <div className='text-sm text-slate-600'>TSh Generated</div>
            </div>
          </div>

          {/* Note */}
          <div className='mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6'>
            <div className='flex items-start gap-3'>
              <TrendingUp className='w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5' />
              <div>
                <p className='text-sm text-blue-900 font-medium mb-1'>
                  Demo Mode Active
                </p>
                <p className='text-sm text-blue-700'>
                  You're accessing the platform in demo mode. Click any role above to explore the dashboard features.
                  Real authentication will be implemented in future updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
