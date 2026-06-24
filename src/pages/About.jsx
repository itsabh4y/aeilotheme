import { motion } from 'framer-motion';
import {
  Zap,
  Globe,
  Activity,
  Network,
  ArrowRight,
  Shield,
  Clock
} from 'lucide-react';


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background text-on-surface font-sans min-h-screen pt-32 pb-20"
    >
      <main>
        {/* Hero Vision Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest mb-4 block">Our Vision</span>
              <h1 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                Pioneering the Future of Digital Infrastructure in Asia.
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant mb-8 leading-relaxed">
                AeiloCloud was born from a simple observation: the gaming and high-performance compute market in South Asia deserved better. We are building the backbone for the next generation of digital experiences.
              </p>
              <div className="flex gap-4">
                <div className="neumorphic-flat p-6 rounded-2xl flex-1">
                  <Activity className="text-primary w-8 h-8 mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-1">99.9%</h3>
                  <p className="text-on-surface-variant text-sm font-bold">Uptime SLA</p>
                </div>
                <div className="neumorphic-flat p-6 rounded-2xl flex-1">
                  <Globe className="text-secondary w-8 h-8 mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-1">Global</h3>
                  <p className="text-on-surface-variant text-sm font-bold">Anycast Network</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden neumorphic-flat p-4">
                <img
                  className="w-full h-full object-cover rounded-[2.5rem] grayscale"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
                  alt="Infrastructure Technology"
                />
              </div>
              {/* Liquid Glass Overlay */}
              <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-2xl shadow-xl max-w-xs bg-white/40">
                <p className="text-xl font-display font-bold text-on-surface mb-2">Performance Engineered.</p>
                <p className="text-sm text-on-surface-variant font-medium">Every node in our network is optimized for the lowest possible latency and maximum throughput.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story: Neumorphic Timeline */}
        <section className="bg-surface-variant/20 py-32 border-y border-white/40">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-display font-bold mb-4">Our Story</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">From a local community in India to a global infrastructure provider.</p>
            </div>
            <div className="relative space-y-12">
              {/* Timeline Path */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-outline-variant hidden md:block opacity-20"></div>

              {/* Milestone 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="md:w-[45%] neumorphic-flat p-8 rounded-3xl mb-8 md:mb-0"
                >
                  <span className="text-primary font-bold block mb-2">2019</span>
                  <h3 className="text-2xl font-display font-bold mb-3">The Spark</h3>
                  <p className="text-on-surface-variant font-medium">Founded in Mumbai by a group of competitive gamers frustrated by high pings and unreliable routing. We started with just one rack and a vision.</p>
                </motion.div>
                <div className="z-10 w-12 h-12 rounded-full neumorphic-flat flex items-center justify-center bg-background border-4 border-white">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="md:w-[45%]"></div>
              </div>

              {/* Milestone 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="md:w-[45%] neumorphic-flat p-8 rounded-3xl mb-8 md:mb-0"
                >
                  <span className="text-primary font-bold block mb-2">2021</span>
                  <h3 className="text-2xl font-display font-bold mb-3">Expanding Horizons</h3>
                  <p className="text-on-surface-variant font-medium">AeiloCloud expands to Singapore and Tokyo, establishing our first cross-continental high-speed backbone designed specifically for real-time applications.</p>
                </motion.div>
                <div className="z-10 w-12 h-12 rounded-full neumorphic-flat flex items-center justify-center bg-background border-4 border-white">
                  <div className="w-4 h-4 rounded-full bg-secondary"></div>
                </div>
                <div className="md:w-[45%]"></div>
              </div>

              {/* Milestone 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="md:w-[45%] neumorphic-flat p-8 rounded-3xl"
                >
                  <span className="text-primary font-bold block mb-2">2024</span>
                  <h3 className="text-2xl font-display font-bold mb-3">The Infrastructure Cloud</h3>
                  <p className="text-on-surface-variant font-medium">Today, we manage thousands of nodes globally, providing the most robust VPS and game server hosting platform in the region.</p>
                </motion.div>
                <div className="z-10 w-12 h-12 rounded-full neumorphic-flat flex items-center justify-center bg-background border-4 border-white">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Bento Grid */}
        <section className="py-32 max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Why Choose AeiloCloud?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="md:col-span-2 neumorphic-flat p-10 rounded-[2rem] flex flex-col justify-between group">
              <div>
                <Network className="text-primary w-12 h-12 mb-6" />
                <h3 className="text-3xl font-display font-bold mb-4">Optimized Global Network</h3>
                <p className="text-on-surface-variant text-lg font-medium">We don't just rent space. We own our hardware and manage our own ASN, ensuring your traffic takes the most efficient path possible.</p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="glass-card px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-white/50">Direct Peering</div>
                <div className="glass-card px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-white/50">DDoS Protection</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="neumorphic-flat p-10 rounded-[2rem] bg-gradient-to-br from-primary to-blue-800 text-white shadow-xl shadow-primary/20">
              <Clock className="text-white w-12 h-12 mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">Expert Support</h3>
              <p className="opacity-90 font-medium">Engineers, not call centers. Get direct access to infrastructure experts who understand your workload.</p>
              <div className="mt-12 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/4 rounded-full"></div>
              </div>
              <p className="mt-2 text-xs font-bold opacity-75">Average response: 12 mins</p>
            </div>

            {/* Card 3 */}
            <div className="neumorphic-flat p-10 rounded-[2rem]">
              <Zap className="text-secondary w-12 h-12 mb-6" fill="currentColor" />
              <h3 className="text-2xl font-display font-bold mb-4">Low Latency</h3>
              <p className="text-on-surface-variant font-medium">Sub-10ms pings to major Asian hubs. Perfect for gaming, fintech, and real-time data.</p>
            </div>

            {/* Card 4 (Teaser) */}
            <div className="md:col-span-2 neumorphic-flat p-10 rounded-[2rem] border-2 border-dashed border-primary/20 flex items-center justify-between">
              <div>
                <span className="text-primary font-bold mb-2 block uppercase tracking-widest text-xs">Coming Soon</span>
                <h3 className="text-2xl font-display font-bold mb-2">Enterprise Solutions</h3>
                <p className="text-on-surface-variant max-w-md font-medium">Private clouds, dedicated bare-metal clusters, and managed Kubernetes for high-growth startups.</p>
              </div>
              <button className="neumorphic-button w-16 h-16 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </section>

        {/* Node Map Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="bg-slate-950 text-white rounded-[3rem] p-12 overflow-hidden relative min-h-[500px] flex items-center shadow-2xl">
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl font-display font-bold mb-6">Our Global Nodes</h2>
              <p className="text-lg opacity-80 mb-8 leading-relaxed font-medium">We operate in 14 strategic locations worldwide, with a heavy focus on the Asia-Pacific region to provide unparalleled connectivity where it's needed most.</p>
              <div className="flex flex-wrap gap-4">
                {['Mumbai', 'Singapore', 'Tokyo', 'Dubai', 'Frankfurt'].map(city => (
                  <span key={city} className="bg-white/10 px-4 py-2 rounded-xl text-sm font-bold border border-white/10">{city}</span>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none hidden lg:block">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
                alt="Global Network Map"
              />
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default About;
