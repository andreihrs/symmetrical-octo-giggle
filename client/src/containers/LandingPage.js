import React from "react";
import BlogSections from "../components/BlogSections.js";
import Features from "../components/Features.js";
import HeroSection from "../components/HeroSection.js";
import Footer from "../components/Footer.js";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <BlogSections />
      <Footer />
    </div>
  );
};

export default LandingPage;
