import { motion } from 'framer-motion';
import {
  Gavel,
  FileText,
  Shield,
  Terminal,
  CreditCard,
  Printer,
  ThumbsUp,
  ThumbsDown,
  Globe,
  CheckCircle,
  Mail,
  MessageSquare
} from 'lucide-react';

const Legal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background text-on-surface font-sans min-h-screen pt-32 pb-20 px-8"
    >
      <main className="max-w-7xl mx-auto">
        <header className="mb-12">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-widest uppercase text-xs mb-4">
            <Gavel className="w-4 h-4 mr-2" />
            Legal Governance
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tighter">Legal Center</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl font-medium">
            Transparency and security are at the core of our infrastructure. Review our policies to understand how we protect your data and maintain service excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-3 space-y-4">
            <nav className="sticky top-28 flex flex-col gap-4">
              <button className="neumorphic-inset flex items-center gap-4 p-4 rounded-xl text-primary font-bold transition-all w-full text-left">
                <FileText className="w-5 h-5" />
                <span className="text-sm">Terms of Service</span>
              </button>
              <button className="neumorphic-flat hover:neumorphic-inset flex items-center gap-4 p-4 rounded-xl text-on-surface-variant font-bold transition-all w-full text-left">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Privacy Policy</span>
              </button>
              <button className="neumorphic-flat hover:neumorphic-inset flex items-center gap-4 p-4 rounded-xl text-on-surface-variant font-bold transition-all w-full text-left">
                <Terminal className="w-5 h-5" />
                <span className="text-sm">Usage Policy</span>
              </button>
              <button className="neumorphic-flat hover:neumorphic-inset flex items-center gap-4 p-4 rounded-xl text-on-surface-variant font-bold transition-all w-full text-left">
                <CreditCard className="w-5 h-5" />
                <span className="text-sm">Refund Policy</span>
              </button>

              <div className="mt-8 p-6 rounded-2xl bg-surface-variant/30 border border-white/50 shadow-inner">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Need Help?</p>
                <p className="text-xs text-on-surface-variant mb-4 font-medium">Our legal team is available for specific inquiries regarding enterprise agreements.</p>
                <button className="w-full py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                  Contact Support
                </button>
              </div>
            </nav>
          </aside>

          {/* Content Area */}
          <section className="md:col-span-9">
            <div className="glass-card rounded-[32px] p-10 md:p-16 shadow-2xl relative overflow-hidden bg-white/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-on-surface mb-2">Terms of Service</h2>
                    <p className="text-sm text-on-surface-variant font-bold">Last Updated: October 24, 2024</p>
                  </div>
                  <button className="neumorphic-flat p-3 rounded-full text-primary active:scale-90 transition-transform">
                    <Printer className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-8 text-on-surface-variant leading-relaxed font-medium">
                  <section>
                    <h3 className="text-2xl font-display font-bold text-on-surface mb-4">1. Acceptance of Terms</h3>
                    <p className="mb-4">
                      By accessing and using AeiloCloud's infrastructure, including but not limited to Minecraft hosting, VPS nodes, and Discord bot hosting, you agree to be bound by these Terms of Service. If you do not agree to all terms and conditions, you are prohibited from using our services.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-display font-bold text-on-surface mb-4">2. Service Provision</h3>
                    <p className="mb-4">
                      AeiloCloud provides high-performance computing resources. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time. We maintain a 99.9% uptime SLA for all premium infrastructure nodes.
                    </p>
                    <div className="p-6 bg-surface-variant/30 rounded-2xl border-l-4 border-primary italic">
                      "Performance engineered" is not just a slogan; it is our technical standard for all hardware deployments.
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-display font-bold text-on-surface mb-4">3. User Responsibilities</h3>
                    <p className="mb-4">
                      Users are responsible for maintaining the security of their accounts and any content hosted on our servers. Activities that degrade server performance for other users (e.g., unauthorized stress testing or crypto-mining on non-dedicated nodes) are strictly prohibited.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Accurate registration information is required.</li>
                      <li>Compliance with local and international laws is mandatory.</li>
                      <li>Prohibition of resource abuse on shared instances.</li>
                    </ul>
                  </section>
                </div>

                <div className="mt-16 pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="text-sm text-on-surface-variant font-bold">Was this document helpful?</p>
                  <div className="flex gap-4">
                    <button className="neumorphic-flat px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:text-green-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" /> Yes
                    </button>
                    <button className="neumorphic-flat px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:text-red-600 transition-colors">
                      <ThumbsDown className="w-4 h-4" /> No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Global Compliance Section */}
        <section className="mt-24">
          <div className="rounded-[40px] bg-slate-950 p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-display font-bold mb-4">Global Compliance</h2>
                <p className="text-slate-400 font-medium mb-8 text-lg">Our infrastructure adheres to regional data sovereignty laws across 12 global regions, ensuring your legal peace of mind wherever you deploy.</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'GDPR Compliant',
                    'SOC2 Type II',
                    'HIPAA Ready',
                    'PCI-DSS Level 1'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="text-primary w-5 h-5" fill="currentColor" />
                      <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 w-full h-64 rounded-2xl bg-slate-900 border border-white/10 relative overflow-hidden group">
                <img
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000"
                  alt="Secure Network Infrastructure"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold tracking-widest uppercase">Live Infrastructure Status</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Legal;
