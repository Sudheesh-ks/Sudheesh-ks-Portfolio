import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add("sk-vis")),
      { threshold: 0.08 }
    );

    document.querySelectorAll(".sk-reveal").forEach(e => io.observe(e));

    return () => io.disconnect();
  }, []);
}