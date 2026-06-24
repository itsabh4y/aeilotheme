import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Bot, 
  Zap, 
  Shield, 
  ArrowRight,
  Activity,
  Server
} from 'lucide-react';

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background text-on-surface font-sans min-h-screen pt-32 pb-20 px-6"
    >
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-24">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Infrastructure for Professionals</span>
          <h1 className="font-display text-4xl md:text-6xl font-black mb-6 max-w-3xl mx-auto tracking-tighter">
            Engineered for <span className="text-primary">Performance.</span> Built for Scale.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
            Experience the next generation of cloud infrastructure with our high-frequency nodes and liquid-cooled stability.
          </p>
        </header>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Minecraft Hosting: Primary Focus */}
          <div className="md:col-span-7 neumorphic-flat rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <Gamepad2 className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Gaming Tier</span>
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Minecraft Hosting</h2>
              <p className="text-on-surface-variant mb-8 max-w-md">
                Deploy your community on high-performance Ryzen 9 nodes. Extreme single-thread performance paired with enterprise NVMe storage and dedicated DDR4 ECC RAM.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <Shield className="text-primary w-5 h-5" />
                  <span>Advanced DDoS Protection (12Tbps+)</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <Activity className="text-primary w-5 h-5" />
                  <span>99.9% Uptime SLA Guaranteed</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <Zap className="text-primary w-5 h-5" />
                  <span>Dedicated Game Panel (Pterodactyl)</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="glass-card px-6 py-4 rounded-2xl flex flex-col bg-white/50">
                <span className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Starting at</span>
                <span className="text-3xl font-display font-bold text-primary">₹299<small className="text-sm">/mo</small></span>
              </div>
              <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,88,188,0.2)] hover:translate-y-[-2px] transition-all duration-300">
                Order Now
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Discord Bot Hosting */}
          <div className="md:col-span-5 neumorphic-flat rounded-[32px] p-10 flex flex-col group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="mb-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 shadow-sm">
                <Bot className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Discord Bot Hosting</h2>
              <p className="text-on-surface-variant mb-6">
                Uninterrupted presence for your community. Supports JS, Python, Java, and Go with 1-click installer scripts.
              </p>
              <div className="space-y-4 bg-surface-container-low p-6 rounded-2xl neumorphic-inset">
                <div className="flex justify-between items-center">
                  <span className="font-bold">24/7 Uptime</span>
                  <span className="text-xs font-bold text-secondary uppercase">Always Online</span>
                </div>
                <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full w-[99.9%]"></div>
                </div>
                <p className="text-xs text-on-surface-variant font-medium">Real-time node monitoring and auto-restart enabled.</p>
              </div>
            </div>
            <div className="mt-auto">
              <button className="w-full glass-card border-secondary/20 text-secondary py-5 rounded-2xl font-bold hover:bg-secondary hover:text-white transition-all duration-300 bg-white/30">
                Order Now
              </button>
            </div>
          </div>

          {/* VPS Hosting: Coming Soon */}
          <div className="md:col-span-12 glass-card rounded-[40px] p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden border-primary/10 bg-white/20">
            <div className="flex-1 order-2 md:order-1">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">Coming Soon</div>
              <h2 className="text-4xl md:text-5xl font-display font-black mb-6 text-on-surface tracking-tighter">Scalable VPS Infrastructure</h2>
              <p className="text-lg text-on-surface-variant mb-10 max-w-xl">
                Our cloud-native VPS nodes are currently in the final stages of stress testing. Prepare for KVM virtualization on ultra-fast network backbones with instant scaling.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-6 py-4 bg-white/50 rounded-2xl border border-white/40">
                  <Zap className="text-primary w-5 h-5" />
                  <span className="font-bold">10Gbps Network</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-white/50 rounded-2xl border border-white/40">
                  <Terminal className="text-primary w-5 h-5" />
                  <span className="font-bold">Root Access</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-white/50 rounded-2xl border border-white/40">
                  <Globe className="text-primary w-5 h-5" />
                  <span className="font-bold">Dedicated IP</span>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full h-[400px] rounded-3xl overflow-hidden relative shadow-2xl">
              <img 
                alt="Server Room" 
                className="w-full h-full object-cover grayscale opacity-80" 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/40 backdrop-blur-xl border border-white/40 text-on-surface px-8 py-4 rounded-2xl font-bold shadow-xl">
                  Notify Me on Launch
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Services;
