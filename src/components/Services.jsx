import React from 'react';
import { Home, Building2, Wrench, Search, ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    title: 'Residential',
    icon: Home,
    desc: 'Bespoke energy setups for modern homes and urban villas.'
  },
  {
    title: 'Commercial',
    icon: Building2,
    desc: 'High-payload industrial configurations for factories.'
  },
  {
    title: 'Maintenance',
    icon: Wrench,
    desc: 'Precision cleaning and automated health cycles.'
  },
  {
    title: 'Consultation',
    icon: Search,
    desc: 'Feasibility reports and detailed ROI analysis.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-slate-400 font-ui font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Proven Solutions</span>
          <h2 className="text-5xl lg:text-7xl font-heading font-extrabold text-slate-900 tracking-tighter uppercase">Service Stack</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="services-slider !pb-16"
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="group bg-white p-10 rounded-2xl border border-slate-100 hover:border-primary transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center text-primary mb-12 transform group-hover:rotate-6 transition-transform">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 font-sans">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 font-ui font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                  Configure <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .services-slider .swiper-pagination-bullet { width: 40px; border-radius: 4px; transition: all 0.3s; background: #cbd5e1; }
        .services-slider .swiper-pagination-bullet-active { background: #fbbf24; width: 60px; }
      `}} />
    </section>
  );
};

export default Services;
