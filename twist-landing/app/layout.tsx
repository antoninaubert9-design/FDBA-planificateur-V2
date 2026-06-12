import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Twist — Le SaaS de closing qui performe",
  description:
    "Twist unifie votre pipeline de vente, automatise les relances et analyse chaque appel en temps réel. Closez plus, plus vite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#050508] text-white antialiased">{children}</body>
    </html>
  );
}
