
import { motion } from 'framer-motion';
import { Brain, BarChart2, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
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
              Что такое нейрокоучинговые технологии
            </h2>
            <p className="text-lg text-neuro-700 max-w-3xl mx-auto text-balance">
              Открытия в нейробиологии и нейроэкономике помогли создать новые, по-настоящему эффективные инструменты 
              личного развития и достижений
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16"
          >
            <blockquote className="p-8 md:p-10 bg-neuro-50 rounded-2xl border border-neuro-100 shadow-sm">
              <p className="text-neuro-800 text-lg md:text-xl italic font-display mb-6">
                "Надо бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"
              </p>
              <footer className="text-neuro-600">
                — Льюис Кэрролл, <cite>Алиса в Зазеркалье</cite>
              </footer>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-neuro-700 mb-6">
              Развитие технологий и серьезные экономические и политические ситуации в мире послужили тому, что человек вынужден меняться и развиваться с высокой скоростью, что не предполагалось природой. Наш мозг не был сформирован под такие высокие и непрекращающиеся стрессовые нагрузки.
            </p>
            <p className="text-neuro-700 mb-6">
              Новые времена и скорости требуют новых методов в работе с клиентами и сотрудниками. Эту возможность дала нейронаука, совершив за последние 15 лет прорывные открытия в том, как работает наш мозг, как он принимает решения и как реагирует на любые изменения в жизни.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-neuro-900 mb-6">
              Преимущества нейрокоучинговых технологий
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neuro-card flex flex-col">
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-neuro-700" />
                </div>
                <h4 className="text-xl font-semibold text-neuro-900 mb-2">Прогнозируемость результата</h4>
                <p className="text-neuro-700">
                  Психологи и коучи становятся гораздо более уверенными в том, что клиент получит определенный, нужный ему результат и могут это гарантировать. Это серьезное конкурентное преимущество на рынке.
                </p>
              </div>
              
              <div className="neuro-card flex flex-col">
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart2 className="w-6 h-6 text-neuro-700" />
                </div>
                <h4 className="text-xl font-semibold text-neuro-900 mb-2">Стабильность результата</h4>
                <p className="text-neuro-700">
                  Мы формируем новые нейронные связи и понимаем, как их стабилизировать. Клиенты начинают управлять своим мозгом и четко понимают, как себе помочь в любой момент.
                </p>
              </div>
              
              <div className="neuro-card flex flex-col">
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-neuro-700" />
                </div>
                <h4 className="text-xl font-semibold text-neuro-900 mb-2">Скорость и безопасность</h4>
                <p className="text-neuro-700">
                  Нейротехнологии не несут абсолютно никакой опасности для психического состояния клиента. Мы работаем не углубляясь в эмоции, а рационализируя их с помощью активации префронтальной коры.
                </p>
              </div>
              
              <div className="neuro-card flex flex-col">
                <div className="rounded-full bg-neuro-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-neuro-700" />
                </div>
                <h4 className="text-xl font-semibold text-neuro-900 mb-2">Гарантия действий</h4>
                <p className="text-neuro-700">
                  Нейротехнологии не просто дают мотивацию на изменения, но и доводят до действий за счет искоренения скрытых ловушек мозга. Клиенты без вариантов меняют жизнь и растут в деньгах и карьере.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
