import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card pt-16 sm:pt-20 pb-8 sm:pb-12 border-t border-borderBase transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 sm:mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <a href="#home">
                <img src="/logo.png" alt="FinTechra Solutions" className="h-10 object-contain" />
              </a>
            </div>
            <p className="text-[15px] text-textSecondary leading-relaxed max-w-sm">
              Digital, AI and financial solutions designed to help businesses move forward.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="tel:6235834570" className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center text-textSecondary hover:text-accent hover:border-accent transition-colors" aria-label="Call Us">
                <Phone size={18} />
              </a>
              <a href="mailto:fintechrasolutions@gmail.com" className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center text-textSecondary hover:text-accent hover:border-accent transition-colors" aria-label="Email Us">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/9778726809" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center text-textSecondary hover:text-[#25D366] hover:border-[#25D366] transition-colors" aria-label="WhatsApp Us">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-bold tracking-widest text-text mb-6 uppercase">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="text-[15px] text-textSecondary hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-[15px] text-textSecondary hover:text-accent transition-colors">About</a></li>
              <li><a href="#why-us" className="text-[15px] text-textSecondary hover:text-accent transition-colors">Why Us</a></li>
              <li><a href="#contact" className="text-[15px] text-textSecondary hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold tracking-widest text-text mb-6 uppercase">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#services" className="text-[15px] text-textSecondary hover:text-accent transition-colors">Custom Website Development</a></li>
              <li><a href="#services" className="text-[15px] text-textSecondary hover:text-accent transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#services" className="text-[15px] text-textSecondary hover:text-accent transition-colors">AI-Powered Web Solutions</a></li>
              <li><a href="#services" className="text-[15px] text-textSecondary hover:text-accent transition-colors">GST Registration & Filing</a></li>
              <li><a href="#services" className="text-[15px] text-textSecondary hover:text-accent transition-colors">Income Tax Return (ITR) Filing</a></li>
              <li><a href="#services" className="text-[15px] text-textSecondary hover:text-accent transition-colors">Accounting & Bookkeeping Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold tracking-widest text-text mb-6 uppercase">Contact</h4>
            <ul className="flex flex-col gap-5">
              <li>
                <a href="tel:6235834570" className="group flex items-center gap-3">
                  <span className="text-[15px] text-textSecondary group-hover:text-accent transition-colors">6235834570</span>
                  <ArrowRight size={14} className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li>
                <a href="tel:9778726809" className="group flex items-center gap-3">
                  <span className="text-[15px] text-textSecondary group-hover:text-accent transition-colors">9778726809</span>
                  <ArrowRight size={14} className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li className="pt-2">
                <a href="mailto:fintechrasolutions@gmail.com" className="group flex items-center gap-3">
                  <span className="text-[15px] text-textSecondary group-hover:text-accent transition-colors break-all">fintechrasolutions@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="mailto:FinTechraSolutions@outlook.com" className="group flex items-center gap-3">
                  <span className="text-[15px] text-textSecondary group-hover:text-accent transition-colors break-all">FinTechraSolutions@outlook.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-borderBase flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-textSecondary">
            © {currentYear} FinTechra Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[14px] text-textSecondary hover:text-text transition-colors">Privacy Policy</a>
            <a href="#" className="text-[14px] text-textSecondary hover:text-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
