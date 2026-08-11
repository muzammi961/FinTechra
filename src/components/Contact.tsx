import { useState } from "react";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry from ${formData.name} - ${formData.service}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:fintechrasolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-card pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-b border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Final CTA Area */}
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center mb-20 sm:mb-28">
          <h2 className="hero-heading font-medium leading-[1.08] tracking-[-0.03em] text-text mb-6">
            Ready to Build and Grow Your Business?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-textSecondary max-w-2xl leading-relaxed mb-10">
            Let's create the right digital, AI or financial solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href="#contact-form"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accentHover text-white text-[15px] font-medium rounded-full px-8 py-3.5 transition-colors duration-300"
            >
              Start a Conversation
            </a>
            <a 
              href="https://wa.me/9778726809"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-[15px] font-medium rounded-full px-8 py-3.5 transition-colors duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact-form" className="px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-text text-background flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
                9
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-borderBase text-textSecondary rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                Contact Us
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-text mb-8">
              Let's Talk About Your Business
            </h2>
            
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-[13px] font-bold tracking-widest text-textSecondary uppercase mb-4">Phone</h4>
                <div className="flex flex-col gap-3">
                  <a href="tel:6235834570" className="flex items-center gap-3 text-text hover:text-accent transition-colors text-[17px] font-medium group">
                    <div className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center group-hover:border-accent transition-colors">
                      <Phone size={18} className="text-accent" />
                    </div>
                    6235834570
                  </a>
                  <a href="tel:9778726809" className="flex items-center gap-3 text-text hover:text-accent transition-colors text-[17px] font-medium group">
                    <div className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center group-hover:border-accent transition-colors">
                      <Phone size={18} className="text-accent" />
                    </div>
                    9778726809
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[13px] font-bold tracking-widest text-textSecondary uppercase mb-4">Email</h4>
                <div className="flex flex-col gap-3">
                  <a href="mailto:fintechrasolutions@gmail.com" className="flex items-center gap-3 text-text hover:text-accent transition-colors text-[16px] font-medium group">
                    <div className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center group-hover:border-accent transition-colors shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <span className="break-all">fintechrasolutions@gmail.com</span>
                  </a>
                  <a href="mailto:FinTechraSolutions@outlook.com" className="flex items-center gap-3 text-text hover:text-accent transition-colors text-[16px] font-medium group">
                    <div className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center group-hover:border-accent transition-colors shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <span className="break-all">FinTechraSolutions@outlook.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <form className="bg-background border border-borderBase rounded-3xl p-6 sm:p-10 shadow-sm" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-text">Full Name</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full bg-card border border-borderBase rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-text">Phone Number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required className="w-full bg-card border border-borderBase rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="+91 xxxxx xxxxx" />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="email" className="text-sm font-medium text-text">Email Address</label>
                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full bg-card border border-borderBase rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="service" className="text-sm font-medium text-text">Service Required</label>
                <select id="service" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} required className="w-full bg-card border border-borderBase rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select a service</option>
                  <option value="Custom Website Development">Custom Website Development</option>
                  <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                  <option value="AI-Powered Web Solutions">AI-Powered Web Solutions</option>
                  <option value="GST Registration & Filing">GST Registration & Filing</option>
                  <option value="Income Tax Return (ITR) Filing">Income Tax Return (ITR) Filing</option>
                  <option value="Accounting & Bookkeeping Services">Accounting & Bookkeeping Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-text">Message</label>
                <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="w-full bg-card border border-borderBase rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your project or requirements..."></textarea>
              </div>

              <button type="submit" className="group flex items-center gap-3 bg-accent hover:bg-accentHover text-white text-[15px] font-medium rounded-full pl-8 pr-3 py-3 w-full sm:w-auto justify-between sm:justify-start transition-colors duration-300">
                <span>Send Message</span>
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
