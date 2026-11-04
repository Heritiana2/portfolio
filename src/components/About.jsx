import { useState, useMemo } from 'react';
import { MapPin, Cake, Phone, Briefcase, Copy } from 'lucide-react';
import Reveal from './Reveal';
import { PROFILE } from '../data/portfolioData';
import { toast } from '../utils/toast';

const TABS = [
  { id: 'infos', label: 'Infos clés' },
  { id: 'langues', label: 'Langues' },
  { id: 'passions', label: 'Passions' },
];

const INFO = [
  { k: 'Formation', v: 'L3 Informatique — ESMIA Innovation (2023-2026)' },
  { k: 'Statut', v: '● Disponible pour un stage', green: true },
  { k: 'Rythme', v: '6 mois • Antananarivo' },
  { k: 'Spécialités', v: 'Web, Mobile, SGBD' },
  { k: 'Méthodo', v: 'Agile • Git flow • Clean Code' },
  { k: 'Anglais technique', v: 'Lecture de docs • B2' },
];

const LANGUES = [
  { flag: '🇲🇬', name: 'Malagasy', level: 'Natif', w: 100 },
  { flag: '🇫🇷', name: 'Français', level: 'Courant', w: 88 },
  { flag: '🇬🇧', name: 'Anglais', level: 'Débutant', w: 68 },
];

const PASSIONS = [
  '💻 Veille tech',
  '🎮 Jeux vidéo',
  '🎵 Musique',
  '🌱 Open-source',
  '⚽ Football',
  '✈️ Voyages',
  '🧩 Algorithmes',
];

const SOCIALS = [
  { icon: 'github', href: PROFILE.github, hover: 'hover:bg-slate-800' },
  { icon: 'linkedin', href: PROFILE.linkedin, hover: 'hover:bg-[#0a66c2]' },
  { icon: 'x', href: '#', hover: 'hover:bg-black' },
  { icon: 'mail', href: `mailto:${PROFILE.email}`, hover: 'hover:bg-[#ea4335]' },
];

const SocialIcons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.24-8 4.99-8-4.99V6l8 5 8-5v2.24Z" />
    </svg>
  ),
};

function Heatmap() {
  return (
    <div className="overflow-x-auto py-2">
      <img
        src={`https://ghchart.rshah.org/7c3aed/${PROFILE.github.split('/').pop()}`}
        alt="Activité GitHub de Heritiana"
        className="w-full min-w-[500px] h-auto rounded-lg filter drop-shadow opacity-90 hover:opacity-100 transition"
      />
    </div>
  );
}

export default function About() {
  const [tab, setTab] = useState('infos');

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email).then(() => toast('📋 Email copié !', PROFILE.email));
  };

  return (
    <section id="apropos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex items-center gap-3 font-mono text-sm text-cyan-400 mb-3">
          <span className="w-10 h-[2px] grad-bg rounded" />
          01 • À PROPOS DE MOI
        </Reveal>
        <Reveal
          as="h2"
          className="font-grotesk font-bold text-[clamp(2rem,4.5vw,3.2rem)] leading-tight mb-12"
        >
          Étudiant passionné,
          <br />
          <span className="grad-text">Développeur juniors d'applications.</span>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal className="glass rounded-3xl p-7 sm:p-9 grad-border noise relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl grad-bg flex items-center justify-center font-grotesk font-bold text-white text-2xl">
                H
              </div>
              <div>
                <h3 className="font-grotesk font-bold text-xl">Salut, moi c'est {PROFILE.shortName} 👋</h3>
                <p className="font-mono text-[13px] opacity-60">{PROFILE.email}</p>
              </div>
              <button
                onClick={copyEmail}
                title="Copier l'email"
                className="ml-auto w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition"
              >
                <Copy className="w-5 h-5 text-cyan-400" />
              </button>
            </div>
            <p className="leading-relaxed opacity-75">
              Je suis étudiant en <strong>L3 Informatique à {PROFILE.school}</strong>, passionné par la
              conception d'applications <strong>web et mobiles</strong>. J'aime transformer une idée en un
              produit fonctionnel, du modèle de données à l'interface.
            </p>
            <p className="leading-relaxed opacity-75 mt-4">
              Ma philosophie :{' '}
              <em className="text-cyan-400 not-italic font-semibold">
                « apprendre en construisant, et soigner chaque détail. »
              </em>{' '}
              Quand je ne code pas, je fais de la veille tech, je chante ou je joue aux jeux vidéo.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['🎯 Rigoureux', '⚡ Curieux', '🎨 Créatif', '🤝 Esprit d\'équipe'].map((t) => (
                <span
                  key={t}
                  className="chip px-3 py-1.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-7 text-[14px]">
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <MapPin className="w-4 h-4 text-pink-400" /> {PROFILE.location}
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <Cake className="w-4 h-4 text-violet-400" /> 19 ans
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <Phone className="w-4 h-4 text-cyan-400" /> {PROFILE.phone}
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <Briefcase className="w-4 h-4 text-lime-300" /> Recherche de stage
              </div>
            </div>
            <div className="flex gap-3 mt-7">
              {SOCIALS.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl glass flex items-center justify-center hover:text-white hover:scale-110 transition-all ${s.hover}`}
                >
                  {SocialIcons[s.icon]}
                </a>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal className="glass rounded-3xl p-7 grad-border">
              <div className="flex gap-2 mb-5 flex-wrap">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`tab-btn px-5 py-2 rounded-xl text-sm font-semibold transition ${
                      tab === t.id ? 'active' : 'glass'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {tab === 'infos' && (
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  {INFO.map((item) => (
                    <div key={item.k}>
                      <div className="opacity-50 text-[12px] font-mono uppercase mb-1">{item.k}</div>
                      <div className={`font-semibold ${item.green ? 'text-green-400' : ''}`}>{item.v}</div>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'langues' && (
                <div className="flex flex-col gap-4">
                  {LANGUES.map((l) => (
                    <div key={l.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold">
                          {l.flag} {l.name}
                        </span>
                        <span className="font-mono opacity-60">{l.level}</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-fill" style={{ width: `${l.w}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'passions' && (
                <div className="flex flex-wrap gap-2">
                  {PASSIONS.map((p) => (
                    <span key={p} className="px-4 py-2 rounded-xl glass text-sm">
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>

              <Reveal className="glass rounded-3xl p-7">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-grotesk font-bold flex items-center gap-2">
                  Activité Git
                  <span className="text-[11px] font-mono opacity-50 font-normal">En direct depuis GitHub</span>
                </h4>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/30 text-xs hover:scale-105 transition"
                >
                  🟢 @heritiana2
                </a>
              </div>
              
              {/* Vrai graphe GitHub */}
              <Heatmap />

              <div className="flex justify-between text-[11px] font-mono opacity-50 mt-3">
                <span>Moins</span>
                <span>Contributions réelles des 12 derniers mois</span>
                <span>Plus</span>
              </div>
            </Reveal>
            
            <Reveal className="grid grid-cols-3 gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-4 text-center hover:scale-[1.04] transition-transform grad-border"
              >
                <div className="text-2xl">in</div>
                <div className="text-[13px] font-bold mt-2">LinkedIn</div>
                <div className="text-[11px] opacity-60">Réseau pro</div>
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-4 text-center hover:scale-[1.04] transition-transform grad-border"
              >
                <div className="text-2xl">🐙</div>
                <div className="text-[13px] font-bold mt-2">GitHub</div>
                <div className="text-[11px] opacity-60">Mes projets</div>
              </a>
              <div className="glass rounded-2xl p-4 text-center grad-border">
                <div className="text-2xl">🎓</div>
                <div className="text-[13px] font-bold mt-2">L3</div>
                <div className="text-[11px] opacity-60">Informatique</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
