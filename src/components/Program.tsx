
import { motion } from 'framer-motion';
import { Sparkles, Brain, Users, GraduationCap } from 'lucide-react';

export default function Program() {
  return (
    <section id="program" className="py-20 md:py-28 bg-neuro-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] blur-[120px] rounded-full opacity-10 bg-neuro-400 bottom-0 right-0" />
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
              Программа курса
            </h2>
            <p className="text-lg text-neuro-700 max-w-3xl mx-auto">
              Курс состоит из 3 независимых блоков, каждый из которых направлен на обучение навыкам 
              в определенной области Нейрокоучинга и Нейроменеджмента
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
            >
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-neuro-700" />
                </div>
                <h3 className="text-2xl font-semibold text-neuro-900">
                  Модуль 0 (вводный)
                </h3>
              </div>
              <h4 className="text-xl font-medium text-neuro-800 mb-4">
                Основы нейротехнологий, нейрокоучинга и нейроменеджмента
              </h4>
              <ul className="space-y-3 text-neuro-700 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Введение в когнитивную нейробиологию. Основы работы мозга</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Принципы работы основных неросетей. Основы нейрокоучинга</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Механизмы работы мозга человека, которые важно учитывать при выборе техник</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Компетенции и навыки нейрокоуча</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Чек-лист контроля архитектуры сессии в работе с клиентами или сотрудниками</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
            >
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-neuro-700" />
                </div>
                <h3 className="text-2xl font-semibold text-neuro-900">
                  Ступень 1
                </h3>
              </div>
              <h4 className="text-xl font-medium text-neuro-800 mb-4">
                Диагностика и нейрокоучинг стресса и выгорания. Мотивация и эффективность
              </h4>
              <ul className="space-y-3 text-neuro-700 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Основы нейробиологии выгорания. Особенности проявления эмоционального выгорания</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Биохимия стресса и выгорания, что происходит в организме на каждой стадии</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Нейротехнологии работы с выгоранием и профилактики выгорания</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Методы повышения концентрации внимания. Методы управления вниманием</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Нейротехнологии обучения и эффективной обработки информации</span>
                </li>
              </ul>
              <p className="text-sm text-neuro-600 italic">
                После прохождения модуля вы научитесь глубоко и профессионально работать с самой серьезной проблемой современности — выгоранием, синдроромом хронической усталости и стрессом.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
            >
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-neuro-700" />
                </div>
                <h3 className="text-2xl font-semibold text-neuro-900">
                  Ступень 2
                </h3>
              </div>
              <h4 className="text-xl font-medium text-neuro-800 mb-4">
                Нейроменеджмент системных изменений и развития человека
              </h4>
              <ul className="space-y-3 text-neuro-700 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Нейробиология чувств и эмоций: как они возникают и как влияют на решения</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Нейробиология когнитивных искажений. Модель формирования мышления</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Нейробиология успеха и роста. Как мозг ощущает состояние успеха</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Нейробиология принятия решений: как наш мозг принимает решения</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Нейробиология лидерства. Технологии развития личности лидера</span>
                </li>
              </ul>
              <p className="text-sm text-neuro-600 italic">
                После прохождения модуля вы сможете эффективно работать с любыми запросами клиентов и приводить их к быстрым и прогнозируемым результатам.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
            >
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-neuro-700" />
                </div>
                <h3 className="text-2xl font-semibold text-neuro-900">
                  Ступень 3
                </h3>
              </div>
              <h4 className="text-xl font-medium text-neuro-800 mb-4">
                Диагностика и развитие потенциала человека
              </h4>
              <ul className="space-y-3 text-neuro-700 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Основы нейробиологии потенциала человека</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Методика Тест-диагностики уровня потенциала и когнитивного стиля личности</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Инструменты анализа стоп-факторов для реализации потенциала</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Нейроменеджмент потенциала человека. Методы и техники развития потенциала</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Коммерческий блок "Как реализовывать платную услугу по диагностике"</span>
                </li>
              </ul>
              <p className="text-sm text-neuro-600 italic">
                После прохождения модуля вы сможете проводить уникальную тест-диагностику природного потенциала (стоимость услуги на рынке от 15.000 рублей и выше).
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
