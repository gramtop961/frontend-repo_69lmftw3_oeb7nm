import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-50/40 to-transparent" />
      </div>
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 ring-1 ring-yellow-200">
          <Star className="h-4 w-4" />
          <span className="text-xs font-medium">New Season Event Live</span>
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Embark on your Indonesian expedition</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Join thousands of climbers. Earn badges, collect gear skins, and etch your name on the summit leaderboards.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://www.roblox.com/discover/?Keyword=Mount%20Biome%20Indonesia"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 shadow"
          >
            Play on Roblox
            <ExternalLink className="h-5 w-5" />
          </a>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
