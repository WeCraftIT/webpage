import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Representing fire particles / embers
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
      angle: number;
      speed: number;
    }> = [];

    // Colors matching the WE CRAFT IT theme: Blue, Indigo, Purple, Orange
    const colors = [
      'rgba(37, 99, 235, ',   // Blue
      'rgba(124, 58, 237, ',  // Purple
      'rgba(96, 165, 250, ',  // Light Blue
      'rgba(244, 63, 94, ',   // Coral/Rose
      'rgba(249, 115, 22, ',  // Orange flame ember
    ];

    const logoCenterX = width / 2;
    const logoCenterY = height / 2;

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 60 + 110; // expanded radius for larger logo boundary
      const x = logoCenterX + Math.cos(angle) * radius;
      const y = logoCenterY + Math.sin(angle) * radius + 20; // offset down slightly

      const maxLife = Math.random() * 60 + 40;
      
      // Velocity vectors rising up and inwards
      const vx = (Math.random() - 0.5) * 1.5 - Math.cos(angle) * 0.5;
      const vy = -Math.random() * 2.5 - 1.0;

      particles.push({
        x,
        y,
        vx,
        vy,
        life: 0,
        maxLife,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.05 + 0.02
      });
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Create new fire/flame particles
      if (particles.length < 180) {
        for (let i = 0; i < 4; i++) {
          createParticle();
        }
      }

      // Draw and update particles
      particles.forEach((p, idx) => {
        p.life++;
        p.x += p.vx + Math.sin(p.angle) * 0.8;
        p.y += p.vy;
        p.angle += p.speed;
        p.size *= 0.975; // Shrink as they rise

        // Calculate opacity based on life
        const progress = p.life / p.maxLife;
        const opacity = Math.max(0, 1 - progress);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + opacity + ')';
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color + '0.5)';
        ctx.fill();

        // Delete dead particles
        if (p.life >= p.maxLife || p.size <= 0.2) {
          particles.splice(idx, 1);
        }
      });

      ctx.shadowBlur = 0; // reset shadow
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // End intro screen after 2.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade exit transition to end
    }, 2800);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#050816] z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Flame Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

          {/* Centered Logo with entry scaling & pulsing glow */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Backlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/40 to-[#7C3AED]/40 blur-2xl rounded-full scale-110 opacity-70 animate-pulse pointer-events-none" />
              
              <img 
                src="logo.png" 
                alt="WE CRAFT IT Logo" 
                className="h-44 md:h-56 w-auto object-contain relative z-10" 
              />
            </motion.div>
            
            {/* Tech taglines */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center gap-1 mt-4"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#94A3B8]/60">
                Studio Booting
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#2563EB]/40 to-[#7C3AED]/40 relative mt-2">
                <motion.div
                  initial={{ left: 0 }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                  className="absolute -top-[1px] w-2 h-[3px] bg-[#2563EB] blur-[1px]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
