import { motion } from 'framer-motion';

interface DeviceCardProps {
  name: string;
  icon: string;
}

export function DeviceCard({ name, icon }: DeviceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-[#252525] p-2.5 rounded-lg w-14 h-14 flex items-center justify-center group hover:bg-blue-500/10 transition-all duration-300"
    >
      <img 
        src={icon}
        alt={name}
        className="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
    </motion.div>
  );
}