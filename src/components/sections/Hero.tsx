import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-background pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0,rgba(0,0,0,0)_100%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Premium IPTV Service
            <span className="block text-purple-500">
              Offrant les meilleurs services IPTV En Europe.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Profitez de votre temps avec une excellente qualité d'image allant jusqu'à 4K, 
            sur n'importe quel appareil, à tout moment et n'importe où, avec plus de + 79 000 chaînes, 
            plus de 249 000 VOD et un temps de disponibilité de 100%.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-purple-600 hover:bg-purple-600/10">
              View Channels
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}