import { Zap } from 'lucide-react';

export function InstantActivation() {
  return (
    <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full">
      <Zap className="w-5 h-5 text-white" />
      <span className="text-white font-medium">Activation Immédiate</span>
    </div>
  );
}