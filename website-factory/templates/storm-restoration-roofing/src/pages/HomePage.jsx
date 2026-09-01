import HeaderBar from '../components/HeaderBar.jsx';
import HeroStormRestoration from '../components/HeroStormRestoration.jsx';
import TrustBadgeStrip from '../components/TrustBadgeStrip.jsx';
import InsuranceAdvocateProcess from '../components/InsuranceAdvocateProcess.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import ReviewsStrip from '../components/ReviewsStrip.jsx';
import FinalCta from '../components/FinalCta.jsx';
import Footer from '../components/Footer.jsx';
import StickyMobileBar from '../components/StickyMobileBar.jsx';

export default function HomePage() {
  return (
    <>
      <HeaderBar />
      <main>
        <HeroStormRestoration />
        <TrustBadgeStrip />
        <InsuranceAdvocateProcess />
        <ServicesGrid />
        <ReviewsStrip />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
