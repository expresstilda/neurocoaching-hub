
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
import CourseOverview from '@/components/CourseOverview';
import WhoIsFor from '@/components/WhoIsFor';
import HowLearningWorks from '@/components/HowLearningWorks';
import ExpandedFAQ from '@/components/FAQ/ExpandedFAQ';

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
      <CourseOverview />
      <About />
      <Program />
      <Benefits />
      <WhoIsFor />
      <HowLearningWorks />
      <Author />
      <section id="expanded-faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-neuro-900 mb-6">
              Ответы на ваши вопросы
            </h2>
          </motion.div>
          <ExpandedFAQ />
        </div>
      </section>
      <Pricing />
      <Registration />
      <Footer />
    </motion.div>
  );
};

export default Index;
