import { useState } from "react";
import { Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { useData } from "../context/DataContext";

export default function Contact() {
  const { data } = useData();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${data.contact.email1}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            service: formData.service,
            message: formData.message,
            _subject: `New Inquiry from ${data.hero.title} Website`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              href={`https://wa.me/${data.contact.phone1?.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-[15px] font-medium rounded-full px-8 py-3.5 transition-colors duration-300"
            >
                <img
                src="/whatsapplogo.png"
                alt="WhatsApp"
                className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-contain"
              />
              {/* <MessageCircle size={18} /> */}
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact-form" className="px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              
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
                  <a href={`tel:${data.contact.phone1?.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-text hover:text-accent transition-colors text-[17px] font-medium group">
                    <div className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center group-hover:border-accent transition-colors">
                      <Phone size={18} className="text-accent" />
                    </div>
                    {data.contact.phone1}
                  </a>
                  <a href={`tel:${data.contact.phone2?.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-text hover:text-accent transition-colors text-[17px] font-medium group">
                    <div className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center group-hover:border-accent transition-colors">
                      <Phone size={18} className="text-accent" />
                    </div>
                    {data.contact.phone2}
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[13px] font-bold tracking-widest text-textSecondary uppercase mb-4">Email</h4>
                <div className="flex flex-col gap-3">
                  <a href={`mailto:${data.contact.email1}`} className="flex items-center gap-3 text-text hover:text-accent transition-colors text-[16px] font-medium group">
                    <div className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center group-hover:border-accent transition-colors shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <span className="break-all">{data.contact.email1}</span>
                  </a>
                  <a href={`mailto:${data.contact.email2}`} className="flex items-center gap-3 text-text hover:text-accent transition-colors text-[16px] font-medium group">
                    <div className="w-10 h-10 rounded-full bg-background border border-borderBase flex items-center justify-center group-hover:border-accent transition-colors shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <span className="break-all">{data.contact.email2}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-background border border-borderBase rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all duration-500">
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-20 text-center animate-fade-in">
                  <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '2s' }}></div>
                    <CheckCircle className="text-green-500 w-12 h-12 relative z-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-text mb-4">Message Sent!</h3>
                  <p className="text-[16px] sm:text-[18px] text-textSecondary max-w-md mx-auto mb-10 leading-relaxed">
                    Thank you for reaching out to us. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitStatus('idle')} 
                    type="button"
                    className="bg-card border border-borderBase hover:border-accent hover:text-accent text-text font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
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

              <button type="submit" disabled={isSubmitting} className="group flex items-center gap-3 bg-accent hover:bg-accentHover text-white text-[15px] font-medium rounded-full pl-8 pr-3 py-3 w-full sm:w-auto justify-between sm:justify-start transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                  <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              {submitStatus === 'error' && (
                <p className="mt-5 text-sm font-medium text-red-500 bg-red-500/10 p-3 rounded-xl border border-red-500/20 text-center">
                  Failed to send message. Please try again later or contact us directly.
                </p>
              )}
            </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
