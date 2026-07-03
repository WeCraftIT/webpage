import { motion } from 'framer-motion';
import { 
  Code, Globe, User, BarChart3, GraduationCap, 
  BrainCircuit, Zap, Rocket, ChevronRight 
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6 text-[#2563EB]" />,
    title: 'Custom Software',
    desc: 'Bespoke, high-performance applications designed specifically for your operational workflows, ensuring speed, security, and scalability.',
    badge: 'Enterprise'
  },
  {
    icon: <Globe className="w-6 h-6 text-[#7C3AED]" />,
    title: 'Business Websites',
    desc: 'Stunning, blazing-fast marketing and corporate sites engineered to build authority, convert visitors, and capture search intent.',
    badge: 'Marketing'
  },
  {
    icon: <User className="w-6 h-6 text-[#2563EB]" />,
    title: 'Portfolio Websites',
    desc: 'High-end interactive digital resumes and agency showcase sites built to command attention and highlight your best creations.',
    badge: 'Creative'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#7C3AED]" />,
    title: 'Analytics & Dashboards',
    desc: 'Real-time data visualization platforms and executive command centers that transform complex data streams into actionable intelligence.',
    badge: 'Data'
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#2563EB]" />,
    title: 'Academic Solutions',
    desc: 'Sophisticated experimental prototypes, thesis systems, and algorithmic projects tailored for researchers and students.',
    badge: 'Research'
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-[#7C3AED]" />,
    title: 'AI Applications',
    desc: 'Intelligent agent systems, LLM integrations, retrieval-augmented generation (RAG) hubs, and smart automation modules.',
    badge: 'Artificial Intelligence'
  },
  {
    icon: <Zap className="w-6 h-6 text-[#2563EB]" />,
    title: 'Automation',
    desc: 'Custom workflows and API connectors that eliminate repetitive tasks, synchronizing your operations silently in the background.',
    badge: 'Efficiency'
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#7C3AED]" />,
    title: 'MVP Development',
    desc: 'Rapid product design and engineering to launch your startup or validate features in record time without compromising code quality.',
    badge: 'Startups'
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
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 100, 
      damping: 15 
    } 
  }
};


export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-[#050816] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-[40%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[25rem] h-[25rem] rounded-full bg-[#2563EB]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-20 max-w-3xl">
          <span className="font-mono text-xs text-[#2563EB] uppercase tracking-[0.25em] mb-4">
            Capabilities
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-6">
            Elite engineering services for visionaries.
          </h2>
          <p className="font-sans text-base md:text-lg text-[#94A3B8] font-light leading-relaxed">
            From custom SaaS architectures to rapid startup MVPs and specialized AI integrations, 
            we craft high-end solutions using industry-standard engineering patterns.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-white/5 bg-[#0F172A]/30 backdrop-blur-md p-8 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Hover Border Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute inset-[1px] bg-[#050816] rounded-[15px] -z-10 group-hover:bg-[#0F172A]/90 transition-colors duration-500" />
              
              <div>
                {/* Icon wrapper with subtle glow */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8 group-hover:border-white/10 group-hover:bg-white/[0.05] transition-all duration-300">
                  {service.icon}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-xl font-semibold text-[#F8FAFC]">
                    {service.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-[#94A3B8] font-light leading-relaxed mb-6 group-hover:text-[#F8FAFC]/90 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#94A3B8]/50 group-hover:text-[#F8FAFC]/50 transition-colors">
                  {service.badge}
                </span>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform duration-300">
                  <ChevronRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
