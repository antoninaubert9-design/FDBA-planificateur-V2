"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const links = {
  Produit: ["Features", "Pricing", "Changelog", "Roadmap"],
  Entreprise: ["About", "Blog", "Carrières", "Presse"],
  Légal: ["Confidentialité", "CGU", "Cookies", "Sécurité"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg animated-gradient flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Twist</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-[200px]">
              Le SaaS de closing qui transforme vos prospects en clients.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© 2025 Twist SAS. Tous droits réservés.</p>
          <p className="text-xs text-white/20">
            Fait avec <span className="text-violet-400">♥</span> pour les closers qui dominent.
          </p>
        </div>
      </div>
    </footer>
  );
}
