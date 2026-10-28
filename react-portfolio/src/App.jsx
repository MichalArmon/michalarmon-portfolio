import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import StackedSection from "./components/StackedSection";
import LogoAnimation from "./components/LogoAnimation";
import { useState } from "react";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Navbar />

      <StackedSection index={0}>
        <Hero />
      </StackedSection>

      <StackedSection index={1}>
        <Projects />
      </StackedSection>

      <StackedSection index={2} long>
        <About />
      </StackedSection>

      <StackedSection index={3}>
        <Contact />
      </StackedSection>

      {showIntro && <LogoAnimation onEnter={() => setShowIntro(false)} />}
    </>
  );
}

export default App;
