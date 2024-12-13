import { motion } from 'framer-motion';
import { Euro, Zap, Settings2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { TrustIndicators } from './TrustIndicators';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Euro,
    title: "Money-Back Guarantee",
    description: "We are only satisfied when you are. Not satisfied? No problem, request a full refund up to 10 days after your purchase."
  },
  {
    icon: Zap,
    title: "Ultra-fast Connection",
    description: "Unlike other IPTV providers, TvLux uses a high-quality dedicated European server. Opening our TV channels will take less than 0.5 seconds."
  },
  {
    icon: Settings2,
    title: "Instant Installation",
    description: "You can easily set up and install your IPTV subscription on your device of choice. We offer complete post-purchase support to make this process easy for everyone."
  }
];

export function Features() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about-iptv');
  };

  const handleGetOffer = () => {
    if (window.location.pathname !== '/') {
      navigate('/#plans');
    } else {
      const plansSection = document.getElementById('plans');
      plansSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-background pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <TrustIndicators />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mt-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Offering the best IPTV services in Europe.
          </h1>
          
          <p className="text-lg text-gray-400 mb-8">
            Enjoy your time with excellent picture quality up to 4K, on any device, anytime and anywhere, with more than 79,000 channels, over 249,000 VOD content, and 100% uptime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-12"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-white hover:bg-blue-600/10"
              onClick={handleGetOffer}
            >
              Get Offer
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}