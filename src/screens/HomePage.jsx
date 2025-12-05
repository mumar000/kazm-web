import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CoreValues from '../components/CoreValues';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HeroSectionII from '../components/HeroSectionII';
import ContactForm from '../components/ContactUs';
import ComingSoon from '../components/ComingSoon';
import SmoothScroll from '../components/SmoothScroll';

const HomePage = () => {
  return (
    <div className="relative">
      <SmoothScroll>
        <SEO
          title="KAZM - Creative Motion Collective"
          description="KAZM is a culture-driven collective crafting experiences across events, music, motion, and storytelling."
          keywords="KAZM, creative collective, motion design, event experiences, storytelling, music production"
        />

        <Navbar />
        <HeroSectionII />
        <ComingSoon />
        {/* <AboutUs /> */}
        {/* <CoreValues /> */}
        <ContactForm />
        <Footer />
      </SmoothScroll>
    </div>
  );
};

export default HomePage;
