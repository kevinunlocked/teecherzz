"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect existing observer if any
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Use passive observer for better performance
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first trigger for performance
          if (observerRef.current && ref.current) {
            observerRef.current.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: "50px",
        ...options,
      }
    );

    const currentRef = ref.current;
    const currentObserver = observerRef.current;

    if (currentRef && currentObserver) {
      currentObserver.observe(currentRef);
    }

    return () => {
      if (currentObserver && currentRef) {
        currentObserver.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
}
