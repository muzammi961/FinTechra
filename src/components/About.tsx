import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useData } from "../context/DataContext";

export default function About() {
  const { data } = useData();
  const content = data.about;

  return (
    <section id="about" className="bg-card pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              
              <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                {content.title}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-text mb-6 sm:mb-8 leading-tight">
              {content.heading}
            </h2>

            <div className="space-y-4 sm:space-y-6 text-[15px] sm:text-[16px] text-textSecondary leading-relaxed">
              <p>{content.description1}</p>
              <p>{content.description2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-10">
              {content.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
                  <span className="font-medium text-text">{stat.value} {stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <a href="#contact" className="group inline-flex items-center gap-3 bg-accent hover:bg-accentHover text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2 transition-colors duration-300">
                <span>Discuss Your Project</span>
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={14} className="text-accent group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden liquid-glass border border-white/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="FinTechra Team at Work"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
