import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    return saved || 'system';
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    let effectiveTheme = theme;
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    root.classList.add(effectiveTheme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    if (theme !== 'system') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Sun size={18} className="text-gray-900 dark:text-white" />
        ) : theme === 'dark' ? (
          <Moon size={18} className="text-gray-900 dark:text-white" />
        ) : (
          <Monitor size={18} className="text-gray-900 dark:text-white" />
        )}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 top-full mt-2 w-36 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 py-2 z-50 overflow-hidden">
            <button
              onClick={() => { setTheme('light'); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${theme === 'light' ? 'text-accent font-medium' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
            >
              <Sun size={16} /> Light
            </button>
            <button
              onClick={() => { setTheme('dark'); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${theme === 'dark' ? 'text-accent font-medium' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
            >
              <Moon size={16} /> Dark
            </button>
            <button
              onClick={() => { setTheme('system'); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${theme === 'system' ? 'text-accent font-medium' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
            >
              <Monitor size={16} /> System
            </button>
          </div>
        </>
      )}
    </div>
  );
}
