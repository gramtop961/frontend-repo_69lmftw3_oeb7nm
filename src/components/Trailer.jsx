import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Trailer = () => {
  return (
    <section className="relative bg-slate-900 text-white py-20">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(234,179,8,0.2),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="md:flex md:items-center md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-5/12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Get a feel for the world</h2>
            <p className="mt-3 text-white/80">Interactive 3D scene gives you a taste of the atmosphere — jagged ridges, rolling fog, and warm sunrise hues. The full game awaits on Roblox.</p>
            <a
              href="https://www.roblox.com/discover/?Keyword=Mount%20Biome%20Indonesia"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-block px-5 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 font-semibold shadow"
            >
              Jump In
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-10 md:mt-0 md:w-7/12"
          >
            <div className="h-[380px] w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-slate-800">
              <Spline scene="https://prod.spline.design/3ol9nJbWQHCv9-0P/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;
