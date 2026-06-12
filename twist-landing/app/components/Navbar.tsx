"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,5,8,0)", "rgba(5,5,8,0.92)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(20px)"]);

  return (
    <motion.nav
      style={{ backgroundColor: bg, backdropFilter: blur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg animated-gradient flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Twist</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {["Features", "Pricing", "Customers", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
            Login
          </a>
          <a
            href="#pricing"
            className="px-4 py-2 text-sm font-semibold text-white rounded-lg animated-gradient hover:opacity-90 transition-opacity"
          >
            Start free
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
}
