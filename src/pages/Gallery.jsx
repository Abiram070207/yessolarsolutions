import React, { useEffect } from 'react';
import { projectsData } from '../data/projects';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen font-sans">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <span className="text-slate-400 font-ui font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Proven Performance</span>
          <h1 className="text-5xl lg:text-9xl font-heading font-extrabold text-slate-900 mb-8 tracking-tighter uppercase leading-none">
            Operation <span className="text-primary">Portfolio.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed font-sans">
            A comprehensive logging of our engineering masterclasses across Tamil Nadu. Each unit represents a step towards absolute energy independence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-primary transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1509391366360-fe5bb6521e77?auto=format&fit=crop&q=80&w=800'; }}
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-lg text-slate-900 font-ui font-black text-[9px] uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {project.location}
                </div>
              </div>

              <div className="p-10">
                <h5 className="text-2xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h5>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 font-sans">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 text-primary font-ui font-black text-[9px] uppercase tracking-[0.3em]">
                  <div className="w-8 h-[2px] bg-primary"></div>
                  System Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
