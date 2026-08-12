import { useState, useEffect } from "react";
import { useData } from "../context/DataContext";
import { Trash2, Plus, Menu, X } from "lucide-react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { data, updateData } = useData();
  const [formData, setFormData] = useState(data);
  const [isSaving, setIsSaving] = useState(false);
  
  const [activeTab, setActiveTab] = useState("Theme");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    "Theme", "Animations", "Hero", "Navbar", "Services", "About", "Digital Solutions", 
    "Financial Services", "Why Choose Us", "How We Work", "Who We Serve", "Showcase", "Contact"
  ];

  useEffect(() => {
    if (sessionStorage.getItem('adminAuth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "fintechrasolutions@gmail.com" && password === "fintech20033") {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
    } else {
      setError("Invalid credentials");
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    const success = await updateData(formData);
    setIsSaving(false);
    if (success) {
      alert("Settings saved successfully!");
    } else {
      alert("Failed to save settings. Make sure you are running the dev server.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  // Helper for deep state updates
  const updateField = (path: string[], value: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData;
      for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = Array.isArray(current[path[i]]) ? [...current[path[i]]] : { ...current[path[i]] };
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  // Array Add/Delete Helpers
  const addArrayItem = (path: string[], emptyItem: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData;
      for (let i = 0; i < path.length; i++) {
        if (i === path.length - 1) {
          current[path[i]] = [...current[path[i]], emptyItem];
        } else {
          current[path[i]] = { ...current[path[i]] };
          current = current[path[i]];
        }
      }
      return newData;
    });
  };

  const removeArrayItem = (path: string[], index: number) => {
    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData;
      for (let i = 0; i < path.length; i++) {
        if (i === path.length - 1) {
          current[path[i]] = current[path[i]].filter((_: any, idx: number) => idx !== index);
        } else {
          current[path[i]] = { ...current[path[i]] };
          current = current[path[i]];
        }
      }
      return newData;
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-md w-full mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-text tracking-tight">FinTechra CMS</h2>
            <p className="mt-3 text-textSecondary text-lg">Secure Admin Portal</p>
          </div>

          <div className="bg-card/60 backdrop-blur-xl border border-borderBase py-10 px-6 sm:px-10 shadow-2xl rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-semibold text-text mb-1">Email address</label>
                <input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  className="block w-full border-borderBase bg-background/50 backdrop-blur-sm text-text rounded-lg p-3 border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" 
                  placeholder="admin@fintechra.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-1">Password</label>
                <input 
                  type="password" 
                  required 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  className="block w-full border-borderBase bg-background/50 backdrop-blur-sm text-text rounded-lg p-3 border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" 
                  placeholder="••••••••"
                />
              </div>
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg flex items-center justify-center">
                  {error}
                </div>
              )}
              
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-accent text-white font-semibold rounded-lg hover:bg-accentHover shadow-lg shadow-accent/30 transition-all transform hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Theme":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-text mb-4">Theme Colors</h3>
            {['light', 'dark'].map((mode) => (
              <div key={mode}>
                <h4 className="text-sm font-bold text-textSecondary uppercase mb-3">{mode} Mode</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {['background', 'text', 'textSecondary', 'accent'].map((key) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-text capitalize">{key === 'textSecondary' ? 'Small Text' : key}</label>
                      <div className="mt-1 flex gap-2">
                        <input type="color" value={(formData.theme as any)[mode][key] || '#000000'} onChange={e => updateField(['theme', mode, key], e.target.value)} className="h-8 w-8 cursor-pointer" />
                        <input type="text" value={(formData.theme as any)[mode][key] || ''} onChange={e => updateField(['theme', mode, key], e.target.value)} className="block w-full border-borderBase border p-1 rounded bg-background text-text" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "Animations":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Animations & Home Page Styling</h3>
            <p className="text-sm text-textSecondary mb-4">Choose the styling for the Home Page text and WebGL background animation.</p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-text">Hero Font Family</label>
              <div className="mt-1">
                <select value={formData.animations?.fontFamily || ""} onChange={e => updateField(['animations', 'fontFamily'], e.target.value)} className="bg-background text-text border-borderBase border p-2 rounded w-full">
                  <option value="">Default Theme Font</option>
                  <option value="'Inter', sans-serif">Inter</option>
                  <option value="'Roboto', sans-serif">Roboto</option>
                  <option value="'Outfit', sans-serif">Outfit</option>
                  <option value="'Playfair Display', serif">Playfair Display</option>
                  <option value="'Montserrat', sans-serif">Montserrat</option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="'Space Grotesk', sans-serif">Space Grotesk</option>
                  <option value="'Plus Jakarta Sans', sans-serif">Plus Jakarta Sans</option>
                </select>
              </div>
            </div>

            {['light', 'dark'].map((mode) => (
              <div key={mode} className="border-t border-borderBase pt-4">
                <h4 className="text-sm font-bold text-textSecondary uppercase mb-3">{mode} Mode</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text">Animation Background Color</label>
                    <div className="mt-1 flex items-center gap-2">
                      <input type="color" value={(formData.animations as any)?.[mode]?.backgroundColor || (mode === 'dark' ? "#0B1120" : "#ffffff")} onChange={e => updateField(['animations', mode, 'backgroundColor'], e.target.value)} className="h-10 w-10 cursor-pointer border-borderBase rounded" />
                      <input type="text" value={(formData.animations as any)?.[mode]?.backgroundColor || (mode === 'dark' ? "#0B1120" : "#ffffff")} onChange={e => updateField(['animations', mode, 'backgroundColor'], e.target.value)} className="bg-background text-text border-borderBase border p-2 rounded w-48" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text">Primary Animation Color</label>
                    <div className="mt-1 flex items-center gap-2">
                      <input type="color" value={(formData.animations as any)?.[mode]?.primaryColor || "#F58220"} onChange={e => updateField(['animations', mode, 'primaryColor'], e.target.value)} className="h-10 w-10 cursor-pointer border-borderBase rounded" />
                      <input type="text" value={(formData.animations as any)?.[mode]?.primaryColor || "#F58220"} onChange={e => updateField(['animations', mode, 'primaryColor'], e.target.value)} className="bg-background text-text border-borderBase border p-2 rounded w-48" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text">Hero Text Color</label>
                    <div className="mt-1 flex items-center gap-2">
                      <input type="color" value={(formData.animations as any)?.[mode]?.textColor || "#111827"} onChange={e => updateField(['animations', mode, 'textColor'], e.target.value)} className="h-10 w-10 cursor-pointer border-borderBase rounded" />
                      <input type="text" value={(formData.animations as any)?.[mode]?.textColor || ""} onChange={e => updateField(['animations', mode, 'textColor'], e.target.value)} className="bg-background text-text border-borderBase border p-2 rounded w-48" placeholder="e.g. #ffffff or empty" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "Navbar":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Navbar Customization</h3>
            <p className="text-sm text-textSecondary mb-4">Customize the text colors used inside the top navigation bar for both Light and Dark modes.</p>
            {['light', 'dark'].map((mode) => (
              <div key={mode}>
                <h4 className="text-sm font-bold text-textSecondary uppercase mb-3">{mode} Mode</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text">Navbar Text Color</label>
                    <div className="mt-1 flex items-center gap-2">
                      <input type="color" value={(formData.navbar as any)?.[mode]?.textColor || "#4b5563"} onChange={e => updateField(['navbar', mode, 'textColor'], e.target.value)} className="h-10 w-10 cursor-pointer border-borderBase rounded" />
                      <input type="text" value={(formData.navbar as any)?.[mode]?.textColor || ""} onChange={e => updateField(['navbar', mode, 'textColor'], e.target.value)} className="bg-background text-text border-borderBase border p-2 rounded w-48" placeholder="e.g. #4b5563 or empty for default" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "Hero":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Hero Section</h3>
            {['subtitle', 'title'].map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-text capitalize">{key}</label>
                <input type="text" value={(formData.hero as any)[key]} onChange={e => updateField(['hero', key], e.target.value)} className="mt-1 block w-full border-borderBase border p-2 rounded" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-text">Description</label>
              <textarea rows={3} value={formData.hero.description} onChange={e => updateField(['hero', 'description'], e.target.value)} className="mt-1 block w-full border-borderBase border p-2 rounded" />
            </div>
          </div>
        );
      case "Services":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Services Section</h3>
            <input type="text" value={formData.services.section_title} onChange={e => updateField(['services', 'section_title'], e.target.value)} className="block w-full border p-2 rounded mb-2" placeholder="Section Title" />
            <textarea value={formData.services.section_description} onChange={e => updateField(['services', 'section_description'], e.target.value)} className="block w-full border p-2 rounded" placeholder="Section Description" />
            
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-medium">Service Cards</h4>
              <button onClick={() => addArrayItem(['services', 'items'], {title: "New Service", description: "Description here"})} className="flex items-center gap-1 text-sm bg-accent/10 text-accent px-3 py-1 rounded hover:bg-accent/20">
                <Plus size={16} /> Add Card
              </button>
            </div>
            {formData.services.items.map((item, idx) => (
              <div key={idx} className="p-4 border rounded bg-background space-y-2 relative">
                <button onClick={() => removeArrayItem(['services', 'items'], idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                <input type="text" value={item.title} onChange={e => updateField(['services', 'items', idx.toString(), 'title'], e.target.value)} className="block w-full border p-2 rounded pr-8" placeholder="Title" />
                <textarea value={item.description} onChange={e => updateField(['services', 'items', idx.toString(), 'description'], e.target.value)} className="block w-full border p-2 rounded" placeholder="Description" />
              </div>
            ))}
          </div>
        );
      case "About":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">About Section</h3>
            <input type="text" value={formData.about.title} onChange={e => updateField(['about', 'title'], e.target.value)} className="block w-full border p-2 rounded" placeholder="Title" />
            <input type="text" value={formData.about.heading} onChange={e => updateField(['about', 'heading'], e.target.value)} className="block w-full border p-2 rounded" placeholder="Heading" />
            <textarea value={formData.about.description1} onChange={e => updateField(['about', 'description1'], e.target.value)} className="block w-full border p-2 rounded" />
            <textarea value={formData.about.description2} onChange={e => updateField(['about', 'description2'], e.target.value)} className="block w-full border p-2 rounded" />
            
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-medium">Stats</h4>
              <button onClick={() => addArrayItem(['about', 'stats'], {value: "100+", label: "New Stat"})} className="flex items-center gap-1 text-sm bg-accent/10 text-accent px-3 py-1 rounded hover:bg-accent/20">
                <Plus size={16} /> Add Stat
              </button>
            </div>
            {formData.about.stats.map((stat, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input type="text" value={stat.value} onChange={e => updateField(['about', 'stats', idx.toString(), 'value'], e.target.value)} className="border p-2 rounded w-1/4" placeholder="Value" />
                <input type="text" value={stat.label} onChange={e => updateField(['about', 'stats', idx.toString(), 'label'], e.target.value)} className="border p-2 rounded flex-1" placeholder="Label" />
                <button onClick={() => removeArrayItem(['about', 'stats'], idx)} className="text-red-500 hover:text-red-700 p-2"><Trash2 size={18} /></button>
              </div>
            ))}
          </div>
        );
      case "Digital Solutions":
      case "Financial Services":
        const keyMap = activeTab === "Digital Solutions" ? "digitalSolutions" : "financialServices";
        const sectionData = formData[keyMap] as any;
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{activeTab}</h3>
            <input type="text" value={sectionData.title} onChange={e => updateField([keyMap, 'title'], e.target.value)} className="block w-full border p-2 rounded" />
            <input type="text" value={sectionData.heading} onChange={e => updateField([keyMap, 'heading'], e.target.value)} className="block w-full border p-2 rounded" />
            <textarea value={sectionData.description} onChange={e => updateField([keyMap, 'description'], e.target.value)} className="block w-full border p-2 rounded" />
            
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-medium">List Items</h4>
              <button onClick={() => addArrayItem([keyMap, 'items'], "New Item")} className="flex items-center gap-1 text-sm bg-accent/10 text-accent px-3 py-1 rounded hover:bg-accent/20">
                <Plus size={16} /> Add Item
              </button>
            </div>
            {sectionData.items.map((item: string, idx: number) => (
              <div key={idx} className="flex gap-2 items-center">
                <input type="text" value={item} onChange={e => updateField([keyMap, 'items', idx.toString()], e.target.value)} className="block w-full border p-2 rounded flex-1" />
                <button onClick={() => removeArrayItem([keyMap, 'items'], idx)} className="text-red-500 hover:text-red-700 p-2"><Trash2 size={18} /></button>
              </div>
            ))}
          </div>
        );
      case "Why Choose Us":
      case "How We Work":
        const hwKey = activeTab === "Why Choose Us" ? "whyChooseUs" : "howWeWork";
        const hwData = formData[hwKey] as any;
        const listKey = activeTab === "Why Choose Us" ? "features" : "steps";
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{activeTab}</h3>
            <input type="text" value={hwData.title} onChange={e => updateField([hwKey, 'title'], e.target.value)} className="block w-full border p-2 rounded" />
            <input type="text" value={hwData.heading} onChange={e => updateField([hwKey, 'heading'], e.target.value)} className="block w-full border p-2 rounded" />
            {hwData.description !== undefined && (
              <textarea value={hwData.description} onChange={e => updateField([hwKey, 'description'], e.target.value)} className="block w-full border p-2 rounded" />
            )}
            
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-medium">Cards</h4>
              <button onClick={() => addArrayItem([hwKey, listKey], {title: "New Item", description: "Description here"})} className="flex items-center gap-1 text-sm bg-accent/10 text-accent px-3 py-1 rounded hover:bg-accent/20">
                <Plus size={16} /> Add Card
              </button>
            </div>
            {hwData[listKey].map((item: any, idx: number) => (
              <div key={idx} className="p-4 border rounded bg-background space-y-2 relative">
                <button onClick={() => removeArrayItem([hwKey, listKey], idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                <input type="text" value={item.title} onChange={e => updateField([hwKey, listKey, idx.toString(), 'title'], e.target.value)} className="block w-full border p-2 rounded pr-8" />
                <textarea value={item.description} onChange={e => updateField([hwKey, listKey, idx.toString(), 'description'], e.target.value)} className="block w-full border p-2 rounded" />
              </div>
            ))}
          </div>
        );
      case "Who We Serve":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Who We Serve</h3>
            <input type="text" value={formData.whoWeServe.title} onChange={e => updateField(['whoWeServe', 'title'], e.target.value)} className="block w-full border p-2 rounded" />
            <input type="text" value={formData.whoWeServe.heading} onChange={e => updateField(['whoWeServe', 'heading'], e.target.value)} className="block w-full border p-2 rounded" />
            <textarea value={formData.whoWeServe.description} onChange={e => updateField(['whoWeServe', 'description'], e.target.value)} className="block w-full border p-2 rounded" />
            
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-medium">Industries</h4>
              <button onClick={() => addArrayItem(['whoWeServe', 'industries'], { title: "New Industry", description: "Description..." })} className="flex items-center gap-1 text-sm bg-accent/10 text-accent px-3 py-1 rounded hover:bg-accent/20">
                <Plus size={16} /> Add Industry
              </button>
            </div>
            {formData.whoWeServe.industries.map((industry, idx) => (
              <div key={idx} className="p-4 border rounded bg-background space-y-2 relative">
                <button onClick={() => removeArrayItem(['whoWeServe', 'industries'], idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                <input type="text" value={industry.title} onChange={e => updateField(['whoWeServe', 'industries', idx.toString(), 'title'], e.target.value)} className="block w-full border p-2 rounded pr-8" placeholder="Title" />
                <textarea value={industry.description} onChange={e => updateField(['whoWeServe', 'industries', idx.toString(), 'description'], e.target.value)} className="block w-full border p-2 rounded" placeholder="Description" rows={2} />
              </div>
            ))}
          </div>
        );
      case "Showcase":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Showcase</h3>
            <input type="text" value={formData.showcase.title} onChange={e => updateField(['showcase', 'title'], e.target.value)} className="block w-full border p-2 rounded" />
            <input type="text" value={formData.showcase.heading} onChange={e => updateField(['showcase', 'heading'], e.target.value)} className="block w-full border p-2 rounded" />
            
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-medium">Showcase Cards</h4>
              <button onClick={() => addArrayItem(['showcase', 'items'], {title: "New Showcase", color: "#3b82f6", image: ""})} className="flex items-center gap-1 text-sm bg-accent/10 text-accent px-3 py-1 rounded hover:bg-accent/20">
                <Plus size={16} /> Add Card
              </button>
            </div>
            {formData.showcase.items.map((item, idx) => (
              <div key={idx} className="p-4 border rounded bg-background space-y-3 relative">
                <button onClick={() => removeArrayItem(['showcase', 'items'], idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                <div className="flex items-center gap-4 pr-8">
                  <input type="color" value={item.color} onChange={e => updateField(['showcase', 'items', idx.toString(), 'color'], e.target.value)} className="h-10 w-10 shrink-0 border border-borderBase" />
                  <input type="text" value={item.title} onChange={e => updateField(['showcase', 'items', idx.toString(), 'title'], e.target.value)} className="block w-full border p-2 rounded flex-1" placeholder="Title" />
                </div>
                <input type="text" value={item.image || ""} onChange={e => updateField(['showcase', 'items', idx.toString(), 'image'], e.target.value)} className="block w-full border p-2 rounded" placeholder="Image URL (e.g., https://example.com/demo.png)" />
              </div>
            ))}
          </div>
        );
      case "Contact":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-sm font-medium">Phone 1</label><input type="text" value={formData.contact.phone1} onChange={e => updateField(['contact', 'phone1'], e.target.value)} className="w-full border p-2 rounded mt-1" /></div>
              <div><label className="text-sm font-medium">Phone 2 (WhatsApp)</label><input type="text" value={formData.contact.phone2} onChange={e => updateField(['contact', 'phone2'], e.target.value)} className="w-full border p-2 rounded mt-1" /></div>
              <div><label className="text-sm font-medium">Email 1</label><input type="text" value={formData.contact.email1} onChange={e => updateField(['contact', 'email1'], e.target.value)} className="w-full border p-2 rounded mt-1" /></div>
              <div><label className="text-sm font-medium">Email 2</label><input type="text" value={formData.contact.email2} onChange={e => updateField(['contact', 'email2'], e.target.value)} className="w-full border p-2 rounded mt-1" /></div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="h-screen bg-background font-sans text-text flex flex-col">
      <nav className="bg-card shadow-sm shrink-0 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-textSecondary hover:text-text focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-lg sm:text-xl font-bold text-text">FinTechra CMS</h1>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="/" target="_blank" className="text-sm font-medium text-accent hover:text-accentHover">View Site</a>
              <button onClick={handleLogout} className="text-sm font-medium text-textSecondary hover:text-text">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden flex-col md:flex-row relative">
        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bg-card border-b border-borderBase z-40 md:hidden shadow-lg max-h-64 overflow-y-auto">
            <nav className="p-2 space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setIsMobileMenuOpen(false); }}
                  className={`w-full text-left px-3 py-3 rounded-md text-sm font-medium ${activeTab === tab ? 'bg-accent/10 text-accent' : 'text-textSecondary hover:bg-background'}`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop Sidebar Navigation */}
        <div className="w-64 bg-card border-r border-borderBase overflow-y-auto shrink-0 hidden md:block">
          <nav className="p-4 space-y-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab ? 'bg-accent/10 text-accent' : 'text-textSecondary hover:bg-background'}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto w-full">
          <div className="max-w-4xl mx-auto bg-card shadow rounded-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-borderBase gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-text">{activeTab} Settings</h2>
              <button 
                onClick={handleSave} 
                disabled={isSaving} 
                className="w-full sm:w-auto px-4 py-2 bg-accent text-white text-white rounded-md hover:bg-accentHover transition-colors disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save All Changes"}
              </button>
            </div>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
