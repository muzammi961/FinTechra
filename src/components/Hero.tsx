import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import HeroShader from "./HeroShader";
import { PartnerIcon } from "./icons";

const EASE = "cubic-bezier(0.25,0.1,0.25,1)";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#EFEFEF] flex flex-col overflow-hidden">
      <HeroShader />

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="flex-1" />

      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
          Axion Studio
        </p>

        <h1 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
          We craft digital experiences
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          for brands ready to dominate
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          their category online.
        </h1>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <button className="group flex items-center gap-3 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300">
            <span className="flex flex-col overflow-hidden h-[20px]">
              <span
                className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
                style={{ transitionTimingFunction: EASE }}
              >
                <span className="block h-[20px] leading-[20px]">
                  Start a project
                </span>
                <span className="block h-[20px] leading-[20px]">
                  Start a project
                </span>
              </span>
            </span>
            <span
              className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:-rotate-45"
              style={{ transitionTimingFunction: EASE }}
            >
              <ArrowRight size={14} className="text-[#F26522]" />
            </span>
          </button>

          <div
            className="flex items-center gap-2 sm:gap-3 bg-white rounded-[4px] px-3 sm:px-4 py-2 sm:py-2.5 transition-shadow duration-300"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 4px 16px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            <PartnerIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" />
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
              Certified Partner
            </span>
            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded">
              Featured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
