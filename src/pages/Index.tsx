
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Program from '@/components/Program';
import Benefits from '@/components/Benefits';
import Author from '@/components/Author';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = 80; // Approximate header height
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background font-sans"
    >
      <Header />
      <Hero />
      <About />
      <Program />
      <Benefits />
      <Author />
      <FAQ />
      <Pricing />
      <Registration />
      <Footer />
    </motion.div>
  );
};

export default Index;
