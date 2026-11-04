import { useEffect } from 'react';
import { X, Globe, Check } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasDemo = project.demo && project.demo !== '#';
  const hasGithub = project.github && project.github !== '#';

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 modal-bg"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="glass rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto grad-border relative"
        style={{ background: 'var(--bg2)' }}
      >
        <div className="relative h-64 sm:h-80">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1e] via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/60 backdrop-blur text-white flex items-center justify-center hover:scale-110 transition border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-5 left-6 right-6">
            <span className="chip px-3 py-1 rounded-full grad-bg text-white font-bold uppercase text-[11px]">
              {project.cat} • {project.year}
            </span>
            <h3 className="font-grotesk font-bold text-2xl text-white mt-2 leading-tight">{project.title}</h3>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="chip px-3 py-1.5 rounded-lg bg-violet-500/15 text-violet-300 border border-violet-500/30"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="opacity-75 leading-relaxed text-[15px]">{project.long}</p>

          <div className="grid grid-cols-3 gap-3 my-6">
            {project.stats.map(([v, l]) => (
              <div key={l} className="glass rounded-2xl p-4 text-center">
                <div className="font-grotesk font-bold text-xl grad-text">{v}</div>
                <div className="text-[11px] opacity-60 mt-1">{l}</div>
              </div>
            ))}
          </div>

          <h4 className="font-grotesk font-bold mb-3">✨ Fonctionnalités clés</h4>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm mb-6">
            {project.features.map((f) => (
              <li key={f} className="glass rounded-xl px-4 py-3">
                <Check className="w-4 h-4 text-green-400 inline mr-2" />
                {f}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-3 gap-3 text-sm mb-6">
            <div className="glass rounded-xl p-3">
              <div className="font-mono text-[11px] opacity-50">RÔLE</div>
              <div className="font-bold">{project.role}</div>
            </div>
            <div className="glass rounded-xl p-3">
              <div className="font-mono text-[11px] opacity-50">DURÉE</div>
              <div className="font-bold">{project.duration}</div>
            </div>
            <div className="glass rounded-xl p-3">
              <div className="font-mono text-[11px] opacity-50">ANNÉE</div>
              <div className="font-bold">{project.year}</div>
            </div>
          </div>

          <div className="flex gap-3">
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 grad-bg text-white text-center font-bold py-3.5 rounded-2xl text-sm hover:scale-[1.02] transition inline-flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" /> Voir la démo
              </a>
            )}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass text-center font-bold py-3.5 rounded-2xl text-sm hover:bg-white/10 transition"
              >
                Code source
              </a>
            )}
            {!hasDemo && !hasGithub && (
              <div className="flex-1 glass rounded-2xl p-4 text-center text-sm opacity-70">
                Projet conceptuel — démo et code source à venir.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
