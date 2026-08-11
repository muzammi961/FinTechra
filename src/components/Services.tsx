import { ArrowRight, Monitor, ShoppingCart, Cpu, FileText, Calculator, PieChart } from "lucide-react";
import { useData } from "../context/DataContext";

// We need to map the JSON items to their corresponding icons.
// Since JSON only stores strings, we'll map icons by index or name.
const ICONS = [Monitor, ShoppingCart, Cpu, FileText, Calculator, PieChart];

function ServiceCard({ title, description, icon: Icon }: { title: string, description: string, icon: React.ElementType }) {
  return (
    <div className="group relative p-8 rounded-2xl bg-card border border-borderBase overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-accent">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-background border border-borderBase flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
          <Icon className="w-5 h-5 text-textSecondary group-hover:text-white transition-colors duration-500" />
        </div>
        <h3 className="text-lg font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[14px] text-textSecondary leading-relaxed mb-6">
          {description}
        </p>
        <button className="flex items-center gap-2 text-[13px] font-medium text-text group-hover:text-accent transition-colors duration-300">
          <span>Learn more</span>
          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const { data } = useData();
  const content = data.services;

  return (
    <section id="services" className="bg-background pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
              2
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              Core Services
            </span>
          </div>

          <h2 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-6">
            {content.section_title}
          </h2>
          
          <p className="text-[16px] sm:text-[18px] text-textSecondary max-w-2xl leading-relaxed">
            {content.section_description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-5 sm:px-8 lg:px-12">
          {content.items.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={ICONS[index % ICONS.length]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
