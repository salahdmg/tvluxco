import { motion } from 'framer-motion';

export function Terms() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          <h1>Terms of Service</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using our services, you agree to be bound by these Terms of Service.</p>

          <h2>2. Service Description</h2>
          <p>We provide IPTV streaming services that allow you to access television content over the internet.</p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You must be at least 18 years old to use our services</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You agree not to share or resell your subscription</li>
            <li>You must comply with all applicable laws and regulations</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>All payments are processed securely. Subscription fees are non-refundable except as provided in our refund policy.</p>

          <h2>5. Service Availability</h2>
          <p>While we strive for 100% uptime, we do not guarantee uninterrupted service. Occasional technical issues may occur.</p>

          <h2>6. Termination</h2>
          <p>We reserve the right to terminate or suspend access to our services for violations of these terms.</p>

          <h2>7. Contact</h2>
          <p>For any questions regarding these terms, please contact support@tvlux.com</p>
        </motion.div>
      </div>
    </div>
  );
}