
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

export default function WhoIsFor() {
  const suitable = [
    "Действующим коучам и психологам",
    "Специалистам в области рекрутинга и управления персоналом (HR, HRD, HRBP, T&D), карьерным консультантам, профориентологам",
    "Специалистам, которые имеют опыт работы с людьми и хотят получить новую профессию",
    "Управленцам команд и бизнеса",
    "Бизнес-тренерам, наставникам, трекерам, менторам, фасилитаторам, SCRUM мастерам, AGILE тренерам"
  ];
  
  const notSuitable = [
    "Если вы не готовы к активной практике, на курсе делать будет нечего",
    "Вам будет сложно, если у вас нет цели работать с людьми"
  ];

  return (
    <section id="who-is-for" className="py-16 bg-neuro-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-neuro-900 mb-6">
              Кому подходит этот курс
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-neuro-100 p-6"
            >
              <h3 className="text-xl font-semibold text-neuro-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </span>
                Курс подходит вам, если вы:
              </h3>
              <ul className="space-y-3">
                {suitable.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-neuro-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-neuro-100 p-6"
            >
              <h3 className="text-xl font-semibold text-neuro-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <XCircle className="w-5 h-5 text-red-600" />
                </span>
                Курс НЕ подходит вам, если:
              </h3>
              <ul className="space-y-3">
                {notSuitable.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-neuro-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-neuro-50 rounded-lg border border-neuro-100">
                <p className="text-neuro-700 italic">
                  Если вы хотите пройти курс для себя, для этого у нас есть специальная программа "Пульт управления мозгом"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
