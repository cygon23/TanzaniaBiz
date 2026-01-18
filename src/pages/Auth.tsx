import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  EyeOff,
  Mail,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Users,
  Building,
  Shield,
  User,
  TrendingUp,
  Globe,
  Award,
  Zap,
  Target,
  Briefcase,
  Network,
  Star,
  ChevronRight,
  MapPin,
  Calendar,
  BarChart3,
  Rocket,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import type { UserRole } from "@/types";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [showResendModal, setShowResendModal] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    role: "" as UserRole | "",
    company: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, signUp, resetPassword, user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(`/dashboard/${user.role}`);
    }
  }, [user, navigate]);

  const features = [
    {
      icon: <TrendingUp className='w-6 h-6' />,
      title: "Business Growth Analytics",
      description:
        "Track your business performance with advanced analytics and insights tailored for the Tanzanian market.",
      color: "text-blue-500",
    },
    {
      icon: <Network className='w-6 h-6' />,
      title: "Connect with Mentors",
      description:
        "Get matched with experienced mentors who understand the local business landscape and can guide your journey.",
      color: "text-green-500",
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: "Market Opportunities",
      description:
        "Discover untapped market opportunities across Tanzania's diverse regions and growing economy.",
      color: "text-purple-500",
    },
    {
      icon: <Briefcase className='w-6 h-6' />,
      title: "Funding & Investment",
      description:
        "Access funding opportunities from local and international investors interested in Tanzanian startups.",
      color: "text-orange-500",
    },
  ];

  const stats = [
    {
      number: "2,500+",
      label: "Active Entrepreneurs",
      icon: <User className='w-5 h-5' />,
    },
    {
      number: "50+",
      label: "Expert Mentors",
      icon: <Users className='w-5 h-5' />,
    },
    {
      number: "TSh 5M+",
      label: "Funding Facilitated",
      icon: <TrendingUp className='w-5 h-5' />,
    },
    {
      number: "2+",
      label: "Regions Covered",
      icon: <MapPin className='w-5 h-5' />,
    },
  ];

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Tech Entrepreneur",
      location: "Dar es Salaam",
      text: "TanzaniaBiz connected me with the right mentor who helped scale my fintech startup to 5 regions.",
    },
    {
      name: "Joseph Mwamba",
      role: "Agriculture Innovator",
      location: "Arusha",
      text: "Through the platform, I secured funding and expanded my agri-tech solution to rural farmers.",
    },
    {
      name: "Sarah Kimaro",
      role: "Social Entrepreneur",
      location: "Mwanza",
      text: "The network I built here transformed my social impact venture into a sustainable business.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(formData.email, formData.password);
      toast({
        title: "Login Successful",
        description: "Welcome back to TanzaniaBiz!",
      });
      // Navigation will happen via useEffect when user is set
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: error.message || "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (
    role: "entrepreneur" | "admin" | "mentor" | "company"
  ) => {
    toast({
      title: "Demo Login",
      description: `Demo accounts are not available. Please register to continue.`,
      variant: "destructive",
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.role) {
      toast({
        title: "Error",
        description: "Please select a role.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      await signUp(
        formData.email,
        formData.password,
        fullName,
        formData.role as UserRole,
        formData.company || undefined
      );

      toast({
        title: "Registration Successful",
        description: "Please check your email to verify your account.",
      });

      setShowResendModal(true);
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred during registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await resetPassword(formData.email);
      toast({
        title: "Reset Link Sent",
        description: "Please check your email for password reset instructions.",
      });
      setShowResendModal(true);
    } catch (error: any) {
      console.error('Reset password error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send reset email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendComplete = () => {
    setShowResendModal(false);
    if (activeTab === "register") {
      toast({
        title: "Registration Successful",
        description: "Please check your email to verify your account.",
      });
      setActiveTab("login");
    } else {
      toast({
        title: "Reset Link Sent",
        description: "Please check your email for password reset instructions.",
      });
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 flex relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
        <div
          className='absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-2xl animate-bounce'
          style={{ animationDelay: "1s", animationDuration: "3s" }}></div>
      </div>

      {/* Left Side - Information Panel */}
      <div className='hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden'>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>

        {/* Floating Elements */}
        <div className='absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping'></div>
        <div
          className='absolute top-40 right-32 w-3 h-3 bg-green-400 rounded-full animate-ping'
          style={{ animationDelay: "1s" }}></div>
        <div
          className='absolute bottom-32 left-16 w-2 h-2 bg-purple-400 rounded-full animate-ping'
          style={{ animationDelay: "2s" }}></div>

        <div className='relative z-10 flex flex-col justify-center p-12 xl:p-16 text-white'>
          {/* Header */}
          <div className='mb-12'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center'>
                <Rocket className='w-6 h-6 text-white' />
              </div>
              <h1 className='text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent'>
                TanzaniaBiz
              </h1>
            </div>
            <p className='text-xl xl:text-2xl text-blue-100 leading-relaxed'>
              Empowering entrepreneurs across Tanzania with the tools,
              connections, and insights they need to build successful
              businesses.
            </p>
          </div>

          {/* Animated Feature Section */}
          <div className='mb-12'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 min-h-[240px] transition-all duration-500'>
              <div
                className={`${features[currentFeature].color} mb-4 transition-all duration-500`}>
                {features[currentFeature].icon}
              </div>
              <h3 className='text-xl font-semibold mb-4 text-white transition-all duration-500'>
                {features[currentFeature].title}
              </h3>
              <p className='text-blue-100 leading-relaxed transition-all duration-500'>
                {features[currentFeature].description}
              </p>

              {/* Progress Dots */}
              <div className='flex gap-2 mt-6'>
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentFeature
                        ? "bg-blue-300 w-6"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Animated Stats */}
          <div className='mb-12'>
            <div className='bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-blue-300'>
                    {stats[currentStat].icon}
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-white'>
                      {stats[currentStat].number}
                    </div>
                    <div className='text-blue-200 text-sm'>
                      {stats[currentStat].label}
                    </div>
                  </div>
                </div>
                <BarChart3 className='w-8 h-8 text-blue-300' />
              </div>
            </div>
          </div>

          {/* Success Story */}
          <div className='bg-green-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30'>
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-green-400/30 rounded-full flex items-center justify-center flex-shrink-0'>
                <Star className='w-6 h-6 text-green-300' />
              </div>
              <div>
                <p className='text-green-100 italic mb-3 leading-relaxed'>
                  "{testimonials[0].text}"
                </p>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='font-semibold text-white'>
                      {testimonials[0].name}
                    </div>
                    <div className='text-green-200 text-sm'>
                      {testimonials[0].role} • {testimonials[0].location}
                    </div>
                  </div>
                  <div className='flex gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 fill-green-400 text-green-400'
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className='flex-1 lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 lg:p-12'>
        <div className='w-full max-w-md relative z-10'>
          {/* Back to Home */}
          <Link
            to='/'
            className='inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors group'>
            <ArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
            Back to Home
          </Link>

          <Card className='overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm'>
            {/* Header */}
            <CardHeader className='text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50'>
              <CardTitle className='text-2xl font-bold text-slate-800 mb-2'>
                Welcome Back
              </CardTitle>
              <CardDescription className='text-slate-600'>
                Sign in to continue your entrepreneurial journey
              </CardDescription>
            </CardHeader>

            <CardContent className='p-8'>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className='grid w-full grid-cols-2 mb-8 bg-slate-100'>
                  <TabsTrigger
                    value='login'
                    className='data-[state=active]:bg-blue-500 data-[state=active]:text-white'>
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger
                    value='register'
                    className='data-[state=active]:bg-purple-500 data-[state=active]:text-white'>
                    Create Account
                  </TabsTrigger>
                </TabsList>

                <TabsContent value='login' className='space-y-6'>
                  <form onSubmit={handleLogin} className='space-y-6'>
                    <div className='space-y-4'>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='email'
                          className='text-sm font-medium text-slate-700'>
                          Email Address
                        </Label>
                        <Input
                          id='email'
                          type='email'
                          placeholder='Enter your email'
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className='h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                          required
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='password'
                          className='text-sm font-medium text-slate-700'>
                          Password
                        </Label>
                        <div className='relative'>
                          <Input
                            id='password'
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={(e) =>
                              handleInputChange("password", e.target.value)
                            }
                            className='h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400 pr-12'
                          />
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            className='absolute right-0 top-0 h-12 px-3 hover:bg-transparent'
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                              <EyeOff className='h-4 w-4 text-slate-400' />
                            ) : (
                              <Eye className='h-4 w-4 text-slate-400' />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button
                      type='submit'
                      disabled={loading}
                      className='w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'>
                      <Sparkles className='w-4 h-4 mr-2' />
                      {loading ? "Signing In..." : "Sign In to Dashboard"}
                    </Button>

                    <Button
                      type='button'
                      variant='link'
                      className='w-full text-blue-600 hover:text-blue-700'
                      onClick={() => setActiveTab("forgot")}>
                      Forgot your password?
                    </Button>
                  </form>

                  {/* Demo Login Section */}
                  <div className='border-t border-slate-200 pt-6'>
                    <p className='text-center text-sm text-slate-600 mb-4 font-medium'>
                      Try our platform with demo accounts:
                    </p>
                    <div className='grid grid-cols-2 gap-3'>
                      <Button
                        onClick={() => handleDemoLogin("entrepreneur")}
                        variant='outline'
                        size='sm'
                        className='h-12 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300'>
                        <User className='w-4 h-4 mr-2' />
                        Entrepreneur
                      </Button>
                      <Button
                        onClick={() => handleDemoLogin("mentor")}
                        variant='outline'
                        size='sm'
                        className='h-12 border-green-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300'>
                        <Users className='w-4 h-4 mr-2' />
                        Mentor
                      </Button>
                      <Button
                        onClick={() => handleDemoLogin("company")}
                        variant='outline'
                        size='sm'
                        className='h-12 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300'>
                        <Building className='w-4 h-4 mr-2' />
                        Company
                      </Button>
                      <Button
                        onClick={() => handleDemoLogin("admin")}
                        variant='outline'
                        size='sm'
                        className='h-12 border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300'>
                        <Shield className='w-4 h-4 mr-2' />
                        Admin
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value='register' className='space-y-6'>
                  <form onSubmit={handleRegister} className='space-y-6'>
                    <div className='space-y-4'>
                      <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                          <Label
                            htmlFor='firstName'
                            className='text-sm font-medium text-slate-700'>
                            First Name
                          </Label>
                          <Input
                            id='firstName'
                            placeholder='John'
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            className='h-11 border-slate-200 focus:border-purple-400 focus:ring-purple-400'
                            required
                          />
                        </div>
                        <div className='space-y-2'>
                          <Label
                            htmlFor='lastName'
                            className='text-sm font-medium text-slate-700'>
                            Last Name
                          </Label>
                          <Input
                            id='lastName'
                            placeholder='Doe'
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            className='h-11 border-slate-200 focus:border-purple-400 focus:ring-purple-400'
                            required
                          />
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='email'
                          className='text-sm font-medium text-slate-700'>
                          Email Address
                        </Label>
                        <Input
                          id='email'
                          type='email'
                          placeholder='your@email.com'
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className='h-11 border-slate-200 focus:border-purple-400 focus:ring-purple-400'
                          required
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='role'
                          className='text-sm font-medium text-slate-700'>
                          I am a...
                        </Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) =>
                            handleInputChange("role", value)
                          }>
                          <SelectTrigger className='h-11 border-slate-200 focus:border-purple-400 focus:ring-purple-400'>
                            <SelectValue placeholder='Select your role' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='entrepreneur'>
                              Entrepreneur
                            </SelectItem>
                            <SelectItem value='mentor'>Mentor</SelectItem>
                            <SelectItem value='company'>
                              Company Representative
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {formData.role === "company" && (
                        <div className='space-y-2'>
                          <Label
                            htmlFor='company'
                            className='text-sm font-medium text-slate-700'>
                            Company Name
                          </Label>
                          <Input
                            id='company'
                            placeholder='Your Company Ltd'
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                            className='h-11 border-slate-200 focus:border-purple-400 focus:ring-purple-400'
                            required
                          />
                        </div>
                      )}
                      <div className='space-y-2'>
                        <Label
                          htmlFor='password'
                          className='text-sm font-medium text-slate-700'>
                          Password
                        </Label>
                        <div className='relative'>
                          <Input
                            id='password'
                            type={showPassword ? "text" : "password"}
                            placeholder='Create a strong password'
                            value={formData.password}
                            onChange={(e) =>
                              handleInputChange("password", e.target.value)
                            }
                            className='h-11 border-slate-200 focus:border-purple-400 focus:ring-purple-400 pr-12'
                            required
                          />
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            className='absolute right-0 top-0 h-11 px-3 hover:bg-transparent'
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                              <EyeOff className='h-4 w-4 text-slate-400' />
                            ) : (
                              <Eye className='h-4 w-4 text-slate-400' />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='confirmPassword'
                          className='text-sm font-medium text-slate-700'>
                          Confirm Password
                        </Label>
                        <Input
                          id='confirmPassword'
                          type='password'
                          placeholder='Confirm your password'
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                          }
                          className='h-11 border-slate-200 focus:border-purple-400 focus:ring-purple-400'
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type='submit'
                      disabled={loading}
                      className='w-full h-12 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'>
                      <Sparkles className='w-4 h-4 mr-2' />
                      {loading ? "Creating Account..." : "Create Your Account"}
                    </Button>
                  </form>
                </TabsContent>

                {activeTab === "forgot" && (
                  <div className='space-y-6'>
                    <div className='text-center'>
                      <h3 className='text-xl font-semibold mb-2 text-slate-800'>
                        Reset Your Password
                      </h3>
                      <p className='text-slate-600 text-sm'>
                        Enter your email and we'll send you a reset link
                      </p>
                    </div>
                    <form onSubmit={handleForgotPassword} className='space-y-6'>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='resetEmail'
                          className='text-sm font-medium text-slate-700'>
                          Email Address
                        </Label>
                        <Input
                          id='resetEmail'
                          type='email'
                          placeholder='your@email.com'
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className='h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                          required
                        />
                      </div>

                      <Button
                        type='submit'
                        disabled={loading}
                        className='w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'>
                        {loading ? "Sending..." : "Send Reset Link"}
                      </Button>

                      <Button
                        type='button'
                        variant='link'
                        className='w-full text-blue-600 hover:text-blue-700'
                        onClick={() => setActiveTab("login")}>
                        Back to Sign In
                      </Button>
                    </form>
                  </div>
                )}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Email Verification Modal */}
      <Dialog open={showResendModal} onOpenChange={setShowResendModal}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                <Mail className='w-5 h-5 text-blue-600' />
              </div>
              Email Sent Successfully
            </DialogTitle>
            <DialogDescription className='text-left space-y-4 pt-4'>
              <p className='leading-relaxed'>
                {activeTab === "register"
                  ? "We've sent a verification email to your inbox. Please check your email and click the verification link to activate your account."
                  : "We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password."}
              </p>
              <div className='bg-slate-50 p-4 rounded-lg border border-slate-200'>
                <p className='text-sm font-medium mb-2 text-slate-900'>
                  Didn't receive the email?
                </p>
                <p className='text-xs text-slate-600 leading-relaxed'>
                  Check your spam folder or click the button below to resend.
                  Make sure to whitelist our domain for future emails.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className='flex flex-col gap-3 pt-4'>
            <Button
              onClick={() => {
                toast({
                  title: "Email Resent",
                  description: "Please check your inbox again.",
                });
              }}
              className='w-full h-11 bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
              <Mail className='w-4 h-4 mr-2' />
              Resend Email
            </Button>
            <Button
              variant='outline'
              onClick={handleResendComplete}
              className='w-full h-11'>
              <CheckCircle className='w-4 h-4 mr-2' />
              I've Verified My Email
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Auth;
