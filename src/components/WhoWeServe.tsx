import { Rocket, Store, TrendingUp, Building2, HeartPulse, GraduationCap, Briefcase } from "lucide-react";
import { useData } from "../context/DataContext";

const ICONS = [Rocket, Store, TrendingUp, Building2, HeartPulse, GraduationCap, Briefcase];

export default function WhoWeServe() {
  const { data } = useData();
  const content = data.whoWeServe;

  return (
    <section id="industries" className="bg-card pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
              7
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              {content.title}
            </span>
          </div>

          <h2 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-6 max-w-3xl">
            {content.heading}
          </h2>
          
          {content.description && (
            <p className="text-[16px] sm:text-[18px] text-textSecondary max-w-2xl leading-relaxed">
              {content.description}
            </p>
          )}
        </div>

        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.industries.map((industry, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-background border border-borderBase hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-card border border-borderBase flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <Icon className="w-6 h-6 text-textSecondary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-[15px] font-bold tracking-widest text-text mb-4 group-hover:text-accent transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-[15px] text-textSecondary leading-relaxed flex-1">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
