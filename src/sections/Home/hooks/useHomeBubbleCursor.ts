import { useEffect, useRef, useState } from "react";
import { bubbles } from "../Bubbles/bubbles";

export function useHomeBubbleCursor() {
  const cursorRef = useRef<HTMLImageElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bubbles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const target = bubbles[currentIndex];
    if (!cursor) return;

    const targetEl = document.querySelector(
      `.home-bubble-wrapper.${target.className}`
    ) as HTMLElement;

    document
      .querySelectorAll(".home-bubble-wrapper")
      .forEach((el) => el.classList.remove("hovered"));

    cursor.style.top = `calc(${target.top ?? "0px"} + 36px)`;

    const bubbleWidth = targetEl?.offsetWidth ?? 0;
    const containerWidth = targetEl?.offsetParent?.clientWidth ?? 0;

    let absoluteLeft = 0;

    if (target.left !== undefined) {
      absoluteLeft = parseInt(target.left ?? "0") + bubbleWidth - 20;
    } else if (target.right !== undefined) {
      const right = parseInt(target.right ?? "0");
      absoluteLeft = containerWidth - right - bubbleWidth + 20;
    }

    cursor.style.left = `${absoluteLeft}px`;
    cursor.style.transform = "translateX(-50%)";
    cursor.style.right = "";

    const handleTransitionEnd = () => {
      if (!cursor || !targetEl) return;

      const cursorRect = cursor.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      const isOverlapping =
        cursorRect.left < targetRect.right &&
        cursorRect.right > targetRect.left &&
        cursorRect.top < targetRect.bottom &&
        cursorRect.bottom > targetRect.top;

      if (isOverlapping) {
        targetEl.classList.add("hovered");
      }

      cursor.removeEventListener("transitionend", handleTransitionEnd);
    };

    cursor.addEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex]);

  return { cursorRef, bubbles };
}
