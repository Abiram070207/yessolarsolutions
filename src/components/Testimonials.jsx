import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'K. Arumugam',
    location: 'Trichy, TN',
    text: '"Efficiency and transparency. Yes Solar handled everything from MNRE subsidy to net-metering. My monthly bill is now effectively zero."',
    color: 'text-primary'
  },
  {
    name: 'Janaki S.',
    location: 'Kovilpatti, TN',
    text: '"The best decision for our home. The payback period was exactly as they predicted. Customer support is incredible even after 2 years."',
    color: 'text-blue-400'
  },
  {
    name: 'R. Venkatesh',
    location: 'Chennai, TN',
    text: '"Seamless installation of 5kW system for my apartment. Excellent performance even during summer peaks in Chennai. Highly satisfied!"',
    color: 'text-green-400'
  },
  {
    name: 'P. Muthukumar',
    location: 'Kovilpatti, TN',
    text: '"The best local solar experts in Kovilpatti. Personalized service and very clear explanation of the ROI. Proud to support a local business."',
    color: 'text-yellow-400'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative font-sans">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl font-black font-heading mb-16 uppercase tracking-tight">Trusted Reviews</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 2 }
          }}
          className="testimonials-slider !pb-20"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div 
                className={`bg-slate-900/50 p-10 lg:p-14 rounded-[3rem] border border-white/5 backdrop-blur-xl transition-all h-full flex flex-col justify-between text-left`}
              >
                <p className="text-xl lg:text-3xl italic mb-12 text-slate-200 leading-relaxed font-sans">{t.text}</p>
                <div>
                  <p className="font-heading font-extrabold text-2xl uppercase tracking-tighter text-white mb-2">{t.name}</p>
                  <p className={`${t.color} font-ui font-black text-xs uppercase tracking-widest`}>{t.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonials-slider .swiper-pagination-bullet { width: 12px; height: 12px; transition: all 0.3s; background: #334155; opacity: 1; border: 2px solid transparent; }
        .testimonials-slider .swiper-pagination-bullet-active { background: #fbbf24; border-color: rgba(251, 191, 36, 0.3); transform: scale(1.4); }
      `}} />
    </section>
  );
};

export default Testimonials;
