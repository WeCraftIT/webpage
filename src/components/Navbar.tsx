import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050816]/75 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand/Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
        >
          <img 
            src="logo.png" 
            alt="WE CRAFT IT Logo" 
            className="h-14 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs tracking-wider text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 relative py-2 group font-semibold"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-[#F8FAFC] font-sans text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.05)] hover:shadow-[0_0_25px_rgba(37,99,235,0.15)]"
          >
            <span className="relative z-10">START A PROJECT</span>
            <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-[#050816]/95 backdrop-blur-2xl border-b border-white/5 py-8 px-6 transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-lg font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-sans text-sm font-semibold tracking-wider transition-all duration-300"
          >
            START A PROJECT
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}

