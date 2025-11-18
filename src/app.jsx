import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import QuestionsPage from "./pages/QuestionsPage";
import CostGuidesPage from "./pages/CostGuidesPage";
import CategoryPage from "./components/CategoryPage";
import FindLocationPage from "./components/FindLocationPage";
import TradesLayout from "./components/dashboard/TradesLayout";
import HomeownerLayout from "./components/dashboard/HomeownerLayout";
import DashboardPage from "./pages/DashboardPage";
import HomeownerDashboardPage from "./pages/HomeownerDashboardPage";
import JobsPage from "./pages/JobsPage";
import ReviewsPage from "./pages/ReviewsPage";
import CreditsPage from "./pages/CreditsPage";
import MembershipPage from "./pages/MembershipPage";
import AddonsPage from "./pages/AddonsPage";
import BillingPage from "./pages/BillingPage";
import RewardsPage from "./pages/RewardsPage";
import QAPage from "./pages/QAPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import DisputePage from "./pages/DisputePage";
import ContactSupportPage from "./pages/ContactSupportPage";
import TicketsPage from "./pages/TicketsPage";
import SignupTradePage from "./pages/SignupTradePage";
import PostJobPage from "./pages/PostJobPage";
import UpgradeTradesperson from "./pages/UpgradeTradesperson";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/loginpage";
import LoginLinkPage from "./pages/LoginLinkPage";
import Careers from "./pages/Careers";
import GettingStartedPage from "./pages/GettingStartedPage";

function App() {
  return (
    <Router>
      {/* ✅ ScrollToTop component ko yahan daalna hai */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-trade" element={<SignupTradePage />} />
        <Route path="/trade-signup" element={<SignupTradePage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-link" element={<LoginLinkPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
        <Route path="/upgrade-tradesperson" element={<UpgradeTradesperson />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/cost-guides" element={<CostGuidesPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/find/:location" element={<FindLocationPage />} />

        {/* Homeowner Dashboard Routes */}
        <Route path="/dashboard/homeowner" element={<HomeownerLayout />}>
          <Route index element={<HomeownerDashboardPage />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} />

        {/* Trades Dashboard Routes */}
        <Route path="/dashboard" element={<TradesLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="credits" element={<CreditsPage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="addons" element={<AddonsPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="qa" element={<QAPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="support/dispute" element={<DisputePage />} />
          <Route path="support/contact" element={<ContactSupportPage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
