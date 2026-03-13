//components
import NavBarLogedOut from "../components/landing/NavBarLogedOut";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import ShareContent from "../components/landing/ShareContent";
import AccessResources from "../components/landing/AccessResources";
import Footer from "../components/landing/Footer";
import ContactUs from "../components/landing/ContactUs";
function Landing() {
  return (
    <>
      <div className="relative w-screen h-screen">
        {/* nav bar */}
        <NavBarLogedOut />
        <div className="  py-44  h-full">
          {/* hereo */}
          <HeroSection />

          {/* about 1 */}
          <AboutSection />

          {/* about 2 */}
          <ShareContent />

          {/* about 3 */}
          <AccessResources />

          {/* contact us */}
          <ContactUs />

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Landing;
