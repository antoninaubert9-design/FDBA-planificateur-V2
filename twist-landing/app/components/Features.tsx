"use client";

import { motion, useInView } from "framer-motion";
import { BrainCircuit, LineChart, MessageSquareQuote } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: BrainCircuit,
    label: "IA Coaching",
    title: "Votre coach de vente personnel, disponible 24/7",
    description:
      "L'IA de Twist analyse chaque appel en direct, détecte les signaux d'achat, les objections et vous souffle les meilleures réponses en temps réel. Transformez chaque interaction en opportunité.",
    stats: [
      { value: "87%", label: "réduction des objections non gérées" },
      { value: "2.4x", label: "augmentation de la durée d'engagement" },
    ],
    color: "violet",
    gradient: "from-violet-600/20 via-violet-500/5 to-transparent",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    accent: "bg-violet-500",
  },
  {
    icon: LineChart,
    label: "Pipeline Analytics",
    title: "Visualisez votre revenue avant qu'il arrive",
    description:
      "Des prévisions de revenus basées sur le comportement réel de vos prospects, pas sur des intuitions. Identifiez les deals à risque avant qu'ils ne stagnent et priorisez vos efforts avec précision.",
    stats: [
      { value: "94%", label: "précision des prévisions à 30 jours" },
      { value: "-60%", label: "de deals perdus par inaction" },
    ],
    color: "blue",
    gradient: "from-blue-600/20 via-blue-500/5 to-transparent",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    accent: "bg-blue-500",
  },
  {
    icon: MessageSquareQuote,
    label: "Smart Follow-ups",
    title: "Relances ultra-personnalisées, envoyées au bon moment",
    description:
      "Twist génère et envoie automatiquement des follow-ups personnalisés selon le profil de chaque prospect. Le bon message, au bon moment, sur le bon canal — sans que vous leviez le petit doigt.",
    stats: [
      { value: "3.8x", label: "de taux de réponse vs emails génériques" },
      { value: "15min", label: "économisées par deal et par jour" },
    ],
    color: "indigo",
    gradient: "from-indigo-600/20 via-indigo-500/5 to-transparent",
    border: "border-indigo-500/20",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    accent: "bg-indigo-500",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`relative rounded-2xl glass glass-hover p-8 flex flex-col gap-6 border ${feature.border} overflow-hidden cursor-default`}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none`}
      />

      {/* Glow dot top-right */}
      <div
        className={`absolute top-4 right-4 w-2 h-2 rounded-full ${feature.accent} opacity-60 blur-[2px]`}
      />

      <div className="relative z-10 flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center shrink-0`}
        >
          <Icon className={`w-6 h-6 ${feature.iconColor}`} />
        </motion.div>
        <div>
          <span
            className={`text-xs font-semibold uppercase tracking-widest ${feature.iconColor} opacity-70`}
          >
            {feature.label}
          </span>
          <h3 className="text-xl font-bold text-white mt-1 leading-snug">
            {feature.title}
          </h3>
        </div>
      </div>

      <p className="relative z-10 text-white/50 leading-relaxed text-sm">
        {feature.description}
      </p>

      <div className="relative z-10 grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
        {feature.stats.map((stat) => (
          <div key={stat.label}>
            <p className={`text-2xl font-black ${feature.iconColor}`}>{stat.value}</p>
            <p className="text-xs text-white/30 mt-0.5 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4"
          >
            Pourquoi Twist
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4"
          >
            Tout ce dont vos closers
            <br />
            <span className="text-gradient">ont besoin pour dominer.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            Un seul outil. Trois super-pouvoirs. Des résultats mesurables dès la première semaine.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.label} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
