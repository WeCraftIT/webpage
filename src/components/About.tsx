import { Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-[#050816] overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-[20%] right-[-15%] w-[40rem] h-[40rem] rounded-full bg-[#2563EB]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#7C3AED]/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Core typography and content */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-[#2563EB] uppercase tracking-[0.25em] mb-6 block">
              Our Studio
            </span>
            
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-[#F8FAFC] mb-8 leading-[1.1]">
              Crafting technology that empowers ideas.
            </h2>
            
            <div className="font-sans text-base md:text-lg text-[#94A3B8] font-light leading-relaxed space-y-6">
              <p>
                At <strong className="text-[#F8FAFC] font-semibold">WE CRAFT IT</strong>, we believe every great idea deserves exceptional execution. We partner with entrepreneurs, startups, businesses, researchers and students to build digital experiences that create impact.
              </p>
              <p>
                We do not just compile source code; we architect systems. We bridge the gap between initial napkin sketches and robust, reliable software services. Whether it's a dashboard built to display real-time telemetry or a SaaS app ready to process global checkouts, we build it with attention to pixel-level details.
              </p>
            </div>

            {/* Quick studio highlights */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5">
              <div>
                <span className="block font-heading text-3xl md:text-4xl font-bold text-white mb-1">99.9%</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#94A3B8]/60">Uptime Targets</span>
              </div>
              <div>
                <span className="block font-heading text-3xl md:text-4xl font-bold text-white mb-1">100%</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#94A3B8]/60">Transparent Ops</span>
              </div>
              <div>
                <span className="block font-heading text-3xl md:text-4xl font-bold text-white mb-1">24/7</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#94A3B8]/60">Active Syncing</span>
              </div>
            </div>
          </div>

          {/* Right Column - Premium isometric structural graphics */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-square rounded-2xl border border-white/5 bg-[#0F172A]/20 p-8 overflow-hidden group">
              {/* Internal neon ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/10 to-[#7C3AED]/10 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Simulated technical build diagrams */}
              <div className="relative h-full flex flex-col justify-between font-mono text-[10px] text-[#94A3B8]/50 z-10 select-none">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[#2563EB] font-bold">{"//"} CRAFT_MANIFEST</span>
                    <p className="text-[8px] text-[#94A3B8]/30">STABILITY_CHECK: OK</p>
                  </div>
                  <Star size={14} className="text-[#7C3AED]" />
                </div>
                
                {/* Structural abstract blocks */}
                <div className="flex flex-col gap-2 my-auto">
                  <div className="h-2 bg-[#2563EB]/20 border border-[#2563EB]/40 rounded w-3/4" />
                  <div className="h-2 bg-[#7C3AED]/20 border border-[#7C3AED]/40 rounded w-1/2 ml-4" />
                  <div className="h-2 bg-white/5 border border-white/10 rounded w-2/3" />
                  <div className="h-2 bg-gradient-to-r from-[#2563EB]/30 to-[#7C3AED]/30 border border-white/5 rounded w-5/6" />
                </div>

                <div className="flex justify-between items-center text-[8px] border-t border-white/5 pt-4">
                  <span>ENGINE_VERSION: 1.0.4</span>
                  <span className="text-emerald-500 font-bold">ACTIVE BUILD_NODE</span>
                </div>
              </div>

              {/* Glowing circular node pointer */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-[#2563EB] shadow-[0_0_15px_#2563EB] animate-pulse" />
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#7C3AED] shadow-[0_0_12px_#7C3AED] animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
