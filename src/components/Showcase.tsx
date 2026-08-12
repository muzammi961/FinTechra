import { useState } from "react";
import { ArrowRight, LayoutDashboard, ShoppingCart, Bot, BarChart4, Calculator, FileText, X, AlertCircle } from "lucide-react";
import { useData } from "../context/DataContext";

const ICONS = [LayoutDashboard, ShoppingCart, Bot, BarChart4, Calculator, FileText];

function MockupCard({ title, icon: Icon, color, delay, onClick }: { title: string, icon: React.ElementType, color: string, delay: string, onClick: () => void }) {
  return (
    <div className="group flex flex-col gap-4">
      <div 
        onClick={onClick}
        className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-borderBase flex items-center justify-center cursor-pointer transition-all duration-500 hover:border-accent hover:shadow-xl`}
      >
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
  const { data } = useData();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [toast, setToast] = useState<{message: string} | null>(null);

  const showToast = (message: string) => {
    setToast({ message });
    setTimeout(() => setToast(null), 3000);
  };

  const content = data.showcase;

  return (
    <section id="solutions" className="bg-background pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          
          <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            {content.title}
          </span>
        </div>

        <h2 className="hero-heading px-5 sm:px-8 lg:px-12 font-medium leading-[1.08] tracking-[-0.03em] text-text mb-10 sm:mb-14 lg:mb-16 max-w-3xl">
          {content.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-5 sm:px-8 lg:px-12">
          {content.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <MockupCard 
                key={index} 
                title={item.title} 
                icon={Icon} 
                color={item.color} 
                delay={`${index * 100}ms`} 
                onClick={() => {
                  if (item.image) {
                    setSelectedImage(item.image);
                  } else {
                    showToast("No demo image provided for this solution. Please add an image URL in the Admin Dashboard.");
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Solution Demo" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg border border-red-500/20 bg-red-500/10 text-red-400 backdrop-blur-md animate-fade-in transition-all duration-300">
          <AlertCircle size={20} className="text-red-500 shrink-0" />
          <span className="font-medium text-[15px]">{toast.message}</span>
        </div>
      )}
    </section>
  );
}
