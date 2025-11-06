import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Trailer from './components/Trailer';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-extrabold tracking-tight text-xl">MBI</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            <a href="#play" className="hover:text-indigo-600">Play</a>
          </nav>
          <a
            href="https://www.roblox.com/discover/?Keyword=Mount%20Biome%20Indonesia"
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
          >
            Play Now
          </a>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Features />
        <Trailer />
        <CTA />

        <section id="faq" className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold">Is this the official Roblox page?</h3>
                <p className="mt-2 text-slate-600">This is a promotional website created for fans and players. Click any Play button to open the experience on Roblox.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold">Do I need a powerful PC?</h3>
                <p className="mt-2 text-slate-600">Roblox runs on a wide range of devices. For best visuals, use a modern browser and enable graphics quality in Roblox settings.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold">Can I play with friends?</h3>
                <p className="mt-2 text-slate-600">Yes. Form a party, pick a route, and climb together. Team strategies shine in tougher biomes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
