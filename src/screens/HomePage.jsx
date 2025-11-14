import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CoreValues from '../components/CoreValues';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="YourBrand - Modern Landing Page"
        description="Build amazing landing pages with modern design and blazing-fast performance"
        keywords="landing page, react, vite, tailwind, framer motion"
      />
      <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <CoreValues />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
