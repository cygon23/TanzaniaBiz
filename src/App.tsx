import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard/entrepreneur" element={<EntrepreneurDashboard />} />
          <Route path="/dashboard/entrepreneur/ai" element={<AIAssistant />} />
          <Route path="/dashboard/entrepreneur/business-plan" element={<BusinessPlan />} />
          <Route path="/dashboard/entrepreneur/compliance" element={<Compliance />} />
          <Route path="/dashboard/entrepreneur/mentorship" element={<Mentorship />} />
          <Route path="/dashboard/entrepreneur/funding" element={<Funding />} />
          <Route path="/dashboard/entrepreneur/learning" element={<Learning />} />
          <Route path="/dashboard/entrepreneur/analytics" element={<Analytics />} />
          
          {/* Generic settings route for all roles */}
          <Route path="/dashboard/:role/settings" element={<Settings />} />
          
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/mentor" element={<MentorDashboard />} />
          <Route path="/dashboard/company" element={<CompanyDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
