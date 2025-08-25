import "./Testimonials.css";
import TestimonialsItem from "./TestimonialsItem";

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header-container">
          <p className="testimonials-subtitle-text">
            What Partners Say about Me
          </p>
          <p className="testimonials-title-text">Happy Partners</p>
          <p className="testimonials-desc-text">
            Don't just take my word for it. See what my partners have to say
            about my work
          </p>
        </div>
        <TestimonialsItem />
      </div>
    </section>
  );
};

export default TestimonialsSection;
