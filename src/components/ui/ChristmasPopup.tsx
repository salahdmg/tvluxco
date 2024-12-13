import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export function ChristmasPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenChristmasPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenChristmasPopup', 'true');
  };

  const handleGetOffer = () => {
    handleClose();
    navigate('/#plans');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-md w-full bg-[#0f172a] rounded-2xl p-6 border border-blue-500/20"
          >
            {/* Christmas decorations */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Gift className="w-12 h-12 text-red-500" />
            </div>
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                🎄 Special Christmas Offer! 🎄
              </h3>
              <div className="bg-gradient-to-r from-red-500 to-green-500 text-transparent bg-clip-text font-bold text-xl mb-4">
                Buy 2 Get 1 Free!
              </div>
              <p className="text-gray-300 mb-6">
                Purchase any two subscriptions and get an additional subscription absolutely free! 
                Perfect for sharing with family and friends this holiday season.
              </p>
              
              {/* Offer details */}
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>✨ Valid for all subscription plans</li>
                  <li>🎁 Extra subscription of equal or lesser value</li>
                  <li>⏰ Limited time offer</li>
                  <li>🌟 Perfect Christmas gift</li>
                </ul>
              </div>

              <Button 
                onClick={handleGetOffer}
                className="w-full bg-gradient-to-r from-red-500 to-green-500 hover:opacity-90"
              >
                Get This Offer
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}