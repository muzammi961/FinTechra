import { ArrowRight, LayoutDashboard, ShoppingCart, Bot, BarChart4, Calculator, FileText } from "lucide-react";

function MockupCard({ title, icon: Icon, color, delay }: { title: string, icon: React.ElementType, color: string, delay: string }) {
  return (
    <div className="group flex flex-col gap-4">
      <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-borderBase flex items-center justify-center cursor-pointer transition-all duration-500 hover:border-accent hover:shadow-xl`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '24px 24px',
          color: color
        }}></div>
        
        {/* Central Icon container */}
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-700 group-hover:scale-110`} style={{ backgroundColor: color, animationDelay: delay }}>
          <Icon className="w-10 h-10 text-white" />
        </div>

        {/* Hover Reveal Button */}
        <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[130px] bg-background border border-borderBase rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out px-0 group-hover:px-3 shadow-md">
          <span className="flex items-center justify-center gap-2 w-full whitespace-nowrap">
            <span className="text-[13px] font-medium text-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              View Demo
            </span>
            <ArrowRight
              size={14}
              className="text-text shrink-0 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
            />
          </span>
        </div>
      </div>
      <p className="text-[15px] font-semibold text-text px-1">
        {title}
      </p>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="solutions" className="bg-background pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
            8
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Interactive Showcase
          </span>
        </div>

        <h2 className="hero-heading px-5 sm:px-8 lg:px-12 font-medium leading-[1.08] tracking-[-0.03em] text-text mb-10 sm:mb-14 lg:mb-16 max-w-3xl">
          See our solutions in action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-5 sm:px-8 lg:px-12">
          <MockupCard title="Modern Business Website" icon={LayoutDashboard} color="#F26522" delay="0ms" />
          <MockupCard title="E-Commerce Storefront" icon={ShoppingCart} color="#3b82f6" delay="100ms" />
          <MockupCard title="AI Customer Assistant" icon={Bot} color="#8b5cf6" delay="200ms" />
          <MockupCard title="Business Analytics Dashboard" icon={BarChart4} color="#10b981" delay="300ms" />
          <MockupCard title="Accounting Portal" icon={Calculator} color="#f59e0b" delay="400ms" />
          <MockupCard title="Financial Document Manager" icon={FileText} color="#ef4444" delay="500ms" />
        </div>
      </div>
    </section>
  );
}
