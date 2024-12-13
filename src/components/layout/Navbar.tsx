import { useState } from 'react';
import { Menu, X, Tv2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Plans', href: '#plans' },
  { name: 'Channels', href: '#channels' },
  { name: 'Reseller', href: '#reseller' },
  { name: 'Support', href: '#support', isFooterLink: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (window.location.pathname !== '/') {
      navigate('/#plans');
    } else {
      const plansSection = document.getElementById('plans');
      plansSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavigation = (href: string, isFooterLink?: boolean) => {
    setIsOpen(false);
    
    if (isFooterLink) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const footer = document.querySelector('footer');
          footer?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const footer = document.querySelector('footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (window.location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="TvLux Home">
            <Tv2 className="h-8 w-8 text-primary" aria-hidden="true" />
            <span className="text-2xl font-bold text-foreground">TvLux</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.isFooterLink)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={item.name}
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
            <Button onClick={handleGetStarted}>Order Now</Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-white/10">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.isFooterLink)}
                  className="block w-full px-3 py-2 text-left text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md"
                  role="menuitem"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button onClick={handleGetStarted} className="w-full">Order Now</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}