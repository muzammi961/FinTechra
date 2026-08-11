import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = ["Home", "About", "Services", "Solutions", "Why Us", "Process", "Industries", "Contact"];

const EASE = "cubic-bezier(0.25,0.1,0.25,1)";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const id = link.toLowerCase().replace(' ', '-');
    
    setMenuOpen(false);

    const targetPosition = id === 'home' ? 0 : (() => {
      const el = document.getElementById(id);
      return el ? el.getBoundingClientRect().top + window.scrollY : 0;
    })();

    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    
    // Dynamic duration based on distance: ~1.2s minimum, scales up to 3.5s for far sections
    const absDistance = Math.abs(distance);
    const duration = Math.min(3500, Math.max(1200, (absDistance / 1000) * 800));
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Premium cubic-bezier style ease-in-out
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 max-w-[1440px] mx-auto p-2 sm:p-3">
        <nav className="bg-card/80 backdrop-blur-md rounded-full p-[5px] flex items-center justify-between border border-borderBase shadow-sm">
          {/* LEFT */}
          <div className="flex items-center gap-6 pl-0">
            <div className="flex items-center gap-3">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="flex items-center gap-2">
                <img src="/logo.png" alt="FinTechra Solutions" className="h-8 w-8 object-cover rounded-full shadow-sm" />
              </a>
              <div className="hidden lg:flex items-center gap-6 ml-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    onClick={(e) => handleScroll(e, link)}
                    className="text-[14px] text-textSecondary hover:text-text transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - desktop */}
          <div className="hidden lg:flex items-center gap-4 pr-1">
            <ThemeToggle />
          </div>

          {/* MOBILE toggle (Visible only on small screens) */}
          <div className="lg:hidden flex items-center gap-3 pr-1">
            <ThemeToggle />
            <button
              className="flex items-center justify-center w-10 h-10 bg-text text-background rounded-full"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Deep blur overlay */}
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionTimingFunction: EASE }}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Menu items container */}
        <div
          className="absolute inset-x-0 top-20 mx-4 bg-card border border-borderBase rounded-2xl p-6 transition-all duration-500 shadow-xl"
          style={{
            transform: menuOpen ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.95)",
            opacity: menuOpen ? 1 : 0,
            transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
          }}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleScroll(e, link)}
                className="text-[16px] font-medium text-text py-3 border-b border-borderBase/50 last:border-0"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
