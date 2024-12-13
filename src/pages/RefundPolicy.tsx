import { motion } from 'framer-motion';

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          <h1>Refund Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Refund Eligibility</h2>
          <p>We offer a 15-day money-back guarantee on all our subscriptions. To be eligible for a refund:</p>
          <ul>
            <li>Request must be made within 15 days of purchase</li>
            <li>Account must not have violated our Terms of Service</li>
            <li>Refund reason must be provided</li>
          </ul>

          <h2>2. Refund Process</h2>
          <p>To request a refund:</p>
          <ol>
            <li>Contact our support team</li>
            <li>Provide your order number</li>
            <li>Explain the reason for your refund request</li>
          </ol>

          <h2>3. Processing Time</h2>
          <p>Refunds are typically processed within 5-7 business days. The time it takes to appear in your account depends on your payment method and financial institution.</p>

          <h2>4. Exceptions</h2>
          <p>Refunds may be denied if:</p>
          <ul>
            <li>The 15-day period has expired</li>
            <li>Terms of Service violations have occurred</li>
            <li>The service has been extensively used</li>
          </ul>

          <h2>5. Contact Us</h2>
          <p>For refund requests or questions, please contact support@tvlux.com</p>
        </motion.div>
      </div>
    </div>
  );
}