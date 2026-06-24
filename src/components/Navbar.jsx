import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const servicesLinks = [
    { name: 'Minecraft hosting', path: '/minecraft', icon: '/assets/icons/minecraft.png', desc: 'Ultra-low latency game nodes' },
    { name: 'Bot Hosting', path: '/discord', icon: '/assets/icons/wumpus.png', desc: 'Keep your community alive 24/7' },
    { name: 'VPS Hosting', path: '#', icon: '/assets/icons/docker.png', desc: 'Full root access performance', comingSoon: true, disabled: true },
  ];

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Legal', path: '/legal' },
    { name: 'Reviews', path: '#reviews' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen
        ? 'bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-0'
        : 'bg-transparent border-transparent py-2'
      }`}>
      <div className="flex justify-between items-center w-full px-6 md:px-8 h-20 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <img src="/assets/logo.png" alt="AeiloCloud" className="h-8 md:h-12 w-auto object-contain" />
          <span className="text-xl md:text-2xl font-black text-blue-600 tracking-tighter font-h1">AeiloCloud</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative group py-4">
            <button className="flex items-center gap-1 font-h3 tracking-tight font-bold text-slate-600 group-hover:text-blue-500 transition-all duration-300">
              Services
              <span className="material-symbols-outlined text-xl transition-transform group-hover:rotate-180">expand_more</span>
            </button>
            
            <div className="absolute top-full left-0 mt-1 w-80 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="bg-white/80 backdrop-blur-2xl border border-white/40 p-4 rounded-3xl shadow-2xl shadow-blue-900/10">
                <div className="flex flex-col gap-2">
                  {servicesLinks.map((service) => {
                    const isLink = !service.disabled;
                    const Content = (
                      <>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden ${service.disabled ? 'bg-slate-100' : 'bg-blue-50'}`}>
                          <img src={service.icon} alt="" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-sm ${service.disabled ? 'text-slate-400' : 'text-slate-800'}`}>{service.name}</span>
                            {service.comingSoon && (
                              <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md ${service.disabled ? 'bg-slate-100 text-slate-400' : 'bg-blue-100 text-blue-600'}`}>Soon</span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-500 font-medium">{service.desc}</p>
                        </div>
                      </>
                    );

                    return isLink ? (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-blue-50/50 transition-colors group/item"
                      >
                        {Content}
                      </Link>
                    ) : (
                      <div
                        key={service.name}
                        className="flex items-center gap-4 p-3 rounded-2xl opacity-60 cursor-not-allowed grayscale transition-colors"
                      >
                        {Content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const isAnchor = link.path.startsWith('#');
            return isAnchor ? (
              <a
                key={link.name}
                href={link.path}
                className="text-slate-600 font-bold font-h3 tracking-tight hover:text-blue-500 transition-all duration-300"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`font-h3 tracking-tight transition-all duration-300 font-bold ${isActive
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-slate-600 hover:text-blue-500'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-slate-600 font-bold active:scale-95 transform transition-transform duration-150">Login</button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold active:scale-95 transform transition-transform duration-150 shadow-lg shadow-primary/20">Get Started</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-700 active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/90 backdrop-blur-3xl overflow-hidden border-b border-white/20"
          >
            <div className="flex flex-col gap-6 px-8 py-10">
              {/* Mobile Services */}
              <div className="flex flex-col gap-4">
                <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Services</span>
                <div className="grid grid-cols-1 gap-3">
                  {servicesLinks.map((service) => {
                    const isLink = !service.disabled;
                    const Content = (
                      <>
                        <img src={service.icon} alt="" className="w-8 h-8 object-contain" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-black ${service.disabled ? 'text-slate-400' : 'text-slate-800'}`}>{service.name}</span>
                            {service.comingSoon && (
                              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-lg ${service.disabled ? 'bg-slate-100 text-slate-400' : 'bg-blue-100 text-blue-600'}`}>Soon</span>
                            )}
                          </div>
                        </div>
                      </>
                    );

                    return isLink ? (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center gap-4 p-4 rounded-[24px] bg-slate-50/50 border border-slate-100 active:scale-95 transition-transform"
                      >
                        {Content}
                      </Link>
                    ) : (
                      <div
                        key={service.name}
                        className="flex items-center gap-4 p-4 rounded-[24px] bg-slate-50/50 border border-slate-100 opacity-50 grayscale cursor-not-allowed"
                      >
                        {Content}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full"></div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-outline-variant/30 w-full my-2"></div>
              <div className="flex flex-col gap-4">
                <button className="w-full py-4 rounded-2xl neumorphic-button font-black text-on-surface">Login</button>
                <button className="w-full py-4 rounded-2xl liquid-accent font-black">Get Started</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


export default Navbar;
