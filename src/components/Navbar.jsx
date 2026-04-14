import React, { useState, useEffect } from 'react';
import { Home, Zap, Image, Info, MessageSquare, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', isHash: true, icon: Home },
    { name: 'Subsidy', href: '/#subsidy', isHash: true, icon: Zap },
    { name: 'Gallery', href: '/gallery', isHash: false, icon: Image },
    { name: 'Contact', href: '/#contact', isHash: true, icon: MessageSquare },
  ];

  const isDarkPage = location.pathname === '/' && !isScrolled;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'h-16 bg-slate-950/95 backdrop-blur-xl border-b border-white/5' 
          : 'h-24 bg-gradient-to-b from-slate-950 via-slate-950/40 to-transparent'
      }`}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group transition-transform hover:scale-105 active:scale-95">
            <div className="relative flex items-center justify-center">
              {/* Sun Aura Glow */}
              <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full scale-150"></div>
              <img 
                src="/assets/images/logo.png" 
                alt="Logo" 
                className={`${isScrolled ? 'h-10' : 'h-14'} w-auto object-contain transition-all duration-300 relative z-10 rounded-lg`} 
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-heading font-extrabold tracking-tighter leading-none text-white uppercase`}>
                YES <span className="text-primary italic">SOLAR</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.3em] font-ui font-black text-slate-400`}>Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 font-ui font-black uppercase text-[11px] tracking-widest">
            {navLinks.map((link) => {
              const LinkComponent = link.isHash ? NavHashLink : Link;
              return (
                <LinkComponent
                  key={link.name} 
                  to={link.href} 
                  smooth={link.isHash ? true : undefined}
                  className={`transition-colors hover:text-primary ${
                    isDarkPage ? 'text-white/80' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </LinkComponent>
              )
            })}
            <a href="tel:+919444440082" className="btn-modern py-3 px-6 !text-[11px]">
              <Phone className="w-4 h-4" />
              Free Quote
            </a>
          </div>

          {/* Mobile Right Action */}
          <div className="lg:hidden">
             <a href="tel:+919444440082" className="p-2.5 bg-primary text-slate-900 rounded-xl shadow-md active:scale-90 transition-transform flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-[10px] font-ui font-black uppercase">Call</span>
             </a>
          </div>
        </div>
      </nav>

      {/* Modern Bottom Nav for Mobile */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] h-16 bg-slate-900 rounded-2xl z-[100] shadow-2xl flex items-center justify-around px-4 border border-white/10">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href || (link.href.startsWith('/#') && location.hash === link.href.split('#')[1]);
          const LinkComponent = link.isHash ? NavHashLink : Link;
          return (
            <LinkComponent 
              key={link.name} 
              to={link.href} 
              smooth={link.isHash ? true : undefined}
              className={`flex flex-col items-center gap-1 p-2 transition-all ${isActive ? 'text-primary' : 'text-slate-400'}`}
            >
              <link.icon className="w-4 h-4" />
              <span className="text-[9px] font-ui font-black uppercase tracking-widest">{link.name}</span>
            </LinkComponent>
          )
        })}
      </div>
    </>
  );
};

export default Navbar;
