import { MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import HeroShader from "./HeroShader";
import { useData } from "../context/DataContext";

export default function Hero() {
  const { data } = useData();

  return (
    <section id="home" className="relative min-h-screen bg-background flex flex-col overflow-hidden transition-colors duration-300">
      <HeroShader />

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="flex-1" />

      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <p className="text-[14px] sm:text-[16px] text-textSecondary font-medium tracking-wide mb-4">
          {data.hero.subtitle}
        </p>

        <h1 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-6">
          {data.hero.title}
        </h1>

        <p className="text-[16px] sm:text-[18px] text-textSecondary max-w-2xl leading-relaxed">
          {data.hero.description}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <a href="#services" className="text-[14px] font-medium text-text hover:text-accent transition-colors px-2">
            Explore Services
          </a>

          <a 
            href="https://wa.me/9778726809?text=Hello%20FinTechra%20Solutions%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-full px-4 sm:px-5 py-2.5 transition-colors duration-300"
          >
              <img
              src="/whatsapplogo.png"
              alt="WhatsApp"
              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-contain"/>
            {/* <MessageCircle size={18} /> */}
            <span className="text-[13px] sm:text-[14px] font-medium">
              Chat on WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
