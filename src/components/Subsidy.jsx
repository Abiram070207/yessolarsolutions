import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, ShieldCheck, Zap } from 'lucide-react';
import horizontalNotice from '../assets/projects/yessolarnotice.webp';

const Subsidy = () => {
  return (
    <section id="subsidy" className="py-24 bg-white relative font-sans">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-20 flex flex-col lg:flex-row items-center gap-16 border border-slate-100">
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img src="assets/images/promo-image.webp" alt="Subsidy" className="rounded-2xl w-full shadow-2xl" />
              <div className="absolute -top-4 -left-4 bg-primary text-slate-900 px-6 py-3 rounded-lg font-heading font-extrabold text-2xl shadow-xl uppercase tracking-tighter">
                ₹78k Save
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="flex items-center gap-2 text-slate-400 font-ui font-black uppercase text-[10px] tracking-[0.3em] mb-6">
              <Zap className="w-3 h-3 fill-primary text-primary" />
              Government Framework
            </span>

            <h2 className="text-4xl lg:text-7xl font-heading font-extrabold text-slate-900 mb-8 tracking-tighter leading-tight uppercase">
              Sun Power <br /> <span className="text-primary">Fully Funded.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-10 mb-12 font-heading">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-slate-900 shadow-lg" title="Rupee">
                  <IndianRupee className="w-6 h-6" />
                </div>
                <p className="text-2xl font-extrabold text-slate-900 uppercase tracking-tighter">₹78,000/-</p>
                <p className="text-[10px] font-ui font-black text-slate-400 uppercase tracking-[0.2em]">Max Subsidy</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-2xl font-extrabold text-slate-900 uppercase tracking-tighter">Authorized</p>
                <p className="text-[10px] font-ui font-black text-slate-400 uppercase tracking-[0.2em]">MNRE Registered</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-10">
              <p className="text-lg font-bold text-slate-700 leading-relaxed font-sans">
                உங்கள் வீடு மற்றும் தொழிலகத்திற்கு ஏற்ற சோலார் மானியத்துடன் அமைத்து தரப்படும்.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 font-ui font-black uppercase tracking-widest text-[10px]">
              <a href="tel:+919444440082" className="btn-modern px-8 py-5">Check Eligibility</a>
              <a href="#contact" className="btn-outline-modern px-8 py-4">Schemes Hub</a>
            </div>

            {/* Special Funding Notice Banner */}
            <div className="mt-16 pt-16 border-t border-slate-100 flex flex-col gap-10">
               <div className="group transition-all duration-500">
                 <span className="text-slate-400 font-ui font-black uppercase text-[10px] tracking-[0.4em] mb-6 block italic">Official Scheme Bulletin</span>
                 <img 
                   src={horizontalNotice} 
                   alt="Horizontal Scheme Notice" 
                   className="w-full h-auto rounded-[2rem] shadow-2xl border border-slate-200 group-hover:scale-[1.02] transition-transform duration-500"
                 />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsidy;
