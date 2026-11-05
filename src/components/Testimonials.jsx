import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import Reveal from './Reveal';
import { TESTIS } from '../data/portfolioData';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = (i) => setIndex((i + TESTIS.length) % TESTIS.length);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % TESTIS.length), 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section id="temoignages" className="py-16 sm:py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="flex items-center gap-3 font-mono text-sm text-cyan-400 mb-3">
          <span className="w-10 h-[2px] grad-bg rounded" />
          06 • ILS PARLENT DE MOI
        </Reveal>
        <Reveal as="h2" className="font-grotesk font-bold text-[clamp(2rem,4.5vw,3.2rem)] mb-8 sm:mb-10">
          Ce qu'ils <span className="grad-text">disent.</span>
        </Reveal>

        <Reveal className="glass rounded-3xl overflow-hidden grad-border relative">
          <div className="overflow-hidden">
            <div className="testi-track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {TESTIS.map((t) => (
                <div key={t.name} className="min-w-full p-5 sm:p-10">
                  <div className="flex text-yellow-400 gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-base sm:text-xl leading-relaxed font-medium break-words">« {t.text} »</p>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border border-white/20 shrink-0"
                    />
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-[13px] opacity-60">{t.role}</div>
                    </div>
                    <span className="ml-auto text-2xl">in</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-between gap-3 px-4 sm:px-8 py-4 sm:py-5 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex gap-2">
              {TESTIS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Témoignage ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 grad-bg' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(index - 1)}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:text-white hover:grad-bg transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(index + 1)}
                className="w-11 h-11 rounded-xl grad-bg text-white flex items-center justify-center hover:scale-105 transition"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
