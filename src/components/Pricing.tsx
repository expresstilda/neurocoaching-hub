
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-neuro-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] blur-[100px] rounded-full opacity-10 bg-neuro-400 top-0 right-0" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-neuro-900 mb-6">
              Тарифы, способы оплаты
            </h2>
            <p className="text-lg text-neuro-700 max-w-3xl mx-auto">
              Курс состоит из трех полноценных независимых блоков
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-neuro-100 p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-neuro-800 text-white py-1 px-4 text-sm font-medium rounded-bl-lg">
                Рекомендуем
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-neuro-900 mb-2">
                    Полный курс
                  </h3>
                  <p className="text-neuro-700 mb-4">
                    Включает все три ступени и диплом государственного образца
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-neuro-700" />
                      </div>
                      <span className="text-neuro-700">560 часов обучения</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-neuro-700" />
                      </div>
                      <span className="text-neuro-700">9 месяцев практики</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-neuro-700" />
                      </div>
                      <span className="text-neuro-700">Диплом государственного образца</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-neuro-700" />
                      </div>
                      <span className="text-neuro-700">Личное наставничество</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-sm text-neuro-600 mb-1">Стоимость со скидкой при единоразовой оплате</div>
                  <div className="text-3xl font-bold text-neuro-900 mb-4">260 000 ₽</div>
                  <div className="text-sm text-neuro-500 line-through mb-4">280 000 ₽</div>
                  <a 
                    href="#registration" 
                    className="inline-block py-3 px-6 bg-neuro-800 hover:bg-neuro-700 text-white font-medium rounded-xl shadow-sm transition-all hover:shadow-md text-center"
                  >
                    Записаться на собеседование
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm border border-neuro-100 p-6"
            >
              <h3 className="text-xl font-semibold text-neuro-900 mb-2">
                Ступень 1
              </h3>
              <p className="text-neuro-700 text-sm mb-4 h-12">
                Диагностика стресса и выгорания
              </p>
              <div className="text-2xl font-bold text-neuro-900 mb-4">90 000 ₽</div>
              <ul className="space-y-2 mb-6 min-h-[120px]">
                <li className="flex items-start">
                  <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-neuro-700" />
                  </div>
                  <span className="text-neuro-700 text-sm">Сертификат о прохождении</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-neuro-700" />
                  </div>
                  <span className="text-neuro-700 text-sm">Практика работы с выгоранием</span>
                </li>
              </ul>
              <a 
                href="#registration" 
                className="block w-full py-2.5 px-4 border border-neuro-800 text-neuro-800 hover:bg-neuro-50 font-medium rounded-xl text-center transition-all"
              >
                Подробнее
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-neuro-100 p-6"
            >
              <h3 className="text-xl font-semibold text-neuro-900 mb-2">
                Ступень 2
              </h3>
              <p className="text-neuro-700 text-sm mb-4 h-12">
                Нейроменеджмент системных изменений
              </p>
              <div className="text-2xl font-bold text-neuro-900 mb-4">90 000 ₽</div>
              <ul className="space-y-2 mb-6 min-h-[120px]">
                <li className="flex items-start">
                  <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-neuro-700" />
                  </div>
                  <span className="text-neuro-700 text-sm">Сертификат о прохождении</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-neuro-700" />
                  </div>
                  <span className="text-neuro-700 text-sm">Работа с эмоциями и принятием решений</span>
                </li>
              </ul>
              <a 
                href="#registration" 
                className="block w-full py-2.5 px-4 border border-neuro-800 text-neuro-800 hover:bg-neuro-50 font-medium rounded-xl text-center transition-all"
              >
                Подробнее
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-neuro-100 p-6"
            >
              <h3 className="text-xl font-semibold text-neuro-900 mb-2">
                Ступень 3
              </h3>
              <p className="text-neuro-700 text-sm mb-4 h-12">
                Диагностика и развитие потенциала
              </p>
              <div className="text-2xl font-bold text-neuro-900 mb-4">140 000 ₽</div>
              <ul className="space-y-2 mb-6 min-h-[120px]">
                <li className="flex items-start">
                  <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-neuro-700" />
                  </div>
                  <span className="text-neuro-700 text-sm">Сертификат о прохождении</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-neuro-700" />
                  </div>
                  <span className="text-neuro-700 text-sm">Уникальная тест-диагностика потенциала</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-neuro-100 p-1 mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-neuro-700" />
                  </div>
                  <span className="text-neuro-700 text-sm">Коммерческий блок</span>
                </li>
              </ul>
              <a 
                href="#registration" 
                className="block w-full py-2.5 px-4 border border-neuro-800 text-neuro-800 hover:bg-neuro-50 font-medium rounded-xl text-center transition-all"
              >
                Подробнее
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-neuro-100 p-8"
          >
            <h3 className="text-xl font-semibold text-neuro-900 mb-6">
              Способы оплаты:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-neuro-50 rounded-xl border border-neuro-100">
                <h4 className="font-medium text-lg text-neuro-900 mb-2">Оплата по договору</h4>
                <p className="text-neuro-700 text-sm">
                  Оплата картой на расчетный счет. Скидка за единоразовую оплату всего курса 20.000 ₽
                </p>
              </div>
              
              <div className="p-5 bg-neuro-50 rounded-xl border border-neuro-100">
                <h4 className="font-medium text-lg text-neuro-900 mb-2">Оплата от организации</h4>
                <p className="text-neuro-700 text-sm">
                  Оплата по счету от организации с предоставлением всех необходимых документов
                </p>
              </div>
              
              <div className="p-5 bg-neuro-50 rounded-xl border border-neuro-100">
                <h4 className="font-medium text-lg text-neuro-900 mb-2">Банковская рассрочка</h4>
                <p className="text-neuro-700 text-sm">
                  Рассрочка на 12 и 24 месяца без переплаты для граждан РФ, Белоруси и Казахстана
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
