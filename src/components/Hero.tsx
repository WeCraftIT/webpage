import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#2563EB', '#7C3AED', '#3B82F6', '#8B5CF6'];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const drawGrid = () => {
      if (!ctx) return;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid background overlay
      drawGrid();

      // Render interactive particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        // Interaction with mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        ctx.beginPath();
        if (dist < 180) {
          ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = (1.2 - dist / 180) * 0.8;
          
          // Draw subtle interactive link lines
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = (1.0 - dist / 180) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        } else {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
        }
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 bg-[#050816]">
      {/* Dynamic Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Modern Radial Glow Overlays */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-[#2563EB] to-[#7C3AED] opacity-15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#7C3AED] to-[#2563EB] opacity-10 blur-[150px] pointer-events-none z-0" />

      {/* Accent Grid Detail */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center z-10 py-16">
        
        {/* Monospace Badge Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 mb-8 cursor-default group"
        >
          <Sparkles size={12} className="text-[#2563EB] group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#94A3B8]">
            YOU DREAM IT. WE BUILD IT.
          </span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F8FAFC] max-w-5xl leading-[1.05] mb-8"
        >
          Transforming Ideas Into <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#7C3AED] bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </motion.h1>

        {/* Sophisticated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg md:text-xl text-[#94A3B8] max-w-3xl leading-relaxed mb-12 font-light"
        >
          We build scalable software, business websites, analytics platforms, AI solutions and academic innovations for visionaries who want to move fast.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5 justify-center"
        >
          <a
            href="#contact"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-sans text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)] hover:scale-[1.02]"
          >
            START A PROJECT
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#services"
            className="group px-8 py-4 rounded-full border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] text-[#F8FAFC] font-sans text-sm font-semibold tracking-wider transition-all duration-300"
          >
            EXPLORE SERVICES
          </a>
        </motion.div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

