
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | JSX.Element;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => (
  <div className="border-b border-neuro-100 last:border-0">
    <button
      onClick={toggleOpen}
      className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
    >
      <h3 className="text-lg font-medium text-neuro-900">{question}</h3>
      <div className="rounded-full bg-neuro-100 w-8 h-8 flex items-center justify-center flex-shrink-0 ml-4">
        {isOpen ? <Minus size={18} className="text-neuro-700" /> : <Plus size={18} className="text-neuro-700" />}
      </div>
    </button>
    
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
      <div className="text-neuro-700">
        {answer}
      </div>
    </div>
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Как будет строиться обучение?",
      answer: (
        <div className="space-y-3">
          <p>Все обучение проходит только онлайн. Программа выстроена очень бережно и отлично встраивается в вашу занятость. Мы разбили теоретически материал на небольшие видео уроки, чтобы вам легче было его усваивать.</p>
          <p>Доступ к урокам остается навсегда. Уроки выкладываются 2-3 раза в неделю. К части уроков есть домашние задания и дополнительные материалы. В неделю вы тратите 3-4 часа на обучение.</p>
          <p>Группа состоит всего из 10 учеников, чтобы максимально уделить время вашей практической работе и разбору вопросов.</p>
        </div>
      )
    },
    {
      question: "Когда начинается обучение?",
      answer: "Вводный модуль (Модуль 0) начинается 22 марта 2025 года. Он про фундамент профессии и особенности работы с клиентами. Модуль обязательный для всех. Обучение по тематическим модулям начинается 7 апреля."
    },
    {
      question: "Как попасть на обучение?",
      answer: "Попасть можно через небольшое личное собеседование. Мы гарантируем договором и законом высокий уровень образования, но нам важно убедиться, что профессия и сам курс вам подойдут и это не будет для вас тратой времени."
    },
    {
      question: "Если мне не подойдет обучение или я не смогу продолжать?",
      answer: "Так как вы являетесь потребителем образовательной услуги и приобретаете курс официально по договору, вы имеете полное право по закону вернуть деньги за не пройденный период обучения."
    },
    {
      question: "Могу ли я пойти на обучение, если у меня нет опыта в коучинге?",
      answer: "Программа рассчитана на подготовку с нуля. Формат индивидуальной работы позволяет за 9 месяцев сделать из вас серьезного специалиста в области Нейрокоучинга и вы гарантировано сможете успешно практиковать."
    },
    {
      question: "С какими клиентами я смогу работать после обучения?",
      answer: "У вас будет широкий спектр возможностей: индивидуальный коучинг и консультирование, тренерство команд по вопросам повышения мотивации, лидерства, консультирование руководителей бизнеса и т.д."
    },
    {
      question: "Чем ваша программа отличается от других обучений в этой сфере?",
      answer: (
        <div className="space-y-3">
          <p>Мы единственные, кто преподает нейрокоучинг и нейроменеджмент. Обычно Нейрокоучинг совмещают с нейропсихологией, но она мало применима к бизнесу. Мы же сделали абсолютно прикладную программу для самых актуальных запросов во всех сферах.</p>
          <p>У нас больше часов и больше практических методик. Мы единственные, кто дает так много информации о биохимии, физиологии и потенциале человека, диагностике его уровня и способах системной реализации.</p>
          <p>Мы вторые на рынке, кто дает Диплом государственного образца о профессиональной переподготовке. Это официальный документ с индивидуальным реестровым номером, подтверждающий вашу профессию и специализацию.</p>
        </div>
      )
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-neuro-900 mb-6">
              Ответы на ваши важные вопросы
            </h2>
            <p className="text-lg text-neuro-700 max-w-2xl mx-auto">
              Мы собрали наиболее частые вопросы о программе обучения и подготовили на них подробные ответы
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-neuro-100 divide-y divide-neuro-100"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
