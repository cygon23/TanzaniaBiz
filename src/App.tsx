import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EntrepreneurDashboard from "./pages/dashboard/EntrepreneurDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import MentorDashboard from "./pages/dashboard/MentorDashboard";
import CompanyDashboard from "./pages/dashboard/CompanyDashboard";
import AIAssistant from "./pages/dashboard/entrepreneur/AIAssistant";
import BusinessPlan from "./pages/dashboard/entrepreneur/BusinessPlan";
import Compliance from "./pages/dashboard/entrepreneur/Compliance";
import Mentorship from "./pages/dashboard/entrepreneur/Mentorship";
import Funding from "./pages/dashboard/entrepreneur/Funding";
import Learning from "./pages/dashboard/entrepreneur/Learning";
import Analytics from "./pages/dashboard/entrepreneur/Analytics";
import Settings from "./pages/dashboard/Settings";

// Admin Dashboard Pages
import AdminUsers from "./pages/dashboard/admin/Users";
import AdminCompanies from "./pages/dashboard/admin/Companies";
import AdminContent from "./pages/dashboard/admin/Content";
import AdminAnalytics from "./pages/dashboard/admin/AdminAnalytics";
import AdminCompliance from "./pages/dashboard/admin/AdminCompliance";

// Mentor Dashboard Pages
import MentorMentees from "./pages/dashboard/mentor/Mentees";
import MentorSessions from "./pages/dashboard/mentor/Sessions";
import MentorProgress from "./pages/dashboard/mentor/Progress";

// Company Dashboard Pages
import CompanyPartnerships from "./pages/dashboard/company/Partnerships";
import CompanyFunding from "./pages/dashboard/company/CompanyFunding";
import CompanyImpact from "./pages/dashboard/company/Impact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />

          {/* Dashboard Routes */}
          <Route
            path='/dashboard/entrepreneur'
            element={<EntrepreneurDashboard />}
          />
          <Route path='/dashboard/entrepreneur/ai' element={<AIAssistant />} />
          <Route
            path='/dashboard/entrepreneur/business-plan'
            element={<BusinessPlan />}
          />
          <Route
            path='/dashboard/entrepreneur/compliance'
            element={<Compliance />}
          />
          <Route
            path='/dashboard/entrepreneur/mentorship'
            element={<Mentorship />}
          />
          <Route path='/dashboard/entrepreneur/funding' element={<Funding />} />
          <Route
            path='/dashboard/entrepreneur/learning'
            element={<Learning />}
          />
          <Route
            path='/dashboard/entrepreneur/analytics'
            element={<Analytics />}
          />

          {/* Admin Dashboard Routes */}
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
          <Route path='/dashboard/admin/users' element={<AdminUsers />} />
          <Route
            path='/dashboard/admin/companies'
            element={<AdminCompanies />}
          />
          <Route path='/dashboard/admin/content' element={<AdminContent />} />
          <Route
            path='/dashboard/admin/analytics'
            element={<AdminAnalytics />}
          />
          <Route
            path='/dashboard/admin/compliance'
            element={<AdminCompliance />}
          />

          {/* Mentor Dashboard Routes */}
          <Route path='/dashboard/mentor' element={<MentorDashboard />} />
          <Route path='/dashboard/mentor/mentees' element={<MentorMentees />} />
          <Route
            path='/dashboard/mentor/sessions'
            element={<MentorSessions />}
          />
          <Route
            path='/dashboard/mentor/progress'
            element={<MentorProgress />}
          />

          {/* Company Dashboard Routes */}
          <Route path='/dashboard/company' element={<CompanyDashboard />} />
          <Route
            path='/dashboard/company/partnerships'
            element={<CompanyPartnerships />}
          />
          <Route
            path='/dashboard/company/funding'
            element={<CompanyFunding />}
          />
          <Route path='/dashboard/company/impact' element={<CompanyImpact />} />

          {/* Auth route */}
          <Route path='/auth' element={<Auth />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path='/contact' element={<Contact />} />

          {/* Generic settings route for all roles */}
          <Route path='/dashboard/:role/settings' element={<Settings />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
