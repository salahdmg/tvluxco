import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    number: '1',
    title: 'Place your order',
    description: 'Place your order by choosing your preferred subscription.',
  },
  {
    number: '2',
    title: 'Get your account',
    description: 'After making a payment, you will be contacted by email within 10 minutes with your login credentials and installation guide.',
  },
  {
    number: '3',
    title: 'Enjoy your IPTV',
    description: 'Start enjoying all channels, movies, and series!',
  },
];

export function HowItWorks() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/#plans');
    } else {
      // If we're already on home page, just scroll to plans
      const plansSection = document.getElementById('plans');
      plansSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-[#000B45] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-blue-950/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
            How does it work?
          </h2>

          <div className="relative pl-8 sm:pl-12">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-blue-500/30" />
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-8 sm:-left-12 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-background flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Choose the #1 <span className="text-blue-500">IPTV</span> Provider in Europe
          </h3>
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600"
            onClick={handleOrderNow}
          >
            Order Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}