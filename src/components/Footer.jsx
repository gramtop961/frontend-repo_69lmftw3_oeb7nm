import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg font-bold">Mount Biome Indonesia</p>
          <p className="text-white/70 text-sm">An unofficial promotional site for a Roblox experience inspired by Indonesia’s natural wonders.</p>
        </div>
        <div className="text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Mount Biome Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
