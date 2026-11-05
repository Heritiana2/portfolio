import { useMemo, useState } from 'react';
import { Search, ArrowRight, Ghost } from 'lucide-react';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';
import { PROJECTS } from '../data/portfolioData';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const CATS = [
  { id: 'all', label: 'Tous' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ia', label: 'IA & 3D' },
];

export default function Projects() {
  const [cat, setCat] = useState('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const counts = useMemo(() => {
    const c = { all: PROJECTS.length };
    CATS.forEach(({ id }) => {
      if (id !== 'all') c[id] = PROJECTS.filter((p) => p.cats.includes(id)).length;
    });
    return c;
  }, []);

  const filtered = PROJECTS.filter((p) => {
    const matchCat = cat === 'all' || p.cats.includes(cat);
    const haystack = `${p.title} ${p.tech.join(' ')} ${p.desc}`.toLowerCase();
    return matchCat && haystack.includes(search.toLowerCase());
  });

  return (
    <section id="projets" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex items-center gap-3 font-mono text-sm text-cyan-400 mb-3">
          <span className="w-10 h-[2px] grad-bg rounded" />
          03 • PORTFOLIO / PROJETS
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <Reveal as="h2" className="font-grotesk font-bold text-[clamp(2rem,4.5vw,3.2rem)] leading-tight">
            Des projets qui <span className="grad-text">parlent d'eux-mêmes.</span>
          </Reveal>
          <Reveal className="relative w-full lg:w-[320px]">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-50" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un projet…"
              className="field w-full rounded-2xl pl-11 pr-4 py-3 text-sm placeholder:opacity-50"
            />
          </Reveal>
        </div>

        <Reveal className="flex flex-wrap gap-2 mb-8">
          {CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`filter-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl glass text-[13px] sm:text-sm font-semibold ${
                cat === c.id ? 'active' : ''
              }`}
            >
              {c.label} ({counts[c.id]})
            </button>
          ))}
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const hasGithub = p.github && p.github !== '#';
            const hasDemo = p.demo && p.demo !== '#';
            return (
            <article
              key={p.id}
              className="proj-card glass rounded-3xl overflow-hidden grad-border flex flex-col cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img src={p.img} alt={p.title} className="proj-img w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 chip px-3 py-1.5 rounded-full grad-bg text-white font-bold uppercase">
                  {p.cat}
                </span>
                <span className="absolute top-3 right-3 chip px-3 py-1.5 rounded-full bg-black/60 text-white backdrop-blur border border-white/20">
                  {p.year}
                </span>
                <div className="absolute bottom-3 left-4 right-4 flex gap-2 flex-wrap">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="chip px-2.5 py-1 rounded-lg bg-white/15 text-white backdrop-blur border border-white/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 min-w-0">
                <h3 className="font-grotesk font-bold text-[16px] sm:text-[17px] leading-snug break-words">{p.title}</h3>
                <p className="text-[13.5px] opacity-60 mt-2 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex items-center gap-2 mt-5">
                  <button className="flex-1 grad-bg text-white text-sm font-bold py-2.5 rounded-xl inline-flex items-center justify-center gap-1">
                    Voir détails <ArrowRight className="w-3 h-3" />
                  </button>
                  {hasGithub && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Code source de ${p.title}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:scale-110 transition"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {hasDemo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Démo de ${p.title}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:scale-110 transition text-cyan-400"
                    >
                      <ArrowRight className="w-4 h-4 -rotate-45" />
                    </a>
                  )}
                  {!hasGithub && !hasDemo && (
                    <span className="h-11 px-3 rounded-xl glass flex items-center justify-center text-[11px] font-bold uppercase tracking-wide opacity-60">
                      Concept
                    </span>
                  )}
                </div>
              </div>
            </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 opacity-60">
            <Ghost className="w-10 h-10 mx-auto mb-4" />
            Aucun projet trouvé. Essaie un autre mot-clé.
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
