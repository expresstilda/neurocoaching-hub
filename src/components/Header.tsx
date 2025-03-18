
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'О курсе', href: '#about' },
  { label: 'Программа', href: '#program' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Об авторе', href: '#author' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Тарифы', href: '#pricing' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
        isScrolled 
          ? "py-3 bg-white/80 border-gray-200/50 shadow-sm" 
          : "py-5 bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="font-display text-xl md:text-2xl font-semibold text-neuro-900">
            Нейрокоучинг
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-neuro-700 hover:text-neuro-900 font-medium text-sm transition-colors relative group"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-neuro-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Registration Button */}
        <div className="hidden md:block">
          <a
            href="#registration"
            className="py-2.5 px-5 bg-neuro-800 text-white rounded-lg font-medium text-sm shadow-sm hover:bg-neuro-700 transition-colors"
          >
            Записаться
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neuro-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 text-neuro-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#registration"
                className="py-3 px-5 bg-neuro-800 text-white rounded-lg font-medium text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Записаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
