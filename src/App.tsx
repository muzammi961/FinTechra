import { useState } from "react";
import LoadingEntry from "./components/LoadingEntry";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import DigitalSolutions from "./components/DigitalSolutions";
import FinancialServices from "./components/FinancialServices";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import WhoWeServe from "./components/WhoWeServe";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300 font-sans">
      <LoadingEntry onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="animate-in fade-in duration-1000">
          <Hero />
          <Services />
          <About />
          <DigitalSolutions />
          <FinancialServices />
          <WhyChooseUs />
          <HowWeWork />
          <WhoWeServe />
          <Showcase />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </div>
  );
}

export default App;
