
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-neuro-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-10 pb-10 border-b border-neuro-700">
            <div className="mb-8 md:mb-0">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Нейрокоучинг
              </h3>
              <p className="text-neuro-300 max-w-xs">
                Самая глубокая и объемная программа обучения профессии "Нейрокоуч" с выдачей диплома государственного образца
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Разделы</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-neuro-300 hover:text-white transition-colors">О курсе</a>
                  </li>
                  <li>
                    <a href="#program" className="text-neuro-300 hover:text-white transition-colors">Программа</a>
                  </li>
                  <li>
                    <a href="#benefits" className="text-neuro-300 hover:text-white transition-colors">Преимущества</a>
                  </li>
                  <li>
                    <a href="#author" className="text-neuro-300 hover:text-white transition-colors">Об авторе</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Информация</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#faq" className="text-neuro-300 hover:text-white transition-colors">Вопросы и ответы</a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-neuro-300 hover:text-white transition-colors">Тарифы</a>
                  </li>
                  <li>
                    <a href="#registration" className="text-neuro-300 hover:text-white transition-colors">Запись на собеседование</a>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-lg font-medium mb-4">Контакты</h4>
                <ul className="space-y-2">
                  <li className="text-neuro-300">
                    Email: info@neurocoaching.ru
                  </li>
                  <li className="text-neuro-300">
                    Телефон: +7 (999) 123-45-67
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-neuro-400 text-sm mb-4 md:mb-0">
              © 2025 Академия Нейрокоучинга и Нейроменеджмента. Все права защищены.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center text-neuro-300 hover:text-white transition-colors"
            >
              Наверх
              <ArrowUp size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
