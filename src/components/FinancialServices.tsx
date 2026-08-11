import { CheckCircle2, FileText, Calculator, Landmark, BookOpen, LineChart, Shield } from "lucide-react";
import { useData } from "../context/DataContext";

const ICONS = [FileText, Calculator, Landmark, BookOpen, LineChart, Shield];

export default function FinancialServices() {
  const { data } = useData();
  const content = data.financialServices;

  return (
    <section id="financial-services" className="bg-card pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
                5
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                {content.title}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-text mb-6 sm:mb-8 leading-tight">
              {content.heading}
            </h2>

            <p className="text-[15px] sm:text-[16px] text-textSecondary leading-relaxed mb-8">
              {content.description}
            </p>

            <ul className="space-y-4">
              {["100% Compliance Guaranteed", "Timely Filing & Reporting", "Expert Advisory Support"].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-[15px] text-text">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {content.items.map((item, idx) => {
                const Icon = ICONS[idx % ICONS.length];
                return (
                  <div key={idx} className="group p-6 rounded-2xl bg-background border border-borderBase hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-full bg-card border border-borderBase flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent transition-colors">
                      <Icon size={18} className="text-textSecondary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-semibold text-text mb-2">{item}</h4>
                    <p className="text-[13px] text-textSecondary leading-relaxed">
                      Accurate and reliable support.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
