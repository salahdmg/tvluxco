import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Features } from './components/sections/Features';
import { MoviesAndSeries } from './components/sections/MoviesAndSeries';
import { ChannelLogos } from './components/sections/ChannelLogos';
import { LeagueLogos } from './components/sections/LeagueLogos';
import { Plans } from './components/sections/Plans';
import { CompatibleDevices } from './components/sections/CompatibleDevices';
import { ClientReviews } from './components/sections/ClientReviews';
import { HowItWorks } from './components/sections/HowItWorks';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { RefundPolicy } from './pages/RefundPolicy';
import { IPTVInfo } from './pages/IPTVInfo';
import { FloatingChat } from './components/ui/FloatingChat';
import { ChristmasPopup } from './components/ui/ChristmasPopup';

function HomePage() {
  return (
    <>
      <Features />
      <MoviesAndSeries />
      <ChannelLogos />
      <LeagueLogos />
      <Plans />
      <CompatibleDevices />
      <ClientReviews />
      <HowItWorks />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/about-iptv" element={<IPTVInfo />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChat />
        <ChristmasPopup />
      </div>
    </Router>
  );
}

export default App;