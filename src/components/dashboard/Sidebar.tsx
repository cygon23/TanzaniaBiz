import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  User,
  FileText,
  Users,
  TrendingUp,
  Settings,
  Building2,
  Bot,
  BookOpen,
  DollarSign,
  Shield,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface SidebarProps {
  userRole: 'entrepreneur' | 'admin' | 'mentor' | 'company';
}

const navigationItems = {
  entrepreneur: [
    { icon: Home, label: "Dashboard", path: "/dashboard/entrepreneur" },
    { icon: Bot, label: "AI Assistant", path: "/dashboard/entrepreneur/ai" },
    { icon: FileText, label: "Business Plan", path: "/dashboard/entrepreneur/business-plan" },
    { icon: Shield, label: "Compliance", path: "/dashboard/entrepreneur/compliance" },
    { icon: Users, label: "Mentorship", path: "/dashboard/entrepreneur/mentorship" },
    { icon: DollarSign, label: "Funding", path: "/dashboard/entrepreneur/funding" },
    { icon: BookOpen, label: "Learning", path: "/dashboard/entrepreneur/learning" },
    { icon: TrendingUp, label: "Analytics", path: "/dashboard/entrepreneur/analytics" },
  ],
  admin: [
    { icon: Home, label: "Dashboard", path: "/dashboard/admin" },
    { icon: Users, label: "Users", path: "/dashboard/admin/users" },
    { icon: Building2, label: "Companies", path: "/dashboard/admin/companies" },
    { icon: FileText, label: "Content", path: "/dashboard/admin/content" },
    { icon: TrendingUp, label: "Analytics", path: "/dashboard/admin/analytics" },
    { icon: Shield, label: "Compliance", path: "/dashboard/admin/compliance" },
  ],
  mentor: [
    { icon: Home, label: "Dashboard", path: "/dashboard/mentor" },
    { icon: Users, label: "Mentees", path: "/dashboard/mentor/mentees" },
    { icon: FileText, label: "Sessions", path: "/dashboard/mentor/sessions" },
    { icon: TrendingUp, label: "Progress", path: "/dashboard/mentor/progress" },
  ],
  company: [
    { icon: Home, label: "Dashboard", path: "/dashboard/company" },
    { icon: Users, label: "Partnerships", path: "/dashboard/company/partnerships" },
    { icon: DollarSign, label: "Funding", path: "/dashboard/company/funding" },
    { icon: TrendingUp, label: "Impact", path: "/dashboard/company/impact" },
  ]
};

export const AppSidebar = ({ userRole }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useSidebar();
  const { signOut, user } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const currentItems = navigationItems[userRole] || [];
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className={cn("border-r transition-all duration-300", isCollapsed ? "w-16" : "w-64")}>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="RAV" className="h-8 w-auto flex-shrink-0" />
          {!isCollapsed && (
            <span className="font-bold text-lg text-sidebar-foreground truncate">RAV</span>
          )}
        </div>
        
        {/* User Info */}
        <div className="flex items-center gap-3 mt-4">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="font-medium text-sidebar-foreground capitalize truncate">
                {user?.full_name || `Demo ${userRole}`}
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                {user?.email || `demo-${userRole}@example.com`}
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel>Navigation</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {currentItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild isActive={isActive} className="w-full">
                      <Link to={item.path} className="flex items-center gap-3 px-3 py-2 rounded-lg">
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && <span className="truncate">{item.label}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2">
        <SidebarMenu className="space-y-1">
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="w-full">
              <Link to={`/dashboard/${userRole}/settings`} className="flex items-center gap-3 px-3 py-2 rounded-lg">
                <Settings className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="truncate">Settings</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={handleLogout} 
              className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg w-full">
                <LogOut className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="truncate">Logout</span>}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};