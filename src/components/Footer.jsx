import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    compute: [
      { name: "Minecraft Hosting", path: "/services" },
      { name: "Discord Bot Hosting", path: "/services" },
      { name: "VPS Nodes", path: "/services" },
      { name: "Dedicated Servers", path: "/services" },
      { name: "Game Panel", path: "#" }
    ],
    resources: [
      { name: "Knowledge Base", path: "#" },
      { name: "Network Status", path: "#" },
      { name: "Community Discord", path: "#" },
      { name: "API Documentation", path: "#" },
      { name: "Billing Portal", path: "#" }
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Infrastructure", path: "/#features" },
      { name: "Global Locations", path: "/#infrastructure" },
      { name: "Success Stories", path: "/#reviews" },
      { name: "Contact Support", path: "#" }
    ],
    legal: [
      { name: "Terms of Service", path: "/legal" },
      { name: "Privacy Policy", path: "/legal" },
      { name: "SLA Guarantee", path: "/legal" },
      { name: "Cookie Policy", path: "/legal" }
    ]
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 pt-20 pb-10 px-6 md:px-8 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16">
          
          {/* Brand and Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="AeiloCloud" className="h-10 md:h-12 w-auto object-contain" />
              <span className="text-2xl font-black text-blue-600 tracking-tighter">AeiloCloud</span>
            </Link>
            <p className="text-on-surface-variant font-medium leading-relaxed max-w-sm">
              Engineering the next generation of gaming infrastructure. High-performance, low-latency, and absolute reliability for creators and developers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all active:scale-90">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all active:scale-90">
                <span className="material-symbols-outlined text-xl">forum</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all active:scale-90">
                <span className="material-symbols-outlined text-xl">code</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-5">
              <h5 className="font-black text-on-surface text-sm uppercase tracking-widest">Compute</h5>
              <nav className="flex flex-col gap-3">
                {footerLinks.compute.map((link) => (
                  <Link key={link.name} to={link.path} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">{link.name}</Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="font-black text-on-surface text-sm uppercase tracking-widest">Company</h5>
              <nav className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <Link key={link.name} to={link.path} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">{link.name}</Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="font-black text-on-surface text-sm uppercase tracking-widest">Legal</h5>
              <nav className="flex flex-col gap-3">
                {footerLinks.legal.map((link) => (
                  <Link key={link.name} to={link.path} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">{link.name}</Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-3">
            <div className="neumorphic-flat p-6 rounded-3xl border border-white/60">
              <h5 className="font-black text-on-surface mb-3">Join the fleet</h5>
              <p className="text-on-surface-variant text-xs mb-6 font-medium">Get infrastructure updates and scaling tips directly to your inbox.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="bg-surface-variant/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button className="liquid-accent py-3 rounded-xl font-bold text-sm">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            <span className="text-on-surface">© 2024 AeiloCloud Infrastructure</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All Systems Operational
            </span>
          </div>
          <div className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mr-2">Secured By</span>
            <img src="/assets/trustpilot-rating.svg" alt="Trustpilot" className="h-5 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
