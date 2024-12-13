import { Star, Zap } from 'lucide-react';

export function TrustIndicators() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex flex-col gap-2">
        <img 
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg"
          alt="Trustpilot"
          className="h-6"
        />
        <div className="flex items-center gap-1">
          {Array(4).fill(null).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
          ))}
          <Star className="w-5 h-5 fill-green-500/30 text-green-500" />
          <span className="ml-2 text-white">4.7</span>
        </div>
      </div>
      
      <div className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full">
        <Zap className="w-5 h-5 text-white" />
        <span className="text-white font-medium">Instant Activation</span>
      </div>
    </div>
  );
}