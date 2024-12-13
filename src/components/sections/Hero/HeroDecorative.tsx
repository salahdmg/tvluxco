import { motion } from 'framer-motion';

export function HeroDecorative() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative hidden lg:block"
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
    </motion.div>
  );
}