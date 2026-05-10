/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofGallery from './components/ProofGallery';
import MeetOwner from './components/MeetOwner';
import WhyChooseUs from './components/WhyChooseUs';
import Education from './components/Education';
import Pricing from './components/Pricing';
import QuoteForm from './components/QuoteForm';
import ReviewWidget from './components/ReviewWidget';
import Footer from './components/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1128] font-sans text-stone-300 selection:bg-amber-500/30 selection:text-amber-100">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="results" className="py-16 md:py-24">
          <ProofGallery />
        </section>

        <section id="about" className="py-16 md:py-24">
          <MeetOwner />
        </section>

        <section id="why-choose-us" className="py-16 md:py-24">
          <WhyChooseUs />
        </section>

        <section id="education" className="py-16 md:py-24">
          <Education />
        </section>

        <section id="pricing" className="py-16 md:py-24">
          <Pricing />
        </section>

        <section id="quote" className="py-16 md:py-24 pb-32">
          <QuoteForm />
        </section>
      </main>

      <ReviewWidget />
      <Footer />
    </div>
  );
}
