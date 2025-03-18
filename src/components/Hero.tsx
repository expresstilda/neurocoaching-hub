
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 hero-gradient flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] blur-[100px] rounded-full opacity-20 bg-neuro-300 top-1/4 -right-1/3" />
        <div className="absolute w-[400px] h-[400px] blur-[120px] rounded-full opacity-10 bg-neuro-400 bottom-1/4 -left-1/4" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-neuro-100 text-neuro-800 text-xs font-medium mb-5">
              СТАРТ ДЕВЯТОГО ПОТОКА 22 МАРТА 2025
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-tight lg:leading-tight mb-6 text-neuro-950"
          >
            Курс-практикум <br className="hidden sm:block" />
            <span className="text-neuro-700">"Нейрокоучинг и Нейроменеджмент"</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-neuro-700 mb-8 max-w-3xl mx-auto text-balance"
          >
            Научные инструменты работы с выгоранием, мышлением, лидерством, повышением эффективности, 
            диагностикой и развитием потенциала человека, основанные на открытиях в нейробиологии и нейроменеджменте.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#registration" 
              className="py-3.5 px-6 bg-neuro-800 hover:bg-neuro-700 text-white font-medium rounded-xl shadow-sm transition-all hover:shadow-md text-center flex items-center justify-center"
            >
              Записаться на собеседование
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#program" 
              className="py-3.5 px-6 bg-white hover:bg-neuro-50 border border-neuro-200 text-neuro-800 font-medium rounded-xl shadow-sm transition-all hover:shadow-md text-center"
            >
              Узнать программу
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 md:mt-24 bg-white/80 backdrop-blur-md border border-neuro-100 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm"
        >
          <p className="text-center text-neuro-900 text-lg md:text-xl font-display font-medium mb-6">
            Самая глубокая и объемная программа обучения профессии "Нейрокоуч"
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-neuro-100 flex items-center justify-center mb-3">
                <span className="text-neuro-800 font-semibold text-xl">560</span>
              </div>
              <p className="text-neuro-700 text-sm">Часов обучения</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-neuro-100 flex items-center justify-center mb-3">
                <span className="text-neuro-800 font-semibold text-xl">9</span>
              </div>
              <p className="text-neuro-700 text-sm">Месяцев практики</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-neuro-100 flex items-center justify-center mb-3">
                <span className="text-neuro-800 font-semibold text-xl">3</span>
              </div>
              <p className="text-neuro-700 text-sm">Ступени обучения</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-neuro-100 flex items-center justify-center mb-3">
                <span className="text-neuro-800 font-semibold text-xl">10</span>
              </div>
              <p className="text-neuro-700 text-sm">Учеников в группе</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-neuro-600 text-sm mb-2">Узнать больше</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuro-600"/>
          <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuro-600"/>
        </svg>
      </div>
    </section>
  );
}
