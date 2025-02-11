"use client"
import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure smooth transitions
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Footer />
        </>
      )}
    </main>
  );
}