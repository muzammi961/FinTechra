import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

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

const defaultData: ContentData = {
  theme: {
    light: { background: "#ffffff", text: "#1a1a1a", textSecondary: "#4b5563", accent: "#F58220" },
    dark: { background: "#000B18", text: "#ffffff", textSecondary: "#9ca3af", accent: "#F58220" }
  },
  animations: {
    fontFamily: "",
    light: { primaryColor: "#F58220", textColor: "", backgroundColor: "#ffffff" },
    dark: { primaryColor: "#F58220", textColor: "", backgroundColor: "#0B1120" }
  },
  navbar: {
    light: { textColor: "" },
    dark: { textColor: "" }
  },
  hero: { subtitle: "", title: "", description: "" },
  services: { section_title: "", section_description: "", items: [] },
  about: { title: "", heading: "", description1: "", description2: "", stats: [] },
  digitalSolutions: { title: "", heading: "", description: "", items: [] },
  financialServices: { title: "", heading: "", description: "", items: [] },
  whyChooseUs: { title: "", heading: "", description: "", features: [] },
  howWeWork: { title: "", heading: "", steps: [] },
  whoWeServe: { title: "", heading: "", description: "", industries: [] },
  showcase: { title: "", heading: "", items: [] },
  contact: { phone1: "", phone2: "", email1: "", email2: "" }
};

type DataContextType = {
  data: ContentData;
  updateData: (newData: ContentData) => Promise<boolean>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ContentData>(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('/src/data/content.json')
      .then(res => res.json())
      .then((json: ContentData) => {
        setData({ ...defaultData, ...json }); // Merge in case JSON is missing fields
        applyThemeVariables(json);
        setIsLoaded(true);
      })
      .catch(err => console.error("Failed to load content.json:", err));
  }, []);

  useEffect(() => {
    if (isLoaded) applyThemeVariables(data);
  }, [data.theme, data.navbar, isLoaded]);

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

  const updateData = async (newData: ContentData) => {
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
      });
      if (response.ok) {
        setData(newData);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Failed to save data:", err);
      return false;
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
