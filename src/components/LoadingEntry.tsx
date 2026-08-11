import { useEffect, useState } from 'react';

export default function LoadingEntry({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(-1);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if we've already shown the loading screen in this session
    if (sessionStorage.getItem('hasSeenLoading')) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(reducedMotion);

    if (reducedMotion) {
      // Simplified sequence for reduced motion
      setStep(2); // Jump straight to logo + name
      
      const tFade = setTimeout(() => setStep(4), 1000);
      const tDone = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenLoading', 'true');
        onComplete();
      }, 1500);
      
      return () => { clearTimeout(tFade); clearTimeout(tDone); };
    }

    // Full Premium Sequence (max ~2.4s)
    const t0 = setTimeout(() => setStep(0), 50);    // Background & Particles start
    const t1 = setTimeout(() => setStep(1), 400);   // Logo reveal & Glow
    const t2 = setTimeout(() => setStep(2), 800);   // Company name & subtitle
    const t3 = setTimeout(() => setStep(3), 1200);  // "Build. Automate. Grow."
    const t4 = setTimeout(() => setStep(4), 2000);  // Fade out screen
    const t5 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasSeenLoading', 'true');
      onComplete();
    }, 2500); // Fully unmount and reveal hero

    return () => {
      clearTimeout(t0); clearTimeout(t1); clearTimeout(t2);
      clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out overflow-hidden ${
        step === 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Step 1 & 2: Subtle Particle / Digital Lines Background */}
      {!prefersReducedMotion && (
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          step >= 0 && step < 4 ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-base)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-base)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-10"></div>
          
          {/* Simple converging particles (CSS driven) */}
          <div className="relative w-full h-full max-w-md max-h-md">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className={`absolute w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_var(--accent)] transition-all duration-[800ms] ease-out ${
                  step === 0 
                    ? 'opacity-60 scale-100' 
                    : 'opacity-0 scale-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                }`}
                style={{
                  top: step === 0 ? `${20 + Math.random() * 60}%` : '50%',
                  left: step === 0 ? `${20 + Math.random() * 60}%` : '50%',
                  transitionDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Step 3: Logo Reveal */}
        <div className="relative flex justify-center items-center h-24">
          {/* Orange/Golden Glow */}
          <div className={`absolute w-32 h-32 bg-accent/30 rounded-full blur-2xl transition-all duration-700 ease-out ${
            step === 1 ? 'opacity-100 scale-150' : 'opacity-0 scale-50'
          }`} />

          {/* Logo */}
          <img 
            src="/logo.png" 
            alt="FinTechra Solutions" 
            className={`relative h-16 sm:h-20 object-contain drop-shadow-xl transform transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              step >= 1 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-90'
            }`} 
          />
        </div>

        {/* Step 4: Company Name & Subtitle */}
        <div className={`mt-6 text-center transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-text mb-2">
            FinTechra Solutions
          </h1>
          <p className="text-[12px] sm:text-[13px] font-medium tracking-widest text-textSecondary uppercase">
            Digital • AI • Financial Solutions
          </p>
        </div>

        {/* Step 5: Brand Line */}
        <div className={`mt-8 transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-[14px] sm:text-[15px] font-medium text-accent border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full">
            Build. Automate. Grow.
          </span>
        </div>

      </div>
    </div>
  );
}
