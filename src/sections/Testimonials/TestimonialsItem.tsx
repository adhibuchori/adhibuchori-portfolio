import { useRef } from "react";
import { testimonials } from "./TestimonialsData";
import { useActiveCard } from "./useActiveCard";

const TestimonialsItem = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const activeIndex = useActiveCard(trackRef);

  return (
    <div className="testimonials-slider">
      <div className="testimonials-track" ref={trackRef}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`testimonial-card glass-effect ${
              i === activeIndex ? "active" : ""
            }`}
          >
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
