import Navbar from "./components/Navbar/Navbar";
import HomeSection from "./sections/Home/Home";
import AboutMeSection from "./sections/AboutMe/AboutMe";
import MyJourneySection from "./sections/MyJourney/MyJourney";
import TechStackSection from "./sections/TechStack/TechStack";
import ProjectsSection from "./sections/Projects/Projects";
import TestimonialsSection from "./sections/Testimonials/Testimonials";
import ContactMeSection from "./sections/ContactMe/ContactMe";
import "./styles/App.css";
import Footer from "./components/Footer/Footer";
import FloatingBottomNav from "./components/FloatingBottomNav/FloatingBottomNav";

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
      <Footer />
      <FloatingBottomNav />
    </>
  );
}

export default App;
