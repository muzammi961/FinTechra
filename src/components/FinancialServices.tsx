import { FileText, Settings, ShieldCheck, CheckCircle2, Calculator, PieChart } from "lucide-react";

export default function FinancialServices() {
  return (
    <section className="bg-background pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
                4
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                Financial Operations
              </span>
            </div>

            <h2 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-8">
              Business & Financial Services
            </h2>
            
            <p className="text-[16px] sm:text-[18px] text-textSecondary leading-relaxed mb-10">
              Keep your business compliant and your finances organized. We provide reliable support for essential financial operations so you can focus on growth.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-card border border-borderBase flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <PieChart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-text mb-1">Accounting & Bookkeeping</h4>
                  <p className="text-[14px] text-textSecondary">Organize your financial records and maintain your books.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-card border border-borderBase flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-text mb-1">GST Registration & Filing</h4>
                  <p className="text-[14px] text-textSecondary">Professional support to help manage your GST requirements.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-card border border-borderBase flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <Calculator className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-text mb-1">Income Tax Return (ITR) Filing</h4>
                  <p className="text-[14px] text-textSecondary">Reliable income tax return filing for individuals and businesses.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square max-w-[500px] mx-auto relative">
              {/* Central Circle */}
              <div className="absolute inset-0 m-auto w-64 h-64 rounded-full border border-borderBase bg-card shadow-sm flex items-center justify-center z-10">
                <div className="text-center">
                  <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-3" />
                  <span className="text-sm font-semibold tracking-widest text-text uppercase">Compliant</span>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                
                {/* Documents */}
                <div className="absolute top-0 left-1/2 -ml-8 -mt-8 w-16 h-16 bg-background border border-borderBase rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 animate-[spin_20s_linear_infinite_reverse]">
                  <FileText className="w-6 h-6 text-textSecondary" />
                  <span className="text-[9px] font-medium text-textSecondary">Docs</span>
                </div>
                
                {/* Processing */}
                <div className="absolute top-1/2 right-0 -mr-8 -mt-8 w-16 h-16 bg-background border border-borderBase rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 animate-[spin_20s_linear_infinite_reverse]">
                  <Settings className="w-6 h-6 text-accent animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="text-[9px] font-medium text-textSecondary">Process</span>
                </div>

                {/* Completed */}
                <div className="absolute bottom-0 left-1/2 -ml-8 -mb-8 w-16 h-16 bg-background border border-borderBase rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 animate-[spin_20s_linear_infinite_reverse]">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="text-[9px] font-medium text-textSecondary">Done</span>
                </div>

                {/* Verification */}
                <div className="absolute top-1/2 left-0 -ml-8 -mt-8 w-16 h-16 bg-background border border-borderBase rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 animate-[spin_20s_linear_infinite_reverse]">
                  <ShieldCheck className="w-6 h-6 text-blue-500" />
                  <span className="text-[9px] font-medium text-textSecondary">Verify</span>
                </div>

              </div>

              {/* Connecting dashed circle */}
              <div className="absolute inset-8 rounded-full border border-dashed border-borderBase"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
