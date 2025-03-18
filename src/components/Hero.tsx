
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] blur-[100px] rounded-full opacity-20 bg-neuro-300 top-1/4 -right-1/3" />
        <div className="absolute w-[400px] h-[400px] blur-[120px] rounded-full opacity-10 bg-neuro-400 bottom-1/4 -left-1/4" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
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
                className="text-lg md:text-xl text-neuro-700 mb-8 max-w-2xl text-balance"
              >
                Научные инструменты работы с выгоранием, мышлением, лидерством, повышением эффективности, 
                диагностикой и развитием потенциала человека, основанные на открытиях в нейробиологии и нейроменеджменте.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
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
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="space-y-3"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-neuro-700">Самая глубокая программа обучения профессии "Нейрокоуч"</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-neuro-700">Диплом государственного образца о профессиональной переподготовке</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-neuro-700">Индивидуальное наставничество и поддержка</p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="bg-white/80 backdrop-blur-md border border-neuro-100 rounded-2xl p-6 md:p-8 shadow-sm"
              >
                <p className="text-center text-neuro-900 text-lg md:text-xl font-display font-medium mb-6">
                  Ключевые параметры курса
                </p>
                <div className="grid grid-cols-2 gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
