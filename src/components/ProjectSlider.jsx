import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectSlider = () => {
  const featuredProjects = projectsData.slice(0, 10);

  return (
    <section id="projects" className="py-24 bg-slate-950 overflow-hidden relative font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-slate-500 font-ui font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Operation Log</span>
            <h2 className="text-5xl lg:text-8xl font-heading font-extrabold text-white tracking-tighter uppercase">Recent Works</h2>
          </div>
          
          <Link to="/gallery" className="btn-modern py-4 px-10">
            <span>Project Gallery</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={800}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 30 },
              1024: { slidesPerView: 3.2, spaceBetween: 40 }
            }}
            className="!overflow-visible"
          >
            {featuredProjects.map((project) => (
              <SwiperSlide key={project.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=800'; }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-8">
                    <span className="text-primary font-ui font-black uppercase text-[9px] tracking-[0.2em] mb-3">{project.location}</span>
                    <h4 className="text-2xl font-heading font-extrabold text-white mb-2 tracking-tight uppercase leading-tight">{project.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center md:justify-end gap-4 mt-12 font-ui">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-slate-900 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-slate-900 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
