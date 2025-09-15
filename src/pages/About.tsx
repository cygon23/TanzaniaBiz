import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/landing/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Globe, Award, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe every Tanzanian entrepreneur deserves access to world-class business tools and guidance."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to solve traditional business challenges in modern ways."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive ecosystem where entrepreneurs, mentors, and companies collaborate for mutual success."
    },
    {
      icon: Globe,
      title: "Local Impact",
      description: "Deeply rooted in Tanzanian culture while connected to global business best practices."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Entrepreneurs Served" },
    { number: "500+", label: "Active Mentors" },
    { number: "95%", label: "Compliance Success Rate" },
    { number: "1M+", label: "Businesses Registered" }
  ];

  const team = [
    {
      name: "",
      role: "Founder & CEO",
      description:
        "Former McKinsey consultant with 15+ years of experience building businesses across East Africa.",
      image: "AH",
    },
    {
      name: "",
      role: "CTO",
      description:
        "AI engineer and entrepreneur who previously scaled tech solutions across 10+ African markets.",
      image: "JM",
    },
    {
      name: "",
      role: "Head of Partnerships",
      description:
        "Former BRELA official with deep expertise in Tanzanian business regulations and compliance.",
      image: "GK",
    },
    {
      name: "",
      role: "Head of Product",
      description:
        "Product strategist focused on creating intuitive experiences for emerging market entrepreneurs.",
      image: "DM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            About TanzaniaBiz
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Tanzania's
            <br />
            <span className="text-accent">Business Revolution</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're democratizing access to business success by combining AI technology with deep local expertise,
            making entrepreneurship accessible to every Tanzanian with a dream.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To transform Tanzania into East Africa's leading entrepreneurial hub by providing every 
                business owner with AI-powered tools, expert mentorship, and seamless compliance support 
                - regardless of their background or location.
              </p>
              
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-secondary mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Tanzania where every entrepreneur has equal opportunity to build successful, compliant, 
                and impactful businesses that drive economic growth and create meaningful employment 
                for millions of Tanzanians.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center card-gradient">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 card-gradient">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders from diverse backgrounds united by a passion for Tanzanian entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 card-gradient">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                TanzaniaBiz was born from a simple observation: while Tanzania has one of the most vibrant 
                entrepreneurial spirits in East Africa, countless brilliant business ideas never reach their 
                potential due to regulatory complexity, lack of mentorship, and limited access to resources.
              </p>
              
              <p>
                Our founder, Amina Hassan, experienced this firsthand when she returned to Tanzania after 
                working with McKinsey across Africa. Despite her experience, she found the process of 
                starting a business incredibly challenging - from navigating BRELA requirements to 
                understanding TRA obligations.
              </p>
              
              <p>
                "If someone with my background found it difficult," she realized, "imagine how impossible 
                it must be for a brilliant entrepreneur in Mwanza or Mbeya with a game-changing idea but 
                no connections in Dar es Salaam."
              </p>
              
              <p>
                That's when the vision for TanzaniaBiz crystallized: use AI and technology to democratize 
                access to business expertise, making it possible for any Tanzanian to start and grow a 
                successful business regardless of their location, background, or network.
              </p>
              
              <p>
                Today, we're proud to serve over 10,000 entrepreneurs across all regions of Tanzania, 
                from tech startups in Dar es Salaam to agricultural enterprises in rural areas. Every 
                day, we're working to make business success more accessible and achievable for every 
                Tanzanian entrepreneur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;