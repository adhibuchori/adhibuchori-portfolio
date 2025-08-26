import { useEffect, useState } from "react";
import type { RefObject } from "react";

export function useActiveCard(trackRef: RefObject<HTMLDivElement | null>) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      const cards = Array.from(
        track.querySelectorAll(".testimonial-card")
      ) as HTMLElement[];

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => track.removeEventListener("scroll", handleScroll);
  }, [trackRef]);

  return activeIndex;
}
