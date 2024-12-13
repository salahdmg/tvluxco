import { motion } from 'framer-motion';

export function IPTVInfo() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          <h1>About IPTV</h1>
          
          <h2>What is IPTV?</h2>
          <p>
            IPTV (Internet Protocol Television) is a modern way to receive television content over the internet rather than through traditional terrestrial, satellite, or cable formats. This technology allows you to stream your favorite channels and content directly to any compatible device.
          </p>

          <h2>Advantages of IPTV</h2>
          <ul>
            <li>Access to 79,000+ channels worldwide</li>
            <li>HD and 4K quality streaming</li>
            <li>Watch on multiple devices</li>
            <li>No long-term contracts</li>
            <li>No equipment rental fees</li>
            <li>Video on Demand (VOD) content</li>
            <li>Significant cost savings</li>
          </ul>

          <h2>Cost Comparison</h2>
          <div className="bg-white/5 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Traditional TV Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Basic Cable TV: £45-75/month (£540-900/year)</li>
                  <li>Equipment Rental: £8-12/month (£96-144/year)</li>
                  <li>HD/DVR Services: £8-15/month (£96-180/year)</li>
                  <li>Installation Fees: £40-150</li>
                  <li className="text-white font-semibold">Total Annual Cost: £772-1,374</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">IPTV Service</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Annual Subscription: £39-119/year</li>
                  <li>No Equipment Rental Needed</li>
                  <li>All Features Included</li>
                  <li>No Installation Fees</li>
                  <li className="text-primary font-semibold">Total Annual Cost: £39-119</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>How IPTV Works</h2>
          <p>
            IPTV works by converting traditional TV signals into digital data that can be transmitted over the internet. This data is then decoded by your device (smart TV, phone, tablet, etc.) to display the content. The process is seamless and provides several advantages over traditional broadcasting methods:
          </p>
          <ul>
            <li>Instant channel switching</li>
            <li>Better picture quality</li>
            <li>Interactive features</li>
            <li>Multi-device support</li>
          </ul>

          <h2>Why Choose Our IPTV Service?</h2>
          <ul>
            <li>High-quality European servers for stable streaming</li>
            <li>24/7 customer support</li>
            <li>Regular content updates</li>
            <li>Money-back guarantee</li>
            <li>Compatible with all major devices</li>
            <li>Easy setup and installation</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}