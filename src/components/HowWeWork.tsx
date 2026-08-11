import { useState, useEffect } from "react";
import { MessageSquare, LayoutTemplate, Code, Headset } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Understand",
    description: "Understand your business, goals and requirements.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Plan",
    description: "Define the right technology or service solution.",
    icon: LayoutTemplate,
  },
  {
    num: "03",
    title: "Build & Implement",
    description: "Develop, configure and implement the solution.",
    icon: Code,
  },
  {
    num: "04",
    title: "Support",
    description: "Provide continued assistance and improvements.",
    icon: Headset,
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  // Simple auto-rotation for the animated process effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
              6
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              Process
            </span>
          </div>

          <h2 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-6">
            How We Work
          </h2>
        </div>

        <div className="px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Steps List */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
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
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className={`text-sm font-bold ${isActive ? 'text-accent' : 'text-textSecondary'}`}>
                            {step.num}
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
                    <span className="text-accent font-bold text-3xl">{steps[activeStep].num}</span>
                  </div>
                </div>

                {/* Rotating Indicator */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{ transform: `rotate(${activeStep * 90}deg)` }}
                >
                  <div className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30 text-white transform -rotate-0">
                    {activeStep === 0 && <MessageSquare className="w-5 h-5" />}
                    {activeStep === 1 && <LayoutTemplate className="w-5 h-5 -rotate-90" />}
                    {activeStep === 2 && <Code className="w-5 h-5 rotate-180" />}
                    {activeStep === 3 && <Headset className="w-5 h-5 rotate-90" />}
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
