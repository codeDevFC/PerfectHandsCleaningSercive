import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CallBar from './components/layout/CallBar';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import CoverageSection from './components/sections/CoverageSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'a' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.body.addEventListener('click', handleAnchorClick);
    return () => document.body.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <CallBar />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CoverageSection />
        <ContactSection />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
