import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Activity, 
  Settings, 
  Database, 
  Cpu, 
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Minecraft = () => {
  const plans = [
    { name: "Grass Node", price: "180", ram: "4GB", cpu: "1 vCore", disk: "20GB", ports: "2", splitter: "1", bandwidth: "1Gbps", color: "primary" },
    { name: "Dirt Node", price: "270", ram: "6GB", cpu: "2 vCores", disk: "40GB", ports: "4", splitter: "1", bandwidth: "1Gbps", color: "primary" },
    { name: "Stone Node", price: "360", ram: "8GB", cpu: "3 vCores", disk: "60GB", ports: "6", splitter: "2", bandwidth: "1Gbps", color: "primary" },
    { name: "Iron Node", price: "450", ram: "10GB", cpu: "4 vCores", disk: "80GB", ports: "8", splitter: "2", bandwidth: "1Gbps", color: "primary" },
    { name: "Gold Node", price: "540", ram: "12GB", cpu: "5 vCores", disk: "100GB", ports: "10", splitter: "3", bandwidth: "1Gbps", color: "primary" },
    { name: "Diamond Node", price: "630", ram: "16GB", cpu: "6 vCores", disk: "120GB", ports: "12", splitter: "3", bandwidth: "2Gbps", color: "secondary", popular: true },
    { name: "Emerald Node", price: "720", ram: "18GB", cpu: "8 vCores", disk: "160GB", ports: "16", splitter: "4", bandwidth: "2Gbps", color: "primary" },
    { name: "Obsidian Node", price: "810", ram: "20GB", cpu: "10 vCores", disk: "200GB", ports: "20", splitter: "5", bandwidth: "2Gbps", color: "primary" },
    { name: "Bedrock Node", price: "900", ram: "24GB", cpu: "12 vCores", disk: "250GB", ports: "24", splitter: "6", bandwidth: "5Gbps", color: "primary" },
    { name: "Void Node", price: "1200", ram: "32GB", cpu: "Dedicated", disk: "500GB", ports: "Unlimited", splitter: "Unlimited", bandwidth: "10Gbps", color: "secondary" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#F0F2F5] min-h-screen pt-32 pb-20"
    >
      <main className="max-w-[1800px] mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
             <img src="/assets/icons/minecraft.png" alt="" className="w-96 h-96 mx-auto blur-3xl" />
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Extreme Performance</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
              Minecraft Hosting <br/>
              <span className="text-primary">Redefined.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Powered by Ryzen 9 7950X processors and Gen4 NVMe storage. <br className="hidden md:block"/>
              Experience zero-lag survival with 99.9% uptime guaranteed.
            </p>
          </motion.div>
        </section>

        {/* Pricing Grid */}
        <section className="mb-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
          >
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`neumorphic-flat rounded-[32px] p-6 flex flex-col relative overflow-hidden transition-all duration-300 cursor-pointer ${plan.popular ? 'border-2 border-primary/20' : 'border border-white/60'}`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-lg shadow-primary/30">Popular</span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-black text-slate-800 mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-primary">₹{plan.price}</span>
                    <span className="text-slate-500 font-bold text-xs">/mo</span>
                  </div>
                </div>

                <div className="space-y-2 mb-8 flex-grow">
                  {[
                    { icon: <Cpu className="w-4 h-4"/>, label: "CPU", value: plan.cpu },
                    { icon: <Database className="w-4 h-4"/>, label: "RAM", value: plan.ram },
                    { icon: <Database className="w-4 h-4"/>, label: "Disk", value: plan.disk },
                    { icon: <Settings className="w-4 h-4"/>, label: "Ports", value: plan.ports },
                    { icon: <Settings className="w-4 h-4"/>, label: "Splitter", value: plan.splitter },
                    { icon: <Globe className="w-4 h-4"/>, label: "Bandwidth", value: plan.bandwidth },
                  ].map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center p-2.5 rounded-xl bg-white/40 border border-white/60 text-[11px]">
                      <div className="flex items-center gap-2 text-slate-500 font-bold">
                        {spec.icon}
                        <span>{spec.label}</span>
                      </div>
                      <span className="font-black text-slate-800">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3.5 rounded-2xl font-black text-xs transition-all duration-300 active:scale-95 shadow-lg ${plan.popular ? 'liquid-accent' : 'neumorphic-button text-primary'}`}>
                  Deploy Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Technical Features */}
        <section className="mb-32">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Aeilo Edge</h2>
            <p className="text-slate-600 font-medium">Why the biggest communities choose our infrastructure.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Zap/>, title: "7950X Performance", desc: "5.7GHz boost clocks for maximum TPS even with heavy modpacks." },
              { icon: <Shield/>, title: "Game Mitigation", desc: "Custom L7 rules for Minecraft protocols to filter out all bot attacks." },
              { icon: <Settings/>, title: "Tailored Panel", desc: "Highly optimized Pterodactyl panel with one-click plugin installers." },
              { icon: <Globe/>, title: "Low Latency", desc: "Located at Noida Datacenter for <20ms ping across North India." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-[32px] border border-white/60 transition-colors hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-black text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Comparison Callout */}
        <motion.section 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="neumorphic-inset rounded-[48px] p-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-white/30 mb-20"
        >
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Still hosting on shared CPUs?</h3>
            <p className="text-slate-600 font-medium">Most hosts oversell resources. At Aeilo, we guarantee your vCore performance with dedicated threading on our Ryzen 9 nodes.</p>
          </div>
          <button className="liquid-accent px-10 py-5 rounded-3xl font-black flex items-center gap-4 group">
            Compare Hardware
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default Minecraft;
