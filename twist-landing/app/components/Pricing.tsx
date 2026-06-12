"use client";

import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 49, annual: 39 },
    description: "Pour les solopreneurs et freelances qui démarrent en closing.",
    features: [
      "1 closer",
      "50 deals / mois",
      "Pipeline basique",
      "Analytics 7 jours",
      "Email follow-ups auto",
      "Support communauté",
    ],
    cta: "Démarrer gratuitement",
    color: "border-white/10",
    bg: "bg-white/[0.02]",
    ctaClass: "bg-white/10 hover:bg-white/15 text-white",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 129, annual: 99 },
    description: "L'arme secrète des équipes de vente qui veulent dominer.",
    features: [
      "5 closers",
      "Deals illimités",
      "Pipeline avancé + prévisions",
      "Analytics 90 jours",
      "IA Coaching en temps réel",
      "Smart follow-ups (tous canaux)",
      "Intégrations CRM",
      "Support prioritaire",
    ],
    cta: "Commencer l'essai Pro",
    color: "border-violet-500/40",
    bg: "bg-violet-950/20",
    ctaClass: "animated-gradient text-white glow-purple",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 349, annual: 279 },
    description: "Pour les grandes équipes avec des exigences sur mesure.",
    features: [
      "Closers illimités",
      "Deals illimités",
      "Toutes les features Pro",
      "Analytics illimités",
      "IA personnalisée sur vos données",
      "SSO & SAML",
      "SLA 99.99%",
      "Account manager dédié",
      "Onboarding white-glove",
    ],
    cta: "Contacter les ventes",
    color: "border-blue-500/20",
    bg: "bg-blue-950/10",
    ctaClass: "bg-white/10 hover:bg-white/15 text-white",
    popular: false,
  },
];

function PricingCard({
  plan,
  index,
  annual,
}: {
  plan: (typeof plans)[0];
  index: number;
  annual: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const price = annual ? plan.price.annual : plan.price.monthly;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: plan.popular ? 1.03 : 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: plan.popular ? -4 : -6, transition: { duration: 0.25 } }}
      className={`relative rounded-2xl border ${plan.color} ${plan.bg} p-8 flex flex-col gap-6 overflow-hidden`}
    >
      {plan.popular && (
        <>
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30"
          >
            <Sparkles className="w-3 h-3 text-violet-300" />
            <span className="text-xs font-semibold text-violet-300">Populaire</span>
          </motion.div>
        </>
      )}

      <div>
        <div className="flex items-center gap-2 mb-2">
          {plan.popular && <Zap className="w-4 h-4 text-violet-400" fill="currentColor" />}
          <h3 className="text-lg font-bold text-white">{plan.name}</h3>
        </div>
        <p className="text-sm text-white/40 leading-relaxed">{plan.description}</p>
      </div>

      <div className="flex items-end gap-1">
        <motion.span
          key={price}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-black text-white"
        >
          {price}€
        </motion.span>
        <span className="text-white/30 mb-2 text-sm">/ mois</span>
      </div>

      <motion.a
        href="#"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3.5 rounded-xl text-sm font-semibold text-center transition-colors ${plan.ctaClass}`}
      >
        {plan.cta}
      </motion.a>

      <ul className="flex flex-col gap-3 pt-2 border-t border-white/5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <span className="text-sm text-white/60">{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-32 bg-[#050508] relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4"
          >
            Investissez dans
            <br />
            <span className="text-gradient">vos performances.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-lg mb-8"
          >
            14 jours d'essai gratuit. Aucune carte bancaire requise.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 glass rounded-full p-1 border border-white/10"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !annual ? "bg-white text-black" : "text-white/40 hover:text-white/70"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                annual ? "bg-white text-black" : "text-white/40 hover:text-white/70"
              }`}
            >
              Annuel
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                -20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} annual={annual} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-white/25 text-sm mt-10"
        >
          Tous les prix sont HT · Facturation sécurisée via Stripe · Annulation à tout moment
        </motion.p>
      </div>
    </section>
  );
}
