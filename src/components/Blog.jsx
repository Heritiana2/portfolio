import Reveal from './Reveal';
import { BLOGS } from '../data/portfolioData';

export default function Blog() {
  return (
    <section className="pb-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <Reveal as="h3" className="font-grotesk font-bold text-2xl">
            📝 Derniers articles & veille
          </Reveal>
          <a href="#" className="text-sm font-mono text-cyan-400 hover:underline">
            Tous les articles →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {BLOGS.map((b) => (
            <Reveal
              key={b.title}
              as="article"
              className="glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform group cursor-pointer"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 chip px-3 py-1 rounded-full grad-bg text-white font-bold">
                  {b.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="font-mono text-[12px] opacity-50">
                  {b.date} • {b.read} de lecture
                </div>
                <h4 className="font-grotesk font-bold mt-2 leading-snug group-hover:text-cyan-400 transition">
                  {b.title}
                </h4>
                <p className="text-sm opacity-60 mt-2">{b.desc}</p>
                <span className="text-sm font-bold text-cyan-400 mt-4 inline-block">Lire l'article →</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
