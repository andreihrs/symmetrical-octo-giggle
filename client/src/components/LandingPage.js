import React from "react";
import BlogSections from "./BlogSections.js";
import Features from "./Features.js";
import HeroSection from "./HeroSection.js";
import Footer from "./Footer.js";

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
