import Navigation from 'src/components/Navigation';
import Hero from 'src/pages/Home/Hero';
import LatestEvents from 'src/pages/Home/LatestEvents';
import PolicyIssues from 'src/pages/Home/PolicyIssues';
import Donation from 'src/pages/Home/Donation';
import ServiceInbox from 'src/pages/Home/ServiceInbox';
import Footer from 'src/components/Footer';

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <LatestEvents />
      <PolicyIssues />
      <Donation />
      <ServiceInbox />
      <Footer />
    </>
  );
};

export default Home
