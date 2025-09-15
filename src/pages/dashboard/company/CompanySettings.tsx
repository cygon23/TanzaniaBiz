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
import { Building2, Users, MapPin, Bell, DollarSign, FileText, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CompanySettings = () => {
  const [company, setCompany] = useState({
    // Company Information
    name: 'TechHub Tanzania',
    registrationNumber: 'TZ123456789',
    industry: 'Technology',
    size: '50-100',
    website: 'https://techhub.co.tz',
    founded: '2018',
    description: 'Leading technology innovation hub supporting East African startups with funding and mentorship.',
    
    // Contact Information
    email: 'contact@techhub.co.tz',
    phone: '+255 22 123 4567',
    address: 'Masaki Peninsula, Dar es Salaam',
    city: 'Dar es Salaam',
    region: 'Dar es Salaam',
    postalCode: '12345',
    
    // Partnership Preferences
    partnershipTypes: ['funding', 'mentorship', 'infrastructure'],
    focusAreas: ['Technology', 'FinTech', 'AgriTech', 'HealthTech'],
    fundingRange: '10000-100000',
    partnershipStage: 'Seed',
    
    // Engagement Settings
    acceptApplications: true,
    requireProposal: true,
    responseTime: '5',
    publicProfile: true,
    
    // Notifications
    emailNotifications: true,
    partnershipAlerts: true,
    weeklyReports: true,
    marketingEmails: false
  });

  const { toast } = useToast();

  const handleCompanyChange = (field: string, value: any) => {
    setCompany(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setCompany(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSave = () => {
    toast({
      title: "Settings Updated",
      description: "Your company profile has been updated successfully.",
    });
  };

  const industries = [
    'Technology', 'Agriculture', 'Healthcare', 'Education', 'Finance', 
    'Manufacturing', 'Tourism', 'Energy', 'Transportation', 'Retail'
  ];

  const companySizes = [
    '1-10', '11-50', '51-100', '101-500', '501-1000', '1000+'
  ];

  return (
    <DashboardLayout userRole="company">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Company Settings</h1>
            <p className="text-muted-foreground">
              Manage your company profile and partnership preferences
            </p>
          </div>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <CardTitle>Company Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-lg">TH</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">
                      Upload Logo
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      JPG, PNG up to 2MB
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Company Name</Label>
                    <Input
                      id="name"
                      value={company.name}
                      onChange={(e) => handleCompanyChange('name', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Registration Number</Label>
                    <Input
                      id="registrationNumber"
                      value={company.registrationNumber}
                      onChange={(e) => handleCompanyChange('registrationNumber', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={company.industry} onValueChange={(value) => handleCompanyChange('industry', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Company Size</Label>
                    <Select value={company.size} onValueChange={(value) => handleCompanyChange('size', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {companySizes.map((size) => (
                          <SelectItem key={size} value={size}>{size} employees</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      type="url"
                      value={company.website}
                      onChange={(e) => handleCompanyChange('website', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founded">Year Founded</Label>
                    <Input
                      id="founded"
                      type="number"
                      value={company.founded}
                      onChange={(e) => handleCompanyChange('founded', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Company Description</Label>
                  <Textarea
                    id="description"
                    value={company.description}
                    onChange={(e) => handleCompanyChange('description', e.target.value)}
                    rows={4}
                    placeholder="Describe your company's mission and activities..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <CardTitle>Contact Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={company.email}
                      onChange={(e) => handleCompanyChange('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={company.phone}
                      onChange={(e) => handleCompanyChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={company.address}
                      onChange={(e) => handleCompanyChange('address', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={company.city}
                      onChange={(e) => handleCompanyChange('city', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Input
                      id="region"
                      value={company.region}
                      onChange={(e) => handleCompanyChange('region', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partnerships" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <CardTitle>Partnership Preferences</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Partnership Types</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['funding', 'mentorship', 'infrastructure', 'marketing', 'technology', 'distribution'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Switch
                          checked={company.partnershipTypes.includes(type)}
                          onCheckedChange={(checked) => handleArrayChange('partnershipTypes', type, checked)}
                        />
                        <Label className="capitalize">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Focus Areas</Label>
                  <div className="flex flex-wrap gap-2">
                    {company.focusAreas.map((area, index) => (
                      <Badge key={index} variant="secondary">
                        {area}
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm">
                      + Add Focus Area
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fundingRange">Funding Range (USD)</Label>
                    <Select value={company.fundingRange} onValueChange={(value) => handleCompanyChange('fundingRange', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5000-25000">$5,000 - $25,000</SelectItem>
                        <SelectItem value="25000-100000">$25,000 - $100,000</SelectItem>
                        <SelectItem value="100000-500000">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500000+">$500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partnershipStage">Preferred Stage</Label>
                    <Select value={company.partnershipStage} onValueChange={(value) => handleCompanyChange('partnershipStage', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Idea">Idea Stage</SelectItem>
                        <SelectItem value="Seed">Seed Stage</SelectItem>
                        <SelectItem value="Series A">Series A</SelectItem>
                        <SelectItem value="Growth">Growth Stage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <CardTitle>Engagement Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Accept Partnership Applications</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow entrepreneurs to apply for partnerships
                    </p>
                  </div>
                  <Switch
                    checked={company.acceptApplications}
                    onCheckedChange={(checked) => handleCompanyChange('acceptApplications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require Business Proposal</Label>
                    <p className="text-sm text-muted-foreground">
                      Require detailed proposals before partnerships
                    </p>
                  </div>
                  <Switch
                    checked={company.requireProposal}
                    onCheckedChange={(checked) => handleCompanyChange('requireProposal', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Public Company Profile</Label>
                    <p className="text-sm text-muted-foreground">
                      Make your company visible in the directory
                    </p>
                  </div>
                  <Switch
                    checked={company.publicProfile}
                    onCheckedChange={(checked) => handleCompanyChange('publicProfile', checked)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responseTime">Expected Response Time (days)</Label>
                  <Input
                    id="responseTime"
                    type="number"
                    value={company.responseTime}
                    onChange={(e) => handleCompanyChange('responseTime', e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    How quickly you typically respond to partnership inquiries
                  </p>
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
                    checked={company.emailNotifications}
                    onCheckedChange={(checked) => handleCompanyChange('emailNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Partnership Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new partnership opportunities
                    </p>
                  </div>
                  <Switch
                    checked={company.partnershipAlerts}
                    onCheckedChange={(checked) => handleCompanyChange('partnershipAlerts', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly activity summaries
                    </p>
                  </div>
                  <Switch
                    checked={company.weeklyReports}
                    onCheckedChange={(checked) => handleCompanyChange('weeklyReports', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about platform features and events
                    </p>
                  </div>
                  <Switch
                    checked={company.marketingEmails}
                    onCheckedChange={(checked) => handleCompanyChange('marketingEmails', checked)}
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

export default CompanySettings;