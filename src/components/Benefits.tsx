
import { motion } from 'framer-motion';
import { Check, Star, Award, Book, Shield, Clock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: "Новая востребованная профессия",
      description: "Вы получите новую востребованную профессию и сразу начнете практику на реальных клиентах. При необходимости, мы предоставим клиентов для отработки практики",
      icon: <Star className="w-6 h-6 text-neuro-700" />
    },
    {
      title: "Выделяйтесь среди коллег",
      description: "Вы будете профессионально выделяться среди коллег и сможете обосновано поднять чек, потому что станете использовать научные доказательные нейротехнологии",
      icon: <Award className="w-6 h-6 text-neuro-700" />
    },
    {
      title: "Привлекайте клиентов",
      description: "У вас появятся инструменты, которые позволят привлекать клиентов без бесплатных консультаций (тест-диагностики на выгорание и природный уровень потенциала)",
      icon: <Book className="w-6 h-6 text-neuro-700" />
    },
    {
      title: "Станьте специалистом",
      description: "Вы станете станете специалистом в нейроменеджменте. Сможете консультировать и обучать руководителей в вопросах повышения эффективности и мотивации персонала",
      icon: <Shield className="w-6 h-6 text-neuro-700" />
    },
    {
      title: "Ведите тренинги",
      description: "Вы сможете вести тренинги как для компаний, так и для своих клиентов по темам: лидерство, мотивация, эффективность и другие актуальные темы",
      icon: <Clock className="w-6 h-6 text-neuro-700" />
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-neuro-900 mb-6">
              Ваши результаты после курса
            </h2>
            <p className="text-lg text-neuro-700 max-w-3xl mx-auto">
              Это не просто программа для коучей и не просто знания по нейробиологии.
              Это комплексное обучение, основанное на исследованиях и принципах нейронауки
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="neuro-card"
              >
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-neuro-900 mb-3">{benefit.title}</h3>
                <p className="text-neuro-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 p-8 bg-neuro-50 rounded-2xl border border-neuro-100"
          >
            <h3 className="text-xl font-semibold text-neuro-900 mb-4">Дополнительные бонусы:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="rounded-full bg-neuro-200 p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-neuro-700" />
                </div>
                <span className="text-neuro-700">Пожизненный доступ к информации курса</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-neuro-200 p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-neuro-700" />
                </div>
                <span className="text-neuro-700">Доступ в хранилище кейсов (мы собираем разборы кейсов учеников, из которых вы сможете подчерпнуть много советов для практики)</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-neuro-200 p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-neuro-700" />
                </div>
                <span className="text-neuro-700">Членство в закрытом сообществе Нейрокоучей, в котором обсуждается множество ценной для работы информации</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-neuro-200 p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-neuro-700" />
                </div>
                <span className="text-neuro-700">Личное наставничество в развитии практики</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
