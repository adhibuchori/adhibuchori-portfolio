import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeSection from "./sections/Home/Home";
import "./styles/App.css";
import Footer from "./components/Footer/Footer";
import FloatingBottomNav from "./components/FloatingBottomNav/FloatingBottomNav";

interface ContactMeProps {
  onVisibilityChange: (isVisible: boolean) => void;
}

const AboutMeSection = React.lazy(() => import("./sections/AboutMe/AboutMe"));
const MyJourneySection = React.lazy(
  () => import("./sections/MyJourney/MyJourney")
);
const TechStackSection = React.lazy(
  () => import("./sections/TechStack/TechStack")
);
const ProjectsSection = React.lazy(
  () => import("./sections/Projects/Projects")
);
const TestimonialsSection = React.lazy(
  () => import("./sections/Testimonials/Testimonials")
);
const ContactMeSection = React.lazy(
  () => import("./sections/ContactMe/ContactMe")
) as React.LazyExoticComponent<React.ComponentType<ContactMeProps>>;

function App() {
  const [isContactSectionInView, setIsContactSectionInView] =
    useState<boolean>(false);

  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <Suspense fallback={<div>Loading...</div>}>
          <AboutMeSection />
          <MyJourneySection />
          <TechStackSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactMeSection onVisibilityChange={setIsContactSectionInView} />
        </Suspense>
      </main>
      <Footer />
      {!isContactSectionInView && <FloatingBottomNav />}
    </>
  );
}

export default App;
