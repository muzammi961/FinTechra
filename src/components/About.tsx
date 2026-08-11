import { ArrowRight } from "lucide-react";

const EASE = "cubic-bezier(0.25,0.1,0.25,1)";

const LARGE_IMG =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85";

function AboutButton() {
  return (
    <button className="group flex items-center gap-3 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 w-fit">
      <span className="flex flex-col overflow-hidden h-[20px]">
        <span
          className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
          style={{ transitionTimingFunction: EASE }}
        >
          <span className="block h-[20px] leading-[20px]">
            About our studio
          </span>
          <span className="block h-[20px] leading-[20px]">
            About our studio
          </span>
        </span>
      </span>
      <span
        className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:-rotate-45"
        style={{ transitionTimingFunction: EASE }}
      >
        <ArrowRight size={14} className="text-accent" />
      </span>
    </button>
  );
}

const Pillar = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex flex-col gap-2 p-5 rounded-2xl bg-background border border-borderBase">
    <h3 className="text-[14px] font-bold tracking-widest text-accent uppercase">{title}</h3>
    <p className="text-[14px] text-textSecondary">{desc}</p>
  </div>
);

export default function About() {
  return (
    <section id="about" className="bg-card pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
            1
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            About FinTechra Solutions
          </span>
        </div>

        <h2
          className="px-5 sm:px-8 lg:px-12 font-medium leading-[1.12] tracking-[-0.02em] text-text mb-12 sm:mb-16 lg:mb-28"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Technology & Financial Solutions,
          <br />
          Built Around Your Business
        </h2>

        {/* MOBILE / TABLET */}
        <div className="lg:hidden px-5 sm:px-8">
          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-text mb-6">
            FinTechra Solutions brings digital development, AI-powered solutions and essential financial services together to help businesses move forward with confidence.
          </p>
          <div className="mb-10 sm:mb-12">
            <AboutButton />
          </div>
          <div className="flex flex-col gap-4">
            <Pillar title="DIGITAL" desc="Websites, web applications and e-commerce solutions." />
            <Pillar title="AI" desc="AI-powered tools, automation and intelligent web solutions." />
            <Pillar title="FINANCE" desc="Accounting, GST and income tax services." />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid px-5 sm:px-8 lg:px-12 grid-cols-[30%_1fr_40%] items-center gap-6 xl:gap-8">
          <div className="flex flex-col gap-4">
            <Pillar title="DIGITAL" desc="Websites, web applications and e-commerce solutions." />
            <Pillar title="AI" desc="AI-powered tools, automation and intelligent web solutions." />
            <Pillar title="FINANCE" desc="Accounting, GST and income tax services." />
          </div>
          <div className="self-center flex justify-center">
            <div className="flex flex-col items-start">
              <p className="text-[16px] xl:text-[18px] leading-[1.65] text-text mb-8">
                FinTechra Solutions brings digital development, AI-powered solutions and essential financial services together to help businesses move forward with confidence.
              </p>
              <AboutButton />
            </div>
          </div>
          <img
            src={LARGE_IMG}
            alt="Business transformation"
            className="w-full aspect-[3/2] rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
