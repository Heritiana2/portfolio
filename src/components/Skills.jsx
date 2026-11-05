import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import RadarChart from './RadarChart';
import { SKILLS, TOOLS, RADAR } from '../data/portfolioData';

const FILTERS = [
  { id: 'all', label: 'Tous' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'devops', label: 'SGBD & DevOps' },
];

export default function Skills() {
  const [filter, setFilter] = useState('all');
  const filtered = SKILLS.filter((s) => filter === 'all' || s.cat === filter);

  return (
    <section id="competences" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'var(--bg2)' }}>
      <div className="orb w-[400px] h-[400px] bg-violet-700/30 top-10 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <Reveal className="flex items-center gap-3 font-mono text-sm text-cyan-400 mb-3">
          <span className="w-10 h-[2px] grad-bg rounded" />
          02 • MES COMPÉTENCES
        </Reveal>
        <Reveal as="h2" className="font-grotesk font-bold text-[clamp(2rem,4.5vw,3.2rem)] leading-tight">
          Les technos que <span className="grad-text">je maîtrise.</span>
        </Reveal>
        <Reveal as="p" className="opacity-60 mt-3 max-w-2xl">
          Clique sur une catégorie pour filtrer. Barres animées au chargement + radar de maîtrise.
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mt-8">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`filter-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl glass text-[13px] sm:text-sm font-semibold ${
                filter === f.id ? 'active' : ''
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_.9fr] gap-8 mt-8">
          <Reveal className="glass rounded-3xl p-5 sm:p-8 grad-border">
            <div className="flex flex-col gap-6">
              {filtered.map((s, i) => (
                <SkillBar key={s.name} skill={s} index={i} />
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal className="glass rounded-3xl p-5 sm:p-7">
              <h4 className="font-grotesk font-bold mb-1">Radar de maîtrise</h4>
              <p className="text-[13px] opacity-50 mb-4 font-mono">Évaluation sur projets réels</p>
              <div className="h-[260px] sm:h-[300px] text-slate-600 dark:text-slate-300">
                <RadarChart labels={RADAR.labels} values={RADAR.values} />
              </div>
            </Reveal>

            <Reveal className="glass rounded-3xl p-5 sm:p-7">
              <h4 className="font-grotesk font-bold mb-4">Outils & environnement</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                {TOOLS.map(([icon, name]) => (
                  <div
                    key={name}
                    className="glass rounded-2xl p-2 sm:p-3 text-center hover:scale-105 transition-transform cursor-default"
                  >
                    <div className="text-xl sm:text-2xl">{icon}</div>
                    <div className="text-[10px] sm:text-[12px] font-semibold mt-2 break-words">{name}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(skill.level), 80 * index);
    return () => clearTimeout(t);
  }, [skill.level, index]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
          style={{ background: `${skill.color}22`, color: skill.color }}
        >
          {skill.icon}
        </span>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[15px]">{skill.name}</span>
            <span className="font-mono text-[13px] grad-text font-bold">{skill.level}%</span>
          </div>
          <div className="text-[12px] opacity-50 font-mono">{skill.xp}</div>
        </div>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
