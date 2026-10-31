import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import StackedSection from "./components/StackedSection";
import LogoAnimation from "./components/LogoAnimation";
import { useState, useLayoutEffect } from "react";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useLayoutEffect(() => {
    if (!showIntro) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [showIntro]);

  const handleEnter = () => {
    window.scrollTo(0, 0);
    setShowIntro(false);
  };

  return (
    <>
      <Navbar />

      <StackedSection index={0}>
        <Hero />
      </StackedSection>

      <StackedSection index={1} long>
        <Projects />
      </StackedSection>

      <StackedSection index={2} long>
        <About />
      </StackedSection>

      <StackedSection index={3}>
        <Contact />
      </StackedSection>

      {showIntro && <LogoAnimation onEnter={handleEnter} />}
    </>
  );
}

export default App;
