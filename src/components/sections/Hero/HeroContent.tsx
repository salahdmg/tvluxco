import { Button } from '@/components/ui/Button';

export function HeroContent() {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToChannels = () => {
    const channelsSection = document.getElementById('channels');
    channelsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-6xl font-bold">
        <span className="text-blue-500">Premium IPTV Service</span>
        <span className="block text-blue-500">
          Offrant les meilleurs services IPTV En Europe.
        </span>
      </h1>

      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
        Profitez de votre temps avec une excellente qualité d'image allant jusqu'à 4K, 
        sur n'importe quel appareil, à tout moment et n'importe où, avec plus de + 79 
        000 chaînes, plus de 249 000 VOD et un temps de disponibilité de 100%.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={scrollToPlans}
        >
          Start Free Trial
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-blue-600 text-white hover:bg-blue-600/10"
          onClick={scrollToChannels}
        >
          View Channels
        </Button>
      </div>
    </div>
  );
}