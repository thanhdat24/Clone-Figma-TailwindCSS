import React from "react";
import Layout from "../components/layout";
import HeroSection from "../components/sections/HeroSection";
import OnlineCoursesSection from "../components/sections/OnlineCoursesSection";
import Testimonial from "../components/sections/Testimonial";
import TopicSection from "../components/sections/TopicSection";

export default function Homepage() {
  return (
    <Layout>
      <HeroSection />
      <TopicSection />
      <OnlineCoursesSection />
      <Testimonial />
    </Layout>
  );
}
