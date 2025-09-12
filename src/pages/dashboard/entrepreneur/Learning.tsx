import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Users, Award, Play, CheckCircle } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Business Registration in Tanzania",
    description: "Complete guide to BRELA registration and legal requirements",
    duration: "2 hours",
    level: "Beginner",
    progress: 85,
    students: 1247,
    completed: false,
    thumbnail: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Financial Management for SMEs",
    description: "Essential accounting and financial planning skills",
    duration: "3 hours",
    level: "Intermediate",
    progress: 60,
    students: 892,
    completed: false,
    thumbnail: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Digital Marketing Basics",
    description: "Social media and online marketing strategies",
    duration: "1.5 hours",
    level: "Beginner",
    progress: 100,
    students: 2156,
    completed: true,
    thumbnail: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Tax Compliance (TRA)",
    description: "Understanding Tanzanian tax obligations and filing",
    duration: "2.5 hours",
    level: "Intermediate",
    progress: 0,
    students: 743,
    completed: false,
    thumbnail: "/placeholder.svg"
  }
];

const achievements = [
  { name: "First Course Completed", icon: Award, earned: true },
  { name: "Quick Learner", icon: Clock, earned: true },
  { name: "Knowledge Seeker", icon: BookOpen, earned: false },
  { name: "Community Helper", icon: Users, earned: false }
];

export default function Learning() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Learning Center</h1>
        <p className="text-muted-foreground mt-2">
          Expand your business knowledge with our comprehensive courses
        </p>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              +1 from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              25% completion rate
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              2 more to unlock
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Courses */}
      <Card>
        <CardHeader>
          <CardTitle>My Courses</CardTitle>
          <CardDescription>Continue your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course) => (
              <Card key={course.id} className="border">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </div>
                    {course.completed && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <Button 
                      className="w-full" 
                      variant={course.completed ? "outline" : "default"}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {course.completed ? "Review" : course.progress > 0 ? "Continue" : "Start Course"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
          <CardDescription>Your learning milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border text-center ${
                  achievement.earned 
                    ? 'bg-primary/10 border-primary' 
                    : 'bg-muted/50 border-muted'
                }`}
              >
                <achievement.icon 
                  className={`h-8 w-8 mx-auto mb-2 ${
                    achievement.earned ? 'text-primary' : 'text-muted-foreground'
                  }`} 
                />
                <p className={`text-sm font-medium ${
                  achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {achievement.name}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}