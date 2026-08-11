import { useEffect, useState } from "react";
import { ArrowRight, Clock, Menu, X } from "lucide-react";

const NAV_LINKS = ["Projects", "Studio", "Journal", "Connect"];

const EASE = "cubic-bezier(0.25,0.1,0.25,1)";

function useLondonTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/London",
      }).format(new Date());
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const time = useLondonTime();

  return (
    <>
      <div className="max-w-[1440px] mx-auto p-2 sm:p-3">
        <nav className="bg-white rounded-full p-[5px] flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-6 pl-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">
                  AX
                </span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - desktop */}
          <div className="hidden md:flex items-center gap-5 pr-1">
            <span className="hidden lg:inline text-[13px] text-gray-600">
              Taking on projects for Q1 2026
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              {time} in London
            </span>
            <button className="group flex items-center gap-3 bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2">
              <span className="flex flex-col overflow-hidden h-[20px]">
                <span
                  className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
                  style={{ transitionTimingFunction: EASE }}
                >
                  <span className="block h-[20px] leading-[20px]">
                    Book a strategy call
                  </span>
                  <span className="block h-[20px] leading-[20px]">
                    Book a strategy call
                  </span>
                </span>
              </span>
              <span
                className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:-rotate-45"
                style={{ transitionTimingFunction: EASE }}
              >
                <ArrowRight size={12} className="text-gray-900" />
              </span>
            </button>
          </div>

          {/* MOBILE toggle */}
          <button
            className="md:hidden flex items-center gap-2 bg-gray-900 text-white rounded-full pl-4 pr-3 py-2.5 text-[13px] font-medium"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionTimingFunction: EASE }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute inset-x-0 bottom-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500"
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(100%)",
            transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
          }}
        >
          <div className="flex items-center gap-1.5 text-[13px] text-gray-600 mb-8">
            <Clock size={14} />
            {time} in London
          </div>
          <div className="flex flex-col gap-1 mb-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[28px] sm:text-[32px] font-medium text-gray-900 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
          <button className="group w-full flex items-center justify-between gap-3 bg-gray-900 text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-3">
            <span className="flex flex-col overflow-hidden h-[20px]">
              <span
                className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
                style={{ transitionTimingFunction: EASE }}
              >
                <span className="block h-[20px] leading-[20px]">
                  Start a project
                </span>
                <span className="block h-[20px] leading-[20px]">
                  Start a project
                </span>
              </span>
            </span>
            <span
              className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:-rotate-45"
              style={{ transitionTimingFunction: EASE }}
            >
              <ArrowRight size={13} className="text-gray-900" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
