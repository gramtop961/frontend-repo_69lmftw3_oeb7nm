import React from 'react';
import { Rocket, Play, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-indigo-600 to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm mb-6">
              <Rocket className="h-4 w-4 text-yellow-300" />
              <span className="text-xs font-medium tracking-wide">Official Promotion</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Mount Biome Indonesia
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl">
              Conquer towering volcanoes, lush rainforests, and hidden valleys inspired by Indonesia’s breathtaking landscapes. Team up with friends, unlock gear, and master the biomes in this Roblox adventure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.roblox.com/discover/?Keyword=Mount%20Biome%20Indonesia"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-yellow-300 text-slate-900 font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <Play className="h-5 w-5" />
                Play Now on Roblox
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition"
              >
                <Compass className="h-5 w-5" />
                Explore Features
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <img
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1600&auto=format&fit=crop"
                alt="Indonesian mountain landscape"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
