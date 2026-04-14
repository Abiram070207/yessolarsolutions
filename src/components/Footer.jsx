import React from 'react';
import { Globe, Mail, MessageSquare, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <a href="/" className="inline-block mb-8">
              <span className="text-3xl font-heading font-extrabold tracking-tighter uppercase whitespace-nowrap">YES <span className="text-primary">SOLAR</span></span>
            </a>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xs font-medium font-sans">
              Precision solar engineering for a cleaner Tamil Nadu.
            </p>
            <div className="flex gap-4 mt-8">
              {[Globe, Mail, MessageSquare].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-slate-900 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-ui font-black uppercase tracking-[0.3em] mb-8 text-slate-500">Navigation Nodes</h4>
            <ul className="space-y-4 text-slate-200 font-heading font-bold uppercase text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Residential</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Maintenance</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-ui font-black uppercase tracking-[0.3em] mb-8 text-primary">Service Area Hubs</h4>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {['Kovilpatti (HQ)', 'Tuticorin', 'Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Tirunelveli', 'Salem', 'Erode', 'Vellore', 'Nagercoil', 'Tiruppur', 'Tenkasi', 'Virudhunagar', 'Dindigul', 'Villupuram'].map((city) => (
                <span key={city} className={`text-[9px] font-ui font-black uppercase tracking-[0.2em] px-2 py-1 rounded-md ${city.includes('HQ') ? 'bg-primary text-slate-950 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'bg-white/5 text-slate-400'}`}>
                  {city}
                </span>
              ))}
              <span className="w-full text-[8px] font-ui font-black uppercase tracking-[0.4em] text-slate-600 mt-2 block border-t border-white/5 pt-4 italic">
                Authorized Operations - All Over Tamil Nadu
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-ui font-black uppercase tracking-[0.3em] mb-8 text-slate-500">Hub Particulars</h4>
            <address className="not-italic text-slate-400 space-y-6">
              <p className="font-sans font-medium">380/1, Ambal Nagar,<br />Kovilpatti - 628 502.</p>
              <div className="space-y-4">
                <a href="mailto:yessolarkvp@gmail.com" className="block text-white font-heading font-bold hover:text-primary transition-colors tracking-tight">yessolarkvp@gmail.com</a>
                <a href="tel:+919444440082" className="block text-3xl font-heading font-extrabold text-white hover:text-primary transition-all tracking-tighter uppercase">94444 40082</a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 gap-6">
          <p className="font-ui font-black text-[9px] uppercase tracking-[0.4em]">© 2026 YES SOLAR SOLUTIONS. SYSTEMS NOMINAL.</p>
          <div className="flex gap-8 text-[9px] font-ui font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
