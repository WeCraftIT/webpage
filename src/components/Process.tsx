import { motion } from 'framer-motion';
import { Compass, Eye, ShieldCheck, Cpu, CloudLightning, Activity } from 'lucide-react';

const phases = [
  {
    icon: <Compass className="w-6 h-6 text-[#2563EB]" />,
    step: '01',
    title: 'Discover',
    desc: 'We start by aligning with your long-term goals, analyzing project viability, scoping requirements, and mapping the technical landscape.'
  },
  {
    icon: <Eye className="w-6 h-6 text-[#7C3AED]" />,
    step: '02',
    title: 'Plan',
    desc: 'Structuring architecture blueprints, specifying database schemas, drafting execution timelines, and finalizing the budget scopes.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
    step: '03',
    title: 'Design',
    desc: 'Creating visual wireframes, defining exact component style guides, setting up user-experience paths, and interactive high-fidelity layouts.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#7C3AED]" />,
    step: '04',
    title: 'Develop',
    desc: 'Writing optimized clean code, setting up CI/CD pipes, building backend pipelines, and wrapping responsive frontends with animations.'
  },
  {
    icon: <CloudLightning className="w-6 h-6 text-[#2563EB]" />,
    step: '05',
    title: 'Deploy',
    desc: 'Releasing to robust staging servers, running functional audits, performing speed optimization tests, and launching production environments.'
  },
  {
    icon: <Activity className="w-6 h-6 text-[#7C3AED]" />,
    step: '06',
    title: 'Support',
    desc: 'Delivering detailed documentation, training operators, establishing server uptime tracking, and managing feature iteration cycles.'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 80, 
      damping: 15 
    } 
  }
};

export default function Process() {
  return (
    <section id="process" className="py-32 relative bg-[#050816] overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#2563EB]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-[#7C3AED] uppercase tracking-[0.25em] mb-4">
            Workflow
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-6">
            Our Development Blueprint
          </h2>
          <p className="font-sans text-base md:text-lg text-[#94A3B8] font-light leading-relaxed">
            From absolute blank canvas to scalable production grade infrastructure, 
            our systematic delivery process ensures predictability at every milestone.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {/* Connector Line overlay for large displays */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-[#2563EB]/10 via-[#7C3AED]/20 to-[#2563EB]/10 -translate-y-1/2 -z-10 pointer-events-none" />

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative p-8 rounded-2xl border border-white/5 bg-[#0F172A]/20 backdrop-blur-sm group hover:border-[#2563EB]/30 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
            >
              {/* Card top elements */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Step Number */}
                  <span className="font-mono text-xs tracking-wider text-[#94A3B8]/40 font-bold bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                    PHASE {phase.step}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-[#2563EB]/10 group-hover:border-[#2563EB]/20 transition-all duration-300">
                    {phase.icon}
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#F8FAFC] mb-4 group-hover:text-[#2563EB] transition-colors">
                  {phase.title}
                </h3>
                
                <p className="font-sans text-sm text-[#94A3B8] font-light leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-8 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="h-[2px] w-12 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#2563EB]/30 group-hover:to-transparent transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
