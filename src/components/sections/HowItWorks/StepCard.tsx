import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  step: number;
  index: number;
}

export function StepCard({ title, description, icon: Icon, step, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="text-center"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-500">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="mt-6">
        <div className="mb-2 inline-flex items-center justify-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-semibold text-purple-500">
          Step {step}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}