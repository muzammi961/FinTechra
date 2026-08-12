import { useState, useEffect } from "react";
import { MessageSquare, LayoutTemplate, Code, Headset, CircleDot } from "lucide-react";
import { useData } from "../context/DataContext";

const ICONS = [MessageSquare, LayoutTemplate, Code, Headset, CircleDot];

export default function HowWeWork() {
  const { data } = useData();
  const content = data.howWeWork;
  const steps = content.steps || [];

  const [activeStep, setActiveStep] = useState(0);

  // Auto-rotation for the animated process effect
  useEffect(() => {
    if (steps.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  if (steps.length === 0) {
    return null;
  }

  // Calculate rotation angle dynamically based on total steps
  const rotationDegrees = 360 / steps.length;

  return (
    <section id="process" className="bg-background pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            
            <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              {content.title}
            </span>
          </div>

          <h2 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-6">
            {content.heading}
          </h2>
        </div>

        <div className="px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Steps List */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const Icon = ICONS[index % ICONS.length];
                const num = (index + 1).toString().padStart(2, "0");
                
                return (
                  <div 
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-card border-accent shadow-md' 
                        : 'bg-transparent border-transparent hover:bg-card/50 hover:border-borderBase'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive ? 'bg-accent text-white' : 'bg-card border border-borderBase text-textSecondary'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className={`text-sm font-bold ${isActive ? 'text-accent' : 'text-textSecondary'}`}>
                            {num}
                          </span>
                          <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                            isActive ? 'text-text' : 'text-textSecondary'
                          }`}>
                            {step.title}
                          </h3>
                        </div>
                        <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                          isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                        }`}>
                          <p className="min-h-0 text-[15px] text-textSecondary">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Representation */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-card rounded-3xl border border-borderBase">
              <div className="relative w-full max-w-md aspect-square rounded-full border border-dashed border-borderBase flex items-center justify-center">
                {/* Central Hub */}
                <div className="w-32 h-32 rounded-full bg-background border border-borderBase shadow-sm flex items-center justify-center z-10 transition-transform duration-500">
                  <div className="text-center">
                    <span className="text-accent font-bold text-3xl">{(activeStep + 1).toString().padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Rotating Indicator */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{ transform: `rotate(${activeStep * rotationDegrees}deg)` }}
                >
                  <div 
                    className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30 text-white transform transition-transform duration-700 ease-in-out"
                    style={{ transform: `rotate(-${activeStep * rotationDegrees}deg)` }}
                  >
                    {(() => {
                       const ActiveIcon = ICONS[activeStep % ICONS.length];
                       return <ActiveIcon className="w-5 h-5" />;
                    })()}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
