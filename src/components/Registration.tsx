
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Registration() {
  return (
    <section id="registration" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] blur-[100px] rounded-full opacity-10 bg-neuro-300 bottom-0 left-0" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-neuro-100 text-neuro-800 text-xs font-medium mb-5">
              СТАРТ ДЕВЯТОГО ПОТОКА 22 МАРТА 2025
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-neuro-900 mb-6">
              Запись на собеседование
            </h2>
            <p className="text-lg text-neuro-700 max-w-3xl mx-auto">
              На обучение принимаем при успешном прохождении собеседования
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-neuro-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <form>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neuro-900 mb-1">
                        Имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-neuro-200 focus:ring-2 focus:ring-neuro-500 focus:border-neuro-500 outline-none transition-all"
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neuro-900 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-neuro-200 focus:ring-2 focus:ring-neuro-500 focus:border-neuro-500 outline-none transition-all"
                        placeholder="Введите ваш email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neuro-900 mb-1">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-neuro-200 focus:ring-2 focus:ring-neuro-500 focus:border-neuro-500 outline-none transition-all"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-neuro-900 mb-1">
                        Опыт в коучинге/психологии
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        className="w-full px-4 py-3 rounded-lg border border-neuro-200 focus:ring-2 focus:ring-neuro-500 focus:border-neuro-500 outline-none transition-all"
                        required
                      >
                        <option value="">Выберите из списка</option>
                        <option value="no-experience">Нет опыта</option>
                        <option value="less-than-year">Менее 1 года</option>
                        <option value="1-3-years">1-3 года</option>
                        <option value="3-5-years">3-5 лет</option>
                        <option value="more-than-5">Более 5 лет</option>
                      </select>
                    </div>
                    
                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 bg-neuro-800 hover:bg-neuro-700 text-white font-medium rounded-xl shadow-sm transition-all hover:shadow-md text-center flex items-center justify-center"
                      >
                        Записаться на собеседование
                        <ArrowRight size={18} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="bg-neuro-50 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-neuro-900 mb-4">
                  Что вас ждет на собеседовании:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="rounded-full bg-neuro-200 w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-neuro-700 text-sm font-medium">1</span>
                    </div>
                    <span className="text-neuro-700">Знакомство с вашим опытом и целями обучения</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-neuro-200 w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-neuro-700 text-sm font-medium">2</span>
                    </div>
                    <span className="text-neuro-700">Ответы на все ваши вопросы о программе</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-neuro-200 w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-neuro-700 text-sm font-medium">3</span>
                    </div>
                    <span className="text-neuro-700">Проверка совместимости ваших ожиданий с программой</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-neuro-200 w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-neuro-700 text-sm font-medium">4</span>
                    </div>
                    <span className="text-neuro-700">Подбор оптимального тарифа и формы оплаты</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-white rounded-lg border border-neuro-100">
                  <p className="text-neuro-700 text-sm">
                    Собеседование проходит онлайн и занимает около 30 минут. После успешного прохождения вы получите доступ к оформлению договора и оплате курса.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
