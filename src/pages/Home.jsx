import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import BuildMarquee from '../components/BuildMarquee';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [players, setPlayers] = useState(20);
  const [plugins, setPlugins] = useState(10);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Handle potential autoplay block
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const getRecommendedPlan = () => {
    const ramNeeded = 1.5 + (players * 0.08) + (plugins * 0.05);
    if (ramNeeded <= 3) return { name: "Starter Node", ram: "3GB", cpu: "2 vCore", price: "₹299" };
    if (ramNeeded <= 6) return { name: "Advanced Node", ram: "6GB", cpu: "4 vCore", price: "₹599" };
    if (ramNeeded <= 10) return { name: "Pro Node", ram: "12GB", cpu: "6 vCore", price: "₹999" };
    return { name: "Elite Node", ram: "24GB+", cpu: "Dedicated", price: "₹1,899" };
  };

  const plan = getRecommendedPlan();

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      // Loop back if it reaches (duration - 6)
      if (video.currentTime >= video.duration - 6) {
        video.currentTime = 0;
        video.play();
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen mesh-gradient font-body-md text-on-surface"
    >
      <main>
        {/* Redesigned Hero Section with Background */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video with Subtle Blend */}
          <div className="absolute inset-0 z-0 opacity-30">
            <video
              ref={videoRef}
              onTimeUpdate={handleTimeUpdate}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover scale-110"
            >
              <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-background/100 backdrop-blur-[1px]"></div>
            
            {/* Animated Blobs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -120, 0],
                x: [0, -60, 0],
                y: [0, 40, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]"
            />
          </div>

          {/* Mute/Unmute Toggle - Minimalist Icon */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-8 right-12 z-20 hover:scale-125 transition-all duration-300 active:scale-90 text-primary drop-shadow-lg"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMuted ? 'volume_off' : 'volume_up'}
            </span>
          </button>

          <div className="relative z-10 pt-40 pb-24 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-on-surface mb-6 md:mb-8 max-w-4xl drop-shadow-sm leading-[1.1] md:leading-none">
                India's <span className="text-primary">Premium</span> Game Hosting
              </h1>
              <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mb-8 md:mb-12 font-medium drop-shadow-sm px-4">
                Experience ultra-low latency, 99.9% uptime, and tactile performance. Engineered for professional gamers and developers across the subcontinent.
              </motion.p>

              {/* Performance Stats */}
              <motion.div 
                variants={itemVariants} 
                className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 md:gap-12 mb-8 md:mb-12 px-4"
              >
                {[
                  { label: "HAPPY CUSTOMERS", value: "500+" },
                  { label: "SERVERS DEPLOYED", value: "1k+" },
                  { label: "Expert Help", value: "24/7" }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center group cursor-default"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.1, color: '#2563eb' }}
                      className="text-2xl md:text-3xl font-black text-primary font-h1 transition-colors"
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-slate-400 group-hover:text-slate-600 transition-colors">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-8 md:mb-10 px-6">
                <button className="liquid-accent px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 shadow-2xl">
                  <span>Explore Services</span>
                  <span className="material-symbols-outlined text-xl">rocket_launch</span>
                </button>
                <button className="glass-card bg-white/40 text-on-surface px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-3 hover:bg-white/60 transition-all duration-300">
                  View Network
                  <span className="material-symbols-outlined text-xl">language</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Build Marquee Section */}
        <BuildMarquee />

        {/* Services Preview (Bento Grid) */}
        <section id="services" className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-on-surface">The Service Catalog</h2>
                <p className="text-on-surface-variant text-sm md:text-base">High-performance and user-friendly services for all use-cases.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Minecraft Hosting */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -8, scale: 1.02 }}
                className="neumorphic-flat p-6 md:p-8 rounded-[32px] group transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">sports_esports</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">Minecraft Hosting</h3>
                <p className="text-on-surface-variant text-sm md:text-base mb-6 md:mb-8">Dedicated NVMe storage and high-clock CPUs for lag-free survival and mini-games.</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-sm md:text-base">From ₹299/mo</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </motion.div>

              {/* Discord Bot Hosting */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -8, scale: 1.02 }}
                className="neumorphic-flat p-6 md:p-8 rounded-[32px] group transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary-container/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary-container text-2xl md:text-3xl">smart_toy</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">Discord Bots</h3>
                <p className="text-on-surface-variant text-sm md:text-base mb-6 md:mb-8">Keep your community active 24/7 with our 100% uptime bot hosting environments.</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-sm md:text-base">From ₹99/mo</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </motion.div>

              {/* VPS Hosting (Coming Soon) */}
              <motion.div variants={itemVariants} className="neumorphic-inset p-6 md:p-8 rounded-[32px] opacity-80 col-span-1 md:col-span-2 lg:col-span-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-surface-dim flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline text-2xl md:text-3xl">terminal</span>
                  </div>
                  <span className="bg-surface-variant text-outline px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Coming Soon</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-on-surface-variant">VPS Nodes</h3>
                <p className="text-on-surface-variant text-sm md:text-base mb-6 md:mb-8">Full root access and isolated resources. Enterprise-grade virtualization for large scale apps.</p>
                <div className="flex items-center justify-between text-outline">
                  <span className="font-bold text-sm">Early access soon</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section (Redesigned) */}
        <section id="features" className="py-16 md:py-24 bg-surface-container-low/30 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-4">Unmatched performance in every plan</h2>
              <p className="text-on-surface-variant text-sm md:text-base max-w-2xl mx-auto">Engineered for reliability, speed, and absolute control. We don't just host; we empower your digital growth.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: "public", title: "India-first hosting", desc: "Strategically located Mumbai & Bangalore nodes ensure sub-30ms ping across the subcontinent." },
                { icon: "memory", title: "Platinum hardware", desc: "High-clock enterprise CPUs paired with Gen4 NVMe storage for zero-bottleneck performance." },
                { icon: "shield_lock", title: "Active DDoS protection", desc: "Multi-layered 2Tbps+ mitigation layer filters out malicious traffic before it ever hits your node." },
                { icon: "speed", title: "Instant provisioning", desc: "No waiting. Your server is deployed and ready to configure within seconds of order completion." },
                { icon: "terminal", title: "Full root access", desc: "Complete administrative control over your environment. Install any software or stack you need." },
                { icon: "router", title: "Dedicated IPv4", desc: "Every server comes with a dedicated static IPv4 address for maximum connectivity and reliability." },
                { icon: "developer_board", title: "Latest OS support", desc: "Choose from a wide range of Linux distributions and pre-configured software stacks." },
                { icon: "headset_mic", title: "24/7 Expert help", desc: "Native support from real engineers who understand your stack. No bots, just pure expertise." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="neumorphic-flat p-6 md:p-8 rounded-[32px] group hover:scale-[1.02] transition-all duration-300 border border-white/40"
                >
                  <div className="glass-card w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-inner shadow-white/50 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl md:text-3xl font-light">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 text-on-surface group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed opacity-80">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Infrastructure Section */}
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-4 md:mb-6 leading-tight">Built for the <span className="text-primary">Indian Subcontinent</span></h2>
                  <p className="text-on-surface-variant text-sm md:text-base mb-8 font-medium">Our flagship datacenter in Noida is strategically positioned to provide ultra-low latency to Northern and Central India. Connected directly to major IXPs for peak performance.</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 md:gap-6 items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl md:text-2xl">location_on</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base text-on-surface">Noida, Uttar Pradesh</h4>
                        <p className="text-xs md:text-sm text-on-surface-variant">Tier III+ certified datacenter with redundant power and 100Gbps uplink.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 md:gap-6 items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary-container text-xl md:text-2xl">bolt</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base text-on-surface">Sub-20ms Ping</h4>
                        <p className="text-xs md:text-sm text-on-surface-variant">Optimized routing for Delhi NCR, Lucknow, and surrounding regions.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="relative group mt-8 lg:mt-0">
                {/* Map Container */}
                <div className="glass-card p-2 md:p-4 rounded-[32px] md:rounded-[40px] border border-white/60 shadow-2xl relative overflow-hidden">
                  <img 
                    src="/assets/world-map.png" 
                    alt="World Map" 
                    className="w-full h-auto opacity-30 grayscale contrast-125"
                  />
                  
                  {/* Noida Pulse Point */}
                  <div className="absolute top-[48%] left-[68%]">
                    <div className="relative">
                      <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-primary rounded-full relative z-10 shadow-[0_0_10px_rgba(0,88,188,0.8)]"></div>
                      <div className="absolute inset-0 w-2 md:w-2.5 h-2 md:h-2.5 bg-primary rounded-full animate-ping z-0"></div>
                      <div className="absolute -top-10 md:-top-12 -left-10 md:-left-12 whitespace-nowrap bg-white/95 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl border border-primary/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] md:text-xs font-bold text-primary flex items-center gap-2">
                          <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full animate-pulse"></span>
                          NOIDA: ACTIVE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Badge Overlay */}
                <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/80 shadow-2xl z-20 scale-75 md:scale-100 origin-bottom-right">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="text-right">
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-1">Network Status</p>
                      <p className="text-sm md:text-xl font-black text-primary">EXCELLENT</p>
                    </div>
                    <div className="w-[1px] md:w-[2px] h-8 md:h-10 bg-outline-variant/30"></div>
                    <div className="text-left">
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-1">Live Latency</p>
                      <p className="text-sm md:text-xl font-black text-on-surface">12ms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Node Status Section */}
        <section className="py-16 md:py-24 bg-surface-container-low/20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
              <motion.div variants={itemVariants} className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-4">Real-time Node Status</h2>
                <p className="text-on-surface-variant text-sm md:text-base font-medium">We maintain full transparency of our infrastructure. Monitor live performance metrics and availability of our flagship Noida nodes.</p>
              </motion.div>
              <motion.button 
                variants={itemVariants}
                className="neumorphic-button px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center w-full md:w-auto gap-3 text-primary font-bold hover:text-primary-container transition-colors text-sm md:text-base"
              >
                <span>Full Status Page</span>
                <span className="material-symbols-outlined text-xl">analytics</span>
              </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { id: "BILLING ", cpu: 42, ram: 28, status: "Healthy" },
                { id: "CLIENT PANEL", cpu: 15, ram: 12, status: "Healthy" },
                { id: "DL-NODE-01", cpu: 58, ram: 45, status: "Healthy" },
                { id: "DL-NODE-02", cpu: 31, ram: 44, status: "Healthy" }
              ].map((node, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                  className="neumorphic-flat p-5 md:p-6 rounded-[28px] md:rounded-3xl border border-white/60 group cursor-pointer transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-1">Noida Node</p>
                      <h4 className="text-sm md:text-base font-black text-on-surface">{node.id}</h4>
                    </div>
                    <span className="px-2 md:px-3 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-tight bg-green-100 text-green-700">
                      {node.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[10px] font-bold text-on-surface-variant mb-2">
                        <span>CPU LOAD</span>
                        <span>{node.cpu}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${node.cpu}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-primary rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[10px] font-bold text-on-surface-variant mb-2">
                        <span>RAM USAGE</span>
                        <span>{node.ram}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${node.ram}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-secondary rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-outline-variant/20 flex items-center justify-center text-[8px] md:text-[10px] font-bold text-on-surface-variant">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Visit Status Page
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Plan Suggester Section - Horizontal & Thin */}
        <section className="w-full bg-surface-container-low/30 border-y border-outline-variant/10 mt-16 md:mt-24 mb-16 overflow-visible">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 relative">
            
            {/* Steve Pop-out */}
            <div className="shrink-0 -mt-20 md:-mt-32 lg:-mt-44 hidden lg:block">
              <motion.img 
                animate={floatingAnimation}
                src="/assets/steve-crossed-arms.png" 
                alt="Steve" 
                className="h-48 md:h-72 lg:h-96 w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Sliders Container */}
            <div className="flex-1 w-full py-8 md:py-12">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-on-surface tracking-tight">Looking for suggestions?</h2>
                <p className="text-on-surface-variant text-sm font-medium">Checkout our plan suggester to find your perfect fit.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Players Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-on-surface">
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">groups</span> Players</span>
                    <span className="text-primary text-lg font-black">{players}</span>
                  </div>
                  <input 
                    type="range" min="1" max="100" value={players} 
                    onChange={(e) => setPlayers(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Plugins Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-on-surface">
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-lg">extension</span> Plugins</span>
                    <span className="text-secondary text-lg font-black">{plugins}</span>
                  </div>
                  <input 
                    type="range" min="0" max="50" value={plugins} 
                    onChange={(e) => setPlugins(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-secondary"
                  />
                </div>
              </div>
              <p className="mt-6 text-[10px] text-on-surface-variant italic opacity-60">
                * This is just a recommendation, the numbers can be different.
              </p>
            </div>

            {/* Result Card - Wide/Thin */}
            <div className="w-full lg:w-auto shrink-0 py-8 lg:py-0">
              <div className="glass-card bg-white/60 border border-white/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Recommended</p>
                  <h3 className="text-xl md:text-2xl font-black text-on-surface">{plan.name}</h3>
                  <div className="flex gap-4 text-xs font-bold text-on-surface-variant mt-1">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">memory</span> {plan.ram}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">cpu</span> {plan.cpu}</span>
                  </div>
                </div>

                <div className="h-px md:h-12 w-full md:w-px bg-outline-variant/30"></div>

                <div className="flex items-center gap-6">
                  <div className="text-2xl font-black text-on-surface">
                    {plan.price}<span className="text-sm font-medium opacity-60">/mo</span>
                  </div>
                  <button className="liquid-accent px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
                    Deploy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Reviews */}
        <section id="reviews" className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <motion.div
            variants={containerVariants}
          >
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-on-surface">Loved by the Community</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {[
                { name: "Arjun Kumar", role: "Pixel Craft Admin", initial: "AK", text: "Switched from a major international host and the ping difference is night and day. My players are finally happy!" },
                { name: "Riya Singh", role: "Dev Lead @ Aurora", initial: "RS", text: "AeiloCloud's support team helped me migrate 5 Discord bots in under an hour. Truly seamless experience." },
                { name: "Vikram Jha", role: "Independent Developer", initial: "VJ", text: "Best VPS pricing in India without compromising on performance. The neumorphic panel is so satisfying to use." }
              ].map((review, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="neumorphic-flat p-6 md:p-8 rounded-[32px] w-full max-w-[350px] mx-auto sm:mx-0 cursor-default transition-all duration-300"
                >
                  <div className="flex text-secondary mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="material-symbols-outlined fill-1">star</span>
                    ))}
                  </div>
                  <p className="italic text-on-surface mb-6 font-medium">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">{review.initial}</div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-on-surface-variant">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Support Section - Pop-out Horizontal Banner */}
        <section className="w-full bg-white/60 backdrop-blur-2xl border-y border-outline-variant/30 relative z-20 mt-20 mb-16">
          <div className="px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-[1600px] mx-auto">
            
            <div className="flex flex-col md:flex-row items-end gap-6 md:gap-12 text-center md:text-left">
              {/* Pop-out Image Wrapper */}
              <div className="relative shrink-0 -mt-16 md:-mt-24 lg:-mt-32">
                <motion.img 
                  animate={floatingAnimation}
                  src="/assets/staff.png" 
                  alt="Staff Support" 
                  className="h-32 md:h-48 lg:h-64 w-auto object-contain relative z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-4 bg-black/5 blur-xl rounded-full"></div>
              </div>
              
              <div className="max-w-xl py-8 md:py-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-on-surface mb-2 tracking-tight">
                  Stuck Somewhere? <span className="text-primary">We're here to help.</span>
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base font-medium opacity-80 leading-relaxed">
                  Our dedicated support team is available 24/7 to ensure your experience is seamless and lag-free.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-8 lg:py-0">
              <button className="liquid-accent px-8 py-4 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 shadow-[0_15px_30px_rgba(0,88,188,0.25)]">
                <span>Get Support</span>
                <span className="material-symbols-outlined text-xl">contact_support</span>
              </button>
              <button className="neumorphic-button bg-white/50 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 border border-white/60">
                <span>View Documentation</span>
                <span className="material-symbols-outlined text-xl">menu_book</span>
              </button>
            </div>
          </div>
        </section>

        {/* Detailed FAQ Section */}
        <section id="faq" className="py-20 md:py-32 px-6 md:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-6">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-medium">Everything you need to know about our high-performance infrastructure.</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {[
              {
                q: "What specific hardware powers the Aeilo infrastructure?",
                a: "Our nodes are built on the latest AMD Ryzen 9 7950X and Intel Core i9-14900K processors, providing unparalleled single-core performance essential for game servers. We use 128GB+ DDR5 5600MHz RAM and enterprise-grade NVMe Gen4 storage in RAID 1 configuration to ensure maximum data throughput and zero I/O bottlenecks."
              },
              {
                q: "How does your DDoS protection handle Layer 7 attacks?",
                a: "We utilize a sophisticated multi-layered mitigation strategy. Our network edge integrates Path.net and Corero mitigation, providing over 12Tbps of global scrubbing capacity. We implement specialized rules for game-specific protocols (like RakNet, Source, and Bedrock) to filter out malicious traffic before it ever reaches your server instances."
              },
              {
                q: "What is your backup and disaster recovery policy?",
                a: "We offer automated daily off-site backups for every server instance. Backups are stored in a physically separate datacenter with a 7-day rolling retention period. You can also trigger manual snapshots at any time via our control panel, which can be restored instantly with a single click."
              },
              {
                q: "Do I get full root access and control over my environment?",
                a: "Yes, our Game and VPS nodes provide complete administrative control. For game servers, our customized Pterodactyl-based panel gives you full SFTP access, console control, and an integrated startup editor. VPS instances come with full root access via SSH, allowing you to install any custom software stack or OS distribution."
              },
              {
                q: "Where exactly are your Indian nodes located?",
                a: "Our flagship Indian infrastructure is hosted in a Tier III+ datacenter in Noida (Delhi NCR). This location is strategically chosen for its proximity to major Internet Exchange Points (IXPs) like NIXI and Extreme IX, ensuring sub-20ms latency for users across North and Central India, and sub-40ms for the rest of the subcontinent."
              },
              {
                q: "Can I scale my resources if my player base grows?",
                a: "Absolutely. Our infrastructure is designed for elastic scaling. You can upgrade your RAM, CPU cores, or storage directly from the billing portal. The upgrade process is nearly instantaneous and only requires a quick server restart to apply the new resource limits. Billing is automatically pro-rated."
              },
              {
                q: "What kind of support can I expect as a customer?",
                a: "We provide Native Expert Support 24/7. Our support team consists of actual systems engineers and game server developers, not just level-1 agents. We guarantee a response time of under 30 minutes for technical tickets, and our live chat is available for real-time assistance with configuration or setup."
              }
            ].map((faq, idx) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className={`glass-card overflow-hidden transition-all duration-500 border ${isOpen ? 'border-primary/40 bg-primary/5' : 'border-white/60 bg-white/30'}`}
                >
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group"
                  >
                    <span className={`text-sm md:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-on-surface'}`}>
                      {faq.q}
                    </span>
                    <span className={`material-symbols-outlined transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant group-hover:rotate-90'}`}>
                      expand_more
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-xs md:text-base text-on-surface-variant leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Home;