import { useEffect, useState } from "react";

export const useInView = (ref, options = {}) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1, ...options },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
};
