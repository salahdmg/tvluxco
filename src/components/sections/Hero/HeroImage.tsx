import { motion } from 'framer-motion';

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative hidden lg:block"
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <img
        src="https://images.unsplash.com/photo-1626387346567-68d0c05f3b54?auto=format&fit=crop&q=80"
        alt="VR Experience"
        className="relative z-10 w-full h-auto max-w-2xl mx-auto rounded-2xl"
      />
    </motion.div>
  );
}