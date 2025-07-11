import Navbar from "./components/Navbar/Navbar";
import HomeSection from "./sections/Home/Home";
import AboutMeSection from "./sections/AboutMe/AboutMe";
import MyJourneySection from "./sections/MyJourney/MyJourney";
import TechStackSection from "./sections/TechStack/TechStack";
import ProjectsSection from "./sections/Projects/Projects";
import ContactMeSection from "./sections/ContactMe/ContactMe";
import "./styles/App.css";
import TestimonialsSection from "./sections/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutMeSection />
        <MyJourneySection />
        <TechStackSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactMeSection />
      </main>
    </>
  );
}

export default App;
