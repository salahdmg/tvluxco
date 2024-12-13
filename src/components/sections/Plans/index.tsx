import { motion } from 'framer-motion';
import { PlanCard } from './PlanCard';

const plans = [
  {
    name: 'GOLD',
    price: '69.00',
    period: 'One year',
    tag: 'MOST POPULAR',
    features: [
      'PREMIUM SERVER 💎',
      '+ 3 Free Months',
      'All Channels (+Adult content)',
      'Sky Sports Premier League',
      'Unlimited Movies & Series',
      'SD / HD / FULL HD / 4K',
      'Fast and Stable Servers',
      'Regularly Updated Content',
      '24/7 Customer Support',
      '15 Days Money Back Guarantee',
      'Catch-up and EPG (Replay)',
      'Compatible with all devices'
    ],
    popular: true,
    additionalText: 'Annual subscription + 1 Free Month'
  },
  {
    name: 'PREMIUM',
    price: '49.00',
    period: '6 Months',
    features: [
      'PREMIUM SERVER 💎',
      'All Channels (+Adult content)',
      'Sky Sports For Premier League',
      'Unlimited Movies & Series',
      'SD / HD / FULL HD / 4K',
      'Fast and Stable Servers',
      'Regularly Updated Content',
      '24/7 Customer Support',
      '15 Days Money Back Guarantee',
      'Catch-up and EPG (Replay)',
      'Compatible with all devices'
    ],
    additionalText: '6 Months'
  },
  {
    name: 'BASIC',
    price: '29.00',
    period: '3 Months',
    features: [
      'PREMIUM SERVER 💎',
      'All Channels (+Adult content)',
      'Sky Sports For Premier League',
      'Unlimited Movies & Series',
      'SD / HD / FULL HD / 4K',
      'Fast and Stable Servers',
      'Regularly Updated Content',
      '24/7 Customer Support',
      '15 Days Money Back Guarantee',
      'Catch-up and EPG (Replay)',
      'Compatible with all devices'
    ],
    additionalText: '3 Months'
  }
];

export function Plans() {
  return (
    <section id="plans" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Subscriptions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the subscription that best suits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name + plan.period} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}