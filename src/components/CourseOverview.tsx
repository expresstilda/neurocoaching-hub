
import { motion } from 'framer-motion';
import { CheckCircle, Clock, BookOpen, Award, Users } from 'lucide-react';

export default function CourseOverview() {
  return (
    <section className="py-16 bg-white" id="overview">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-neuro-900 mb-6">
                О курсе
              </h2>
              <p className="text-lg text-neuro-700 mb-6">
                Фундаментальная образовательная программа, включающая 
                концепции, исследования и практические методики из когнитивной 
                нейробиологии, нейроэкономики и нейроменеджмента.
              </p>
              <p className="text-lg text-neuro-700">
                Курс полностью прикладной и включает в себя новейшие исследования 
                и практики. Мы тщательно отобрали самые популярные запросы клиентов 
                и выстроили под них систему обучения.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-neuro-50 border border-neuro-100 shadow-sm p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-neuro-100 shadow-sm">
                  <Clock className="w-8 h-8 text-neuro-700 mb-2" />
                  <p className="text-neuro-900 font-semibold text-xl mb-1">560</p>
                  <p className="text-neuro-600 text-sm">Часов обучения</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-neuro-100 shadow-sm">
                  <BookOpen className="w-8 h-8 text-neuro-700 mb-2" />
                  <p className="text-neuro-900 font-semibold text-xl mb-1">9</p>
                  <p className="text-neuro-600 text-sm">Месяцев практики</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-neuro-100 shadow-sm">
                  <Award className="w-8 h-8 text-neuro-700 mb-2" />
                  <p className="text-neuro-900 font-semibold text-xl mb-1">3</p>
                  <p className="text-neuro-600 text-sm">Ступени обучения</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-neuro-100 shadow-sm">
                  <Users className="w-8 h-8 text-neuro-700 mb-2" />
                  <p className="text-neuro-900 font-semibold text-xl mb-1">10</p>
                  <p className="text-neuro-600 text-sm">Учеников в группе</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-neuro-700">Индивидуальное наставничество на протяжении всего обучения</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-neuro-700">Пожизненный доступ к материалам курса</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-neuro-700">Диплом государственного образца (лицензия Л035-01218-23/00645360)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-neuro-700">Доступ в закрытое сообщество нейрокоучей</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
