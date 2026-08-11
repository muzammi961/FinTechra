import { Monitor, Smartphone, LayoutDashboard, ShoppingBag, ShoppingCart, CreditCard, Package, Users, Database, Cpu, Zap, BarChart3, ArrowRight } from "lucide-react";

const FlowArrow = () => (
  <ArrowRight className="w-5 h-5 text-accent opacity-50 mx-2 hidden sm:block" />
);

export default function DigitalSolutions() {
  return (
    <section id="solutions" className="bg-card pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-10 sm:mb-16">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
            3
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Digital Solutions
          </span>
        </div>

        <h2 className="px-5 sm:px-8 lg:px-12 hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-12 sm:mb-16 lg:mb-24">
          Digital Solutions That Move Your Business Forward
        </h2>

        <div className="px-5 sm:px-8 lg:px-12 flex flex-col gap-16 lg:gap-24">
          
          {/* Block 01 */}
          <div className="group relative rounded-3xl bg-background border border-borderBase p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 z-10">
                <span className="text-accent font-bold tracking-widest text-sm mb-4 block">01</span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-text mb-4">Custom Website Development</h3>
                <p className="text-textSecondary leading-relaxed">
                  Modern, responsive and high-performance websites designed specifically for your business. We build digital experiences that work seamlessly across all devices.
                </p>
              </div>
              <div className="w-full lg:w-2/3 relative flex justify-center lg:justify-end items-center gap-6 z-10">
                {/* Visual Representation */}
                <div className="w-48 h-64 bg-card rounded-xl border border-borderBase shadow-lg flex flex-col overflow-hidden transform transition-transform group-hover:-translate-y-4 duration-500">
                  <div className="h-8 bg-background border-b border-borderBase flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-3">
                    <div className="h-4 bg-background rounded-full w-2/3"></div>
                    <div className="h-4 bg-background rounded-full w-full"></div>
                    <div className="h-4 bg-background rounded-full w-5/6"></div>
                    <Monitor className="w-12 h-12 text-accent opacity-20 self-center mt-auto mb-4" />
                  </div>
                </div>
                
                <div className="w-32 h-48 bg-card rounded-xl border border-borderBase shadow-lg flex flex-col overflow-hidden transform translate-y-8 transition-transform group-hover:translate-y-4 duration-500 delay-75">
                  <div className="flex-1 p-4 flex flex-col gap-3 justify-center items-center">
                    <Smartphone className="w-10 h-10 text-accent opacity-50" />
                    <div className="h-2 bg-background rounded-full w-full"></div>
                    <div className="h-2 bg-background rounded-full w-4/5"></div>
                  </div>
                </div>

                <div className="w-40 h-56 bg-card rounded-xl border border-borderBase shadow-lg flex flex-col overflow-hidden transform -translate-y-4 transition-transform group-hover:-translate-y-8 duration-500 delay-150 hidden sm:flex">
                  <div className="flex-1 p-4 flex flex-col gap-3 justify-center items-center">
                    <LayoutDashboard className="w-12 h-12 text-accent opacity-50" />
                    <div className="grid grid-cols-2 gap-2 w-full mt-4">
                      <div className="h-8 bg-background rounded-md"></div>
                      <div className="h-8 bg-background rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700"></div>
          </div>

          {/* Block 02 */}
          <div className="group relative rounded-3xl bg-background border border-borderBase p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/3 z-10">
                <span className="text-accent font-bold tracking-widest text-sm mb-4 block">02</span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-text mb-4">E-Commerce Solutions</h3>
                <p className="text-textSecondary leading-relaxed">
                  Complete e-commerce solutions that help businesses sell, manage orders and grow online. A seamless journey from discovery to delivery.
                </p>
              </div>
              <div className="w-full lg:w-2/3 relative z-10 overflow-x-auto pb-4 sm:pb-0">
                {/* Visual Journey */}
                <div className="flex items-center justify-between min-w-[600px] bg-card p-6 rounded-2xl border border-borderBase shadow-sm">
                  <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm">
                      <ShoppingBag className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-[11px] font-medium text-textSecondary uppercase">Product</span>
                  </div>
                  <FlowArrow />
                  <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition-transform duration-300 delay-75">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm">
                      <ShoppingCart className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-[11px] font-medium text-textSecondary uppercase">Cart</span>
                  </div>
                  <FlowArrow />
                  <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition-transform duration-300 delay-150">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm">
                      <CreditCard className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-[11px] font-medium text-textSecondary uppercase">Checkout</span>
                  </div>
                  <FlowArrow />
                  <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition-transform duration-300 delay-200">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm">
                      <Package className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-[11px] font-medium text-textSecondary uppercase">Order</span>
                  </div>
                  <FlowArrow />
                  <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition-transform duration-300 delay-300">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-md shadow-accent/20">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-textSecondary uppercase">Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 03 */}
          <div className="group relative rounded-3xl bg-background border border-borderBase p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 z-10">
                <span className="text-accent font-bold tracking-widest text-sm mb-4 block">03</span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-text mb-4">AI-Powered Web Solutions</h3>
                <p className="text-textSecondary leading-relaxed">
                  Integrate AI into your website and business processes to automate tasks, improve customer experiences and work smarter.
                </p>
              </div>
              <div className="w-full lg:w-2/3 relative z-10 overflow-x-auto pb-4 sm:pb-0">
                {/* Visual Journey */}
                <div className="flex items-center justify-between min-w-[600px] bg-card p-6 rounded-2xl border border-borderBase shadow-sm">
                  <div className="flex flex-col items-center gap-3 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-background border border-borderBase flex items-center justify-center">
                      <Database className="w-6 h-6 text-textSecondary" />
                    </div>
                    <span className="text-[12px] font-medium text-text">Data</span>
                  </div>
                  
                  <div className="flex-1 h-px bg-borderBase mx-4 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-accent opacity-50 group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 group-hover:-translate-y-2 transition-transform duration-300 delay-100">
                    <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/30 animate-pulse">
                      <Cpu className="w-8 h-8" />
                    </div>
                    <span className="text-[12px] font-bold text-accent">AI Core</span>
                  </div>
                  
                  <div className="flex-1 h-px bg-borderBase mx-4 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-accent opacity-50 group-hover:translate-x-full transition-transform duration-1000 delay-100 ease-in-out"></div>
                  </div>
                  
                  <div className="flex flex-col gap-4 group-hover:-translate-y-2 transition-transform duration-300 delay-200">
                    <div className="flex items-center gap-3 bg-background border border-borderBase px-4 py-2 rounded-xl">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span className="text-[12px] font-medium text-text">Smart Actions</span>
                    </div>
                    <div className="flex items-center gap-3 bg-background border border-borderBase px-4 py-2 rounded-xl">
                      <BarChart3 className="w-4 h-4 text-green-500" />
                      <span className="text-[12px] font-medium text-text">Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
