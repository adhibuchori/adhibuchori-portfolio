import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeSection from "./sections/Home/Home";
import "./styles/App.css";
import Footer from "./components/Footer/Footer";
import FloatingBottomNav from "./components/FloatingBottomNav/FloatingBottomNav";

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
);

function App() {
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
          <ContactMeSection />
        </Suspense>
      </main>
      <Footer />
      <FloatingBottomNav />
    </>
  );
}

export default App;
