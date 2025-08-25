import { testimonials } from "./TestimonialsData";

const TestimonialsItem = () => {
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonials-slider">
      <div className="testimonials-track">
        {loopedTestimonials.map((t, i) => (
          <div className="testimonial-card glass-effect" key={i}>
            <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-role">{t.role}</p>
            <p className="testimonial-text">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsItem;
