import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Calendar, Bell, Shield, Award, DollarSign, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MentorSettings = () => {
  const [profile, setProfile] = useState({
    firstName: 'Sarah',
    lastName: 'Kimani',
    email: 'sarah@mentor.co.tz',
    phone: '+255 754 123 456',
    bio: 'Experienced business mentor with 15+ years in retail and e-commerce across East Africa.',
    expertise: ['Retail', 'E-commerce', 'Supply Chain', 'Marketing'],
    experience: '15+ years',
    languages: ['English', 'Swahili'],
    location: 'Dar es Salaam',
    linkedin: 'linkedin.com/in/sarahkimani',
    
    // Availability
    availability: {
      monday: { enabled: true, start: '09:00', end: '17:00' },
      tuesday: { enabled: true, start: '09:00', end: '17:00' },
      wednesday: { enabled: true, start: '09:00', end: '17:00' },
      thursday: { enabled: true, start: '09:00', end: '17:00' },
      friday: { enabled: true, start: '09:00', end: '17:00' },
      saturday: { enabled: false, start: '10:00', end: '14:00' },
      sunday: { enabled: false, start: '10:00', end: '14:00' }
    },
    
    // Mentoring Preferences
    maxMentees: '5',
    sessionDuration: '60',
    ratePerHour: '50000',
    meetingTypes: ['video', 'phone', 'inPerson'],
    
    // Notifications
    emailNotifications: true,
    smsNotifications: true,
    bookingReminders: true,
    weeklyReports: true
  });

  const { toast } = useToast();

  const handleProfileChange = (field: string, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleAvailabilityChange = (day: string, field: string, value: any) => {
    setProfile(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          ...prev.availability[day],
          [field]: value
        }
      }
    }));
  };

  const handleSave = () => {
    toast({
      title: "Settings Updated",
      description: "Your mentor profile has been updated successfully.",
    });
  };

  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' }
  ];

  return (
    <DashboardLayout userRole="mentor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Mentor Settings</h1>
            <p className="text-muted-foreground">
              Manage your profile, availability, and mentoring preferences
            </p>
          </div>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <CardTitle>Personal Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-lg">SK</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">
                      Upload Photo
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      JPG, PNG up to 2MB
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profile.firstName}
                      onChange={(e) => handleProfileChange('firstName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profile.lastName}
                      onChange={(e) => handleProfileChange('lastName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => handleProfileChange('location', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      value={profile.experience}
                      onChange={(e) => handleProfileChange('experience', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => handleProfileChange('bio', e.target.value)}
                    rows={4}
                    placeholder="Tell mentees about your background and expertise..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>Areas of Expertise</Label>
                  <div className="flex flex-wrap gap-2">
                    {profile.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm">
                      + Add Expertise
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="availability" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <CardTitle>Weekly Availability</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {days.map((day) => (
                  <div key={day.key} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-20">
                      <Label className="font-medium">{day.label}</Label>
                    </div>
                    <Switch
                      checked={profile.availability[day.key].enabled}
                      onCheckedChange={(checked) => handleAvailabilityChange(day.key, 'enabled', checked)}
                    />
                    {profile.availability[day.key].enabled && (
                      <div className="flex items-center space-x-2">
                        <Input
                          type="time"
                          value={profile.availability[day.key].start}
                          onChange={(e) => handleAvailabilityChange(day.key, 'start', e.target.value)}
                          className="w-32"
                        />
                        <span className="text-muted-foreground">to</span>
                        <Input
                          type="time"
                          value={profile.availability[day.key].end}
                          onChange={(e) => handleAvailabilityChange(day.key, 'end', e.target.value)}
                          className="w-32"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <CardTitle>Mentoring Preferences</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="maxMentees">Maximum Mentees</Label>
                    <Input
                      id="maxMentees"
                      type="number"
                      value={profile.maxMentees}
                      onChange={(e) => handleProfileChange('maxMentees', e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Maximum number of active mentees
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sessionDuration">Default Session Duration (minutes)</Label>
                    <Select value={profile.sessionDuration} onValueChange={(value) => handleProfileChange('sessionDuration', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                        <SelectItem value="90">90 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ratePerHour">Hourly Rate (TSH)</Label>
                  <Input
                    id="ratePerHour"
                    type="number"
                    value={profile.ratePerHour}
                    onChange={(e) => handleProfileChange('ratePerHour', e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Your hourly consulting rate in Tanzanian Shillings
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Preferred Meeting Types</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={profile.meetingTypes.includes('video')}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleProfileChange('meetingTypes', [...profile.meetingTypes, 'video']);
                          } else {
                            handleProfileChange('meetingTypes', profile.meetingTypes.filter(t => t !== 'video'));
                          }
                        }}
                      />
                      <Label>Video Calls</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={profile.meetingTypes.includes('phone')}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleProfileChange('meetingTypes', [...profile.meetingTypes, 'phone']);
                          } else {
                            handleProfileChange('meetingTypes', profile.meetingTypes.filter(t => t !== 'phone'));
                          }
                        }}
                      />
                      <Label>Phone Calls</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={profile.meetingTypes.includes('inPerson')}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleProfileChange('meetingTypes', [...profile.meetingTypes, 'inPerson']);
                          } else {
                            handleProfileChange('meetingTypes', profile.meetingTypes.filter(t => t !== 'inPerson'));
                          }
                        }}
                      />
                      <Label>In-Person</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <CardTitle>Notification Preferences</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={profile.emailNotifications}
                    onCheckedChange={(checked) => handleProfileChange('emailNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive urgent notifications via SMS
                    </p>
                  </div>
                  <Switch
                    checked={profile.smsNotifications}
                    onCheckedChange={(checked) => handleProfileChange('smsNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Booking Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Get reminded about upcoming sessions
                    </p>
                  </div>
                  <Switch
                    checked={profile.bookingReminders}
                    onCheckedChange={(checked) => handleProfileChange('bookingReminders', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly mentoring activity summaries
                    </p>
                  </div>
                  <Switch
                    checked={profile.weeklyReports}
                    onCheckedChange={(checked) => handleProfileChange('weeklyReports', checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MentorSettings;