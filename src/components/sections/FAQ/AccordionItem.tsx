import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <button
        className={`w-full rounded-xl p-4 text-left transition-all duration-300 ${
          isOpen 
            ? 'bg-blue-600/10 ring-1 ring-blue-500/20' 
            : 'hover:bg-white/5'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <span className={`text-base font-medium ${isOpen ? 'text-blue-500' : 'text-white group-hover:text-blue-500'}`}>
            {question}
          </span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-blue-500' : 'text-white group-hover:text-blue-500'
            }`}
          />
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}