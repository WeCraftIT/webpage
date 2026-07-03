import { motion } from 'framer-motion';
import { Timer, Eye, Cpu, Coins, ShieldCheck, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: <Timer className="w-6 h-6 text-[#2563EB]" />,
    title: 'Fast Delivery',
    desc: 'We optimize development workflows and eliminate red tape to deliver fully-functional solutions in record time.'
  },
  {
    icon: <Eye className="w-6 h-6 text-[#7C3AED]" />,
    title: 'Transparent Process',
    desc: 'Get absolute transparency with direct Slack access, Git progress monitoring, and interactive weekly reviews.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#2563EB]" />,
    title: 'Modern Technologies',
    desc: 'We engineer with the latest stable technology stacks to guarantee clean, maintenance-free codebases.'
  },
  {
    icon: <Coins className="w-6 h-6 text-[#7C3AED]" />,
    title: 'Affordable Solutions',
    desc: 'Enterprise-grade quality tailored to your exact budget constraints, from startup budgets to large organizations.'
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[#2563EB]" />,
    title: 'Dedicated Support',
    desc: 'We stand by our code. Rest easy with proactive uptime monitoring, bug patches, and reliable monthly SLAs.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#7C3AED]" />,
    title: 'Scalable Architecture',
    desc: 'Our projects are architected to support surges in traffic and modular scaling as your company expands.'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 90, 
      damping: 15 
    } 
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-32 relative bg-[#050816] overflow-hidden">
      {/* Decorative Blur Overlays */}
      <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#7C3AED]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-[#7C3AED] uppercase tracking-[0.25em] mb-4">
            Advantages
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-6">
            Why Visionaries Work With Us
          </h2>
          <p className="font-sans text-base md:text-lg text-[#94A3B8] font-light leading-relaxed">
            We are builders, engineers, and digital architects. We strip away the corporate bloat 
            to focus purely on delivering high-fidelity functional products.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl border border-white/5 bg-[#0F172A]/10 hover:border-white/10 hover:bg-[#0F172A]/20 transition-all duration-300 flex items-start gap-5"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                {reason.icon}
              </div>

              {/* Text content */}
              <div>
                <h3 className="font-heading text-xl font-bold text-[#F8FAFC] mb-2">
                  {reason.title}
                </h3>
                <p className="font-sans text-sm text-[#94A3B8] font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
