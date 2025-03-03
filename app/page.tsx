"use client"
import About from '@/components/About';
import Achievements from '@/components/Achievements';
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

    const cards = document.getElementsByClassName('group');
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = (e.currentTarget as HTMLElement);
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    Array.from(cards).forEach(card => {
      card.addEventListener('mousemove', handleMouseMove as EventListener );
    });

    return () => {
      clearTimeout(timer);
      Array.from(cards).forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener);
      });
    };
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
          <Achievements />
          <Footer />
        </>
      )}
    </main>
  );
}