
import { motion } from 'framer-motion';
import { Video, CheckCircle, Users, Calendar, User } from 'lucide-react';

export default function HowLearningWorks() {
  return (
    <section id="how-learning-works" className="py-16 bg-white">
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
              Как будет проходить обучение
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-neuro-100 p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-neuro-100 rounded-full flex items-center justify-center mb-4">
                <Video className="w-8 h-8 text-neuro-700" />
              </div>
              <h3 className="text-xl font-semibold text-neuro-900 mb-3">Онлайн-формат</h3>
              <p className="text-neuro-700">
                Все обучение проходит онлайн. Мы разбили теоретический материал на небольшие видео уроки. 
                Доступ к урокам остается навсегда.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-neuro-100 p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-neuro-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-neuro-700" />
              </div>
              <h3 className="text-xl font-semibold text-neuro-900 mb-3">Гибкий график</h3>
              <p className="text-neuro-700">
                Программа выстроена бережно и встраивается в вашу занятость. 
                Уроки выкладываются 2-3 раза в неделю. В неделю вы тратите 3-4 часа на обучение.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-neuro-100 p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-neuro-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-neuro-700" />
              </div>
              <h3 className="text-xl font-semibold text-neuro-900 mb-3">Маленькие группы</h3>
              <p className="text-neuro-700">
                Группа состоит всего из 10 учеников, чтобы максимально уделить время вашей практической работе и разбору вопросов.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 p-8 bg-neuro-50 rounded-xl border border-neuro-100"
          >
            <h3 className="text-xl font-semibold text-neuro-900 mb-4 flex items-center">
              <User className="w-6 h-6 text-neuro-700 mr-2" />
              Личное сопровождение
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neuro-800 mb-1">Практика после каждого блока</p>
                  <p className="text-neuro-700">Практика начинается после каждого тематического блока. Количество практики на модуль не менее 20 часов.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neuro-800 mb-1">Личные сессии с наставником</p>
                  <p className="text-neuro-700">У вас будет 2-3 личных нейросессии с Владленой или опытными кураторами. Одна личная сессия длится 2 часа.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neuro-800 mb-1">Постоянное наставничество</p>
                  <p className="text-neuro-700">Личное наставничество - это постоянное сопровождение вас, как специалиста, в разборе кейсов, сложных вопросов и развитии практики.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-neuro-800 mb-6">
              Старт обучения: <span className="font-semibold">22 марта 2025 года</span>
            </p>
            <a 
              href="#registration" 
              className="inline-block py-3.5 px-8 bg-neuro-800 hover:bg-neuro-700 text-white font-medium rounded-xl shadow-sm transition-all hover:shadow-md text-center"
            >
              Записаться на собеседование
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
