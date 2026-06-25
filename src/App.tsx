import React from 'react';
import './index.css';
import Header from './components/header';
import HeroSection from './components/hero-section';
import ServicesSection from './components/services-section';
import HowItWorksSection from './components/how-it-works-section';
import DashboardSection from './components/dashboard-section';
import TestimonialsSection from './components/testimonials-section';
import ResultsSection from './components/results-section';
import VideoSection from './components/video-section';
import Footer from './components/footer';
import { BodyStartCodes, BodyEndCodes } from './components/third-party-codes';

function App() {
  return (
    <>
      {/* Códigos no início do body */}
      <BodyStartCodes />
      
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <DashboardSection />
        <TestimonialsSection />
        <ResultsSection />
        <VideoSection />
      </main>
      <Footer />
      
      {/* Códigos no final do body */}
      <BodyEndCodes />
    </>
  );
}

export default App; 