import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import MarketMaking from "../components/MarketMaking";
import TrackRecord from "../components/TrackRecord";
import OurBackbone from "../components/OurBackbone";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="flex flex-col gap-16 lg:gap-[70px] pb-16 lg:pb-[70px]">
        {/* Hero Section */}
        <Hero />
        
        {/* Market Making Section */}
        <MarketMaking />
        
        {/* Track Record Section */}
        <TrackRecord />
        
        {/* Our Backbone Section */}
        <OurBackbone />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Contact Us Section */}
        <ContactUs />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
