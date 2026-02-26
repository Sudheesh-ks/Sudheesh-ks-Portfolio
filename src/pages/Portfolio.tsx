import { useRef, useState } from "react";
import "../index.css";
import { useCursor } from "../hooks/useCursor";
import { useReveal } from "../hooks/useReveal";
import Cursor from "../components/ui/Cursor";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Process from "../components/sections/Process";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);

  useCursor(cursorRef, ringRef);
  useReveal();

  return (
    <div className={`sk-root ${isDark ? "sk-dark" : "sk-light"}`}>
      <Cursor cursorRef={cursorRef} ringRef={ringRef} />
      <Navbar isDark={isDark} toggle={() => setIsDark(v => !v)} />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}