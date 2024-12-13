import { motion } from 'framer-motion';
import { Sparkles, Phone, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Satisfait ou remboursé',
    description: 'Nous ne sommes satisfaits que lorsque vous l\'êtes. Pas satisfait ? Aucun problème, demandez un remboursement intégral jusqu\'à 10 jours après votre achat.',
    icon: Sparkles,
  },
  {
    title: 'Assistance 24h/7j',
    description: 'Nous avons une assistance par ticket et par e-mail 24h/24 et 7j/7. Veuillez nous contacter si vous avez besoin d\'aide.',
    icon: Phone,
  },
  {
    title: 'Rapide et fiable',
    description: 'L\'équipe de TvLux propose un large éventail de chaînes premium. Vous pouvez obtenir les chaînes de votre choix. Il est possible d\'obtenir les chaînes d\'un pays particulier ou du monde entier.',
    icon: Rocket,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pourquoi <span className="text-purple-500">nous choisir !</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Nos meilleurs abonnements IPTV offrent un streaming de haute qualité, sans mise en mémoire tampon ni décalage. Vous pouvez facilement parcourir les chaînes à l'aide de notre interface conviviale et profiter d'une expérience fluide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1A1A1A] rounded-2xl p-8"
            >
              <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}