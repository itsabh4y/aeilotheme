import { motion } from 'framer-motion';

const builds = [
  { name: 'PaperMC', icon: '/assets/build_icons/papermc.png' },
  { name: 'Purpur', icon: '/assets/build_icons/purpur.png' },
  { name: 'Spigot', icon: '/assets/build_icons/spigot.png' },
  { name: 'Fabric', icon: '/assets/build_icons/fabric.png' },
  { name: 'Forge', icon: '/assets/build_icons/forge.png' },
  { name: 'Java', icon: '/assets/build_icons/java.png' },
  { name: 'Python', icon: '/assets/build_icons/python.png' },
  { name: 'JavaScript', icon: '/assets/build_icons/javascript.svg' },
];

const BuildMarquee = () => {
  // We double the items to create a seamless loop for each row
  const row1 = [...builds, ...builds];
  const row2 = [...[...builds].reverse(), ...[...builds].reverse()];
  const row3 = [...builds, ...builds];

  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden bg-[#F0F2F5]/50">
      {/* Moving Background Rows - Tilted Neumorphic Style */}
      <div className="absolute inset-0 flex flex-col justify-center gap-6 md:gap-10 opacity-50 scale-110 rotate-[-2deg] md:rotate-[-3deg] pointer-events-none">
        {/* Row 1 */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {row1.map((build, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              className="flex items-center gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-4 mx-2 md:mx-4 neumorphic-flat rounded-xl md:rounded-2xl border border-white/60 bg-white/40 cursor-pointer transition-colors"
            >
              <img src={build.icon} alt="" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
              <span className="text-on-surface-variant font-bold text-[10px] md:text-sm uppercase tracking-widest">{build.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {row2.map((build, idx) => (
            <div key={idx} className="flex items-center gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-4 mx-2 md:mx-4 neumorphic-flat rounded-xl md:rounded-2xl border border-white/60 bg-white/40">
              <img src={build.icon} alt="" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
              <span className="text-on-surface-variant font-bold text-[10px] md:text-sm uppercase tracking-widest">{build.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {row3.map((build, idx) => (
            <div key={idx} className="flex items-center gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-4 mx-2 md:mx-4 neumorphic-flat rounded-xl md:rounded-2xl border border-white/60 bg-white/40">
              <img src={build.icon} alt="" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
              <span className="text-on-surface-variant font-bold text-[10px] md:text-sm uppercase tracking-widest">{build.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Fades - Light Theme */}
      <div className="absolute inset-y-0 left-0 w-40 md:w-80 bg-gradient-to-r from-[#F0F2F5] via-[#F0F2F5]/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 md:w-80 bg-gradient-to-l from-[#F0F2F5] via-[#F0F2F5]/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F2F5] via-transparent to-[#F0F2F5] z-10 pointer-events-none"></div>

      {/* Main Content Overlay */}
      <div className="relative z-20 text-center px-6 md:px-8 py-10 md:py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-on-surface"
        >
          <span className="block mb-2 md:mb-4 drop-shadow-sm">Multiple server softwares &</span>
          <span className="text-primary block drop-shadow-sm">code types supported!</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default BuildMarquee;
