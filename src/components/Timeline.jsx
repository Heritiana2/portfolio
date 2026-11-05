import Reveal from './Reveal';
import { TIMELINE } from '../data/portfolioData';

const EDUCATION = [
  {
    badge: 'ESMIA',
    color: '#7c3aed',
    title: "Licence Informatique — ESMIA Innovation",
    meta: "2023 — 2026 • Antananarivo",
    desc: "Génie logiciel, bases de données, réseaux, développement web & mobile.",
  },
  {
    badge: 'BAC',
    color: '#22c55e',
    title: 'Baccalauréat Scientifique',
    meta: '2023 • Madagascar • Mention Bien',
    desc: 'Série scientifique, option mathématiques. Premiers pas en algorithmique.',
  },
];

export default function Timeline() {
  return (
    <section id="parcours" className="py-16 sm:py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex items-center gap-3 font-mono text-sm text-cyan-400 mb-3">
          <span className="w-10 h-[2px] grad-bg rounded" />
          04 • PARCOURS & EXPÉRIENCE
        </Reveal>
        <Reveal as="h2" className="font-grotesk font-bold text-[clamp(2rem,4.5vw,3.2rem)] mb-8 sm:mb-12">
          Mon <span className="grad-text">parcours.</span>
        </Reveal>

        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8">
          <div className="relative pl-2">
            <div className="timeline-line" />
            <div className="flex flex-col gap-6">
              {TIMELINE.map((t, i) => (
                <Reveal key={i} className="flex gap-4">
                  <div
                    className="timeline-dot text-white shrink-0 shadow-lg"
                    style={{ background: t.color }}
                  >
                    <span className="text-lg">{t.icon}</span>
                  </div>
                  <div className="glass rounded-3xl p-5 sm:p-6 flex-1 min-w-0 break-words grad-border hover:-translate-y-1 transition-transform">
                    <span
                      className="chip px-3 py-1 rounded-full font-bold"
                      style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
                    >
                      {t.period}
                    </span>
                    <h4 className="font-grotesk font-bold text-[17px] mt-3">{t.title}</h4>
                    <div className="text-[12px] font-mono opacity-50 mb-2">📍 {t.loc}</div>
                    <p className="text-sm opacity-70 leading-relaxed">{t.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {t.tags.map((x) => (
                        <span
                          key={x}
                          className="chip px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 opacity-80"
                        >
                          {x}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal className="glass rounded-3xl p-5 sm:p-7 grad-border">
              <h4 className="font-grotesk font-bold text-lg mb-5">🎓 Formation</h4>
              <div className="flex flex-col gap-5 text-sm">
                {EDUCATION.map((e) => (
                  <div key={e.title} className="flex gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold text-[11px]"
                      style={{ background: `${e.color}22`, color: e.color }}
                    >
                      {e.badge}
                    </div>
                    <div>
                      <div className="font-bold">{e.title}</div>
                      <div className="opacity-60 font-mono text-[12px]">{e.meta}</div>
                      <p className="opacity-70 mt-1">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="grad-bg rounded-3xl p-6 sm:p-7 text-white relative overflow-hidden noise">
              <div className="font-grotesk font-bold text-xl leading-snug">
                « À la recherche d'un stage pour apprendre et contribuer. »
              </div>
              <p className="text-sm opacity-90 mt-2">
                Réponse en moins de 24h • Dispo pour un échange découverte.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-5 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl text-sm hover:scale-105 transition-transform"
              >
                Me contacter →
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
