import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: <Github size={16} />, href: 'https://github.com/WeCraftIT', label: 'GitHub' },
    { icon: <Linkedin size={16} />, href: 'https://linkedin.com/company/wecraftit', label: 'LinkedIn' },
    { icon: <Instagram size={16} />, href: 'https://instagram.com/wecraftit', label: 'Instagram' },
    { icon: <Mail size={16} />, href: 'mailto:connect.wecraftit@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="py-20 border-t border-white/5 bg-[#050816] relative overflow-hidden">
      {/* Subtle radial shine */}
      <div className="absolute bottom-0 left-[50%] -translate-x-1/2 w-[35rem] h-[15rem] rounded-full bg-[#2563EB]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Logo & Description */}
          <div className="text-left max-w-xs">
            <img 
              src="logo.png" 
              alt="WE CRAFT IT Logo" 
              className="h-12 md:h-16 w-auto object-contain mb-4" 
            />
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed font-light">
              Premium digital engineering studio helping entrepreneurs, startups, businesses, and researchers build scalable experiences.
            </p>
          </div>

          {/* Quick Links Directory */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#94A3B8]/40 font-bold">Studio</span>
              <a href="#" className="font-sans text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">Home</a>
              <a href="#services" className="font-sans text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">Services</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#94A3B8]/40 font-bold">Company</span>
              <a href="#process" className="font-sans text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">Process</a>
              <a href="#about" className="font-sans text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">About Us</a>
              <a href="#contact" className="font-sans text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">Contact</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-[#94A3B8]/40 font-mono text-[10px]">
          
          {/* Copyright */}
          <span>
            &copy; {new Date().getFullYear()} WE CRAFT IT. ALL RIGHTS RESERVED.
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                aria-label={s.label}
                className="text-[#94A3B8] hover:text-[#2563EB] hover:scale-110 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] transition-all duration-300 ml-4 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
