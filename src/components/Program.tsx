
import { motion } from 'framer-motion';
import { Sparkles, Brain, Users, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Program() {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

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
            <Accordion type="single" collapsible className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
              >
                <AccordionItem value="module-0" className="border-none">
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
                  <div className="mb-6">
                    <ul className="space-y-3 text-neuro-700">
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
                  </div>
                  
                  <AccordionTrigger className="py-0">
                    <span className="text-neuro-600 text-sm font-medium">Подробнее о модуле</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="space-y-3 text-neuro-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Как строится работа с клиентом или сотрудником при нейрокоучинговом подходе</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Основные невидимые ошибки в работе коучей, которые влияют на результаты работы с клиентом или сотрудником</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Что такое нейроменеджмент, как он повышает эффективность работы и мотивацию сотрудников</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Как внедрять нейроменеджмент в практику управления персоналом</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Инструменты нейрокоучингового консультирования</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Вводная информация о порядке прохождения курса, практических отработках и выпускных заданий, необходимых для получения Диплома о профессиональной переподготовке по профессии Нейрокоуч</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
              >
                <AccordionItem value="module-1" className="border-none">
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
                  <div className="mb-6">
                    <ul className="space-y-3 text-neuro-700">
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
                  </div>

                  <AccordionTrigger className="py-0">
                    <span className="text-neuro-600 text-sm font-medium">Подробнее о модуле</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="space-y-3 text-neuro-700 mb-6">
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Особенности проявления эмоционального выгорания и выгорания скуки. Стадии выгорания и их симптомы</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейрофизиология стресса. Типы стресса, особенности работы мозга и когнитивные проявления при разных уровнях стресса</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Клинический разбор признаков депрессии, когда надо направить к психотерапевту</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии повышения и удержания мотивации. Система грамотного планирования нагрузок мозга и расстановки приоритетов</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Принцип доминанты. Методы работы с целями на каждой стадии выгорания</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Изучение работы механизмов сна и бодорствования. Методы регуляции основных нейротрансмиттеров для повышения мотивации и эффективности</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии адаптации и толерантности к изменениям. Техники когнитивной гибкости и нейропластичности</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейроменеджмент выгорания и повышения эффективности. Нейротехнологии повышения групповой эффективности</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Эффект SYNC и работа зеркальных нейронов. Техники повышения мотивации команды</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Превентивные методы повышения уровня качества жизни</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Практика работы с выгоранием и повышением эффективности на клиентах</span>
                      </li>
                    </ul>
                    <p className="text-sm text-neuro-600 italic">
                      После прохождения модуля вы научитесь глубоко и профессионально работать с самой серьезной проблемой современности — выгоранием, синдроромом хронической усталости и стрессом. ВОЗ официально признал выгорание проблемой 21 века и внес его в свой обновленный реестр. Этот модуль даст вам передовые технологии повышения личной и командной эффективности, научные методы управления стрессом и энергией.
                    </p>
                    <p className="text-sm text-neuro-600 italic mt-2">
                      Профессиональный навык работы с выгоранием сегодня является самым востребованным для специалистов помогающих профессий. Спрос на эти услуги значительно превышает наличие по-настоящему сильных экспертов, которые гарантировано могут помочь быстро выйти из сложного состояния и вернуть яркость жизни.
                    </p>
                    <p className="text-sm text-neuro-600 font-medium mt-4">
                      Важно: Нейротехнологии НЕ ЗАМЕНЯЮТ клиническую терапию и не применяются в работе с клинической депрессией и психическими расстройствами личности.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
              >
                <AccordionItem value="module-2" className="border-none">
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
                  <div className="mb-6">
                    <ul className="space-y-3 text-neuro-700">
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
                  </div>

                  <AccordionTrigger className="py-0">
                    <span className="text-neuro-600 text-sm font-medium">Подробнее о модуле</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="space-y-3 text-neuro-700 mb-6">
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии работы со стыдом, виной, обидами, страхами, тревожностью, счастьем, чувством уверенности в себе, чувством безопасности и другими важными эмоциями</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Роль префронтальной коры в координации эмоций</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Модель SEED. Нейросмыслы. Конформизм. Техники нейрокогнитивного контроля</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейробиология личности. Мозг и личные границы. Как мы формируем ощущение себя в этом мире</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Как работать с запросом "хочу найти себя" и что это на самом деле значит</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейробиология сознания. Как выводить мозг на новый уровень мышления</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии работы с целями. Нейротехнологии работы с синдромом самозванца</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Эффективные методы формирования привычек и новых навыков во взрослом возрасте</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Модель самосовершенствования мозга</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Модель SCARF. Нейротехнологии развития креативного мышления</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии развития стратегического мышления. Нейротехнологии принятия карьерных решений</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии развития критического мышления</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейробиология денег. Как наш мозг принимает финансовые решения. Нейрокоучинг финансовых запросов</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейробиология социального взаимодействия. Эмпатия, как способ эффективной коммуникации</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии решения конфликтов. Нейротехнологии влияния и убеждения</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии социального впечатления и формирования имиджа. Нейротехнологии формирования социального капитала</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии эффективного управления группой. Система управления, мотивации и повышения групповой продуктивности</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Система постановки и достижения целей в группах. Ключевые ошибки в работе с командой</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Практика с клиентами</span>
                      </li>
                    </ul>
                    <p className="text-sm text-neuro-600 italic">
                      После прохождения модуля вы сможете эффективно работать с любыми запросами клиентов и приводить их к быстрым и прогнозируемым результатам. Модуль детально раскрывает основные паттерны работы мозга при возникновении ключевых проблем, мешающих развитию во всех сферах жизни. Вы сможете не давать временные решения, а устранять суть любой проблемы, что гарантировано обеспечит выполнение всех клиентских задач как в индивидуальной, так и в групповой работе.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
              >
                <AccordionItem value="module-3" className="border-none">
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
                  <div className="mb-6">
                    <ul className="space-y-3 text-neuro-700">
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
                  </div>

                  <AccordionTrigger className="py-0">
                    <span className="text-neuro-600 text-sm font-medium">Подробнее о модуле</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="space-y-3 text-neuro-700 mb-6">
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Критерии оценки уровня природного потенциала</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Инструменты анализа и программирования жизненных целей</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Методы анализа метанавыков, необходимых для развития потенциала</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Нейротехнологии коучинга в сфере развития потенциала человека</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Технологии формирования трансформационной стратегии и системы ментальных конструкций для успешного развития потенциала личности</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Ключевые ошибки в диагностике и коучинге в области потенциала человека</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Методы и техники развития потенциала в рабочей среде. Модель SEED</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Практическая отработка Диагностики потенциала, диагностики метанавыков и построения стратегии развития потенциала</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-neuro-500">•</span>
                        <span>Шаблоны продаж для социальных сетей и оффлайн переговоров</span>
                      </li>
                    </ul>
                    <p className="text-sm text-neuro-600 italic">
                      После прохождения модуля вы сможете проводить уникальную тест-диагностику природного потенциала (стоимость услуги на рынке от 15.000 рублей и выше), выявлять слепые зоны, мешающие человеку достигать своих целей в развитии. Вы освоите нейрокоучинговую систему формирования трансформационной стратегии развития потенциала и сможете показывать клиентам или сотрудникам самые эффективные пути их карьерного и личностного роста.
                    </p>
                    <p className="text-sm text-neuro-600 italic mt-2">
                      Если вы работаете с персоналом в корпоративной среде, методика диагностики потенциала и метанавыков поможет вам понять, подходит ли сотрудник под определенные бизнес-задачи, как он вольется в корпоративную культуру и как проявит себя в командной работе.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
