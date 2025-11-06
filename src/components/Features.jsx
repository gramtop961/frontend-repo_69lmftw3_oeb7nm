import React from 'react';
import { Mountain, Leaf, Flame, Users, Map, Shield } from 'lucide-react';

const features = [
  {
    icon: Mountain,
    title: 'Epic Climbs',
    desc: 'Ascend iconic Indonesian peaks with realistic terrain, weather, and gear progression.'
  },
  {
    icon: Flame,
    title: 'Dynamic Biomes',
    desc: 'Traverse active volcanoes, misty highlands, coral coasts, and dense jungles.'
  },
  {
    icon: Users,
    title: 'Co-op Adventures',
    desc: 'Form teams, set camp, and coordinate strategies to conquer challenging routes.'
  },
  {
    icon: Leaf,
    title: 'Wildlife & Lore',
    desc: 'Collect artifacts and uncover stories inspired by Indonesian culture and nature.'
  },
  {
    icon: Map,
    title: 'Exploration Quests',
    desc: 'Daily quests and seasonal events keep the world fresh and rewarding.'
  },
  {
    icon: Shield,
    title: 'Gear & Skills',
    desc: 'Upgrade equipment, master climbing skills, and unlock unique abilities.'
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why you’ll love Mount Biome Indonesia</h2>
          <p className="mt-3 text-slate-600">Designed for explorers, climbers, and co-op fans. Every session feels like a new expedition.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
