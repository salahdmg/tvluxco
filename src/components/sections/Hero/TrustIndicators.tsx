import { Star, Zap } from 'lucide-react';

export function TrustIndicators() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/5 backdrop-blur-sm rounded-xl p-6">
      {/* Trustpilot */}
      <div className="flex flex-col items-center gap-2">
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

      {/* Divider */}
      <div className="hidden sm:block w-px h-12 bg-white/10" />

      {/* Instant Activation */}
      <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full">
        <Zap className="w-5 h-5 text-white" />
        <span className="text-white font-medium">Activation Immédiate</span>
      </div>
    </div>
  );
}