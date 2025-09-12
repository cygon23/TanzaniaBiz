import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amina Hassan",
    role: "Textile Business Owner",
    location: "Dar es Salaam",
    content: "TanzaniaBiz helped me navigate BRELA registration in just 2 weeks. The AI assistant guided me through every step in Kiswahili, making the process so much easier.",
    rating: 5,
    avatar: "AH"
  },
  {
    name: "John Mwanga",
    role: "Tech Startup Founder",
    location: "Arusha",
    content: "The mentorship matching feature connected me with an experienced entrepreneur who helped me secure funding. My startup is now employing 15 people!",
    rating: 5,
    avatar: "JM"
  },
  {
    name: "Grace Kimaro",
    role: "Agricultural Entrepreneur",
    location: "Mbeya",
    content: "The financial literacy modules taught me proper bookkeeping and business planning. My farm's revenue increased by 300% in the first year.",
    rating: 5,
    avatar: "GK"
  },
  {
    name: "Hassan Abdallah",
    role: "Restaurant Owner",
    location: "Stone Town, Zanzibar",
    content: "From business idea to successful restaurant in 8 months. The platform's market analysis helped me choose the perfect location and menu.",
    rating: 5,
    avatar: "HA"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Success Stories from{" "}
            <span className="text-gradient">Tanzania</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real entrepreneurs sharing their journeys to success with TanzaniaBiz.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 card-gradient border-border/50 hover:shadow-medium transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of successful Tanzanian entrepreneurs
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 text-accent fill-current" />
            <span>4.9/5 average rating from 2,000+ users</span>
          </div>
        </div>
      </div>
    </section>
  );
};