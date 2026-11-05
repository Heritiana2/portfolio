import Reveal from './Reveal';
import { SERVICES } from '../data/portfolioData';
import { toast } from '../utils/toast';

const OFFERS = [
  {
    tag: 'Stage',
    price: 'Dispo',
    unit: 'L3 — 2 à 4 mois',
    desc: 'Stage de fin d\'études en développement web / mobile.',
    features: ['Développement front & back', 'Travail en équipe & Git', 'Curieux et autonome', 'Dispo Antananarivo / Remote'],
    cta: 'Proposer un stage',
    highlight: true,
  },
  {
    tag: 'Freelance étudiant',
    price: 'Sur devis',
    unit: 'petits projets',
    desc: 'Sites vitrines, portfolios, petites applications.',
    features: ['Site vitrine / portfolio', 'Application web simple', 'Intégration responsive', 'Livraison rapide'],
    cta: 'Demander un devis',
    highlight: false,
  },
  {
    tag: 'Projet académique',
    price: 'Équipe',
    unit: 'collaboration',
    desc: 'Participation à un projet d\'équipe ou associatif.',
    features: ['Développement & code review', 'Conception base de données', 'Documentation', 'Respect des délais'],
    cta: 'Collaborer',
    highlight: false,
  },
];

export default function Services() {
  const selectOffer = (offer) => {
    window.dispatchEvent(
      new CustomEvent('app:prefill', {
        detail: { message: `Bonjour Heritiana, je suis intéressé(e) par : "${offer}". Voici mon besoin : ` },
      })
    );
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    toast(`🎯 "${offer}" sélectionné`, 'Formulaire pré-rempli ci-dessous !');
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="orb w-[450px] h-[450px] bg-cyan-600/25 top-20 -left-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <Reveal className="flex items-center gap-3 font-mono text-sm text-cyan-400 mb-3">
          <span className="w-10 h-[2px] grad-bg rounded" />
          05 • SERVICES & COLLABORATION
        </Reveal>
        <Reveal as="h2" className="font-grotesk font-bold text-[clamp(2rem,4.5vw,3.2rem)] mb-8 sm:mb-12">
          Comment je peux <span className="grad-text">t'aider ?</span>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((s) => (
            <Reveal
              key={s.t}
              className="glass rounded-3xl p-5 sm:p-7 grad-border hover:-translate-y-2 transition-transform group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform"
                style={{ background: `${s.c}22` }}
              >
                {s.icon}
              </div>
              <h4 className="font-grotesk font-bold text-lg">{s.t}</h4>
              <p className="text-sm opacity-60 mt-2 leading-relaxed">{s.d}</p>
              <button
                onClick={() => selectOffer(s.t)}
                className="mt-5 text-sm font-bold text-cyan-400 hover:gap-3 transition-all inline-flex items-center gap-2"
              >
                En savoir plus →
              </button>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12">
          {OFFERS.map((o) =>
            o.highlight ? (
              <Reveal key={o.tag} className="grad-bg rounded-3xl p-[2px] hover:-translate-y-2 transition-transform relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 grad-bg text-white text-[11px] font-bold px-4 py-1 rounded-full border border-white/30 shadow-lg whitespace-nowrap">
                  ⭐ CE QUE JE RECHERCHE
                </div>
                <div className="rounded-3xl p-6 sm:p-8 h-full" style={{ background: 'var(--bg2)' }}>
                  <div className="chip uppercase tracking-widest text-cyan-400">{o.tag}</div>
                  <div className="font-grotesk font-bold text-3xl sm:text-4xl mt-3 grad-text">{o.price}</div>
                  <p className="text-sm opacity-60 mt-2">{o.desc}</p>
                  <ul className="text-sm mt-6 flex flex-col gap-3">
                    {o.features.map((f) => (
                      <li key={f}>
                        <span className="text-cyan-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => selectOffer(o.tag)}
                    className="w-full mt-7 grad-bg text-white rounded-xl py-3 font-bold text-sm shadow-lg hover:scale-[1.02] transition"
                  >
                    {o.cta} ⭐
                  </button>
                </div>
              </Reveal>
            ) : (
              <Reveal key={o.tag} className="glass rounded-3xl p-6 sm:p-8 hover:-translate-y-2 transition-transform">
                <div className="chip uppercase tracking-widest opacity-60">{o.tag}</div>
                <div className="font-grotesk font-bold text-3xl sm:text-4xl mt-3">{o.price}</div>
                <p className="text-sm opacity-60 mt-2">{o.desc}</p>
                <ul className="text-sm mt-6 flex flex-col gap-3 opacity-80">
                  {o.features.map((f) => (
                    <li key={f}>
                      <span className="text-green-400 mr-2">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => selectOffer(o.tag)}
                  className="w-full mt-7 glass rounded-xl py-3 font-bold text-sm hover:bg-white/10 transition"
                >
                  {o.cta}
                </button>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
