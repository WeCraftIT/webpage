import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) return;

    // Initialize Lenis smooth scroll only after intro completes
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      
      {!showIntro && (
        <div className="relative min-h-screen bg-[#050816] text-[#F8FAFC] selection:bg-[#2563EB]/30 selection:text-white antialiased animate-[fade-up_0.8s_ease-out_forwards]">
          {/* Noise Overlay */}
          <div className="noise-overlay" />

          {/* Navbar */}
          <Navbar />

          {/* Main Layout Content with generous padding for a premium, spacious layout */}
          <main className="relative flex flex-col w-full gap-24 md:gap-36">
            <Hero />
            <Services />
            <Process />
            <WhyChooseUs />
            <About />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

