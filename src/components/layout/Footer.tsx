import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About TvLux</h3>
            <p className="text-gray-400">
              Premium IPTV service providing high-quality streaming experience worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-iptv" className="text-gray-400 hover:text-primary">
                  About IPTV
                </Link>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-primary">
                  Plans
                </a>
              </li>
              <li>
                <a href="#channels" className="text-gray-400 hover:text-primary">
                  Channels
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 hover:text-primary">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a 
                href="mailto:tvluxry@gmail.com" 
                className="flex items-center text-gray-400 hover:text-primary"
              >
                <Mail className="h-5 w-5 mr-2" />
                tvluxry@gmail.com
              </a>
              <a 
                href="https://wa.me/33756754480" 
                className="flex items-center text-gray-400 hover:text-primary"
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">We Accept</h4>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {/* Traditional Payment Methods */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5 sm:h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5 sm:h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 sm:h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bancontact_logo.svg/512px-Bancontact_logo.svg.png" alt="Bancontact" className="h-5 sm:h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/IDEAL_Logo_2020.svg/220px-IDEAL_Logo_2020.svg.png" alt="iDEAL" className="h-5 sm:h-8" />
              </div>
              
              {/* Cryptocurrency */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin" className="h-5 sm:h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" alt="Ethereum" className="h-5 sm:h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} TvLux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}