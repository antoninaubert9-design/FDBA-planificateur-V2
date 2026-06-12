"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const floatingOrbs = [
  { cx: "20%", cy: "30%", r: 300, color: "#6d28d9", delay: 0 },
  { cx: "75%", cy: "20%", r: 250, color: "#3b82f6", delay: 1 },
  { cx: "60%", cy: "70%", r: 200, color: "#8b5cf6", delay: 2 },
  { cx: "10%", cy: "75%", r: 180, color: "#0ea5e9", delay: 1.5 },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const orb1X = useTransform(springX, (v) => v * 0.03);
  const orb1Y = useTransform(springY, (v) => v * 0.03);
  const orb2X = useTransform(springX, (v) => v * -0.02);
  const orb2Y = useTransform(springY, (v) => v * -0.02);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.width / 2);
      mouseY.set(e.clientY - rect.height / 2);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508]"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full bg-violet-600 blur-[120px]" />
        </motion.div>

        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-full h-full rounded-full bg-blue-500 blur-[120px]" />
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <div className="w-full h-full rounded-full bg-indigo-500 blur-[100px]" />
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/30 mb-8"
        >
          <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-xs font-medium text-violet-300">
            +340% de taux de closing en moyenne
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-6"
        >
          <span className="text-white">Close chaque</span>
          <br />
          <span className="text-gradient">opportunité.</span>
          <br />
          <span className="text-white/40 text-5xl md:text-7xl font-light">Sans friction.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Twist unifie votre pipeline de vente, automatise les relances et analyse chaque appel
          en temps réel — pour que vos closers se concentrent sur ce qui compte vraiment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-xl font-semibold text-white animated-gradient glow-purple flex items-center gap-2 text-base"
          >
            Démarrer gratuitement
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-xl font-semibold text-white/70 glass border border-white/10 hover:border-white/20 flex items-center gap-2 text-base transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
            </div>
            Voir la démo
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-2">
            {[
              "bg-violet-500",
              "bg-blue-500",
              "bg-indigo-500",
              "bg-purple-500",
              "bg-sky-500",
            ].map((color, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full ${color} border-2 border-[#050508] flex items-center justify-center text-xs font-bold text-white`}
              >
                {["JD", "SA", "MK", "PL", "TN"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/30">
            Rejoint par <span className="text-white/70 font-semibold">2,400+</span> équipes de vente
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
}
