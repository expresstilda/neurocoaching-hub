
import { motion } from 'framer-motion';

export default function Author() {
  return (
    <section id="author" className="py-20 md:py-28 bg-neuro-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] blur-[100px] rounded-full opacity-10 bg-neuro-300 top-0 left-0" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-neuro-900 mb-6">
              Об авторе курса
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-neuro-100 overflow-hidden flex flex-col lg:flex-row"
          >
            <div className="lg:w-2/5 h-[300px] lg:h-auto bg-neuro-200 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neuro-400/20 to-neuro-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <p className="text-neuro-700 italic font-medium text-lg">
                  Здесь будет фотография автора курса Владлены Ливенской
                </p>
              </div>
            </div>
            
            <div className="lg:w-3/5 p-8">
              <h3 className="text-2xl font-semibold text-neuro-900 mb-2">
                Владлена Ливенская
              </h3>
              <p className="text-neuro-600 mb-6">
                Основатель Академии Нейрокоучинга и Нейроменеджмента
              </p>
              
              <ul className="space-y-3 text-neuro-700 mb-8">
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Практикующий Нейрокоуч, Специалист по Нейробиологии поведения</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Эксперт федеральных телеканалов (Первый канал, НТВ)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Спикер Сколково</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>15 лет опыта в российских и международных компаниях в роли директора по развитию, коммерческого директора, генерального директора</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Бизнес-тренер/Педагог в сфере лидерства, нейроменеджмента, повышения личной и командной эффективности</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-neuro-500">•</span>
                  <span>Автор тест-диагностики природного потенциала личности, основанной на научных данных</span>
                </li>
              </ul>
              
              <div className="bg-neuro-50 p-4 rounded-lg border border-neuro-100">
                <p className="text-neuro-700 italic">
                  "Понимание того, как на самом деле работает наш мозг и как он принимает решения, дает нам в руки многофункциональный пульт управления собственной жизнью."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-neuro-100"
          >
            <blockquote>
              <p className="text-neuro-800 text-lg mb-6 italic">
                "Мы становимся «нейрокапиталистическим» миром. Потребности общества, ориентированного на результат, расширяют потребности в качественно новых специалистах, которые смогут использовать свет нейронауки на благо социума"
              </p>
              <footer className="text-neuro-600">
                — Том Кунц
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
