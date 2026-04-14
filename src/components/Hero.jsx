import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-900 font-sans">
      {/* Visual Depth */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/images/background.png" className="w-full h-full object-cover opacity-30 mix-blend-overlay" alt="Solar" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-900 to-slate-900"></div>
        
        {/* Large Ghost Logo - Fading out towards text */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[60%] h-full opacity-[0.15] pointer-events-none select-none hidden lg:block overflow-hidden">
           <img 
             src="/assets/images/logo.png" 
             className="w-full h-full object-contain mix-blend-lighten scale-125" 
             alt="" 
             style={{ 
               maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
               WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
             }}
           />
        </div>

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-white/5 border border-white/10 mb-8"
          >
            <Zap className="w-3 h-3 text-primary fill-primary" />
            <span className="text-white text-[10px] font-ui font-black uppercase tracking-[0.3em]">SOLAR SOLUTIONS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-heading font-extrabold text-white leading-[0.9] tracking-tighter mb-10"
          >
            Solar <br /> <span className="text-primary">Infrastructure.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mb-12 leading-relaxed font-sans"
          >
            Architecting sustainable energy for Tamil Nadu. <br />
            <span className="text-white font-bold block mt-2">மின்சாரக் கட்டணத்தை மிச்சப்படுத்துவோம்!</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="tel:+919444440082" className="btn-modern py-6 px-12 text-lg">
              <Phone className="w-6 h-6" />
              Analyze Site
              <ArrowRight className="w-5 h-5" />
            </a>

            <a href="https://wa.me/919444440082" target="_blank" rel="noopener noreferrer" className="btn-outline-modern py-6 px-12 text-lg text-white border-white/20 hover:bg-white/5">
              <span>Contact Ops</span>
            </a>
          </motion.div>

          <div className="mt-20 flex flex-wrap gap-12 border-t border-white/5 pt-12">
            {[
              { label: "Governing Body", value: "MNRE" },
              { label: "Main Operations Hub", value: "Headquarters : Kovilpatti" }
            ].map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-white font-heading font-extrabold text-2xl tracking-tighter uppercase">{m.value}</span>
                <span className="text-slate-500 text-[10px] font-ui font-black uppercase tracking-[0.2em]">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
