import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  index: number;
  tag?: string;
  additionalText?: string;
}

export function PlanCard({ 
  name, 
  price, 
  period, 
  features, 
  popular, 
  index,
  tag,
  additionalText 
}: PlanCardProps) {
  const getPlanLink = () => {
    switch (name.toLowerCase()) {
      case 'basic':
        return 'https://servercode.digital/en/checkout/?plan=29&reference=https://tvlux.co/';
      case 'premium':
        return 'https://servercode.digital/en/checkout/?plan=49&reference=https://tvlux.co/';
      case 'gold':
        return 'https://servercode.digital/en/checkout/?plan=69&reference=https://tvlux.co/';
      default:
        return '#';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`flex flex-col justify-between rounded-3xl bg-background/50 backdrop-blur-sm p-8 ${
        popular ? 'ring-2 ring-primary' : 'ring-1 ring-primary/20'
      }`}
    >
      <div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            {name}
          </span>
          {tag && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
              {tag}
            </span>
          )}
        </div>
        
        <div className="mt-4">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-foreground">£{price}</span>
            <span className="ml-1 text-xl text-muted-foreground">/{period}</span>
          </div>
          {additionalText && (
            <p className="mt-2 text-sm text-muted-foreground">{additionalText}</p>
          )}
        </div>

        <ul role="list" className="mt-8 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex gap-x-3 text-sm">
              <Check className="h-5 w-5 flex-none text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={getPlanLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block w-full"
      >
        <Button
          className={`w-full ${popular ? '' : 'variant-outline'}`}
        >
          Order Now
        </Button>
      </a>
    </motion.div>
  );
}