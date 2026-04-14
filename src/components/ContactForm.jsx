import React, { useState } from 'react';
import { Mail, Phone, Loader2, Send, MapPin, Globe } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, subValue, href }) => (
  <a 
    href={href} 
    className="group flex items-start gap-5 py-8 border-b border-white/5 last:border-0 transition-all font-sans"
  >
    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 mt-1">
      <Icon className="w-4 h-4" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-slate-500 text-[9px] font-ui font-black uppercase tracking-[0.4em] mb-2">{label}</p>
      <p className="text-lg sm:text-2xl font-heading font-extrabold text-white tracking-tighter group-hover:text-primary transition-colors leading-none">{value}</p>
      {subValue && <p className="text-slate-400 text-[9px] sm:text-xs mt-2 font-medium uppercase tracking-[0.1em]">{subValue}</p>}
    </div>
  </a>
);

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Packet submission in progress...');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xwvapbav', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("🎉 SUCCESS: Our team will contact you within 24 hours.");
        e.target.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus("❌ ERROR: Please use direct hotlines below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="p-12 lg:p-20 text-white flex flex-col justify-between">
            <div>
              <span className="text-slate-500 font-ui font-black uppercase text-[10px] tracking-[0.4em] mb-6 block">Communication Hub</span>
              <h2 className="text-5xl lg:text-7xl font-heading font-extrabold mb-12 tracking-tighter leading-none uppercase">Let's <br /> <span className="text-primary italic">Connect.</span></h2>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={Phone} 
                  label="Direct Line" 
                  value="94444 40082" 
                  href="tel:+919444440082" 
                />
                <ContactItem 
                  icon={Mail} 
                  label="Official Email" 
                  value="yessolarkvp@gmail.com" 
                  subValue="REACH OUR HUB DIRECTLY"
                  href="mailto:yessolarkvp@gmail.com" 
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-20 m-4 rounded-2xl">
            <h3 className="text-3xl font-heading font-extrabold text-slate-900 mb-10 tracking-tight uppercase">Request Callback</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-slate-400 font-ui font-black text-[9px] tracking-[0.3em] uppercase" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-xl px-6 py-4 text-lg font-bold font-sans focus:outline-none focus:border-primary transition-all text-slate-900 placeholder:text-slate-300" placeholder="e.g. Abiram" required />
              </div>
              <div className="space-y-2">
                <label className="text-slate-400 font-ui font-black text-[9px] tracking-[0.3em] uppercase" htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-xl px-6 py-4 text-lg font-bold font-sans focus:outline-none focus:border-primary transition-all text-slate-900 placeholder:text-slate-300" placeholder="+91" required />
              </div>
              <div className="space-y-2">
                <label className="text-slate-400 font-ui font-black text-[9px] tracking-[0.3em] uppercase" htmlFor="req">Project Scope</label>
                <div className="relative">
                  <select id="req" name="solution_type" className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-xl pl-6 pr-14 py-4 text-lg font-bold font-sans focus:outline-none focus:border-primary transition-all text-slate-900 appearance-none cursor-pointer">
                    <option>Residential (Home)</option>
                    <option>Commercial (Industry)</option>
                    <option>Maintenance Only</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-modern w-full py-6 text-xl mt-4"
              >
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
                {isSubmitting ? 'Optimizing...' : 'Request Inspection'}
              </button>
              
              {status && (
                <div className={`p-4 rounded-xl text-[10px] font-ui font-black uppercase tracking-widest text-center mt-6 ${status.includes('🎉') ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-slate-100 text-slate-500'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
