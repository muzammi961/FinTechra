import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import fallbackData from '../data/content.json';

export type ThemeColors = {
  background: string;
  text: string;
  textSecondary?: string;
  accent: string;
};

export type ContentData = {
  theme: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  animations: {
    fontFamily?: string;
    light?: { primaryColor?: string; textColor?: string; backgroundColor?: string };
    dark?: { primaryColor?: string; textColor?: string; backgroundColor?: string };
  };
  navbar?: {
    light: { textColor?: string };
    dark: { textColor?: string };
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
  };
  services: {
    section_title: string;
    section_description: string;
    items: { title: string; description: string }[];
  };
  about: {
    title: string;
    heading: string;
    description1: string;
    description2: string;
    stats: { value: string; label: string }[];
  };
  digitalSolutions: {
    title: string;
    heading: string;
    description: string;
    items: string[];
  };
  financialServices: {
    title: string;
    heading: string;
    description: string;
    items: string[];
  };
  whyChooseUs: {
    title: string;
    heading: string;
    description: string;
    features: { title: string; description: string }[];
  };
  howWeWork: {
    title: string;
    heading: string;
    steps: { title: string; description: string }[];
  };
  whoWeServe: {
    title: string;
    heading: string;
    description: string;
    industries: { title: string; description: string }[];
  };
  showcase: {
    title: string;
    heading: string;
    items: { title: string; color: string; image?: string }[];
  };
  contact: {
    phone1: string;
    phone2: string;
    email1: string;
    email2: string;
  };
};

type DataContextType = {
  data: ContentData;
  updateData: (newData: ContentData) => Promise<{success: boolean, error?: string}>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ContentData>(fallbackData as ContentData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const rawBinId = import.meta.env.VITE_JSONBIN_ID;
    const rawKey = import.meta.env.VITE_JSONBIN_KEY;
    const binId = rawBinId && String(rawBinId) !== 'undefined' ? String(rawBinId).trim() : '';
    const key = rawKey && String(rawKey) !== 'undefined' ? String(rawKey).trim() : '';

    if (binId && key) {
      fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
        headers: { 'X-Access-Key': key }
      })
        .then(res => {
          if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
          return res.json();
        })
        .then(response => {
          if (response.record) {
            const json = response.record as ContentData;
            setData({ ...(fallbackData as ContentData), ...json });
            applyThemeVariables(json);
            setIsLoaded(true);
          } else {
            throw new Error('No record found in JSONBin response');
          }
        })
        .catch(err => {
          console.error("Failed to load JSONBin content, using local fallback:", err);
          setData(fallbackData as ContentData);
          applyThemeVariables(fallbackData as ContentData);
          setIsLoaded(true);
        });
    } else {
      console.log("No JSONBin credentials found, using local fallback.");
      setData(fallbackData as ContentData);
      applyThemeVariables(fallbackData as ContentData);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) applyThemeVariables(data);
  }, [data.theme, data.navbar, data.animations, isLoaded]);

  const applyThemeVariables = (contentData: ContentData) => {
    const { theme, navbar } = contentData;
    if (!theme || !theme.light) return;
    document.documentElement.style.setProperty('--dynamic-bg-light', theme.light.background);
    document.documentElement.style.setProperty('--dynamic-text-light', theme.light.text);
    if (theme.light.textSecondary) document.documentElement.style.setProperty('--dynamic-textSecondary-light', theme.light.textSecondary);
    document.documentElement.style.setProperty('--dynamic-accent-light', theme.light.accent);

    if (theme.dark) {
      document.documentElement.style.setProperty('--dynamic-bg-dark', theme.dark.background);
      document.documentElement.style.setProperty('--dynamic-text-dark', theme.dark.text);
      if (theme.dark.textSecondary) document.documentElement.style.setProperty('--dynamic-textSecondary-dark', theme.dark.textSecondary);
      document.documentElement.style.setProperty('--dynamic-accent-dark', theme.dark.accent);
    }
    
    
    // Navbar
    if (navbar?.light?.textColor) {
      document.documentElement.style.setProperty('--dynamic-navbar-text-light', navbar.light.textColor);
    } else {
      document.documentElement.style.removeProperty('--dynamic-navbar-text-light');
    }
    
    if (navbar?.dark?.textColor) {
      document.documentElement.style.setProperty('--dynamic-navbar-text-dark', navbar.dark.textColor);
    } else {
      document.documentElement.style.removeProperty('--dynamic-navbar-text-dark');
    }
    
    // Animations & Hero
    if (contentData.animations?.fontFamily) {
      document.documentElement.style.setProperty('--dynamic-hero-font', contentData.animations.fontFamily);
    } else {
      document.documentElement.style.removeProperty('--dynamic-hero-font');
    }
    
    if (contentData.animations?.light?.primaryColor) {
      document.documentElement.style.setProperty('--dynamic-hero-primary-light', contentData.animations.light.primaryColor);
    } else {
      document.documentElement.style.removeProperty('--dynamic-hero-primary-light');
    }
    
    if (contentData.animations?.dark?.primaryColor) {
      document.documentElement.style.setProperty('--dynamic-hero-primary-dark', contentData.animations.dark.primaryColor);
    } else {
      document.documentElement.style.removeProperty('--dynamic-hero-primary-dark');
    }
    
    if (contentData.animations?.light?.textColor) {
      document.documentElement.style.setProperty('--dynamic-hero-text-light', contentData.animations.light.textColor);
    } else {
      document.documentElement.style.removeProperty('--dynamic-hero-text-light');
    }
    
    if (contentData.animations?.dark?.textColor) {
      document.documentElement.style.setProperty('--dynamic-hero-text-dark', contentData.animations.dark.textColor);
    } else {
      document.documentElement.style.removeProperty('--dynamic-hero-text-dark');
    }
  };

  const updateData = async (newData: ContentData): Promise<{success: boolean, error?: string}> => {
    try {
      const rawBinId = import.meta.env.VITE_JSONBIN_ID;
      const rawKey = import.meta.env.VITE_JSONBIN_KEY;
      const binId = rawBinId && String(rawBinId) !== 'undefined' ? String(rawBinId).trim() : '';
      const key = rawKey && String(rawKey) !== 'undefined' ? String(rawKey).trim() : '';
      
      const url = binId 
        ? `https://api.jsonbin.io/v3/b/${binId}` 
        : '/api/content';

      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (binId && key) {
        headers['X-Access-Key'] = key;
      }

      const response = await fetch(url, {
        method: binId ? 'PUT' : 'POST',
        headers,
        body: JSON.stringify(newData)
      });
      
      if (response.ok) {
        setData(newData);
        return { success: true };
      } else {
        const errText = await response.text();
        console.error("Save response error:", errText);
        if (!binId) {
           return { success: false, error: "Local save failed. Make sure dev server is running." };
        } else {
           return { success: false, error: `Cloud save failed (${response.status}): ${errText.substring(0, 50)}` };
        }
      }
    } catch (err: any) {
      console.error("Failed to save data:", err);
      return { success: false, error: err.message || "Network error" };
    }
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
