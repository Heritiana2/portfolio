import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Download } from 'lucide-react';
import Particles from './Particles';
import { PROFILE } from '../data/portfolioData';
import { downloadCV } from '../utils/cv';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const STATS = [
  { value: 10, suffix: '+', label: "Projets réalisés" },
  { value: 3, suffix: ' ans', label: "De programmation" },
  { value: 12, suffix: '+', label: "Technologies" },
  { value: 100, suffix: '%', label: "Motivé" },
];

function Counter({ value, suffix }) {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkAndStart = () => {
      if (hasAnimated) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (inView) {
        setHasAnimated(true);
      }
    };

    checkAndStart();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );

    observer.observe(el);
    window.addEventListener('scroll', checkAndStart, { passive: true });
    window.addEventListener('resize', checkAndStart);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkAndStart);
      window.removeEventListener('resize', checkAndStart);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let current = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setDisplay(current);
    }, 25);
    return () => clearInterval(timer);
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    'Web Full-Stack.',
    'Applications Mobiles.',
    'Bases de Données SQL.',
    'Projets React & Java.',
    'Juniors en DevOps',
  ];

  useEffect(() => {
    const currentWord = words[textIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      <Particles />
      <div className="orb w-[500px] h-[500px] bg-violet-700/60 -top-40 -left-40" />
      <div className="orb w-[420px] h-[420px] bg-cyan-500/40 top-1/3 -right-32" style={{ animationDelay: '2s' }} />
      <div className="orb w-[300px] h-[300px] bg-pink-500/30 bottom-0 left-1/3" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center relative w-full">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 glass rounded-full pl-2 pr-4 py-1.5 text-xs sm:text-sm mb-6 border border-white/10">
            <span className="flex items-center gap-2 grad-bg text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" /> Dispo à partir du 21 Décembre 2026
            </span>
            <span className="opacity-90 font-medium">{PROFILE.available}</span>
          </div>

          <p className="font-mono text-cyan-400 text-sm mb-3 font-semibold">👋 Bonjour, je suis</p>

          <h1 className="font-bold leading-[1.05] tracking-tight text-4xl sm:text-6xl lg:text-7xl mb-4">
            {PROFILE.shortName}
            <br />
            <span className="grad-text">Développeur</span>
            <br />
            <span className="text-cyan-400 dark:text-cyan-300">
              {words[textIndex].substring(0, charIndex)}
            </span>
            <span className="typing-caret" />
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed opacity-80 max-w-xl">
            Étudiant en <strong className="opacity-100 font-bold">L3 Informatique à {PROFILE.school}</strong>.
            Passionné par le développement d'applications{' '}
            <span className="text-cyan-400 font-semibold">Web, Mobile et SGBD</span>. Je recherche un
            stage de fin d'études pour mettre à profit mes compétences techniques qui dure 6 mois ( du 21 décembre 2026 au 6 juin 2027 ).
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projets"
              className="grad-bg text-white font-semibold px-7 py-3.5 rounded-2xl shadow-xl shadow-purple-600/25 hover:scale-[1.03] transition-transform inline-flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" /> Voir mes projets
            </a>

            <button
              onClick={downloadCV}
              className="glass font-semibold px-7 py-3.5 rounded-2xl transition inline-flex items-center gap-2 grad-border hover:bg-white/10"
            >
              <Download className="w-4 h-4 text-cyan-400" /> Télécharger mon CV
            </button>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-3.5 rounded-2xl font-mono text-sm opacity-80 hover:opacity-100 transition inline-flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-xl">
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center grad-border">
                <div className="font-grotesk font-bold text-2xl grad-text">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[12px] opacity-60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne de droite : Modèle d'image arrondie/ovale avec badges flottants à la manière du modèle */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end px-4 sm:px-0">
          <div className="relative w-[300px] sm:w-[360px] h-[400px] flex items-center justify-center">
            
            {/* Halo de lumière en arrière-plan */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-cyan-400/30 blur-3xl rounded-full scale-110" />

            {/* Container arrondi ovale style portrait */}
            <div className="relative w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] rounded-[100px] p-2 bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-transparent border border-white/20 shadow-2xl backdrop-blur-sm overflow-hidden">
              <div className="w-full h-full rounded-[92px] overflow-hidden bg-slate-950 relative">
                <img 
                  src={PROFILE.avatar || "/images/mon-avatar.jpeg"} 
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-center"
                />

                {/* Petit badge nom/infos intégré en bas comme dans le modèle */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-center">
                  <h3 className="font-bold text-sm text-white">{PROFILE.name}</h3>
                  <p className="text-[11px] font-mono text-cyan-300 mt-0.5">L3 Informatique • Dev Full-Stack</p>
                </div>
              </div>
            </div>

            {/* Badge flottant haut gauche : React */}
            <div className="float-badge absolute -left-4 sm:-left-8 top-6 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl px-3.5 py-2.5 flex items-center gap-3 shadow-2xl z-20">
              <div className="w-8 h-8 rounded-lg bg-[#61dafb]/15 text-[#61dafb] flex items-center justify-center text-sm font-bold">
                ⚛️
              </div>
              <div>
                <div className="text-[12px] font-bold text-white">React</div>
                <div className="text-[10px] text-slate-300">Web & Mobile</div>
              </div>
            </div>

            {/* Badge flottant milieu droit : Node.js */}
            <div className="float-badge d2 absolute -right-4 sm:-right-8 top-1/3 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl px-3.5 py-2.5 flex items-center gap-3 shadow-2xl z-20">
              <div className="w-8 h-8 rounded-lg bg-green-500/15 text-green-400 flex items-center justify-center text-sm font-bold">
                🟢
              </div>
              <div>
                <div className="text-[12px] font-bold text-white">Node.js</div>
                <div className="text-[10px] text-slate-300">API REST</div>
              </div>
            </div>

            {/* Badge flottant bas gauche : SQL / SGBD */}
            <div className="float-badge d3 absolute -left-2 sm:-left-6 bottom-10 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl px-3.5 py-2.5 flex items-center gap-3 shadow-2xl z-20">
              <div className="w-8 h-8 rounded-lg bg-indigo-400/15 text-indigo-300 flex items-center justify-center text-sm font-bold">
                🗄️
              </div>
              <div>
                <div className="text-[12px] font-bold text-white">SQL / SGBD</div>
                <div className="text-[10px] text-slate-300">MySQL • PostgreSQL</div>
              </div>
            </div>

            {/* Badge bonus bas droit style "+6 mois stage" comme le "+4 ans" de la photo */}
            <div className="float-badge d2 absolute -right-2 sm:-right-4 bottom-6 bg-cyan-500/90 text-slate-950 font-bold rounded-2xl px-3 py-1.5 text-[11px] shadow-xl z-20 border border-cyan-300">
              ⚡ 6 mois de stage
            </div>

          </div>
        </div>
      </div>

      <a
        href="#apropos"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition text-[11px] font-mono tracking-widest uppercase"
      >
        Scroll
        <span className="w-6 h-10 rounded-full border border-current flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </span>
      </a>
    </section>
  );
};

export default Hero;