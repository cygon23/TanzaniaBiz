import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle,
  Users,
  Headphones,
  Globe,
  Zap,
  Heart,
  Star,
  Shield,
  ChevronRight,
  AlertCircle,
  Calendar,
  MessageSquare,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/landing/FooterV";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed help via email",
    contact: "support@raisev.africa",
    response: "< 24 hours",
    action: "mailto:support@raisev.africa",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-primary/80",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant support via live chat",
    contact: "Available now",
    response: "< 2 minutes",
    action: "#",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradient: "from-secondary to-secondary/80",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our experts directly",
    contact: "+255 123 456 789",
    response: "Business hours",
    action: "tel:+255123456789",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-primary/90",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Meet us in person",
    contact: "Dar es Salaam, Tanzania",
    response: "By appointment",
    action: "#",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradient: "from-secondary to-secondary/90",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EAT", available: true },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM EAT", available: true },
  { day: "Sunday", hours: "Emergency support only", available: false },
];

const faqs = [
  {
    question: "How quickly can I get started with TanzaniaBiz?",
    answer:
      "You can sign up and start using our platform immediately. Our AI-powered onboarding process takes less than 10 minutes, and you'll have access to all features during your 14-day free trial.",
  },
  {
    question: "Do you provide support in Swahili?",
    answer:
      "Absolutely! Our entire platform, AI assistant, and support team are fully bilingual. We provide comprehensive support in both English and Swahili to ensure you're comfortable using our services.",
  },
  {
    question: "What types of businesses can benefit from your platform?",
    answer:
      "We support all types of businesses across Tanzania - from early-stage startups to established enterprises. Whether you're in agriculture, technology, retail, or services, our platform adapts to your specific industry needs.",
  },
  {
    question: "Is there really a free trial with no commitments?",
    answer:
      "Yes! We offer a complete 14-day free trial with full access to all features. No credit card required, no hidden fees, and you can cancel anytime. We're confident you'll love what we offer.",
  },
];

const stats = [
  {
    number: "< 2min",
    label: "Average Response Time",
    icon: Clock,
    color: "text-primary",
  },
  {
    number: "24/7",
    label: "Support Availability",
    icon: Headphones,
    color: "text-secondary",
  },
  {
    number: "99.9%",
    label: "Customer Satisfaction",
    icon: Star,
    color: "text-primary",
  },
  {
    number: "2 Languages",
    label: "English & Swahili",
    icon: Globe,
    color: "text-secondary",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    urgency: "",
    businessType: "",
  });
  const [currentStat, setCurrentStat] = useState(0);
  const [hoveredMethod, setHoveredMethod] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormStep(3); // Success step

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        urgency: "",
        businessType: "",
      });
      setFormStep(1);
    }, 3000);
  };

  const getFormProgress = () => {
    const fields = [
      formData.name,
      formData.email,
      formData.subject,
      formData.message,
    ];
    const completed = fields.filter((field) => field.trim() !== "").length;
    return (completed / fields.length) * 100;
  };

  return (
    <div className='min-h-screen bg-white overflow-hidden'>
      {/* Header */}
      <Header />

      {/* Dynamic cursor follower */}
      <div
        className='fixed w-4 h-4 bg-primary/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out'
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform:
            hoveredMethod !== null || focusedField !== null
              ? "scale(3)"
              : "scale(1)",
        }}
      />

      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 bg-white overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "1s" }}></div>
          <div
            className='absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-bounce'
            style={{ animationDelay: "2s", animationDuration: "4s" }}></div>
        </div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-primary/20 rounded-full animate-ping'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        <div className='container mx-auto px-4 lg:px-8 relative z-10'>
          <div className='text-center max-w-5xl mx-auto'>
            <div className='flex justify-center mb-8'>
              <div className='flex items-center gap-3 bg-white backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200'>
                <MessageSquare className='w-4 h-4 text-primary' />
                <span className='text-sm font-medium text-slate-700'>
                  We're Here to Help
                </span>
                <div className='w-1 h-1 bg-slate-400 rounded-full' />
                <Heart className='w-4 h-4 text-red-500 animate-pulse' />
                <span className='text-sm font-medium text-slate-700'>
                  24/7 Support
                </span>
              </div>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-secondary mb-8 leading-tight'>
              <span
                className='inline-block animate-bounce'
                style={{ animationDelay: "0.1s" }}>
                Let's
              </span>{" "}
              <span
                className='inline-block animate-bounce'
                style={{ animationDelay: "0.2s" }}>
                Talk
              </span>{" "}
              <span
                className='inline-block animate-bounce bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'
                style={{ animationDelay: "0.3s" }}>
                Business
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed max-w-4xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]'>
              Whether you need support, have questions, or want to explore how
              RAV can transform your business, our expert team is ready
              to help you succeed.
            </p>

            {/* Animated Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl bg-white backdrop-blur-sm border border-slate-200 transition-all duration-500 ${
                    currentStat === index ? "scale-105 border-primary shadow-lg" : ""
                  }`}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                  }}>
                  {currentStat === index && (
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse' />
                  )}
                  <stat.icon
                    className={`w-8 h-8 ${
                      stat.color
                    } mx-auto mb-3 transition-transform duration-300 ${
                      currentStat === index ? "scale-110" : ""
                    }`}
                  />
                  <div className='text-2xl md:text-3xl font-bold text-secondary mb-1'>
                    {stat.number}
                  </div>
                  <p className='text-slate-600 text-sm font-medium'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-medium'>
              <Phone className='w-4 h-4' />
              Multiple Ways to Connect
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
              Choose Your Preferred
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                {" "}
                Contact Method
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className='group text-center p-8 cursor-pointer bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2'
                onMouseEnter={() => setHoveredMethod(index)}
                onMouseLeave={() => setHoveredMethod(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}>
                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 ${method.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                />

                <div className='relative z-10'>
                  <div
                    className={`w-16 h-16 rounded-2xl ${method.bgColor} border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <method.icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <h3 className='text-xl font-bold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors duration-300'>
                    {method.title}
                  </h3>
                  <p className='text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300'>
                    {method.description}
                  </p>
                  <div className='space-y-2'>
                    <a
                      href={method.action}
                      className={`block ${method.color} font-semibold hover:opacity-80 transition-opacity`}>
                      {method.contact}
                    </a>
                    <p className='text-sm text-slate-500'>{method.response}</p>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredMethod === index && (
                  <div className='absolute inset-0 pointer-events-none'>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 ${method.color.replace(
                          "text-",
                          "bg-"
                        )} rounded-full animate-ping`}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 200}ms`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className='py-20 lg:py-32 bg-white'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Enhanced Contact Form */}
            <div>
              <div className='mb-8'>
                <h3 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
                  Send Us a
                  <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                    {" "}
                    Message
                  </span>
                </h3>
                <p className='text-lg text-slate-600'>
                  We'll get back to you within 24 hours
                </p>
              </div>

              {/* Progress Bar */}
              <div className='mb-8'>
                <div className='flex justify-between text-sm text-slate-600 mb-2'>
                  <span>Form Progress</span>
                  <span>{Math.round(getFormProgress())}%</span>
                </div>
                <div className='w-full bg-slate-200 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500'
                    style={{ width: `${getFormProgress()}%` }}
                  />
                </div>
              </div>

              <Card className='p-8 bg-slate-50 border-slate-200 shadow-xl'>
                {formStep === 3 ? (
                  <div className='text-center py-12'>
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                      <CheckCircle className='w-8 h-8 text-green-600' />
                    </div>
                    <h3 className='text-2xl font-bold text-slate-800 mb-4'>
                      Message Sent Successfully!
                    </h3>
                    <p className='text-slate-600 mb-6'>
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                    <div className='inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium'>
                      <Sparkles className='w-4 h-4' />
                      Expect a response soon!
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='name'
                          className='text-sm font-semibold text-slate-700'>
                          Full Name
                        </Label>
                        <Input
                          id='name'
                          placeholder='Your full name'
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className='h-12 border-slate-200 focus:border-primary focus:ring-primary bg-white transition-all duration-300'
                          required
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='email'
                          className='text-sm font-semibold text-slate-700'>
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
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className='h-12 border-slate-200 focus:border-primary focus:ring-primary bg-white transition-all duration-300'
                          required
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='businessType'
                          className='text-sm font-semibold text-slate-700'>
                          Business Type
                        </Label>
                        <Select
                          value={formData.businessType}
                          onValueChange={(value) =>
                            handleInputChange("businessType", value)
                          }>
                          <SelectTrigger className='h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400 bg-white'>
                            <SelectValue placeholder='Select your business type' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='startup'>Startup</SelectItem>
                            <SelectItem value='small-business'>
                              Small Business
                            </SelectItem>
                            <SelectItem value='enterprise'>
                              Enterprise
                            </SelectItem>
                            <SelectItem value='entrepreneur'>
                              Aspiring Entrepreneur
                            </SelectItem>
                            <SelectItem value='other'>Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='urgency'
                          className='text-sm font-semibold text-slate-700'>
                          Priority Level
                        </Label>
                        <Select
                          value={formData.urgency}
                          onValueChange={(value) =>
                            handleInputChange("urgency", value)
                          }>
                          <SelectTrigger className='h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400 bg-white'>
                            <SelectValue placeholder='Select priority' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='low'>
                              Low - General inquiry
                            </SelectItem>
                            <SelectItem value='medium'>
                              Medium - Need assistance
                            </SelectItem>
                            <SelectItem value='high'>
                              High - Urgent support
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label
                        htmlFor='subject'
                        className='text-sm font-semibold text-slate-700'>
                        Subject
                      </Label>
                      <Input
                        id='subject'
                        placeholder='What can we help you with?'
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        className='h-12 border-slate-200 focus:border-primary focus:ring-primary bg-white transition-all duration-300'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label
                        htmlFor='message'
                        className='text-sm font-semibold text-slate-700'>
                        Message
                      </Label>
                      <Textarea
                        id='message'
                        placeholder='Please describe your question or issue in detail...'
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className='min-h-32 border-slate-200 focus:border-blue-400 focus:ring-blue-400 bg-white resize-none transition-all duration-300'
                        required
                      />
                    </div>

                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary/90 text-white font-bold text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'>
                      {isSubmitting ? (
                        <>
                          <div className='animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2' />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className='w-5 h-5 mr-2' />
                          Send Message
                          <ChevronRight className='w-5 h-5 ml-2' />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Office Info & Enhanced Content */}
            <div className='space-y-8'>
              {/* Office Hours */}
              <Card className='p-8 bg-white border-slate-200 shadow-xl'>
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
                    <Clock className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold text-slate-800'>
                    Office Hours
                  </h3>
                </div>
                <div className='space-y-4'>
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className='flex justify-between items-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300'>
                      <span className='font-medium text-slate-700'>
                        {schedule.day}
                      </span>
                      <div className='flex items-center gap-2'>
                        <span className='text-slate-600'>{schedule.hours}</span>
                        {schedule.available ? (
                          <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                        ) : (
                          <div className='w-2 h-2 bg-red-500 rounded-full' />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* FAQ Section */}
              <Card className='p-8 bg-white border-slate-200 shadow-xl'>
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4'>
                    <MessageSquare className='w-6 h-6 text-secondary' />
                  </div>
                  <h3 className='text-2xl font-bold text-slate-800'>
                    Quick Answers
                  </h3>
                </div>
                <div className='space-y-6'>
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className='border-b border-slate-100 pb-6 last:border-b-0 last:pb-0'>
                      <h4 className='font-semibold mb-3 text-slate-800 flex items-center'>
                        <div className='w-2 h-2 bg-primary rounded-full mr-2' />
                        {faq.question}
                      </h4>
                      <p className='text-slate-600 leading-relaxed pl-4'>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Emergency Contact */}
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 animate-pulse' />
                <Card className='relative bg-gradient-to-r from-secondary to-primary p-8 text-white border-0 shadow-2xl'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <AlertCircle className='w-8 h-8 text-white animate-pulse' />
                    </div>
                    <h3 className='text-2xl font-bold mb-4'>
                      Emergency Support
                    </h3>
                    <p className='text-white/90 mb-6 leading-relaxed'>
                      For critical business issues that need immediate attention
                    </p>
                    <Button className='bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 font-bold px-8 py-3 transition-all duration-300 hover:scale-105'>
                      <Phone className='w-5 h-5 mr-2' />
                      Emergency Line: +255 700 000 000
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className='py-20 lg:py-32 relative bg-white'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-xl opacity-20 animate-pulse' />
            <div className='relative bg-gradient-to-r from-secondary via-primary/90 to-secondary rounded-3xl p-12 lg:p-16 text-white overflow-hidden'>
              <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse' />
                <div
                  className='absolute bottom-10 left-10 w-24 h-24 bg-primary rounded-full blur-2xl animate-bounce'
                  style={{ animationDuration: "3s" }}
                />
              </div>

              <div className='relative z-10 max-w-4xl mx-auto text-center'>
                <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20'>
                  <User className='w-5 h-5 text-white' />
                  <span className='text-sm font-medium text-white'>
                    Ready to Start?
                  </span>
                </div>

                <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
                  Ready to Transform Your
                  <span className='bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent'>
                    {" "}
                    Business Journey?
                  </span>
                </h3>
                <p className='text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto'>
                  Join over 15,000 successful entrepreneurs who trust
                  RAV to accelerate their business growth. Start your
                  free trial today and experience the difference.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-secondary hover:bg-slate-50 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105'>
                    <Sparkles className='w-5 h-5 mr-2 animate-spin' />
                    Start Free Trial
                    <ChevronRight className='w-5 h-5 ml-2' />
                  </Button>
                  <Button
                    size='lg'
                    className='bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg'>
                    <Calendar className='w-5 h-5 mr-2' />
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
