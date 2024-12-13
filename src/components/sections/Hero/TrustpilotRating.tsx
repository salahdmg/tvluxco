import { Star } from 'lucide-react';

export function TrustpilotRating() {
  return (
    <div className="flex flex-col items-center sm:items-start gap-2">
      <div className="flex items-center gap-2">
        <img 
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg"
          alt="Trustpilot"
          className="h-6"
        />
        <span className="text-white font-semibold">Excellent</span>
      </div>
      <div className="flex items-center">
        {[1, 2, 3, 4].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
        ))}
        <Star className="w-5 h-5 fill-green-500/30 text-green-500" />
        <span className="ml-2 text-white">4.7</span>
      </div>
    </div>
  );
}