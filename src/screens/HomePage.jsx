import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CoreValues from '../components/CoreValues';
import About from './About/About';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HeroSectionII from '../components/HeroSectionII';
import ContactForm from '../components/ContactUs';
import ComingSoon from '../components/ComingSoon';
// import SmoothScroll from '../components/SmoothScroll';
import CapabilitiesCard from '../components/CapabilitiesCard';
import GallerySection from '../components/GallerySection';
// import CapabilitiesCard from '../components/CapabilitiesCard';

const HomePage = () => {
  return (
    <div className="relative">
      {/* <SmoothScroll> */}
      <SEO
        title="KAZM - Creative Motion Collective"
        description="KAZM is a culture-driven collective crafting experiences across events, music, motion, and storytelling."
        keywords="KAZM, creative collective, motion design, event experiences, storytelling, music production"
      />

      <HeroSectionII />
      <GallerySection />
      <CapabilitiesCard />
      <About />
      <ComingSoon />

      {/* <AboutUs /> */}
      {/* <CoreValues /> */}
      {/* </SmoothScroll> */}
    </div>
  );
};

export default HomePage;
