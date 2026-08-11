import { PenTool, Laptop, Briefcase, Handshake } from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "CUSTOM-BUILT SOLUTIONS",
    description: "Solutions designed around your business requirements.",
    icon: PenTool,
  },
  {
    num: "02",
    title: "MODERN TECHNOLOGY",
    description: "Modern web technologies and AI-powered solutions.",
    icon: Laptop,
  },
  {
    num: "03",
    title: "BUSINESS-FOCUSED",
    description: "We focus on practical solutions that support real business needs.",
    icon: Briefcase,
  },
  {
    num: "04",
    title: "ONE PARTNER",
    description: "Digital and financial services from one company.",
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-card pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
                5
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                Why Us
              </span>
            </div>

            <h2 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-6">
              Why Choose FinTechra Solutions?
            </h2>
            
            <p className="text-[16px] sm:text-[18px] text-textSecondary leading-relaxed">
              We bring together the technical expertise to build your digital presence and the financial knowledge to keep your business running smoothly.
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-background border border-borderBase transition-all duration-300 hover:border-accent hover:shadow-lg">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-full bg-card border border-borderBase flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                      <reason.icon className="w-5 h-5 text-textSecondary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-borderBase group-hover:text-accent/30 transition-colors">{reason.num}</span>
                  </div>
                  
                  <h3 className="text-[15px] font-bold tracking-wider text-text mb-3">{reason.title}</h3>
                  <p className="text-[15px] text-textSecondary leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
