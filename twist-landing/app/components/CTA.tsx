"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import { useRef } from "react";

const trust = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Clock, label: "Setup en 5 minutes" },
  { icon: Star, label: "4.9/5 sur G2" },
];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 bg-[#050508] relative overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px]"
        >
          <div className="w-full h-full animated-gradient opacity-20 rounded-full blur-[120px]" />
        </motion.div>
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-violet-300 font-medium">
            2 400+ équipes font déjà confiance à Twist
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6"
        >
          Votre prochaine
          <br />
          <span className="text-gradient">deal est à un clic.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Rejoignez les meilleures équipes de vente et commencez à closer plus, plus vite.
          Pas de CB. Pas de risque.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group px-10 py-5 rounded-2xl text-lg font-bold text-white animated-gradient glow-purple flex items-center gap-3"
          >
            Essayer Twist gratuitement
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {trust.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-white/30"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
