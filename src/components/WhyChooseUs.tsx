import { ShieldCheck, Target, Users, Zap } from "lucide-react";
import { useData } from "../context/DataContext";

const ICONS = [Target, Users, Zap, ShieldCheck];

export default function WhyChooseUs() {
  const { data } = useData();
  const content = data.whyChooseUs;

  return (
    <section id="why-us" className="bg-background pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            
            <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              {content.title}
            </span>
          </div>

          <h2 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-6">
            {content.heading}
          </h2>
          
          <p className="text-[16px] sm:text-[18px] text-textSecondary max-w-2xl leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.features.map((feature, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={index} className="group p-8 rounded-2xl bg-card border border-borderBase hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-background border border-borderBase flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-colors duration-300 transform group-hover:rotate-6">
                  <Icon className="w-6 h-6 text-textSecondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-textSecondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
