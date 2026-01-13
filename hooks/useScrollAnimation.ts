"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Defer observer setup until after mount - don't block initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only set up observer after component is mounted
    if (!isMounted) return;

    // Use requestIdleCallback for non-critical work
    const setupObserver = () => {
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
    };

    // Defer observer setup to next tick
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(setupObserver, { timeout: 2000 });
    } else {
      setTimeout(setupObserver, 0);
    }

    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [isMounted, options]);

  return { ref, isVisible: isMounted ? isVisible : true }; // Show content immediately
}
