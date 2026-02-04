import React from 'react';

// Import all modular components from your screenshot
import Hero from '../Components/home/Hero';
import CoreSection from '../Components/home/CoreSection';
import WhyItMatters from '../Components/home/WhyItMatters';
import Perspective from '../Components/home/Prespective'; // Matches your screenshot typo
import WorkServices from '../Components/home/WorkServices';
import Culture from '../Components/home/Culture';
import ContactForm from '../Components/home/ContactForm';

// Optional: Layout components if you have them in the layout folder
// import Navbar from '../Components/layout/Navbar';
// import Footer from '../Components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      
      <main>
        {/* 1. Hero / Tagline [cite: 1] */}
        <Hero />
        
        {/* 2. Our Core [cite: 26, 29] */}
        <CoreSection />
        
        {/* 3. Why this matters [cite: 32, 47] */}
        <WhyItMatters />
        
        {/* 4. Our perspective [cite: 55, 57] */}
        <Perspective />
        
        {/* 5. Work / Services [cite: 68, 92] */}
        <WorkServices />
        
        {/* 5.1 Our culture [cite: 101, 105] */}
        <Culture />
        
        {/* 7. Close with a calm invitation [cite: 108, 110] */}
        <ContactForm />
      </main>

      {/* <Footer /> */}
    </div>
  );
}